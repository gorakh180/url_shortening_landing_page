const form = document.querySelector('form');
const longUrlInput = document.getElementById('long-url');
const submitBtn = document.getElementById('submit-btn');
const shortUrlContainer = document.getElementById('short-url-container');
const shortUrlInput = document.getElementById('short-url');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const longUrl = longUrlInput.value;
  shortenUrl(longUrl);
});

async function shortenUrl(longUrl) {
  try {
    const response = await fetch('https://api.shrtco.de/v2/shorten?url=' + longUrl);
    const data = await response.json();
    if (response.ok) {
      const shortUrl = data.result.short_link;
      shortUrlInput.value = shortUrl;
      shortUrlContainer.style.display = 'block';
    } else {
      throw new Error(data.error);
    }
  } catch (err) {
    console.error(err);
  }
}
