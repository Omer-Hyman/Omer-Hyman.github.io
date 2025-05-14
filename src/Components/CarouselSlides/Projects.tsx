import type { JSX } from 'react';

export default function Projects(): JSX.Element {
  return (
    <div>
      {/* TODO: Turn projects into expandable cards? */}
      <h3>Spotify Playlist Generator based on Live Music Events</h3>
      <div className='mb-4' id='SpotifyEventPlaylistGenerator'>
        <p>
          I like going to music events and festivals in my spare time. However,
          a lot of the times, it is my friend inviting me out and I have no idea
          what the music is going to be like! To better assess worth of buying a
          ticket, I have developed an app that allows the user to search for a
          music event and create a Spotify playlist featuring the artists that
          are going to be performing.
        </p>
        <p>
          The application searches a ticketing website, gets down the artist
          information, and then integrates with the Spotify web api to create a
          playlist and populate it with all of the artist's top songs! In the
          process, the user is also prompted to authenticate/login to their
          spotify account in order for the playlist to be saved on their
          profile.
        </p>
        <p>
          When projects get bigger and more complicated, as this one eventually
          did, they can often get messy and difficult to work with. In the
          process of developing this application, I have found it helpful to
          stay organised, through drawing diagrams to visualise my system, and
          keeping a kanban board to keep track of bugs and features. As well as
          this, I have also been following SOLID principles pragmatically in
          order to maintain a clean, modular code base, and have been testing
          all the way through to ensure reliability. I have really been focusing
          on producing high quality code to save myself the headache down the
          line as this project scales.
        </p>
        <p>
          This application, like many of my others is cloud-hosted, responsive
          and runs on android, iOS and the Web! Please, be my guest and visit it
          at ...
        </p>
      </div>

      <iframe
        className='m-auto'
        src='https://www.youtube.com/embed/reI4LgNIHRM'
        title='Spotify Playlist Generator demo'
        allowFullScreen
      ></iframe>
      <h3 className='mt-8'>xSocial</h3>
      <div className='mb-3'>
        <p>
          Developed a responsive frontend UI, set up a RESTful API and a backend
          database system.
        </p>
        <p>
          Connected to external APIs like Google Maps API and Leaflet to provide
          a graphical map interface.
        </p>
        <p>
          Used Ngrok to host the server allowing me to test across multiple
          devices on different networks.
        </p>
      </div>
      <iframe
        className='mx-auto'
        src='https://www.youtube.com/embed/gWqqvSPyAyM?color=white'
        title='xSocial demo'
        allowFullScreen
      ></iframe>
    </div>
  );
}
