import { db } from './firebase-config.js';

document.getElementById('cta-btn').addEventListener('click', () => {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});
