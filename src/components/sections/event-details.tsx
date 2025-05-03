import EventHeading from "@/components/event-heading";
import JoinEventCard from "@/components/join-event-card";
import EventTabs from "@/components/event-tabs";

export default function EventDetails() {
  return (
    <section className="container mx-auto py-10 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Event Details */}

        <div className="md:col-span-2">
          <EventHeading />
        </div>
        {/* Join Card */}

        <div className="">
          <JoinEventCard />
        </div>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="md:col-span-2">
          <EventTabs />
        </div>
      </div>
    </section>
  );
}
