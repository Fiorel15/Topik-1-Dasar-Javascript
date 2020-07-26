//VARIABEL DAN KONSTANTA
console.log("-------------VARIABLE DAN KONSTANTA--------------")
let nama = "Sukirman"
let umur = 20
let status_menikah = false
const kode = 123
/* Di javascript variabel tidak perlu didefinisikan 
   dengan tipe data spesifik
   Nilai konstanta tidak dapat diubah, nilai konstanta 
   ialah tetap
*/

//OBJEK
console.log("-------------------------------------------------")
console.log("-------------------OBJECT------------------------")
let nama_siswa1 = "Fiorel Al Zahra"
let kelas       = "XIR1"

//KONSEP DARI OBJEK
console.log("-------------------------------------------------")
console.log("KONSEP OBJECT")
let siswa1  = {
    nama    : "Fiorel Al Zahra",
    kelas   : "XIR1",
    jurusan : "RPL"
}

//MENAMPILKAN VALUE DARI OBJEK
console.log("-------------------------------------------------")
console.log("MENAMPILKAN VALUE OBJECT")
console.log("Nama Siswa 1 sebelum diubah    : "+ siswa1.nama)

//MENGUBAH VALUE DARI OBJEK
console.log("-------------------------------------------------")
console.log("MENGUBAH VALUE")
siswa1.nama = "Doraemon"
console.log("Nama Siswa 1 setelah dirubah   : "+ siswa1.nama)

//ARRAY
console.log("-------------------------------------------------")
console.log("---------------------ARRAY-----------------------")
    /* array string */
let kejuruan = ["Rekayasa Perangkat Lunak","Teknik Komputer dan Jaringan"]
    /* array numeric */
let tingkatan_kelas = [10,11,12]
    /* array object */
let siswa = [
    { nama : "Pan Pan", kelas: "XI"},
    { nama : "Grizzly", kelas: "XI"},
    { nama : "Ice Bear", kelas: "XII"}
]

//JUMLAH DATA PADA ARRAY
console.log("-------------------------------------------------")
console.log("JUMLAH DATA PADA ARRAY")
console.log("Jumlah elemen array kejuruan           = " + kejuruan.length)
console.log("Jumlah elemen array tingkatan_kelas    = " + tingkatan_kelas.length)
console.log("Jumlah elemen array siswa              = " + siswa.length)

//MENAMBAHKAN DATA PADA ARRAY STRING
console.log("-------------------------------------------------")
console.log("MENAMBAHKAN DATA ARRAY STRING")
console.log("Isi array data kejuruan sebelum ditambah")
console.log(kejuruan)
console.log("Jumlah data = " + kejuruan.length)
kejuruan.push("Pariwisata")
console.log("Isi array data kejuruan setelah ditambah")
console.log(kejuruan)
console.log("Jumlah data saat ini = " + kejuruan.length)

//MENAMBAHKAN DATA PADA ARRAY OBJECT
console.log("-------------------------------------------------")
console.log("MENAMBAHKAN DATA ARRAY OBJECT")
console.log("Isi array siswa sebelum ditambah")
console.log(siswa)
siswa.push(
    {nama : "Patric", kelas: "X"}
)
console.log("Isi array siswa setelah ditambah")
console.log(siswa)

//MENGHAPUS DATA ARRAY 
console.log("-------------------------------------------------")
console.log("MENGHAPUS DATA ARRAY ")
let barang = ["Molto","Sunlight","Biore","Dettol"]
console.log("Isi array barang sebelum ditambah")
console.log(barang)
console.log("Jumlah data = " + barang.length)
barang.splice(3,1) /*3 adalah index yang ingin dihapus,sedangkan
                     1 adalah banyaknya nilai yang ingin dihapus*/
console.log("Isi array data barang setelah dihapus")
console.log(barang)
console.log("Jumlah data barang saat ini = " + barang.length)

//MENAMPILKAN DATA PADA ARRAY OBEJCT
console.log("-------------------------------------------------")
console.log("MENAMPILKAN DATA ARRAY OBEJCT")
siswa.map(
    (yay,index)=> {
        console.log(yay.nama + " " + yay.kelas)
    } //kata yay dapat diubah dengan kata apa saja
)

