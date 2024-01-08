const post = () => {
  const form = document.getElementById('form');
  form.addEventListener('submit', (e) =>{
    console.log(document.getElementById('form'));
    e.preventDefault();
    // const formData = new FormData(form);
    // const XHR = new XMLHttpRequest();
    // XHR.open('POST', '/posts', true);
    // XHR.responseType = 'json';
    // XHR.send(formData);
    // console.log(formData);
  });
 };

window.addEventListener('turbo:load', post);