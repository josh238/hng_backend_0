🚀 HNG-13: STAGE 0 (#track_backend)
Dynamic Profile Endpoint API
A profile endpoint that returns my profile information along with a dynamic cat fact fetched from an external API.
💡 Features
Working with third party APIs
Working with JSON data
Appropriate error handling
Backend rate limiting
💼 Tech Stack
Backend: Node.js/Express
Rate limiter: express-rate-limit
External API: Cat fact API
🔧 Setup Guides
Clone the GitHub repository

git clone https://github.com/josh238/hng_stage_0.git
Install dependencies

npm install
Declare environment variables

PORT="your preferred port -> e.g 3000"
Start the development server

cd hng_stage_0
node server.js
🔗 Endpoints
URL endpoints

GET /       ->  index endpoint
GET /me     ->  profile endpoint
📃 Response format
JSON response format

    GET /
    {
        "status": "success",
        "message": "Welcome to my dynamic profile API"
    }

    GET /me
    {
    "status": "success",
    "user": {
        "email": "joshadelere238@gmail.com",
        "name": "Joshua Adelere",
        "stack": "Node.js/Express"
    },
    "timestamp": "2025-10-15T19:35:01.868Z",
    "fact": "A group of cats is called a “clowder.”"
    }
🔥 Live demo endpoint
https://hngbackend0-production.up.railway.app
📬 Contact
Connect with me:

📧 Email: napg.adekunle@gmail.com
🌈 Slack: Jamal-09
Built with 💻 & ❤️ by Jamal
