const fetch = require('node-fetch');

let cache = {};

function setCache(url, data) {
  cache[url] = {
    data,
    timestamp: Date.now()
  };
}


function fetchWithCache(url) {
  const entry = cache[url];
  if (!entry) return null;

  const maxAge = 6000; // 10 min
  if (Date.now() - entry.timestamp > maxAge) {
    delete cache[url];
    return null;
  }

  return entry.data;
}

async function getPosts() {
try {
    const cachedData = fetchWithCache('https://jsonplaceholder.typicode.com/posts');
    if (cachedData) {
    console.log("cache");
    return cachedData;
  }
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
     console.error("url");
    setCache('https://jsonplaceholder.typicode.com/posts', data)
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('API error');
  }
}

module.exports = { getPosts };
