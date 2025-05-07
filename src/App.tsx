import useEmblaCarousel from 'embla-carousel-react';
import { useState } from 'react';
import NavBarItem from './NavBarItem';

function App() {
  // const [sectionInView, setSectionInView] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: false,
    duration: 15,
    watchDrag: false,
  });

  const [activeNavBarItem, setActiveNavBarItem] = useState(0);
  const [navBarItemInView, setNavBarItemInView] = useState(0);

  const navBarItemClicked = (index: number) => {
    emblaApi?.scrollTo(index);
    setNavBarItemInView(index);
    setActiveNavBarItem(index);
  };

  return (
    <div className='h-full p-4 font-[roboto]'>
      <header className='mb-4 flex flex-col items-center'>
        <h1 className='mb-1.5 justify-center text-5xl'>Omer Hyman</h1>
        <h2 className='text-2xl'>Software Developer</h2>

        <nav
          id='navBar'
          className='mt-4 flex w-[90%] justify-center sm:w-[60%]'
        >
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

      <div
        className='embla m-auto max-w-[90%] overflow-hidden sm:max-w-[80%]'
        ref={emblaRef}
      >
        <div className='embla__container flex'>
          <div className='embla__slide min-w-0 flex-[0_0_100%]' id='aboutMe'>
            I am a software engineer with 1.5 years of industry experience, a
            degree in Computer Science and nearly 10 years of development
            experience. Although not officially working as a software engineer
            since 2024, I have always been working on personal projects in my
            spare time. I love creating new products that I wish existed for my
            own personal use. While I have used a wide variety of different
            technologies, I always find myself coming back to full stack cross
            platform web development. More often than not, I am coding with
            React or Angular alongside Capacitor to build web based applications
            that run on Mobile, Desktop or the Web. Capacitor is really a
            powerful tool that allows me to use my web development skills to
            write a cross platform applications that have the chance to reach a
            wider audience.
            {/* List of skills e.g. ci/cd... */}
          </div>
          <div className='embla__slide min-w-0 flex-[0_0_100%]' id='projects'>
            <h3 className='mb-3'>
              Spotify Playlist Generator based on Live Music Events
            </h3>
            <ul className='mb-3 flex flex-col gap-4'>
              <li>
                Built a responsive, cross-platform, full-stack responsive web
                application integrating a ticketing platform and Spotify API to
                allow users to generate custom Spotify playlists based on live
                music events.
              </li>
              <li>
                The app manages user authentication, data aggregation, and
                seamless communication between multiple client devices and a
                cloud-hosted server.
              </li>
              <li>
                Developing this project has taught me the importance of some
                tools used in industry to manage big complex applications. I
                have been using a Kanban board, data flow diagrams to stay
                organised, and have been carrying out testing ensure
                maintainability.
              </li>
              <li>
                Additionally, I have also been following SOLID principles
                pragmatically to maintain a clean, loosely coupled and scalable
                codebase.
              </li>
            </ul>

            <iframe
              className='m-auto'
              src='https://www.youtube.com/embed/reI4LgNIHRM'
              title=''
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
            ></iframe>
            {/* <video>
              <source
                src='https://www.youtube.com/watch?v=reI4LgNIHRM'
                type='video/mp4'

              />
            </video> */}
            <h3 className='mt-4 mb-3'>xSocial</h3>
            <ul className='mb-3 flex flex-col gap-4'>
              <li>
                Developed a responsive frontend UI, set up a RESTful API and a
                backend database system.
              </li>
              <li>
                Connected to external APIs like Google Maps API and Leaflet to
                provide a graphical map interface.
              </li>
              <li>
                Used Ngrok to host the server allowing me to test across
                multiple devices on different networks.
              </li>
            </ul>

            <iframe
              className='m-auto'
              src='https://www.youtube.com/embed/gWqqvSPyAyM'
              title='xSocial demo'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
            ></iframe>
          </div>
          <div className='embla__slide min-w-0 flex-[0_0_100%]' id='contactMe'>
            <h3>Links to all my socials</h3>
          </div>
        </div>
      </div>

      {/* TODO: Add light mode/dark mode button */}
    </div>
  );
}

export default App;
