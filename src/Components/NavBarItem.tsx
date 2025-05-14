import { type JSX } from 'react';

export default function NavBarItem({
  name,
  clicked,
  inView,
  hoveredOver,
}: {
  name: string;
  clicked: () => void;
  inView: boolean;
  hoveredOver: boolean;
}): JSX.Element {
  return (
    <div className='group relative flex h-[100%] cursor-default justify-center'>
      <span
        className={`absolute inset-x-0 bottom-0 h-[2px] rounded-b-md bg-[#FF4500] opacity-0 transition-opacity duration-300 ease-in-out group-active:opacity-100 ${hoveredOver ? 'opacity-100' : 'opacity-0'}`}
      ></span>
      <span
        className={`absolute top-0 bottom-0 left-0 w-[2px] rounded-bl-md bg-gradient-to-t from-[#FF4500] to-transparent to-90% transition-opacity duration-300 ease-in-out group-active:opacity-100 ${hoveredOver ? 'opacity-100' : 'opacity-0'}`}
      ></span>
      <span
        className={`absolute top-0 right-0 bottom-0 w-[2px] rounded-br-md bg-gradient-to-t from-[#FF4500] to-transparent to-90% transition-opacity duration-300 ease-in-out group-active:opacity-100 ${hoveredOver ? 'opacity-100' : 'opacity-0'}`}
      ></span>
      <button
        className={`pr-3 pb-2 pl-3 text-center group-active:text-[#FF6F61] ${inView ? 'font-semibold text-[#FF6F61]' : ''} `}
        onClick={() => clicked()}
        type='button'
      >
        {name}
      </button>
    </div>

    // Red borders only when hovering - bold text when on the page
  );
}
