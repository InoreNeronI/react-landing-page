import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore from 'swiper';
import Mousewheel from '../../node_modules/swiper/modules/mousewheel.mjs';
import Pagination from '../../node_modules/swiper/modules/pagination.mjs';

import { Welcome, Champion, ChampionDetail, Trailer, Credit } from '../components';

import { championsData } from '../assets/dummy';

SwiperCore.use([Mousewheel, Pagination]);

const swiperOptions = {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  pagination: { clickable: true },
  speed: 1000,
};

const Home = () => {
  return (
    <>
      <Swiper {...swiperOptions}>
        <SwiperSlide>{({ isActive }) => <Welcome isActive={isActive} />}</SwiperSlide>
        <SwiperSlide>{({ isActive }) => <Champion isActive={isActive} />}</SwiperSlide>
        <SwiperSlide>{({ isActive }) => <Trailer isActive={isActive} />}</SwiperSlide>
        <SwiperSlide>{({ isActive }) => <Credit isActive={isActive} />}</SwiperSlide>
      </Swiper>
      {championsData.map((item, index) => (
        <ChampionDetail key={index} item={item} id={index} />
      ))}
      <div className="scroll">
        <span>Scroll to see effect</span>
      </div>
    </>
  );
};

export default Home;
