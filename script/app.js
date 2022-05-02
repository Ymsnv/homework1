
// 1

let prom=prompt('введите текст')
let alProm=alert(prom)

// 2

let enterNumFirst=+prompt('введите первое число')
let enterNumSec=+prompt('введите второе число')
let al=alert(enterNumFirst+enterNumSec)

// 3

let promName=prompt('enter your name')
let promAge=prompt('enter your age')
if(promAge){
    if(promAge>=18){
        alert('welcome')
    }else{
        alert('sorry,you are under 18')
    }
}

// 4

let conf = confirm ('Хотите ввести имя блока?')
      if (conf) {
      divNam = prompt("Введите имя блока");
      }else{
        alert('no name')
      }
        let confElement = confirm("Хотите ввести название элемента ?");
        if (confElement) {
         elName = prompt("Введите название элемента");
        }else {
            alert(divNam)
        }
          let confMod = confirm("Хотите ввести модификатор элемента ?");
          if (confMod) {
           moName = prompt("Введите модификатор");
          }else{
              alert(`${divNam}_${elName}`)
          }
            let allName = confirm( `${divNam}_${elName}_${moName}`)
          


// 5

let enterNumOne=+prompt('enter first number')
let enterNumTwo=+prompt('enter second number')
let div=enterNumOne/enterNumTwo
let mult=enterNumOne*enterNumTwo
let plus=enterNumOne+enterNumTwo
let minus=enterNumOne-enterNumTwo
if(enterNumOne&&enterNumTwo){
    let res=prompt('enter operation')
    if(res === "mult"){
        alert(mult)
    }else if(res === "div"){
        alert(div)
    }else if(res === "plus"){
        alert(plus)
    }else if(res === "minus"){
        alert(minus)
    }else{
      alert('wrong operation')
}}