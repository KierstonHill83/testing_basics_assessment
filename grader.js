function Grades(){}


Grades.prototype.letterGrader = function(score) {
  if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
};


Grades.prototype.averageScore = function(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result/array.length;
};


Grades.prototype.medianScore = function(array) {
  var result = 0;
  var sortedArray = array.sort();
  for (var i = 0; i < sortedArray.length; i++) {
    if (sortedArray.length > 1) {
      sortedArray.shift();
      sortedArray.pop();
      if (sortedArray.length === 2) {
        sortedArray.reduce(function(a, b) {
          result = a+b;
        });
        return result / 2;
      }
    }  
  }
  return Number(sortedArray);
};


Grades.prototype.modeScore = function(array) {
  var mode = {};
  var max = 0;
  var count = 0;
  array.forEach(function(e) {
    if (mode[e]) {
      mode[e]++;
    } else {
      mode[e] = 1;
    } if (count < mode[e]) {
      max = e;
      count = mode[e];
    }
  });
  return max;
};


module.exports = Grades;