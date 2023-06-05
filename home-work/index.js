// Bài tập 1

function diemCongDoiTuongSinhVien(doiTuong) {
    switch (doiTuong) {
        case "A":
            {
                return 2;
            }
        case "B":
            {
                return 1;
            }
        case "C":
            {
                return 0.5;
            }
        default: {
            return 0;
        }
    }
}

function diemCongKhuVuc(khuVuc) {
    switch (khuVuc) {
        case "1": {
            return 2.5;
        }
        case "2": {
            return 1.5;
        }
        case "3": {
            return 1
        }
        default: {
            return 0
        }
    }
}

document.getElementById('btnXetTuyen').onclick = function () {
    var diemMon1 = document.getElementById('txtDiemMon1').value * 1;
    var diemMon2 = document.getElementById('txtDiemMon2').value * 1;
    var diemMon3 = document.getElementById('txtDiemMon3').value * 1;
    var diemChuan = document.getElementById('txtDiemChuan').value;
    var theKetQuaXetTuyen = document.getElementById('theKetQuaXetTuyen');
    var doiTuong = document.getElementById('selectorDoiTuong').value;
    var khuVuc = document.getElementById('selectorKhuVuc').value;
    var diemDoiTuong = diemCongDoiTuongSinhVien(doiTuong);
    var diemKhuVuc = diemCongKhuVuc(khuVuc);
    var tongDiem = diemMon1 + diemMon2 + diemMon3 + diemDoiTuong + diemKhuVuc;
    if (diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0) {
        theKetQuaXetTuyen.innerHTML = `<p class="alert alert-success p-3">👉Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0</p>`

    } else if (tongDiem >= diemChuan) {
        theKetQuaXetTuyen.innerHTML = `<p class="alert alert-success p-3">👉Bạn đã đậu với tổng điểm là: ${tongDiem}</p>`
    } else {
        theKetQuaXetTuyen.innerHTML = `<p class="alert alert-success p-3">👉Bạn đã không đủ điểm chuẩn với tổng điểm là: ${tongDiem}</p>`
    }
    if (diemChuan > 30) {
        theKetQuaXetTuyen.innerHTML = `<p class="alert alert-success p-3">👉Bạn hãy nhập lại điểm chuẩn <=30.</p>`
    }
}

// Bài tập 2:

function giaTienTieuThu50KwDau() {
    var giaTienDien = 500;
    return giaTienDien;
}

function giaTienTieuThu50KwKe() {
    var giaTienDien = 650;
    return giaTienDien;
}

function giaTienTieuThu100KwKe() {
    var  giaTienDien = 850;
    return giaTienDien;
}

function giaTienTieuThu150KwKe() {
    var  giaTienDien = 1100;
    return giaTienDien;
}
function giaTienTieuThuConLai() {
    var giaTienDien = 1300;
    return giaTienDien;
}

document.getElementById('btnTinhTienDien').onclick=function(){
    var hoTen = document.getElementById('txtHoTen').value;
    var soKWTieuThu = document.getElementById('txtSoKw').value*1;
    var theThongBaoTienDien =  document.getElementById('ketQuaThongBaoTienDien');

    var tongTienDien =0;
    if(soKWTieuThu <=0){
        alert("Số KW tiêu thụ không hợp lệ. Vui lòng nhập lại!")
    }
    else if(soKWTieuThu>0 && soKWTieuThu<=50){
        tongTienDien = giaTienTieuThu50KwDau()*soKWTieuThu;
    }
    else if (soKWTieuThu >50 && soKWTieuThu <= 100){
        tongTienDien = giaTienTieuThu50KwDau()*50 + giaTienTieuThu50KwKe ()*(soKWTieuThu-50)
    }
    else if(soKWTieuThu >100 && soKWTieuThu <= 200){
        tongTienDien = giaTienTieuThu50KwDau()*50 + giaTienTieuThu50KwKe()*50 + giaTienTieuThu100KwKe()*(soKWTieuThu-100)
    }
    else if(soKWTieuThu >200 && soKWTieuThu <= 350){
        tongTienDien = giaTienTieuThu50KwDau()*50 + giaTienTieuThu50KwKe()*50 + giaTienTieuThu100KwKe()*100 + giaTienTieuThu150KwKe()*(soKWTieuThu-200)
    }
    else{
        tongTienDien = giaTienTieuThu50KwDau()*50 + giaTienTieuThu50KwKe()*50 + giaTienTieuThu100KwKe()*100 + giaTienTieuThu150KwKe()*150 + giaTienTieuThuConLai()*(soKWTieuThu-350)
    }
    theThongBaoTienDien.innerHTML=`<p class="alert alert-success p-3">👉Họ Tên: ${hoTen} và Tiền Điện: ${tongTienDien.toLocaleString()} vnđ</p>`
}

// Bài Tập 3:

function thueSuatDuoi60Tr(){
    return 0.05
}
function thueSuat60TrDen120Tr(){
    return 0.1
}
function thueSuat120TrDen210Tr(){
    return 0.15
}
function thueSuat210TrDen384Tr(){
    return 0.2
}
function thueSuat384TrDen624Tr(){
    return 0.25
}
function thueSuat624TrDen960Tr(){
    return 0.3
}
function thueSuatTren960Tr(){
    return 0.35
}

