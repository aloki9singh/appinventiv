import { FaChevronRight } from "react-icons/fa";


const GradientButton = ({ label}) => {
  return (
    <div
      className="flex justify-end w-full "
      style={{ maxWidth: "76rem", margin: "0 auto" }}
    >
      <button className="flex items-center gap-2 px-6 py-4 text-sm font-medium text-white transition-all duration-300 border hover:border-none border-white rounded-lg hover:bg-blue-600  group">
        {label}
        <FaChevronRight className="w-4 h-4 group-hover:animate-moveRight" />
      </button>
    </div>
  );
};

export default GradientButton;
