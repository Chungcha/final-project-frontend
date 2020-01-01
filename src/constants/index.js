export const API_ROOT = 'http://localhost:3000';
export const API_WS_ROOT = 'ws://localhost:3000/cable';
export const HEADERS = {
    "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
  'Content-Type': 'application/json',
  Accept: 'application/json',
};