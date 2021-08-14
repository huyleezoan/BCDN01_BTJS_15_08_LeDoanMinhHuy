// Bài 3 nâng cao
/**
 * Mô hình 3 khối:
 * Khối 1:
 * so
 * Khối 2:
 * B1: Tạo biến và lấy giá trị từ form
 * B2: Đọc số
 * Vd: 123
 * * nếu giaTri = 1 thì là một
 * nếu giaTri = 2 thì là hai
 * nếu giaTri = 3 thì là ba
 * nếu giaTri = 4 thì là bốn
 * nếu giaTri = 5 thì là năm
 * nếu giaTri = 6 thì là sáu
 * nếu giaTri = 7 thì là một
 * nếu giaTri = 8 thì là một
 * nếu giaTri = 9 thì là một
 * nếu giaTri = 10 thì là một
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
      } else if (dem == 1) {
        return 'mốt';
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
  var soChuSo = 3;
  var text = '';
  var giaTri = 0;
  giaTri = Math.floor(tam / 100);
  text += DocGiaTri(giaTri, soChuSo--);
  giaTri = Math.floor((tam % 100) / 10);
  text += 'trăm ' + DocGiaTri(giaTri, soChuSo--);
  if (giaTri != 1) {
    text += 'mươi ';
  }
  giaTri = tam % 10;
  text += DocGiaTri(giaTri, soChuSo);
  document.getElementById('txtBT3NC').innerHTML = text;
};
