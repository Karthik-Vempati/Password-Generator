const passwordLength = document.getElementById('len-p')
const upper = document.getElementById('upper')
const lower = document.getElementById('lower')
const special = document.getElementById('specialchar')
const number = document.getElementById('number')
const submit = document.getElementById('generate')

submit.addEventListener('click', () =>{
    const len = passwordLength.value;
    const upperString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerstring = 'abcdefghijklmnopqrstuvwxyz';
    const specialstring = '@#$';
    const numberString = '1234567890';
    
    let finalstring = '';

    if(upper.checked){
        finalstring = finalstring+upperString;
    }
    if (lower.checked) {
        finalstring = finalstring+lowerstring;
    }
    if (special.checked) {
        finalstring = finalstring+specialstring;
    }
    if (number.checked) {
        finalstring = finalstring+numberString;
    }

    let pass ='';

    for (let index = 0; index < len; index++) {
        let randomIndex = finalstring.charAt(Math.floor(Math.random()*finalstring.length));
        pass = pass + randomIndex;
    }

    document.getElementById('result').value = pass;
})

