class Student{

  private  name: string;
  protected  roll: number;
    courses: Array<string>;

    constructor(name: string, roll: number, courses: Array<string>){
       this.name = name;
       this.roll = roll;
       this.courses = courses; 
    }
}

const newCourse = new Student('sumon', 40, ['345'])

console.log(newCourse)
console.log(newCourse.roll)