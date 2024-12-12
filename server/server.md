# SchoolBridge API Server Documentation

## Overview
This is the main server configuration file for the SchoolBridge API. It sets up an Express server with necessary middleware, database connection, and route configurations.

## Environment Variables
The following environment variables are required:

| Variable    | Description                    | Default     |
|------------|--------------------------------|-------------|
| PORT       | Server port number             | 5000        |
| MONGO_URI  | MongoDB connection string      | -           |
| NODE_ENV   | Environment mode              | development |

## Middleware
The server uses the following middleware:

1. **CORS** - Enables Cross-Origin Resource Sharing
2. **express.json()** - Parses incoming JSON payloads

## API Routes

### Base Routes
- `GET /` - Welcome endpoint
- `/api/test/*` - Test routes
- `/api/auth/*` - Authentication routes

## Database Connection
The server attempts to connect to MongoDB using the provided MONGO_URI. If the connection fails:
- An error message is logged
- The server continues to run without database functionality

## Error Handling
The server implements the following error handling:
1. MongoDB connection errors are caught and logged
2. Server continues to run even if database connection fails

## Server Initialization
The server initialization process:
1. Loads environment variables
2. Sets up middleware
3. Attempts database connection
4. Starts the Express server
5. Mounts routes

## Development Mode
In development mode, the server logs:
- MongoDB URI (masked for security)
- Port number
- Connection status

## Usage

```javascript
// Start the server
npm start

// Development mode
npm run dev
```

## Security Considerations
1. Ensure environment variables are properly set
2. CORS is enabled for all origins (configure as needed)
3. MongoDB connection string should be secured