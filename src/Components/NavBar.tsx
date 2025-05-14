import { useEffect, useState, type JSX } from 'react';
import NavBarItem from './NavBarItem';

export default function NavBar({
  navBarItemClicked,
  sectionInView,
}: {
  navBarItemClicked: (navBarItem: number) => void;
  sectionInView: number;
}): JSX.Element {
  const [sectionActiveIndex, setSectionActiveIndex] = useState(0);

  useEffect(() => {
    setSectionActiveIndex(sectionInView);
  }, []);

  return (
    <nav id='navBar' className='mt-4 flex w-[100%] justify-center sm:w-[60%]'>
      <ul className='align-center grid grid-cols-3 justify-center text-center text-lg'>
        <li
          onMouseEnter={() => {
            setSectionActiveIndex(0);
          }}
          onMouseLeave={() => {
            setSectionActiveIndex(sectionInView);
            setSectionActiveIndex(10);
          }}
        >
          <NavBarItem
            name='About Me'
            clicked={() => {
              navBarItemClicked(0);
            }}
            inView={sectionInView === 0}
            hoveredOver={sectionActiveIndex === 0}
          />
        </li>
        <li
          onMouseEnter={() => {
            setSectionActiveIndex(1);
          }}
          onMouseLeave={() => {
            setSectionActiveIndex(sectionInView);
            setSectionActiveIndex(10);
          }}
        >
          <NavBarItem
            name='Projects'
            clicked={() => {
              navBarItemClicked(1);
            }}
            inView={sectionInView === 1}
            hoveredOver={sectionActiveIndex === 1}
          />
        </li>
        <li
          onMouseEnter={() => {
            setSectionActiveIndex(2);
          }}
          onMouseLeave={() => {
            setSectionActiveIndex(sectionInView);
            setSectionActiveIndex(10);
          }}
        >
          <NavBarItem
            name='Skills'
            clicked={() => {
              navBarItemClicked(2);
            }}
            inView={sectionInView === 2}
            hoveredOver={sectionActiveIndex === 2}
          />
        </li>
      </ul>
    </nav>
  );
}
