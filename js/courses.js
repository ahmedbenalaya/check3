function myfunction(){
  document.getElementById("mytext").style.fontWeight = "bold";
}
function myfunction1(){
    document.getElementById("mytext").style.fontStyle = "italic";
}
function myfunction2(){
    document.getElementById("mytext").style.textDecoration = "underline";
}
function myfunction3(){
    var s=document.getElementById("size").value;
    document.getElementById("mytext").style.fontSize =s;

}
function myfunction4(){
    var f=document.getElementById("font").value;
    document.getElementById("mytext").style.fontFamily =f;

}

