// // console.log("TRAIN AREA");

// function (letter, word) {

// }
// console.log("Jack ma maslahatlari");
// const list = [
//   "yaxshi talaba bo'ling",
//   "tog'g'ri boshliq tanlang",
//   "o'zingizga ishlashni boshlang",
//   "siz kuchli bolgan narsalarni qiling",
//   "yoshlarga investitsia qiling",
//   "endi dam oling foydasi yo'q",
// ];

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000);
//     callback(null, list[5]);
//   }
// }
// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });
// console.log("passed here 1");

// async asinxron function//
// defination qismida async ishlatildi//

//ASYNCHRONIC FUNCTION

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("iltimos raqam yozing");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return list[5];

//     //     return new Promise((resolve, reject) => {
//     //       // promise function da set time out va set interval yaxshi ishlaydi//
//     //       setTimeout(() => {
//     //         resolve(list[5]);
//     //       }, 5000);
//     //     });

//     //  setTimeout(() => {
//     //    resolve(list[5]);
//     //  }, 5000);
//   }
// }
//SET INTERVAL
// return new Promise((resolve, reject) => {
//       setInterval(() => {
//         resolve(list[5]);
//       }, 1000);
//     });

// THEN/CATCH
// console.log("passed here 0");
// maslahatBering(25)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1");

//ASYN/AWAIT
// async function run() {
//   let javob = await maslahatBering(15);
//   console.log(javob);
//   javob = await maslahatBering(25);
//   console.log(javob);
//   javob = await maslahatBering(35);
//   console.log(javob);
//   javob = await maslahatBering(45);
//   console.log(javob);
// }
// run();

class Shop {
  constructor(non, lagmon, cola) {
    this.ombor = {
      non: non,
      lagmon: lagmon,
      cola: cola,
    };
  }

  hozirgiVaqt() {
    return new Date().toLocaleTimeString("uz-UZ", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  qoldiq() {
    const vaqt = this.hozirgiVaqt();
    return `Hozir ${vaqt}da ${this.ombor.non}ta non, ${this.ombor.lagmon}ta lagmon va ${this.ombor.cola}ta cola mavjud!`;
  }

  sotish(mahsulot, miqdor) {
    const vaqt = this.hozirgiVaqt();
    if (this.ombor[mahsulot] !== undefined && this.ombor[mahsulot] >= miqdor) {
      this.ombor[mahsulot] -= miqdor;
      console.log(`Hozir ${vaqt}da ${miqdor}ta ${mahsulot} sotildi.`);
    } else {
      console.log(`Hozir ${vaqt}da yetarlicha ${mahsulot} yo'q.`);
    }
  }

  qabul(mahsulot, miqdor) {
    const vaqt = this.hozirgiVaqt();
    if (this.ombor[mahsulot] !== undefined) {
      this.ombor[mahsulot] += miqdor;
      console.log(`Hozir ${vaqt}da ${miqdor}ta ${mahsulot} qabul qilindi.`);
    } else {
      console.log(`Hozir ${vaqt}da noma’lum mahsulot: ${mahsulot}.`);
    }
  }
}

// Namuna:
const shop = new Shop(4, 5, 2);
console.log(shop.qoldiq());
shop.sotish("non", 3);
shop.qabul("cola", 4);
console.log(shop.qoldiq());

//B-TASK

//Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.

/*function countDigits(str) {
  return [...str].filter((char) => char >= "0" && char <= "9").length;
}
console.log(countDigits("dj4lnt5oi634n64noi54n"));*/

// A-TASK
//Assalomu alaykum

//Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.

//MASALANI YECHIMI
/*function countLetter(letter, word) {
  return word.split(letter).length - 1;
}

console.log(countLetter("e", "engineere"));*/
