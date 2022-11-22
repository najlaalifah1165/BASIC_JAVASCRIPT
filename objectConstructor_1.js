// 32.1
/*
function kopiMix(gula, kopi, krim) {
this.gula = gula;
this.kopi = kopi;
this.krim = krim;
}
var kopiSaya = new kopiMix('banyak','banyak','sedikit')
var kopiKamu = new kopiMix('sedikit','sedikit','sedikit')

console.log('kopi saya Gula nya : '+ kopiSaya.gula)
console.log('kopi kamu Gula nya : '+ kopiKamu.gula)
*/

// 33.1
/*
simba = { category: "lion", gender: "male"}

console.log(simba.category)
*/

// 34.1
/*
function person(name, age, favColor) {
    this.name = name;
    this.age = age;
    this.favColor = favColor;
    this.change = function (name, age, favColor) {
        this.name = name;
        this.age = age;
        this.favColor = favColor;
    }
}

var p = new person("Jaaa", 17, "blue");
p.change("Najla ", 18, " black")

console.log('name = '+p.name+'\nage = '+p.age+'\nfavColor ='+p.favColor)
*/

/*
function person(name, age, favColor) {
    this.name = name;
    this.age = age;
    this.favColor = favColor;
    this.changeName = function (name) {
        this.name = name;
    }
    this.changeAge = function (age) {
        this.age = age;
    }
    this.changefavColor = function (favColor) {
        this.favColor = favColor;
    }
}

var p = new person("Jaaa", 17, "blue");
p.changeName("Najla");
p.changeAge(18);
p.changefavColor("black");

console.log(changeName)
console.log(changeAge)
console.log(changefavColor)
*/

// bilangan
/*
function bilangan (x, y){
    this.x = x,
    this.y = y,
    this.jumlah = function jumlah(x,y){
        c = x + y;
        return c;
    }
}
var b = new bilangan(3,1)
var a = b.jumlah(b.x,b.y)

console.log(a)
*/

