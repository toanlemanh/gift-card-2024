var end = Date.now() + (15 * 1000);
// go Buckeyes!
var colors = ['#bb0000', '#ffffff'];
document.getElementsByClassName("confetti")[0].addEventListener("click", () => {
    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });
    
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
    (function createOverlayImage() {
      var box = document.getElementById("landscape");
      box.classList.remove("d-none");
      moveToRight();
      function moveToRight() {
        const div = document.getElementById('card');
        
        // Get the width of the window and the div
        const windowWidth = window.innerWidth;
        const divWidth = div.offsetWidth;
        
        //  Calculate the distance the div should move (to the right edge minus its width)
        const moveDistance = windowWidth - divWidth;
  
        //  Apply transform to move the div smoothly to the right edge
        div.style.transform = `translateX(${divWidth}px)`;
        setTimeout( () => {
           div.classList.add("d-none")
        }, 3000) 
      }
    }());
});