module.exports = function createDreamTeam(str) {
  var arr ="";
  str = str.trim();
    str = str.toUpperCase();
  for ( var i = 0 ; i < str.length ; i++)
  {
    if ( str[i][0].match(/[A-Z]/i) )
    {
        arr+=str[i][0];
    }
  }

 arr =arr.split("").sort().join("") ;
  if ( arr.length == 0) { return false;}
  return arr;
};