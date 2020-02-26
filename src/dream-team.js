module.exports = function createDreamTeam(str) {
 return str.filter(x=>{ if ( x[0].match(/[A-Z]/i) ){return x[0];}).sort();

};