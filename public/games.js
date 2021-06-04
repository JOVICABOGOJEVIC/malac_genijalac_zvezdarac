var img = document.querySelector('img');
var btn1 = document.querySelector('.btn1');
var btn2 = document.querySelector('.btn2');
var btn3 = document.querySelector('.btn3');
var btn4 = document.querySelector('.btn4');
var btn5 = document.querySelector('.btn5');
var btnStart1 = document.querySelector('.btnStart1');
var igra = document.querySelector('.igra');
var first = document.querySelector('.first');
var second = document.querySelector('.second');
var input1 = document.querySelector('.input1');
var input2 = document.querySelector('.input2');
var input3 = document.querySelector('.input3');
var input4 = document.querySelector('.input4');
var input5 = document.querySelector('.input5');
var comment = document.querySelector('.comment');
var result = document.querySelector('.result');
var btn6 = document.querySelector('.submit');
var rezultat = document.querySelector('#rezultat');
var naslov = document.querySelector('.naslov');
var sigma = document.querySelector('.sigma');
var ocena = document.querySelector('#ocena')
var zbir = document.querySelector("#zbir")

var sum = [];

//TEST1
function test1() {
    point20 = input1.value.toUpperCase();
    var str = point20;
    var arr = str.match(/\S+/g);
    sum.push(arr.length);


    //1 
    if (point20.includes("KONJ") || point20.includes("КОЊ")) {
        var count1a = 20;

    } else {
        var count1a = 0;
    }
    //2
    if (point20.includes("MACKA") || point20.includes("МАЧКА") || point20.includes("MAČKA")) {
        var count2a = 20;
    } else {
        var count2a = 0;
    }
    //3
    if (point20.includes("ZEBRA") || point20.includes("ЗЕБРА")) {
        var count3a = 20;
    } else {
        var count3a = 0;
    }
    //4
    if (point20.includes("KRAVA") || point20.includes("КРАВА")) {
        var count4a = 20;
    } else {
        var count4a = 0;
    }
    //5
    if (point20.includes("BIZON") || point20.includes("БИЗОН")) {
        var count5a = 20;
    } else {
        var count5a = 0;
    }
    //6
    if (point20.includes("MAJMUN") || point20.includes("МАЈМУН")) {
        var count6a = 20;
    } else {
        var count6a = 0;
    }
    //7
    if (point20.includes("DELFIN") || point20.includes("ДЕЛФИН")) {
        var count7a = 20;
    } else {
        var count7a = 0;
    }
    //8
    if (point20.includes("JEZ") || point20.includes("JEŽ") || point20.includes("ЈЕЖ")) {
        var count8a = 20;
    } else {
        var count8a = 0;
    }
    //9
    if (point20.includes("NOSOROG") || point20.includes("НОСОРОГ")) {
        var count9a = 20;
    } else {
        var count9a = 0;
    }
    //10
    if (point20.includes("RAKUN") || point20.includes("РАКУН")) {
        var count10a = 20;
    } else {
        var count10a = 0;
    }
    //11
    if (point20.includes("ANTILOPA") || point20.includes("АНТИЛОПА")) {
        var count11a = 20;
    } else {
        var count11a = 0;
    }
    //12
    if (point20.includes("SLON") || point20.includes("СЛОН")) {
        var count12a = 20;
    } else {
        var count12a = 0;
    }
    var pokusaj = sum.reduce(function (acc, val) { return acc + val; }, 0);

    zbir.innerHTML = pokusaj;

    var saldo1 = count1a + count2a + count3a + count4a + count5a + count6a + count7a +
        count8a + count9a + count10a + count11a + count12a;

    saldo.push(saldo1)
}
//TEST2
function test2() {
    point15 = input2.value.toUpperCase();
    var str = point15;
    var arr = str.match(/\S+/g);
    sum.push(arr.length);
    //1 
    if (point15.includes("KONJ") || point15.includes("КОЊ")) {
        var count1b = 15;
    } else {
        var count1b = 0;
    }
    //2
    if (point15.includes("MACKA") || point15.includes("МАЧКА") || point15.includes("MAČKA")) {
        var count2b = 15;
    } else {
        var count2b = 0;
    }
    //3
    if (point15.includes("ZEBRA") || point15.includes("ЗЕБРА")) {
        var count3b = 15;
    } else {
        var count3b = 0;
    }
    //4
    if (point15.includes("KRAVA") || point15.includes("КРАВА")) {
        var count4b = 15;
    } else {
        var count4b = 0;
    }
    //5
    if (point15.includes("BIZON") || point15.includes("БИЗОН")) {
        var count5b = 15;
    } else {
        var count5b = 0;
    }
    //6
    if (point15.includes("MAJMUN") || point15.includes("МАЈМУН")) {
        var count6b = 15;
    } else {
        var count6b = 0;
    }
    //7
    if (point15.includes("DELFIN") || point15.includes("ДЕЛФИН")) {
        var count7b = 15;
    } else {
        var count7b = 0;
    }
    //8
    if (point15.includes("JEZ") || point15.includes("JEŽ") || point15.includes("ЈЕЖ")) {
        var count8b = 15;
    } else {
        var count8b = 0;
    }
    //9
    if (point15.includes("NOSOROG") || point15.includes("НОСОРОГ")) {
        var count9b = 15;
    } else {
        var count9b = 0;
    }
    //10
    if (point15.includes("RAKUN") || point15.includes("РАКУН")) {
        var count10b = 15;
    } else {
        var count10b = 0;
    }
    //11
    if (point15.includes("ANTILOPA") || point15.includes("АНТИЛОПА")) {
        var count11b = 15;
    } else {
        var count11b = 0;
    }
    //12
    if (point15.includes("SLON") || point15.includes("СЛОН")) {
        var count12b = 15;
    } else {
        var count12b = 0;
    }
    var pokusaj = sum.reduce(function (acc, val) { return acc + val; }, 0);

    zbir.innerHTML = pokusaj;
    var saldo2 = count1b + count2b + count3b + count4b + count5b + count6b + count7b +
        count8b + count9b + count10b + count11b + count12b;
    saldo.push(saldo2)

}
//TEST3
function test3() {
    point10 = input3.value.toUpperCase();
    var str = point10;
    var arr = str.match(/\S+/g);
    sum.push(arr.length);
    //1 
    if (point10.includes("KONJ") || point10.includes("КОЊ")) {
        var count1c = 10;
    } else {
        var count1c = 0;
    }
    //2
    if (point10.includes("MACKA") || point10.includes("МАЧКА") || point10.includes("MAČKA")) {
        var count2c = 10;
    } else {
        var count2c = 0;
    }
    //3
    if (point10.includes("ZEBRA") || point10.includes("ЗЕБРА")) {
        var count3c = 10;
    } else {
        var count3c = 0;
    }
    //4
    if (point10.includes("KRAVA") || point10.includes("КРАВА")) {
        var count4c = 10;
    } else {
        var count4c = 0;
    }
    //5
    if (point10.includes("BIZON") || point10.includes("БИЗОН")) {
        var count5c = 10;
    } else {
        var count5c = 0;
    }
    //6
    if (point10.includes("MAJMUN") || point10.includes("МАЈМУН")) {
        var count6c = 10;
    } else {
        var count6c = 0;
    }
    //7
    if (point10.includes("DELFIN") || point10.includes("ДЕЛФИН")) {
        var count7c = 10;
    } else {
        var count7c = 0;
    }
    //8
    if (point10.includes("JEZ") || point10.includes("JEŽ") || point10.includes("ЈЕЖ")) {
        var count8c = 10;
    } else {
        var count8c = 0;
    }
    //9
    if (point10.includes("NOSOROG") || point10.includes("НОСОРОГ")) {
        var count9c = 10;
    } else {
        var count9c = 0;
    }
    //10
    if (point10.includes("RAKUN") || point10.includes("РАКУН")) {
        var count10c = 10;
    } else {
        var count10c = 0;
    }
    //11
    if (point10.includes("ANTILOPA") || point10.includes("АНТИЛОПА")) {
        var count11c = 10;
    } else {
        var count11c = 0;
    }
    //12
    if (point10.includes("SLON") || point10.includes("СЛОН")) {
        var count12c = 10;
    } else {
        var count12c = 0;
    }
    var pokusaj = sum.reduce(function (acc, val) { return acc + val; }, 0);

    zbir.innerHTML = pokusaj;
    var saldo3 = count1c + count2c + count3c + count4c + count5c + count6c + count7c +
        count8c + count9c + count10c + count11c + count12c;
    saldo.push(saldo3)
}
//TEST4
function test4() {
    point5 = input4.value.toUpperCase();
    var str = point5;
    var arr = str.match(/\S+/g);
    sum.push(arr.length);
    //1 
    if (point5.includes("KONJ") || point5.includes("КОЊ")) {
        var count1d = 5;
    } else {
        var count1d = 0;
    }
    //2
    if (point5.includes("MACKA") || point5.includes("МАЧКА") || point5.includes("MAČKA")) {
        var count2d = 5;
    } else {
        var count2d = 0;
    }
    //3
    if (point5.includes("ZEBRA") || point5.includes("ЗЕБРА")) {
        var count3d = 5;
    } else {
        var count3d = 0;
    }
    //4
    if (point5.includes("KRAVA") || point5.includes("КРАВА")) {
        var count4d = 5;
    } else {
        var count4d = 0;
    }
    //5
    if (point5.includes("BIZON") || point5.includes("БИЗОН")) {
        var count5d = 5;
    } else {
        var count5d = 0;
    }
    //6
    if (point5.includes("MAJMUN") || point5.includes("МАЈМУН")) {
        var count6d = 5;
    } else {
        var count6d = 0;
    }
    //7
    if (point5.includes("DELFIN") || point5.includes("ДЕЛФИН")) {
        var count7d = 5;
    } else {
        var count7d = 0;
    }
    //8
    if (point5.includes("JEZ") || point5.includes("JEŽ") || point5.includes("ЈЕЖ")) {
        var count8d = 5;
    } else {
        var count8d = 0;
    }
    //9
    if (point5.includes("NOSOROG") || point5.includes("НОСОРОГ")) {
        var count9d = 5;
    } else {
        var count9d = 0;
    }
    //10
    if (point5.includes("RAKUN") || point5.includes("РАКУН")) {
        var count10d = 5;
    } else {
        var count10d = 0;
    }
    //11
    if (point5.includes("ANTILOPA") || point5.includes("АНТИЛОПА")) {
        var count11d = 5;
    } else {
        var count11d = 0;
    }
    //12
    if (point5.includes("SLON") || point5.includes("СЛОН")) {
        var count12d = 5;
    } else {
        var count12d = 0;
    }
    var pokusaj = sum.reduce(function (acc, val) { return acc + val; }, 0);

    zbir.innerHTML = pokusaj;
    var saldo4 = count1d + count2d + count3d + count4d + count5d + count6d + count7d +
        count8d + count9d + count10d + count11d + count12d;
    saldo.push(saldo4)

}
//TEST5
function test5() {
    point2 = input5.value.toUpperCase();
    var str = point2;
    var arr = str.match(/\S+/g);
    sum.push(arr.length);
    var niz = sum.reduce(function (acc, val) { return acc + val; }, 0)
    var pokusaj = sum.reduce(function (acc, val) { return acc + val; }, 0);
    console.log(niz);
    if (niz > 12) {
        zbir.innerHTML = "Унет је већи број појмова од 12";
        console.log("Radi");
    } else {
        zbir.innerHTML = pokusaj
    }

}
var saldo = [];
if (saldo.length === 3) {
    btn1.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
    btn2.disabled = true;
}


