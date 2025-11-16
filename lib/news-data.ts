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

export const newsItems: NewsItem[] = [
  {
    id: 101,
    title: "HCMUTE ký kết hợp tác với Đại học Tokyo - Nhật Bản",
    excerpt:
      "Chương trình hợp tác sẽ tạo cơ hội trao đổi sinh viên, giảng viên và phát triển các dự án nghiên cứu chung trong lĩnh vực kỹ thuật và công nghệ.",
    date: "2024-01-15",
    category: "Hợp tác quốc tế",
    image: "/news/hoi-thao-ute.jpg",
    readTime: "3 phút",
    views: 245,
    tags: ["hợp-tác", "quốc-tế", "tokyo"],
    content: `
      <p>Trường Đại học Sư phạm Kỹ thuật TP.HCM (HCMUTE) vừa ký kết thỏa thuận hợp tác chiến lược với Đại học Tokyo - một trong những trường đại học hàng đầu tại Nhật Bản. Thỏa thuận này đánh dấu một bước tiến quan trọng trong việc mở rộng hợp tác quốc tế của HCMUTE.</p>
      
      <h3>Nội dung hợp tác</h3>
      <p>Chương trình hợp tác sẽ bao gồm các hoạt động chính:</p>
      <ul>
        <li>Trao đổi sinh viên và giảng viên giữa hai trường</li>
        <li>Phát triển các dự án nghiên cứu chung trong lĩnh vực kỹ thuật và công nghệ</li>
        <li>Tổ chức các hội thảo và workshop chung</li>
        <li>Chia sẻ tài nguyên học thuật và nghiên cứu</li>
      </ul>
      
      <h3>Lợi ích cho sinh viên</h3>
      <p>Thỏa thuận này mở ra nhiều cơ hội cho sinh viên HCMUTE, bao gồm cơ hội học tập tại một trong những trường đại học hàng đầu thế giới, tiếp cận với các chương trình nghiên cứu tiên tiến và mở rộng mạng lưới quan hệ quốc tế.</p>
      
      <p>HCMUTE cam kết sẽ tiếp tục mở rộng các chương trình hợp tác quốc tế để mang lại giá trị tốt nhất cho sinh viên và cộng đồng.</p>
    `,
  },
  {
    id: 102,
    title: "Sinh viên HCMUTE đạt giải Nhất cuộc thi Robotics Việt Nam 2024",
    excerpt:
      "Đội thi của Khoa Cơ khí đã xuất sắc giành giải Nhất với dự án robot tự động phân loại rác thải thông minh.",
    date: "2024-01-12",
    category: "Thành tích sinh viên",
    image: "/news/giai-nha-robot.jpeg",
    readTime: "2 phút",
    views: 189,
    tags: ["robotics", "giải-thưởng", "sinh-viên"],
    content: `
      <p>Đội thi của Khoa Cơ khí, Trường Đại học Sư phạm Kỹ thuật TP.HCM đã xuất sắc giành giải Nhất tại cuộc thi Robotics Việt Nam 2024 với dự án robot tự động phân loại rác thải thông minh.</p>
      
      <h3>Dự án đạt giải</h3>
      <p>Dự án robot tự động phân loại rác thải thông minh sử dụng công nghệ AI và machine learning để nhận diện và phân loại các loại rác thải khác nhau một cách tự động. Robot có khả năng phân biệt giữa rác tái chế, rác hữu cơ và rác thải nguy hại.</p>
      
      <h3>Thành tích của đội</h3>
      <p>Đội thi gồm 5 sinh viên năm cuối của Khoa Cơ khí đã làm việc không ngừng nghỉ trong 6 tháng để hoàn thiện dự án. Giải thưởng này là sự ghi nhận xứng đáng cho những nỗ lực và sáng tạo của các bạn sinh viên.</p>
      
      <p>Thành tích này một lần nữa khẳng định chất lượng đào tạo và khả năng sáng tạo của sinh viên HCMUTE trong lĩnh vực công nghệ và kỹ thuật.</p>
    `,
  },
  {
    id: 103,
    title: "Hội thảo quốc tế về AI và IoT trong giáo dục kỹ thuật",
    excerpt:
      "Sự kiện quy tụ hơn 200 chuyên gia trong nước và quốc tế thảo luận về xu hướng ứng dụng công nghệ trong đào tạo kỹ thuật.",
    date: "2024-01-10",
    category: "Sự kiện",
    image: "/news/hoi-thao-ute.jpg",
    readTime: "4 phút",
    views: 312,
    tags: ["ai", "iot", "giáo-dục"],
    content: `
      <p>HCMUTE vừa tổ chức thành công Hội thảo quốc tế về AI và IoT trong giáo dục kỹ thuật, quy tụ hơn 200 chuyên gia, nhà nghiên cứu và giảng viên từ các trường đại học trong nước và quốc tế.</p>
      
      <h3>Nội dung hội thảo</h3>
      <p>Hội thảo tập trung vào các chủ đề chính:</p>
      <ul>
        <li>Ứng dụng AI trong giáo dục kỹ thuật</li>
        <li>Internet of Things (IoT) và tương lai của giáo dục</li>
        <li>Xu hướng công nghệ mới trong đào tạo kỹ thuật</li>
        <li>Thách thức và cơ hội trong chuyển đổi số giáo dục</li>
      </ul>
      
      <h3>Diễn giả nổi bật</h3>
      <p>Hội thảo có sự tham gia của nhiều diễn giả uy tín từ các trường đại học hàng đầu thế giới, chia sẻ những kinh nghiệm và nghiên cứu mới nhất trong lĩnh vực AI và IoT.</p>
      
      <h3>Kết quả</h3>
      <p>Sự kiện đã tạo ra một diễn đàn trao đổi học thuật sôi nổi, mở ra nhiều cơ hội hợp tác nghiên cứu và phát triển giữa các trường đại học. HCMUTE cam kết sẽ tiếp tục tổ chức các sự kiện tương tự để thúc đẩy sự phát triển của giáo dục kỹ thuật.</p>
    `,
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

