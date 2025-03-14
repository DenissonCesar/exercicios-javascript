function number(a) {
   return (
   "R$" + Number(a).toFixed(2).replace(".",",")
    
   )

}

console.log(number(0.909090000))