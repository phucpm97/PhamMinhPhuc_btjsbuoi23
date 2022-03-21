// Tính Lương
var btnSubmitSl = document.getElementById("submit__salary");
var luong1ngay = 100000;
btnSubmitSl.onclick = function(e) {
    e.preventDefault();
    var ngaylam = document.getElementById("dayWork").value;
    var tongLuong = ngaylam * luong1ngay;
    document.getElementById("result__salary").innerHTML = tongLuong;
}

// Tính Giá Trị Trung Bình
var btnSubmitTbc = document.getElementById("submit__tbc");
btnSubmitTbc.onclick = function(e) {
    e.preventDefault();
    var number__1 = document.getElementById("number1").value;
    var number__2 = document.getElementById("number2").value;
    var number__3 = document.getElementById("number3").value;
    var number__4 = document.getElementById("number4").value;
    var number__5 = document.getElementById("number5").value;
    number__1 = parseFloat(number__1);
    number__2 = parseFloat(number__2);
    number__3 = parseFloat(number__3);
    number__4 = parseFloat(number__4);
    number__5 = parseFloat(number__5);
    var giaTriTB = (number__1 + number__2 + number__3 + number__4 + number__5) / 5;
    document.getElementById("result__tbc").innerHTML = giaTriTB;
}

// Quy Đổi Tiền
var btnSubmitTf = document.getElementById("submit__transfer");
var usdCost = 23500;
btnSubmitTf.onclick = function(e) {
        e.preventDefault();
        var SoUsd = document.getElementById("crTransfer").value;
        var quyDoi = usdCost * SoUsd;
        document.getElementById("result__transfer").innerHTML = quyDoi;
    }
    // Tính Diện Tích, Chu Vi HCN
var btnSubmitRec = document.getElementById("submit__rectangular");
btnSubmitRec.onclick = function(e) {
        e.preventDefault();
        var length = document.getElementById("rectangularLength").value;
        var width = document.getElementById("rectangularWidth").value;
        length = parseFloat(length);
        width = parseFloat(width);
        var dientich = length * width;
        var chuvi = (length + width) / 2;
        document.getElementById("result__rectangular__acreage").innerHTML = dientich;
        document.getElementById("result__rectangular__perimeter").innerHTML = chuvi;
    }
    // Tính Tổng 2 Ký Số
var btnSubmitKs = document.getElementById("submit__kyso");
btnSubmitKs.onclick = function(e) {
    e.preventDefault();
    var soBatKy = document.getElementById("kysoI").value;
    var hangDonVi = soBatKy % 10;
    var hangChuc = soBatKy / 10;
    var tong = parseInt(hangChuc) + hangDonVi;
    console.log(tong);
    document.getElementById("result__kyso").innerHTML = tong;
}