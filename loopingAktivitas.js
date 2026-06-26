
for (let i = 1; i <= 20; i++) {
    let aktivitas = "";


    if (i % 3 === 0 && i % 2 !== 0) {
        
        aktivitas = "Mengikuti Uji Kompetensi";
    } else if (i % 3 === 0 && i % 2 === 0) {
        
        aktivitas = "Mendapat Sertifikat";
    } else if (i % 2 !== 0) {
        
        aktivitas = "Apel Pagi";
    } else {
        
        aktivitas = "Mengikuti Pelatihan";
    }
    
    console.log(`${i} - ${aktivitas}`);
}