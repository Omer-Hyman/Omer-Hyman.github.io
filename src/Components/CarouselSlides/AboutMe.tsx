import type { JSX } from 'react';

export default function AboutMe({
  contactMeClicked,
}: {
  contactMeClicked: () => void;
}): JSX.Element {
  return (
    <div>
      <h3>About Me</h3>
      <p>
        I am a software engineer with 1.5 years of industry experience, a degree
        in Computer Science and nearly 10 years of development experience. I am
        always working on prohjects in my spare time. I love creating new
        products that I wish existed for my own personal use, and I find I have
        learnt a lot whilst developing these projects.
      </p>
      <p>
        While I have used a wide variety of different technologies, I always
        find myself coming back to full stack cross platform web development.
        More often than not, I am coding with React or Angular alongside
        Capacitor to build web based applications that run on Mobile, Desktop or
        the Web. Capacitor is really a powerful tool that allows me to use my
        web development skills to write a cross platform applications that have
        the oppurtunity to reach a wider audience.
      </p>
      <p>
        Whether you need help with bug fixes, development of standalone features
        to integrate into your codebase, or whole applications developed and
        delivered I can help. Don't hesitate to{' '}
        <button
          onClick={contactMeClicked}
          className='text-goldenYellow hover:text-burntOrange px-1 underline underline-offset-4'
        >
          get in contact
        </button>{' '}
        and we can discuss details. I am based in the UK right now so I'm
        available during GMT times.
      </p>
      {/* TODO: Link contact to contact me form */}
    </div>
  );
}
