'use strict';

/**
 * chatbot controller
 */

module.exports = {
  async askChatbot(ctx) {
    const { prompt } = ctx.request.body;

    if (!prompt) {
      return ctx.badRequest('El campo "prompt" es requerido');
    }

    // Llamamos al servicio para enviar el prompt al chatbot
    console.log(strapi.services)
    const response = await strapi.services['api::chatbot.chatbot'].callChatbotAPI(prompt);
    return ctx.send(response);
  },
};
