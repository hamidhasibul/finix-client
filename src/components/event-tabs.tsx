import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EventInfoTab from "./event-info-tab";
import PlayersTab from "./players-tab";
import CommentsTab from "./comments-tab";

export default function EventTabs() {
  return (
    <Tabs className="w-full" defaultValue="info">
      <TabsList className="w-full grid grid-cols-3 bg-transparent border-b border-gray-200 rounded-none h-auto p-0">
        <TabsTrigger
          value="info"
          className="data-[state=active]:border-b-2 data-[state=active]:border-red-400 data-[state=active]:text-red-400 rounded-none data-[state=active]:bg-transparent h-10 text-base font-medium border-0 data-[state=active]:shadow-none"
        >
          Info
        </TabsTrigger>

        <TabsTrigger
          value="players"
          className="data-[state=active]:border-b-2 data-[state=active]:border-red-400 data-[state=active]:text-red-400 rounded-none data-[state=active]:bg-transparent h-10 text-base font-medium border-0 data-[state=active]:shadow-none"
        >
          Player
        </TabsTrigger>

        <TabsTrigger
          value="comments"
          className="data-[state=active]:border-b-2 data-[state=active]:border-red-400 data-[state=active]:text-red-400 rounded-none data-[state=active]:bg-transparent h-10 text-base font-medium border-0 data-[state=active]:shadow-none"
        >
          Comments
        </TabsTrigger>
      </TabsList>

      <TabsContent value="info">
        <EventInfoTab />
      </TabsContent>
      <TabsContent value="players">
        <PlayersTab />
      </TabsContent>
      <TabsContent value="comments">
        <CommentsTab />
      </TabsContent>
    </Tabs>
  );
}
