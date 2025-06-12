export const Singleproject = [
  {
    title: 'Hiking App with React, PostgreSQL and the Google Maps API',
    overview:
      'Full-stack web app designed to help users explore and track walking and biking trails throughout New Zealand. It integrates geospatial data, a user-friendly map interface, and custom tracking features—combining frontend interactivity with backend data persistence.',

    title2: 'Tech Stack',
    description2:
      'The frontend is built using React with TypeScript, styled using Tailwind CSS, and powered by Vite for fast dev tooling. Routing is handled through React Router DOM, and application state is shared via custom React contexts and hooks. The backend is a Node.js and Express server connected to a PostgreSQL database. Trail data is fetched and stored using RESTful API endpoints, and geospatial information is integrated from public NZ sources, including WFS overlays from data.linz.govt.nz.',

    title3: 'Core Features',
    description3:
      'Users can view walking and biking trails overlaid on a custom map, with each trail pulled from a New Zealand government API using a Web Feature Service (WFS). The trails are rendered as polylines, allowing users to see full paths with accurate coordinates. Users can also draw their own routes using a custom map drawing tool. When a path is completed, the app calculates the length and optionally stores it for review or sharing.',

    title4: 'Geospatial Integration',
    description4:
      'One of the standout features is the integration of WFS data layers, including detailed paths for public tracks. These overlays are loaded dynamically and allow for rich interaction without needing a GIS background. The app supports click-to-inspect features, toggling layers, and live polyline editing. Coordinate conversion, distance measurement, and mapping precision were major challenges I had to solve. For performance, large datasets are fetched selectively and drawn only when necessary.',

    title5: 'Backend with PostgreSQL',
    description5:
      'Trail logs are stored in a PostgreSQL database, allowing users to save and retrieve their personal trails. The backend Express server handles routes for creating and deleting entries, with validation and error handling built in. JWT-based authentication ensures secure access to user-specific data. The backend also handles cookie parsing, CORS headers, and serves as a proxy layer between the frontend and sensitive geospatial or database services.',

    title6: 'UX and UI',
    description6:
      'Tailwind CSS ensures a clean and responsive interface. Buttons, toggles, and layer controls are optimized for both desktop and mobile. I focused on keeping the interface minimal while still offering advanced controls like polyline editing, length estimation, and trail tagging.',

    title7: 'Lessons & Future Work',
    description7:
      'Trail Mate gave me hands-on experience with real-world mapping tools, RESTful API integration, and managing geospatial data. In the future, I’d love to add: offline support using IndexedDB, export to GPX or KML, public route sharing and discovery, and elevation data for trail difficulty. This project taught me how to combine visual interaction with real data, and it’s a great example of a practical full-stack app solving a specific need for outdoor enthusiasts.',
  },
];
