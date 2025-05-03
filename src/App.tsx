import Navbar from "@/components/navbar";
import EventDetails from "@/components/sections/event-details";
import EventGallery from "@/components/sections/event-gallery";
import OtherEvents from "@/components/sections/other-events";

function App() {
  return (
    <>
      <div className="bg-[#f6f6f6] min-h-screen space-y-6">
        <Navbar />
        <EventGallery />
        <EventDetails />
      </div>
      <OtherEvents />
    </>
  );
}

export default App;
