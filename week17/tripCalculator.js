#!/usr/bin/env node 
function calculateTrip (arr) {
  return arr.map(trip => {
        const departure = new Date(trip.departure);
        const arrival = new Date(trip.arrival);
        const totalTime = Math.floor((arrival - departure) / 60000); // conversion ms -> minutes
        let estimatedTime;
        if (totalTime > 60) {
            const hours = Math.floor(totalTime / 60);
            const minutes = totalTime % 60;
            estimatedTime = `${hours}h${minutes.toString().padStart(2, '0')}`;
        } else {
            estimatedTime = `${totalTime} min`;
        }
        return {...trip, totalTime, estimatedTime,};
  })
};


const trips = [
   { departure: '2021/12/24 07:45:00', arrival: '2021/12/24 09:05:00' },
   { departure: '2021/12/24 08:00:00', arrival: '2021/12/24 08:50:00' },
   { departure: '2021/12/24 08:00:00', arrival: '2021/12/24 09:05:00' }
]
const result = calculateTrip(trips)
console.log(result)