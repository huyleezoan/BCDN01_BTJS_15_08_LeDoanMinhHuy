// Bài 4 nâng cao
/**
 * Mô hình ba khối:
 * Khối 1:
 * tenSV,toaDoX,toaDoY của 3 sinh viên
 * Khối 2:
 * B1: Tạo biến và lấy giá trị từ form
 * B2: Tính khoảng cách từng sinh viên
 * d = Math.sqrt(Math.pow(X - Xo,2) + Math.pow(Y - Yo,2));
 * B3: So sánh từng khoảng cách
 * B4: Thông báo sinh viên xa trường nhất
 * nếu bằng nhau thì thông báo sinh viên trùng nhau
 * Khối 3:
 * Tên sinh viên xa trường nhất
 */
document.getElementById('btnBT4NC').onclick = function () {
  var tenSV1 = document.getElementById('inputTenSV1').value;
  var toaDoX_sv1 = parseFloat(document.getElementById('inputSV1X').value);
  var toaDoY_sv1 = parseFloat(document.getElementById('inputSV1Y').value);
  var tenSV2 = document.getElementById('inputTenSV2').value;
  var toaDoX_sv2 = parseFloat(document.getElementById('inputSV2X').value);
  var toaDoY_sv2 = parseFloat(document.getElementById('inputSV2Y').value);
  var tenSV3 = document.getElementById('inputTenSV3').value;
  var toaDoX_sv3 = parseFloat(document.getElementById('inputSV3X').value);
  var toaDoY_sv3 = parseFloat(document.getElementById('inputSV3Y').value);
  var toaDoX = parseFloat(document.getElementById('inputTruongX').value);
  var toaDoY = parseFloat(document.getElementById('inputTruongY').value);
  // Tính khoảng cách:
  var khoangCachSV1 = Math.sqrt(
    Math.pow(toaDoX_sv1 - toaDoX, 2) + Math.pow(toaDoY_sv1 - toaDoY, 2)
  );
  var khoangCachSV2 = Math.sqrt(
    Math.pow(toaDoX_sv2 - toaDoX, 2) + Math.pow(toaDoY_sv2 - toaDoY, 2)
  );
  var khoangCachSV3 = Math.sqrt(
    Math.pow(toaDoX_sv3 - toaDoX, 2) + Math.pow(toaDoY_sv3 - toaDoY, 2)
  );
  var check1, check2, check3;
  check1 = check2 = check3 = 0;
  var max = khoangCachSV1;
  if (max < khoangCachSV2) {
    max = khoangCachSV2;
  }
  if (max < khoangCachSV3) {
    max = khoangCachSV3;
  }
  var text = 'Sinh viên xa trường nhất là: ';
  if (khoangCachSV1 == max) {
    check1 = 1;
  }
  if (khoangCachSV2 == max) {
    check2 = 1;
  }
  if (khoangCachSV3 == max) {
    check3 = 1;
  }
  console.log(
    khoangCachSV1,
    khoangCachSV2,
    khoangCachSV3,
    max,
    check1,
    check2,
    check3
  );
  if (check1 == 1 && check1 == check2 && check2 == check3) {
    text += tenSV1 + ', ' + tenSV2 + ' và ' + tenSV3;
  } else if (check1 == 1 && check1 == check2 && check3 != check1) {
    text += tenSV1 + ' và ' + tenSV2;
  } else if (check1 == 1 && check1 == check3 && check2 != check1) {
    text += tenSV1 + ' và ' + tenSV3;
  } else if (check2 == 1 && check2 == check3 && check1 != 1) {
    text += tenSV2 + ' và ' + tenSV3;
  } else if (check1 == 1 && check1 != check2 && check1 != check3) {
    text += tenSV1;
  } else if (check2 == 1 && check2 != check1 && check2 != check3) {
    text += tenSV2;
  } else if (check3 == 1 && check3 != check2 && check3 != check1) {
    text += tenSV3;
  }
  document.getElementById('txtBT4NC').innerHTML = text;
};
