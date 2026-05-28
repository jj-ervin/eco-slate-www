// oil-news.js
// Fetches latest news about oil and geopolitical hotspots and displays them in the oil-news-list div.

const newsApiKey = 'YOUR_NEWSAPI_KEY'; // Replace with your NewsAPI.org key
const query = 'oil OR tanker OR strait OR canal OR chokepoint OR shipping OR Suez OR Hormuz OR Malacca OR Bab el-Mandeb OR Bosphorus';
const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&language=en&pageSize=5&apiKey=${newsApiKey}`;

async function fetchOilNews() {
  const container = document.getElementById('oil-news-list');
  if (!container) return;
  container.innerHTML = '<em>Loading news...</em>';
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data.articles && data.articles.length > 0) {
      container.innerHTML = data.articles.map(article => `
        <article class="news-item">
          <a href="${article.url}" target="_blank" rel="noopener">${article.title}</a>
          <div class="news-meta">${article.source.name} &mdash; ${new Date(article.publishedAt).toLocaleString()}</div>
          <div class="news-desc">${article.description || ''}</div>
        </article>
      `).join('');
    } else {
      container.innerHTML = '<em>No recent news found.</em>';
    }
  } catch (err) {
    container.innerHTML = '<em>Error loading news.</em>';
  }
}

fetchOilNews();
