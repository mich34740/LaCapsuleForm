const Joi = require('joi');

const envVarsSchema = Joi.object({
 PORT: Joi.number().default(3000),
  API_KEY: Joi.string().required(),
 // Ajoutez d'autres variables au besoin
}).unknown().required();

const { error, value: envVars } = envVarsSchema.validate(process.env);

if (error) {
  throw new Error(`Validation des variables d'environnement échouée: ${error.message}`);
}

module.exports = value;