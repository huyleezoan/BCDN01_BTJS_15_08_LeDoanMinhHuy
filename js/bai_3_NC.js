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
  #soChuSo = 3 (số có 3 chữ số)
 * * nếu giá trị  = 1 thì là một
 * nếu giá trị  =  thì là hai
 * nếu giá trị  = 3 thì là ba
 * nếu giá trị  = 4 thì là bốn
 * nếu giá trị  = 5 thì là năm
 * nếu giá trị  = 6 thì là sáu
 * nếu giá trị  = 7 thì là bảy
 * nếu giá trị  = 8 thì là tám
 * nếu giá trị  = 9 thì là chín
 * nếu giá trị  = 10 thì là mười
 * lấy từng giá trị ra và đọc theo từng lượt
 * ts vị trí hằng trăm thì thêm trăm
 * đối với vị trí hàng chục nếu tại đó:{
 *      nếu tại đó giaTri = 1 thì đọc là mười
 *      khác một thì đọc giaTri sau đó thêm "mươi"
 * }
 * đới với hàng đơn vị:{
 *      nếu tại đó giaTri = 1 thì đọc là "mốt"
 *      khác thì đọc giaTri
 * }
 * B3: hiển thị kết quả lên UI
 * Khối 3:
 * Đọc ba số vừa nhập
 */
function DocGiaTri(giaTri, dem) {
  switch (giaTri) {
    case 1: {
      if (dem == 2) {
        return 'mười ';
      } else {
        return 'một ';
      }
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
      if (dem == 1) {
        return 'lăm';
      } else {
        return 'năm ';
      }
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
  var soChuSo = 3;
  var text = '';
  var hangTram, hangChuc, hangDonvi;
  hangTram = Math.floor(tam / 100);
  hangChuc = Math.floor((tam % 100) / 10);
  hangDonvi = tam % 10;
  console.log(hangTram, hangChuc, hangDonvi);
  text += DocGiaTri(hangTram, soChuSo--) + 'trăm ';
  if (hangChuc != 0) {
    text += DocGiaTri(hangChuc, soChuSo);
    if (hangChuc > 1) {
      text += 'mươi ';
    }
  } else if (hangChuc == 0 && hangDonvi > 0) {
    text += 'linh ';
  }
  soChuSo--;
  if (hangDonvi > 1) {
    text += DocGiaTri(hangDonvi, soChuSo);
  } else if (hangDonvi == 1 && hangChuc <= 1) {
    text += 'một';
  } else if (hangDonvi == 1 && hangChuc > 1) {
    text += 'mốt';
  }
  console.log(text);

  document.getElementById('txtBT3NC').innerHTML = text;
};
