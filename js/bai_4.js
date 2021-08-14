// Bài 4
/**
 * Mô hình 3 khối:
 * Khối 1:
 * 3 cạnh tam giác
 * Khối 2:
 * B1: Tạo biến và lấy giá trị từ form
 * B2: Xác định loại tam giác
 * Nếu canh_1 bằng canh_2 bằng cạnh 3
 *      thì in "Tam giác đều"
 * ngược lại nếu canh_1 bằng cạnh canh_2 hoặc canh_1 bằng canh_3 hoặc canh_2 bằng canh_3
 *      thì in "Tam giác cân"
 * ngược lại nếu  canh_1^2 + canh_2^2 bằng canh_3^2 hoặc canh_1^2 + canh_3^2 bằng canh_2^2 hoặc canh_2^2 + canh_3^2 bằng canh_1^2
 *       thì in "Tam giác vuông"
 * ngược lại
 *      thì in "Tam giác khác"
 * B3: Hiển thị kết quả lên UI
 * Khối 3:
 * Xuất loại tam giác
 */
function BinhPhuong(n) {
  return Math.pow(n, 2);
}
document.getElementById('btnBT4').onclick = function () {
  var canh_1 = parseFloat(document.getElementById('inputCanh_1').value);
  var canh_2 = parseFloat(document.getElementById('inputCanh_2').value);
  var canh_3 = parseFloat(document.getElementById('inputCanh_3').value);
  var text = '';
  if (canh_1 == canh_2 && canh_1 == canh_3) {
    text = 'Tam giác đều';
  } else if (canh_1 == canh_2 || canh_1 == canh_3 || canh_3 == canh_2) {
    text = 'Tam giác cân';
  } else if (
    BinhPhuong(canh_1) + BinhPhuong(canh_2) == BinhPhuong(canh_3) ||
    BinhPhuong(canh_1) + BinhPhuong(canh_3) == BinhPhuong(canh_2) ||
    BinhPhuong(canh_2) + BinhPhuong(canh_3) == BinhPhuong(canh_1)
  ) {
    text = 'Tam giác vuông';
  } else {
    text = 'Tam giác khác';
  }
  document.getElementById('txtBT4').innerHTML = text;
};
