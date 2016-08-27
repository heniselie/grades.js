var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var a  = [];var b  = [];var c  = [];var d  = [];var f  = [];

var gradeList = document.getElementById("grade");

//How many of each grade?
var gradesTotal = document.getElementById("total");



for (var i = 0; i < scores.length; i++) {
    var grade = scores[i];
    // console.log(grade);
   if (grade >= 90 && grade <=100) {
        f.push("Student " + i);
      gradeList.innerHTML += "Student " + i + " : got an A. --" + scores[i] + "<br>";
    }else if (grade >= 80 && grade <=89) {
      gradeList.innerHTML += "Student " + i + " : got an B. --" + scores[i] + "<br>";
        d.push("Student " + i);
    }else if (grade >= 70 && grade <=79) {
      gradeList.innerHTML += "Student " + i + " : got an C. --" + scores[i] + "<br>";
        c.push("Student " + i);
    }else if (grade >= 60 && grade <=69) {
      gradeList.innerHTML += "Student " + i + " : got an D. --" + scores[i] + "<br>";
        b.push("Student " + i);
    }
    else if (grade >= 50 && grade <=59) {
      gradeList.innerHTML += "Student " + i + " : got an F. --" + scores[i] + "<br>";
        a.push("Student " + i);

    }
    
    
}

gradesTotal.innerHTML += ("There are: "+ a.length + "A's "  + "<br>");
gradesTotal.innerHTML += ("There are: "+ b.length + "B's "  + "<br>");
gradesTotal.innerHTML += ("There are: "+ c.length + "C's "  + "<br>");
gradesTotal.innerHTML += ("There are: "+ d.length + "D's "  + "<br>");
gradesTotal.innerHTML += ("There are: "+ f.length + "F's "  + "<br>");


var scoreOrder = scores.sort();
console.log("scoreOrder", scoreOrder)
//  What is the lowest grade?

low.innerHTML += scoreOrder[0];
//What is the highest grade?

high.innerHTML += scoreOrder[scoreOrder.length-1];



