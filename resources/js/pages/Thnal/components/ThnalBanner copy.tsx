import React from "react";

const categories = [
  { title: "portfolio", img: "/assets/book_cambo/cbpa.png", link: "#" },
  { title: "blog", img: "/assets/thnal/tnal.png", link: "#" },
  { title: "ecommerce", img: "icon512_maskable.png", link: "#" },
  { title: "startup", img: "/assets/thnal/tnal.png", link: "#" },
  { title: "business", img: "/assets/book_cambo/cbpa.png", link: "#" },
  { title: "lifestyle", img: "icon512_rounded.png", link: "#" },
];

const ThnalBanner = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-3 sm:px-10 xl:px-20 mt-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {categories.map((category, index) => (
          <a
            key={index}
            href={category.link}
            className="relative block rounded-xl border-2 border-gray-600 overflow-hidden p-[2px] group hover:shadow-lg transition"
          >
            {/* Animated gradient border on hover */}
            <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#4fcf70] via-[#fad648] via-[#a767e5] via-[#12bcfe] to-[#44ce7b] opacity-0 group-hover:opacity-100 animate-[slideGradient_0.75s_linear_infinite] pointer-events-none"></span>

            {/* Inner content */}
            <div className="relative rounded-lg bg-white flex items-center justify-center w-full h-full">
              <img
                src={category.img}
                alt={category.title}
                className="block mx-auto w-full object-center"
              />
            </div>
          </a>
        ))}
      </div>

      <style jsx>{`
        @keyframes slideGradient {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
        .animate-[slideGradient_0.75s_linear_infinite] {
          background-size: 200% 100%;
          animation: slideGradient 0.75s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ThnalBanner;
