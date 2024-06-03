"use strict";
class Student {
    constructor(name, roll, courses) {
        this.name = name;
        this.roll = roll;
        this.courses = courses;
    }
}
const newCourse = new Student('sumon', 40, ['345']);
console.log(newCourse);
console.log(newCourse.roll);
