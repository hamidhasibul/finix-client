import React from "react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  className?: string;
};

export default function Modal({ isOpen, onClose, children, className }: Props) {
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent className={cn(className)}>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
}
