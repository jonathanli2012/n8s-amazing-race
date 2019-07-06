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
    currentclue = "test clue"
    update_vars(currentclue);
    showform();
    
  } else if($input == "I269"){
    $(".outputBody").css("color", "rgb(41, 41, 41)");
    $(".outputBox").css("text-align", "left");
    $(".outputHead").text("Clue:");
    $(".outputBody").text("Snapchat Lily (she's in the group chat) and let her know you're coming to our house. Only then will she let you in when you arrive.");
    currentclue = "clue 1";
    update_vars(currentclue);    
    showform();

  } else if($input == "e271828"){
    $(".outputBody").css("color", "rgb(41, 41, 41)");
    $(".outputBox").css("text-align", "left");
    $(".outputHead").text("Clue:");
    $(".outputBody").text("Remember Stop Sign Search? The perimeter is a bit different. Hart/Pine/Kirk/Butterfield. Have at it!");
    currentclue = "clue 2";
    update_vars(currentclue);     
    showform();

  } else if($input == "mAri0"){
    $(".outputBody").css("color", "rgb(41, 41, 41)");
    $(".outputBox").css("text-align", "left");
    $(".outputHead").text("Clue:");
    $(".outputBody").text("Behind the names of the buildings awaits your material... and although it's always 5-11 year olds, age is the most important factor.");
    currentclue = "clue 3";
    update_vars(currentclue);     
    showform();

  } else if($input == "51HHJJ"){
    $(".outputBody").css("color", "rgb(41, 41, 41)");
    $(".outputBox").css("text-align", "left");
    $(".outputHead").text("Clue:");
    $(".outputBody").text("Synonyms: Stake Connection Middle");
    currentclue = "clue 4";
    update_vars(currentclue);    
    showform();

  } else if($input == "t6Yq1"){
    $(".outputBody").css("color", "rgb(41, 41, 41)");
    $(".outputBox").css("text-align", "left");
    $(".outputHead").text("Clue:");
    $(".outputBody").text("Keep your cool, or else you'll get NUTTY at this park. A face-off awaits you there, but not before Pit Stop #1! Get to the next location first to win $10!");
    currentclue = "clue 5";
    update_vars(currentclue);   
    showform();

  } else if($input == "H27Ui"){
    $(".outputBody").css("color", "rgb(41, 41, 41)");
    $(".outputBox").css("text-align", "left");
    $(".outputHead").text("Clue:");
    $(".outputBody").text("The final stretch! I'm located somewhere within the bounds of the Stop Sign Search area! Good luck!");
    currentclue = "clue 6";
    update_vars(currentclue );     
    showform();

  } else {
    $(".outputBody").css("color", "red");
    $(".outputHead").text("");
    $(".outputBox").css("text-align", "center");
    $(".outputBody").text("Invalid key");
    hideform();

  }
}));
