export const Singleproject = [
  {
    title: 'NZ Community Gardens - React.js Tailwind CSS MongoDB',
    overview:
      'This project is a full-stack web app designed to make it easier for communities to discover, contribute to, and manage local garden spaces. Whether someone wants to share their garden with others or find one nearby, this app provides a clean and simple interface to connect people through shared spaces and sustainable living.',

    title2: 'Tech Stack',
    description2:
      'The app is built using Next.js with TypeScript, styled with Tailwind CSS, and powered by PostgreSQL using Prisma ORM. On the backend, the app uses Next.js API routes for server-side logic, including handling form submissions and file uploads. The frontend uses the new /app directory structure in Next 13+ and is optimized for clarity and performance.',

    title3: 'Core Features',
    description3:
      'Users can add a new garden by submitting a form that includes a garden name, description, image, and coordinates (latitude and longitude). These submissions are validated and stored in the PostgreSQL database via Prisma. Each garden is displayed in a list view with all its relevant details—making it easy for users to find gardens near them or browse for inspiration. The UI is responsive and minimal, designed to be equally usable on desktop and mobile.',

    title4: 'Server-Side Logic with Prisma',
    description4:
      'The app uses Prisma to handle data modeling, validation, and querying. Garden records are defined in a schema that includes text fields, images, and geolocation data. Prisma makes it easy to query all gardens on page load and insert new ones on form submission without writing raw SQL. The /api/gardens/route.ts endpoint handles POST requests and inserts new records into the database, while image uploads are written to a local file system directory (uploads). Prisma handles the database transactions, and all data is strongly typed thanks to TypeScript.',

    title5: 'Layout & Design',
    description5:
      'Using the modern Next.js app directory architecture, I kept layout components modular and easy to reuse. Pages are styled with Tailwind, which helped speed up development without sacrificing flexibility. The interface follows a soft, earthy tone to reflect the project’s environmental focus. The form submission includes client-side validation and image preview, creating a user-friendly and smooth experience. Gardens are displayed in cards using a combination of flex and grid layout systems.',

    title6: 'Lessons & Future Improvements',
    description6:
      'This project was a great way to explore server-side logic in Next.js, Prisma data modeling, and real-world file handling in a full-stack app. In the future, I’d like to add: a map view using the Google Maps API or Leaflet, search and filter by location or garden size, user authentication and contribution tracking, and cloud image uploads via S3 or Cloudinary. Overall, the Community Garden app shows how a small idea can be transformed into a functional product with a clean UI, solid backend, and a real-world use case.',
  },
];
