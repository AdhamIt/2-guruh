// False , True
// Mantiqiy amallar
// Mantiqiy qo`shish, Mantiqiy ko`paytrish, Mantiy inkor
// +,*,!  => dasturlash tilida    || , &&  , !
// Mantiqiy amallar 
// >, <, <=, <=, ==, ===, !


// (5>5)||(5==5)||!(5>5)
// false || true || true || true
// let a = false;
// let b = 'Assalom'

// a||b&&(b.length == 8)||!(a&&b)
// false || true && false || true  
// false || false || true
// let a = 9
// let b = 10
// let c= 3


// a>0&&b>0||c>0

// (a>0 && b>0 && c<0)||(a>0 && c>0 && b<0) || (c>0 && b>0 && a<0)

// 0 + 1 = 1
// a%2==1 || b%2==1


// let son = 132
// let birlar = son % 10
// let onlar = Math.floor(son /10)%10
// let yuzlar = Math.floor(son / 100)
// let ifoda = (birlar == onlar) || (birlar == yuzlar) || (onlar == yuzlar)

// let x = -3
// let y = 5

// let ifoda = x<0 && y>0
// console.log(ifoda)


// let a = 9
// let b = 9
// let c = 9

// let ifoda = (a == b) && (a == c) && (c == b)
// console.log(ifoda)

let x1=3
let y1=5

let x2=7
let y2=3


let qorarangda = ((x1%2==1) && (y1%2==1))||((x1%2==0) && (y1%2==0)) 
let qora2 = ((x2%2==1) && (y1%2==1))||((x2%2==0) && (y1%2==0))
console.log(qora2 && qorarangda)

