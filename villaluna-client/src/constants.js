// Centralized constants for API and auth storage keys.
// Keeping these in one file avoids hard-coded strings all over the app.

export const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const STORAGE_KEYS = {
  token: "token",
  type: "type",
  firstName: "firstName",
};
