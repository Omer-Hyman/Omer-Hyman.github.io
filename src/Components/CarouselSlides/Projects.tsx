import type { JSX } from 'react';

export default function Projects(): JSX.Element {
  return (
    <div>
      {/* TODO: Turn projects into expandable cards? */}
      <div className=''>
        <a
          href='https://eventplaylistgenerator-frontend.onrender.com/'
          target='_blank'
          className='text-mutedCoral hover:text-goldenYellow mb-2 font-[Montserrat_Variable] text-2xl font-semibold'
          rel='noreferrer'
        >
          Spotify Playlist Generator
        </a>
        <p className='mt-3 mb-2 text-center font-semibold'>
          React, Typescript, Node.JS, Express.JS, Supabase, Capacitor, Render
        </p>
        <div id='SpotifyEventPlaylistGenerator'>
          <p>
            I like going to music events and festivals, however, a lot of the
            time, a friend is inviting me and I have no idea what the music is
            going to be like! To better assess if it is worth buying a ticket, I
            have developed an app that allows the user to search for a music
            event and create a Spotify playlist featuring the artists that will
            be performing.
          </p>
          <p>
            The application searches a ticketing website, pulls down the artist
            information, and integrates with Spotify to create a playlist and
            populate it with all of the artists' top songs! During this process,
            the user is also prompted to login to their spotify account in order
            for the playlist to be saved to their profile.
          </p>
          <p>
            When projects get bigger and more complicated, as this one
            eventually did, they can often get messy and difficult to work with.
            In the process of developing this application, I have found it
            helpful to stay organised, through drawing diagrams to visualise my
            system, and keeping a kanban board to keep track of bugs and
            features. As well as this, I have also been following SOLID
            principles pragmatically in order to maintain a clean, modular code
            base, and have been testing all the way through to ensure
            reliability. I have really been focusing on producing high quality
            code to save myself the headache down the line as this project
            scales.
          </p>
          <p>
            This application, like many of my others is responsive and runs on
            Android, iOS and the Web! Check it out{''}
            <a
              href='https://eventplaylistgenerator-frontend.onrender.com/'
              target='_blank'
              className='text-goldenYellow hover:text-burntOrange px-1 underline underline-offset-4'
              rel='noreferrer'
            >
              here.
            </a>
          </p>
        </div>
        {/* <div className='flex aspect-video max-h-[703px] max-w-[937px] content-center lg:m-auto'>
          <iframe
            className='h-full w-full rounded'
            src='https://www.youtube.com/embed/reI4LgNIHRM'
            title='Spotify Playlist Generator demo'
            allowFullScreen
            referrerPolicy='strict-origin-when-cross-origin'
          ></iframe>
        </div> */}
      </div>
      <div className='mt-8'>
        <h3 className='mt-4'>xSocial</h3>
        <p className='mt-3 mb-2 text-center font-semibold'>
          Angular, Typescript, Python, Django, Django REST framework, Capacitor
        </p>
        <p>
          Another hobby of mine is skateboarding. During my final year at
          university, I took on a project to develop an application that would
          allow users to see other user-submitted skate spots on a map. Users
          would be able to share different locations where they have been
          skateboarding in public and they would be able to interact with each
          other, leaving comments and media under each spot entry. My aim for
          this application is to really foster a community feeling, allowing
          skateboarders living in the same area to find each other and skate and
          socialise at different spots found on xSocial.
        </p>
        <div className='flex aspect-video max-h-[703px] max-w-[1250px] content-center lg:m-auto'>
          <iframe
            className='block h-full w-full rounded'
            src='https://www.youtube.com/embed/gWqqvSPyAyM?color=white'
            title='xSocial demo'
            allowFullScreen
            referrerPolicy='strict-origin-when-cross-origin'
          ></iframe>
        </div>
      </div>
    </div>
  );
}
