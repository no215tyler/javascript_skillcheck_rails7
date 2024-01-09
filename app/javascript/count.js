const count = () => {
  const articleText = document.getElementById('article_text');
  articleText.addEventListener('keyup', () => {
    console.log(articleText.value.length);
  });
};

window.addEventListener('turbo:load', count);