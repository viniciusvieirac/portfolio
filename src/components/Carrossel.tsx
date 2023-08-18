import React from "react";
import { AiOutlineLeft, AiOutlineRight, AiFillGithub } from "react-icons/ai";
import Swipe from "react-easy-swipe";
import Image from "next/image";
import { CarouselProps } from "@/types/Image";

const Carrossel: React.FC<CarouselProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = React.useState<number>(0);

  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="relative flex flex-col items-center justify-center">
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      />
      <div className="w-full h-[50vh] flex overflow-hidden relative m-auto">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative z-10 w-full h-full"
        >
          {images.map((image, index) =>
            index === currentSlide ? (
              <div
                className="flex flex-col items-center justify-center w-full h-full"
                key={image.id}
              >
                <div className="relative group">
                  <Image
                    src={image.src}
                    width={300}
                    height={300}
                    alt={image.alt}
                    className="animate-fadeIn"
                  />
                  <div className="absolute bottom-0 right-0 p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button className="text-gray-400 hover:text-gray-600 rounded-full bg-white p-3">
                      <a
                        href={image.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AiFillGithub size={80} />
                      </a>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-center mt-6 max-w-4xl">
                  <h2>{image.name}</h2>
                  <p className="mt-4">{image.description}</p>
                </div>
              </div>
            ) : null
          )}
        </Swipe>
      </div>
      <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      />

      <div className="relative flex justify-center p-2">
        {images.map((_, index) => (
          <div
            className={
              index === currentSlide
                ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
            }
            key={index}
            onClick={() => {
              setCurrentSlide(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrossel;
