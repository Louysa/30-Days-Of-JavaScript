localStorage.clear();

const student = [
    {
        name: 'Nam',
        age: 24,
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node'],
        country: 'Vietnam'
    },
]

const studentText = JSON.stringify(student);
localStorage.setItem('student', studentText);