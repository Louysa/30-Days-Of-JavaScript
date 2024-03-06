const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]


const [name, skills, scores] = student;
const [ , ,jsScore, reactScore] = scores;
console.log(name,"(", skills.length, ")" ,skills, jsScore, reactScore);
console.log('---------------------------------');

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]

  function convertArrayToObject(objects){
    const result = [];
    for(const [name, skills, scores] of objects) {
        result.push({name, skills, scores});
    }
    return result;
  }
  console.log(convertArrayToObject(students));
    console.log('---------------------------------');


    const person = {
        name: 'David',
        age: 25,
        skills: {
          frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
          ],
          backEnd: [
            { skill: 'Node',level: 7 },
            { skill: 'GraphQL', level: 8 },
          ],
          dataBase:[
            { skill: 'MongoDB', level: 7.5 },
          ],
          dataScience:['Python', 'R', 'D3.js']
        }
      }

const newStudent = {...person};

newStudent.skills.frontEnd.push({skill: 'Bootstrap', level: 8});
newStudent.skills.backEnd.push({skill: 'Express', level: 9});
newStudent.skills.dataBase.push({skill: 'SQL', level: 8});
newStudent.skills.dataScience.push('SQL');
console.log(newStudent);
console.log('---------------------------------');

