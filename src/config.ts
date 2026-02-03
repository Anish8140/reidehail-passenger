/**
 * API base URL. Backend runs on port 5000.
 * Physical device: set in app (Login screen) or EXPO_PUBLIC_API_URL in .env
 */
import { Platform } from "react-native";

const getBaseUrl = (): string => {
  const envUrl = typeof process !== "undefined" && process.env?.EXPO_PUBLIC_API_URL;
  if (envUrl && typeof envUrl === "string" && envUrl.trim()) {
    return envUrl.trim().replace(/\/$/, "");
  }
  if (Platform.OS === "android") {
    return "http://10.0.2.2:5000";
  }
  return "http://127.0.0.1:5000";
};

export const API_BASE_URL = getBaseUrl();
