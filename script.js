var photosource;
var previewpage;


function showPreview(event){
  if(event.target.files.length > 0){
    var src = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("image-preview__image");
    previewpage = preview;
    preview.src = src;
    preview.style.display = "block";
    photosource = src;
  }
}
function showAll(){
  var checkstate = document.getElementById("showall");
  if(checkstate.checked)
  {
    var checkboxes = document.querySelectorAll('input[type=checkbox]');
    console.log(checkboxes);
    for (var i = 0; i < checkboxes.length; i++){
      if(checkboxes[i].name != "hideall")
      {
      checkboxes[i].checked=true;
      }
    }
  }
}

function hideAll(){
  var checkstate = document.getElementById("hideall");
  if(checkstate.checked)
  {
    var checkboxes = document.querySelectorAll('input[type=checkbox]');

    for (var i = 0; i < checkboxes.length; i++){
      if(checkboxes[i].name != "hideall")
      {
      checkboxes[i].checked=false;
      // checkboxes[i].onchange();
    }

    }
  }
}
function cat1All(){
    var checkstate = document.getElementById("category-1-all");
    if(checkstate.checked)
    {
      document.getElementById("category-1-a").checked=true;
      document.getElementById("category-1-b").checked=true;
      document.getElementById("hideall").checked=false;

    }
}
function cat2All(){
  var checkstate = document.getElementById("category-2-all");
  if(checkstate.checked)
  {
    document.getElementById("category-2-a").checked=true;
    document.getElementById("category-2-b").checked=true;
    document.getElementById("hideall").checked=false;
  }

}

function cat1a(){


}
// function Cat1a(){
//   var getClass = document.getElementsByClassName("image-preview");
//   if(getClass.checked)
//   {
//     var x = "aspect-ratio"
//     getclass.x = "1/1";
//   }
//   else{
//     showPreview(event)
//   }
// }
