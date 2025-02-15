import axios from "axios";

// Base URL Configuration
const BASE_URL = "https://fusion-backend-jzdm.onrender.com";

/**
 * Sends a contact message to the backend API.
 * @param {Object} data - The contact message data (e.g., name, email, message).
 * @returns {Promise<Object>} - The response from the API.
 */
export const sendContactMessage = async (data) => {
  // Validation
  if (!data || typeof data.name !== "string" || data.name.trim() === "") {
    throw new Error("Invalid input: A valid name is required.");
  }
  if (
    !data.email ||
    typeof data.email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
  ) {
    throw new Error("Invalid input: A valid email is required.");
  }
  if (
    !data.message ||
    typeof data.message !== "string" ||
    data.message.trim() === ""
  ) {
    throw new Error("Invalid input: A valid message is required.");
  }

  try {
    const response = await axios.post(`${BASE_URL}/contact`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("[INFO] Contact message sent successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "[ERROR] Failed to send contact message:",
      error.response?.data || error.message
    );
    throw error;
  }
};

/**
 * Retrieves all contact messages (Admin access).
 * @returns {Promise<Object>} - The response from the API containing all contact messages.
 */
export const getAllContactMessages = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/admin/data`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("[INFO] Retrieved all contact messages:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "[ERROR] Failed to retrieve contact messages:",
      error.response?.data || error.message
    );
    throw error;
  }
};
