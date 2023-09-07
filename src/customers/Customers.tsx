import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

type customerArray = {
  id: number;
  title: string;
  img: string;
}[];

const Customers = () => {
  const customersBrand: customerArray = [
    { id: 1, title: "Discord", img: "./img/brand-icon/discord-logo.png" },
    { id: 2, title: "Google", img: "./img/brand-icon/google-logo.png" },
    { id: 3, title: "Meta", img: "./img/brand-icon/Meta-Logo.png" },
    { id: 4, title: "Paypal", img: "./img/brand-icon/paypal-logo.png" },
    { id: 5, title: "Slack", img: "./img/brand-icon/slack-logo.png" },
  ];

  return (
    <section className="container mx-auto px-3 max-w-[1330px]">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        breakpoints={{
          420: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
          1100: {
            slidesPerView: 5,
          },
        }}
      >
        {customersBrand.map((brand) => (
          <SwiperSlide key={brand.id}>
            <div className="max-w-[180px] h-[150px] my-16 flex items-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 smooth-trans mx-auto">
              <img src={brand.img} alt={brand.title} className="w-full" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Customers;
