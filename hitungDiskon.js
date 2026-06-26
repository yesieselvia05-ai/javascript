

const hargaNasiGoreng = 25000;
const hargaMieGoreng = 22000;
const hargaCapcay = 32000;

const hargaTotal = hargaNasiGoreng + hargaMieGoreng + hargaCapcay;

const diskonPersen = 10;
const potonganDiskon = (diskonPersen / 100) * hargaTotal;

const hargaSetelahDiskon = hargaTotal - potonganDiskon;

const pembayaran = 100000;
const kembalian = pembayaran - hargaSetelahDiskon;

console.log(`Harga Nasi Goreng = Rp. ${hargaNasiGoreng}`);
console.log(`Harga Mie Goreng = Rp. ${hargaMieGoreng}`);
console.log(`Harga Capcay = Rp. ${hargaCapcay}`);
console.log(`Harga Total = Rp. ${hargaTotal}`);
console.log(`Diskon = ${diskonPersen}%`);
console.log(`Harga Setelah Diskon = Rp. ${hargaSetelahDiskon}`);
console.log(`Pembayaran = Rp. ${pembayaran}`);
console.log(`Kembalian = Rp. ${kembalian}`);