export const projects = [
  /* GARDEN*/
  {
    id: 1,
    video: '/projects/video/garden.mp4',
    images: [
      '/projects/images/garden.png',
      '/projects/images/garden2.png',
      '/projects/images/garden3.png',
      '/projects/images/garden1.png',
    ],
    alt: 'Community garden',
    title: 'NZ Community Gardens - React.js Tailwind CSS MongoDB',
    route: 'communitygarden',
    shortDescription:
      'Full-stack web app designed to make it easier for communities to discover, contribute to, and manage local garden spaces. Whether someone wants to share their garden with others or find one nearby',
    description:
      'This app lets users submit new gardens by picking a spot on a map and adding details. It handles authentication, file uploads, and stores location data in a database. Built with Next.js, TypeScript, Tailwind, Prisma, and Google Maps',
    githubUrl: 'https://github.com/jack-crawford-1/Community-Garden-App',
    insetImage: '/project/garden-1a.png',
    learnings1:
      'I started with Leaflet.js but switched to Google Maps after running into limits around geocoding and flexibility. I had to properly control the map UI and deal with quirks like mobile dragging and zoom.',
    learnings2:
      'I originally had users manually type in coordinates, which was confusing. Moving to a click-to-select map made it way easier. I also had to manage API rate limits when reverse geocoding addresses during form submissions.',
    learnings3:
      'At first I used a local JSON file to save garden info, but it didn’t scale. Switching to PostgreSQL and using PostGIS for distance filtering was a huge upgrade. I had to optimize spatial queries manually to keep things fast.',
    futurePlans:
      'I want to add image uploads with previews, tagging and filtering gardens, better mobile layout, moderation tools, and eventually a small public API.',

    icons: [
      {
        src: '/logos/nextjs.png',
        alt: 'Next',
      },
      {
        src: '/logos/react.png',
        alt: 'React',
      },

      {
        src: '/logos/sqlite.png',
        alt: 'Sqlite',
      },
      {
        src: '/logos/tailwind.png',
        alt: 'Tailwind CSS',
      },
      {
        src: '/logos/typescript.png',
        alt: 'TypeScript',
      },
      {
        src: '/logos/prisma.png',
        alt: 'Prisma',
      },
      {
        src: '/logos/googlemaps.png',
        alt: 'GoogleMaps',
      },
    ],
  },

  /* SUBSCRIBE*/
  {
    id: 2,
    video: '/projects/video/subscribe.mp4',
    images: [
      '/projects/images/subscribe.png',
      '/projects/images/subscribe2.png',
      '/projects/images/subscribe3.png',
      '/projects/images/subscribe1.png',
    ],
    alt: 'Subscribe and Pay',
    title: 'Subscription App with Paystation API and MongoDB',
    route: 'subscribe',
    shortDescription:
      'A full-stack subscription management app built with a React frontend and a Node/Express backend. It allows users to create accounts, subscribe to plans, process payments via a third-party payment gateway, and manage their subscriptions',
    description: `This is a full-stack subscription management app built with a React frontend and a Node/Express backend. It allows users to create accounts, subscribe to plans, process payments via a third-party payment gateway, and manage their subscriptions`,
    githubUrl: 'https://github.com/jack-crawford-1/Subscribe-and-Payments',
    insetImage: '/project/subscribe1a.png',
    learnings1:
      'Handling the full OAuth handshake with Paystation was trickier than expected. I had to work through managing tokens properly and making sure failures didn’t break the user flow.',
    learnings2:
      'I used bcrypt to hash passwords and JWTs for sessions. Building in validation for webhook responses and watching for bad payloads taught me a lot about security and real-world vulnerabilities.',
    learnings3:
      'It was easy to mock the payment process locally, but actually hooking up to the live Paystation sandbox forced me to properly deal with weird edge cases — like network failures and users closing windows mid-payment.',
    futurePlans:
      'Next steps are adding a proper subscription management dashboard, building better error handling for payment failures, and eventually supporting multiple payment providers (not just Paystation).',
    icons: [
      {
        src: '/logos/react.png',
        alt: 'React',
      },

      {
        src: '/logos/vite.png',
        alt: 'Vite',
      },
      {
        src: '/logos/tailwind.png',
        alt: 'Tailewind CSS',
      },

      {
        src: '/logos/jwt.svg',
        alt: 'json web token',
      },
      {
        src: '/logos/node.png',
        alt: 'node',
      },

      {
        src: '/logos/nodemon.png',
        alt: 'nodemon',
      },
      {
        src: '/logos/mongo.png',
        alt: 'MongoDB',
      },
    ],
  },

  /* HIKING*/
  {
    id: 3,
    video: '/projects/video/hiking.mp4',
    images: [
      '/projects/images/hiking.png',
      '/projects/images/hiking2.png',
      '/projects/images/hiking3.png',
      '/projects/images/hiking1.png',
    ],
    alt: 'Custom Map',
    title: 'Hiking App with React, PostgreSQL and the Google Maps API',
    route: 'hiking',
    shortDescription:
      'Full-stack web app designed to help users explore and track walking and biking trails throughout New Zealand. It integrates geospatial data, a user-friendly map interface, and custom tracking features—combining frontend interactivity with backend data persistence.',
    description:
      'This app shows official and user-submitted hiking tracks on a map. Users can create their own tracks, view trail details, and filter by distance. Built with React, Express, PostgreSQL, and Google Maps APIs.',
    githubUrl: 'https://github.com/jack-crawford-1/Hiking-App',
    insetImage: '/project/hiking1a.png',
    learnings1:
      'I used PostGIS for storing trails and running spatial queries. I learned how important it is to add bounding box limits and indexing when you’re dealing with lots of map data.',
    learnings2:
      'Early versions made way too many calls to the Maps API. I added caching and debounced requests to make it more efficient and cheaper to run.',
    learnings3:
      'Building a good UX for drawing lines and shapes on a map was a lot harder than I thought. I had to tweak the drawing libraries and work out how to store and rehydrate custom user tracks without breaking.',
    futurePlans:
      'I want to add better elevation overlays, let users export their drawn trails, improve the mobile experience, and build a simple track review and rating system.',
    icons: [
      {
        src: '/logos/react.png',
        alt: 'React',
      },
      {
        src: '/logos/maptiler.png',
        alt: 'Mapbox',
      },
      {
        src: '/logos/googlemaps.png',
        alt: 'google maps',
      },

      {
        src: '/logos/express.png',
        alt: 'express ',
      },
      {
        src: '/logos/jwt.svg',
        alt: 'json web token',
      },
      {
        src: '/logos/psql.png',
        alt: 'MongoDB',
      },
    ],
  },

  /* KEYBOARD*/
  {
    id: 4,
    video: '/projects/video/keys.mp4',
    images: [
      '/projects/images/keys2.png',
      '/projects/images/keys.png',
      '/projects/images/keys3.png',
      '/projects/images/keys1.png',
    ],
    alt: 'Keyboard',
    title: 'Piano App with React and the Tonejs API',
    route: 'keys',
    shortDescription:
      'A lightweight React-based virtual piano app that lets users play notes and view common chords visually and audibly. It was a fun way to blend frontend development with real-time audio playback and UI design.',
    description:
      'This is a simple piano app that lets you trigger chords by pressing keys on your physical keyboard. It uses Tone.js for sound and highlights each note on a visual piano. The layout includes clickable chord buttons, but they don’t trigger sound (yet). Only keyboard input is supported for now.',
    githubUrl: 'https://github.com/jack-crawford-1/Keyboard-Player-React',
    insetImage: '/project/piano.png',
    learnings1:
      'I used Tone.js to build a polyphonic synth and trigger multiple notes at once. Had to dig into how attack/release settings affect sound and timing. It was good practice for building audio tools that feel responsive.',
    learnings2:
      'I used a Set to track pressed keys and map them to chords like C7 or Am. This was a nice intro to combining music theory with real-time input and React state updates.',
    learnings3: `I got the keyboard input working first and left the styling as an afterthought. The result: the app looks off on mobile, and the chord buttons don’t even do anything. It was a good reminder that if something’s on screen, it should either work or get left out.`,
    futurePlans:
      'Next steps are making the chord buttons actually play sound, fixing the layout so it works properly on mobile, tweaking the synth settings to sound better, and maybe adding a basic playback or recording feature later on.',
    icons: [
      {
        src: '/logos/react.png',
        alt: 'React',
      },

      {
        src: '/logos/vite.png',
        alt: 'Vite',
      },
      {
        src: '/logos/css.png',
        alt: 'Tailwind CSS',
      },
      {
        src: '/logos/typescript.png',
        alt: 'TypeScript',
      },
      {
        src: '/logos/tonejs.png',
        alt: 'Tonejs',
      },
    ],
  },
];
