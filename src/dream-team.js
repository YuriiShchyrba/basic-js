module.exports = function createDreamTeam(str) {
  if( Array.isArray(str))
  {
    var arr ="";
    for (var i = 0; i < str.length; i++) {
      if ( typeof(str[i])=="string" )
      {
        str[i] = str[i].replace(/ /g, "");
      }
      
  }
  
  
    for ( var i = 0 ; i < str.length ; i++)
    {
      if ( str[i][0].match(/[A-Z]/i) )
      {
          arr+=str[i][0];
      }
    }
  
   arr =arr.split("").sort().join("") ;
    if ( arr.length == 0) { return false;}
    return arr.toUpperCase();
  }
  return false;
};