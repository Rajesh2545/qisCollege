function loadJSON(file,callback) {
  let xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function() {
    if (xhr.readyState===4 && xhr.status=="200") {
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}

loadJSON("data.json",function(text) {
  var data=JSON.parse(text);
  console.log(data);
  // define a function
  personal(data.personalDetails);
  // console.log(data.personalDetails);
});
var main=document.querySelector(".main");

function personal(details) {
  var left=document.createElement("div");
  left.classList.add("left");
  main.appendChild(left);

  var left1=document.createElement("div");
  left1.classList.add("left1");
  left.appendChild(left1);
  let image=document.createElement("img");
  image.src=details.image;
  left1.appendChild(image);

}
