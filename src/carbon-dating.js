const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity != 'string') return false;
  if (typeof sampleActivity == 'string') {
      if (+sampleActivity == 0 || typeof +sampleActivity != 'number') return false;
  }
  return false;
};