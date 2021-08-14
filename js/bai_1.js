// Bài tập 1
/**
 * Mô hình ba khối
 * Khối 1:
 * so_1, so_2, so_3
 * Khối 2:
 * B1: Tạo biến và lấy giá trị từ form
 * B2: So sánh các số
 * nếu so_1 >= so_2
 *      nếu so_2>=so_3
 *          in "so_3<so_2<so_1";
 *      ngược lại thì:
 *          nếu so_1>=so_3
 *              in "so_2<so_3<so_1";
 *          ngược lại thì in "so_2<so_1<so_3";
 * ngược lại
 *      nếu so_2<=so_3
 *          in "so_1<so_2<so_3";
 *      ngược lại
 *          nếu so_1>=so_3
 *              in "so_3<so_1<so_2";
 *          ngược lại thì in "so_1<so_3<so_2";
 *
 * }
 * B3: in kết quả lên UI
 * Khối 3:
 * Xuất kết quả
 */

document.getElementById('btnBT1').onclick = function () {
  var so_1 = parseInt(document.getElementById('inputSo1').value);
  var so_2 = parseInt(document.getElementById('inputSo2').value);
  var so_3 = parseInt(document.getElementById('inputSo3').value);
  var text = '';
  if (so_1 >= so_2) {
    if (so_2 >= so_3) {
      text = so_3 + '<' + so_2 + '<' + so_1;
    } else {
      if (so_1 >= so_3) {
        text = so_2 + '<' + so_3 + '<' + so_1;
      } else {
        text = so_2 + '<' + so_1 + '<' + so_3;
      }
    }
  } else {
    if (so_2 <= so_3) {
      text = so_1 + '<' + so_2 + '<' + so_3;
    } else {
      if (so_1 >= so_3) {
        text = so_3 + '<' + so_1 + '<' + so_2;
      } else {
        text = so_1 + '<' + so_3 + '<' + so_2;
      }
    }
  }
  document.getElementById('txtBT1').innerHTML = text;
};
