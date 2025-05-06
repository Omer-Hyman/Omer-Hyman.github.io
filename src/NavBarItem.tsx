export default function NavBarItem({
  name,
  clicked,
  active,
  inView,
}: {
  name: string;
  clicked: () => void;
  active: boolean;
  inView: boolean;
}) {
  return (
    <div className='relative cursor-default group h-[100%] flex justify-center'>
      <span
        className={`absolute inset-x-0 bottom-0 h-[2px] bg-gray-200 rounded-b-md group-hover:opacity-100 transition-opacity ${
          active ? 'opacity-100' : 'opacity-0'
        }`}
      ></span>
      <span
        className={`absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-t from-gray-200 to-transparent to-90% rounded-bl-md group-hover:opacity-100 transition-opacity ${
          active ? 'opacity-100' : 'opacity-0'
        }`}
      ></span>
      <span
        className={`absolute top-0 bottom-0 right-0 w-[2px] bg-gradient-to-t from-gray-200 to-transparent to-90% rounded-br-md group-hover:opacity-100 transition-opacity ${
          active ? 'opacity-100' : 'opacity-0'
        }`}
      ></span>

      <button
        className={`pl-3 pr-3 pb-2 text-center ${
          inView ? 'font-semibold' : ''
        }`}
        onClick={() => clicked()}
      >
        {name}
      </button>
    </div>
  );
}
