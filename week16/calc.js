let select1 = document.getElementById("mark");
let select2 = document.getElementById("year");

select1.addEventListener("change", function(event){
    select2.disabled = false;
})


function getSum(){
    let arr = [];
    let mark = Number(document.getElementById("mark").value);
    let year = Number(document.getElementById("year").value);
    let check = Number(document.getElementById("check").value);
    let fuel = Number(document.getElementById("fuel").value);
    
    
    if(isNaN(mark) || isNaN(year) || check === 0 || radio === -1)
        alert("Выбраны не все параметры машины!")
    else{        
        arr.push(mark,year,check,fuel);
        alert(`Стоимость машины ${arraySum(arr)} рублей!`);
    }
}
function arraySum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return(sum)
}



