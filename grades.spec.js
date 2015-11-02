var Grades = require('./grader');

describe('letterGrader()', function() {
  var grade = new Grades();
  it('should give an A', function() {
    expect(grade.letterGrader(94)).toEqual('A');
  });
  it('should give an A', function() {
    expect(grade.letterGrader(100)).toEqual('A');
  });
  it('should give an B', function() {
    expect(grade.letterGrader(86)).toEqual('B');
  });
  it('should give an B', function() {
    expect(grade.letterGrader(88)).toEqual('B');
  });
  it('should give an C', function() {
    expect(grade.letterGrader(70)).toEqual('C');
  });
  it('should give an C', function() {
    expect(grade.letterGrader(73)).toEqual('C');
  });
  it('should give an D', function() {
    expect(grade.letterGrader(69)).toEqual('D');
  });
  it('should give an D', function() {
    expect(grade.letterGrader(65)).toEqual('D');
  });
  it('should give an F', function() {
    expect(grade.letterGrader(23)).toEqual('F');
  });
  it('should give an F', function() {
    expect(grade.letterGrader(54)).toEqual('F');
  });
});

describe('averageScore()', function() {
  var grade = new Grades();
  it('should return the average', function() {
    expect(grade.averageScore([1, 2, 3])).toEqual(2);
  });
  it('should return the average', function() {
    expect(grade.averageScore([12, 53, 30, 65])).toEqual(40);
  });
  it('should return the average', function() {
    expect(grade.averageScore([100, 23, 98, 2, 7])).toEqual(46);
  });
  it('should return the average', function() {
    expect(grade.averageScore([7889, 909, 253])).toEqual(3017);
  });
});

describe('medianScore()', function() {
  var grade = new Grades();
  it('should return the median score', function() {
    expect(grade.medianScore([40, 40, 35, 60, 90])).toEqual(40);
  });
  it('should return the median score', function() {
    expect(grade.medianScore([1, 4, 45, 70, 70])).toEqual(45);
  });
  it('should return the median score', function() {
    expect(grade.medianScore([98, 98, 76, 6, 99])).toEqual(98);
  });
  it('should return the median score', function() {
    expect(grade.medianScore([65, 30, 78, 13, 43, 43])).toEqual(43);
  });
});

describe('modeScore()', function() {
  var grade = new Grades();
  it('should return the mode', function() {
    expect(grade.modeScore([54, 32, 54, 66, 79])).toEqual(54);
  });
  it('should return the mode', function() {
    expect(grade.modeScore([43, 2, 43, 43, 2, 2, 2])).toEqual(2);
  });
  it('should return the mode', function() {
    expect(grade.modeScore([55, 32, 87, 55, 55, 87])).toEqual(55);
  });
  it('should return the mode', function() {
    expect(grade.modeScore([5, 2, 24, 26, 5])).toEqual(5);
  });
});