// Hàm kiểm tra quốc gia
function kiemTraQuocGia() {
  // Kiểm tra xem trình duyệt có hỗ trợ Geolocation không
  if (navigator.geolocation) {
    // Lấy vị trí của người dùng
    navigator.geolocation.getCurrentPosition(function(position) {
      // Lấy tọa độ latitude và longitude
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;

      // Tạo request sử dụng API Geolocation
      var request = new XMLHttpRequest();
      var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latitude + "," + longitude;

      // Gửi request
      request.open("GET", url, true);
      request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
          // Phân tích JSON response
          var data = JSON.parse(request.responseText);

          // Lấy thông tin quốc gia từ response
          var country = null;
          for (var i = 0; i < data.results.length; i++) {
            var result = data.results[i];
            for (var j = 0; j < result.address_components.length; j++) {
              var component = result.address_components[j];
              if (component.types.indexOf("country") !== -1) {
                country = component.long_name;
                break;
              }
            }
            if (country) {
              break;
            }
          }

          // Hiển thị thông tin quốc gia
          if (country) {
            console.log("Quốc gia: " + country);
          } else {
            console.log("Không xác định được quốc gia.");
          }
        }
      };

      // Gửi request
      request.send();
    });
  } else {
    console.log("Trình duyệt không hỗ trợ Geolocation.");
  }
}

// Gọi hàm kiểm tra quốc gia
kiemTraQuocGia();
