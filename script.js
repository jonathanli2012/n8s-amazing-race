document.getElementById("form1").style.display="none";
document.getElementById("form2").style.display="none";

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

function showform(a)
{
    if(a == 1)
    document.getElementById("form1").style.display="block";
    else if(a == 2)
    document.getElementById("form2").style.display="block";
}

function hideform(a)
{
    if(a == 1)
    document.getElementById("form1").style.display="none";
    else if(a == 2)
    document.getElementById("form2").style.display="none";
}

//updates clue on button click
$($(".btnCheck").click(function() {
  var $input = $(".input").val();
 
if($input == "key 1") {
  $(".outputBody").css("color", "rgb(41, 41, 41)");
    $(".outputBox").css("text-align", "left");
  $(".outputHead").text("Clue #1:");
    $(".outputBody").text("Here's some text that shows up. It's pretty great text. It goes all the way across the screen and can even have multiple lines. This is pretty great place to put a clue.");
    hideform(2)
    showform(1)
   
  } else if($input == "PYGCPOIW"){
    $(".outputBody").css("color", "rgb(41, 41, 41)");
  $(".outputBox").css("text-align", "left");
  $(".outputHead").text("Clue:");
    $(".outputBody").text("Your next clue is hiding somewhere in the Walmart nearest to here");
    hideform(1)
    hideform(2)

  } else if($input == "LookItsSanta"){
    $(".outputBody").css("color", "rgb(41, 41, 41)");
  $(".outputBox").css("text-align", "left");
  $(".outputHead").text("Clue:");
    $(".outputBody").text("");
    hideform(1)
    hideform(2)

  } else if($input == "diehard"){
    $(".outputBody").css("color", "rgb(41, 41, 41)");
  $(".outputBox").css("text-align", "left");
  $(".outputHead").text("Clue:");
    $(".outputBody").text("As usual, meet in the BHS parking lot at 10:45. Make sure you bring a pencil/pen so I don't have to provide them for certain tasks, and also your wallets. My venmo is Nathan-Wright-113; you must send me $10 by 10am tomorrow in order to participate. If both of your teammates are wearing santa hats, you will get your first clue one minute before the other teams. See you tomorrow!");
    hideform(1)
    hideform(2)

  } else if($input == "ThisIsntFestive"){
    $(".outputBody").css("color", "rgb(41, 41, 41)");
  $(".outputBox").css("text-align", "left");
  $(".outputHead").text("Clue:");
    $(".outputBody").text("Come back to Nathan's House");
    hideform(1)
    hideform(2)

  } else if($input == "ZXPZZ"){
    $(".outputBody").css("color", "rgb(41, 41, 41)");
  $(".outputBox").css("text-align", "left");
  $(".outputHead").text("Clue:");
    $(".outputBody").text("");
    hideform(1)
    hideform(2)

  } else if($input == "H27Ui"){
    $(".outputBody").css("color", "rgb(41, 41, 41)");
  $(".outputBox").css("text-align", "left");
  $(".outputHead").text("Clue:");
    $(".outputBody").text("The final stretch! I'm located somewhere within the bounds of the Stop Sign Search area! Good luck!");
    hideform(1)
    hideform(2)

  } else {
    $(".outputBody").css("color", "red");
    $(".outputHead").text("");
$(".outputBox").css("text-align", "center");
    $(".outputBody").text("Invalid key");
    hideform(1)
    hideform(2)

  }
}));