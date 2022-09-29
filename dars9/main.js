let son = [1,2,4,5,6,7,8,8,9]
let soz = ['Olma', 'anor', 'behi']

// son.forEach(x=>{
//         console.log(x)
// })


// son.includes(10)
// Massivni ichida bormi yoki yo`qmi shuni aniqlab beradi

son.indexOf(2)
// qaysi indexda joylashganini aniqlab beradi

son.join('-')
soz.join('-')
// join qo`shish uchun ishlatiladi.

// soz.keys()

son.lastIndexOf(8)
// elementni oxirgi izlagan matnnin chiqarib beradi

son.map(x =>{
        return x+2
})
// yangi element qo`shish yokii avvalgilarini o`zgartirish uchun ishlatiladfi

son.pop()
// Oxirgi elementini chiqarib tashlash
son.push(10)
// Oxiriga qo`shish element qo`shish

son.reduce((yigindi, element) => {
        return yigindi+element;})
// reduce massiv elementlarini yiginidisini topib beradi 

son.reverse()
// massivni teskari chiqarish

son.shift(10)
// boshidan bir elementni ochirish

son.unshift(10)

son.slice(0,5)
// elementlarni olish index boyicha

// son.some()

son.sort((a,b)=> a-b)
// sartirovkalash sonlarda
// matnda o`zi ishlaydi