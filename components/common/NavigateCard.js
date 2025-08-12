import Image from "next/image";

const NavigateCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col p-6 transition-all duration-300 border border-gray-800 shadow-lg hover:border-blue-800 bg-neutral-900 rounded-xl hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-md bg-neutral-900">
        <Image src={icon} alt={title} width={32} height={32} />
      </div>

      <h3 className="text-lg font-semibold text-white">{title}</h3>

      <p className="mt-2 text-sm text-gray-400">{description}</p>
    </div>
  );
};

export default NavigateCard;
