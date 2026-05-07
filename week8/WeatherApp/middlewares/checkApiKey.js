function checkApiKey(req, res, next) {
  const clientApiKey = req.headers['x-api-key'];
  const serverApiKey = process.env.OPENWEATHER_API_KEY;

  if (!clientApiKey) {
    return res.status(401).json({
      error: 'Clé API manquante',
    });
  }

  if (clientApiKey !== serverApiKey) {
    return res.status(403).json({
      error: 'Clé API invalide',
    });
  }

  next();
}

module.exports = checkApiKey;