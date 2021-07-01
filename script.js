const quoteText = document.getElementById("quote-text"),
  quoteTags = document.getElementById("quoTag"),
  quoteAuthor = document.getElementById("quote-author"),
  genQuoteBtn = document.getElementById("gen-quote-btn");

function randomQuote() {
  fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(data => {
      quoteText.textContent = data.content;
      quoteAuthor.textContent = `- ${data.author}`;
      quoteTags.textContent = `tags: ${data.tags}`;
    });
}
randomQuote();
genQuoteBtn.onclick = () => randomQuote();
