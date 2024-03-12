const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
  }

const studentObject = JSON.stringify(student,['firstName','lastName','skills'],4);
console.log(studentObject);