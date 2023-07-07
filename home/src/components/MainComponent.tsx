import img01 from "../assets/img.png";
import CarouselComponent from "./CarouselComponent";

const MainComponent = () => {
  return (
    <main className="mt-32 px-3">
      <img className="m-auto h-auto" src={img01} alt="banner" />
      <CarouselComponent />
    </main>
  );
};

export default MainComponent;
