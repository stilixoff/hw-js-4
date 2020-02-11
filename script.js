const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const marks = [4, 5, 5, 3, 4, 5];

const teams = (students) => {
    let res = [[students[0], students[2]], 
    [students[1], students[3]], 
    [students[4], students[5]]];
    return res;
}

console.log(teams(students));

const studentTeams = teams(students);

function teamsAddSub(team, subject){
    let res = [];
    for(let i = 0; i < team.length; i++) {
        res[i]= [team[i].join(' и '), subject[i]];
    }
    return res;
}

console.log(teamsAddSub(studentTeams, themes));

const teamsAndSubject = teamsAddSub(studentTeams, themes);

function addStudentMarks(student, mark) {
    let res = [];
    for(let i = 0; i < student.length; i++) {
        res[i] = [student[i], mark[i]];
    }
    return res;
}

console.log(addStudentMarks(students, marks));

const studentMarks = addStudentMarks(students, marks);

function addMarksForTeams(team, min, max) {
    let res = [];
    for(let i = 0; i < team.length; i++) {
        res[i] = [team[i], [Math.floor(min + Math.random() * (max + 1 - min))]].flat();
    }
    return res;
}

console.log(addMarksForTeams(teamsAndSubject, 1, 5));