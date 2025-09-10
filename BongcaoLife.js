
//Step #1
let name = "Rosebert Bongcao"
let course = "Bachelor of Science in Information Technology"
let year = "2nd Year";

console.log("Name: "+ name);
console.log("Course: "+ course);
console.log("Year Level: "+ year);

//Step #2
let HoursofSleep = 8;
let HoursofStudy = 2;

console.log("Total hours of sleep: "+ HoursofSleep);
console.log("Total hours of study: "+ HoursofStudy);

//Step #3
if (study>5) {
    console.log("Great! You studied enough today.");
} else {
    console.log("You need to study more.");
}

//Step #4
let subjects = ["Web System", "Event-Driven","OOP"];
console.log("List of my subjects this sem:");
for (let i = 0; i < subjects.length; i++) {
console.log(subjects [i]);
}

//Step #5
function studentSummary() {
    console.log("My name is "+name+", a "+year+" from "+course);
    return studentSummary;

}
console.log(studentSummary());
