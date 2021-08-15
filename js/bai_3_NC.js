// Bài 3 nâng cao
/**
 * Mô hình 3 khối:
 * Khối 1:
 * so
 * Khối 2:
 * B1: Tạo biến và lấy giá trị từ form
 * B2: Đọc số
 * Vd: 123
 * #Lấy giá trị của của từng đơn vị như hangTram, hanChuc, hangDonVi
 * hangTram = Math.floor(tam / 100);
  hangChuc = Math.floor((tam % 100) / 10);
  hangDonvi = tam % 10;
 * nếu giá trị  = 1 thì là "một"
 * nếu giá trị  = 2 thì là "hai"
 * nếu giá trị  = 3 thì là "ba"
 * nếu giá trị  = 4 thì là "bốn"
 * nếu giá trị  = 5 thì là "năm"
 * nếu giá trị  = 6 thì là "sáu"
 * nếu giá trị  = 7 thì là "bảy"
 * nếu giá trị  = 8 thì là "tám"
 * nếu giá trị  = 9 thì là "chín"
 * #lấy từng giá trị ra và đọc theo từng lượt
 * # với hàng trăm thì lấy ra sau đó so với giá trị rồi thêm "trăm"
 * # Với hàng chục thì phân ra:
 *  nếu hangChuc > 0 thì {
 *      nếu hangChuc == 1 thì đọc là mười
 *      ngược lại nếu hangChuc > 1 thì đọc giá trị và thêm "mươi"
 * } ngược lại nếu hangChuc == 0 và hangDonVi > 0 {
 *      thì thêm ghi "linh"
 * }
 * #Với hàng đơn vị thì phân ra: 
 * nếu hangDonVi > 1
 *      nếu hangDonVi != 5 thì in giá trị
 *      ngược lại thì 
 *          nếu hangChuc == 0 thì in ra "năm";
 *          ngược lại thì in ra "lăm"
 * ngược lại nếu hangDonVi == 1 và hangChuc <= 1 thì in "một"
 * ngược lại nếu hangDonVi == 1 và hangChuc >1 thì in "mốt"
 * B3: hiển thị kết quả lên UI
 * Khối 3:
 * Đọc ba số vừa nhập 
 */

// Đọc ba số nhập vào từ 100 đến 999
function DocGiaTri(giaTri) {
  switch (giaTri) {
    case 1: {
      return 'một ';
    }
    case 2: {
      return 'hai ';
    }
    case 3: {
      return 'ba ';
    }
    case 4: {
      return 'bốn ';
    }
    case 5: {
      return 'năm ';
    }
    case 6: {
      return 'sáu ';
    }
    case 7: {
      return 'bảy ';
    }
    case 8: {
      return 'tám ';
    }
    case 9: {
      return 'chín ';
    }
  }
}
document.getElementById('btnBT3NC').onclick = function () {
  var so = parseInt(document.getElementById('inputDocSo').value);
  var tam = so;
  var text = '';
  var hangTram, hangChuc, hangDonvi;
  hangTram = Math.floor(tam / 100);
  hangChuc = Math.floor((tam % 100) / 10);
  hangDonvi = tam % 10;
  text += DocGiaTri(hangTram) + 'trăm ';
  if (hangChuc > 0) {
    if (hangChuc == 1) {
      text += 'mười ';
    } else if (hangChuc > 1) {
      text += DocGiaTri(hangChuc) + 'mươi ';
    }
  } else if (hangChuc == 0 && hangDonvi > 0) {
    text += 'linh ';
  }
  if (hangDonvi > 1) {
    if (hangDonvi != 5) {
      text += DocGiaTri(hangDonvi);
    } else {
      if (hangChuc == 0) {
        text += 'năm';
      } else {
        text += 'lăm';
      }
    }
  } else if (hangDonvi == 1 && hangChuc <= 1) {
    text += 'một';
  } else if (hangDonvi == 1 && hangChuc > 1) {
    text += 'mốt';
  }
  document.getElementById('txtBT3NC').innerHTML = text;
};
