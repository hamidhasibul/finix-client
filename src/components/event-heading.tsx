import { EllipsisVertical, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EVENT_DETAILS } from "@/lib/data";
import heartIcon from "@/assets/heart-icon.svg";

export default function EventHeading() {
  return (
    <div className="flex justify-between">
      {/* Event Info */}

      <div className="">
        <h3 className="font-bold text-4xl md:text-5xl mb-4">
          {EVENT_DETAILS.title}
        </h3>
        <p className="text-xl md:text-2xl text-[#4a4a4a]">
          {EVENT_DETAILS.venue}
        </p>
        <p className="text-xl md:text-2xl text-[#4a4a4a]">
          {EVENT_DETAILS.date} from {EVENT_DETAILS.time}
        </p>
      </div>
      {/* Action Buttons */}

      <div className="xl:space-x-2 space-x-1 hidden md:flex">
        <Button
          size={"icon"}
          variant={"ghost"}
          className="rounded-full border cursor-pointer"
        >
          <Upload className="h-6 w-6" />
        </Button>

        <Button
          size={"icon"}
          variant={"ghost"}
          className="rounded-full border cursor-pointer"
        >
          <img src={heartIcon} alt="..." />
        </Button>

        <Button size={"icon"} variant={"ghost"} className="cursor-pointer">
          <EllipsisVertical />
        </Button>
      </div>
    </div>
  );
}
