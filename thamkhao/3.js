<script>

    var url = {
      Vietnam : [
        'https://vuejs.org/ấccascsacsac',
        'https://getcomposer.org/',
        'https://www.php.net/',
        'https://www.postman.com/downloads/ấccacssacsacsacsacsac',
        'https://github.com/%C3%A2vvsavsavsavsav',
        'https://getcomposer.org/avdvsdvsdvsdvsdvdsvsdvsdvds'
      ],
      Armenia : [
        'https://techcrunch.com/',
        'https://www.cnet.com/',
        'https://www.engadget.com/',
        'Verge: https://www.theverge.com/',
        'https://www.wired.com/'
      ]
    };

    var name_country = '';
    var country_code2 = '';
    function getUserCountry() {
      fetch('https://api.ipgeolocation.io/ipgeo?apiKey=a1f64880c15b486eb1e7e4a58686a316')
      .then(response => response.json())
      .then(data => {
          console.log(data);
          var country = data.country_name;
          console.log("Quốc gia: " + country);
          name_country = data.country_name;
          country_code2 = data.country_code2;
          // Xử lý thông tin quốc gia ở đây
          handleCountryName();
      })
      .catch(error => {
          console.error('Lỗi khi lấy thông tin quốc gia:', error);
      });
    }


    async function checkLinks(links) {
      var normalLinks = []; // Biến lưu các link hoạt động bình thường

      for (const link of links) {
        try {
          const response = await fetch(link);
          if (response.status === 404) {
            console.log(`Link ${link} bị lỗi 404.`);
          } else {
            console.log(`Link ${link} hoạt động bình thường.`);
            normalLinks.push(link); // Thêm link vào mảng normalLinks
            // Thực hiện các hành động khác nếu link không bị lỗi 404.
          }
        } catch (error) {
          console.log(`Có lỗi khi kiểm tra link ${link}: ${error}`);
        }
      }

      return normalLinks; // Trả về mảng các link hoạt động bình thường
    }

    function handleCountryName() {
        console.log(name_country);
        var address = window.document.getElementById('address');
        address.innerHTML = name_country;

        var country_code = window.document.getElementById('country_code');
        country_code.innerHTML = country_code2;

        // Code thêm cho tôi đoạn này kiểm tra nếu name_country là quốc gia nào thì random 1 trong các link trong 
        // biến url quốc gia đó và redirect đến đó 
        // Check if name_country is a key in the url object
        if (name_country in url) {
          var countryUrls = url[name_country];
          console.log(countryUrls);

          async function handleLinks() {
            const normalLinks = await checkLinks(countryUrls);
            console.log("Các link hoạt động bình thường:", normalLinks);
          }
        }
    }

    // Gọi hàm để lấy quốc gia của người dùng
    getUserCountry();

  </script>