const arr = ["olma", "nok", "gilos", "shoftoli"];
console.log(arr);

alert("Boshlanishida Arryining uzunligi: 4");

if (confirm("sizning alayingizdan malumotlarni olib tashlamoqchimiz")) {
    arr.pop();
    alert("arryning uzunligi: 3");
    console.log(arr);
} else {
    alert("Arryning uzunligi: 4");
}