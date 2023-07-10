import carrinho from "../assets/cart.jpg";
import apple from "../assets/apple.jpg";
import supermarket from "../assets/market.jpg";
import fruits from "../assets/fruits.jpg";
import { useEffect, useState } from "react";

interface ISlide {
  img: string;
  message: string;
}
const CarouselComponent = () => {
  const slides: ISlide[] = [
    {
      img: carrinho,
      message: "Planeje suas compras e economize",
    },
    {
      img: apple,
      message:
        "Cadastre os produtos que fazem parte da lista de compras do seu dia a dia",
    },
    {
      img: supermarket,
      message: "Torne suas compras mais rápidas e objetivas",
    },
    {
      img: fruits,
      message: "Planeje, economize, compre! A sua lista de compras perfeita.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [currentIndex]);

  return (
    <div className="w-11/12 h-[650px] my-24 mx-auto py-4 px-1 relative group rounded-lg bg-primary">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
        className="w-[90%] h-[100%] m-auto rounded-2x1 bg-center bg-cover duration-500 rounded-lg relative"
      >
        <button onClick={prevSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="hidden group-hover:block absolute top-[50%] text-2xl -translate-x-0 translate-y-[-50%] left-5 rounded-full p-2 bg-black/20 text-white cursor-pointer w-12 h-12"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <h1 className="text-shadow-black min-h-[18%] p-3 font-black text-white text-3xl sm:text-[2.5rem] bg-black/20 text-center absolute bottom-0 rounded-lg rounded-t-none w-full font-mono">
          {slides[currentIndex].message}
        </h1>

        <button onClick={nextSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="hidden group-hover:block absolute top-[50%] text-2xl -translate-x-0 translate-y-[-50%] right-5 rounded-full p-2 bg-black/20 text-white cursor-pointer w-12 h-12"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CarouselComponent;
