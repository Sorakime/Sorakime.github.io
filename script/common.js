window.onload = () => {
  document.head.innerHTML += `
    <link rel="stylesheet" href="/style/common.css">
  `;
  document.body.innerHTML += `
    <div id="menu" class="bold">
      <div id="menu-links">
        <h1><a href="/">Top</h1>
        <h1><a href="/works">Works</a></h1>
        <h1><a href="/links">Links</a></h1>
        <h1><a href="/music/">Music</a></h1>
        <h1><a href="/request">Requests</a></h1>
      </div>
      <div id="menu-bottom">
        <span id="menu-logo"></span>
        <span id="menu-contents">
          <h1>Sorakime</h1>
          <small>
            <a href="https://twitter.com/Sorakime_">Twitter</a><br>
            <a href="https://www.youtube.com/Sorakime">YouTube</a>
          </small>
        </span>
    </div>
  `;
}

function menu() {
  document.body.classList.toggle('menu');
}
