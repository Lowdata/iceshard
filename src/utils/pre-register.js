import axios from "axios";

// New API Configuration
const API_URL = "https://fusion-backend-jzdm.onrender.com/pre-register";

/**
 * Sends pre-registration data to the backend API.
 * @param {Object} data - The pre-registration data (e.g., email, name, username).
 * @returns {Promise<Object>} - The response from the API.
 */
export const sendEmailToDB = async (data) => {
  // Validation
  if (
    !data ||
    typeof data.email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
  ) {
    throw new Error("Invalid input: A valid email is required.");
  }
  if (typeof data.name !== "string" || data.name.trim() === "") {
    throw new Error("Invalid input: A valid name is required.");
  }
  if (typeof data.username !== "string" || data.username.trim() === "") {
    throw new Error("Invalid input: A valid username is required.");
  }

  try {
    const response = await axios.post(
      API_URL,
      {
        email: data.email,
        name: data.name,
        username: data.username,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("[INFO] Pre-registration successful:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "[ERROR] Failed to send pre-registration data:",
      error.response?.data || error.message
    );
    throw error;
  }
};
