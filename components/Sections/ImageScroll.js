import ImageScroller from "../common/ImageScroller";

export default function ImageScroll() {
  return (
    <div className="max-w-5xl mx-auto mt-10">
      <ImageScroller
        images={[
          "/images/Slider/adidas.webp",
          "/images/Slider/ikea.webp",
          "/images/Slider/pizzahut.webp",
          "/images/Slider/americana.webp",
        ]}
      />
    </div>
  );
}
