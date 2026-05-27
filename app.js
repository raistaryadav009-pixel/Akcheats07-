function shortenLink() {
  const url = document.getElementById('urlInput').value;

  const random = Math.random().toString(36).substring(2,7);

  const shortUrl = `https://darkurl.in/${random}`;

  localStorage.setItem(random, url);

  document.getElementById('result').innerHTML = `
    <p>${shortUrl}</p>
  `;
}

