"use client";

import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react"; //カルーセル用のタグをインポート
import SwiperCore, { Pagination, Navigation } from "swiper"; //使いたい機能をインポート
import styled from "@emotion/styled";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import ItemSmallSlider from "./ItemSmallSlider";
import ProfileImgZareai from "@/public/images/home/profiles/zareiProfile.jpg";
SwiperCore.use([Pagination, Navigation]);

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 992px;
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
  .SmallSwiper {
    padding: 45px 0px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 800;
    font-size: 17px;
    line-height: 1.5;

    img {
      max-width: 180px;
    }

    @media (max-width: 990px) {
      display: flex;
      flex-direction: column-reverse;
    }
    .list {
      list-style: none;
      margin-right: 95px;
      @media (max-width: 990px) {
        margin-right: 1px;
      }
    }
  }
`;

const HeaderText = styled.h2`
  text-align: center;
  font-size: 32px;
  font-weight: 800;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.72;
  letter-spacing: normal;
  color: #56596a;
  min-height: 60px;
  margin-bottom: 5px;
`;

const SliderSmall: React.FC = () => {
  const t = useTranslations("Lottery");
  const { locale } = useParams();

  return (
    <div>
      <HeaderText>{t("head.title")}</HeaderText>
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
            <SwiperSlide>
              {/* person1 */}
              <ItemSmallSlider
                name={t("data.person1.name")}
                description={t("data.person1.description")}
                titleDateLottery={t("data.person1.DateOfLottery.name")}
                dateLottery={t("data.person1.DateOfLottery.date")}
                keyCity={t("data.person1.keyCity")}
                cityName={t("data.person1.nameCity")}
                srcProfile={ProfileImgZareai}
              />
            </SwiperSlide>
            <SwiperSlide>
              {/* person2 */}
              <ItemSmallSlider
                name={t("data.person2.name")}
                description={t("data.person2.description")}
                titleDateLottery={t("data.person2.DateOfLottery.name")}
                dateLottery={t("data.person2.DateOfLottery.date")}
                keyCity={t("data.person2.keyCity")}
                cityName={t("data.person2.nameCity")}
              />
            </SwiperSlide>
            {/* person3 */}

            <SwiperSlide>
              {" "}
              <ItemSmallSlider
                name={t("data.person3.name")}
                description={t("data.person3.description")}
                titleDateLottery={t("data.person3.DateOfLottery.name")}
                dateLottery={t("data.person3.DateOfLottery.date")}
                keyCity={t("data.person3.keyCity")}
                cityName={t("data.person3.nameCity")}
              />
            </SwiperSlide>
            {/* person4 */}
            <SwiperSlide>
              <ItemSmallSlider
                name={t("data.person4.name")}
                description={t("data.person4.description")}
                titleDateLottery={t("data.person4.DateOfLottery.name")}
                dateLottery={t("data.person4.DateOfLottery.date")}
                keyCity={t("data.person4.keyCity")}
                cityName={t("data.person4.nameCity")}
              />
            </SwiperSlide>
            {/* person5 */}
            <SwiperSlide>
              <ItemSmallSlider
                name={t("data.person5.name")}
                description={t("data.person5.description")}
                titleDateLottery={t("data.person5.DateOfLottery.name")}
                dateLottery={t("data.person5.DateOfLottery.date")}
                keyCity={t("data.person5.keyCity")}
                cityName={t("data.person5.nameCity")}
              />
            </SwiperSlide>
            {/* person6 */}
            <SwiperSlide>
              <ItemSmallSlider
                name={t("data.person6.name")}
                description={t("data.person6.description")}
                titleDateLottery={t("data.person6.DateOfLottery.name")}
                dateLottery={t("data.person6.DateOfLottery.date")}
                keyCity={t("data.person6.keyCity")}
                cityName={t("data.person6.nameCity")}
              />
            </SwiperSlide>
          </Slider>
        </SliderWrapper>
      </CenterDiv>
    </div>
  );
};

export default SliderSmall;
