// Bài 2
/**
 * Mô hình 3 khối
 * Khối 1:
 * bố/mẹ,anh trai/em gái
 * Khối 2:
 * B1: Tạo biến và lấy giá trị từ form
 * B2: Xuất lời chào:
 * Nếu giaTri = b xuất Chào bố
 * Nếu giaTri = m xuất Chào mẹ
 * Nếu giaTri = at xuất Chào anh Trai
 * Nếu giaTri = eg xuất Chào em Gái
 * Nếu giá tri = kh xuất Chào Bạn mới
 * B3: in kết quả lên UI
 * Khổi 3:
 * Xuất lời cahof
 *
 */

document.getElementById('btnBT2').onclick = function () {
  var giaTri = document.getElementById('selectThanhVien').value;
  var thanhVien = '';
  switch (giaTri) {
    case 'b': {
      thanhVien = 'Bố';
      break;
    }
    case 'm': {
      thanhVien = 'Mẹ';
      break;
    }
    case 'at': {
      thanhVien = 'Anh trai';
      break;
    }
    case 'eg': {
      thanhVien = 'Em gái';
      break;
    }
    default: {
      thanhVien = 'Bạn mới';
    }
  }
  document.getElementById('txtBT2').innerHTML = 'Chào ' + thanhVien;
};
