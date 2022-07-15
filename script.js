const calculatetemp = () =>{
    const numTemp = document.getElementById('temperature').value;
    const units = document.getElementById('units');
   const unitvalue = units.options[units.selectedIndex].value;
    let result;
    if(unitvalue=='cel'){
        result = Math.round((numTemp-32)*5)/9;
        document.getElementById('resultfield').innerHTML = `${result} °Celsius`;
    }
    else{
        result = Math.round(numTemp*(9/5)+32);
        document.getElementById('resultfield').innerHTML = `${result} °Fahrenheit`;
    }
}
