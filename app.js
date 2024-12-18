// 1-10: Obyektlarni tanlash va chiqarish

// 1)Massivda 5 ta obyekt bor. Har bir obyekt id maydoniga ega. Oxirgi obyektning id qiymatini ekranga chiqaring.

// let items = [
//     { id: 101 },
//     { id: 102 },
//     { id: 103 },
//     { id: 104 },
//     { id: 105 }
// ];
// let res = items.slice(-1)
// console.log(res);

// 2)4 ta obyektli massivdagi barcha obyektlarning age qiymatini ekranga chiqaring.


// let people = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Sami", age: 20 },
//     { name: "Karim", age: 35 }
// ];
// let res = people.map(value =>{
//     return value.age
// })
// console.log(res);


// 3)3 ta obyektli massivning 2-obyektidagi city maydonini konsolga chiqaring.

// let users = [
//     { name: "Ali", city: "Toshkent" },
//     { name: "Vali", city: "Samarqand" },
//     { name: "Sami", city: "Buxoro" }
// ]
// let res = users.filter(value =>{
//     delete value.name
//     return value.city == 'Samarqand'
// })
// console.log(res);

// 4)Bir massivda obyektlarning job maydonlari bor. Massivdagi barcha obyektlarning job qiymatlarini chiqaring

// let workers = [
//     { name: "Ali", job: "Dasturchi" },
//     { name: "Vali", job: "O'qituvchi" },
//     { name: "Sami", job: "Haydovchi" }
// ];
// let res = workers.map(value =>{
//     return value.job
// })
// console.log(res);

// 5)5 ta obyektli massivning 3-obyektidagi salary qiymatini ekranga chiqaring.

// let employees = [
//     { name: "Ali", salary: 1000 },
//     { name: "Vali", salary: 1200 },
//     { name: "Sami", salary: 900 },
//     { name: "Karim", salary: 1500 },
//     { name: "Asad", salary: 1100 }
// ];
// let res = employees.at(2).salary
// console.log(res);

// 6) 4 ta obyektli massivning birinchi obyektidagi country qiymatini chiqaring.

// let countries = [
//     { country: "Uzbekistan" },
//     { country: "Russia" },
//     { country: "USA" },
//     { country: "China" }
// ];
// let res = countries.at(0).country
// console.log(res);

// 7) 6 ta obyektli massivdagi 5-obyektning status qiymatini ekranga chiqaring.

// let orders = [
//     { id: 1, status: "New" },
//     { id: 2, status: "Pending" },
//     { id: 3, status: "Shipped" },
//     { id: 4, status: "Delivered" },
//     { id: 5, status: "Cancelled" },
//     { id: 6, status: "Returned" }
// ]
// let res = orders.at(4).status
// console.log(res);

// 8)3 ta obyektli massivning oxirgi obyektidagi phone qiymatini konsolga chiqaring

// let contacts = [
//     { name: "Ali", phone: "998901234567" },
//     { name: "Vali", phone: "998902345678" },
//     { name: "Sami", phone: "998903456789" }
// ];
// let res = contacts.at(2).phone
// console.log(res);

// 9) 4 ta obyektli massivdagi barcha obyektlarning email qiymatlarini ekranga 


// let users = [
//     { name: "Ali", email: "ali@gmail.com" },
//     { name: "Vali", email: "vali@yahoo.com" },
//     { name: "Sami", email: "sami@hotmail.com" },
//     { name: "Karim", email: "karim@outlook.com" }
// ];
// let res = users.map(value =>{
//     return value.email
// })
// console.log(res);

// 11-20: Obyektlar qiymatini o'zgartirish

// 10) Massivning birinchi obyektidagi name qiymatini "Alisher" qilib o'zgartiring.

// let users = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Sami", age: 20 }
// ];
// users[0].name = 'Alisher'
// console.log(users);

// 11)Oxirgi obyektning status qiymatini "Updated" qilib o'zgartiring

