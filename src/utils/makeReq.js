import { LOCALSTORAGE_TOKEN_KEY } from 'contexts/AuthContext';
import { toast } from 'react-toastify';

// * Development URLs

// const API_BASE_URL = `http://localhost:5000/api`;
// const API_BASE_ORIGIN = `http://localhost:5000`;

// const API_BASE_URL = `https://c9c6-119-73-118-95.ngrok.io/api`;
// const API_BASE_ORIGIN = `https://c9c6-119-73-118-95.ngrok.io`;

// * Production URLs
//
// const API_BASE_URL = `https://lotpot.io:5000/api`;
// const API_BASE_ORIGIN = `https://lotpot.io:5000`;

const API_BASE_URL = `https://lotpotapi.onrender.com/api`;
const API_BASE_ORIGIN = `https://lotpotapi.onrender.com`;

const handleCatch = (err) => {
  let errMsg = 'Something Went Wrong';
  if (err.message) errMsg = err.message;
  if (err.response?.data?.message)
    errMsg = err.response?.data?.message;
  toast.error(errMsg);
};

const makeReq = (
  endpoint, // e.g '/users
  { body, ...customConfig } = {},
  method = 'GET'
) => {
  const token = localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
  const headers = { 'Content-Type': 'application/json' };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const config = {
    method: method,
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }
  return fetch(`${API_BASE_URL}${endpoint}`, config).then(
    async (res) => {
      const data = await res.json();
      // console.log(`data`, data);
      if (res.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    }
  );
};

export { API_BASE_URL, API_BASE_ORIGIN, makeReq, handleCatch };

// fetch('https://lotpot.io:5000/api/auctions')
//   .then((res) => {
//     console.log('res');
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log('err');
//     console.log(err);
//   });
