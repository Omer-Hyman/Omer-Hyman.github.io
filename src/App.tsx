import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useRef, useState } from 'react';
import NavBarItem from './NavBarItem';

function App() {
  // const [sectionInView, setSectionInView] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: true,
  });

  const [activeNavBarItem, setActiveNavBarItem] = useState(0);
  const [navBarItemInView, setNavBarItemInView] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
      console.log(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi?.selectedScrollSnap()]);

  const navBarItemClicked = (index: number) => {
    emblaApi?.scrollTo(index);
    setNavBarItemInView(index);
    setActiveNavBarItem(index);
  };

  return (
    <div className='bg-gray-900 h-full text-white p-4'>
      <header className='flex flex-col items-center mb-4'>
        <h1 className='text-5xl justify-center mb-1.5'>Omer Hyman</h1>
        <h2 className='text-2xl'>Software Developer</h2>

        <nav id='navBar' className='w-[60%] flex justify-center mt-4'>
          <ul className='text-lg text-center justify-center align-center grid grid-cols-3'>
            <li
              onMouseEnter={() => {
                setActiveNavBarItem(0);
              }}
              onMouseLeave={() => {
                setActiveNavBarItem(navBarItemInView);
              }}
            >
              <NavBarItem
                name='About Me'
                clicked={() => {
                  navBarItemClicked(0);
                }}
                active={activeNavBarItem === 0}
                inView={navBarItemInView === 0}
              />
            </li>
            <li
              onMouseEnter={() => {
                setActiveNavBarItem(1);
              }}
              onMouseLeave={() => {
                setActiveNavBarItem(navBarItemInView);
              }}
            >
              <NavBarItem
                name='Projects'
                clicked={() => {
                  navBarItemClicked(1);
                }}
                active={activeNavBarItem === 1}
                inView={navBarItemInView === 1}
              />
            </li>
            <li
              onMouseEnter={() => {
                setActiveNavBarItem(2);
              }}
              onMouseLeave={() => {
                setActiveNavBarItem(navBarItemInView);
              }}
            >
              <NavBarItem
                name='Contact Me'
                clicked={() => {
                  navBarItemClicked(2);
                }}
                active={activeNavBarItem === 2}
                inView={navBarItemInView === 2}
              />
            </li>
          </ul>
        </nav>
      </header>

      <div className='embla overflow-hidden max-w-[80%] m-auto' ref={emblaRef}>
        <div className='embla__container flex'>
          <div className='embla__slide flex-[0_0_100%] min-w-0'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
          <div className='embla__slide flex-[0_0_100%] min-w-0'>
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in
            their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the
            like).
          </div>
          <div className='embla__slide flex-[0_0_100%] min-w-0'>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </div>
        </div>
      </div>

      {/* White border around bottom left and right, change to black at the bottom so white to black at 20% - maybe implement a shadow  */}

      {/* Dark Mode by default - maybe extend to have a dark light mode switch */}
      {/* Big Title - My name and maybe software developer */}
      {/* Top bar - below title - spanning less than full width, each item has all except top border thin white - nice sliding animation to go into the next section  */}
      {/* Sections in top bar: Intro?, Projects!, Tech stack/skills?, CV content (dont actually link CV, just the content), what I can do for you?, email and other links  */}

      {/* TODO: Make sure you can't select the text in the nav buttons */}
    </div>
  );
}

export default App;
