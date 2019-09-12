const Joi = require('joi');


const sendSimpleMessage = {
  method: 'GET',
  path: '/sms',
  handler: async (request, h) => {
    try {
      return { message: 'I am Hapi' };
    } catch(err) {
      console.log('error route /sms: ', err.message);
    }
  },
  options: {
    response: {
      status: {
        200: Joi.string(),
      },
    },
  },
};


module.exports = [ sendSimpleMessage ];