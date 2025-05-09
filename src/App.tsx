import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';
import NavBarItem from './NavBarItem';
import { FaLinkedin } from 'react-icons/fa';
import { VscGithub } from 'react-icons/vsc';
import { FaSquareUpwork } from 'react-icons/fa6';
import type { JSX } from 'react';

enum NavBarItems {
  AboutMe,
  Projects,
  Skills,
}

function App(): JSX.Element {
  const [navBarItemInView, setNavBarItemInView] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: false,
    duration: 15,
    watchDrag: false,
    startIndex: navBarItemInView,
  });

  // const [activeNavBarItem, setActiveNavBarItem] = useState(0);
  useEffect(() => {
    const url = window.location.href.split('#');
    if (url.length > 0) {
      // CompileTime Safety:
      const fragment = url[1] as keyof typeof NavBarItems;
      // RunTime Safety:
      if (fragment in NavBarItems && isNaN(Number(fragment))) {
        setNavBarItemInView(NavBarItems[fragment]);
        console.log(emblaApi);

        console.log('setting item in view to ', NavBarItems[fragment]);
      }
    }
  }, []);

  const navBarItemClicked = (index: number): void => {
    emblaApi?.scrollTo(index);
    setNavBarItemInView(index);

    const fragment = NavBarItems[index].toString();
    const newUrl = `${window.location.href.split('#')[0]}#${fragment}`;
    window.location.href = newUrl;
  };

  return (
    <div className='h-full p-4 font-[roboto]'>
      <header className='mb-3 flex flex-col items-center'>
        <h1 className='mb-1.5 justify-center'>Omer Hyman</h1>
        <h2 className='mb-2'>Software Developer</h2>

        <div id='iconBar' className='mt-1 flex gap-3'>
          <FaLinkedin
            className='text-4xl transition duration-125 hover:scale-130'
            onClick={() => {
              window
                .open('https://www.linkedin.com/in/omer-hyman-34287b151/')
                ?.focus();
            }}
          />

          <VscGithub
            className='text-4xl duration-125 hover:scale-130'
            onClick={() => {
              window.open('https://github.com/Omer-Hyman')?.focus();
            }}
          />
          <FaSquareUpwork
            className='text-4xl duration-125 hover:scale-130'
            onClick={() => {
              window
                .open('https://www.upwork.com/freelancers/~0196bcb58c81e91a97')
                ?.focus();
            }}
          />
        </div>

        <nav
          id='navBar'
          className='mt-4 flex w-[90%] justify-center sm:w-[60%]'
        >
          <ul className='align-center grid grid-cols-3 justify-center text-center text-lg'>
            <li>
              <NavBarItem
                name='About Me'
                clicked={() => {
                  navBarItemClicked(0);
                }}
                inView={navBarItemInView === 0}
              />
            </li>
            <li>
              <NavBarItem
                name='Projects'
                clicked={() => {
                  navBarItemClicked(1);
                }}
                inView={navBarItemInView === 1}
              />
            </li>
            <li>
              <NavBarItem
                name='Skills'
                clicked={() => {
                  navBarItemClicked(2);
                }}
                inView={navBarItemInView === 2}
              />
            </li>
          </ul>
        </nav>
      </header>

      <div
        className='embla m-auto max-w-[95%] overflow-hidden sm:max-w-[80%]'
        ref={emblaRef}
      >
        <div className='embla__container flex'>
          <div className='embla__slide min-w-0 flex-[0_0_100%]' id='aboutMe'>
            <p>
              I am a software engineer with 1.5 years of industry experience, a
              degree in Computer Science and nearly 10 years of development
              experience.
            </p>
            <p>
              Although not officially working as a software engineer since 2024,
              I have always been working on personal projects in my spare time.
              I love creating new products that I wish existed for my own
              personal use.
            </p>
            <p>
              While I have used a wide variety of different technologies, I
              always find myself coming back to full stack cross platform web
              development. More often than not, I am coding with React or
              Angular alongside Capacitor to build web based applications that
              run on Mobile, Desktop or the Web. Capacitor is really a powerful
              tool that allows me to use my web development skills to write a
              cross platform applications that have the chance to reach a wider
              audience.
            </p>
            {/* List of skills e.g. ci/cd... */}
          </div>
          <div
            className='embla__slide mb-8 min-w-0 flex-[0_0_100%]'
            id='projects'
          >
            {/* TODO: Turn projects into expandable cards? */}
            <h3 className='mb-2'>
              Spotify Playlist Generator based on Live Music Events
            </h3>
            <ul className='mb-4' id='SpotifyEventPlaylistGenerator'>
              <p>
                Built a responsive, cross-platform, full-stack responsive web
                application integrating a ticketing platform and Spotify API to
                allow users to generate custom Spotify playlists based on live
                music events.
              </p>
              <p>
                The app manages user authentication, data aggregation, and
                seamless communication between multiple client devices and a
                cloud-hosted server.
              </p>
              <p>
                Developing this project has taught me the importance of some
                tools used in industry to manage big complex applications. I
                have been using a Kanban board, data flow diagrams to stay
                organised, and have been carrying out testing ensure
                maintainability.
              </p>
              <p>
                Additionally, I have also been following SOLID principles
                pragmatically to maintain a clean, loosely coupled and scalable
                codebase.
              </p>
            </ul>

            <iframe
              className='m-auto'
              src='https://www.youtube.com/embed/reI4LgNIHRM'
              title='Spotify Playlist Generator demo'
              allowFullScreen
            ></iframe>
            <h3 className='mt-8 mb-2'>xSocial</h3>
            <div className='mb-3'>
              <p>
                Developed a responsive frontend UI, set up a RESTful API and a
                backend database system.
              </p>
              <p>
                Connected to external APIs like Google Maps API and Leaflet to
                provide a graphical map interface.
              </p>
              <p>
                Used Ngrok to host the server allowing me to test across
                multiple devices on different networks.
              </p>
            </div>
            <iframe
              className='m-auto'
              src='https://www.youtube.com/embed/gWqqvSPyAyM?color=white'
              title='xSocial demo'
              allowFullScreen
            ></iframe>
          </div>
          <div className='embla__slide min-w-0 flex-[0_0_100%]' id='contactMe'>
            <h3></h3>
          </div>
        </div>
      </div>

      {/* TODO: Add light mode/dark mode button */}
    </div>
  );
}

export default App;
