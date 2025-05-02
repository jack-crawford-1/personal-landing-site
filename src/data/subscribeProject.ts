export const Singleproject = [
  {
    title: 'Full-Stack Subscription App with Payments and MongoDB',
    overview:
      'For this project, I built a full-stack subscription web app that handles user sign-up, plan selection, payments, and subscription management, integrated into a React frontend and an Express/MongoDB backend. I wanted the system to mimic real-world SaaS functionality, including payment integration and active subscription tracking.',

    title2: 'Tech Stack',
    description2:
      'The frontend is a Vite-powered React app using TypeScript, Tailwind CSS for styling, and React Router for navigation. The backend is a Node.js server running Express, with MongoDB (via Mongoose) as the database. Authentication is handled using JWTs, and all user passwords are hashed with bcrypt.',

    title3: 'Auth & Roles',
    description3:
      'Users can sign up and log in, with authentication via JWT tokens. Roles are built in—admin users can view all subscriptions across the platform, while regular users manage their own. Tokens are stored in localStorage, and all protected routes require valid authorisation headers.',

    title4: 'Subscription Flow',
    description4:
      'The core flow starts with plan selection. Plans (e.g. Basic, Intermediate, Advanced) are displayed as cards, and selecting one takes users to a confirmation page. Once confirmed, the app generates a payment request and redirects the user to a hosted payment page via Paystation, using OAuth to securely authenticate the backend with their API.\n\nThe user never enters card details into our app—the entire payment process happens on Paystation’s hosted UI. Once payment is complete, the user is redirected back to a success page in the app, which then triggers a backend call to create the subscription in MongoDB.',

    title5: 'Payment Integration',
    description5:
      'I used Paystation’s Hosted Purchase API for payments. The backend handles the OAuth token exchange and initiates the purchase request. Once Paystation responds with a payment URL, the frontend redirects the user there. This flow ensures sensitive payment data never touches our servers',

    title6: 'MongoDB & Mongoose',
    description6:
      'Subscriptions are stored in MongoDB and include details like plan name, price, frequency, start date, and renewal date. A Mongoose pre-save hook automatically calculates the next renewal date based on billing frequency (monthly, yearly, etc.), and marks subscriptions as expired if past due.',

    title7: 'Managing Subscriptions',
    description7:
      'Users can view and delete their subscriptions from a dashboard. Admins get access to view all users’ subscriptions and upcoming renewals. The UI is simple, responsive, and uses Tailwind to stay consistent and clean across views.',

    title8: 'Lessons & Next Steps',
    description8:
      'This build taught me a lot about managing external APIs, building secure authentication flows, and architecting a full-stack system where each layer handles its job well. Next steps could include recurring billing, better UX for cancellation, or adding webhook support from the payment gateway.\n\nOverall, this project was a great deep dive into subscription flows, third-party integrations, and backend security.',
  },
];
