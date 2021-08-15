// Bài 2 nâng cao
/**
 * Mô hình 3 khối:
 * Khối 1:
 * thang,nam
 * Khối 2:
 * B1: Tạo biến và lấy giá trị từ form
 * B2: Tính ngày
 * # Xác thực có phải năm nhuận hay không
 * Nếu thang = {1,3,5,7,8,10,12} thì có 31 ngay;
 * Nếu thang = {4,6,9,11} thì có 30 ngày;
 * Nếu thang = 2
 *      nếu là năm nhuận
 *          thì có 29 ngày
 *      ngược lại
 *          thì có 28 ngày
 */

document.getElementById('btnBT2NC').onclick = function () {
  var thang = parseInt(document.getElementById('inputThang_2').value);
  var nam = parseInt(document.getElementById('inputNam_2').value);
  var ngay = 0;
  switch (thang) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      {
        ngay = 31;
      }
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      {
        ngay = 30;
      }
      break;
    case 2:
      {
        if ((nam % 4 == 0 && nam % 4 != 100) || nam % 400 == 0) {
          ngay = 29;
        } else {
          ngay = 28;
        }
      }
      break;
  }
  document.getElementById('txtBT2NC').innerHTML =
    'Tháng ' + thang + ' trong năm ' + nam + ' có ' + ngay + ' ngày';
};
