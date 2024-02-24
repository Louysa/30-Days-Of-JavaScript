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

  const emptyArray = [];

  console.log(webTechs.length);
  console.log(webTechs[0]," ",webTechs[(webTechs.length-1)/2]," ",webTechs[webTechs.length-1]); 

  console.log("***********************************");

  const mixedDataTypes = ['String',2,true,null,{"name":"John"},[1,2,3,4,5]];

  const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']; ;
  console.log(itCompanies);
  console.log(itCompanies.length);
  console.log(itCompanies[0]," ",itCompanies[(itCompanies.length-1)/2]," ",itCompanies[itCompanies.length-1]);
  console.log("***********************************");

  console.log(itCompanies.toString());
  console.log(itCompanies.join(" "));   
  console.log(itCompanies.join(", "));
  const myCompany = "Test";
  console.log(itCompanies.includes(myCompany) ? {myCompany} : "Company not found");
  itCompanies.sort();
  console.log(itCompanies);
  itCompanies.reverse();
  console.log(itCompanies);
  console.log(itCompanies.slice(0,3));
  console.log(itCompanies.slice(itCompanies.length-3,itCompanies.length-1));
  console.log(itCompanies.slice((itCompanies.length-1)/2,(itCompanies.length+1)/2));
  itCompanies.shift();
  console.log(itCompanies);
  itCompanies.splice(itCompanies.length-1/2,1);
  itCompanies.pop();
  console.log(itCompanies);
  itCompanies.splice(0,itCompanies.length);
  console.log(itCompanies);


