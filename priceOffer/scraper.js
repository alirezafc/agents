// scraper.js
const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeTorob(searchQuery) {
  try {
    const encodedQuery = encodeURIComponent(searchQuery);
    const url = `https://torob.com/search/?q=${encodedQuery}`;

    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      },
    });

    const html = response.data;
    const $ = cheerio.load(html);

    const prices = [];

    $('div.ProductCard_desktop_product-price-text__y20OV').each((i, el) => {
      const priceText = $(el).text().trim();
      prices.push(priceText);
    });

    return prices;
  } catch (error) {
    return { error: error.message };
  }
}

if (require.main === module) {
  const query = process.argv[2] || 'لپ تاپ';
  scrapeTorob(query).then(console.log);
}

module.exports = scrapeTorob;
