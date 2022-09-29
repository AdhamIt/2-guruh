// ro`yhat
// length -> ro`yhat uzunligini
let sonlar = [1,2,3,4,5,6,76,74,63,4,23,45,23]
let ikkinchi = ['So`z1', 'so`z2']
sonlar.concat(ikkinchi)
// concat birinchi massivga ikkinchi massivni qo`shadi
// let cpwithin =  sonlar.copyWithin(2, 0,4) nusxalab berish uchun menimach
// sonlar.entries() ichida bormi yo`qmi shuni aniqlab beradi
// sonlar.every(x => x)
sonlar.fill(5, 0,5) // to`ldirib chiqish uchun ishlatildi. bu yerda 3 ta son bo`ldi
// birinchisi to`ldirilishi kerak bo`lgan son. 2-boshlang`ich indeksi, 3-tugash indexi
// sonlar.filter() saralab berish
let beshdankatta = sonlar.filter(x => x>5)
sonlar.find(x => x=5)
sonlar.findIndex(x => x='2')
sonlar.forEach(x=>console.log(x))




// izlashim kerak
// find, copywith
// entires, findIndex
// flat, flatMap


