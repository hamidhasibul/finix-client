import { Search } from "lucide-react";
import { Input } from "./ui/input";

export default function SearchInput() {
  return (
    <div className="w-[240px] items-center justify-between relative">
      <Input
        placeholder="Search"
        className="font-normal rounded-full min-h-12"
      />
      <div className="absolute bg-gray-300 p-2 rounded-full top-1.5 right-4">
        <Search className="h-5 w-5" />
      </div>
    </div>
  );
}
