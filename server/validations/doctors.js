const Joi = require('joi');

const DoctorScheme = {

    create: Joi.object().keys(
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

            email: Joi.string()
                .email()
                .required(),

            phone_number: Joi.string(),
            position: Joi.string(),
            photo: Joi.string(),


        }
    )
};

module.exports = DoctorScheme;