let num=prompt("Enter your score: ");
if(num>80 && num <100){
    num='A';
}
if(num>70 && num <89){
    num='B';
}
if(num>60 && num <69){
    num='C';
}
if(num>50 && num <59){
    num='D';
}
if(num>0 && num <49){
    num='E';
}
console.log(num);