//OPERATOR
console.log("-------------------------------------------------")
console.log("-------------------OPERATOR----------------------")
let a = 2, b = 2, c = 6, d ="12"

console.log("-------------------------------------------------")
console.log("OPERATOR ARITMATIKA")
console.log("a + b = " + (a+b))
console.log("b + d = " + (b+d))
console.log("c / a = " + (c/a))
    /* bila sama sama berjenis numerik dapat dilakukan operasi, 
    bila salah satu data berjenis string akan terjadi operasi penggabungan*/

console.log("-------------------------------------------------")
console.log("OPERATOR PERBANDINGAN")
console.log("c == a -> " + (c == a))
console.log("a != b -> " + (a == b))

//PERCABANGAN
console.log("-------------------------------------------------")
console.log("-----------------PERCABANGAN---------------------")

console.log("-------------------------------------------------")
console.log("Percabangan IF.. Else")
let usia = 17
if(usia >= 17 ){
    console.log("Kamu sudah bisa dapat KTP dan SIM")
}else{
    console.log("Kamu belum bisa dapat KTP dan SIM")
}

console.log("-------------------------------------------------")
console.log("Percabangan If.. Else...If")
let nilai = 82
if(nilai > 82) {
    console.log("Excellent")
}else if(nilai <= 82 && nilai > 75){
    console.log("Good")
}else{
    console.log("Not bad")
}

//PERULANGAN
console.log("-------------------------------------------------")
console.log("-----------------PERULANGAN---------------------")
console.log("-------------------------------------------------")
console.log("Perulangan FOR")
for (let index = 2; index<= 4; index++){
    console.log("Ini contoh perulangan for ke-  : "+ index)
}

console.log("-------------------------------------------------")
console.log("Perulangan FOR/IN")
let data_orang = {
    nama : "Siti Zubaidah",
    jenis_kelamin : "Perempuan",
    alamat  :"Bektiharjo"
}
for (key in data_orang) {
    console.log(key);
}

console.log("-------------------------------------------------")
console.log("Perulangan FOR/OF")
let genre = ["Mistery","Teenfiction","Romance"]
for (gr of genre){
    console.log(gr)
}

console.log("-------------------------------------------------")
console.log("Perulangan WHILE")
let laptop = ["ASUS","Lenovo","HP"]
let i = 0
while (laptop[i]){
    console.log(laptop[i])
    i++
}

console.log("-------------------------------------------------")
console.log("Perulangan DO WHILE")
let e = 0
do{
    console.log(laptop[e])
    e++
}while(laptop[e])

//FUNCTION
console.log("-------------------------------------------------")
console.log("--------------------FUNCTION---------------------")
luasLingkarang = (r) => {
    return 3.14 * (r ** 2)
}
console.log("Luas Lingkaran dengan r = 10 adalah " + luasLingkarang(10));

//CLASS
console.log("-------------------------------------------------")
console.log("----------------------CLASS----------------------")
class persegiPanjang{
    constructor (p, l){
        this.panjang = p
        this.lebar = l
    }

    luas = () => {
        return this.panjang * this.lebar
    }

    keliling = () => {
        return 2 * (this.panjang + this.lebar) 
    }
}
let tanah = new persegiPanjang (20,30)
console.log("Luas Tanah                         : " + tanah.luas())
console.log("Keliling Tanah                     : " + tanah.keliling())

//PEWARISAN
console.log("-------------------------------------------------")
console.log("--------------------PEWARISAN--------------------")
class balok extends persegiPanjang{
    constructor (p,l,t){
        super (p,l)
        this.tinggi = t
    }

    luas = () => {
        return (2* this.panjang * this.lebar) + (2 * this.panjang * this.tinggi)
        + (2 * this.tinggi * this.lebar)
    }

    volume = () => {
        return (this.panjang * this.lebar * this.tinggi)
    }
}

let box = new balok (10,30,20)
console.log("Luas Permukaan Box                 : " + box.luas())
console.log("Volume Box                         : " + box.volume())


//JSON
console.log("-------------------------------------------------")
console.log("-----------------------JSON-----------------------")
console.log(JSON.stringify(siswa));
