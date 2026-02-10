import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="flex flex-row flex-wrap justify-center items-center gap-8 lg:gap-10 size-full">
      {/* basic info */}
      <div className="left load-1 flex-[100%] md:flex-1">
        <Image
          className="block rounded-full mb-4 max-h-[100px]"
          src="/jake-headshot-cropped.jpg"
          alt="Jake's headshot"
          width="100"
          height="100"
        />
        <h2 className="color-cream">About Me</h2>
        <p className="color-cream">I'm a web developer with over a decade of experience in bringing innovative designs to life. I take the phrase "pixel perfect" literally and I believe that website interactions, when done right, can leave a lasting impact on the user.</p>
        <p className="color-cream">I have experience in a variety of technologies, including JavaScript, PHP, React, APIs, HTML, SCSS, Tailwind, and more. I have a deep knowledge of CMS platforms, most prominently WordPress, but also WebFlow and HubSpot. I have a strong understanding of ADA compliance and Google Analytics as well. Take a look at my resume to see my full skillset.</p>
        <a href="/Jake-Ryan-Resume-FS-FE(WP).pdf" className="btn" target="_blank"><span>Full Resume</span></a>
      </div>
      {/* testimonial */}
      <div className="right load-2 flex-[100%] md:flex-1">
        <blockquote className="color-cream relative pt-20"><p className="h3">Beyond his technical abilities, Jake is approachable, easy to work with, and genuinely enjoyable to collaborate with. I’ve always trusted him, and any team would be lucky to have him."</p>
        <cite>Amanda Garceau, VP of Engineering at HUSL Digital</cite></blockquote>
      </div>
    </section>
  );
}