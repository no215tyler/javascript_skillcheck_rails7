
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


    };    
  });
 };

window.addEventListener('turbo:load', post);