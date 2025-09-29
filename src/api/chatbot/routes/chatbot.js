'use strict';

/**
 * chatbot routes
 */

module.exports = {
  routes: [
    {
      method: "POST",
      path: "/chatbot/ask-chatbot", // Esta es la nueva ruta para el chatbot
      handler: "chatbot.askChatbot", // Llama al controlador "askChatbot"
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
