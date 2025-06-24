# Hold My App

A full-stack MERN (MongoDB, Express, React, Node.js) application.

## Project Structure

```
hold-my/
  ├── client/          # React frontend
  └── server/          # Express backend
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally or a MongoDB Atlas account)
- npm or yarn

## Getting Started

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the server directory with the following content:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/hold-my-db
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Development

- Frontend runs on: `http://localhost:3000`
- Backend runs on: `http://localhost:5000`

## Scripts

### Backend

- `npm run dev`: Start development server with hot-reload
- `npm run build`: Build the TypeScript code
- `npm start`: Start the production server

### Frontend

- `npm start`: Start development server
- `npm test`: Run tests
- `npm run build`: Build for production 