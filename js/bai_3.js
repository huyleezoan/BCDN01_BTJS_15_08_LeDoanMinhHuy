// Bài 3:
/**
 * Mô hình ba khối
 * Khối 1:
 * soThu_1, soThu_2,soThu_3
 * Khối 2:
 * B1: Tạo biến và lấy giá trị từ form
 * B2: tìm số chẵn lẻ
 * nếu soThu_1 chia het 2
 *      nếu soThu_2 chia het 2
 *          nếu soThu_3 chia het 2
 *              thì có 3 số chẵn
 *          ngược lại
 *              thì có 2 số chẵn
 *      ngược lại
 *          nếu soThu_3 chia het 2
 *              thì có 2 số chẵn
 *          ngược lại
 *              thì có 1 số chẵn
 * ngược lại
 *      nếu soThu_2 chia het 2
 *          nếu soThu_3 chia het 2
 *              thì có 2 số chẵn
 *          ngược lại
 *              thì có 1 số chẵn
 *      ngược lại
 *          nếu soThu_3 chia het 2
 *              thi có 1 chẵn
 *          ngược lại
 *              thì có 0 chẵn
 * B3: in kết quả lên UI
 * Khối 3:
 * Xuất kết quả chẵn và lẻ
 */
document.getElementById('btnBT3').onclick = function () {
  var soThu_1 = parseInt(document.getElementById('inputSo_1').value);
  var soThu_2 = parseInt(document.getElementById('inputSo_2').value);
  var soThu_3 = parseInt(document.getElementById('inputSo_3').value);
  var soChan = 0;
  var text = '';
  if (soThu_1 % 2 == 0) {
    if (soThu_2 % 2 == 0) {
      if (soThu_3 % 2 == 0) {
        soChan = 3;
      } else {
        soChan = 2;
      }
    } else {
      if (soThu_3 % 2 == 0) {
        soChan = 2;
      } else {
        soChan = 1;
      }
    }
  } else {
    if (soThu_2 % 2 == 0) {
      if (soThu_3 % 2 == 0) {
        soChan = 2;
      } else {
        soChan = 1;
      }
    } else {
      if (soThu_3 % 2 == 0) {
        soChan = 1;
      } else {
        soChan = 0;
      }
    }
  }
  if (soChan == 3) {
    text = 'Co 3 so chan';
  } else if (soChan == 0) {
    text = 'Co 3 so le';
  } else {
    text = 'Co ' + soChan + ' so chan' + ' va ' + (3 - soChan) + ' so le';
  }
  document.getElementById('txtBT3').innerHTML = text;
};
