import axios from 'axios';

import config from 'src/config';

export default async function geolocation() {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: `https://www.googleapis.com/geolocation/v1/geolocate?key=${config.GOOGLE_API_KEY}`,
    }).then(({ data }) => {
      if (data && data.location && data.location.lat && data.location.lng) {
        resolve([data.location.lat, data.location.lng]);
      } else if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(({ coords: coordinates }) => {
          resolve([coordinates.latitude, coordinates.longitude]);
        });
      } else {
        reject(new Error("User's browser doesn't support geolocation."));
      }
    });
  });
}
