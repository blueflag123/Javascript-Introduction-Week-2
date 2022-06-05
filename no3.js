seleksiNilai = (nilaiAwal = Number, nilaiAkhir = Number, dataArray = []) => {
    let arrayBaru = [];
    if (nilaiAwal < nilaiAkhir && dataArray.length > 5) {
        for(let i = 0; i < dataArray.length;i++) {
            if(dataArray[i] > nilaiAwal && dataArray[i] < nilaiAkhir) {
                arrayBaru.unshift(dataArray[i]);
                arrayBaru.sort(function(a,b) {return `${a-b}`;}); 
            } 
        }
        if (arrayBaru.length == 0) {
            return arrayBaru = "data tidak ditemukan";
        } else {
            return arrayBaru;
        } 
    } else if (nilaiAwal < nilaiAkhir && dataArray.length < 5) {
        return arrayBaru = "Nilai akhir harus lebih besar dari nilai awal";
    } else if (nilaiAwal > nilaiAkhir && dataArray.length > 5) {
        return arrayBaru = "Jumlah angka dalam dataArray harus lebih dari 5";
    } 
} 
console.log(seleksiNilai(5,20,[2,25,4,14,17,30,8]));
console.log(seleksiNilai(15,3,[2,25,4,14,17,30,8]));
console.log(seleksiNilai(4,17,[2,25,4]));
console.log(seleksiNilai(5,17,[2,25,4,1,30,18]));
