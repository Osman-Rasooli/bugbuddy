// api.js
import appwrite from "../services/appwrite";

export const fetchData = async (collection, userId) => {
  try {
    const response = await appwrite.database.listDocuments(
      collection,
      ["*"],
      [userId]
    );
    return response.documents;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
