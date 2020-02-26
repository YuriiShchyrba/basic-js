module.exports = function createDreamTeam(str) {
  var arr ="";
  for ( var i = 0 ; i < str.length ; i++)
  {
    if ( str[i][0].match(/[A-Z]/i) )
    {
        arr+=str[i][0];
    }
  }

 return  arr.split("").sort().join("");

};