function cong() {
    let a1 = document.getElementById('so1').value;
    let b2 = document.getElementById('so2').value;
    let a = parseFloat(a1);
    let b = parseFloat(b2)
    let c = a + b;
    document.getElementById('ketqua').innerHTML = 'Kết quả: ' + c;
}

function tru() {
    let a = document.getElementById('so1').value;
    let b = document.getElementById('so2').value;
    let c = a - b;
    document.getElementById('ketqua').innerHTML = 'Kết quả: ' + c;
}

function nhan() {
    let a = document.getElementById('so1').value;
    let b = document.getElementById('so2').value;
    let c = a * b;
    document.getElementById('ketqua').innerHTML = 'Kết quả: ' + c;
}

function chia() {
    let a = document.getElementById('so1').value;
    let b = document.getElementById('so2').value;
    let c = a / b;
    document.getElementById('ketqua').innerHTML = 'Kết quả: ' + c;
}


