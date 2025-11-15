import * as Joi from '@hapi/joi';

export const configValidationSchema = Joi.object({
  STAGE: Joi.string().required(),
  DB_host: Joi.string().required(),
  DB_port: Joi.number().required(),
  DB_username: Joi.string().required(),
  DB_password: Joi.string().required(),
  DB_database: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
});
