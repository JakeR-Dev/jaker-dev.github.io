'use client';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { usePageLoad } from '../utils/page-load-context';
import 'swiper/swiper-bundle.css';

export default function Home() {
  const { setCursorClass } = usePageLoad();

  const mouseEnter = () => {
    setCursorClass('link');
  };
  const mouseLeave = () => {
    setCursorClass('enter');
  };

  return (
    <section id="hero" className="flex flex-col flex-nowrap justify-between items-start size-full">
      <div className="upper">
        <h1 className="color-cream load-2">Hey I'm Jake</h1>
        <h3 className="color-neon load-1">Senior Web Devloper. Polished interfaces backed by reliable engineering.</h3>
      </div>
      <div className="lower max-w-full">
        {/* take a break */}
        <div className="game-break block relative mb-4 rounded-full inline-block w-[150px] h-[150px] opacity-0">
          <div className="game-break_text h-full w-full color-cream">
            <svg width="150" height="150" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <path id="circlePath" d="M75,75 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0"/>
              </defs>
              <text fontFamily="Arial, sans-serif" fontSize="8" fill="#f4f4f6">
                <textPath href="#circlePath" startOffset="0%">Take a break • Play a game • Take a break • Play a game • Take a break • Play a game •</textPath>
              </text>
            </svg>
          </div>
          <a className="game-break_icon block absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] opacity-75" href="https://jaker-dev.github.io/grid-runner/" target="blank" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <svg width="70" height="70" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <polygon points="30,20 80,50 30,80" fill="#f4f4f6" stroke="#f4f4f6" strokeWidth="4" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
        {/* tech swiper */}
        <Swiper
          className={"swiper technologies mt-4 opacity-0"}
          modules={[Autoplay]}
          slidesPerView={'auto'}
          spaceBetween={16}
          loop={true}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={4000}
          observer={true}
          observeParents={true}>
            <SwiperSlide className="pill bg-cream color-charcoal">PHP</SwiperSlide>
            <SwiperSlide className="pill bg-cream color-charcoal">JavaScript (ES6+)</SwiperSlide>
            <SwiperSlide className="pill bg-cream color-charcoal">SCSS</SwiperSlide>
            <SwiperSlide className="pill bg-cream color-charcoal">Tailwind</SwiperSlide>
            <SwiperSlide className="pill bg-cream color-charcoal">React</SwiperSlide>
            <SwiperSlide className="pill bg-cream color-charcoal">TypeScript</SwiperSlide>
            <SwiperSlide className="pill bg-cream color-charcoal">CSS</SwiperSlide>
            <SwiperSlide className="pill bg-cream color-charcoal">WordPress</SwiperSlide>
            <SwiperSlide className="pill bg-cream color-charcoal">HTML</SwiperSlide>
            <SwiperSlide className="pill bg-cream color-charcoal">jQuery</SwiperSlide>
            <SwiperSlide className="pill bg-cream color-charcoal">WebFlow</SwiperSlide>
            <SwiperSlide className="pill bg-cream color-charcoal">PhotoShop</SwiperSlide>
            <SwiperSlide className="pill bg-cream color-charcoal">Next.js</SwiperSlide>
            <SwiperSlide className="pill bg-cream color-charcoal">HubSpot</SwiperSlide>
            <SwiperSlide className="pill bg-cream color-charcoal">Google Analytics</SwiperSlide>
            <SwiperSlide className="pill bg-cream color-charcoal">ADA Compliance</SwiperSlide>
            <SwiperSlide className="pill bg-cream color-charcoal">Google Tag Manager</SwiperSlide>
            <SwiperSlide className="pill bg-cream color-charcoal">Figma</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
