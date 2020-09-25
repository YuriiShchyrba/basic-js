

module.exports = function createDreamTeam(str) {
  if (!Array.isArray(str) || !str.length) return false;
  let s = '';
  for (let i = 0; i < str.length; i++) {
      if (typeof str[i] != 'string') continue;
      let help = str[i].trim();
      s += help[0].toUpperCase();
  }
  s = s.split('').sort().join('');
  return s;
};