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
   
  } else if($input == "121"){
    $(".outputBody").css("color", "rgb(41, 41, 41)");
    $(".outputBox").css("text-align", "left");
    $(".outputHead").text("Clue:");
    $(".outputBody").text("One of these books in Nathan's basement has a post-it note on your page: The Crucible, The Good Earth, Crazy Rich Asians, The Rosie Project, Homeport");
    currentclue = "clue 1";
    update_vars(currentclue);    
    showform();


  } else if($input == "29"){
    $(".outputBody").css("color", "rgb(41, 41, 41)");
    $(".outputBox").css("text-align", "left");
    $(".outputHead").text("Clue:");
    $(".outputBody").text("One of these books in Nathan's basement has a post-it note on your page: Flood Tide, Cow on the Tracks, Elder Care in Occupational Therapy, Pick of the Litter, The Son of Neptune");
    currentclue = "clue 2";
    update_vars(currentclue);    
    showform();

  } else if($input == "39"){
    $(".outputBody").css("color", "rgb(41, 41, 41)");
    $(".outputBox").css("text-align", "left");
    $(".outputHead").text("Clue:");
    $(".outputBody").text("One of these books in Nathan's basement has a post-it note on your page: The Little Prince, The Mentor Book of Major American Poets, Webster's Thesaurus, For One More Day, The Jesus Storybook Bible");
    currentclue = "clue 2";
    update_vars(currentclue);    
    showform();

  } else if($input == "47"){
    $(".outputBody").css("color", "rgb(41, 41, 41)");
    $(".outputBox").css("text-align", "left");
    $(".outputHead").text("Clue:");
    $(".outputBody").text("One of these books in Nathan's basement has a post-it note on your page: Day and Night, A Ghost Tale for Christmastime, Ageless Body Timeless Mind, Out of my Mind, Fifty Shades of Grey");
    currentclue = "clue 3";
    update_vars(currentclue);    
    showform();

  } else if($input == "511"){
    $(".outputBody").css("color", "rgb(41, 41, 41)");
    $(".outputBox").css("text-align", "left");
    $(".outputHead").text("Clue:");
    $(".outputBody").text("One of these books in Nathan's basement has a post-it note on your page: Breaking Dawn, On Being a Christian, Seven Pillars of Wisdom, The New Basics Cookbook, The Hour I First Believed");
    currentclue = "clue 4";
    update_vars(currentclue);  
    showform();

  } else if($input == "64"){
    $(".outputBody").css("color", "rgb(41, 41, 41)");
    $(".outputBox").css("text-align", "left");
    $(".outputHead").text("Clue:");
    $(".outputBody").text("One of these books in Nathan's basement has a post-it note on your page: Pregnancy For Dummies, The Catcher in The Rye, Notre Dame Football The Golden Tradition, Don't Bet on It, The Giver");
    currentclue = "clue 5";
    update_vars(currentclue);    
    showform();

  } else if($input == "harry potter"){
    $(".outputBody").css("color", "rgb(41, 41, 41)");
    $(".outputBox").css("text-align", "left");
    $(".outputHead").text("Clue:");
    $(".outputBody").text("I close at the open. Find the finish line.");
    currentclue = "clue 5";
    update_vars(currentclue);    
    showform();

} else if($input == "Harry potter"){
    $(".outputBody").css("color", "rgb(41, 41, 41)");
    $(".outputBox").css("text-align", "left");
    $(".outputHead").text("Clue:");
    $(".outputBody").text("I close at the open. Find the finish line.");
    currentclue = "clue 5";
    update_vars(currentclue);    
    showform();

} else if($input == "Harry Potter"){
    $(".outputBody").css("color", "rgb(41, 41, 41)");
    $(".outputBox").css("text-align", "left");
    $(".outputHead").text("Clue:");
    $(".outputBody").text("I close at the open. Find the finish line.");
    currentclue = "clue 5";
    update_vars(currentclue);    
    showform();

} else if($input == "HARRY POTTER"){
    $(".outputBody").css("color", "rgb(41, 41, 41)");
    $(".outputBox").css("text-align", "left");
    $(".outputHead").text("Clue:");
    $(".outputBody").text("I close at the open. Find the finish line.");
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