document.getElementById('btnTinhTienThue').onclick=function(){
    var hoTen3 = document.getElementById('txtHoTen3').value;
    var tongThuNhap = document.getElementById('txtTongThuNhap').value*1;
    var nguoiPhuThuoc = document.getElementById('txtSoNguoiPhuThuoc').value*1;
    var thongBaoThue =  document.getElementById('ketQuaThongBaoTienThue');
    const trieu= 1000000;
    var thuNhapChiuThue= tongThuNhap - 4*trieu - nguoiPhuThuoc*1.6*trieu;
    var tienThue=0;

    if(thuNhapChiuThue<=0){
        alert("số tiền thu nhập chịu thuế không hợp lệ")
    }
    else if(thuNhapChiuThue<=60*trieu){
        tienThue=thueSuatDuoi60Tr()*thuNhapChiuThue;
    }
    else if(thuNhapChiuThue>60*trieu && thuNhapChiuThue <=120*trieu){
        tienThue=thueSuatDuoi60Tr()*60*trieu+thueSuat60TrDen120Tr()*(thuNhapChiuThue-60*trieu)
    }
    else if(thuNhapChiuThue>120*trieu && thuNhapChiuThue <=210*trieu){
        tienThue=thueSuatDuoi60Tr()*60*trieu+thueSuat60TrDen120Tr()*60*trieu+thueSuat120TrDen210Tr()*(thuNhapChiuThue-120*trieu)
    }
    else if(thuNhapChiuThue>210*trieu && thuNhapChiuThue <=384*trieu){
        tienThue=thueSuatDuoi60Tr()*60*trieu+thueSuat60TrDen120Tr()*60*trieu+thueSuat120TrDen210Tr()*90*trieu+thueSuat210TrDen384Tr()*(thuNhapChiuThue-210*trieu)
    }
    else if(thuNhapChiuThue>384*trieu && thuNhapChiuThue <=624*trieu){
        tienThue=thueSuatDuoi60Tr()*60*trieu+thueSuat60TrDen120Tr()*60*trieu+thueSuat120TrDen210Tr()*90*trieu+thueSuat210TrDen384Tr()*174*trieu+thueSuat384TrDen624Tr()*(thuNhapChiuThue-384*trieu)
    
    }
    else if(thuNhapChiuThue>624*trieu && thuNhapChiuThue <=960*trieu){
        tienThue=thueSuatDuoi60Tr()*60*trieu+thueSuat60TrDen120Tr()*60*trieu+thueSuat120TrDen210Tr()*90*trieu+thueSuat210TrDen384Tr()*174*trieu+thueSuat384TrDen624Tr()*240*trieu+thueSuat624TrDen960Tr()*(thuNhapChiuThue-624*trieu)
    
    }
    else{
        tienThue=thueSuatDuoi60Tr()*60*trieu+thueSuat60TrDen120Tr()*60*trieu+thueSuat120TrDen210Tr()*90*trieu + thueSuat210TrDen384Tr()*174*trieu+thueSuat384TrDen624Tr()*240*trieu+thueSuat624TrDen960Tr()*336*trieu +
        thueSuatTren960Tr()*(thuNhapChiuThue - 960*trieu)
    }
    var formatNumberTienThue= new Intl.NumberFormat('vi-vn', { style: 'currency', currency: 'vnd' }).format(tienThue)
    thongBaoThue.innerHTML=`<p class="alert alert-success p-3">👉Họ Tên: ${hoTen3} và ${formatNumberTienThue} </p>`
}

// Bài tập số 4:

document.getElementById('btnTinhTienCap').onclick=function(){
    var maKH =  document.getElementById('txtMaKH').value;
    var loaiKH = document.getElementById('selectorLoaiKH').value;
    var soKetNoi = document.getElementById('txtSoKetNoi').value*1;
    var soKenh = document.getElementById('txtSoKenh').value*1;
    var feeKenh = giaKenh(loaiKH);
    var feeXuLy = phiXuLy(loaiKH);
    var feeCoBan = phiCoBan(loaiKH, soKetNoi);
    var thongBaoTienCap = document.getElementById('thongBaoTienCap');
    var tienCapRaw = 0;
    console.log(feeKenh);
    console.log(feeXuLy);
    console.log(feeCoBan);
    if(loaiKH != ""){
    tienCapRaw = feeXuLy + feeCoBan + feeKenh*soKenh;
    }else{
        alert("Nhập loại KH")
    }
    console.log(tienCapRaw);
    tienCap =  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(tienCapRaw)
    thongBaoTienCap.innerHTML=`<p class="alert alert-success p-3">👉 Mã KH : ${maKH} và Tiền Cáp: ${tienCap} </p>`

}

document.getElementById('selectorLoaiKH').onchange=function(){
    var loaiKH = document.getElementById('selectorLoaiKH').value;
    var ketNoiField = document.getElementById('txtSoKetNoi')
    if(loaiKH=="doanh nghiệp"){
        ketNoiField.style.display="inline-block"
    }else{
        ketNoiField.style.display="none"
    }

}
function giaKenh(loaiKH){
    switch(loaiKH){
        case "nhà dân":{
            return 7.5;
        }
        case "doanh nghiệp":{
            return 50;
        }
    }
}

function phiXuLy(loaiKH){
    switch(loaiKH){
        case "nhà dân":{
            return 4.5;
        }
        case "doanh nghiệp":{
            return 15;
        }
    }
}

function phiCoBan(loaiKH, soKetNoi){
    var phiCB=0;
    if(loaiKH == "nhà dân"){
        phiCB=20.5
    } else if(loaiKH=="doanh nghiệp"){
        if(soKetNoi <= 10){
            phiCB=75
        }else{
            phiCB = 75 + 5*(soKetNoi-10)
        }
    }
    else{
        phiCB=0;
    }
    return phiCB;
}
