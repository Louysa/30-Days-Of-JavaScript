/*const grade = prompt("Enter your grade: ");
if(grade>90){
    alert("A");}
    else if(grade>80){
        alert("B");}
        else if(grade>70){
            alert("C");}
            else if(grade>60){
                alert("D");}
                else if(grade>0){
                    alert("F");
                }
            else{
                alert("Invalid grade");
            } */

let day = prompt("Enter a day: ").toLocaleLowerCase();
console.log(day);
switch(day){
   
    case "monday":
        alert(`${day} is a working day`);
        break;
    case "tuesday":
        alert(`${day} is a working day`);
        break;
    case "wednesday":
        alert(`${day} is a working day`);
        break;
    case "thursday":
        alert(`${day} is a working day`);
        break;
    case "friday":
        alert(`${day} is a working day`);
        break;
    case "saturday":
        alert(`${day} is a weekend`);
        break;
    case "sunday":
        alert(`${day} is a weekend`);
        break;
    default:
        alert("Invalid day");
}
