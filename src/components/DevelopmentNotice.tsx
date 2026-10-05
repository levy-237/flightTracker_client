import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useSessionStorage } from "../hooks/useSessionStorage";
import "react-toastify/dist/ReactToastify.css";

export function DevelopmentNotice() {
  const [agreed, setAgreed] = useSessionStorage("agreed");

  useEffect(() => {
    if (agreed) return;

    toast.info(
      "Flight Tracker is a portfolio project in early development. You may encounter bugs or unfinished features. Thanks for taking a look!",
      {
        toastId: "early-development-notice",
        autoClose: false,
        closeOnClick: false,
        draggable: false,
        onClose: (reason) => {
          if (reason === true) setAgreed(true);
        },
      },
    );
  }, [agreed, setAgreed]);

  return <ToastContainer position="top-center" aria-label="Website notices" />;
}
