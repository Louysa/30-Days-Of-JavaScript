
    const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

  for (let i = 0; i < 10; i++) {
    console.log(countries[i].toUpperCase());
  }
  let i = 0;
  do {
    console.log(countries[i].toUpperCase());
    i++;
  } while (i<10);
  let j = 0;
  while (j<10) {
    console.log(countries[j].toUpperCase());
    j++;
  }


  for (let index = 0; index < 10; index++) {
        console.log("#".repeat(index+1));
  }

  let randomIntegers =[];
    for (let i = 0; i < 10; i++) {
         let  value = Math.floor(Math.random()*100);
         if(randomIntegers.includes(value)){
             i--;
         }else{
                randomIntegers.push(value);
         }
    }
        console.log(randomIntegers);

    let randomId = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 6; i++) {
        randomId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    console.log(randomId);
