const Joi = require('joi');

const UserScheme = {
    registration: Joi.object().keys(
        {
            
            last_name: Joi.string()
                .min(3)
                .max(30)
                .required(),

            first_name: Joi.string()
                .min(3)
                .max(30)
                .required(),

            patronymic: Joi.string()
                .min(3)
                .max(30)
                .required(),

            login: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
            email: Joi.string()
                .email()
                .required(),
            password: Joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

            photo: Joi.string(),
            phone_number: Joi.string(),
            role: Joi.string(),
            date_birth: Joi.string()
                .required()

            
        }
    ),

    login: Joi.object().keys(
        {
            login: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
            email: Joi.string()
                .email()
                .required(),
            password: Joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
                .required()
        }
    )
};

module.exports = UserScheme;