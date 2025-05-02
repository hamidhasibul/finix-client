import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "./ui/button";
import useModal from "@/hooks/use-modal";
import JoinEventModal from "./join-event-modal";
import { EVENT_DETAILS } from "@/lib/data";

export default function JoinEventCard() {
  const joinEventModal = useModal();

  return (
    <>
      <JoinEventModal
        isOpen={joinEventModal.isOpen}
        onClose={joinEventModal.handleClose}
      />
      <Card className="shadow-none border-0">
        <CardContent>
          <div className="flex items-center justify-between border py-5 px-4 rounded-xl">
            <p className="text-red-400 font-medium">
              {EVENT_DETAILS.totalSpots - EVENT_DETAILS.registeredPlayers} spots
              left
            </p>
            <p className="font-semibold">
              {EVENT_DETAILS.fee}
              {EVENT_DETAILS.currency}/player{" "}
              <span className="font-light text-gray-500">(both)</span>
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            size={"lg"}
            className="w-full bg-emerald-300 hover:bg-emerald-400 text-black font-semibold text-base h-12 rounded-full"
            onClick={joinEventModal.handleOpen}
          >
            Join Event
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
