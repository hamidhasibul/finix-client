import { useEffect, useState } from "react";
import Modal from "./modal";
import cashIcon from "@/assets/cash-icon.svg";
import bKashIcon from "@/assets/bkash-icon.svg";
import cashPaymentIcon from "@/assets/payment-icon.svg";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  loading?: boolean;
};

export default function JoinEventModal({ isOpen, onClose }: Props) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="bg-[#34735f] text-[#fde8cd] border-none rounded-xl p-8 max-w-md!"
    >
      <div className="flex justify-center">
        <img src={cashIcon} alt="payment" />
      </div>
      <h2 className="text-4xl font-semibold text-center mb-12">
        Choose Payment <br />
        Method
      </h2>

      <div className="mb-8">
        <RadioGroup defaultValue="bKash">
          <div className="flex items-start space-x-2">
            <RadioGroupItem value="bKash" id="bKash" className="mt-1.5" />
            <div className="">
              <Label htmlFor="bKash" className="text-lg font-normal">
                bKash <img src={bKashIcon} alt="" />
              </Label>
              <p className="font-light text-base">
                Send the payment now via bKash to confirm your spot instantly.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <RadioGroupItem value="cash" id="cash" className="mt-1.5" />
            <div className="">
              <Label htmlFor="cash" className="text-lg font-normal">
                Cash <img src={cashPaymentIcon} alt="" />
              </Label>
              <p className="font-light text-base">
                Pay the event fee directly to the host before the game starts.
              </p>
            </div>
          </div>
        </RadioGroup>
      </div>

      <Button size={"lg"} className="w-full rounded-full p-8 text-lg">
        Continue
      </Button>
    </Modal>
  );
}
