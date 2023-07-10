var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


const input1 = document.getElementById("username");
const input2 = document.getElementById("password");

const inputValues = {};

input1.addEventListener("blur", function(event) {
  inputValues.username = event.target.value;
});

input2.addEventListener("blur", function(event) {
  inputValues.password = event.target.value;
});

//example
console.log(inputValues);


var left = document.querySelector('.left');
var right = document.querySelector('.right');
var viewport = document.querySelector('.viewport');
left.addEventListener('click', function() {
   viewport.scrollTo({
      left: viewport.scrollLeft - window.innerWidth * 0.51,
      behavior: 'smooth'
   });
});

right.addEventListener('click', function() {
   viewport.scrollTo({
      left: viewport.scrollLeft + window.innerWidth * 0.51,
      behavior: 'smooth'
   });
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scroll-to-top").style.display = "block";
  } else {
    document.getElementById("scroll-to-top").style.display = "none";
  }
}

document.getElementById("scroll-to-top").addEventListener("click", function(){
  window.scrollTo({top: 0, behavior: "smooth"});
});
