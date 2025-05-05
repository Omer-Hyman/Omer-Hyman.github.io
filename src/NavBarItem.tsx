export default function NavBarItem({ name }: { name: string }) {
  return (
    <div className='relative cursor-default group'>
      <span className='absolute inset-x-0 bottom-0 h-[2px] bg-gray-200 rounded-b-md opacity-0 group-hover:opacity-100 transition-opacity'></span>
      <span className='absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-t from-gray-200 to-transparent to-90% rounded-bl-md opacity-0 group-hover:opacity-100 transition-opacity'></span>
      <span className='absolute top-0 bottom-0 right-0 w-[2px] bg-gradient-to-t from-gray-200 to-transparent to-90% rounded-br-md opacity-0 group-hover:opacity-100 transition-opacity'></span>

      <button className='pl-3 pr-3 text-center'>{name}</button>
    </div>
  );
}
