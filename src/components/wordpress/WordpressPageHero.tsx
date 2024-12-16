import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const WordpressPageHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative max-h-screen pt-24 flex flex-col justify-center items-center bg-gradient-to-b from-green-50 to-white text-gray-900 px-4 overflow-hidden">
      {/* Animated Background Dots */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-green-500/20"
            style={{
              width: Math.random() * 6 + "px",
              height: Math.random() * 6 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: "transform 0.3s ease-out",
              animation: `float ${Math.random() * 5 + 5}s infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* WordPress Logo */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-10 transform translate-x-1/4 -translate-y-1/4 text-green-600"
        style={{
          animation: "rotate 20s linear infinite",
        }}
      >
        <svg viewBox="0 0 122.52 122.523" className="w-full h-full">
          <path
            fill="currentColor"
            d="M8.708 61.26c0 20.802 12.089 38.779 29.619 47.298L13.258 39.872c-2.916 6.536-4.55 13.769-4.55 21.388zm86.383-2.504c0-6.495-2.333-10.993-4.334-14.494-2.664-4.329-5.161-7.995-5.161-12.324 0-4.831 3.664-9.328 8.825-9.328.233 0 .454.029.681.042-9.35-8.566-21.807-13.796-35.489-13.796-18.36 0-34.513 9.42-43.91 23.688 1.233.037 2.395.063 3.382.063 5.497 0 14.006-.667 14.006-.667 2.833-.167 3.167 3.994.337 4.329 0 0-2.847.335-6.015.501l19.138 56.925 11.501-34.493-8.188-22.434c-2.83-.166-5.511-.501-5.511-.501-2.832-.166-2.5-4.496.332-4.329 0 0 8.679.667 13.843.667 5.496 0 14.006-.667 14.006-.667 2.835-.167 3.168 3.994.337 4.329 0 0-2.853.335-6.015.501l18.992 56.494 5.242-17.517c2.272-7.269 4.001-12.49 4.001-16.989z"
          />
          <path
            fill="currentColor"
            d="M62.184 65.857l-15.768 45.819c4.708 1.384 9.687 2.141 14.846 2.141 6.12 0 11.989-1.058 17.452-2.979-.141-.225-.269-.464-.374-.724L62.184 65.857zm54.013-35.662c.228 1.688.357 3.499.357 5.455 0 5.381-1.008 11.439-4.03 19.01l-16.2 46.847c15.765-9.174 26.391-26.259 26.391-45.831 0-9.242-2.361-17.935-6.518-25.481zM61.262 0C27.483 0 0 27.481 0 61.26c0 33.783 27.483 61.263 61.262 61.263 33.778 0 61.265-27.48 61.265-61.263C122.526 27.481 95.04 0 61.262 0zm0 119.715c-32.23 0-58.453-26.223-58.453-58.455 0-32.23 26.222-58.451 58.453-58.451 32.229 0 58.45 26.221 58.45 58.451 0 32.232-26.221 58.455-58.45 58.455z"
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 transform hover:scale-110 transition-transform duration-300">
          <svg
            viewBox="0 0 122.52 122.523"
            className="w-24 h-24 mx-auto text-green-600"
          >
            <path
              fill="currentColor"
              d="M8.708 61.26c0 20.802 12.089 38.779 29.619 47.298L13.258 39.872c-2.916 6.536-4.55 13.769-4.55 21.388zm86.383-2.504c0-6.495-2.333-10.993-4.334-14.494-2.664-4.329-5.161-7.995-5.161-12.324 0-4.831 3.664-9.328 8.825-9.328.233 0 .454.029.681.042-9.35-8.566-21.807-13.796-35.489-13.796-18.36 0-34.513 9.42-43.91 23.688 1.233.037 2.395.063 3.382.063 5.497 0 14.006-.667 14.006-.667 2.833-.167 3.167 3.994.337 4.329 0 0-2.847.335-6.015.501l19.138 56.925 11.501-34.493-8.188-22.434c-2.83-.166-5.511-.501-5.511-.501-2.832-.166-2.5-4.496.332-4.329 0 0 8.679.667 13.843.667 5.496 0 14.006-.667 14.006-.667 2.835-.167 3.168 3.994.337 4.329 0 0-2.853.335-6.015.501l18.992 56.494 5.242-17.517c2.272-7.269 4.001-12.49 4.001-16.989z"
            />
            <path
              fill="currentColor"
              d="M62.184 65.857l-15.768 45.819c4.708 1.384 9.687 2.141 14.846 2.141 6.12 0 11.989-1.058 17.452-2.979-.141-.225-.269-.464-.374-.724L62.184 65.857zm54.013-35.662c.228 1.688.357 3.499.357 5.455 0 5.381-1.008 11.439-4.03 19.01l-16.2 46.847c15.765-9.174 26.391-26.259 26.391-45.831 0-9.242-2.361-17.935-6.518-25.481zM61.262 0C27.483 0 0 27.481 0 61.26c0 33.783 27.483 61.263 61.262 61.263 33.778 0 61.265-27.48 61.265-61.263C122.526 27.481 95.04 0 61.262 0zm0 119.715c-32.23 0-58.453-26.223-58.453-58.455 0-32.23 26.222-58.451 58.453-58.451 32.229 0 58.45 26.221 58.45 58.451 0 32.232-26.221 58.455-58.45 58.455z"
            />
          </svg>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 opacity-0 animate-fade-in">
          WordPress Development
          <span className="block text-green-600 mt-2">Portfolio</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Crafting beautiful and functional WordPress websites that deliver
          exceptional user experiences.
        </p>

        <div className="flex gap-4 justify-center mb-12">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-all hover:scale-105">
            View Projects
          </button>
          <button className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all hover:scale-105">
            Contact Me
          </button>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 mx-auto text-gray-400" />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(10px, 10px);
          }
        }
        @keyframes rotate {
          from {
            transform: translate(25%, -25%) rotate(0deg);
          }
          to {
            transform: translate(25%, -25%) rotate(360deg);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default WordpressPageHero;