// let tasks = [
//     { id: 1, status: "New" },
//     { id: 2, status: "In Progress" },
//     { id: 3, status: "Pending" }
// ];
// tasks[2].status = 'Updated'
// console.log(tasks);


// 12) 3-obyektning salary qiymatini 2000 ga tenglashtiring

// let employees = [
//     { name: "Ali", salary: 1000 },
//     { name: "Vali", salary: 1200 },
//     { name: "Sami", salary: 1500 }
// ];
// employees[2].salary = 2000
// console.log(employees);

// 13) Massivning ikkinchi obyektidagi city qiymatini "Farg'ona" qilib o'zgartiring.

// let cities = [
//     { id: 1, city: "Toshkent" },
//     { id: 2, city: "Namangan" },
//     { id: 3, city: "Samarqand" }
// ];
// cities[1].city = 'Fargona'
// console.log(cities);

// 14) 4-obyektning email qiymatini yangi qiymat bilan almashtiring

// let clients = [
//     { name: "Ali", email: "ali@mail.com" },
//     { name: "Vali", email: "vali@mail.com" },
//     { name: "Sami", email: "sami@mail.com" },
//     { name: "Karim", email: "karim@mail.com" }
// ];
// clients[3].email = 'salim@gmail.com'
// console.log(clients);

// 21-30: Yangi maydon qo'shish va qiymatni yangilash

// 21) Oxirgi obyektga yangi role maydonini qo'shing va qiymatini "admin" qilib belgilang.

// let people = [
//     { name: "Ali" },
//     { name: "Vali" },
//     { name: "Sami" }
// ];
// people[2].role = 'Admin'
// console.log(people);

// 22) Massivdagi barcha obyektlarga yangi isVerified maydonini qo'shing va qiymatini false qilib belgilang

// let users = [
//     { name: "Ali" },
//     { name: "Vali" },
//     { name: "Sami" }
//   ];
// users.forEach(value =>{
//     value.isVarifed = 'false'
// })
// console.log(users);

// 23) 2-obyektning salary qiymatini 500 ga oshiring.

// let workers = [
//     { name: "Ali", salary: 1000 },
//     { name: "Vali", salary: 1200 },
//     { name: "Sami", salary: 900 }
//   ];
// workers[1].salary + 500
// console.log(workers);

// 24)4-obyektning phone qiymatining oxiriga " (updated)" qatorini qo'shing

// let contacts = [
//     { name: "Ali", phone: "998901234567" },
//     { name: "Vali", phone: "998902345678" },
//     { name: "Sami", phone: "998903456789" },
//     { name: "Karim", phone: "998904567890" }
//   ];
// contacts[3].phone += '  updated'
// console.log(contacts);

// 25)Massivning ikkinchi obyektidagi age qiymatini ikki barobar oshiring.

// let people = [
//     { name: "Ali", age: 20 },
//     { name: "Vali", age: 25 },
//     { name: "Sami", age: 30 }
//   ];
// people[1].age * 2
// console.log(people);

// 26) Oxirgi obyektga yangi joinedAt maydonini qo'shing va qiymatini "2024-07-01" qilib belgilang.

// let employees = [
//     { name: "Ali" },
//     { name: "Vali" },
//     { name: "Sami" }
//   ];
//   employees.forEach(value =>{
//     employees[2].joinedAt = '2024-07-01'
//   })
// console.log(employees);

// 27) Massivdagi 1-obyektning name qiymatiga " (CEO)" qo'shimchasini qo'shing

// let team = [
//     { name: "Ali" },
//     { name: "Vali" },
//     { name: "Sami" }
//   ];
// team[0].name += ' (CEO)'
// console.log(team);

// 28)3-obyektning price qiymatini 10% kamaytiring.

// let products = [
//     { name: "Laptop", price: 1000 },
//     { name: "Phone", price: 500 },
//     { name: "Tablet", price: 300 }
//   ];
// products[2].price * 0.9
// console.log(products)

// 29) Barcha obyektlarning isActive qiymatini true qilib o'zgartiring.

