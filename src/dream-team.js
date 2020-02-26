module.exports = function createDreamTeam(str) {
  if( Array.isArray(str))
  {
    var arr ="";
    for (var i = 0; i < str.length; i++) {
      if (typeof (str[i]) == "string") {
          str[i] = str[i].replace(/ /g, "");
      }
      else {
          str.splice(i, 1);
          i--;
      }

  }
  
  
  for (var i = 0; i < str.length; i++) {
    if (str[i][0].match(/[A-Z]/i) && typeof (str[i]) == "string" ) {
        arr += str[i][0];
    } 
}
  arr =arr.toUpperCase();
   arr =arr.split("").sort().join("") ;
    if ( arr.length == 0) { return false;}
    return arr;
  }
  return false;
};