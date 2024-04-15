import { useState } from "react";

export const useToggleModal = () => {
  const [open, setOpen] = useState(false);

  const setModalOpen = () => {
    setOpen(true);
  };

  const setModalClosed = () => {
    setOpen(false);
  };
  return { open, setModalOpen, setModalClosed };
};
