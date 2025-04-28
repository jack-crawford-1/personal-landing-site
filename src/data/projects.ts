export const projects = [
  /* GARDEN*/
  {
    id: 1,
    video: '/projects/video/garden.mp4',
    images: [
      '/projects/images/garden.png',
      '/projects/images/garden.png',
      '/projects/images/garden.png',
    ],
    alt: 'Community garden',
    title: 'Community Garden',
    route: 'communitygarden',
    shortDescription:
      'A web app for finding, contributing to, and managing community gardens. Users can submit new garden locations with coordinates and extra details.',
    description:
      'A web app for finding, contributing to, and managing community gardens. Users can submit new garden locations with coordinates and extra details. Implements authentication, Prisma with SQLite for data management, and Google Maps API for visualising location data. Built using Next.js, TypeScript, and Tailwind CSS with a focus on backend logic and user contributions.',
    githubUrl: 'https://github.com/jack-crawford-1/Community-Garden-App',
    insetImage: '/project/garden-1a.png',
    learnings1:
      'I initially experimented with Leaflet.js due to its lightweight nature, but I quickly realised its limitations, particularly in built-in geocoding. Switching to Google Maps provided much more flexibility, however, I had to fine-tune the controls and UI elements. For file handling, Multer made the process of uploading images straightforward, but I encountered challenges with handling large file sizes and ensuring secure validation. Implementing proper MIME-type checks and file compression was necessary to prevent security vulnerabilities and optimise performance. When integrating authentication, NextAuth.js worked well, but I found that relying solely on in-memory sessions led to issues with persistence, especially across server restarts. Moving to a database-backed session storage significantly improved stability and ensured a more reliable auth flow for users.',
    learnings2:
      'While setting up user input for map-based data, I originally used plain text fields where users had to enter coordinates manually. This turned out to be confusing and easy to get wrong. Switching to a map-based selection made things much easier and more accurate. I added reverse geocoding to show location names, but ran into rate limits during testing. I fixed this by caching recent results and only sending the request when the form was submitted. For styling, I used Tailwind CSS which helped with layout, but I still had to create a few custom classes to keep the map container responsive and layering consistent.',
    learnings3:
      'I started off using a local JSON file to store location data while testing, but moved to PostgreSQL once I needed better filtering and search. This made it easier to find places nearby or filter by tags. I used PostGIS for distance calculations, but had to write some custom SQL to keep things fast as more data was added. Adding indexes and limiting results to a bounding box helped a lot. I used Prisma for most database tasks, but sometimes had to fall back to raw SQL when Prisma couldn’t handle the more complex spatial queries.',
    futurePlans:
      'Future plans include switching to PostgreSQL with PostGIS for improved spatial queries, adding image uploads with previews, tagging and filtering, moderation tools, and a more mobile-friendly layout. A small public API is also planned to support third-party access.',

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
      '/projects/images/subscribe.png',
      '/projects/images/subscribe.png',
    ],
    alt: 'Subscribe and Pay',
    title: 'Subscribe and Pay',
    route: 'subscribe',
    shortDescription:
      'A full-stack app for handling subscriptions and payments using Paystation’s OAuth and Hosted Purchases API.',
    description:
      'A full-stack app for handling subscriptions and payments using Paystation’s OAuth and Hosted Purchases API. Payment responses are validated before storing data in MongoDB. Features authentication with JWT, bcrypt, and Express, with Mongoose for managing database logic. Provides API endpoints for user auth, subscription setup, and payment handling.',
    githubUrl: 'https://github.com/jack-crawford-1/Subscribe-and-Payments',
    insetImage: '/project/subscribe1a.png',
    learnings1:
      'I initially experimented with Leaflet.js due to its lightweight nature, but I quickly realised its limitations, particularly in built-in geocoding. Switching to Google Maps provided much more flexibility, however, I had to fine-tune the controls and UI elements. For file handling, Multer made the process of uploading images straightforward, but I encountered challenges with handling large file sizes and ensuring secure validation. Implementing proper MIME-type checks and file compression was necessary to prevent security vulnerabilities and optimise performance. When integrating authentication, NextAuth.js worked well, but I found that relying solely on in-memory sessions led to issues with persistence, especially across server restarts. Moving to a database-backed session storage significantly improved stability and ensured a more reliable auth flow for users.',
    learnings2:
      'While setting up user input for map-based data, I originally used plain text fields where users had to enter coordinates manually. This turned out to be confusing and easy to get wrong. Switching to a map-based selection made things much easier and more accurate. I added reverse geocoding to show location names, but ran into rate limits during testing. I fixed this by caching recent results and only sending the request when the form was submitted. For styling, I used Tailwind CSS which helped with layout, but I still had to create a few custom classes to keep the map container responsive and layering consistent.',
    learnings3:
      'I started off using a local JSON file to store location data while testing, but moved to PostgreSQL once I needed better filtering and search. This made it easier to find places nearby or filter by tags. I used PostGIS for distance calculations, but had to write some custom SQL to keep things fast as more data was added. Adding indexes and limiting results to a bounding box helped a lot. I used Prisma for most database tasks, but sometimes had to fall back to raw SQL when Prisma couldn’t handle the more complex spatial queries.',
    futurePlans:
      'Future plans include switching to PostgreSQL with PostGIS for improved spatial queries, adding image uploads with previews, tagging and filtering, moderation tools, and a more mobile-friendly layout. A small public API is also planned to support third-party access.',
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
      '/projects/images/hiking.png',
      '/projects/images/hiking.png',
    ],
    alt: 'Custom Map',
    title: 'DOC Hiking Trails',
    route: 'hiking',
    shortDescription:
      'A full-stack web app for browsing, sharing, and managing hiking tracks..',
    description:
      'A full-stack web app for browsing, sharing, and managing hiking tracks. Uses Google Maps API for map rendering, integrates external APIs for geolocation data, and stores trails in PostgreSQL. Implements authentication, geospatial logic, and API efficiency. Built to explore backend mapping tools, elevation overlays, and custom user-drawn routes.',
    githubUrl: 'https://github.com/jack-crawford-1/Hiking-App',
    insetImage: '/project/hiking1a.png',
    learnings1:
      'I initially experimented with Leaflet.js due to its lightweight nature, but I quickly realised its limitations, particularly in built-in geocoding. Switching to Google Maps provided much more flexibility, however, I had to fine-tune the controls and UI elements. For file handling, Multer made the process of uploading images straightforward, but I encountered challenges with handling large file sizes and ensuring secure validation. Implementing proper MIME-type checks and file compression was necessary to prevent security vulnerabilities and optimise performance. When integrating authentication, NextAuth.js worked well, but I found that relying solely on in-memory sessions led to issues with persistence, especially across server restarts. Moving to a database-backed session storage significantly improved stability and ensured a more reliable auth flow for users.',
    learnings2:
      'While setting up user input for map-based data, I originally used plain text fields where users had to enter coordinates manually. This turned out to be confusing and easy to get wrong. Switching to a map-based selection made things much easier and more accurate. I added reverse geocoding to show location names, but ran into rate limits during testing. I fixed this by caching recent results and only sending the request when the form was submitted. For styling, I used Tailwind CSS which helped with layout, but I still had to create a few custom classes to keep the map container responsive and layering consistent.',
    learnings3:
      'I started off using a local JSON file to store location data while testing, but moved to PostgreSQL once I needed better filtering and search. This made it easier to find places nearby or filter by tags. I used PostGIS for distance calculations, but had to write some custom SQL to keep things fast as more data was added. Adding indexes and limiting results to a bounding box helped a lot. I used Prisma for most database tasks, but sometimes had to fall back to raw SQL when Prisma couldn’t handle the more complex spatial queries.',
    futurePlans:
      'Future plans include switching to PostgreSQL with PostGIS for improved spatial queries, adding image uploads with previews, tagging and filtering, moderation tools, and a more mobile-friendly layout. A small public API is also planned to support third-party access.',
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
      '/projects/images/keys.png',
      '/projects/images/keys.png',
      '/projects/images/keys.png',
    ],
    alt: 'Keyboard',
    title: 'Tonejs Keyboard',
    route: 'keys',
    shortDescription:
      'A mini piano app built with React, TypeScript, and Tone.js for real-time audio synthesis.',
    description:
      'A mini piano app built with React, TypeScript, and Tone.js for real-time audio synthesis. Tracks keyboard input, plays chords, and handles user interaction with state-driven logic. Uses event listeners to manage key presses and trigger dynamic audio rendering. Focuses on real-time audio, sound accuracy, and performance optimisation.',
    githubUrl: 'https://github.com/jack-crawford-1/Keyboard-Player-React',
    insetImage: '/project/piano.png',
    learnings1:
      'I initially experimented with Leaflet.js due to its lightweight nature, but I quickly realised its limitations, particularly in built-in geocoding. Switching to Google Maps provided much more flexibility, however, I had to fine-tune the controls and UI elements. For file handling, Multer made the process of uploading images straightforward, but I encountered challenges with handling large file sizes and ensuring secure validation. Implementing proper MIME-type checks and file compression was necessary to prevent security vulnerabilities and optimise performance. When integrating authentication, NextAuth.js worked well, but I found that relying solely on in-memory sessions led to issues with persistence, especially across server restarts. Moving to a database-backed session storage significantly improved stability and ensured a more reliable auth flow for users.',
    learnings2:
      'While setting up user input for map-based data, I originally used plain text fields where users had to enter coordinates manually. This turned out to be confusing and easy to get wrong. Switching to a map-based selection made things much easier and more accurate. I added reverse geocoding to show location names, but ran into rate limits during testing. I fixed this by caching recent results and only sending the request when the form was submitted. For styling, I used Tailwind CSS which helped with layout, but I still had to create a few custom classes to keep the map container responsive and layering consistent.',
    learnings3:
      'I started off using a local JSON file to store location data while testing, but moved to PostgreSQL once I needed better filtering and search. This made it easier to find places nearby or filter by tags. I used PostGIS for distance calculations, but had to write some custom SQL to keep things fast as more data was added. Adding indexes and limiting results to a bounding box helped a lot. I used Prisma for most database tasks, but sometimes had to fall back to raw SQL when Prisma couldn’t handle the more complex spatial queries.',
    futurePlans:
      'Future plans include switching to PostgreSQL with PostGIS for improved spatial queries, adding image uploads with previews, tagging and filtering, moderation tools, and a more mobile-friendly layout. A small public API is also planned to support third-party access.',
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
