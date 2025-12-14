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
  <p class="lead">
    <strong>(HCMUTE) – Ngày 13/11/2025, tại Trường Đại học Sư phạm Kỹ thuật TP.HCM đã diễn ra phiên khai mạc Hội thảo Quốc tế
    về Công nghệ Cơ – Điện tử (International Conference on Mechatronics and Technology – ICMT 2025). Đây là sự kiện khoa học
    thường niên uy tín, quy tụ các nhà khoa học hàng đầu thế giới để chia sẻ những nghiên cứu đột phá trong lĩnh vực công nghệ.</strong>
  </p>

  <h2>Tầm vóc quốc tế và sứ mệnh kết nối tri thức</h2>
  <p>
    Hội thảo ICMT 2025 do Trường Đại học Sư phạm Kỹ thuật TP.HCM (HCMUTE) đăng cai tổ chức, phối hợp cùng Đại học Ulsan (Hàn Quốc)
    và được bảo trợ kỹ thuật bởi Hiệp hội Điện tử Công nghiệp (IEEE Industrial Electronics Society). Sự kiện năm nay thu hút hơn
    150 đại biểu, trong đó có hơn 70 nhà khoa học, giáo sư, chuyên gia đầu ngành đến từ 12 quốc gia và vùng lãnh thổ, bao gồm:
    Hoa Kỳ, Nhật Bản, Hàn Quốc, Anh, Đức, Ý, Trung Quốc, Đài Loan, Qatar, Luxembourg...
  </p>
  <p>
    Phát biểu tại lễ khai mạc, PGS.TS. Lê Hiếu Giang – Quyền Hiệu trưởng Nhà trường nhấn mạnh: <em>"ICMT 2025 không chỉ là diễn đàn
    trao đổi học thuật mà còn là cơ hội để các nhà nghiên cứu Việt Nam tiệm cận với những xu hướng công nghệ tiên tiến nhất trên
    thế giới. Đặc biệt trong bối cảnh cuộc Cách mạng Công nghiệp 4.0, các chủ đề về AI, IoT, Robotics và Hệ thống sản xuất thông minh
    đang trở thành tâm điểm của sự phát triển bền vững."</em>
  </p>

  <figure>
    <img
      src="/news/hoi-thao-ute.jpg"
      alt="Toàn cảnh phiên khai mạc ICMT 2025 tại Hội trường lớn"
      style="width: 100%; height: auto; margin: 24px 0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);"
    />
    <figcaption style="text-align: center; font-style: italic; color: #666; margin-top: 8px;">
      Toàn cảnh phiên khai mạc ICMT 2025 với sự tham gia của đông đảo đại biểu quốc tế
    </figcaption>
  </figure>

  <h2>Những chủ đề nghiên cứu mang tính thời đại</h2>
  <p>
    Ban tổ chức ICMT 2025 đã nhận được hơn 200 bài báo gửi về từ khắp nơi trên thế giới. Trải qua quy trình phản biện kín (blind peer-review)
    nghiêm ngặt bởi hội đồng chuyên môn quốc tế, 75 bài báo xuất sắc nhất đã được chấp nhận trình bày (oral presentation) tại 15 phiên
    tiểu ban. Các bài báo này sẽ được lập chỉ mục trong hệ thống thư viện điện tử IEEE Xplore và Scopus, khẳng định chất lượng học thuật
    của hội thảo.
  </p>
  <p>
    Các chủ đề chính được thảo luận tại hội thảo bao gồm:
  </p>
  <ul>
    <li>Điều khiển thông minh và Tự động hóa (Intelligent Control & Automation)</li>
    <li>Robot và Hệ thống Mechatronics (Robotics & Mechatronics Systems)</li>
    <li>Trí tuệ nhân tạo vạn vật (AIoT) trong công nghiệp</li>
    <li>Vật liệu mới và Công nghệ Nano ứng dụng</li>
    <li>Năng lượng tái tạo và Quản lý năng lượng hiệu quả</li>
  </ul>

  <blockquote>
    "Sự kết hợp giữa Cơ khí, Điện tử và Công nghệ thông tin đang tạo ra những thay đổi chưa từng có trong dây chuyền sản xuất toàn cầu.
    ICMT 2025 đã cho thấy những bước tiến đáng kinh ngạc trong việc ứng dụng AI vào giải quyết các bài toán kỹ thuật phức tạp."
    – <cite>GS.TS. Kyoung Kwan Ahn (Đại học Ulsan, Hàn Quốc)</cite> chia sẻ bên lề hội thảo.
  </blockquote>

  <h2>Dấu ấn HCMUTE trên bản đồ khoa học thế giới</h2>
  <p>
    Việc đăng cai tổ chức thành công ICMT 2025 một lần nữa khẳng định uy tín và năng lực tổ chức các sự kiện quốc tế tầm cỡ của
    Trường Đại học Sư phạm Kỹ thuật TP.HCM. Đây cũng là dịp để Nhà trường giới thiệu đến bạn bè quốc tế về cơ sở vật chất hiện đại,
    năng lực nghiên cứu của đội ngũ giảng viên và sự năng động, sáng tạo của sinh viên HCMUTE.
  </p>
  <p>
    Trong khuôn khổ hội thảo, các đại biểu cũng đã có chuyến tham quan các phòng thí nghiệm trọng điểm (Key Labs) và Trung tâm
    Đổi mới sáng tạo (Innovation Center) của Trường. Nhiều thỏa thuận hợp tác nghiên cứu song phương và trao đổi giảng viên, sinh viên
    cũng đã được ký kết ngay tại sự kiện, mở ra những cơ hội mới cho sự phát triển của Nhà trường trong tương lai.
  </p>
  <p>
    Hội thảo sẽ tiếp tục diễn ra trong 03 ngày với các hoạt động báo cáo chuyên đề, tọa đàm bàn tròn (panel discussion) và chương trình
    trải nghiệm văn hóa Việt Nam dành cho các vị khách quốc tế.
  </p>
