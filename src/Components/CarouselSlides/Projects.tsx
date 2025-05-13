import type { JSX } from 'react';

export default function Projects(): JSX.Element {
  return (
    <div>
      {/* TODO: Turn projects into expandable cards? */}
      <h3 className='mb-2'>
        Spotify Playlist Generator based on Live Music Events
      </h3>
      <div className='mb-4' id='SpotifyEventPlaylistGenerator'>
        <p>
          Built a responsive, cross-platform, full-stack responsive web
          application integrating a ticketing platform and Spotify API to allow
          users to generate custom Spotify playlists based on live music events.
        </p>
        <p>
          The app manages user authentication, data aggregation, and seamless
          communication between multiple client devices and a cloud-hosted
          server.
        </p>
        <p>
          Developing this project has taught me the importance of some tools
          used in industry to manage big complex applications. I have been using
          a Kanban board, data flow diagrams to stay organised, and have been
          carrying out testing ensure maintainability.
        </p>
        <p>
          Additionally, I have also been following SOLID principles
          pragmatically to maintain a clean, loosely coupled and scalable
          codebase.
        </p>
      </div>

      <iframe
        className='m-auto'
        src='https://www.youtube.com/embed/reI4LgNIHRM'
        title='Spotify Playlist Generator demo'
        allowFullScreen
      ></iframe>
      <h3 className='mt-8 mb-2'>xSocial</h3>
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
