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
  
  // Mảng các link cần kiểm tra
  const links = [
    'https://vuejs.org/ấccascsacsac',
    'https://getcomposer.org/',
    'https://www.php.net/',
    'https://www.postman.com/downloads/ấccacssacsacsacsacsac',
    'https://github.com/%C3%A2vvsavsavsavsav',
    'https://getcomposer.org/avdvsdvsdvsdvsdvdsvsdvsdvds'
  ];
  
  // Gọi hàm kiểm tra các link và nhận kết quả
  async function handleLinks() {
    const normalLinks = await checkLinks(links);
    console.log("Các link hoạt động bình thường:", normalLinks);
  }


  
  handleLinks();

  