`;

const robotContent = `
  <p class="lead">
    <strong>Chiều ngày 20/08/2025, bầu không khí tại Nhà thi đấu đa năng như vỡ òa khi đội tuyển SPK-Fire của Trường Đại học
    Sư phạm Kỹ thuật TP.HCM xuất sắc vượt qua các đối thủ mạnh để giành ngôi vị Á quân tại Cuộc thi Sáng tạo Robot Châu Á -
    Thái Bình Dương (ABU Robocon 2025).</strong>
  </p>

  <h2>Hành trình chinh phục đỉnh cao công nghệ</h2>
  <p>
    ABU Robocon 2025 với chủ đề "Gieo hạt - Mùa vàng" (Harvest Day) yêu cầu các đội thi thiết kế robot có khả năng tự động hóa cao,
    di chuyển chính xác trên địa hình mô phỏng ruộng bậc thang và thực hiện các thao tác gieo hạt, thu hoạch phức tạp. Đây là bài toán
    khó, đòi hỏi sự kết hợp nhuần nhuyễn giữa cơ khí chính xác, mạch điện tử tin cậy và thuật toán điều khiển thông minh.
  </p>
  
  <figure>
    <img
      src="/news/giai-nha-robot.jpeg"
      alt="Đội tuyển SPK-Fire nhận giải Á quân và giải Công nghệ xuất sắc nhất"
      style="width: 100%; height: auto; margin: 24px 0; border-radius: 12px;"
    />
    <figcaption style="text-align: center; font-style: italic; color: #666; margin-top: 8px;">
      Đội tuyển SPK-Fire nhận giải Á quân và giải "Công nghệ xuất sắc nhất" từ Ban tổ chức
    </figcaption>
  </figure>

  <p>
    Đội tuyển SPK-Fire, gồm 15 sinh viên ưu tú đến từ Khoa Cơ khí Chế tạo máy và Khoa Điện - Điện tử, đã dành hơn 6 tháng ròng rã
    để nghiên cứu và chế tạo. Robot của đội gây ấn tượng mạnh với ban giám khảo nhờ cơ cấu di chuyển đa hướng (omni-directional)
    linh hoạt và hệ thống thị giác máy tính (computer vision) giúp nhận diện mục tiêu với độ trễ gần như bằng không.
  </p>

  <h2>Chiến thuật hợp lý và tinh thần thép</h2>
  <p>
    Trong trận chung kết nghẹt thở với đội tuyển đến từ Nhật Bản, SPK-Fire đã thể hiện một phong độ thi đấu xuất sắc. Dù gặp sự cố
    nhỏ ở giây thứ 30, nhưng với bản lĩnh kiên cường, các thành viên đã nhanh chóng khắc phục và hoàn thành nhiệm vụ "Cheer Jai"
    (chiến thắng tuyệt đối) ở 1 phút 45 giây. Tuy chỉ kém đội vô địch chỉ 2 giây nhưng màn trình diễn của SPK-Fire đã để lại
    nhiều cảm xúc đẹp trong lòng khán giả.
  </p>
  <ul>
    <li><strong>Giải thưởng đạt được:</strong> Giải Nhì toàn đoàn (First Runner-up).</li>
    <li><strong>Giải phụ:</strong> Giải Kỹ thuật xuất sắc nhất (Best Engineering Award).</li>
    <li><strong>Kỷ lục:</strong> Đội có robot tự động gieo hạt nhanh nhất giải đấu.</li>
  </ul>

  <h2>Niềm tự hào của sinh viên kỹ thuật</h2>
  <p>
    TS. Nguyễn Văn A - Trưởng đoàn Robocon HCMUTE chia sẻ: <em>"Thành tích này là kết quả của sự đam mê, sáng tạo không ngừng nghỉ
    và tinh thần đoàn kết của cả tập thể. Các em đã chứng minh được rằng sinh viên Việt Nam hoàn toàn có thể làm chủ những công nghệ
    khó và cạnh tranh sòng phẳng với các cường quốc công nghệ trong khu vực."</em>
  </p>
