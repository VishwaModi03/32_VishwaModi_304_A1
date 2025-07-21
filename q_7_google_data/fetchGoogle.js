const fetch = require('node-fetch');

async function fetchGoogleHomePage() {
  try {
    const response = await fetch('https://www.google.com');
    const html = await response.text();
    console.log(html);
  } catch (error) {
    console.error('Error fetching Google page:', error);
  }
}

fetchGoogleHomePage();
