import { useEffect } from "react";
import { cssTransition, toast, ToastContainer } from "react-toastify";
import { useSessionStorage } from "../hooks/useSessionStorage";
import "react-toastify/dist/ReactToastify.css";
import "../styles/DevelopmentNotice.css";

const noticeTransition = cssTransition({
  enter: "notice-enter",
  exit: "notice-exit",
});

export function DevelopmentNotice() {
  const [agreed, setAgreed] = useSessionStorage("agreed");

  useEffect(() => {
    if (agreed) return;

    toast.info(
      ({ closeToast }) => (
        <div className="development-notice">
          <h2>Initial loading</h2>
          <p>
            Live aircraft data on the map may take up to 20 seconds to appear
            while the server resumes from inactivity.
          </p>
          <h2>Under active development</h2>
          <p>
            Flight Tracker is a portfolio project under active development. Some
            features are incomplete, and you may encounter errors.
          </p>
          <button type="button" onClick={() => closeToast(true)}>
            Got it
          </button>
        </div>
      ),
      {
        toastId: "early-development-notice",
        autoClose: false,
        closeOnClick: false,
        draggable: false,
        icon: false,
        role: "status",
        onClose: (reason) => {
          if (reason === true) setAgreed(true);
        },
      },
    );
  }, [agreed, setAgreed]);

  return (
    <ToastContainer
      position="top-center"
      className="website-notices"
      toastClassName="website-notice"
      transition={noticeTransition}
      hideProgressBar
      aria-label="Website notices"
    />
  );
}
