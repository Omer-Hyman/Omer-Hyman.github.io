import type { JSX } from 'react';

export default function NavBarItem({
  name,
  clicked,
}: {
  name: string;
  clicked: () => void;
}): JSX.Element {
  return (
    <div className='group relative flex h-[100%] cursor-default justify-center'>
      <span
        className={
          'absolute inset-x-0 bottom-0 h-[2px] rounded-b-md bg-[#FF4500] opacity-0 transition-opacity group-hover:opacity-100 group-active:opacity-100'
        }
      ></span>
      <span
        className={
          'absolute top-0 bottom-0 left-0 w-[2px] rounded-bl-md bg-gradient-to-t from-[#FF4500] to-transparent to-90% opacity-0 transition-opacity group-hover:opacity-100 group-active:opacity-100'
        }
      ></span>
      <span
        className={
          'absolute top-0 right-0 bottom-0 w-[2px] rounded-br-md bg-gradient-to-t from-[#FF4500] to-transparent to-90% opacity-0 transition-opacity group-hover:opacity-100 group-active:opacity-100'
        }
      ></span>

      <button
        className={`pr-3 pb-2 pl-3 text-center font-extrabold group-hover:font-semibold`}
        onClick={() => clicked()}
        type='button'
      >
        {name}
      </button>
    </div>

    // Red borders only when hovering - bold text when on the page
  );
}
