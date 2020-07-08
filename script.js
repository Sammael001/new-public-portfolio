// https://alligator.io/js/intersection-observer/

// customized callback which will fire every time target enters/leaves viewport
const callback = function(entries) {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
        // if the element is in the viewport, add the class
          entry.target.classList.add('fancy');
        } else {
          entry.target.classList.remove('fancy');
        }
  });
};

// instantiate observer (new instance of class IntersectionObserver) using this cb function
const observer = new IntersectionObserver(callback);

// collect all elements with class "show-on-scroll" into an array called "targets"
const targets = document.querySelectorAll(".show-on-scroll");
// loop through the array and attach an observer to each one
targets.forEach(function(target) {
  observer.observe(target);
});


// hide or show the hiddenDiv with more info about the Office Dashboard
const hiddenDiv = document.getElementById("hiddenDiv");
const showDiv = document.getElementById("showDiv");
showDiv.addEventListener("click", function(evt){
  hiddenDiv.classList.remove("hidden");
  console.log(evt.target.id);
});

document.addEventListener("click", function(evt){
  if(evt.target.id !== 'showDiv'){
    hiddenDiv.classList.add("hidden");
  }
});