`;

const startupContent = `
  <p class="lead">
    <strong>Cuộc thi "Khởi nghiệp Đổi mới Sáng tạo Sinh viên - CiC 2025" do Đại học Quốc gia TP.HCM tổ chức đã chính thức khép lại
    với chiến thắng thuyết phục thuộc về dự án "Hệ thống giám sát nông nghiệp thông minh IoT" của nhóm sinh viên Trường Đại học
    Sư phạm Kỹ thuật TP.HCM.</strong>
  </p>

  <h2>Ý tưởng khởi nghiệp từ thực tiễn</h2>
  <p>
    Xuất phát từ trăn trở về việc người nông dân thường xuyên gặp khó khăn trong việc kiểm soát môi trường trồng trọt, dẫn đến năng suất
    bấp bênh, nhóm sinh viên (gồm 5 thành viên CLB Nghiên cứu Khoa học) đã phát triển một giải pháp IoT toàn diện. Hệ thống bao gồm
    các cảm biến đo độ ẩm đất, nhiệt độ, ánh sáng và nồng độ dinh dưỡng, kết nối với ứng dụng trên điện thoại thông minh, giúp người
    nông dân giám sát nông trại 24/7 từ bất cứ đâu.
  </p>

  <figure>
    <img
      src="/news/Hinh khoi nghiep 11.jpg"
      alt="Nhóm sinh viên HCMUTE trình bày dự án trước Hội đồng đầu tư"
      style="width: 100%; height: auto; margin: 24px 0; border-radius: 12px;"
    />
    <figcaption style="text-align: center; font-style: italic; color: #666; margin-top: 8px;">
      Nhóm tác giả dự án tự tin trình bày giải pháp trước Hội đồng đầu tư và Ban giám khảo
    </figcaption>
  </figure>

  <h2>Bước đệm để vươn xa</h2>
  <p>
    Vượt qua hơn 300 dự án đến từ các trường đại học trên cả nước, dự án của HCMUTE được đánh giá cao bởi tính khả thi, chi phí thấp
    và khả năng nhân rộng. Ngoài giải Nhất trị giá 50 triệu đồng, nhóm còn nhận được cam kết đầu tư "thiên thần" trị giá 200 triệu đồng
    từ Quỹ Khởi nghiệp Doanh nghiệp Khoa học Công nghệ Việt Nam (SVF) để hoàn thiện sản phẩm thương mại.
  </p>
