# Hold My Beer 🍺

A fun web application that adds a beer to your photos using AI image processing or canvas overlay. Upload any photo, and we'll make sure you're holding a beer in it!

## Features

- 📸 Image upload functionality
- 🎨 AI-powered image processing (or canvas overlay)
- 🍺 Automatic beer placement in photos
- 💾 Download processed images
- 📤 Share results on social media
- 🎯 Responsive design for mobile and desktop

## Tech Stack

### Frontend
- React with TypeScript
- Modern CSS (styling TBD)
- Canvas API for image manipulation
- (Optional) AI integration for smart beer placement

### Backend
- Node.js + Express
- MongoDB for storing image metadata
- Image processing middleware
- RESTful API design

## Project Structure

```
hold-my/
  ├── client/          # React frontend
  │   ├── src/
  │   │   ├── components/   # React components
  │   │   ├── services/     # API services
  │   │   └── utils/        # Helper functions
  │   └── public/           # Static files
  └── server/          # Express backend
      ├── src/
      │   ├── controllers/  # Route controllers
      │   ├── models/       # Database models
      │   ├── routes/       # API routes
      │   └── utils/        # Helper functions
      └── uploads/          # Temporary image storage
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally or a MongoDB Atlas account)
- npm or yarn
- (Optional) OpenAI API key or similar for AI features

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

3. Create a `.env` file in the server directory with:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/hold-my-db
   # Add AI API keys if using AI features
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

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Beer overlay assets (TBD)
- Image processing libraries (TBD)
- AI integration services (TBD) 