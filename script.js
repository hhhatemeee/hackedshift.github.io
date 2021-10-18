// 'use strict'
let str1;
function readFile(input) {
    let file = input.files[0];

    let reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function () {
        str1 = reader.result;
    };

    reader.onerror = function () {
        console.log(reader.error);
    };
}
let arrtest = [];
function hackKey(str) {
    str = str1.toLowerCase();
    for (let i = 0; i < arrAlphabet.length; i++) {
        let b = RegExp(arrAlphabet[i], 'g');
        // console.log(b);
        if (str.match(b) == null) {
            letterCountArr.push(-1);
        }
        else {
            letterCountArr.push(str.match(b).length); // находим кол-во вхождений каждой буквы
        }
    }

    for (let i = 0; i < letterCountArr.length; i++) {
        countLetterMap.set(i, letterCountArr[i]); // создаём коллекцию ключ:значение (индекс буквы:кол-во вхождений)
    }
    const mapSort1 = new Map([...countLetterMap.entries()].sort((a, b) => b[1] - a[1])); // сортируем коллекцию по убыванию
    console.log(mapSort1);
    for (let entry of mapSort1.keys()) {
        arrtest.push(Math.abs(-popularRus + entry + 33));
    }
    return arrtest;


}

function dectyptCesar(str, key) {
    str = str1;
    key = document.getElementById('inp_3').value;
    let result = [];
    let arrStr = str.split('');
    for (let i = 0; i < str.length; i++) {
        (arrAlphabetUpper.filter(function search(item) {
            if (arrStr[i] == item) {
                if ((arrAlphabetUpper.indexOf(item) - key) <= arrAlphabetUpper.length) {
                    result.push(arrAlphabetUpper[arrAlphabetUpper.indexOf(item) - key + 33]);
                }
                if (!(arrAlphabetUpper.indexOf(item) - key) <= arrAlphabetUpper.length) {
                    result.push(arrAlphabetUpper[arrAlphabetUpper.indexOf(item) - key]);

                }

            }
        }));
        (arrAlphabet.filter(function search(item) {
            if (arrStr[i] == item) {
                if ((arrAlphabet.indexOf(item) - key) <= arrAlphabet.length) {
                    result.push(arrAlphabet[arrAlphabet.indexOf(item) - key + 33]);
                }
                if (!(arrAlphabet.indexOf(item) - key) <= arrAlphabet.length) {
                    // alert(arrAlphabet[arrAlphabet.indexOf(item) - key]);
                    result.push(arrAlphabet[arrAlphabet.indexOf(item) - key]);
                }
            }
        }));
        if (arrStr[i] == ' ') {
            result.push(' ');
        }
        else if (arrStr[i] == ',') {
            result.push(',');
        }
        else if (arrStr[i] == '.') {
            result.push('.');
        }
        else if (arrStr[i] == '?') {
            result.push('?');
        }
        else if (arrStr[i] == '-') {
            result.push('-');
        }
        else if (arrStr[i] == '!') {
            result.push('!');
        }
        else if (arrStr[i] == '\b') {
            result.push('\b');
        }
    }
    return result.join('');
}

function getResultDecrypt() {
    document.getElementById('ta_1').value = dectyptCesar();

}


let alphabet = 'а,б,в,г,д,е,ё,ж,з,и,й,к,л,м,н,о,п,р,с,т,у,ф,х,ц,ч,ш,щ,ъ,ы,ь,э,ю,я';
let alphabetUpper = 'А,Б,В,Г,Д,Е,Ё,Ж,З,И,Й,К,Л,М,Н,О,П,Р,С,Т,У,Ф,Х,Ц,Ч,Ш,Щ,Ъ,Ы,Ь,Э,Ю,Я';
let arrAlphabet = alphabet.split(',');
let arrAlphabetUpper = alphabetUpper.split(',');
let popularRus = arrAlphabet.indexOf('о');
let letterCountArr = [];
let b = new RegExp('g');// создание регулярного выражения для использования .match
let maxHackKey = 0;
let maxIdKey = 0;
let maxIdArr = [];
let countLetterMap = new Map();
let sortLetterMap = new Map();

function alerted() {
    arrtest = [];
    letterCountArr = [];
    countLetterMap.clear();
    sortLetterMap.clear();
    maxHackKey = 0;
    maxIdKey = 0;
    maxIdArr = [];
    document.getElementById('inp_2').value = hackKey();
    getResultDecrypt();
}


