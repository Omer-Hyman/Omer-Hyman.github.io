import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';
import NavBarItem from './NavBarItem';

function App() {
  // const [sectionInView, setSectionInView] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: true,
    duration: 15,
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
    <div className='h-full bg-gray-900 p-4 font-[roboto] text-white'>
      <header className='mb-4 flex flex-col items-center'>
        <h1 className='mb-1.5 justify-center text-5xl'>Omer Hyman</h1>
        <h2 className='text-2xl'>Software Developer</h2>

        <nav id='navBar' className='mt-4 flex w-[60%] justify-center'>
          <ul className='align-center grid grid-cols-3 justify-center text-center text-lg'>
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

      <div className='embla m-auto max-w-[80%] overflow-hidden' ref={emblaRef}>
        <div className='embla__container flex'>
          <div className='embla__slide min-w-0 flex-[0_0_100%]' id='aboutMe'>
            I am a software engineer with 1.5 years of industry experience, a
            degree in Computer Science and nearly 10 years of development
            experience. Although not officially working as a software engineer
            since 2024, I have been always been working on personal projects in
            my spare time. I love creating new products that I would love to
            have and use in my own personal life. While I have used a wide
            variety of different technologies, I always find myself coming back
            to full stack cross platform web deveelopment. I love using React or
            Angular alongside Capacitor to build web based applications that run
            on Mobile, Desktop or the Web. It is really a powerful tool that
            allows me to use my web development skills to write a cross platform
            application.
            {/* <br></br>
            I have developed a lot during my development career, both
            personally and technically. 
            <br></br>
            In my spare time I like skateboarding */}
          </div>
          <div className='embla__slide min-w-0 flex-[0_0_100%]' id='projects'>
            <h3>Event-based Spotify Playlist Generator</h3>
            <h3>xSocial</h3>
          </div>
          <div className='embla__slide min-w-0 flex-[0_0_100%]' id='contactMe'>
            <h3>Links to all my socials</h3>
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