// let users = [
//     { name: "Ali", isActive: false },
//     { name: "Vali", isActive: false },
//     { name: "Sami", isActive: false }
//   ];
// users.forEach(value =>{
//     value.isActive = true
// })
// console.log(users);

// 31-40: Shartli tekshirish va qiymatlar o'zgarishi

// 31) Agar 2-obyektning status qiymati "Pending" bo'lsa, uni "Completed" qilib belgilang

// let data = [
//     { id: 1, name: "Ali", status: "Completed" },
//     { id: 2, name: "Vali", status: "Pending" },
//     { id: 3, name: "Sami", status: "Completed" }
//   ];
// let res = data.map(value =>{
//     return value.status = 'Completed'
// })
// console.log(res);

// 32)1-obyektning age qiymati 30 dan katta bo'lsa, "Senior" degan yangi maydon qo'shing va qiymatini true qiling.

// let data = [
//     { id: 1, name: "Ali", age: 35 },
//     { id: 2, name: "Vali", age: 25 },
//     { id: 3, name: "Sami", age: 28 }
//   ];
// let res = data.filter(value =>{
//     if(data[0].age > 30){
//     }
//     return data[0].senior = true
// })
// console.log(res);

// 33)Oxirgi obyektning price qiymati 100 dan kichik bo'lsa, uni 100 ga tenglashtiring

// let data = [
//     { id: 1, name: "Product1", price: 150 },
//     { id: 2, name: "Product2", price: 80 },
//     { id: 3, name: "Product3", price: 60 }
//   ];
// let res = data.filter(value =>{
//     data.price < 100
//     return data[2].price = 100
// })
// console.log(res);


// 34)Barcha obyektlarning role qiymatini "user" qilib yangilang, lekin oxirgi obyektning role qiymatini "admin" qilib qo'ying.

// let data = [
//     { id: 1, name: "Ali", role: "manager" },
//     { id: 2, name: "Vali", role: "guest" },
//     { id: 3, name: "Sami", role: "supervisor" }
//   ];
// let res = data.filter(value =>{
//     return data[2].role = 'admin'
// })
// console.log(res);

// 35)3-obyektning city qiymati "Toshkent" bo'lsa, uni "Samarqand" qilib o'zgartiring.

// let data = [
//     { id: 1, name: "Ali", city: "Buxoro" },
//     { id: 2, name: "Vali", city: "Namangan" },
//     { id: 3, name: "Sami", city: "Toshkent" }
// ];
// let res = data.filter(value =>{
//     return data[2].city = 'Samarqand'
// })
// console.log(res);

// 37)2-obyektning email qiymati "@gmail.com" bilan tugasa, " (verified)" qo'shimchasini kiriting.

// let data = [
//     { id: 1, name: "Ali", email: "ali@yahoo.com" },
//     { id: 2, name: "Vali", email: "vali@gmail.com" },
//     { id: 3, name: "Sami", email: "sami@mail.com" }
//   ];

// 38)Oxirgi obyektga yangi lastLogin maydonini qo'shing va qiymatini hozirgi sanaga tenglashtiring.

// let data = [
//     { id: 1, name: "Ali" },
//     { id: 2, name: "Vali" },
//     { id: 3, name: "Sami" }
//   ];
// data[2].lastlogin = '2024-12-31'
// console.log(data);

// 39)Agar 1-obyektning stock qiymati 0 bo'lsa, "isAvailable" maydonini false qilib belgilang.

// let data = [
//     { id: 1, name: "Product1", stock: 0 },
//     { id: 2, name: "Product2", stock: 5 },
//     { id: 3, name: "Product3", stock: 10 }
//   ];
// data[0].isaviable = false
// console.log(data);

// 41) Massivdagi obyektlarning price qiymati 500 dan katta bo'lgan obyektlarning isExpensive qiymatini true qilib belgilang.

// let data = [
//     { id: 1, name: "Product1", price: 600 },
//     { id: 2, name: "Product2", price: 400 },
//     { id: 3, name: "Product3", price: 800 }
//   ];
// data.forEach(value =>{
//     if(value.price > 500){
//         value.isExpensive = true
//     }
// })
// console.log(data);

