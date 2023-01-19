const Joi = require('joi');

const HospitalScheme = {

    create: Joi.object().keys(
        {
            
            name: Joi.string()
                .min(3)
                .max(30)
                .required(),

            email: Joi.string()
                .email()
                .required(),
           
            phone_number: Joi.string(),
            city: Joi.string(),
            adress: Joi.string(),
            photo: Joi.string(),

            
        }
    )
};

module.exports = HospitalScheme;