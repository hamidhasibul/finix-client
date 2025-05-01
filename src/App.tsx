import Navbar from "./components/navbar";
import EventGallery from "./components/sections/event-gallery";

function App() {
  return (
    <>
      <div className="bg-[#f6f6f6] min-h-screen">
        <Navbar />
        <EventGallery />
      </div>
    </>
  );
}

export default App;
