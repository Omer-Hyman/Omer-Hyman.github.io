import { type JSX } from 'react';
import NavBarItem from './NavBarItem';

export default function NavBar({
  navBarItemClicked,
}: {
  navBarItemClicked: (navBarItem: number) => void;
}): JSX.Element {
  return (
    <nav id='navBar' className='mt-4 flex w-[90%] justify-center sm:w-[60%]'>
      <ul className='align-center grid grid-cols-3 justify-center text-center text-lg'>
        <li>
          <NavBarItem
            name='About Me'
            clicked={() => {
              navBarItemClicked(0);
            }}
          />
        </li>
        <li>
          <NavBarItem
            name='Projects'
            clicked={() => {
              navBarItemClicked(1);
            }}
          />
        </li>
        <li>
          <NavBarItem
            name='Skills'
            clicked={() => {
              navBarItemClicked(2);
            }}
          />
        </li>
      </ul>
    </nav>
  );
}
