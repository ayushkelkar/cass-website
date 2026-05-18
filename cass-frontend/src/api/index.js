import axios from 'axios';

// ─── Change this to your backend URL ───────────────────────────────────────
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
// ───────────────────────────────────────────────────────────────────────────

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export const getEvents = () => api.get('/events');
export const getProjects = () => api.get('/projects');
export const getTeam = () => api.get('/team');

export default api;
