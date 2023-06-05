/* 
Hàm (Function):
Hàm đc khai báo theo cú pháp: function tên hàm (tham số truyền vào){
    các dòng lệnh cần xử lý
    Cách sử dụng hàm: gọi 
}

*/

function xinchao(){
    console.log("xin chào người đẹp");
}

// function () {} : Anonynous function (hàm ẩn danh)
document.getElementById('xinchao').onclick = xinchao;

xinchao();

// hàm có tham số
var diemToan = 6;
var diemVan = 4;
var diemAnh = 5;

function tongDiem (toan, van, anh){
var tongDiemTB = (toan + van +anh)/3
console.log(tongDiemTB)
return tongDiemTB;
}

tongDiem(diemToan, diemVan, diemAnh);

// --- Function Literal ---

var nutBam = document.getElementById().onclick;
nutBam = function(){
}

// VD function literal
var tinhTong = function (a, b){
 var tong= a+b;
 return tong;
}
tinhTong (4 ,6);

