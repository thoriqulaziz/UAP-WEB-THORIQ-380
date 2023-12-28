
let Barang = [
    { kode: '001', nama: 'Barang A', harga: 10000 },
    { kode: '002', nama: 'Barang B', harga: 20000 },
    { kode: '003', nama: 'Barang C', harga: 30000 }
];


function cari(kodeBarang) {
    let cari_barang = Barang.find(item => item.kode === kodeBarang);
    return cari_barang ? cari_barang.harga : 0;
}


function kirim() {
    //mengambil id pada tag input html
    let input_kode = document.getElementById("input_kode").value;
    let input_jumlah = document.getElementById("input_jumlah").value;

    //perhitungan total harga jumlah barang
    let harga_barang = cari(input_kode);
    let total_harga = parseInt(input_jumlah) * harga_barang;
    alert("Total Pembayaran : " + total_harga);

    //menampilkan prompt untuk input jumlah uang pembayaran
    let uang_bayar = prompt ("Masukkan Uang User :");
    if (uang_bayar === null) {
        alert("Input uang tidak valid.");
        return;
    }


    let kembalian = parseInt(uang_bayar) - total_harga;
    if (kembalian >= 0) {
        alert("Total Kembalian : " + kembalian);
    } else {
        alert("Uang yang di input kurang.");
    }
}
