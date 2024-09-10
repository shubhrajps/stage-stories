# Stage Stories

Stage Stories is a Next.js application that allows users to view stories shared by other users. It features a user-friendly interface for browsing and viewing stories.

### LIVE DEMO
Deployed at https://stage-stories.vercel.app/

## Features

- Display a list of users with their profile pictures
- Allow users to select a user to view their stories
- Provide a full-screen story viewer with navigation controls
- Support for both mobile and desktop views
- Responsive design that adapts to different screen sizes
- API route for fetching all user stories
- Unit tests for components using Jest and React Testing Library
- CI/CD pipeline for automated testing and deployment

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/stage-stories.git
```

2. Navigate to the project directory:

```bash
cd stage-stories
```

3. Install the dependencies
```bash
npm install
```

4. Run the development server
```bash
npm run dev
```

5. Run the tests
```bash
npm test
```

## Screenshots & Videos

### Homescreen
<img width="376" alt="Screenshot 2024-09-01 at 12 29 55 AM" src="https://github.com/user-attachments/assets/ebf51203-823f-4160-b3e9-de7c3528e116">

### StoriesView
<img width="379" alt="Screenshot 2024-09-01 at 12 30 01 AM" src="https://github.com/user-attachments/assets/dfe54ada-e315-44ae-b840-6191b45b5d41">

### Live Video
https://github.com/user-attachments/assets/f577bbdf-6ceb-4b80-b148-ab196ab14043

### Assumptions
1. **Availability of Stories:** 
The project assumes that the stories will be available and accessible from the API endpoint without any downtime. It is expected that the data source for stories will remain stable and that there will be no significant changes to the API structure.

2. **Performance Expectations:**
The project assumes that users will have a reliable internet connection when accessing the application. The performance of the story loading and transitions is optimized for average network conditions, but users on slower connections may experience delays.

### Built With
- **Next.js** - React framework for building server-rendered applications
- **React** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Framer Motion** - Animation library for React
- **react-insta-stories** - Library for creating Instagram-like stories
- **Jest** - JavaScript testing framework
- **React Testing Library** - Library for testing React components
