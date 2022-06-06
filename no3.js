seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    if(typeof(nilaiAwal) == 'number' && typeof(nilaiAkhir) == 'number' && dataArray.every((x) => (typeof x == 'number'))) {
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
        } else if (nilaiAwal > nilaiAkhir && dataArray.length > 5) {
            return arrayBaru = "Nilai akhir harus lebih besar dari nilai awal";
        } else if (nilaiAwal < nilaiAkhir && dataArray.length < 5) {
            return arrayBaru = "Jumlah angka dalam dataArray harus lebih dari 5";
        }
    } else {
        return "error, input harus angka";
    }
}
console.log(seleksiNilai(5,20,[2,25,4,14,17,30,8])); // [ 8, 14, 17 ]
console.log(seleksiNilai(15,3,[2,25,4,14,17,30,8])); // Nilai akhir harus lebih besar dari nilai awal
console.log(seleksiNilai(4,17,[2,25,4])); // Jumlah angka dalam dataArray harus lebih dari 5
console.log(seleksiNilai(5,17,[2,25,4,1,30,18])); // data tidak ditemukan
console.log(seleksiNilai(5,"17",[14,10,15,"1","16","18"])); // error, input harus angka
