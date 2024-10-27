/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable no-labels */
class Student {
  constructor(name, totalMarks, grade, percentage) {
    this.name = name;
    this.totalMarks = totalMarks;
    this.grade = grade;
    this.percentage = percentage;
  }
}

function sortStudentsByPercentage(students) {
  students.sort((a, b) => b.percentage - a.percentage);
}

function main() {
  const students = [];
  let e1 = 0,
    e2 = 0,
    e3 = 0,
    e4 = 0,
    e5 = 0,
    e6 = 0,
    e7 = 0;
  let u1 = 0,
    u2 = 0,
    u3 = 0,
    u4 = 0,
    u5 = 0,
    u6 = 0,
    u7 = 0;
  let m1 = 0,
    m2 = 0,
    m3 = 0,
    m4 = 0,
    m5 = 0,
    m6 = 0,
    m7 = 0;
  let c1 = 0,
    c2 = 0,
    c3 = 0,
    c4 = 0,
    c5 = 0,
    c6 = 0,
    c7 = 0;
  let p1 = 0,
    p2 = 0,
    p3 = 0,
    p4 = 0,
    p5 = 0,
    p6 = 0,
    p7 = 0;
  let i1 = 0,
    i2 = 0,
    i3 = 0,
    i4 = 0,
    i5 = 0,
    i6 = 0,
    i7 = 0;
  let b1 = 0,
    b2 = 0,
    b3 = 0,
    b4 = 0,
    b5 = 0,
    b6 = 0,
    b7 = 0;
  let a1 = 0,
    a2 = 0,
    a3 = 0,
    a4 = 0,
    a5 = 0,
    a6 = 0,
    a7 = 0;
  let q1 = 0,
    q2 = 0,
    q3 = 0,
    q4 = 0,
    q5 = 0,
    q6 = 0,
    q7 = 0;
  let z1 = 0,
    z2 = 0,
    z3 = 0,
    z4 = 0,
    z5 = 0,
    z6 = 0,
    z7 = 0;
  let ns = 0;
  let v = [];
  let o = 0,
    j = 0;
  let lk = 1;
  let i;

  ho: while (true) {
    console.log("\nfor comp press 1 ,for bio press 2\n");
    i = parseInt("Enter your choice: ", 10);
    if (i >= 3) {
      console.clear();
      console.log("either press 1 or 2 for execution");
    } else {
      if (i === 1) {
        ns++;
        console.log("Enter your name \n");
        let ag = "Enter your name: ";
        students.push(new Student(ag, 0, "", 0));
        console.clear();
        console.log("NAME:", ag);
        console.log("Subject\ttotal marks\tobtained marks\n");
        let a = parseInt("Eng\t75\t\t\t", 10);
        let b = parseInt("\nUrdu\t75\t\t\t", 10);
        let c = parseInt("\nMaths\t75\t\t\t", 10);
        let d = parseInt("\nComp\t50\t\t\t", 10);
        let pst = parseInt("\nPST\t50\t\t\t", 10);
        let isl = parseInt("\nIsl\t50\t\t\t", 10);
        let alq = parseInt("\nAl.Q\t50\t\t\t", 10);
        let phy = parseInt("\nPhysics\t60\t\t\t", 10);
        let chem = parseInt("\nChem\t60\t\t\t", 10);
        console.log("_");
        console.log("\n\tFAUJI FOUNDATION COLLEGE KHB");
        console.log("\n\t\tFIRST TERM\n\t\tRESULT");
        console.log("\nSubject|Tot.marks|obt.marks\t|Grade");
        console.log(`\nEng\t75\t\t${a}`);
        let peng = (a / 75.0) * 100.0;
        if (peng >= 90) {
          console.log("\tA+");
          e1++;
        } else if (peng >= 80) {
          console.log("\tA");
          e2++;
        } else if (peng >= 70) {
          console.log("\tB+");
          e3++;
        } else if (peng >= 60) {
          console.log("\tB");
          e4++;
        } else if (peng >= 50) {
          console.log("\tC");
          e5++;
        } else if (peng >= 40) {
          console.log("\tD");
          e6++;
        } else {
          console.log("\tF");
          e7++;
        }
        console.log(`\nUrdu\t75\t\t${b}`);
        let purdu = (b / 75.0) * 100.0;
        if (purdu >= 90) {
          console.log("\tA+");
          u1++;
        } else if (purdu >= 80) {
          console.log("\tA");
          u2++;
        } else if (purdu >= 70) {
          console.log("\tB+");
          u3++;
        } else if (purdu >= 60) {
          console.log("\tB");
          u4++;
        } else if (purdu >= 50) {
          console.log("\tC");
          u5++;
        } else if (purdu >= 40) {
          console.log("\tD");
          u6++;
        } else {
          console.log("\tF");
          u7++;
        }
        console.log(`\nMaths\t75\t\t${c}`);
        let pm = (c / 75.0) * 100.0;
        if (pm >= 90) {
          console.log("\tA+");
          m1++;
        } else if (pm >= 80) {
          console.log("\tA");
          m2++;
        } else if (pm >= 70) {
          console.log("\tB+");
          m3++;
        } else if (pm >= 60) {
          console.log("\tB");
          m4++;
        } else if (pm >= 50) {
          console.log("\tC");
          m5++;
        } else if (pm >= 40) {
          console.log("\tD");
          m6++;
        } else {
          console.log("\tF");
          m7++;
        }
        console.log(`\nComp\t50\t\t${d}`);
        let pc = (d / 50.0) * 100.0;
        if (pc >= 90) {
          console.log("\tA+");
          c1++;
        } else if (pc >= 80) {
          console.log("\tA");
          c2++;
        } else if (pc >= 70) {
          console.log("\tB+");
          c3++;
        } else if (pc >= 60) {
          console.log("\tB");
          c4++;
        } else if (pc >= 50) {
          console.log("\tC");
          c5++;
        } else if (pc >= 40) {
          console.log("\tD");
          c6++;
        } else {
          console.log("\tF");
          c7++;
        }
        console.log(`\npst\t50\t\t${pst}`);
        let pp = (pst / 50.0) * 100.0;
        if (pp >= 90) {
          console.log("\tA+");
          p1++;
        } else if (pp >= 80) {
          console.log("\tA");
          p2++;
        } else if (pp >= 70) {
          console.log("\tB+");
          p3++;
        } else if (pp >= 60) {
          console.log("\tB");
          p4++;
        } else if (pp >= 50) {
          console.log("\tC");
          p5++;
        } else if (pp >= 40) {
          console.log("\tD");
          p6++;
        } else {
          console.log("\tF");
          p7++;
        }
        console.log(`\nIsl\t50\t\t${isl}`);
        let pi = (isl / 50.0) * 100.0;
        if (pi >= 90) {
          console.log("\tA+");
          i1++;
        } else if (pi >= 80) {
          console.log("\tA");
          i2++;
        } else if (pi >= 70) {
          console.log("\tB+");
          i3++;
        } else if (pi >= 60) {
          console.log("\tB");
          i4++;
        } else if (pi >= 50) {
          console.log("\tC");
          i5++;
        } else if (pi >= 40) {
          console.log("\tD");
          i6++;
        } else {
          console.log("\tF");
          i7++;
        }
        console.log(`\nAl.Q\t50\t\t${alq}`);
        let pa = (alq / 50.0) * 100.0;
        if (pa >= 90) {
          console.log("\tA+");
          a1++;
        } else if (pa >= 80) {
          console.log("\tA");
          a2++;
        } else if (pa >= 70) {
          console.log("\tB+");
          a3++;
        } else if (pa >= 60) {
          console.log("\tB");
          a4++;
        } else if (pa >= 50) {
          console.log("\tC");
          a5++;
        } else if (pa >= 40) {
          console.log("\tD");
          a6++;
        } else {
          console.log("\tF");
          a7++;
        }
        console.log(`\nphy\t60\t\t${phy}`);
        let pphy = (phy / 60.0) * 100.0;
        if (pphy >= 90) {
          console.log("\tA+");
          q1++;
        } else if (pphy >= 80) {
          console.log("\tA");
          q2++;
        } else if (pphy >= 70) {
          console.log("\tB+");
          q3++;
        } else if (pphy >= 60) {
          console.log("\tB");
          q4++;
        } else if (pphy >= 50) {
          console.log("\tC");
          q5++;
        } else if (pphy >= 40) {
          console.log("\tD");
          q6++;
        } else {
          console.log("\tF");
          q7++;
        }
        console.log(`\nChem\t60\t\t${chem}`);
        let pchem = (chem / 60.0) * 100.0;
        if (pchem >= 90) {
          console.log("\tA+");
          z1++;
        } else if (pchem >= 80) {
          console.log("\tA");
          z2++;
        } else if (pchem >= 70) {
          console.log("\tB+");
          z3++;
        } else if (pchem >= 60) {
          console.log("\tB");
          z4++;
        } else if (pchem >= 50) {
          console.log("\tC");
          z5++;
        } else if (pchem >= 40) {
          console.log("\tD");
          z6++;
        } else {
          console.log("\tF");
          z7++;
        }
        console.log("_");
        console.log("\ntotal\t545\t\t\t");
        console.log(a + b + c + pst + isl + alq + phy + chem + d);
        console.log("_");
        let p = a + b + c + d + pst + isl + alq + phy + chem;
        students[ns - 1].totalMarks = p;
        let per = (p / 545.0) * 100.0;
        students[ns - 1].percentage = per;
        console.log(`\nPERCENTAGE=${per.toFixed(2)}`);
        if (per >= 90) {
          console.log("\nGRADE=A+\nREMARKS=OUTSTANDING");
          students[ns - 1].grade = "A+";
        } else if (per >= 80) {
          console.log("\nGRADE=A\nREMARKS=EXCELLENT");
          students[ns - 1].grade = "A";
        } else if (per >= 70) {
          console.log("\nGRADE=B+\nREMARKS=GOOD");
          students[ns - 1].grade = "B+";
        } else if (per >= 60) {
          console.log("\nGRADE=B\nREMARKS=WELL");
          students[ns - 1].grade = "B";
        } else if (per >= 50) {
          console.log("\nGRADE=C\nREMARKS=SATISFACTORY");
          students[ns - 1].grade = "C";
        } else if (per >= 40) {
          console.log("\nGRADE=D\nREMARKS=NEED HARD WORK");
          students[ns - 1].grade = "D";
        } else {
          console.log("\nGRADE=F\nREMARKS=FAIL");
          students[ns - 1].grade = "F";
        }
      } else if (i === 2) {
        ns++;
        console.log("Enter your name \n");
        let ag = "Enter your name: ";
        students.push(new Student(ag, 0, "", 0));
        console.clear();
        console.log("NAME:", ag);
        console.log("Subject\ttotal marks\tobtained marks\n");
        let a = parseInt("Eng\t75\t\t\t", 10);
        let b = parseInt("\nUrdu\t75\t\t\t", 10);
        let c = parseInt("\nMaths\t75\t\t\t", 10);
        let d = parseInt("\nBio\t60\t\t\t", 10);
        let pst = parseInt("\nPST\t50\t\t\t", 10);
        let isl = parseInt("\nIsl\t50\t\t\t", 10);
        let alq = parseInt("\nAl.Q\t50\t\t\t", 10);
        let phy = parseInt("\nPhysics\t60\t\t\t", 10);
        let chem = parseInt("\nChem\t60\t\t\t", 10);
        console.log("_");
        console.log("\n\tFAUJI FOUNDATION COLLEGE KHB");
        console.log("\n\t\tFIRST TERM\n\t\tRESULT");
        console.log("\nSubject|Tot.marks|obt.marks\t|Grade");
        console.log(`\nEng\t75\t\t${a}`);
        let peng = (a / 75.0) * 100.0;
        if (peng >= 90) {
          console.log("\tA+");
          e1++;
        } else if (peng >= 80) {
          console.log("\tA");
          e2++;
        } else if (peng >= 70) {
          console.log("\tB+");
          e3++;
        } else if (peng >= 60) {
          console.log("\tB");
          e4++;
        } else if (peng >= 50) {
          console.log("\tC");
          e5++;
        } else if (peng >= 40) {
          console.log("\tD");
          e6++;
        } else {
          console.log("\tF");
          e7++;
        }
        console.log(`\nUrdu\t75\t\t${b}`);
        let purdu = (b / 75.0) * 100.0;
        if (purdu >= 90) {
          console.log("\tA+");
          u1++;
        } else if (purdu >= 80) {
          console.log("\tA");
          u2++;
        } else if (purdu >= 70) {
          console.log("\tB+");
          u3++;
        } else if (purdu >= 60) {
          console.log("\tB");
          u4++;
        } else if (purdu >= 50) {
          console.log("\tC");
          u5++;
        } else if (purdu >= 40) {
          console.log("\tD");
          u6++;
        } else {
          console.log("\tF");
          u7++;
        }
        console.log(`\nMaths\t75\t\t${c}`);
        let pm = (c / 75.0) * 100.0;
        if (pm >= 90) {
          console.log("\tA+");
          m1++;
        } else if (pm >= 80) {
          console.log("\tA");
          m2++;
        } else if (pm >= 70) {
          console.log("\tB+");
          m3++;
        } else if (pm >= 60) {
          console.log("\tB");
          m4++;
        } else if (pm >= 50) {
          console.log("\tC");
          m5++;
        } else if (pm >= 40) {
          console.log("\tD");
          m6++;
        } else {
          console.log("\tF");
          m7++;
        }
        console.log(`\nBio\t60\t\t${d}`);
        let pc = (d / 60.0) * 100.0;
        if (pc >= 90) {
          console.log("\tA+");
          b1++;
        } else if (pc >= 80) {
          console.log("\tA");
          b2++;
        } else if (pc >= 70) {
          console.log("\tB+");
          b3++;
        } else if (pc >= 60) {
          console.log("\tB");
          b4++;
        } else if (pc >= 50) {
          console.log("\tC");
          b5++;
        } else if (pc >= 40) {
          console.log("\tD");
          b6++;
        } else {
          console.log("\tF");
          b7++;
        }
        console.log(`\npst\t50\t\t${pst}`);
        let pp = (pst / 50.0) * 100.0;
        if (pp >= 90) {
          console.log("\tA+");
          p1++;
        } else if (pp >= 80) {
          console.log("\tA");
          p2++;
        } else if (pp >= 70) {
          console.log("\tB+");
          p3++;
        } else if (pp >= 60) {
          console.log("\tB");
          p4++;
        } else if (pp >= 50) {
          console.log("\tC");
          p5++;
        } else if (pp >= 40) {
          console.log("\tD");
          p6++;
        } else {
          console.log("\tF");
          p7++;
        }
        console.log(`\nIsl\t50\t\t${isl}`);
        let pi = (isl / 50.0) * 100.0;
        if (pi >= 90) {
          console.log("\tA+");
          i1++;
        } else if (pi >= 80) {
          console.log("\tA");
          i2++;
        } else if (pi >= 70) {
          console.log("\tB+");
          i3++;
        } else if (pi >= 60) {
          console.log("\tB");
          i4++;
        } else if (pi >= 50) {
          console.log("\tC");
          i5++;
        } else if (pi >= 40) {
          console.log("\tD");
          i6++;
        } else {
          console.log("\tF");
          i7++;
        }
        console.log(`\nAl.Q\t50\t\t${alq}`);
        let pa = (alq / 50.0) * 100.0;
        if (pa >= 90) {
          console.log("\tA+");
          a1++;
        } else if (pa >= 80) {
          console.log("\tA");
          a2++;
        } else if (pa >= 70) {
          console.log("\tB+");
          a3++;
        } else if (pa >= 60) {
          console.log("\tB");
          a4++;
        } else if (pa >= 50) {
          console.log("\tC");
          a5++;
        } else if (pa >= 40) {
          console.log("\tD");
          a6++;
        } else {
          console.log("\tF");
          a7++;
        }
        console.log(`\nphy\t60\t\t${phy}`);
        let pphy = (phy / 60.0) * 100.0;
        if (pphy >= 90) {
          console.log("\tA+");
          q1++;
        } else if (pphy >= 80) {
          console.log("\tA");
          q2++;
        } else if (pphy >= 70) {
          console.log("\tB+");
          q3++;
        } else if (pphy >= 60) {
          console.log("\tB");
          q4++;
        } else if (pphy >= 50) {
          console.log("\tC");
          q5++;
        } else if (pphy >= 40) {
          console.log("\tD");
          q6++;
        } else {
          console.log("\tF");
          q7++;
        }
        console.log(`\nChem\t60\t\t${chem}`);
        let pchem = (chem / 60.0) * 100.0;
        if (pchem >= 90) {
          console.log("\tA+");
          z1++;
        } else if (pchem >= 80) {
          console.log("\tA");
          z2++;
        } else if (pchem >= 70) {
          console.log("\tB+");
          z3++;
        } else if (pchem >= 60) {
          console.log("\tB");
          z4++;
        } else if (pchem >= 50) {
          console.log("\tC");
          z5++;
        } else if (pchem >= 40) {
          console.log("\tD");
          z6++;
        } else {
          console.log("\tF");
          z7++;
        }
        console.log("_");
        console.log("\ntotal\t555\t\t\t");
        console.log(a + b + c + pst + isl + alq + phy + chem + d);
        console.log("_");
        let p = a + b + c + d + pst + isl + alq + phy + chem;
        students[ns - 1].totalMarks = p;
        let per = (p / 555.0) * 100.0;
        students[ns - 1].percentage = per;
        console.log(`\nPERCENTAGE=${per.toFixed(2)}`);
        if (per >= 90) {
          console.log("\nGRADE=A+\nREMARKS=OUTSTANDING");
          students[ns - 1].grade = "A+";
        } else if (per >= 80) {
          console.log("\nGRADE=A\nREMARKS=EXCELLENT");
          students[ns - 1].grade = "A";
        } else if (per >= 70) {
          console.log("\nGRADE=B+\nREMARKS=GOOD");
          students[ns - 1].grade = "B+";
        } else if (per >= 60) {
          console.log("\nGRADE=B\nREMARKS=WELL");
          students[ns - 1].grade = "B";
        } else if (per >= 50) {
          console.log("\nGRADE=C\nREMARKS=SATISFACTORY");
          students[ns - 1].grade = "C";
        } else if (per >= 40) {
          console.log("\nGRADE=D\nREMARKS=NEED HARD WORK");
          students[ns - 1].grade = "D";
        } else {
          console.log("\nGRADE=F\nREMARKS=FAIL");
          students[ns - 1].grade = "F";
        }
      }
    }
    let zx;
    console.log("\n if you want further execution enter 1\n");
    console.log("other wise enter 2\n");
    zx = parseInt("Enter your choice: ", 10);
    if (zx === 1) {
      continue ho;
    } else if (zx === 2) {
      console.log("\nGPA FOR ENGLISH");
      console.log("\nNumber of students got A+\t");
      console.log(e1);
      console.log("\nNumber of students got A\t");
      console.log(e2);
      console.log("\nNumber of students got B+\t");
      console.log(e3);
      console.log("\nNumber of students got B\t");
      console.log(e4);
      console.log("\nNumber of students got C\t");
      console.log(e5);
      console.log("\nNumber of students got D\t");
      console.log(e6);
      console.log("\nNumber of students got F\t");
      console.log(e7);
      let g1 = e1 * 6;
      let g2 = e2 * 5;
      let g3 = e3 * 4;
      let g4 = e4 * 3;
      let g5 = e5 * 2;
      let g6 = e6 * 1;
      let g7 = e7 * 0;
      let gn = g1 + g2 + g3 + g4 + g5 + g6 + g7;
      let std = e1 + e2 + e3 + e4 + e5 + e6 + e7;
      let gpa = gn / std;
      console.log("\nGPA is:");
      console.log(`\n\t${gpa.toFixed(2)}`);
      console.log("\n__");
      console.log("\nGPA FOR URDU");
      console.log("\nNumber of students got A+\t");
      console.log(u1);
      console.log("\nNumber of students got A\t");
      console.log(u2);
      console.log("\nNumber of students got B+\t");
      console.log(u3);
      console.log("\nNumber of students got B\t");
      console.log(u4);
      console.log("\nNumber of students got C\t");
      console.log(u5);
      console.log("\nNumber of students got D\t");
      console.log(u6);
      console.log("\nNumber of students got F\t");
      console.log(u7);
      g1 = u1 * 6;
      g2 = u2 * 5;
      g3 = u3 * 4;
      g4 = u4 * 3;
      g5 = u5 * 2;
      g6 = u6 * 1;
      g7 = u7 * 0;
      gn = g1 + g2 + g3 + g4 + g5 + g6 + g7;
      std = u1 + u2 + u3 + u4 + u5 + u6 + u7;
      gpa = gn / std;
      console.log("\nGPA is:");
      console.log(`\n\t${gpa.toFixed(2)}`);
      console.log("\n__");
      console.log("\nGPA FOR MATHS");
      console.log("\nNumber of students got A+\t");
      console.log(m1);
      console.log("\nNumber of students got A\t");
      console.log(m2);
      console.log("\nNumber of students got B+\t");
      console.log(m3);
      console.log("\nNumber of students got B\t");
      console.log(m4);
      console.log("\nNumber of students got C\t");
      console.log(m5);
      console.log("\nNumber of students got D\t");
      console.log(m6);
      console.log("\nNumber of students got F\t");
      console.log(m7);
      g1 = m1 * 6;
      g2 = m2 * 5;
      g3 = m3 * 4;
      g4 = m4 * 3;
      g5 = m5 * 2;
      g6 = m6 * 1;
      g7 = m7 * 0;
      gn = g1 + g2 + g3 + g4 + g5 + g6 + g7;
      std = m1 + m2 + m3 + m4 + m5 + m6 + m7;
      gpa = gn / std;
      console.log("\nGPA is:");
      console.log(`\n\t${gpa.toFixed(2)}`);
      console.log("\n__");
      console.log("\nGPA FOR COMPUTER");
      console.log("\nNumber of students got A+\t");
      console.log(c1);
      console.log("\nNumber of students got A\t");
      console.log(c2);
      console.log("\nNumber of students got B+\t");
      console.log(c3);
      console.log("\nNumber of students got B\t");
      console.log(c4);
      console.log("\nNumber of students got C\t");
      console.log(c5);
      console.log("\nNumber of students got D\t");
      console.log(c6);
      console.log("\nNumber of students got F\t");
      console.log(c7);
      g1 = c1 * 6;
      g2 = c2 * 5;
      g3 = c3 * 4;
      g4 = c4 * 3;
      g5 = c5 * 2;
      g6 = c6 * 1;
      g7 = c7 * 0;
      gn = g1 + g2 + g3 + g4 + g5 + g6 + g7;
      std = c1 + c2 + c3 + c4 + c5 + c6 + c7;
      gpa = gn / std;
      console.log("\nGPA is:");
      console.log(`\n\t${gpa.toFixed(2)}`);
      console.log("\n__");
      console.log("\nGPA FOR BIOLOGY");
      console.log("\nNumber of students got A+\t");
      console.log(b1);
      console.log("\nNumber of students got A\t");
      console.log(b2);
      console.log("\nNumber of students got B+\t");
      console.log(b3);
      console.log("\nNumber of students got B\t");
      console.log(b4);
      console.log("\nNumber of students got C\t");
      console.log(b5);
      console.log("\nNumber of students got D\t");
      console.log(b6);
      console.log("\nNumber of students got F\t");
      console.log(b7);
      g1 = b1 * 6;
      g2 = b2 * 5;
      g3 = b3 * 4;
      g4 = b4 * 3;
      g5 = b5 * 2;
      g6 = b6 * 1;
      g7 = b7 * 0;
      gn = g1 + g2 + g3 + g4 + g5 + g6 + g7;
      std = b1 + b2 + b3 + b4 + b5 + b6 + b7;
      gpa = gn / std;
      console.log("\nGPA is:");
      console.log(`\n\t${gpa.toFixed(2)}`);
      console.log("\n__");
      console.log("\nGPA FOR PAK STUDIES");
      console.log("\nNumber of students got A+\t");
      console.log(p1);
      console.log("\nNumber of students got A\t");
      console.log(p2);
      console.log("\nNumber of students got B+\t");
      console.log(p3);
      console.log("\nNumber of students got B\t");
      console.log(p4);
      console.log("\nNumber of students got C\t");
      console.log(p5);
      console.log("\nNumber of students got D\t");
      console.log(p6);
      console.log("\nNumber of students got F\t");
      console.log(p7);
      g1 = p1 * 6;
      g2 = p2 * 5;
      g3 = p3 * 4;
      g4 = p4 * 3;
      g5 = p5 * 2;
      g6 = p6 * 1;
      g7 = p7 * 0;
      gn = g1 + g2 + g3 + g4 + g5 + g6 + g7;
      std = p1 + p2 + p3 + p4 + p5 + p6 + p7;
      gpa = gn / std;
      console.log("\nGPA is:");
      console.log(`\n\t${gpa.toFixed(2)}`);
      console.log("\n__");
      console.log("\nGPA FOR ISLAMIYAT");
      console.log("\nNumber of students got A+\t");
      console.log(i1);
      console.log("\nNumber of students got A\t");
      console.log(i2);
      console.log("\nNumber of students got B+\t");
      console.log(i3);
      console.log("\nNumber of students got B\t");
      console.log(i4);
      console.log("\nNumber of students got C\t");
      console.log(i5);
      console.log("\nNumber of students got D\t");
      console.log(i6);
      console.log("\nNumber of students got F\t");
      console.log(i7);
      g1 = i1 * 6;
      g2 = i2 * 5;
      g3 = i3 * 4;
      g4 = i4 * 3;
      g5 = i5 * 2;
      g6 = i6 * 1;
      g7 = i7 * 0;
      gn = g1 + g2 + g3 + g4 + g5 + g6 + g7;
      std = i1 + i2 + i3 + i4 + i5 + i6 + i7;
      gpa = gn / std;
      console.log("\nGPA is:");
      console.log(`\n\t${gpa.toFixed(2)}`);
      console.log("\n__");
      console.log("\nGPA FOR AL QURAN");
      console.log("\nNumber of students got A+\t");
      console.log(a1);
      console.log("\nNumber of students got A\t");
      console.log(a2);
      console.log("\nNumber of students got B+\t");
      console.log(a3);
      console.log("\nNumber of students got B\t");
      console.log(a4);
      console.log("\nNumber of students got C\t");
      console.log(a5);
      console.log("\nNumber of students got D\t");
      console.log(a6);
      console.log("\nNumber of students got F\t");
      console.log(a7);
      g1 = a1 * 6;
      g2 = a2 * 5;
      g3 = a3 * 4;
      g4 = a4 * 3;
      g5 = a5 * 2;
      g6 = a6 * 1;
      g7 = a7 * 0;
      gn = g1 + g2 + g3 + g4 + g5 + g6 + g7;
      std = a1 + a2 + a3 + a4 + a5 + a6 + a7;
      gpa = gn / std;
      console.log("\nGPA is:");
      console.log(`\n\t${gpa.toFixed(2)}`);
      console.log("\n__");
      console.log("\nGPA FOR PHYSICS");
      console.log("\nNumber of students got A+\t");
      console.log(q1);
      console.log("\nNumber of students got A\t");
      console.log(q2);
      console.log("\nNumber of students got B+\t");
      console.log(q3);
      console.log("\nNumber of students got B\t");
      console.log(q4);
      console.log("\nNumber of students got C\t");
      console.log(q5);
      console.log("\nNumber of students got D\t");
      console.log(q6);
      console.log("\nNumber of students got F\t");
      console.log(q7);
      g1 = q1 * 6;
      g2 = q2 * 5;
      g3 = q3 * 4;
      g4 = q4 * 3;
      g5 = q5 * 2;
      g6 = q6 * 1;
      g7 = q7 * 0;
      gn = g1 + g2 + g3 + g4 + g5 + g6 + g7;
      std = q1 + q2 + q3 + q4 + q5 + q6 + q7;
      gpa = gn / std;
      console.log("\nGPA is:");
      console.log(`\n\t${gpa.toFixed(2)}`);
      console.log("\n__");
      console.log("\nGPA FOR CHEMISTRY");
      console.log("\nNumber of students got A+\t");
      console.log(z1);
      console.log("\nNumber of students got A\t");
      console.log(z2);
      console.log("\nNumber of students got B+\t");
      console.log(z3);
      console.log("\nNumber of students got B\t");
      console.log(z4);
      console.log("\nNumber of students got C\t");
      console.log(z5);
      console.log("\nNumber of students got D\t");
      console.log(z6);
      console.log("\nNumber of students got F\t");
      console.log(z7);
      g1 = z1 * 6;
      g2 = z2 * 5;
      g3 = z3 * 4;
      g4 = z4 * 3;
      g5 = z5 * 2;
      g6 = z6 * 1;
      g7 = z7 * 0;
      gn = g1 + g2 + g3 + g4 + g5 + g6 + g7;
      std = z1 + z2 + z3 + z4 + z5 + z6 + z7;
      gpa = gn / std;
      console.log("\nGPA is:");
      console.log(`\n\t${gpa.toFixed(2)}`);
      console.log("\n__");
      sortStudentsByPercentage(students);
      console.log("\nFinal Results\n");
      console.log("Name TotalMarks Percentage\tGrade\n");
      for (let k = 0; k < ns; k++) {
        console.log(
          `${k + 1} position\n${students[k].name}\t${
            students[k].totalMarks
          }\t${students[k].percentage.toFixed(2)}\t\t${students[k].grade}\n`
        );
      }
      console.log("\n__");
    }
    break;
  }
}

main();
