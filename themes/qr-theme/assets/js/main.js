// HAMBURGER
function setupHamburger() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".lvl1");
  const navLink = document.querySelectorAll(".navlink");

  hamburger.addEventListener("click",mobileMenu);
  navLink.forEach(n => n.addEventListener("click",closeMenu));

  function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
};

// SPAMLINKS
function fixSpamLinks() {
  var addressCleaner = function (){
      this.href = this.href.split("?")[0].replace("notspam", "");
      this.onclick = function (){};
      this.oncontextmenu = function (){};
  };
  var links = document.getElementsByTagName("a");
  for (var i=0; i < links.length; i++){
    if(links[i].href.indexOf("mailto:") !== -1 || links[i].href.indexOf("tel:") !== -1){
      links[i].onclick = addressCleaner;
      links[i].oncontextmenu = addressCleaner;
    }
  }
};

function accessAllVideos() {
  const nodes = document.getElementsByClassName("videoblock");
  for (divel of nodes) {
    id = divel.getAttribute('data');
    source = divel.getAttribute('source');
    if(sessionStorage.getItem("tp_consent_" + id)) {
      iframe = divel.getElementsByTagName('iframe')[0];
      overlay = divel.getElementsByTagName('h5')[0];
      iframe.style['display'] = 'block';
      overlay.style['display'] = 'none';
      iframe.setAttribute('src',source);
    }
  }
};

function onConsent(id){
  sessionStorage.setItem("tp_consent_" + id, id);
  accessAllVideos();
};


fixSpamLinks();
setupHamburger();
accessAllVideos();
