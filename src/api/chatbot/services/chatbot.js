'use strict';

const axios = require('axios');

/**
 * chatbot service
 */

module.exports = {
  async callChatbotAPI(prompt) {
    try {
      const response = await axios.post(
        'http://148.225.111.151:5110/api/prompt_route',
        new URLSearchParams({ user_prompt: prompt }), 
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      );

      return response.data; // Devuelve la respuesta del chatbot
    } catch (error) {
      strapi.log.error('Error al llamar al chatbot:', error);
      return { error: 'Hubo un problema al comunicarse con el chatbot' };
    }
  },
};
