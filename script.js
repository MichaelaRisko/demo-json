var pageCounter = 1;
var user = document.getElementById("user");
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
  ourRequest.onload = function(){
    if (ourRequest.status >= 200 && ourRequest < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
    }
    else {
      console.log("second error");
    }

  };


  ourRequest.oneerror = function(){
    console.log("error");
  }

  ourRequest.send();
  pageCounter++;

  if (pageCounter > 3 ) {
    btn.classList.add("hide-me");
  }

});

function renderHTML(data){
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
    for (n = 0; n < data[i].foods.likes.length; n++) {
      if ( n == 0) {
        htmlString += data[i].foods.likes[n];
      }
      else {
        htmlString += " and " + data[i].foods.likes[n];
      }
    }
    htmlString+=   " and dislikes ";
    for (n = 0; n < data[i].foods.dislikes.length; n++) {
      if ( n == 0) {
        htmlString += data[i].foods.dislikes[n];
      }
      else {
        htmlString += " and " + data[i].foods.dislikes[n];
      }
    }

    htmlString+=   ".</p>";
  }


  user.insertAdjacentHTML('beforeend', htmlString);

}