`;

const vinaContent = `
  <p class="lead">
    <strong>Sáng ngày 10/10/2025, Lễ ký kết thỏa thuận hợp tác chiến lược giữa Trường Đại học Sư phạm Kỹ thuật TP.HCM (HCMUTE)
    và Tập đoàn Bưu chính Viễn thông Việt Nam (VNPT) – Chi nhánh VinaPhone đã diễn ra trang trọng tại Phòng họp I, đánh dấu
    bước phát triển mới trong mối quan hệ hợp tác Doanh nghiệp – Nhà trường.</strong>
  </p>

  <h2>Hợp tác toàn diện về đào tạo và tuyển dụng</h2>
  <p>
    Theo thỏa thuận được ký kết, hai bên cam kết hợp tác sâu rộng trong các lĩnh vực:
  </p>
  <ul>
    <li>Xây dựng phòng thí nghiệm 5G & IoT Lab hiện đại tại khuôn viên trường để sinh viên thực hành.</li>
    <li>Phối hợp xây dựng chương trình đào tạo bám sát nhu cầu thực tế của doanh nghiệp viễn thông.</li>
    <li>Tiếp nhận 200 sinh viên thực tập và làm việc mỗi năm tại các chi nhánh của VNPT trên toàn quốc.</li>
    <li>Tài trợ học bổng "VNPT – Chắp cánh ước mơ" trị giá 1 tỷ đồng/năm cho sinh viên nghèo vượt khó.</li>
  </ul>

  <figure>
    <img
      src="/news/vina-ute.png"
      alt="Lễ ký kết thỏa thuận hợp tác giữa HCMUTE và VinaPhone"
      style="width: 100%; height: auto; margin: 24px 0; border-radius: 12px;"
    />
    <figcaption style="text-align: center; font-style: italic; color: #666; margin-top: 8px;">
      PGS.TS. Lê Hiếu Giang (phải) và đại diện lãnh đạo VinaPhone (trái) trao biên bản ghi nhớ hợp tác
    </figcaption>
  </figure>

  <h2>Cơ hội lớn cho sinh viên khối ngành kỹ thuật</h2>
  <p>
    Phát biểu tại buổi lễ, PGS.TS. Lê Hiếu Giang khẳng định: <em>"Sự hợp tác này mang lại lợi ích kép. Nhà trường có môi trường
    thực tập hiện đại cho sinh viên, còn doanh nghiệp sẽ tuyển dụng được nguồn nhân lực chất lượng cao, được đào tạo bài bản,
    sẵn sàng làm việc ngay sau khi tốt nghiệp."</em>
  </p>
