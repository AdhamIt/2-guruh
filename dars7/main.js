// funksiyalar
// birinchi yo`l
// function salom () {

// }

// // ikkinchi yo`l
// const salom2 = () => {

// }

// console.log('jshfkjsfh')
// function chiqar (malumot) {
//   console.log(malumot)
// }

// chiqar(5)

// function kvadrat(a){
//   console.log(Math.pow(a,2))
// }

// kvadrat(3)
// funksiyalar 2 hil bo`ladi. 
// qiymat qaytaradigan.
// let b =4
// let a=7
// let c=a+b

// qiymat qaytarmidi.

// let kichiksoni = kichigi(3,9)

// function kichigi(a,b){
//   if(a>b){
//     return b;
//   }
//   else{
//     return a;
//   }
// }

// console.log(kichiksoni**2)
// let a=1.2
// let b=3.2
// let c=4.0
// let d = 5
// let e= 7
// function kub(son){
//   console.log(son**3)
// }

// kub(a)
// kub(b)
// kub(c)
// kub(d)
// kub(e)

// function powerA234(son){
//   console.log(son**2, son**3, son**4)
// }
// powerA234(4)
// powerA234(8)
// powerA234(9)


function power2(a,n){
  let an=1
  if(n>0){
    for(let i=1; i<=n; i++){
      an*=a;
    }
    return an;
  } else if(a<0){
    for(let i=1; i<=Math.abs(n); i++){
      an*=a;
    }
    return 1/an;
  }
}


function power3(a,n){
  if(n%1==0){
    console.log(a**n)
  }
  else{
    console.log(power2(a,n))
  }
}

// console.log(power2(2,4))
power3(3,3.5)


function faktorial(n){
  let as=1
  for(let son=1; son<=n; son++){
    as *=son;
  }
  return as;
}

