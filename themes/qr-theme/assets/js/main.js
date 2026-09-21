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


// YT,Vimeo,Soundcloud


function accessAllVideos() {
  if(!sessionStorage.getItem("tp_consent")) {
    return;
  }
  // iterate over items on page
  // remove overlay(s)

  // insert type dependent iframe (or set the source and display=block)

}

// this in the overlay onClick handler
function onConsent(){
  sessionStorage.setItem("tp_consent","1");
  accessAllVideos();
}


setupHamburger();
fixSpamLinks();
accessAllVideos();
