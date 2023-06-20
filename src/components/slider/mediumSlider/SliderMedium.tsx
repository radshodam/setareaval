"use client";

import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react"; //カルーセル用のタグをインポート
import SwiperCore, { Pagination, Navigation } from "swiper"; //使いたい機能をインポート
import styled from "@emotion/styled";

SwiperCore.use([Pagination, Navigation]);

type ImageData = {
  id: number;
  alt: string;
  img: StaticImageData;
};

type DataSlider = {
  data: ImageData[];
};

type SliderMediumProps = {
  dataSlider: DataSlider;
};

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1236px;
  display: flex;
  justify-content: space-between;
`;
const Slider = styled(Swiper)`
  border-radius: 20px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);
  margin: 20px 10px;
  .swiper-slide {
    display: flex;
    justify-content: space-between;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-pagination {
    display: flex;
    justify-content: center;
    gap: 9px;
    flex-wrap: wrap;
  }

  .swiper-pagination-bullet {
    width: 3px;
    height: 3px;
    background-color: blue;
    border-radius: 50%;
    padding: 1px;
    margin: 200px 250px;
  }

  .swiper-pagination-bullet-active {
    background-color: #57c5d0;
  }
`;

const SliderMedium: React.FC<SliderMediumProps> = ({ dataSlider }) => {
  return (
    <div>
      <CenterDiv>
        <SliderWrapper>
          <Slider
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            loop={true}
            direction={"horizontal"}
            spaceBetween={3}
            keyboard={{
              enabled: true,
            }}
          >
            {dataSlider?.data?.map((item) => {
              return (
                <SwiperSlide key={`${item.id}`}>
                  <Image src={item.img} width={1236} height={300} alt={item.alt} />
                </SwiperSlide>
              );
            })}
          </Slider>
        </SliderWrapper>
      </CenterDiv>
    </div>
  );
};

export default SliderMedium;
