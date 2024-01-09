const count = () => {
  const articleText = document.getElementById('article_text');
  articleText.addEventListener('keyup', () => {
    console.log(articleText.value);
  });
};

window.addEventListener('turbo:load', count);