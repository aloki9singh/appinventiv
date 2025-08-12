import { ArrowRight } from "lucide-react";

const GradientButton = ({ label = "Our Services" }) => {
  return (
    <div className="flex justify-end w-full" style={{ maxWidth: "76rem", margin: "0 auto" }}>
      <button className="flex items-center gap-2 border border-white text-white rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black group">
        {label}
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </div>
  );
};

export default GradientButton;
