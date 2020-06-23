document.getElementById("form1").style.display="none";

//resizes and rearranges for mobile devices
$(function() {
  if($(window).width() < 480){ // mobile device
    $(".outerBox").css("width", "100%");
    $(".formBox").css("width", "95%");
    $(".outputBox").css("width", "70%");
   
    $(".formBox").css("height", "40%");
    $(".outputBox").css("height", "60%");
   
    $(".formBox").css("top", "40%");
    $(".outputBox").css("top", "40%");
   
    $(".btnCheck").css("height", "40px");
   
  } else { // non-mobile device
    $(".outerBox").css("width", "90%");
    $(".formBox").css("width", "65%");
    $(".outputBox").css("width", "65%");
   
    $(".formBox").css("height", "50%");
    $(".outputBox").css("height", "50%");
   
    $(".formBox").css("top", "50%");
    $(".outputBox").css("top", "50%");
   
    $(".btnCheck").css("height", "32px");
  }
});

$($(window).resize(function() {
  if($(window).width() < 480){ // mobile device
    $(".outerBox").css("width", "100%");
    $(".formBox").css("width", "95%");
    $(".outputBox").css("width", "70%");
   
    $(".formBox").css("height", "40%");
    $(".outputBox").css("height", "60%");
   
    $(".formBox").css("top", "40%");
    $(".outputBox").css("top", "40%");
   
    $(".btnCheck").css("height", "40px");
   
  } else { // non-mobile device
    $(".outerBox").css("width", "90%");
    $(".formBox").css("width", "65%");
    $(".outputBox").css("width", "65%");
   
    $(".formBox").css("height", "50%");
    $(".outputBox").css("height", "50%");
   
    $(".formBox").css("top", "50%");
    $(".outputBox").css("top", "50%");
   
    $(".btnCheck").css("height", "32px");
  }
}));

//links enter key to button
$($(".input").keypress(function (e) {
  if (e.which == 13) {
    $(".btnCheck").click();
    return false;    //<---- Add this line
  }
}));

function showform()
{
  document.getElementById("form1").style.display="block";
}

function hideform()
{
  document.getElementById("form1").style.display="none";
}

var test = "tmp";
document.getElementById("mytext").value = test;


function update_vars(currentclue)
{
  document.getElementById("mytext").value = currentclue;
}

//updates clue on button click
$($(".btnCheck").click(function() {
  var $input = $(".input").val();
 
  if($input == "key 1") {
    $(".outputBody").css("color", "rgb(41, 41, 41)");
    $(".outputBox").css("text-align", "left");
    $(".outputHead").text("Clue #1:");
    $(".outputBody").text("Here's some text that shows up. It's pretty great text. It goes all the way across the screen and can even have multiple lines. This is pretty great place to put a clue.");
    currentclue = "test clue";
    update_vars(currentclue);
    showform();
   
  } else if($input == "LXQAM"){
    $(".outputBody").css("color", "rgb(41, 41, 41)");
    $(".outputBox").css("text-align", "left");
    $(".outputHead").text("Clue:");
    $(".outputBody").text("Nathan: 6-1, 7-1, 8-1.   Rachel: 6-5, 7-3, 8-1");
    currentclue = "clue 1";
    update_vars(currentclue);    
    showform();


  } else if($input == "Woodstock"){
    $(".outputBody").css("color", "rgb(41, 41, 41)");
    $(".outputBox").css("text-align", "left");
    $(".outputHead").text("Clue:");
    $(".outputBody").text("Go to Nathan's house. Pit stop ahead!");
    currentclue = "clue 2";
    update_vars(currentclue);    
    showform();

  } else if($input == "woodstock"){
    $(".outputBody").css("color", "rgb(41, 41, 41)");
    $(".outputBox").css("text-align", "left");
    $(".outputHead").text("Clue:");
    $(".outputBody").text("Go to Nathan's house. Pit stop ahead!");
    currentclue = "clue 2";
    update_vars(currentclue);    
    showform();

  } else if($input == "ThisIsntFestive"){
    $(".outputBody").css("color", "rgb(41, 41, 41)");
    $(".outputBox").css("text-align", "left");
    $(".outputHead").text("Clue:");
    $(".outputBody").text("Come back to Nathan's House!");
    currentclue = "clue 3";
    update_vars(currentclue);    
    showform();

  } else if($input == "ZXPZZ"){
    $(".outputBody").css("color", "rgb(41, 41, 41)");
    $(".outputBox").css("text-align", "left");
    $(".outputHead").text("Clue:");
    $(".outputBody").text("12 Days of Christmas: Find exactly 12 of one item (example: 12 cupcakes), take a picture of it, and send it to me with the number and what it is. Then do the same for 11. Go all the way down to 1 for your next clue.");
    currentclue = "clue 4";
    update_vars(currentclue);  
    showform();

  } else if($input == "H27Ui"){
    $(".outputBody").css("color", "rgb(41, 41, 41)");
    $(".outputBox").css("text-align", "left");
    $(".outputHead").text("Clue:");
    $(".outputBody").text("The final stretch! I'm located somewhere within the bounds of the Stop Sign Search area! Good luck!");
    currentclue = "clue 5";
    update_vars(currentclue);    
    showform();

  } else {
    $(".outputBody").css("color", "red");
    $(".outputHead").text("");
    $(".outputBox").css("text-align", "center");
    $(".outputBody").text("Invalid key");
    hideform();

  }
}));