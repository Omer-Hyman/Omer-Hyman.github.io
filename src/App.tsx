import { useEffect, useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { VscGithub } from 'react-icons/vsc';
import { FaSquareUpwork } from 'react-icons/fa6';
import type { JSX } from 'react';
import NavBar from './Components/NavBar';
import EmblaCarousel from './Components/EmblaCarousel';
import { getIndexFromUrlFragment, setUrlFragment } from './Utilities';
import { useLocation } from 'react-router-dom';

// TODO: Change all the prop drilling to a usecontext?

function App(): JSX.Element {
  const location = useLocation();
  const [startOn] = useState(() => {
    const index = getIndexFromUrlFragment();
    return index ?? 0;
  });
  const [sectionInView, setSectionInView] = useState(startOn);

  useEffect(() => {
    setUrlFragment(sectionInView);
  }, [sectionInView]);

  useEffect(() => {
    const index = getIndexFromUrlFragment();
    if (index !== null) setSectionInView(index);
  }, [location]);

  return (
    <div className='h-full p-4 font-[roboto]'>
      <header className='mb-4 flex h-fit flex-col items-center'>
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

        <NavBar
          navBarItemClicked={(navBarItem) => setSectionInView(navBarItem)}
          sectionInView={sectionInView}
        ></NavBar>

        {/* TODO: When scrolling down, leave nav bar sticky at the top */}
        {/* TODO: Resize slide */}
      </header>

      <EmblaCarousel
        startingSlide={startOn}
        scrollTo={sectionInView}
        contactMeClicked={() => setSectionInView(2)}
      ></EmblaCarousel>

      {/* TODO: Add light mode/dark mode button */}
    </div>
  );
}

export default App;
