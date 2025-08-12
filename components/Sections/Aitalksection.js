import Image from "next/image";

export default function AITalkSection() {
  return (
    <section className="bg-black py-16 flex justify-center">
      <div className="max-w-[76rem] w-full mx-5 flex flex-col md:flex-row sm:flex-row items-center rounded-3xl  justify-between gap-12 px-6 bg-gradient-to-r from-[#C89300] to-black ">
        <div className=" rounded-md p-6 text-white w-full md:w-1/2">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">
              {" "}
              <Image
                height={30}
                width={30}
                src="/images/talkai/letstalk.svg"
                className="w-10 h-10 group-hover:animate-moveRight"
              ></Image>
            </span>
            <h2 className="text-xl font-semibold">Let's Talk AI</h2>
          </div>
          <p className="text-white/90  text-lg mb-6">
            The future of business is intelligent. But navigating AI, from Large
            Language Models to MLOps, is complex. Explore our resources, talk to
            our certified AI specialists, and build your roadmap for an
            AI-native future.
          </p>
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-2xl hover:bg-gray-200 transition">
            Book AI Advisory Session
          </button>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            width={350}
            height={350}
            src="/images/talkai/ai.svg" // <-- Replace this with your actual image name/path
            alt="AI Chip Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
