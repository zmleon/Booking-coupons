const Joi = require('joi');

const BookedTalonScheme = {

    create: Joi.object().keys(
        {
            
            name: Joi.string()
                .min(3)
                .max(30)
                .required(),
           
            description: Joi.string(),
            date: Joi.date()            
        }
    )
};

module.exports = BookedTalonScheme;