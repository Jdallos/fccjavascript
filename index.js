const certOpen = document.querySelector('#cert-img-open');
const cert = document.querySelector('#cert-img')

certOpen.addEventListener('click', () => {
  cert.classList.toggle('d-none');
  certOpen.innerHTML= 'open/close';
})

// Palindrome
const palindromeForm = document.querySelector('#palindrome-form');
const palindromeAnswer = document.querySelector('#palindrome-answer');

palindromeForm.addEventListener('submit', function(e){
    e.preventDefault();
    if(palindromeAnswer.innerHTML !== ''){
        palindromeAnswer.innerHTML = '';
      palindromeAnswer.classList.remove('success');
      palindromeAnswer.classList.remove('failure');

    }
    const userInput = palindromeForm.elements.inputPal;
    palindromeTest(userInput.value);
    if (palindromeAnswer.innerHTML[0] == 'Y') {
      palindromeAnswer.classList.add('success');
    }
    if (palindromeAnswer.innerHTML[0] == 'N') {
      palindromeAnswer.classList.add('failure');
    }
    userInput.value = '';
})

function palindromeTest(str){
    //new string without non-alpha
  let alphaStr = ''
  const regex = /[a-zA-Z0-9]/;
  // console.log(str);
  for(let i = 0; i < str.length; i ++){
    if(regex.test(str[i])){
      alphaStr += str[i].toLowerCase();
    }
  }
  // console.log(alphaStr);
  for(let i = 0; i< alphaStr.length; i++){
    if(alphaStr.length % 2 === 0){
      if(i <= alphaStr.length/2){
        if(alphaStr[i] === alphaStr[alphaStr.length-1-i]){
        }
        else{
            return palindromeAnswer.append(`No '${str}' is not a palindrome`);
        }
      }
    }
    if(alphaStr.length % 2 !== 0){
      if(i < alphaStr.length/2){
        if(alphaStr[i] === alphaStr[alphaStr.length-1-i]){
        }
        else{
          return palindromeAnswer.append(`No '${str}' is not a palindrome`);
        }
      }
      else if(i === Math.ceil(alphaStr.length)){

      }
    }
  }
  return palindromeAnswer.append(`Yes '${str}' is a palindrome`);

}

// Roman numeral converter

const romanForm = document.querySelector('#roman-form');
const romanAnswer = document.querySelector('#roman-answer');
const romanExtra = document.querySelector('#roman-extra');

romanForm.addEventListener('submit', function(e){
    e.preventDefault();
    if(romanAnswer.innerHTML !== ''){
        romanAnswer.innerHTML = '';
        romanExtra.innerHTML = '';
    }
    const userInput = romanForm.elements.inputRom;
    romanTest(userInput.value);
    userInput.value = '';
})

function romanTest(num) {
  let countDown = num;
  let numerals = '';
  let extra = '';

  if(countDown == 0){
  return romanAnswer.append('Woah, nice try! There is no Roman numeral for 0.');
  }

  if (countDown > 11111){
    extra = 'They get long pretty quick, right? This is one of the advantages of our current number system over the Roman numerals.'
  }
 
  while(countDown !== 0){
   
 
     if (countDown >= 1000){
       numerals += 'M';
       countDown -= 1000;
     }
     else if(countDown >= 900){
       numerals += 'CM';
       countDown -= 900;
     }
     else if(countDown >= 500){
       numerals += 'D';
       countDown -= 500;
     }
     else if(countDown >= 400){
       numerals += 'CD';
       countDown -= 400;
     }
     else if(countDown >= 100){
       numerals += 'C';
       countDown -= 100;
     }
     else if(countDown >= 90){
       numerals += 'XC';
       countDown -= 90;
     }
     else if(countDown >= 50){
       numerals += 'L';
       countDown -= 50;
     }
     else if(countDown >= 40){
       numerals += 'XL';
       countDown -= 40;
     }
     else if(countDown >= 10){
       numerals += 'X';
       countDown -= 10;
     }
     else if(countDown >= 9){
       numerals += 'IX';
       countDown -= 9;
     }
     else if(countDown >= 5){
       numerals += 'V';
       countDown -= 5;
     }
     else if(countDown >= 4){
       numerals += 'IV';
       countDown -= 4;
     }
     else{
       numerals += 'I';
       countDown -= 1;
     }
    
  }
 //  let test = 'M' + 'D';
 //  console.log(test);
  // console.log(numerals);
  return romanAnswer.append(numerals), romanExtra.append(extra);
 }


 // Caesars Cipher

const caesarsForm = document.querySelector('#caesar-form');
const caesarsAnswer = document.querySelector('#outputCae');

caesarsForm.addEventListener('keyup', function(e){
    if(caesarsAnswer.innerHTML !== ''){
        caesarsAnswer.innerHTML = '';
    }
    const userInput = caesarsForm.elements.inputCae;
    caesarsTest(userInput.value);
})

