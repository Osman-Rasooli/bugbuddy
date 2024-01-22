import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint(process.env.REACT_APP_APPWRITE_ENDPOINT)
  .setProject(process.env.REACT_APP_APPWRITE_PROJECT);

export const account = new Account(client);
export const databases = new Databases(client);

export const databaseID = process.env.REACT_APP_APPWRITE_DATABASE;
export const projectsCollectionID =
  process.env.REACT_APP_APPWRITE_COLLECTION_PROJECTS;

export default client;
