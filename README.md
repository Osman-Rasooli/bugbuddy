# BugBuddy

BugBuddy is a web application designed to streamline bug tracking and project management for development teams. With BugBuddy, teams can efficiently manage bugs, tasks, and projects all in one place, facilitating collaboration and improving productivity.

## Features

- **Bug Tracking**: Easily create, update, and track bugs throughout the development process.
- **Task Management**: Organize tasks, assign them to team members, and track their progress.
- **Project Management**: Manage projects, set milestones, and track project progress.
- **User Roles**: Define user roles and permissions to control access to features and data.
- **Dashboard**: View a centralized dashboard with an overview of bugs, tasks, and project statuses.
- **Dark Mode**: Enjoy a comfortable viewing experience with dark mode support.

## Technologies Used

- **Frontend**:

  - React.js
  - React Router DOM
  - React Icons
  - Recharts
  - Formik
  - Yup
  - Tailwind CSS

- **Backend**:
  - Appwrite (Backend as a Service)

## Setting up Appwrite

1. Sign up for an account on [Appwrite](https://appwrite.io/).

2. Create a new project in the Appwrite dashboard.

3. Configure your Appwrite project with the following settings:

   - **Project Name**: BugBuddy
   - **API Endpoint**: [Your Appwrite API Endpoint]
   - **Project ID**: [Your Appwrite Project ID]
   - **JWT Authentication**: Enabled

4. Create a new collection in your Appwrite project to store bug, task, and project data. Define the necessary fields for each collection (e.g., title, description, status, assigned to, etc.).

5. Obtain your Appwrite API key and secret from the "API Keys" section of the Appwrite dashboard.

6. Update your BugBuddy application code to use the following environment variables:

   - `REACT_APP_APPWRITE_API_KEY`: Your Appwrite API key
   - `REACT_APP_APPWRITE_ENDPOINT`: Your Appwrite API endpoint
   - `REACT_APP_APPWRITE_PROJECT`: Your Appwrite project ID
   - `REACT_APP_APPWRITE_DATABASE`: Your Appwrite database ID
   - `REACT_APP_APPWRITE_COLLECTION_PROJECTS`: ID of the collection for projects
   - `REACT_APP_APPWRITE_COLLECTION_MEMBERS`: ID of the collection for members
   - `REACT_APP_APPWRITE_COLLECTION_BUGS`: ID of the collection for bugs
   - `REACT_APP_APPWRITE_COLLECTION_TASKS`: ID of the collection for tasks

   Ensure that you securely store these environment variables and do not expose them publicly.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/bugbuddy.git
   ```
2. Navigate to the project directory:
   ```bash
   cd bugbuddy
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
