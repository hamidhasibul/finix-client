import EventHeading from "../event-heading";
import JoinEventCard from "../join-event-card";

export default function EventDetails() {
  return (
    <section className="container mx-auto pt-10 px-4">
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
    </section>
  );
}
