
function hitungLuasPersegi(sisi) {
    return sisi * sisi;
}

function hitungLuasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
}

function hitungLuasLingkaran(jariJari) {
    const pi = 22 / 7; 
    return (pi * jariJari * jariJari).toFixed(2);
}

function hitungLuasSegitiga(alas, tinggi) {
    return 0.5 * alas * tinggi;
}


function hitungKelilingPersegi(sisi) {
    return 4 * sisi;
}

function hitungKelilingPersegiPanjang(panjang, lebar) {
    return 2 * (panjang + lebar);
}

function hitungKelilingLingkaran(jariJari) {
    const pi = 22 / 7;
    return (2 * pi * jariJari).toFixed(2);
}

function hitungKelilingSegitigaSamaSisi(sisi) {
    return 3 * sisi;
}



const persegi_sisi = 8;

const persegiPanjang_panjang = 9;
const persegiPanjang_lebar = 3;

const lingkaran_jariJari = 6;

const segitiga_alas = 6;
const segitiga_tinggi = 4;
const segitiga_sisi = 6;



console.log("===== MENGHITUNG LUAS DAN KELILING BANGUN DATAR =====");
console.log(); 

console.log(">> Luas Bangun Datar <<");
console.log(`Luas Persegi Dengan Sisi ${persegi_sisi} Adalah ${hitungLuasPersegi(persegi_sisi)}`);
console.log(`Luas Persegi Panjang Dengan Panjang ${persegiPanjang_panjang} Dan Lebar ${persegiPanjang_lebar} Adalah ${hitungLuasPersegiPanjang(persegiPanjang_panjang, persegiPanjang_lebar)}`);
console.log(`Luas Lingkaran Dengan Jari - jari ${lingkaran_jariJari} Adalah ${hitungLuasLingkaran(lingkaran_jariJari)}`);
console.log(`Luas Segitiga Dengan Alas ${segitiga_alas} Dan Tinggi ${segitiga_tinggi} Adalah ${hitungLuasSegitiga(segitiga_alas, segitiga_tinggi)}`);
console.log(); 

console.log(">> Keliling Bangun Datar <<");
console.log(`Keliling Persegi Dengan Sisi ${persegi_sisi} Adalah ${hitungKelilingPersegi(persegi_sisi)}`);
console.log(`Keliling Persegi Panjang Dengan Panjang ${persegiPanjang_panjang} Dan Lebar ${persegiPanjang_lebar} Adalah ${hitungKelilingPersegiPanjang(persegiPanjang_panjang, persegiPanjang_lebar)}`);
console.log(`Keliling Lingkaran Dengan Jari - jari ${lingkaran_jariJari} Adalah ${hitungKelilingLingkaran(lingkaran_jariJari)}`);
console.log(`Keliling Segitiga Dengan Sisi ${segitiga_sisi} Adalah ${hitungKelilingSegitigaSamaSisi(segitiga_sisi)}`);