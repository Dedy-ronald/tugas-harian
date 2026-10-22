const barang = [
    {nama:"Buku", harga:5000, jumlah:2},
    {nama:"Pensil", harga:2500, jumlah:2},
    {nama:"Penghapus", harga:3000, jumlah:1},
];

let totalBayar = 0;

for (let i = 0;i < barang.length;i++) {
    totalBayar += barang[i].harga*barang[i].jumlah;
}

console.log("Total Bayar: Rp"+ totalBayar)