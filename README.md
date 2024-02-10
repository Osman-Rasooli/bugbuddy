# BugBuddy

BugBuddy is a web application designed to streamline bug tracking and project management for development teams. With BugBuddy, teams can efficiently manage bugs, tasks, and projects all in one place, facilitating collaboration and improving productivity.

visit the live website [BugBuddy](https://bugbuddy.vercel.app/). 🔍

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
  - Context API with useReducer
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
3. Create .env File:
   - Create a .env file in the project root.
   - Add the following line and replace the environment variables:
   ```env
   REACT_APP_APPWRITE_API_KEY=Your_Appwrite_API_key
   REACT_APP_APPWRITE_ENDPOINT=Your_Appwrite_API_endpoint
   REACT_APP_APPWRITE_PROJECT=Your_Appwrite_project_ID
   REACT_APP_APPWRITE_DATABASE=Your_Appwrite_database_ID
   REACT_APP_APPWRITE_COLLECTION_PROJECTS=ID_of_the_collection_for_projects
   REACT_APP_APPWRITE_COLLECTION_MEMBERS=ID_of_the_collection_for_members
   REACT_APP_APPWRITE_COLLECTION_BUGS=ID_of_the_collection_for_bugs
   REACT_APP_APPWRITE_COLLECTION_TASKS=ID_of_the_collection_for_tasks
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm start
   ```

## Contributing

We welcome contributions from the community! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request. Here are a few ideas for features that contributors can work on:

- **Calendar Integration**: Add calendar functionality to schedule tasks and track deadlines.
- **Kanban Board**: Implement a Kanban board for visualizing tasks and their status.
- **Comments**: Allow users to add comments to bugs, tasks, and projects for better communication and collaboration.

If you have other ideas for features or improvements, don't hesitate to share them! For major changes, please open an issue first to discuss what you would like to change.

When contributing to this repository, please first discuss the change you wish to make via issue or email before making a change. Please note we have a code of conduct, please follow it in all your interactions with the project.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [Appwrite](https://appwrite.io/) for providing the backend infrastructure.

## Contact Information

For inquiries or support, please contact us at [mohammad.osmanrasooli1973@gmail.com](mailto:mohammad.osmanrasooli1973@gmail.com). 📧
