document.head.innerHTML += `
  <style>
    #loading {
      position: fixed;
      z-index: 9999;
      top: 0;
      width: 100%;
      height: 100%;
      font-size: 50px;
      background-color: #fff8;
      backdrop-filter: blur(30px);
      -webkit-backdrop-filter: blur(30px);
    }
    #loading h1 {
      font-weight: 700;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    #loading.loaded {
      transition: all .5s .5s ease-in-out;
      top: -100%;
    }
    #loading.loaded h1 {
      transition: all .5s ease-in-out;
      top: -100%;
    }
  </style>
`;
window.onload = () => {
  document.head.innerHTML += `
    <link rel="stylesheet" href="/style/common.css">
  `;
  setTimeout(() => document.getElementById('loading').classList.add('loaded'), 250);
}
