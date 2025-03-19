var formPass = document.getElementById("pass");
var catimg = document.getElementById("cat");
var diva = document.getElementById("page2");
diva.style.display = "none";
var images = ["やぎ","ハッピー","何やってんだ","死にそう","痛い","米津","驚き"]
function imgselect(num){
  catimg.src = images[num] + ".GIF";
}

function passfanction(){
  if(formPass.value == "Za7630"){
    formPass.style.display = "none";
    document.getElementById("passbutton").style.display = "none";
    imgselect(0)
    diva.style.display = "block";
  }
}

