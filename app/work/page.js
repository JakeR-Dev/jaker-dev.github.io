'use client';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { usePageLoad } from '../../utils/page-load-context';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';

export default function Work() {
  const { setCursorClass } = usePageLoad();

  const mouseEnter = () => {
    setCursorClass('link');
  };
  const mouseLeave = () => {
    setCursorClass('enter');
  };

  return (
    <section id="work" className="flex flex-row flex-wrap lg:flex-nowrap justify-center items-center size-full">
      <div className="left load-1 flex-1 lg:flex-none lg:max-w-[40%] p-0 lg:pr-4 xl:pr-8">
        <h2 className="color-cream">Work Samples</h2>
        <p className="color-cream">Here are some of my notable work samples from over the years. They represent a wide variety of technologies and challenges. I'm always looking for fun and exciting projects, so don't hesitate to reach out if you have an idea worth exploring. Browse away!</p>
      </div>
      <div className="right load-2 flex-1 max-w-full lg:max-w-[60%] p-0 lg:pl-4 xl:pl-8">
        <Swiper
          className={"swiper work-samples"}
          modules={[Pagination]}
          slidesPerView={'auto'}
          centeredSlides={true}
          grabCursor={false}
          spaceBetween={30}
          pagination={{
            el: ".swiper-pagination.work-samples-pagination",
            clickable: true
          }}>

          {/* aila */}
          <SwiperSlide>
            <div className="p-4 md:p-6 lg:p-8 xl:p-10 pb-10 xl:pb-12 rounded-sm bg-cream h-full">
              <div className="relative w-full h-[220px] xl:h-[250px] mb-6">
                <Image
                  className="border-4 border-(--color-charcoal) rounded-sm object-cover"
                  src="/aila-screenshot-1.png"
                  alt="Aila website screenshot"
                  fill
                />
              </div>
              <div className="flex flex-row flex-wrap mb-4">
                <div className="pill bg-charcoal color-cream flex-0 mb-2 mr-2">Web Development</div>
                <div className="pill bg-charcoal color-cream flex-0 mb-2 mr-2">Javascript</div>
                <div className="pill bg-charcoal color-cream flex-0 mb-2 mr-2">PHP</div>
                <div className="pill bg-charcoal color-cream flex-0 mb-2 mr-2">Figma</div>
                <div className="pill bg-charcoal color-cream flex-0 mb-2 mr-2">Wordpress</div>
                <div className="pill bg-charcoal color-cream flex-0 mb-2 mr-2">SCSS</div>
              </div>
              <h3 className="color-charcoal">Aila Technologies</h3>
              <p>Aila's mission is to empower enterprises with self-service solutions that conquer lines and labor challenges. The goal was to build them a scalable and flexible WordPress theme that can keep up with the demands of a dynamic, growing business.</p>
              <a href="https://www.ailatech.com/" target="_blank" rel="nofollow" className="btn btn-neon" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}><span>Visit</span></a>
            </div>
          </SwiperSlide>

          {/* alteryx */}
          <SwiperSlide>
            <div className="p-4 md:p-6 lg:p-8 xl:p-10 pb-10 xl:pb-12 rounded-sm bg-cream h-full">
              <div className="relative w-full h-[220px] xl:h-[250px] mb-6">
                <Image
                  className="border-4 border-(--color-charcoal) rounded-sm object-cover"
                  src="/alteryx-screenshot.png"
                  alt="Alteryx screenshot"
                  fill
                />
              </div>
              <div className="flex flex-row flex-wrap mb-4">
                <div className="pill bg-charcoal color-cream flex-0 mb-2 mr-2">Web Development</div>
                <div className="pill bg-charcoal color-cream flex-0 mb-2 mr-2">PHP</div>
                <div className="pill bg-charcoal color-cream flex-0 mb-2 mr-2">Javascript</div>
                <div className="pill bg-charcoal color-cream flex-0 mb-2 mr-2">Wordpress</div>
                <div className="pill bg-charcoal color-cream flex-0 mb-2 mr-2">Wistia</div>
                <div className="pill bg-charcoal color-cream flex-0 mb-2 mr-2">Figma</div>
              </div>
              <h3 className="color-charcoal">Alteryx</h3>
              <p>Organizations across the globe use the Alteryx AI-powered data analytics platform to improve efficiencies, reduce costs and mitigate risk. The challenge was to create an enterprise-scale website that utilizes several different content types, while maintaining a performance-first mindset.</p>
              <a href="https://www.alteryx.com/" target="_blank" rel="nofollow" className="btn btn-neon" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}><span>Visit</span></a>
            </div>
          </SwiperSlide>

          {/* powder day */}
          <SwiperSlide>
            <div className="p-4 md:p-6 lg:p-8 xl:p-10 pb-10 xl:pb-12 rounded-sm bg-cream h-full">
              <div className="relative w-full h-[220px] xl:h-[250px] mb-6">
                <Image
                  className="border-4 border-(--color-charcoal) rounded-sm object-cover"
                  src="/powder-day-screenshot.png"
                  alt="Powder Day screenshot"
                  fill
                />
              </div>
              <div className="flex flex-row flex-wrap mb-4">
                <div className="pill bg-charcoal color-cream flex-0 mb-2 mr-2">Javascript</div>
                <div className="pill bg-charcoal color-cream flex-0 mb-2 mr-2">React</div>
                <div className="pill bg-charcoal color-cream flex-0 mb-2 mr-2">REST API</div>
                <div className="pill bg-charcoal color-cream flex-0 mb-2 mr-2">Figma</div>
                <div className="pill bg-charcoal color-cream flex-0 mb-2 mr-2">Vite</div>
                <div className="pill bg-charcoal color-cream flex-0 mb-2 mr-2">SCSS</div>
              </div>
              <h3 className="color-charcoal">Powder Day</h3>
              <p>A React app that gathers the latest conditions from the best ski resorts in North America. Calculates a "Send Score" based on various weather factors to determine which resorts are worth visiting. Leverages REST APIs for real-time updates and Vite for fast development.</p>
              <a href="https://powderday.io/" target="_blank" rel="nofollow" className="btn btn-neon" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}><span>Visit</span></a>
            </div>
          </SwiperSlide>

          {/* intentsify */}
          <SwiperSlide>
            <div className="p-4 md:p-6 lg:p-8 xl:p-10 pb-10 xl:pb-12 rounded-sm bg-cream h-full">
              <div className="relative w-full h-[220px] xl:h-[250px] mb-6">
                <Image
                  className="border-4 border-(--color-charcoal) rounded-sm object-cover"
                  src="/intentsify-screenshot.png"
                  alt="Intentsify screenshot"
                  fill
                />
              </div>
              <div className="flex flex-row flex-wrap mb-4">
                <div className="pill bg-charcoal color-cream flex-0 mb-2 mr-2">Web Development</div>
                <div className="pill bg-charcoal color-cream flex-0 mb-2 mr-2">PHP</div>
                <div className="pill bg-charcoal color-cream flex-0 mb-2 mr-2">Javascript</div>
                <div className="pill bg-charcoal color-cream flex-0 mb-2 mr-2">Wordpress</div>
                <div className="pill bg-charcoal color-cream flex-0 mb-2 mr-2">Hubspot</div>
                <div className="pill bg-charcoal color-cream flex-0 mb-2 mr-2">Figma</div>
              </div>
              <h3 className="color-charcoal">Intentsify</h3>
              <p>Intentsify helps users harness AI-powered intelligence to identify, engage, and convert buying groups. They wanted a clean, concise, and engaging user experience to help highlight their cutting edge product. They also wanted a scalable CMS that could house their extensive blog and resource library.</p>
              <a href="https://intentsify.io/" target="_blank" rel="nofollow" className="btn btn-neon" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}><span>Visit</span></a>
            </div>
          </SwiperSlide>

          {/* quantifind */}
          <SwiperSlide>
            <div className="p-4 md:p-6 lg:p-8 xl:p-10 pb-10 xl:pb-12 rounded-sm bg-cream h-full">
              <div className="relative w-full h-[220px] xl:h-[250px] mb-6">
                <Image
                  className="border-4 border-(--color-charcoal) rounded-sm object-cover"
                  src="/quantifind-screenshot.png"
                  alt="Quantifind screenshot"
                  fill
                />
              </div>
              <div className="flex flex-row flex-wrap mb-4">
                <div className="pill bg-charcoal color-cream flex-0 mb-2 mr-2">Web Development</div>
                <div className="pill bg-charcoal color-cream flex-0 mb-2 mr-2">PHP</div>
                <div className="pill bg-charcoal color-cream flex-0 mb-2 mr-2">Javascript</div>
                <div className="pill bg-charcoal color-cream flex-0 mb-2 mr-2">Wordpress</div>
                <div className="pill bg-charcoal color-cream flex-0 mb-2 mr-2">Figma</div>
                <div className="pill bg-charcoal color-cream flex-0 mb-2 mr-2">GA4</div>
              </div>
              <h3 className="color-charcoal">Quantifind</h3>
              <p>Quantifind has been helping banks, Fortune 50 companies, and the US Government gain insights from unstructured public data for over a decade. They needed a new website to match their dynamic, yet well established, product persona.</p>
              <a href="https://www.quantifind.com/" target="_blank" rel="nofollow" className="btn btn-neon" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}><span>Visit</span></a>
            </div>
          </SwiperSlide>

          {/* pagination */}
          <div className="swiper-pagination work-samples-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
}