# Full-Stack Journaling Web App

A full-stack journaling/memory-tracking web application built with Node.js, Express, MongoDB, and Vue.js, following an MVC architecture.

🔗 **Live demo:** https://the-journey-of-us.onrender.com/

## Features

- User authentication (register/login/logout) with hashed passwords and session management
- Create and view timestamped journal entries
- Month-based navigation to browse past entries
- Role-based UI controls (certain actions restricted by user)
- Responsive front-end built with Vue.js

## Tech Stack

**Backend:** Node.js, Express.js
**Database:** MongoDB (Mongoose ODM), hosted on MongoDB Atlas
**Frontend:** Vue.js, EJS templating
**Auth:** bcrypt (password hashing), express-session
**Deployment:** Render

## Architecture

This project follows the MVC (Model-View-Controller) pattern:

```
├── controllers/     # Request handling & business logic
├── models/          # Mongoose schemas (User, Entry)
├── routes/          # Express route definitions
├── views/           # EJS templates
├── public/          # Static assets (CSS, client-side JS)
├── server.js         # App entry point
└── config.env        # Environment variables (not committed)
```

## Getting Started

### Prerequisites
- Node.js installed
- A MongoDB Atlas account (or local MongoDB instance)

### Setup

1. Clone the repository
   ```bash
   git clone <repo-url>
   cd <repo-folder>
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `config.env` file in the root directory:
   ```
   DB=your_mongodb_connection_string
   SESSION_SECRET=your_session_secret
   ```

4. Run the app
   ```bash
   node server.js
   ```

5. Visit `http://localhost:8000` (or your configured port)

## What I Learned

- Structuring a full-stack app using MVC to keep concerns separated
- Implementing secure authentication with bcrypt and session-based login
- Building reactive front-end interfaces with Vue.js (v-for, v-model, computed properties)
- Deploying a Node/Express app to production (Render) with environment variable management and MongoDB Atlas network configuration
- Using Git branching and pull requests to manage feature development

## Notes on Media

User-uploaded images are excluded from version control via `.gitignore` to keep personal content out of the public repository.

## Future Improvements

- Add edit/delete functionality for entries
- Add image upload support for entries
- Add unit tests (Vitest) for controller logic
