import { EVENT_DETAILS, players } from "@/lib/data";
import { Users } from "lucide-react";
import { Button } from "./ui/button";

export default function PlayersTab() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-bold text-3xl">Players</h4>
        <p className="flex items-center gap-2 text-xl font-medium">
          <Users />
          {EVENT_DETAILS.registeredPlayers}/{EVENT_DETAILS.totalSpots}
        </p>
      </div>

      <div className="space-y-2">
        {players.map((player) => (
          <div
            key={player.id}
            className="bg-[#34735f] text-white rounded-lg p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FDE8CD] text-[#34735f] flex items-center justify-center font-medium text-sm">
                {player.initials}
              </div>
              <div>
                {player.name}{" "}
                {player.isHost && (
                  <span className="text-sm text-gray-200">(host)</span>
                )}
              </div>
            </div>
            <Button
              size={"lg"}
              className="bg-white hover:bg-gray-100 text-black text-xs rounded-md p-3 h-auto"
            >
              Message
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
