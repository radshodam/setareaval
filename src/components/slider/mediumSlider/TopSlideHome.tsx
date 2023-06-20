import Labkhand from "@/public/images/home/events/Labkhand6.webp";
import NeshanZarin from "@/public/images/home/events/NeshanZarrin.webp";
import SalMali from "@/public/images/home/events/SalMali.webp";
import SliderMedium from "./SliderMedium";

const dataSlider = {
  data: [
    {
      id: 1,
      alt: "neshan zarin",
      img: NeshanZarin,
    },
    {
      id: 2,
      alt: "SalMali",
      img: SalMali,
    },
    {
      id: 3,
      alt: "Labkhand",
      img: Labkhand,
    },
  ],
};

const TopSlideHome = () => {
  return <SliderMedium dataSlider={dataSlider} />;
};

export default TopSlideHome;
