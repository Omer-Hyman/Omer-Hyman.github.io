import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useRef, type JSX } from 'react';
import AboutMe from './CarouselSlides/AboutMe';
import Projects from './CarouselSlides/Projects';
import AutoHeight from 'embla-carousel-auto-height';
import ContactMe from './CarouselSlides/ContactMe';

export default function EmblaCarousel({
  scrollTo,
  startingSlide,
  contactMeClicked,
}: {
  scrollTo: number;
  startingSlide: number;
  contactMeClicked: () => void;
}): JSX.Element {
  const startIndex = useRef(startingSlide);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      dragFree: false, // https://www.embla-carousel.com/api/options/#dragfree
      duration: 15,
      watchDrag: false, // https://www.embla-carousel.com/api/options/#watchdrag
      startIndex: startIndex.current ?? 0,
      // containScroll: 'keepSnaps',
    },
    [AutoHeight()]
  );

  useEffect(() => {
    emblaApi?.scrollTo(scrollTo);
  }, [scrollTo]);

  return (
    <div className=''>
      <div
        className='embla m-auto max-w-[95%] overflow-hidden sm:max-w-[80%]'
        ref={emblaRef}
      >
        <div className='embla__container flex items-start'>
          <div className='embla__slide h-fit min-w-0 flex-[0_0_100%]'>
            <AboutMe contactMeClicked={contactMeClicked}></AboutMe>
          </div>
          <div className='embla__slide min-w-0 flex-[0_0_100%] pb-8'>
            <Projects></Projects>
          </div>
          <div className='embla__slide min-w-0 flex-[0_0_100%]'>
            <ContactMe></ContactMe>
          </div>
        </div>
      </div>
      <div className='pt-4'></div>
    </div>
  );
}
