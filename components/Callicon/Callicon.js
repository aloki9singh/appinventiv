import { FaPhoneAlt } from "react-icons/fa";

export default function RingingCallIcon() {
  return (
    <div className="flex items-center justify-center ">
      <div className="relative">
        {/* Outer Pulse Ring */}
        <span className="absolute inset-0 border-black rounded-full border-1 animate-ping"></span>

        {/* Phone Icon with Shake Animation */}
        <FaPhoneAlt className="text-black text-sm animate-[ring_0.8s_infinite]" />
      </div>

      {/* Custom Animation for Ringing */}
      <style jsx>{`
        @keyframes ring {
          0% {
            transform: rotate(0deg);
          }
          10% {
            transform: rotate(15deg);
          }
          20% {
            transform: rotate(-15deg);
          }
          30% {
            transform: rotate(10deg);
          }
          40% {
            transform: rotate(-10deg);
          }
          50% {
            transform: rotate(5deg);
          }
          60% {
            transform: rotate(-5deg);
          }
          70%,
          100% {
            transform: rotate(0deg);
          }
        }
        .animate-[ring_0.8s_infinite] {
          animation: ring 0.8s infinite;
        }
      `}</style>
    </div>
  );
}
