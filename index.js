var century, year, month, day, dayOfWeek;
function getInput(){
    century=parseInt(document.getElementById("century").value);
    year=parseInt(document.getElementById("year").value);
    month=parseInt(document.getElementById("month").value);
    day=parseInt(doucment.getElementById("day").value);
}
if(century==""){
    alert("Incorrect Century")
}else if(year==""){
    alert("Incorrect Year")
}else if(month>12){
    alert("Incorrect Month")
}else if (day>31){
    alert("Incorrect Day")
}