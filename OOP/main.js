// define lecturer
class lecturer {
    Name = "";
    DOB = "";
    degree = "";
    constructor(Name, DOB, degree) {
        this.Name = Name;
        this.DOB = DOB;
        this.degree = degree;

    }
    get Name() {
        return this.Name;
    }
    get DOB() {
        return this.DOB;

    }
    get degree() {
        return this.degree;
    }
    set Name(name) {
        this.Name = name;
    }
    set DOB(dob) {
        this.DOB = dob;
    }
    set degree(degree) {
        this.degree = degree;
    }
}
// define Course obj
class Course {
    nameCourse = "";
    credit = 0;
    lecturer = {};
    constructor(nameCourse, credit, letturer) {
        this.nameCourse = nameCourse;
        this.credit = credit;
        this.lecturer = letturer;
    }
    get Name() {
        return this.nameCourse;
    }
    set Name(nameCourse) {
        this.name = nameCourse;
    }

    get credit() {
        return this.credit;
    }
    set credit(credit) {
        this.credit = credit;
    }
    get letturer() {
        return this.lecturer;
    }
    set letturer(lecturer) {
        this.lecturer = lecturer;
    }

}
// define Register obj 
class Register {
    Course ={};
    grade = 0;
    constructor (Course , grade) {
        this.Course = Course;
        this.grade = grade;
    }
    get Course () {
        return this.Course;
    }
    get Grade () {
        return this.grade;
    }
    set Course (course) {
        this.Course = course;
    }
    set grade (grade) {
        this.grade = grade;
    }
    getCourseCredits () {
        return this.Course.credit;
    }
}
// define Student 
class student {
    name ="";
    dob = "";
    assitant = {};
    courseRegisters = [{}];
    constructor(name,dob , assitant , courseRegister) {
        this.name = name;
        this.dob = dob;
        this.assitant = assitant;
        this.courseRegisters = courseRegister;
    }
    averageOfGrade () {
        let sum1 = 0;
        let sum2 = 0;
        this.courseRegisters.forEach(element => {
            sum2+= element.getCourseCredits();
            sum1+= element.grade;
        });

        return Math.floor(sum1/sum2);
    }
    rank (){
        if(this.averageOfGrade() >= 9){
            return "Loai xuat sac";
        }
        else if ( 8 <=this.averageOfGrade() < 9) {
            return "Loai gioi";

        }
        else if (7 <=this.averageOfGrade() < 8) {
            return "Loai kha";
            
        }
        else if ( 6 <=this.averageOfGrade() < 7) {
            return "Loai trung binh kha";
            
        }
        else if ( 5 <=this.averageOfGrade() < 6) {
            return "Loai trung binh";
            
        }
        else {
            return "Khong duoc tot nghiep";
        }
    }
   
}
// MYITCenter 
class MyITCenter {
    studentList = [{}];
    courseList = [{}];
    lectureList = [{}];
    constructor(studentList , courseList , Lecture) {
        this.studentList = studentList;
        this.courseList = courseList;
        this.lectureList = Lecture;
    }
    findStudentByName (name) {
       return  this.studentList.find(e => e.name === name);
    }
    findCourseByName (course) {
        return this.courseList.find(e => e.nameCourse == course);

    }
}
// implement course obj 
// creat lecturer obj
const lec1 = new lecturer("Anh", "2/4/2004", "MA");

console.log(lec1);
// creat Course obj 
const c1 = new Course("LTNC", 3, lec1);

console.log(c1);
// create Register obj 
const r1 = new Register(c1 , 10);
console.log(r1);
// create Student obj 
const st1 = new student("Tran Nhut Anh", "2/4/2004",lec1,[r1]);
console.log(st1.rank());
// create myitCenter 
const my = new MyITCenter([st1],[c1],[lec1]);
console.log(my.findStudentByName("Tran Nhut Anh"));
console.log(my.findCourseByName("LTNC"));