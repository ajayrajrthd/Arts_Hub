function myFunction1() {
    document.getElementById("display-image").style.filter = "grayscale(100%)";
}
function myFunction2(){
    document.getElementById("display-image").style.filter = "sepia(100%)";
}
function myFunction3(){
    document.getElementById("display-image").style.filter = "invert(100%)";
}
function myFunction4() {
    document.getElementById("display-image").style.filter = "grayscale(100%) contrast(300%)";
}
function myFunction5(){
    document.getElementById("display-image").style.filter = "saturate(5) sepia(50%)";
}
function myFunction6(){
    document.getElementById("display-image").style.filter = "brightness(100%)";
}
const image_input = document.querySelector("#image-input");

image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});
