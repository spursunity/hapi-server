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
        200: Joi.object(),
      },
    },
  },
};

const getNumber = {
  method: 'GET',
  path: '/num',
  handler: async (request, h) => {
    try {
      const number = request.query.num;
      const type = typeof number;

      console.log(typeof number);

      return h.response({ number, type }).code(200);
    } catch(err) {
      console.log('error route /num: ', err.message);
    }
  },
  options: {
    validate: {
      query: {
        num: Joi.number().integer().default(32),
      },
    },
    response: {
      status: {
        200: Joi.object(),
      },
    },
  },
};


module.exports = [ sendSimpleMessage, getNumber ];