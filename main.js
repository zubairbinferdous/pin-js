function getPin() {
    const number = Math.random()*10000 +'';
    const findpin = Math.round(number);
    const findpinToString = findpin + '';
    if (findpinToString.length === 4) {
      return findpinToString;
    }else{
        return getPin();
    }
}

const pin = document.getElementById('pin');
pin.addEventListener('click' , function () {
   const showNumber = getPin();
   const pinNumber = document.getElementById('pinNumber');
   pinNumber.value = showNumber; 
});

const calculator = document.getElementById('calculator');
calculator.addEventListener('click', function(event){

    const number = event.target.innerText;
    const showPin = document.getElementById('showPin');
    const pinNumberOld = showPin.value;
    if(isNaN(number)){
        if (number === 'C') {
            showPin.value = '';
        } else if(number === '<'){
            const digits = pinNumberOld.split('');
            digits.pop('');
            const newPin = digits.join('');
            showPin.value = newPin;
        }
    }else{
        
        const newPin = pinNumberOld + number;
        showPin.value = newPin;
    }
});

function findValue(input) {
    const pinNumber = document.getElementById(input);
    const pinValue =  pinNumber.value; 
    return pinValue;
}

const submit = document.getElementById('submit_code');
submit.addEventListener('click' , function(){

    const pinValue = findValue('pinNumber');
    const pinNumberOld = findValue('showPin');
    const error1 = document.getElementById('pin_success');
    const error2 = document.getElementById('pin_unsuccess');

    if (pinValue === pinNumberOld) {
        
        error1.style.display = 'block';
        error2.style.display = 'none';
    }else{
        
        error2.style.display = 'block';
        error1.style.display = 'none';
    }
})
