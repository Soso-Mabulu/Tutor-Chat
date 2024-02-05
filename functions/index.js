/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");

const axios = require("axios");

exports.createChatEngineUser = functions.auth.user().onCreate((user) => {
    axios.post(
        "https://api.chatengine.io/users/",
        {
          username: user.email,
          secret: user.uid,
          email: user.email,
          first_name: user.displayName,
        },
        { headers: { "Private-Key": "e0633e67-5ff5-49f8-9d83-1c47ddf99a32" } }
    );
});
  
  exports.deleteChatEngineUser = functions.auth.user().onDelete((user) => {
    axios.delete("https://api.chatengine.io/users/me/", {
        headers: {
        "Project-ID": "897e8cd6-9f67-4e43-825b-09e2d97655d5",
        "User-Name": user.email,
        "User-Secret": user.uid,
        },
    });
});