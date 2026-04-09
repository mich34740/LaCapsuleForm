#!/usr/bin/env node 
async function translate(text) {
  const apis = [
    "https://translate.argosopentech.com/translate",
    "https://libretranslate.de/translate"
  ];

  for (const url of apis) {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          q: text,
          source: "en",
          target: "fr",
          format: "text"
        })
      });

      if (!res.ok) throw new Error("API error");

      const data = await res.json();

      if (data.translatedText) {
        console.log("API utilisée :", url);
        return data.translatedText;
      }

    } catch (err) {
      console.warn("Échec API :", url);
    }
  }

  // fallback final
  return text + " (traduction indisponible)";
}

fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(async data => {
        document.querySelector('#icon').src = data.icon_url;
        document.querySelector('#fact').textContent = data.value;
        document.querySelector('#url').textContent = data.url;
        const translated = await translate(data.value);
        document.querySelector('#fact-fr').textContent=translated;
        });


