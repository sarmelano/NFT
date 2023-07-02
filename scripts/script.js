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