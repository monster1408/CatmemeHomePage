var formPass = document.getElementById("pass");
var catimg = document.getElementById("cat");
var div = document.getElementById("page");
var images = ["やぎ","ハッピー","何やってんだ","死にそう","痛い","米津","驚き"]
function imgselect(num){
  catimg.src = images[num] + ".GIF";
}
function passfanction(){
  if(formPass.value == "Za7630"){
    formPass.style.display = "none";
    document.getElementById("passbutton").style.display = "none";
    imgselect(0)
    div = document.getElementById("page");
    div.innerHTML = div+<button>
  }
}
