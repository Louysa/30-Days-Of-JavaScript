function writeFullName(firstName,lastName){
    console.log(firstName + ' ' + lastName);
}
writeFullName('Asabeneh','Yetayeh');

function convertCelciusToFahrenheit(celcius){
    return (celcius * (9/5)) + 32;
}
console.log(convertCelciusToFahrenheit(30));

function indexBMI(weight,height){
    let bmi = weight / (height*height);
    if(bmi < 18.5){
        return 'Underweight';
    }else if(bmi < 24.9){
        return 'Normal weight';
    }else if(bmi < 29.9){
        return 'Overweight';
    }else{
        return 'Obesity';
    }
}
console.log(indexBMI(80,1.8));

function checkSeason(month){
    if(month <=5  && month>2){
        return 'Spring';
    }else if(month <= 8  && month>5){
        return 'Summer';
    }else if(month <=11 && month>8){
        return 'Autumn';
    }else{
        return 'Winter';
    }
}
console.log(checkSeason(5));

function findMax(a,b,c){
    if(a > b && a > c){
        return a;
    }else if(b > a && b > c){
        return b;}
    else{ return c;}
}
console.log(findMax(96,45,30));
