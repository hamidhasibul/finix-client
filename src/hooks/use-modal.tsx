import { useState } from "react";

interface UseModal {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

export default function useModal(): UseModal {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  function handleOpen() {
    setIsOpen(true);
  }
  function handleClose() {
    setIsOpen(false);
  }
  return { isOpen, handleOpen, handleClose };
}
