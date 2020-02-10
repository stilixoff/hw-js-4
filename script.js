const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const marks = [4, 5, 5, 3, 4, 5];

const teams = () => {
    let team = [[students[0], students[2]], 
    [students[1], students[3]], 
    [students[4], students[5]]];
    return team;
}

let pair = teams();

console.log(teams());

const teamsSubject = () => {
    let teamSubject = [];
    for ( let i = 0; i < pair.length; i++) {
        teamSubject.push(pair[i]);
        teamSubject[i].push(themes[i]);
    }
    return teamSubject;
}



console.log(teamsSubject());

let teamSub = teamsSubject();


const toRate = () => {
    for (let i = 0; i < teamSub.length; i++) {
        teamSub[i].push(marks[Math.floor(Math.random() * marks.length)]);
    }
    return teamSub;
}

console.log(toRate());