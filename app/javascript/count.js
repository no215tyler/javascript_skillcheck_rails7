const count = () => {
  const articleText = document.getElementById('article_text');
  articleText.addEventListener('keyup', () => {
  const charNum = document.getElementById('char_num');
  charNum.innerHTML = `${articleText.value.length}文字`;
  });
};

window.addEventListener('turbo:load', count);