btn1.addEventListener('click', start1)
btn1.addEventListener('click', disable)
btn2.addEventListener('click', level1)
btn2.addEventListener('click', testA)
btn3.addEventListener('click', level2)
btn3.addEventListener('click', testB)
btn4.addEventListener('click', level3)
btn4.addEventListener('click', testC)
btn5.addEventListener('click', level4)
btn5.addEventListener('click', testD)
btn6.addEventListener('click', testE)

function testA(){
    if(input1.value.length == 0){
        console.log("Prazan input");
    }else{
        test1()
    }
};
function testB(){
    if(input2.value.length == 0){
        console.log("Prazan input");
    }else{
        test2()
    }
};
function testC(){
    if(input3.value.length == 0){
        console.log("Prazan input");
    }else{
        test3()
    }
};
function testD(){
    if(input4.value.length == 0){
        console.log("Prazan input");
    }else{
        test4()
    }
};
function testE(){
    if(input5.value.length == 0){
        test6();
    }else{
        test5();
        test6();
    }
};
function test6(){
    point2 = input5.value.toUpperCase();

    comment.style.display = "none";
    naslov.style.display = "none";
    result.style.display = "block";
    sigma.style.display = "block";
    //1 
    if (point2.includes("KONJ") || point2.includes("КОЊ")) {
        var count1e = 2;
    } else {
        var count1e = 0;
    }
    //2
    if (point2.includes("MACKA") || point2.includes("МАЧКА") || point2.includes("MAČKA")) {
        var count2e = 2;
    } else {
        var count2e = 0;
    }
    //3
    if (point2.includes("ZEBRA") || point2.includes("ЗЕБРА")) {
        var count3e = 2;
    } else {
        var count3e = 0;
    }
    //4
    if (point2.includes("KRAVA") || point2.includes("КРАВА")) {
        var count4e = 2;
    } else {
        var count4e = 0;
    }
    //5
    if (point2.includes("BIZON") || point2.includes("БИЗОН")) {
        var count5e = 2;
    } else {
        var count5e = 0;
    }
    //6
    if (point2.includes("MAJMUN") || point2.includes("МАЈМУН")) {
        var count6e = 2;
    } else {
        var count6e = 0;
    }
    //7
    if (point2.includes("DELFIN") || point2.includes("ДЕЛФИН")) {
        var count7e = 2;
    } else {
        var count7e = 0;
    }
    //8
    if (point2.includes("JEZ") || point2.includes("JEŽ") || point2.includes("ЈЕЖ")) {
        var count8e = 2;
    } else {
        var count8e = 0;
    }
    //9
    if (point2.includes("NOSOROG") || point2.includes("НОСОРОГ")) {
        var count9e = 2;
    } else {
        var count9e = 0;
    }
    //10
    if (point2.includes("RAKUN") || point2.includes("РАКУН")) {
        var count10e = 2;
    } else {
        var count10e = 0;
    }
    //11
    if (point2.includes("ANTILOPA") || point2.includes("АНТИЛОПА")) {
        var count11e = 2;
    } else {
        var count11e = 0;
    }
    //12
    if (point2.includes("SLON") || point2.includes("СЛОН")) {
        var count12e = 2;
    } else {
        var count12e = 0;
    }

    var saldo5 = count1e + count2e + count3e + count4e + count5e + count6e + count7e +
        count8e + count9e + count10e + count11e + count12e;
    saldo.push(saldo5)
    var ukupno = saldo.reduce(function (acc, val) { return acc + val; }, 0)
    
        rezultat.innerHTML = ukupno;
}

function disable() {
    btn1.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;
    input1.focus();
}
var counter = 1;

function start1() {
    setInterval(function() {
        counter++;
        (counter === 13) ? counter = 1 : counter = counter;

        img.setAttribute('src', 'images/bg' + counter + '.jpg');
    }, 1000)
}


function level1() {
    img.style.filter = "blur(18px)"
    btn3.disabled = false;
    btn2.disabled = true;
    input2.focus();

}
function level2() {
    img.style.filter = "blur(14px)"
    btn4.disabled = false;
    btn3.disabled = true;
    input3.focus();
}
function level3() {
    img.style.filter = "blur(10px)"
    btn4.disabled = true;
    btn5.disabled = false;
    input4.focus();
}
function level4() {
    input5.focus();
    img.style.filter = "blur(5px)"
    btn6.disabled = false;
    btn5.disabled = true;

}
