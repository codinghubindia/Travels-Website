# Traveller Website

A full-stack travel website built with React, TypeScript, Material UI, Express, and MongoDB.

## Project Structure

```
Traveller Website/
├── client/               # Frontend React application
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── services/     # API services
│   │   └── data/         # Static data
│   └── ...
├── server/               # Backend Express application
│   ├── controllers/      # API controllers
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   └── ...
└── ...
```

## Features

- Display popular destinations and tour packages
- Dynamic data loading from backend API
- Responsive design with Material UI components
- User-friendly interface with loading states
- Backend API for fetching data from MongoDB database

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## Setup Instructions

### Backend Setup

1. Navigate to the server directory:
   ```
   cd server
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your environment variables:
   Create a `.env` file in the server directory with the following content:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/traveller
   ```

4. Seed the database with initial data:
   ```
   npm run seed
   ```

5. Start the server:
   ```
   npm run dev
   ```

### Frontend Setup

1. Navigate to the client directory:
   ```
   cd client
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Access the website at `http://localhost:3000`

## API Endpoints

- `GET /api/destinations` - Returns all popular destinations
- `GET /api/destinations/:id` - Returns a specific destination by ID
- `GET /api/packages` - Returns all tour packages
- `GET /api/packages/top-selling` - Returns top-selling tour packages
- `GET /api/packages/:id` - Returns a specific tour package by ID

## Technologies Used

### Frontend
- React
- TypeScript
- Material UI
- React Query
- Tailwind CSS

### Backend
- Node.js
- Express
- MongoDB
- Mongoose 