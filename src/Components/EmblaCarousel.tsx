import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useRef, type JSX } from 'react';
import AboutMe from './CarouselSlides/AboutMe';
import Projects from './CarouselSlides/Projects';
import { NavBarItems } from '../App';
import AutoHeight from 'embla-carousel-auto-height';

export default function EmblaCarousel({
  scrollTo,
}: {
  scrollTo: number | undefined;
}): JSX.Element {
  const startIndex = useRef(getIndexFromUrlFragment());

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
    if (scrollTo !== undefined) {
      console.log('scrolling');

      emblaApi?.scrollTo(scrollTo);
      setUrlFragment(scrollTo);
    }
  }, [scrollTo]);

  function setUrlFragment(index: number): void {
    const fragment = NavBarItems[index].toString();
    const newUrl = `${window.location.href.split('#')[0]}#${fragment}`;
    window.location.href = newUrl;
  }

  function getIndexFromUrlFragment(): number | null {
    const url = window.location.href.split('#');
    if (url.length > 0) {
      const fragment = url[1] as keyof typeof NavBarItems;
      if (fragment in NavBarItems && isNaN(Number(fragment))) {
        return NavBarItems[fragment];
      }
    }
    return null;
  }

  return (
    <div
      className='embla m-auto max-w-[95%] overflow-hidden pb-6 sm:max-w-[80%]'
      ref={emblaRef}
    >
      <div className='embla__container flex items-start'>
        <div
          className='embla__slide h-fit min-w-0 flex-[0_0_100%]'
          id='aboutMe'
        >
          <AboutMe></AboutMe>
        </div>
        <div
          className='embla__slide mb-8 min-w-0 flex-[0_0_100%]'
          id='projects'
        >
          <Projects></Projects>
        </div>

        <div
          className='embla__slide min-w-0 flex-[0_0_100%]'
          id='contactMe'
        ></div>
      </div>
    </div>
  );
}
