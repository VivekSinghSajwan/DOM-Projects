//use the method .value for extracting data from forms

let result = document.querySelector('.result')
let btn = document.querySelector("button");

btn.addEventListener('click',(e) => {
    e.preventDefault();
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    
    if(height == '' || height < 0 || isNaN(height))
        result.innerHTML = `Please enter a valid Height !!!`;
    else if(weight == '' || weight < 0 || isNaN(weight))
        result.innerHTML = `Please enter a valid Weight !!!`;
    else{
        height = height/100;
        let bmi = weight/(height*height);
        bmi = bmi.toFixed(2);
        console.log(bmi);
        
        result.innerHTML = `Your BMI is ${bmi}`;
        if(bmi < 18.6 || bmi > 24.9)
            result.style.color = 'red';
        else    
            result.style.color = 'greenyellow'
    }
})


