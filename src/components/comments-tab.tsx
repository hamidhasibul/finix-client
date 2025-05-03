import { Comment, comments } from "@/lib/data";
import { CornerDownRight, MoreVertical } from "lucide-react";
import { Input } from "./ui/input";

export default function CommentsTab() {
  const commentThreads: Record<number, Comment[]> = {};
  const topLevelComments: Comment[] = [];

  comments.forEach((comment) => {
    if (comment.replyToId) {
      if (!commentThreads[comment.replyToId]) {
        commentThreads[comment.replyToId] = [];
      }
      commentThreads[comment.replyToId].push(comment);
    } else {
      topLevelComments.push(comment);
    }
  });
  return (
    <div className="w-full my-4 bg-white p-4 rounded-xl">
      <div className="space-y-4">
        {topLevelComments.map((comment) => (
          <div key={comment.id} className="space-y-2">
            <CommentBubble comment={comment} />

            {commentThreads[comment.id] && (
              <div className="pl-6 space-y-2">
                {commentThreads[comment.id].map((reply) => (
                  <CommentBubble key={reply.id} comment={reply} />
                ))}
              </div>
            )}

            <button className="flex items-center gap-1 text-gray-500 text-sm ml-2">
              <CornerDownRight className="h-4 w-4" />
              <span>Reply</span>
            </button>
          </div>
        ))}

        <div className="mt-6">
          <Input
            placeholder="Write a comment"
            className="rounded-full bg-white border-gray-200"
          />
        </div>
      </div>
    </div>
  );
}

function CommentBubble({ comment }: { comment: Comment }) {
  const isTopLevel = !comment.replyToId;

  return (
    <div
      className={`rounded-lg p-3 ${
        isTopLevel ? "bg-[#2c7a7b] text-[#FDE8CD]" : "bg-[#f8e8d8]"
      }`}
    >
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center font-medium text-sm ${
              isTopLevel
                ? "bg-[#FDE8CD] text-[#2c7a7b]"
                : "bg-[#2c7a7b] text-[#FDE8CD]"
            }`}
          >
            {comment.user.initials}
          </div>
          <span className="font-medium">{comment.user.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs opacity-80">{comment.time}</span>
          <button>
            <MoreVertical className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="mt-1 ml-10">{comment.text}</div>
    </div>
  );
}