caesarsForm.addEventListener('submit', function(e){
  e.preventDefault();
  const userInput = caesarsForm.elements.inputCae;
  userInput.value = '';
  caesarsAnswer.innerHTML = '';
})

function caesarsTest(str) {
  //convert to ASCII
  
  let newStr = '';
  for(let i = 0; i < str.length; i ++){
    let code ='';
    code = str.charCodeAt(i); 
    // console.log(code);
    if(code >= 65 && code <= 90){
      if(code <= 77){
        code += 13;
      }
      else if(code > 77){
        code -= 13;
      }
    }
    // console.log(code);
    newStr += String.fromCharCode(code);
  }
  console.log(newStr);
  
  //Set up to only change within the ascii range (uppercase)
  //if alpha code is less than the 13th alphaposition + 13
  //if alpha code is more than the 13th alphaposition - 13
  
  //convert back to str
  
  
  
    return caesarsAnswer.append(newStr);
  }
  

  // Telephone Validator

const telephoneForm = document.querySelector('#telephone');
const telephoneAnswer = document.querySelector('#telephone-answer');

telephoneForm.addEventListener('submit', function(e){
    e.preventDefault();
    if(telephoneAnswer.innerHTML !== ''){
        telephoneAnswer.innerHTML = '';
        telephoneAnswer.classList.remove('success');
        telephoneAnswer.classList.remove('failure');
    }
    const userInput = telephoneForm.elements.inputTel;
    telephoneTest(userInput.value);
    if (telephoneAnswer.innerHTML == 'Passed') {
      telephoneAnswer.classList.add('success');
    }
    if (telephoneAnswer.innerHTML == 'Failed') {
      telephoneAnswer.classList.add('failure');
    }
    userInput.value = '';
})

function telephoneTest(str) {

  const regex = /^(1\s?)?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/;
  
  const regex2 = /\(|\)/;
  let count = 0;
  for(let i = 0; i < str.length; i++){
    if(regex2.test(str[i])){
      count++;
    }
  }
  if (count === 1){
    return telephoneAnswer.append('Failed');
  }
  
  if (regex.test(str)){
    return telephoneAnswer.append('Passed');

  }
  
  return telephoneAnswer.append('Failed');

    //allow (555) must match, allow spaces, allow -,
  
    //regex to match case, iterating over to check positions
    
  }


  //  Cash register-need to double check but think its working, its not meant to work with cash less than price

const tillForm = document.querySelector('#till');
const tillAnswer = document.querySelector('#till-answer');

tillForm.addEventListener('submit', function(e){
    e.preventDefault();
    if(tillAnswer.innerHTML !== ''){
        tillAnswer.innerHTML = '';
    }
    let price = parseFloat(tillForm.elements.inputPrice.value);
    let cash = parseFloat(tillForm.elements.inputCash.value);
    const cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];
    tillTest(price, cash, cid);
    price = '';
    cash = '';
})

  
function tillTest(price, cash, cid){
  let test = '';
let change = '';
  let obj = {
    status: `${test}`,
    change: `[${change}]`
  }
let newCid = cid;

newCid[0].push(0.01);
newCid[1].push(0.05);
newCid[2].push(0.1);
newCid[3].push(0.25);
newCid[4].push(1.00);
newCid[5].push(5.00);
newCid[6].push(10.00);
newCid[7].push(20.00);
newCid[8].push(100.00);


let totalCid = 0;

  for(let i = 0; i < cid.length; i++){
    totalCid += cid[i][1];
  }

  function changeDue(price,cash,cid){
    
    let due = cash.toFixed(2) - price.toFixed(2);
    let cashBack = [];
    let index = 0;
    if (due > 0){
      for(let i = cid.length-1; i >= 0; i--){
       let output = 0;
        let coinValue = 0;
        if(due >= cid[i][2] && cid[i][1] > 0){
          while(due >= cid[i][2] && cid[i][1] > 0){
            coinValue += cid[i][2];
            due -= cid[i][2];
            due = due.toFixed(2)
            cid[i][1] -= cid[i][2];
            output = cid[i];
           
          }
            cashBack[index] = output;
            cashBack[index][1] = coinValue;
            cashBack[index].pop();
            index++;
        }
      }
    }
    if( due > 0){
      return tillAnswer.append('{status: "INSUFFICIENT_FUNDS", change: []}')
    }
    let final = [];
    for(let i = 0; i < cashBack.length; i++){
      final[i] = cashBack[i];
  }
    return {status: 'OPEN', change: final}
  }
  if(totalCid < (cash - price)){
    return tillAnswer.append('{status: "INSUFFICIENT_FUNDS", change: []}');
  }
  else if(totalCid === (cash- price)){
    for(let i = 0; i < cid.length; i++){
      cid[i].pop();
  }
    obj.status = 'CLOSED';
    obj.change = cid;
    console.log(obj);
    return tillAnswer.append(JSON.stringify(obj));
  }
  else{
    obj = changeDue(price,cash,newCid);
    console.log(obj.change);
    return tillAnswer.append(JSON.stringify(obj));
  }
}