`;

export const newsItems: NewsItem[] = [
  {
    id: 101,
    title: "HCMUTE tổ chức Hội thảo Quốc tế về Công nghệ Cơ – Điện tử (ICMT 2025)",
    excerpt: "Hơn 70 chuyên gia quốc tế hội tụ tại TP.HCM để thảo luận về tương lai của AI và Robot trong công nghiệp.",
    date: "2025-11-13",
    category: "Sự kiện",
    image: "/news/hoi-thao-ute.jpg",
    readTime: "5 phút",
    views: 1245,
    tags: ["ICMT-2025", "Quốc tế", "Khoa học"],
    content: icmt2025Content,
  },
  {
    id: 102,
    title: "Tự hào SPK-Fire: Á quân ABU Robocon Châu Á - Thái Bình Dương 2025",
    excerpt: "Đánh bại nhiều đối thủ sừng sỏ, đội tuyển Robot HCMUTE khẳng định vị thế công nghệ Việt Nam trên đấu trường châu lục.",
    date: "2025-08-20",
    category: "Thành tích",
    image: "/news/giai-nha-robot.jpeg",
    readTime: "6 phút",
    views: 3420,
    tags: ["Robocon", "Sinh viên", "Công nghệ"],
    content: robotContent,
  },
  {
    id: 103,
    title: "Dự án Nông nghiệp IoT của sinh viên HCMUTE giành giải Nhất CiC 2025",
    excerpt: "Giải pháp giám sát nông trại thông minh bằng smartphone đã thuyết phục hoàn toàn Ban giám khảo và các nhà đầu tư.",
    date: "2025-09-15",
    category: "Khởi nghiệp",
    image: "/news/Hinh khoi nghiep 11.jpg",
    readTime: "4 phút",
    views: 1890,
    tags: ["Khởi nghiệp", "IoT", "Nông nghiệp 4.0"],
    content: startupContent,
  },
  {
    id: 104,
    title: "HCMUTE ký kết hợp tác chiến lược với VinaPhone về phát triển hạ tầng 5G",
    excerpt: "Sinh viên trường sẽ có cơ hội tiếp cận phòng Lab 5G hiện đại và hàng trăm suất thực tập mỗi năm.",
    date: "2025-10-10",
    category: "Hợp tác",
    image: "/news/vina-ute.png",
    readTime: "3 phút",
    views: 1150,
    tags: ["Hợp tác doanh nghiệp", "5G", "Viễn thông"],
    content: vinaContent,
  },
  {
    id: 105,
    title: "Lễ Khai giảng năm học 2025-2026: Chào đón 5000 tân sinh viên K64",
    excerpt: "Không khí tưng bừng, phấn khởi trong ngày hội lớn nhất năm của thầy và trò trường Đại học Sư phạm Kỹ thuật TP.HCM.",
    date: "2025-09-05",
    category: "Hoạt động",
    image: "/news/hoi-thao-ute.jpg", // Reuse image as placeholder for general event
    readTime: "3 phút",
    views: 5600,
    tags: ["Khai giảng", "K64", "Sinh viên"],
    content: icmt2025Content, // Reuse content for mock
  },
  {
    id: 106,
    title: "Sinh viên HCMUTE đạt giải cao tại kỳ thi Olympic Toán học Toàn quốc",
    excerpt: "Đội tuyển Toán Olympic tiếp tục duy trì chuỗi thành tích ấn tượng với 3 Huy chương Vàng và 2 Huy chương Bạc.",
    date: "2025-04-12",
    category: "Học thuật",
    image: "/news/giai-nha-robot.jpeg", // Reuse
    readTime: "4 phút",
    views: 2100,
    tags: ["Olympic", "Toán học", "Thành tích"],
    content: robotContent, // Reuse
  },
  {
    id: 107,
    title: "Hội nghị Khoa học Trẻ lần thứ XV: Ươm mầm tài năng nghiên cứu",
    excerpt: "Hơn 500 đề tài nghiên cứu của sinh viên được báo cáo, cho thấy sức sáng tạo không giới hạn của tuổi trẻ SPKT.",
    date: "2025-05-20",
    category: "Nghiên cứu",
    image: "/news/Hinh khoi nghiep 11.jpg", // Reuse
    readTime: "5 phút",
    views: 980,
    tags: ["Nghiên cứu", "Sinh viên"],
    content: startupContent, // Reuse
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
