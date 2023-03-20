import {useEffect} from "react";

type Handler = () => void;

export default function useClickOut(
  ref: React.MutableRefObject<any>,
  handler: Handler
) {
  useEffect(() => {
    () => {
      console.log("I ran!!");
      const listener = (e: Event) => {
        if (!ref.current || ref.current.contains(e.target)) return;
        handler();
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    };
  }, [ref, handler]);
}
