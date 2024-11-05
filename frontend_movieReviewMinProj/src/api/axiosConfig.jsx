// api/axiosConfig.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api/v1',
    // Optionally set headers, timeouts, etc.
});

export default api;  // This exports the axios instance as default

// Used by the programmer

// export default api;

// import axios from 'axios';

// export default axios.create({
//     baseURL: 'https//9c96-103-106-239-104.ap.ngrok.io',
//     headers: {"ngrok-skip-browser-warning": "true"}
// });
