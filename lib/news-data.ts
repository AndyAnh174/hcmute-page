export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  views?: number;
  tags?: string[];
  content?: string; // Nội dung chi tiết
}

const icmt2025Content = `
  <h2>
    HCMUTE tổ chức Hội thảo Quốc tế về Công nghệ Cơ – Điện tử (ICMT 2025) - Diễn đàn học thuật kết nối tri thức toàn cầu
  </h2>

  <p>
    Vào ngày 13 tháng 11 năm 2025, Trường Đại học Sư phạm Kỹ thuật TP. Hồ Chí Minh (HCMUTE) phối hợp với
    Đại học Ulsan (Hàn Quốc) tổ chức Hội thảo Khoa học Quốc tế về Công nghệ Cơ – Điện tử năm 2025
    (International Conference on Mechatronics and Technology – ICMT 2025). Hội thảo ICMT 2025 được bảo trợ bởi
    Hiệp hội Điện tử Công nghiệp (IEEE Industrial Electronics Society – IEEE IES), một trong những tổ chức học thuật
    hàng đầu thế giới trong lĩnh vực điện – điện tử, khẳng định vị thế uy tín và tầm ảnh hưởng học thuật của HCMUTE
    trên bản đồ nghiên cứu quốc tế.
  </p>

  <figure>
    <img
      src="https://hcmute.edu.vn/Resources/Images/SubDomain/HomePage/tin%20tuc/H%E1%BB%8CC%20T%E1%BA%ACP%20V%C3%80%20NCKH/Qu%E1%BB%91c%20t%E1%BA%BF/Qu%E1%BB%91c%20t%E1%BA%BF%201.jpg"
      alt="Toàn cảnh hội thảo Quốc tế về Công nghệ Cơ – Điện tử (ICMT 2025)"
      style="width: 100%; height: auto; margin: 16px 0;"
    />
    <figcaption>Hội thảo Quốc tế về Công nghệ Cơ – Điện tử (ICMT 2025)</figcaption>
  </figure>

  <p>
    Hội thảo năm nay nhận được 128 bài báo từ các nhà nghiên cứu trong nước và quốc tế. Sau quy trình phản biện nghiêm túc
    (peer review), Ban Tổ chức đã chọn ra 75 bài báo chất lượng để trình bày tại hội thảo. Các công trình nghiên cứu được
    phân bố vào 15 phiên báo cáo, bao gồm các chủ đề đa dạng thuộc lĩnh vực cơ – điện tử, hệ thống thông minh, cảm biến, điều
    khiển, năng lượng và các ứng dụng công nghiệp khác nhau. Toàn bộ bài báo sẽ được xuất bản trong kỷ yếu của IEEE Xplore –
    một trong những hệ thống xuất bản khoa học uy tín hàng đầu thế giới.
  </p>

  <p>
    ICMT 2025 vinh dự đón tiếp hơn 70 nhà khoa học, chuyên gia và nhà nghiên cứu đến từ nhiều quốc gia như Việt Nam, Hàn Quốc,
    Nhật Bản, Ý, Trung Quốc, Vương quốc Anh, Đài Loan, Đức, Luxembourg, Qatar và Đài Loan. Sự hiện diện của họ tạo nên một diễn đàn
    học thuật sôi động, nơi tri thức được trao đổi, cơ hội hợp tác được mở rộng, thúc đẩy sự phát triển của lĩnh vực cơ – điện tử và
    công nghệ trong bối cảnh hội nhập quốc tế ngày càng sâu rộng.
  </p>

  <figure>
    <img
      src="https://hcmute.edu.vn/Resources/Images/SubDomain/HomePage/tin%20tuc/H%E1%BB%8CC%20T%E1%BA%ACP%20V%C3%80%20NCKH/Qu%E1%BB%91c%20t%E1%BA%BF/Qu%E1%BB%91c%20t%E1%BA%BF%202.jpg"
      alt="Toàn cảnh hội trường phiên khai mạc ICMT 2025"
      style="width: 100%; height: auto; margin: 16px 0;"
    />
    <figcaption>Toàn cảnh hội trường phiên khai mạc ICMT 2025</figcaption>
  </figure>

  <p>
    Tham dự hội thảo, về phía Ban tổ chức có GS.TS. Kyoung Kwan Ahn – Chủ tịch danh dự, Trường Đại học Ulsan Hàn Quốc; PGS.TS.
    Châu Đình Thành – Phó Hiệu trưởng HCMUTE; PGS.TS. Đỗ Thành Trung – Trưởng Phòng Khoa học Công nghệ HCMUTE cùng đại diện
    lãnh đạo các khoa, phòng ban, giảng viên và học viên trong nhà trường. Hội thảo còn có sự tham dự của các diễn giả chính là
    GS. Yo Ping Huang – National Taipei University of Technology (Đài Loan) và PGS.TS. Đinh Quang Trường – University of Warwick
    (Vương quốc Anh), cùng nhiều nhà nghiên cứu trong và ngoài nước.
  </p>

  <figure>
    <img
      src="https://hcmute.edu.vn/Resources/Images/SubDomain/HomePage/tin%20tuc/H%E1%BB%8CC%20T%E1%BA%ACP%20V%C3%80%20NCKH/Qu%E1%BB%91c%20t%E1%BA%BF/Qu%E1%BB%91c%20t%E1%BA%BF%203.jpg"
      alt="PGS.TS. Châu Đình Thành phát biểu tại hội thảo"
      style="width: 100%; height: auto; margin: 16px 0;"
    />
    <figcaption>PGS.TS. Châu Đình Thành phát biểu tại hội thảo</figcaption>
  </figure>

  <p>
    Mở đầu hội thảo, PGS.TS. Châu Đình Thành gửi lời chào đến các đại biểu, diễn giả và nhà khoa học tham dự. Thầy nhấn mạnh ICMT là
    diễn đàn quan trọng để trao đổi các kết quả, ý tưởng và giải pháp công nghệ mới, đặc biệt trong lĩnh vực cơ – điện tử, trí tuệ nhân tạo
    (AI) và Internet vạn vật (IoT), góp phần kết nối mạng lưới học thuật quốc tế và thúc đẩy chuyển giao công nghệ.
  </p>

  <figure>
    <img
      src="https://hcmute.edu.vn/Resources/Images/SubDomain/HomePage/tin%20tuc/H%E1%BB%8CC%20T%E1%BA%ACP%20V%C3%80%20NCKH/Qu%E1%BB%91c%20t%E1%BA%BF/Qu%E1%BB%91c%20t%E1%BA%BF%204.jpg"
      alt="GS.TS. Kyoung Kwan Ahn phát biểu tại hội thảo"
      style="width: 100%; height: auto; margin: 16px 0;"
    />
    <figcaption>GS.TS. Kyoung Kwan Ahn – Đại học Ulsan, Hàn Quốc phát biểu tại hội thảo</figcaption>
  </figure>

  <p>
    GS.TS. Kyoung Kwan Ahn bày tỏ niềm tự hào khi ICMT lần thứ 28 được tổ chức tại Việt Nam, đồng thời khẳng định tầm quan trọng của việc
    tăng cường hợp tác nghiên cứu giữa các trường đại học trên thế giới nhằm phát triển những giải pháp công nghệ mang tính toàn cầu. Giáo sư
    đánh giá cao vai trò của HCMUTE trong mạng lưới các trường đại học kỹ thuật trong khu vực.
  </p>

  <figure>
    <img
      src="https://hcmute.edu.vn/Resources/Images/SubDomain/HomePage/tin%20tuc/H%E1%BB%8CC%20T%E1%BA%ACP%20V%C3%80%20NCKH/Qu%E1%BB%91c%20t%E1%BA%BF/Qu%E1%BB%91c%20t%E1%BA%BF%205.jpg"
      alt="GS. Yo Ping Huang trình bày tại hội thảo"
      style="width: 100%; height: auto; margin: 16px 0;"
    />
    <figcaption>GS. Yo Ping Huang trình bày tại hội thảo ICMT 2025</figcaption>
  </figure>

  <p>
    Các diễn giả chính đã mang đến những bài trình bày giàu giá trị học thuật và tính ứng dụng cao về AIoT trong cảm biến – điều khiển, các giải pháp cơ – điện tử tiên tiến trong quản lý nhiệt, năng lượng và hệ thống vận chuyển bền vững. Những chia sẻ này mang lại góc nhìn mới về xu hướng phát triển của ngành cơ – điện tử trong kỷ nguyên chuyển đổi số.
  </p>

  <figure>
    <img
      src="https://hcmute.edu.vn/Resources/Images/SubDomain/HomePage/tin%20tuc/H%E1%BB%8CC%20T%E1%BA%ACP%20V%C3%80%20NCKH/Qu%E1%BB%91c%20t%E1%BA%BF/Qu%E1%BB%91c%20t%E1%BA%BF%206.jpg"
      alt="Ban tổ chức trao chứng nhận cho diễn giả"
      style="width: 100%; height: auto; margin: 16px 0;"
    />
    <figcaption>Đại diện Ban tổ chức trao giấy chứng nhận cho diễn giả chính</figcaption>
  </figure>

  <figure>
    <img
      src="https://hcmute.edu.vn/Resources/Images/SubDomain/HomePage/tin%20tuc/H%E1%BB%8CC%20T%E1%BA%ACP%20V%C3%80%20NCKH/Qu%E1%BB%91c%20t%E1%BA%BF/Qu%E1%BB%91c%20t%E1%BA%BF%207.jpg"
      alt="Các báo cáo viên trình bày tại hội thảo"
      style="width: 100%; height: auto; margin: 16px 0;"
    />
    <figcaption>Các báo cáo viên trình bày tại hội thảo</figcaption>
  </figure>

  <p>
    Thành công của ICMT 2025 đánh dấu một cột mốc quan trọng trong hành trình hội nhập quốc tế của HCMUTE. Sự kiện không chỉ củng cố nền tảng
    hợp tác nghiên cứu giữa HCMUTE với các trường đại học và viện nghiên cứu trên thế giới mà còn góp phần hiện thực hóa mục tiêu đưa HCMUTE trở
    thành trung tâm nghiên cứu, đổi mới sáng tạo hàng đầu trong khu vực về lĩnh vực cơ – điện tử.
  </p>

  <figure>
    <img
      src="https://hcmute.edu.vn/Resources/Images/SubDomain/HomePage/tin%20tuc/H%E1%BB%8CC%20T%E1%BA%ACP%20V%C3%80%20NCKH/Qu%E1%BB%91c%20t%E1%BA%BF/Qu%E1%BB%91c%20t%E1%BA%BF%2010.jpg"
      alt="ICMT 2025 - hội thảo quốc tế thường niên"
      style="width: 100%; height: auto; margin: 16px 0;"
    />
  </figure>

  <p>
    ICMT 2025 (International Conference on Mechatronics and Technology) là hội thảo quốc tế được tổ chức thường niên, đã diễn ra thành công trong suốt
    27 năm kể từ khi được thành lập vào năm 1996 tại Santa Clara, Hoa Kỳ. Hội thảo được luân phiên tổ chức tại nhiều quốc gia ở châu Á, châu Âu và Bắc Mỹ,
    xây dựng được uy tín trong cộng đồng học thuật toàn cầu. Việc HCMUTE đăng cai tổ chức ICMT 2025 minh chứng cho nỗ lực hội nhập quốc tế và khẳng định
    thương hiệu của nhà trường trên bản đồ giáo dục, nghiên cứu khu vực.
  </p>

  <figure>
    <img
      src="https://hcmute.edu.vn/Resources/Images/SubDomain/HomePage/tin%20tuc/H%E1%BB%8CC%20T%E1%BA%ACP%20V%C3%80%20NCKH/Qu%E1%BB%91c%20t%E1%BA%BF/Qu%E1%BB%91c%20t%E1%BA%BF%2012.jpg"
      alt="Khách mời tham quan khu trưng bày tại hội thảo"
      style="width: 100%; height: auto; margin: 16px 0;"
    />
    <figcaption>Đại biểu tham quan khu vực trưng bày tại hội thảo</figcaption>
  </figure>
`;

