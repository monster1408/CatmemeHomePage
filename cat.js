var formPass = document.getElementById("pass");
var catimg = document.getElementById("cat");
var images = ["やぎ","ハッピー","何やってんだ","死にそう","痛い","米津","驚き"]
function imgselect(num){
  catimg.src = images[num];
}
function passfanction(){
  if(formPass.value == "Za7630"){
    formPass.style.display = "none";
    document.getElementById("passbutton").style.display = "none";
    imgselect(0)
  }
}
