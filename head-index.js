document.addEventListener("DOMContentLoaded", function () {
      fetch('main-header.html')
        .then(res => res.text())
        .then(data => {
          document.getElementById('header-placeholder').innerHTML = data;
        })
        .catch(err => console.error('Fetch error:', err));
    });