// 42) 2-obyektning salary qiymati >= 1000 bo'lsa, "High salary" degan yangi maydon qo'shing va qiymatini true qilib belgilang.

// let data = [
//     { id: 1, name: "Ali", salary: 900 },
//     { id: 2, name: "Vali", salary: 1000 },
//     { id: 3, name: "Sami", salary: 800 }
//   ];
// data.forEach(value =>{
//     if(value.salary >= 1000 && value.id == 2){
//         value.high_salary = true
//     }
// })
// console.log(data);

// 43)Agar 3-obyektning name qiymati "Ali" bo'lsa, "isManager" degan maydon qo'shib, true deb belgilang.

// let data = [
//     { id: 1, name: "Vali", role: "user" },
//     { id: 2, name: "Sami", role: "user" },
//     { id: 3, name: "Ali", role: "guest" }
//   ];
// data.forEach(value =>{
//     if(value.id == 3 && value.name == 'Ali'){
//         value.ismanager = true
//     }
// })
// console.log(data);

// 44) Massivda age maydoni 18 dan kichik bo'lgan obyektlar uchun "isUnderage" qiymatini true qilib qo'shing

// let data = [
//     { id: 1, name: "Ali", age: 17 },
//     { id: 2, name: "Vali", age: 20 },
//     { id: 3, name: "Sami", age: 16 }
//   ];
// data.forEach(value =>{
//     if(value.age < 18){
//         value.isUnderage = true 
//     }
// })
// console.log(data);

// 45)Massivdagi obyektlar ichidan stock qiymati < 10 bo'lgan obyektlarni aniqlab, "lowStock" qiymatini true qilib qo'shing

// let data = [
//     { id: 1, name: "Product1", stock: 5 },
//     { id: 2, name: "Product2", stock: 15 },
//     { id: 3, name: "Product3", stock: 8 }
//   ];
// data.forEach(value =>{
//     if(value.stock <10){
//         value.LowStock = true
//     }
// })
// console.log(data);

// 46)1-obyekt va oxirgi obyektning role qiymatini "guest" qilib o'zgartiring.

// let data = [
//     { id: 1, name: "Ali", role: "admin" },
//     { id: 2, name: "Vali", role: "user" },
//     { id: 3, name: "Sami", role: "supervisor" }
//   ];
// data.forEach(value =>{
//     if(value.id == 1 ){
//         value.role = 'guest'
//     }
//     if(value.id == 3 ){
//         value.role = 'guest'
//     }
    
// })
// console.log(data);

// 47)Agar biror obyektning status qiymati "Pending" bo'lsa, "isPending" degan maydon qo'shib, true qilib belgilang.

// let data = [
//     { id: 1, name: "Ali", status: "Pending" },
//     { id: 2, name: "Vali", status: "Completed" },
//     { id: 3, name: "Sami", status: "Pending" }
//   ];
// data.forEach(value =>{
//     if(value.status == 'Pending'){
//     value.isPending = true
//     }
// })
// console.log(data);

// 48)Massivdagi 3-obyektning city qiymati "Toshkent" bo'lsa, uni "Buxoro" qilib almashtiring.

// let data = [
//     { id: 1, name: "Ali", city: "Samarqand" },
//     { id: 2, name: "Vali", city: "Namangan" },
//     { id: 3, name: "Sami", city: "Toshkent" }
//   ];
// data.forEach(value =>{
//     if( value.city == 'Toshkent' && value.id == 3 ){
//     value.city = 'Buxoro'
//     }
// })
// console.log(data);

// 49) Oxirgi obyektning score qiymati < 50 bo'lsa, "failed" maydonini qo'shib, qiymatini true qilib belgilang.

// let data = [
//     { id: 1, name: "Ali", score: 70 },
//     { id: 2, name: "Vali", score: 90 },
//     { id: 3, name: "Sami", score: 40 }
//   ];
// data.forEach(value =>{
//         if( value.score < 50 && value.id == 3 ){
//         value.failed = true   
//         }
//     })
//     console.log(data);
    
