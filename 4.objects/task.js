function Student(name, gender, age) {
  this.name = name;
  this. gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  this?.marks ? this.marks.push(...marks) : 0;
}

Student.prototype.getAverage = function () {
  return !this?.marks ? 0 : this.marks.reduce((acc, item, index, arr) => {
    if (index === arr.length - 1) {
        acc += item;
        return acc / arr.length;
    }
    return acc += item;
  }, 0)
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
