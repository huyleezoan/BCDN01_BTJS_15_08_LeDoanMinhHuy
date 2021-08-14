// Bài 1 nâng cao
/**
 * Mô hình 3 khối:
 * Khối 1:
 * ngay, thang,nam
 * Khối 2:
 * B1: Tạo biến và lấy giá trị từ form
 * B2: Tìm ngày theo yêu cầu
 * #Tìm ngày max của tháng nhập vào
 * a. Tìm ngày kế tiếp
 * nếu ngay < ngayMax
 *      thì {
 *          ngayKT = ngay + 1;
 *          thangKT = thang;
 *          namKT = nam;
 *      }
 * ngược lại nếu ngay == ngayMax
 *      thì ngayKT = 1;
 *      nếu thang < 12
 *          thì {
 *              thangKT = thang + 1;
 *              namKT = nam;
 *          }
 *      ngược lại nếu thangKT == 12
 *          thì {
 *              thangKT = 1;
 *              namKT++;
 *          }
 * b. Tìm ngày sau đó
 * nếu ngay != 1 {
 *      ngaySD = ngay - 1;
 *      thangSD = thang;
 *      namSD=nam;
 *}
 * ngược lại {
 *      if(thang != 1){
 *           thangSD = thang - 1;
 *          #tìm ngayMax của tháng sau đó
 *           ngay = ngayMax;
 *          namSD = nam;
 *      } else{
 *          thangSD = 12;
 *          namSD = nam - 1;
 *          ngay = 31;
 *      }
 *
 * }
 *
 */
function NamNhuan(nam) {
  if ((nam % 4 == 0 && nam % 100 != 0) || nam % 400 == 0) {
    return true;
  }
  return false;
}
function TimNgayMax(thang, nam) {
  switch (thang) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      {
        max = 31;
      }
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      {
        max = 30;
      }
      break;
    case 2:
      {
        if (NamNhuan(nam)) {
          max = 29;
        } else {
          max = 28;
        }
      }
      break;
  }
  return max;
}
document.getElementById('btnBT1NC').onclick = function () {
  var ngay = parseInt(document.getElementById('inputNgay').value);
  var thang = parseInt(document.getElementById('inputThang').value);
  var nam = parseInt(document.getElementById('inputNam').value);
  var ngayKT, thangKT, namKT, ngaySD, thangSD, namSD, ngayMax;
  ngayKT = thangKT = namKT = ngaySD = thangSD = namSD = ngayMax = 0;
  //Tìm ngayMax của tháng hiện tại
  ngayMax = TimNgayMax(thang);
  // a. Tìm ngày kế tiếp
  if (ngay < ngayMax) {
    ngayKT = ngay + 1;
    thangKT = thang;
    namKT = nam;
  } else if (ngay == ngayMax) {
    ngayKT = 1;
    if (thang < 12) {
      thangKT = thang + 1;
      namKT = nam;
    } else if (thang == 12) {
      thangKT = 1;
      namKT = nam + 1;
    }
  }
  //b. Tìm ngay sau đó
  if (ngay != 1) {
    ngaySD = ngay - 1;
    thangSD = thang;
    namSD = nam;
  } else {
    if (thang != 1) {
      thangSD = thang - 1;
      namSD = nam;
      ngayMax = TimNgayMax(thangSD, namSD);
      ngaySD = ngayMax;
    } else {
      thangSD = 12;
      ngaySD = 31;
      namSD = nam - 1;
    }
  }
  document.getElementById('txtBT1NC').innerHTML =
    'Ngày kế tiếp: ' +
    ngayKT +
    '/' +
    thangKT +
    '/' +
    namKT +
    '<br>Ngày sau đó: ' +
    ngaySD +
    '/' +
    thangSD +
    '/' +
    namSD;
};
