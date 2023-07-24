// Créer un événément au scroll
// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte
// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu
// Connaitre niveau de scroll (window.scrollY)

let lastScroll = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScroll) {
    navbar.style.top = 0;
  } else {
    navbar.style.top = "-60px";
  }

  lastScroll = window.scrollY;
});

// explication descente :
// window.scrollY > lastScroll (0 au début);
// lastScroll prend la valeur de window.scrollY;
// on continue de scroller donc window.scrollY > lastScroll;
// etc....

// explication montée :
// au début window.scrollY = lastScroll;
// on monte donc window.scrollY < lastScroll;
