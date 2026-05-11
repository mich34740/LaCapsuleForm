const request = require('supertest');
const app = require('./app'); // Supposons que l'app inclue la route weather

const getWeather = require('./modules/weatherService');

jest.mock('./modules/weatherService', () => ({
 getWeather: jest.fn().mockResolvedValue({
   temperature: 26,
   condition: 'Sunny'
 })
}));

describe('GET /weather/:city', () => {
 it('should return weather data for the city', async () => {
   const res = await request(app).get('/weather/Paris');
   expect(res.statusCode).toEqual(200);
   expect(res.body).toEqual({
     temperature: 26,
     condition: 'Sunny'
   });
 });
});