// import { StreamChat } from "stream-chat";
// import { StreamClient } from "@stream-io/node-sdk";
// import { ENV } from "./env.js";


// const apiKey = ENV.STREAM_API_KEY;
// const apiSecret = ENV.STREAM_API_SECRET;

// if (!apiKey || !apiSecret) {
//   console.error("STREAM_API_KEY or STREAM_API_SECRET is missing");
// }

// export const chatClient = StreamChat.getInstance(apiKey, apiSecret); // will be used chat features
// export const streamClient = new StreamClient(apiKey, apiSecret); // will be used for video calls

// export const upsertStreamUser = async (userData) => {
//   try {
//     await chatClient.upsertUser(userData);
//     console.log("Stream user upserted successfully:", userData);
//   } catch (error) {
//     console.error("Error upserting Stream user:", error);
//   }
// };

// export const deleteStreamUser = async (userId) => {
//   try {
//     await chatClient.deleteUser(userId);
//     console.log("Stream user deleted successfully:", userId);
//   } catch (error) {
//     console.error("Error deleting the Stream user:", error);
//   }
// };


import { StreamChat } from "stream-chat";
import { StreamClient } from "@stream-io/node-sdk";
import { ENV } from "./env.js";

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

// Better error message
if (!apiKey || !apiSecret) {
  console.error("❌ STREAM_API_KEY or STREAM_API_SECRET is missing in environment variables");
  console.error("   STREAM_API_KEY:", apiKey ? "✅ Found" : "❌ Missing");
  console.error("   STREAM_API_SECRET:", apiSecret ? "✅ Found" : "❌ Missing");
  console.error("   Please check your .env file in the backend root directory");
  throw new Error("Stream API credentials are required");
}

console.log("✅ Stream credentials found, initializing clients...");

export const chatClient = StreamChat.getInstance(apiKey, apiSecret); // will be used chat features
export const streamClient = new StreamClient(apiKey, apiSecret); // will be used for video calls

export const upsertStreamUser = async (userData) => {
  try {
    await chatClient.upsertUser(userData);
    console.log("✅ Stream user upserted successfully:", userData.id || userData);
  } catch (error) {
    console.error("❌ Error upserting Stream user:", error.message);
  }
};

export const deleteStreamUser = async (userId) => {
  try {
    await chatClient.deleteUser(userId);
    console.log("✅ Stream user deleted successfully:", userId);
  } catch (error) {
    console.error("❌ Error deleting the Stream user:", error.message);
  }
};