/**
 * Server package documentation detailing configuration, scripts, and dependencies
 * 
 * Configuration:
 * - Version 1.0.0
 * - Main entry: app.js
 * - Module type: ES Modules
 *
 * Scripts:
 * - npm start: Production server
 * - npm run dev: Development server with hot-reload
 * - npm test: Test runner (placeholder)
 *
 * Dependencies include core packages for:
 * - Authentication (bcryptjs, jsonwebtoken)
 * - Server functionality (express, body-parser, cors)
 * - Database (mongoose) 
 * - Environment management (dotenv)
 *
 * Development tooling includes:
 * - Code quality (eslint, prettier)
 * - Testing (jest, supertest)
 * - Development workflow (nodemon)
 *
 * Installation:
 * 1. npm install
 * 2. npm install --save-dev
 * 3. npm run dev
 */
/**
 * @file package.json
 * @description Project configuration and dependencies for Node.js server application
 */


{
    /**
     * @property {string} version - Semantic versioning of the project
     * @property {string} name - Project name
     * @property {string} main - Entry point of the application
     * @property {string} type - Specifies ES Module support
     */
    "version": "1.0.0",
    "name": "server",
    "main": "app.js",
    "type": "module",

    /**
     * @property {Object} scripts - NPM scripts for various operations
     * @description Available commands:
     * - npm test: Run tests (currently not implemented)
     * - npm start: Start production server
     * - npm run dev: Start development server with hot-reload
     */
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node app.js",
        "dev": "nodemon app.js"
    },

    /**
     * @property {Object} dependencies - Production dependencies
     * @description
     * - bcryptjs: Password hashing
     * - body-parser: Request body parsing
     * - cors: Cross-Origin Resource Sharing
     * - dotenv: Environment variables management
     * - express: Web framework
     * - jsonwebtoken: JWT authentication
     * - mongoose: MongoDB ODM
     */
    "dependencies": {
        "bcryptjs": "^2.4.3",
        "body-parser": "^1.20.3",
        "cors": "^2.8.5",
        "dotenv": "^16.4.5",
        "express": "^4.21.1",
        "jsonwebtoken": "^9.0.2",
        "mongoose": "^8.8.2"
    },

    /**
     * @property {Object} devDependencies - Development dependencies
     * @description
     * - eslint: Code linting
     * - eslint-config-prettier: ESLint and Prettier integration
     * - eslint-plugin-react: React specific linting
     * - jest: Testing framework
     * - nodemon: Development server with hot-reload
     * - prettier: Code formatting
     * - supertest: HTTP testing
     */
    "devDependencies": {
        "eslint": "^9.15.0",
        "eslint-config-prettier": "^9.1.0",
        "eslint-plugin-react": "^7.37.2",
        "jest": "^29.7.0",
        "nodemon": "^3.1.7",
        "prettier": "^3.3.3",
        "supertest": "^7.0.0"
    }
}


# Package Documentation

## Project Configuration
- **Version**: 1.0.0
- **Name**: server
- **Main Entry**: app.js
- **Type**: ES Modules (type: "module")

## Available Scripts
- `npm start`: Starts production server using `node app.js`
- `npm run dev`: Starts development server using `nodemon app.js` with hot-reload
- `npm test`: Currently configured with placeholder test script

## Dependencies

// This file lists the production and development dependencies for the SchoolBridge project server.
// Each dependency is documented with its package name, version, and purpose.
//
// ### Production Dependencies
// - bcryptjs: Password hashing and encryption
// - body-parser: Parse incoming request bodies
// - cors: Enable Cross-Origin Resource Sharing
// - dotenv: Load environment variables
// - express: Web application framework
// - jsonwebtoken: JWT authentication
// - mongoose: MongoDB object modeling
//
// ### Development Dependencies
// - eslint: Code linting
// - eslint-config-prettier: Prettier and ESLint integration
// - eslint-plugin-react: React specific ESLint rules
// - jest: Testing framework
// - nodemon: Development server with auto-reload
// - prettier: Code formatting
// - supertest: HTTP testing

### Production Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| bcryptjs | ^2.4.3 | Password hashing and encryption |
| body-parser | ^1.20.3 | Parse incoming request bodies |
| cors | ^2.8.5 | Enable Cross-Origin Resource Sharing |
| dotenv | ^16.4.5 | Load environment variables |
| express | ^4.21.1 | Web application framework |
| jsonwebtoken | ^9.0.2 | JWT authentication |
| mongoose | ^8.8.2 | MongoDB object modeling |

### Development Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| eslint | ^9.15.0 | Code linting |
| eslint-config-prettier | ^9.1.0 | Prettier and ESLint integration |
| eslint-plugin-react | ^7.37.2 | React specific ESLint rules |
| jest | ^29.7.0 | Testing framework |
| nodemon | ^3.1.7 | Development server with auto-reload |
| prettier | ^3.3.3 | Code formatting |
| supertest | ^7.0.0 | HTTP testing |

## Setup Instructions
1. Install dependencies:
```bash
npm install
```

2. Install dev dependencies:
```bash
npm install --save-dev
```

3. Start development server:
```bash
npm run dev
```