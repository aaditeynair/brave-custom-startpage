async function getQuote() {
  const response = await fetch(
    "https://api.quotable.io/quotes/random?maxlength=20"
  );
  return response.json();
}

getQuote().then((data) => {
  const quote = data[0].content;
  const author = data[0].author;

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
});
