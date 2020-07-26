//PENILAIAN KETERAMPILAN DASAR-DASAR JAVASCRIPT

//NOMOR 1
let hitung = (p,l) => {
    let harga_tanah = p * l * 1500000
    let ppn = harga_tanah * 15/100
    return harga_tanah + ppn
}

console.log("------------------SOAL NOMOR 1-------------------")
console.log("Nominal yang harus dibayarkan      : Rp " + hitung(20.5,30))

//NOMOR 2
let barang = [
    { nama: "Beras", harga: 10000, jumlah: 5 },
    { nama: "Gula", harga: 14000, jumlah: 5 },
    { nama: "Telur", harga: 20000, jumlah: 2 },
    { nama: "Minyak Goreng", harga: 9000, jumlah: 10 }
]

let jumlah = 0

barang.map(
    (bar,index) => {
        jumlah += (bar.harga*bar.jumlah)
    }
)

console.log("------------------SOAL NOMOR 2-------------------")
console.log("Total Belanjaan                    : Rp " + jumlah)

//NOMOR 3
hitung_bmi = (tinggi,berat) => {
    let bmi = berat/tinggi*tinggi

    if(bmi < 18.5){
        return "Kekurangan berat badan"
    }else if(bmi <= 24.9){
        return "Normal (ideal)"
    }else if(bmi <= 29.9){
        return "Kelebihan berat badan"
    }else{
        return "Kegemukan (Obesitas)"
    }
}
console.log("------------------SOAL NOMOR 3-------------------")
console.log("Status BMI                         : " + hitung_bmi(1.7,90))


//NOMOR 4
deret_geometri = (a,r,n) => {
    for(let index = 2; index<=n; index++){
        a += (a*r)
    }

    return a
}

console.log("------------------SOAL NOMOR 4-------------------")
console.log("Jumlah 10 suku pertama deret tersebut : " + deret_geometri(4,3,10))


//NOMOR 5
class lingkaran{
    constructor (r){
        this.jarijari = r
    }

    luas(){
        return 3.14 * this.jarijari **2
    }

    keliling() {
        return 3.14 * this.jarijari *2
    }
}

class bola extends lingkaran{
    volume(){
        return 4/3 * this.jarijari * super.luas()
    }

    luasPermukaan() {
        return 4 * super.luas()
    }
}

class kerucut extends lingkaran{
    constructor(r,t){
        super(r)
        this.tinggi = t
    }

    volume() {
        return 1/3 * super.luas() * this.tinggi
    }

    luasSelimut() {
        let s = Math.sqrt(this.jarijari **2 + this.tinggi **2)
        return 3.14 * this.jarijari * s
    }

    luasPermukaan () {
        return super.luas() * this.luasSelimut()
    }
}

class tabung extends lingkaran{
    constructor (r,t){
        super (r)
    this.tinggi = t
    }

    volume () {
        return super.luas() * this.tinggi
    }
    
    luasSelimut () {
        return super.keliling() * this.tinggi
    }
    
    luasPermukaan() {
        return  super.luas() + this.luasSelimut()
    }
}

console.log("------------------SOAL NOMOR 5-------------------")
let bal = new bola(15)
console.log("VOLUME BOLA                      : " + bal.volume())
console.log("LUAS PERMUKAAN BOLA              : " + bal.luasPermukaan())


let cone = new kerucut(10,40)
console.log("VOLUME CONE                      : " + cone.volume())
console.log("LUAS SELIMUT CONE                : " + cone.luasSelimut())
console.log("LUAS PERMUKAAN CONE              : " + cone.luasPermukaan())


let gelas = new tabung(7.5,50)
console.log("VOLUME GELAS                     : " + gelas.volume())
console.log("LUAS SELIMUT GELAS               : " + gelas.luasSelimut())
console.log("LUAS PERMUKAAN GELAS             : " + gelas.luasPermukaan())