export const newsItems: NewsItem[] = [
  {
    id: 101,
    title:
      "HOẠT ĐỘNG HỌC TẬP VÀ NCKH HCMUTE tổ chức Hội thảo Quốc tế về Công nghệ Cơ – Điện tử (ICMT 2025)",
    excerpt:
      "Diễn đàn học thuật kết nối tri thức toàn cầu Vào ngày 13 tháng 11 năm 2025, Trường Đại học Sư phạm",
    date: "2025-11-13",
    category: "Sự kiện",
    image: "/news/hoi-thao-ute.jpg",
    readTime: "3 phút",
    views: 245,
    tags: ["ICMT-2025", "cơ-điện-tử", "hội-thảo"],
    content: icmt2025Content,
  },
  {
    id: 102,
    title:
      "HOẠT ĐỘNG HỌC TẬP VÀ NCKH HCMUTE tổ chức Hội thảo Quốc tế về Công nghệ Cơ – Điện tử (ICMT 2025)",
    excerpt:
      "Diễn đàn học thuật kết nối tri thức toàn cầu Vào ngày 13 tháng 11 năm 2025, Trường Đại học Sư phạm",
    date: "2025-11-13",
    category: "Sự kiện",
    image: "/news/hoi-thao-ute.jpg",
    readTime: "3 phút",
    views: 245,
    tags: ["ICMT-2025", "cơ-điện-tử", "hội-thảo"],
    content: icmt2025Content,
  },
  {
    id: 103,
    title:
      "HOẠT ĐỘNG HỌC TẬP VÀ NCKH HCMUTE tổ chức Hội thảo Quốc tế về Công nghệ Cơ – Điện tử (ICMT 2025)",
    excerpt:
      "Diễn đàn học thuật kết nối tri thức toàn cầu Vào ngày 13 tháng 11 năm 2025, Trường Đại học Sư phạm",
    date: "2025-11-13",
    category: "Sự kiện",
    image: "/news/hoi-thao-ute.jpg",
    readTime: "3 phút",
    views: 245,
    tags: ["ICMT-2025", "cơ-điện-tử", "hội-thảo"],
    content: icmt2025Content,
  },
];

export function getNewsItemById(id: number): NewsItem | undefined {
  return newsItems.find((item) => item.id === id);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

