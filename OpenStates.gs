function GetLastAction(url,field) {
  var jsondata = UrlFetchApp.fetch(url);
  var object   = JSON.parse(jsondata.getContentText());
  var actions = object.actions
  var latest_action = actions[actions.length-1]
  var string_to_return = latest_action[field]
  return string_to_return
}

function GetSponsors(url,field){
  var jsondata = UrlFetchApp.fetch(url);
  var object   = JSON.parse(jsondata.getContentText());
  var all_sponsors = object.sponsors
  var array_to_return = []

  all_sponsors.forEach( function (i){
    array_to_return.push(i[field])
  })
  return [array_to_return]
}

function GetActionCount(url,field) {
  var jsondata = UrlFetchApp.fetch(url); // get the url
  var object   = JSON.parse(jsondata.getContentText()); //create an object bazsed off the text
  var actions = object.actions // create variable actions based off of the object
  
  var count = 0;
  for (var i = 0; i < actions.length; i++) {
    
     if(actions[i].type[0] == "bill:reading:1") {
      //var count = 1;
      count = 1;
    } 
    if(actions[i].type[0] == "bill:reading:2") {
      count ++;
    } 
    if(actions[i].type[0] == "bill:reading:3") {
      count ++;
    } 
    if(actions[i].type[0] =="bill:passed"){
      count++;
    }
    if(actions[i].type[0] =="bill:introduced"){
      count++;
    } 
    if(actions[i].type[0] =="governor:signed"){
      count++;
    } 
    if(actions[i].type[0] =="governor:vetoed"){
      count++;  
    }
    if(actions[i].type[0] =="committee:referred"){
      count++;  
    }
    if(actions[i].type[0] =="committee:passed"){
      count++;  
    } 
  }
  return count; 
}
