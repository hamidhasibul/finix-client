import logo from "@/assets/finix-logo.svg";
import accountIcon from "@/assets/account-icon.svg";
import { DatePicker } from "./date-picker";
import SearchInput from "./search-input";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white h-20 flex items-center px-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="logo" />

        {/* Filters */}
        <div className="flex items-center justify-between gap-2">
          {/* Date Selector */}
          <DatePicker />
          {/* Search Bar */}
          <SearchInput />
        </div>

        {/* Actions Buttons */}
        <div className="flex items-center justify-between gap-2">
          {/* Leaderboard Button */}
          <Button
            variant={"secondary"}
            size="lg"
            className="rounded-full text-base text-[#34735f]"
          >
            <img src={logo} alt="" className="h-5" /> Leaderboard
          </Button>
          {/* Login/Signup Button */}
          <Button
            variant={"outline"}
            size={"lg"}
            className="rounded-full text-base text-[#34735f] border-[#34735f]"
          >
            Login / Signup
          </Button>
          {/* Profile Button */}
          <Button variant={"outline"} size={"lg"} className="rounded-full">
            <Menu />
            <img src={accountIcon} alt="account" className="h-7 w-7" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
