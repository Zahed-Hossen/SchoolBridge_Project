schoolbridge/
│
├── client/                          # Frontend application
│   ├── public/                      # Public assets
│   │   ├── index.html               # Main HTML file
│   │   ├── favicon.ico              # Favicon
│   │   ├── manifest.json            # Web app manifest
│   │   └── assets/                  # Static assets
│   │       ├── images/              # Image assets
│   │       │   ├── FeatureOverviewPage_HeroImage.avif
│   │       │   ├── sarahL.png
│   │       │   ├── MarkP.avif
│   │       │   └── EmilyR.avif
│   │       └── icons/               # Icon assets (if any)
│   │
│   ├── src/                         # Source code
│   │   ├── components/              # Reusable components
│   │   │   ├── common/              # Common components
│   │   │   │   ├── UserRoleCard.jsx  # User role card component
│   │   │   │   ├── UserRoleCard.css   # User role card styles
│   │   │   │   └── ProtectedComponent.jsx # Protected component
│   │   │   ├── sections/            # Section components
│   │   │   │   ├── CallToActionSection/ # Call to action section
│   │   │   │   │   ├── CallToActionSection.jsx
│   │   │   │   │   └── CallToActionSection.css
│   │   │   │   ├── TestimonialsSection/ # Testimonials section
│   │   │   │   │   ├── TestimonialsSection.jsx
│   │   │   │   │   └── TestimonialsSection.css
│   │   │   │   ├── FeaturesSection/  # Features section
│   │   │   │   │   ├── FeaturesSection.jsx
│   │   │   │   │   └── FeaturesSection.css
│   │   │   │   ├── HeroSection/     # Hero section
│   │   │   │   │   ├── HeroSection.jsx
│   │   │   │   │   └── HeroSection.css
│   │   │   │   └── NavBar/          # Navigation bar component
│   │   │   │       ├── NavBar.jsx
│   │   │   │       └── NavBar.css
│   │   │   │
│   │   │   └── FooterSection/       # Footer section component
│   │   │       ├── FooterSection.jsx
│   │   │       └── FooterSection.css
│   │   │
│   │   ├── pages/                   # Page components
│   │   │   ├── Authentication/       # Authentication pages
│   │   │   │   ├── LoginPage.jsx     # Login page
│   │   │   │   ├── LoginPage.css      # Login page styles
│   │   │   │   ├── SignUpPage.jsx    # Sign-up page
│   │   │   │   ├── SignUpPage.css     # Sign-up page styles
│   │   │   │   └── VerifyEmail.jsx   # Email verification page
│   │   │   │       └── VerifyEmail.css # Email verification styles
│   │   │   ├── FeaturesOverview/      # Features overview page
│   │   │   │   └── FeaturesPage.jsx   # Features overview page
│   │   │   │       └── FeaturesPage.css # Features overview styles
│   │   │   ├── UserRolePage/         # User role specific pages
│   │   │   │   ├── AdminPage.jsx      # Admin dashboard
│   │   │   │   ├── AdminPage.css       # Admin dashboard styles
│   │   │   │   ├── ParentPage.jsx     # Parent dashboard
│   │   │   │   ├── ParentPage.css      # Parent dashboard styles
│   │   │   │   ├── TeacherPage.jsx    # Teacher dashboard
│   │   │   │   ├── TeacherPage.css     # Teacher dashboard styles
│   │   │   │   ├── StudentPage.jsx     # Student dashboard
│   │   │   │   └── StudentPage.css      # Student dashboard styles
│   │   │   └── LandingPage.jsx        # Landing page
│   │   │       └── LandingPage.css      # Landing page styles
│   │   │
│   │   ├── context/                  # Context providers
│   │   │   ├── AuthContext.js        # Authentication context
│   │   │   └── ThemeContext.js       # Theme context
│   │   │
│   │   ├── utils/                    # Utility functions
│   │   │   └── apiUtils.js           # API utility functions
│   │   │
│   │   ├── styles/                   # Global styles
│   │   │   ├── global.css             # Global styles
│   │   │   ├── themes/                # Theme styles
│   │   │   │   ├── light.css          # Light theme styles
│   │   │   │   └── dark.css           # Dark theme styles
│   │   │   └── components/            # Component specific styles
│   │   │       ├── FooterSection.css   # Footer section styles
│   │   │       ├── HeroSection.css     # Hero section styles
│   │   │       ├── FeaturesSection.css  # Features section styles
│   │   │       └── TestimonialsSection.css # Testimonials section styles
│   │   │
│   │   ├── App.js                     # Main application component
│   │   └── index.js                   # Entry point for React
│   │
│   ├── package.json                   # Project metadata and dependencies
│   ├── .env                           # Environment variables
│   └── README.md                      # Project documentation
│
├── server/                            # Backend application
│   ├── config/                        # Configuration files
│   │   ├── db.js                      # Database configuration
│   │   └── server.js                  # Server configuration
│   │
│   ├── controllers/                   # Controller functions
│   │   ├── authController.js          # Authentication controller
│   │   ├── userController.js          # User management controller
│   │   └── roleController.js          # Role management controller
│   │
│   ├── models/                        # Database models
│   │   ├── User.js                    # User model
│   │   ├── Role.js                    # Role model
│   │   └── School.js                  # School model
│   │
│   ├── routes/                        # API routes
│   │   ├── authRoutes.js              # Authentication routes
│   │   ├── userRoutes.js              # User routes
│   │   └── roleRoutes.js              # Role routes
│   │
│   ├── middleware/                    # Middleware functions
│   │   ├── authMiddleware.js          # Authentication middleware
│   │   └── errorMiddleware.js         # Error handling middleware
│   │
│   ├── utils/                        # Utility functions
│   │   └── logger.js                  # Logger utility
│   │
│   ├── .env                           # Environment variables for server
│   ├── package.json                   # Server project metadata and dependencies
│   └── server.js                      # Main server file
│
├── tests/                             # Test files
│   ├── client/                        # Client tests
│   │   ├── App.test.js                # App component tests
│   │   └── components/                # Component tests
│   │       ├── HeroSection.test.js    # Hero section tests
│   │       └── UserRoleCard.test.js   # User role card tests
│   │
│   ├── server/                        # Server tests
│   │   ├── authController.test.js     # Authentication controller tests
│   │   └── userController.test.js     # User controller tests
│   │
│   └── setupTests.js                  # Test setup file
│
└── docs/                              # Documentation files
    ├── API_Documentation.md           # API documentation
    ├── User_Guide.md                  # User guide
    └── Developer_Guide.md             # Developer guide