// 51-60: Obyektlarni o'zgartirish va murakkabroq amallar

// 51): Massivdagi obyektlarning salary qiymatini 10% ga oshiring

// let data = [
//     { id: 1, name: "Ali", salary: 1000 },
//     { id: 2, name: "Vali", salary: 1500 },
//     { id: 3, name: "Sami", salary: 2000 }
//   ];
// data.forEach(value =>{
//     value.salary = value.salary + value.salary/10
// })
// console.log(data);

// 52)2-obyektning name qiymatiga " - employee" qo'shimchasini qo'shing.

// let data = [
//     { id: 1, name: "Ali" },
//     { id: 2, name: "Vali" },
//     { id: 3, name: "Sami" }
//   ];
// data[1].name += ' -employee'
//     console.log(data);
    

// 53)Massivdagi obyektlarning isAvailable maydonini o'zgartirib, stock qiymati > 0 bo'lganlarga true, qolganlarga false qilib belgilang.

// let data = [
//     { id: 1, name: "Product1", stock: 5 },
//     { id: 2, name: "Product2", stock: 0 },
//     { id: 3, name: "Product3", stock: 10 }
//   ];
// data.forEach(value =>{
//     if(value.stock > 0){
//         value.isAvaible = true

//     }else{
//         value.isAvaible = false
//     }
// })
// console.log(data);

// 55)Oxirgi obyektga yangi updatedAt maydonini qo'shing va qiymatini "2024-07-10" qilib belgilang.

// let data = [
//     { id: 1, name: "Ali" },
//     { id: 2, name: "Vali" },
//     { id: 3, name: "Sami" }
//   ];
// data.forEach(value =>{
//     if(value.id == 3){
//         value.updatedAt = '2024-07-10'
//     }
// })
// console.log(data);

// 56)3-obyektning level qiymatini "Intermediate" deb o'zgartiring, agar mavjud bo'lmasa, qo'shing.

// let data = [
//     { id: 1, name: "Ali", level: "Beginner" },
//     { id: 2, name: "Vali" },
//     { id: 3, name: "Sami" }
//   ];
// data.forEach(value =>{
//     if(value.id == 3){
//         value.Intermediate = true
//     }
// })
// console.log(data);

// 57)Agar biror obyektning score qiymati 80 dan katta bo'lsa, "isTop" qiymatini true qilib belgilang

// let data = [
//     { id: 1, name: "Ali", score: 75 },
//     { id: 2, name: "Vali", score: 85 },
//     { id: 3, name: "Sami", score: 90 }
//   ];
//   data.forEach(value =>{
//     if(value.score > 80){
//         value.isTop = true
//     }
// })
// console.log(data);

// 58) Massivdagi obyektlardan role qiymati "admin" bo'lgan obyektlarni topib, ularning privileges qiymatini "full" qilib belgilang

// let data = [
//     { id: 1, name: "Ali", role: "admin" },
//     { id: 2, name: "Vali", role: "user" },
//     { id: 3, name: "Sami", role: "admin" }
//   ];
// data.forEach(value =>{
//     if(value.role == 'admin'){
//         value.privileges = 'full'
//     }
// })
// console.log(data);

// 59) Oxirgi obyektning name qiymatiga " (completed)" qo'shimchasini qo'shing.

// let data = [
//     { id: 1, name: "Ali" },
//     { id: 2, name: "Vali" },
//     { id: 3, name: "Sami" }
//   ];
//   data[2].name += ' (completed'
//   console.log(data);
  
// 60)Agar birinchi obyektning isVerified qiymati false bo'lsa, uni true qilib belgilang.

// let data = [
//     { id: 1, name: "Ali", isVerified: false },
//     { id: 2, name: "Vali", isVerified: true },
//     { id: 3, name: "Sami", isVerified: false }
//   ];
//   data.forEach(value =>{
//     if(value.id == 1 && value.isVerified == false){
//         value.isVerified = true
//     }
// })
// console.log(data);
