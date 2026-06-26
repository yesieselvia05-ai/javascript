
const hargaHeadset = 225000;
const hargaMouse = 150000;
const hargaKeyboard = 350000;

const totalBelanja = hargaHeadset + hargaMouse + hargaKeyboard;

let diskonPersen = 0;

if (totalBelanja < 250000) {
    diskonPersen = 0;
} else if (totalBelanja >= 250000 && totalBelanja <= 499999) {
    diskonPersen = 5;
} else if (totalBelanja >= 500000 && totalBelanja <= 799999) {
    diskonPersen = 10;
} else if (totalBelanja >= 800000) {
    diskonPersen = 15;
}

const nilaiDiskon = (diskonPersen / 100) * totalBelanja;
const totalSetelahDiskon = totalBelanja - nilaiDiskon;

const pembayaran = 800000;
const kembalian = pembayaran - totalSetelahDiskon;

console.log("===== Rincian Pembelian =====");
console.log(`Headset = Rp. ${hargaHeadset}`);
console.log(`Mouse = Rp. ${hargaMouse}`);
console.log(`Keyboard = Rp. ${hargaKeyboard}\n`); 

console.log(`Total Belanja = Rp. ${totalBelanja}`);
console.log(`Diskon = ${diskonPersen}%`);
console.log(`Total Setelah Diskon = Rp. ${totalSetelahDiskon}`);
console.log(`Pembayaran = Rp. ${pembayaran}`);
console.log(`Kembalian = Rp. ${kembalian}`);