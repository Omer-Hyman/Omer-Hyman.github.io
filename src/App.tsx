import { useState } from 'react';

function App() {
  const [sectionInView, setSectionInView] = useState(0);

  return (
    <div className='bg-gray-900 h-full text-white p-4'>
      <header className='flex flex-col items-center mb-7'>
        <h1 className='text-5xl justify-center mb-1.5'>Omer Hyman</h1>
        <h2 className='text-2xl'>Software Developer</h2>
      </header>
      <div id='topBar' className='flex justify-center'>
        <ul className='flex text-lg w-[55%] text-center'>
          <li
            onClick={() => setSectionInView(0)}
            className={`w-[25%] py-1.5 hover:bg-linear-to-t from-gray-300 to-gray-900 to-95% hover:text-gray-900 hover:font-bold cursor-default ${
              sectionInView === 0
                ? 'bg-linear-to-t from-gray-300 to-gray-900 to-95% text-gray-900'
                : ''
            }`}
          >
            About Me
          </li>
          <li
            onClick={() => setSectionInView(1)}
            className={`w-[25%] py-1.5 hover:bg-linear-to-t from-gray-300 to-gray-900 to-95% hover:text-gray-900 hover:font-bold cursor-default ${
              sectionInView === 1
                ? 'bg-linear-to-t from-gray-300 to-gray-900 to-95% text-gray-900'
                : ''
            }`}
          >
            Projects
          </li>
          {/* <li className='w-[25%] py-1.5 hover:bg-linear-to-t from-gray-300 to-gray-900 to-95% hover:text-gray-900 hover:font-bold cursor-default'>
            My History
          </li> */}
          <li
            onClick={() => setSectionInView(2)}
            className={`w-[25%] py-1.5 hover:bg-linear-to-t from-gray-300 to-gray-900 to-95% hover:text-gray-900 hover:font-bold cursor-default ${
              sectionInView === 2
                ? 'bg-linear-to-t from-gray-300 to-gray-900 to-95% text-gray-900'
                : ''
            }`}
          >
            Contact Me
          </li>
        </ul>
      </div>

      {/* White border around bottom left and right, change to black at the bottom so white to black at 20% - maybe implement a shadow  */}

      {/* Dark Mode by default - maybe extend to have a dark light mode switch */}
      {/* Big Title - My name and maybe software developer */}
      {/* Top bar - below title - spanning less than full width, each item has all except top border thin white - nice sliding animation to go into the next section  */}
      {/* Sections in top bar: Intro?, Projects!, Tech stack/skills?, CV content (dont actually link CV, just the content), what I can do for you?, email and other links  */}
    </div>
  );
}

export default App;
