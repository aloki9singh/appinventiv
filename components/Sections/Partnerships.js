export default function Partnerships() {
  const logos = [
    { src: "/images/partnerships/ikea.svg", alt: "IKEA" },
    { src: "/images/partnerships/hardees.svg", alt: "Google" },
    { src: "/images/partnerships/wimpy.svg", alt: "Boston Consulting Group" },
    { src: "/images/partnerships/domino.svg", alt: "KFC" },
    { src: "/images/partnerships/friday.svg", alt: "TGI Fridays" },
    { src: "/images/partnerships/supershe.svg", alt: "Moo" },
    { src: "/images/partnerships/hardees.svg", alt: "Krispy Kreme" },
    { src: "/images/partnerships/hardees.svg", alt: "Hardee's" },
    { src: "/images/partnerships/bcc.svg", alt: "Bajaj Allianz" },
    { src: "/images/partnerships/domino.svg", alt: "Domino's" },
    { src: "/images/partnerships/supershe.svg", alt: "SuperShe" },
    { src: "/images/partnerships/wimpy.svg", alt: "Wimpy" },
    { src: "/images/partnerships/empire.svg", alt: "Empire Hotels" },
    { src: "/images/partnerships/domino.svg", alt: "JobGet" },
    {
      src: "/images/partnerships/empire.svg",
      alt: "Asian Bank & Capital Trust",
    },
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="mx-auto max-w-[78rem] px-4 space-y-10">
        <h2 className="lg:text-4xl text-2xl font-semibold leading-relaxed mb-14">
          Our Partnerships Have Transformed How <br />
          You Experience These Global Leaders
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-center text-gray-800">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-start justify-center h-16">
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
