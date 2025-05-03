import { EVENT_DETAILS } from "@/lib/data";
import difficultyBeginnerIcon from "@/assets/difficulty-beginner-icon.svg";
import { useState } from "react";
import { Button } from "./ui/button";
import { Calendar1, CheckSquare, Clock } from "lucide-react";
import hostImage from "@/assets/images/host-image.png";

export default function EventInfoTab() {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => setIsExpanded(!isExpanded);

  const isLongText = EVENT_DETAILS.desription.length > 300;

  const displayText =
    isExpanded || !isLongText
      ? EVENT_DETAILS.desription
      : EVENT_DETAILS.desription.slice(0, 300) + "...";
  return (
    <div className="w-full">
      {/* Tags */}
      <div className="flex flex-col md:flex-row items-center justify-between py-14 border-b">
        <div className="flex items-center gap-4">
          <div className="bg-cyan-100 py-1.5 px-2 rounded-full">
            <p className="text-lg text-gray-600">{EVENT_DETAILS.sportType}</p>
          </div>
          <div className="bg-cyan-100 py-1.5 px-2 rounded-full">
            <p className="text-lg text-gray-600">{EVENT_DETAILS.misc}</p>
          </div>
          <div className="bg-pink-100 py-1.5 px-2 rounded-full">
            <p className="text-lg text-gray-600">{EVENT_DETAILS.gender}</p>
          </div>
          <div className="bg-purple-100 py-1.5 px-2 rounded-full">
            <p className="text-lg text-gray-600">{EVENT_DETAILS.ageLimit}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img src={difficultyBeginnerIcon} alt="..." />
          <p className="text-lg text-gray-600">{EVENT_DETAILS.skillLevel}</p>
        </div>
      </div>

      {/* About */}

      <div className="py-14 border-b">
        <div className="space-y-8">
          <h4 className="font-bold text-3xl">About this event</h4>
          <p>
            {displayText} <br />
            {isLongText && (
              <button
                onClick={toggleReadMore}
                className=" text-blue-600 underline hover:text-blue-800 mt-2 cursor-pointer"
              >
                {isExpanded ? "Read less" : "Read more"}
              </button>
            )}
          </p>
        </div>
      </div>

      {/* Location */}

      <div className="py-14 border-b">
        <div className="space-y-8">
          <h4 className="font-bold text-3xl">Location</h4>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-center justify-between">
            <div className="space-y-2">
              <h5 className="font-semibold text-2xl text-gray-600">
                {EVENT_DETAILS.venue}
              </h5>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                corporis.
              </p>
            </div>

            <Button
              variant={"outline"}
              className="rounded-full text-gray-600 text-lg border-gray-600 shadow-none bg-transparent"
            >
              Open Maps
            </Button>
          </div>
        </div>
      </div>

      {/* Good to know */}

      <div className="py-14 border-b">
        <div className="space-y-8">
          <h4 className="font-bold text-3xl">Good to know</h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Highights */}

            <div className="bg-[#e86c52] text-white p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Highlights</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Calendar1 className="h-4 w-4 mt-0.5" />
                  <span>{EVENT_DETAILS.date}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="h-4 w-4 mt-0.5" />
                  <span>{EVENT_DETAILS.time}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="h-4 w-4 mt-0.5" />
                  <span>Arrive 15 min before start</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="h-4 w-4 mt-0.5" />
                  <span>Venue booked</span>
                </li>
              </ul>
            </div>

            {/* Refund Policy */}

            <div className="bg-[#34735f] text-white p-4 rounded-lg md:col-span-2">
              <h3 className="font-bold text-lg mb-3">
                Refund & cancellation policy
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>Full refund if host cancels the game</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>Full refund if you cancel 24+ hours in advance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>
                    Full refund if game is cancelled due to low attendance
                  </span>
                </li>
              </ul>
              <div className="text-right mt-2">
                <button className="text-white text-xs">Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-14">
        <div className="space-y-8">
          <h4 className="font-bold text-3xl">Hosted by</h4>

          <div className="bg-[#4a5568] text-white p-6 rounded-lg md:w-3/4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-shrink-0">
                <img
                  src={hostImage}
                  alt="Alex Mercer"
                  className="rounded-full border-2 border-white"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-medium">Alex Mercer</h3>
                <div className="text-sm text-gray-200 space-y-0.5">
                  <p>23 activities hosted</p>
                  <p>4.5 host rating</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-0 w-full sm:w-auto">
                <Button className="bg-[#f8e8d8] hover:bg-[#f0d6b9] text-black rounded-full font-medium">
                  Message
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white bg-transparent hover:bg-white/10 rounded-full font-medium"
                >
                  View profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
