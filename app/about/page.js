'use client';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { usePageLoad } from '../../utils/page-load-context';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';

export default function About() {
  const { setCursorClass } = usePageLoad();

  const mouseEnter = () => {
    setCursorClass('link');
  };
  const mouseLeave = () => {
    setCursorClass('enter');
  };

  return (
    <section id="about" className="flex flex-row flex-wrap lg:flex-nowrap justify-center items-center size-full">
      {/* basic info */}
      <div className="left load-1 flex-1 lg:flex-none lg:max-w-[40%] p-0 lg:pr-4 xl:pr-8">
        <Image
          className="block rounded-full mb-4 max-h-[100px]"
          src="/jake-headshot-cropped.jpg"
          alt="Jake's headshot"
          width="100"
          height="100"
        />
        <h2 className="color-cream">About Me</h2>
        <p className="color-cream">I'm a Senior Web Engineer with over a decade of experience in bringing innovative designs to life. I take the phrase "pixel perfect" literally and I believe that website interactions, when done right, can leave a lasting impact on the user.</p>
        <p className="color-cream">I have experience in a variety of technologies, including JavaScript, PHP, React, APIs, HTML, SCSS, Tailwind, and more. I have a deep knowledge of CMS platforms, most prominently WordPress, but also Drupal, WebFlow, and HubSpot. I have a strong understanding of WCAG and ADA compliance and Google Analytics as well. Take a look at my resume to see my full skillset.</p>
        <a href="/Jake-Ryan-Resume-FS-FE.pdf" className="btn" target="_blank" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}><span>Full Resume</span></a>
      </div>
      {/* testimonial */}
      <div className="right load-2 flex-1 max-w-full lg:max-w-[60%] p-0 lg:pl-4 xl:pl-8">
        <Swiper
          className={"swiper testimonials"}
          modules={[Pagination]}
          slidesPerView={1}
          centeredSlides={true}
          grabCursor={false}
          spaceBetween={30}
          autoHeight={true}
          pagination={{
            el: ".swiper-pagination.testimonials-pagination",
            clickable: true
          }}>

          {/* AG */}
          <SwiperSlide>
            <blockquote className="color-cream relative pt-20"><p className="h3">Beyond his technical abilities, Jake is approachable, easy to work with, and genuinely enjoyable to collaborate with. I’ve always trusted him, and any team would be lucky to have him."</p>
            <cite>Amanda G., VP of Engineering at HUSL Digital</cite></blockquote>
          </SwiperSlide>

          {/* Jeremy */}
          <SwiperSlide>
            <blockquote className="color-cream relative pt-20"><p className="h3">Jake's ability to remain self-motivated on client projects, research new technology and solutions, and manage code libraries have been critical to confidently planning and executing project success at Subtext."</p>
            <cite>Jeremy B., Senior Project Manager at GRAYBOX</cite></blockquote>
          </SwiperSlide>

          {/* Emily */}
          <SwiperSlide>
            <blockquote className="color-cream relative pt-20"><p className="h3">Jake contributed to some of our biggest projects and played an important role in building the kind of team and culture we’re proud of today at HUSL. His work, attitude, and commitment have left a lasting mark on our agency."</p>
            <cite>Emily N., Founder & CEO at HUSL Digital</cite></blockquote>
          </SwiperSlide>

          {/* pagination */}
          <div className="swiper-pagination testimonials-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
}