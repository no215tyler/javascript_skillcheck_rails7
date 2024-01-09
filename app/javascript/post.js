const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="article">
      ${item.text}
    </div>`;
    return html;
};



const post = () => {
  const form = document.getElementById('form');
  form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open('POST', '/articles', true);
    XHR.responseType = 'json';
    XHR.send(formData);
    XHR.onload = () => {
      const contentsArea = document.getElementById('contents_area');
      const articleText = document.getElementById('article_text');
      contentsArea.insertAdjacentHTML('afterBegin', buildHTML(XHR));
      articleText.value = '';
    };    
  });
 };

window.addEventListener('turbo:load', post);