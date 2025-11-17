type DropdownColumn = {
  title: string;
  items: Array<{
    title: string;
    href: string;
    description?: string;
    bold?: boolean;
  }>;
};

type NavItem = {
  label: string;
  href: string;
  dropdown?: {
    columns: DropdownColumn[];
  };
};

export const NAVIGATION = {
  left: [
    {
      label: "Về HCMUTE",
      href: "/ve-hcmute",
      dropdown: {
        columns: [
          {
            title: "Khám Phá HCMUTE",
            items: [
              {
                title: "Giới thiệu chung",
                href: "/ve-hcmute/gioi-thieu",
                description:
                  "Tổng quan về lịch sử, vai trò và giá trị cốt lõi của Trường Đại học Sư phạm Kỹ thuật TP.HCM.",
              },
              {
                title: "Tầm nhìn & Sứ mệnh",
                href: "/ve-hcmute/tam-nhin-su-menh",
                description:
                  "Định hướng dài hạn, mục tiêu chiến lược và cam kết đào tạo nguồn nhân lực chất lượng cao.",
              },
              {
                title: "Cơ cấu tổ chức",
                href: "/ve-hcmute/co-cau-to-chuc",
                description:
                  "Thông tin về hệ thống quản lý, các khoa, viện và đơn vị trực thuộc nhà trường.",
              },
              {
                title: "Ban lãnh đạo",
                href: "/ve-hcmute/ban-lanh-dao",
                description:
                  "Đội ngũ lãnh đạo chủ chốt dẫn dắt nhà trường trong giai đoạn phát triển mới.",
              },
            ],
          },
          {
            title: "Tìm Hiểu Thêm",
            items: [
              {
                title: "Lịch sử phát triển",
                href: "/ve-hcmute/lich-su",
                description:
                  "Các dấu mốc đáng nhớ trong hành trình hơn 60 năm xây dựng và trưởng thành của HCMUTE.",
              },
              {
                title: "Thành tựu",
                href: "/ve-hcmute/thanh-tuu",
                description:
                  "Những ghi nhận nổi bật về nghiên cứu khoa học, đào tạo và hợp tác quốc tế.",
              },
              {
                title: "Đối tác",
                href: "/ve-hcmute/doi-tac",
                description:
                  "Mạng lưới đối tác chiến lược trong và ngoài nước cùng đồng hành cùng nhà trường.",
              },
            ],
          },
        ],
      },
    },
    {
      label: "Sinh viên",
      href: "/sinh-vien",
      dropdown: {
        columns: [
          {
            title: "Thông Tin Sinh Viên",
            items: [
              {
                title: "Thông tin sinh viên",
                href: "/sinh-vien/thong-tin",
                description:
                  "Cổng thông tin tổng hợp về lịch học, điểm danh và các dịch vụ hỗ trợ học vụ.",
              },
              {
                title: "Học bổng",
                href: "/sinh-vien/hoc-bong",
                description:
                  "Danh mục học bổng khuyến khích học tập và hỗ trợ tài chính theo từng chương trình.",
              },
              {
                title: "Phục vụ cộng đồng",
                href: "/sinh-vien/hoat-dong",
                description:
                  "Các câu lạc bộ, sự kiện và phong trào giúp sinh viên phát triển kỹ năng mềm.",
              },
              {
                title: "Việc làm",
                href: "/sinh-vien/viec-lam",
                description:
                  "Thông tin tuyển dụng, thực tập và cơ hội nghề nghiệp dành cho sinh viên HCMUTE.",
              },
            ],
          },
          {
            title: "Dịch Vụ",
            items: [
              {
                title: "Thư viện",
                href: "/sinh-vien/thu-vien",
                description:
                  "Nguồn tài nguyên số và không gian học tập hiện đại phục vụ sinh viên.",
              },
              {
                title: "Phòng học",
                href: "/sinh-vien/phong-hoc",
                description:
                  "Lịch sử dụng phòng học, phòng thí nghiệm và các tiện ích đặt lịch.",
              },
              {
                title: "Hỗ trợ học tập",
                href: "/sinh-vien/ho-tro",
                description:
                  "Dịch vụ tư vấn học tập, hỗ trợ tâm lý và lộ trình học tập cá nhân hóa.",
              },
            ],
          },
        ],
      },
    },
    {
      label: "CBVC",
      href: "/cbvc",
      dropdown: {
        columns: [
          {
            title: "Thông Tin CBVC",
            items: [
              {
                title: "Thông tin CBVC",
                href: "/cbvc/thong-tin",
                description:
                  "Tra cứu hồ sơ, thông báo và các biểu mẫu dành cho cán bộ, viên chức.",
              },
              {
                title: "Đào tạo & Phát triển",
                href: "/cbvc/dao-tao",
                description:
                  "Chương trình bồi dưỡng chuyên môn, kỹ năng và kế hoạch phát triển nghề nghiệp.",
              },
              {
                title: "Chế độ chính sách",
                href: "/cbvc/che-do-chinh-sach",
                description:
                  "Thông tin về lương, phúc lợi, bảo hiểm và các chính sách hỗ trợ đội ngũ CBVC.",
              },
            ],
          },
        ],
      },
    },
    {
      label: "Cựu sinh viên",
      href: "/cuu-sinh-vien",
    },
    {
      label: "Nghiên cứu",
      href: "/nghien-cuu",
      dropdown: {
        columns: [
          {
            title: "Nghiên Cứu Khoa Học",
            items: [
              {
                title: "Dự án nghiên cứu",
                href: "/nghien-cuu/du-an",
                description:
                  "Các đề tài đang triển khai thuộc nhiều lĩnh vực công nghệ và kỹ thuật.",
              },
              {
                title: "Công bố khoa học",
                href: "/nghien-cuu/cong-bo",
                description:
                  "Danh mục bài báo, tạp chí và sáng chế mới nhất của giảng viên, sinh viên.",
              },
              {
                title: "Hội thảo khoa học",
                href: "/nghien-cuu/hoi-thao",
                description:
                  "Lịch hội thảo, tọa đàm và sự kiện học thuật tại HCMUTE và đối tác.",
              },
            ],
          },
          {
            title: "Hỗ Trợ Nghiên Cứu",
            items: [
              {
                title: "Quỹ nghiên cứu",
                href: "/nghien-cuu/quy",
                description:
                  "Thông tin nguồn quỹ hỗ trợ và hướng dẫn đăng ký tài trợ nghiên cứu.",
              },
              {
                title: "Phòng thí nghiệm",
                href: "/nghien-cuu/phong-thi-nghiem",
                description:
                  "Danh mục phòng thí nghiệm, thiết bị và quy trình đặt lịch sử dụng.",
              },
            ],
          },
        ],
      },
    },
  ] as NavItem[],
  right: [
    {
      label: "Hợp tác",
      href: "/hop-tac",
      dropdown: {
        columns: [
          {
            title: "Hợp Tác",
            items: [
              {
                title: "Hợp tác quốc tế",
                href: "/hop-tac/quoc-te",
                description:
                  "Chương trình hợp tác với các trường đại học, tổ chức quốc tế.",
              },
              {
                title: "Hợp tác doanh nghiệp",
                href: "/hop-tac/doanh-nghiep",
                description:
                  "Các dự án phối hợp doanh nghiệp trong đào tạo, nghiên cứu và chuyển giao.",
              },
              {
                title: "Trao đổi sinh viên",
                href: "/hop-tac/trao-doi",
                description:
                  "Cơ hội học tập, thực tập và giao lưu văn hóa tại các đối tác toàn cầu.",
              },
            ],
          },
        ],
      },
    },
    {
      label: "Tuyển sinh",
      href: "/tuyen-sinh",
      dropdown: {
        columns: [
          {
            title: "Tuyển Sinh",
            items: [
              {
                title: "Tuyển sinh đại học",
                href: "/tuyen-sinh/dai-hoc",
                description:
                  "Thông tin ngành học, phương thức xét tuyển và chỉ tiêu năm 2025.",
              },
              {
                title: "Tuyển sinh thạc sĩ",
                href: "/tuyen-sinh/thac-si",
                description:
                  "Chương trình đào tạo sau đại học và yêu cầu xét tuyển từng chuyên ngành.",
              },
              {
                title: "Hướng dẫn đăng ký",
                href: "/tuyen-sinh/huong-dan",
                description:
                  "Quy trình đăng ký trực tuyến, hồ sơ cần chuẩn bị và mốc thời gian quan trọng.",
              },
              {
                title: "Điểm chuẩn",
                href: "/tuyen-sinh/diem-chuan",
                description:
                  "Tổng hợp điểm chuẩn các năm để thí sinh tham khảo và lựa chọn phù hợp.",
              },
            ],
          },
        ],
      },
    },
    {
      label: "Tin tức & Sự kiện",
      href: "/tin-tuc",
    },
  ] as NavItem[],
};

type FeatureContent = {
  image?: string;
  badge: string;
  title: string;
  description: string;
  href: string;
  cta: string;
};

export const FEATURE_CONTENT: Record<string, FeatureContent> = {
  "Về HCMUTE": {
    image: "/carousel/1.jpg",
    badge: "Khám phá HCMUTE",
    title: "Hành trình hơn 60 năm phát triển",
    description:
      "Từ một trường kỹ thuật nhỏ, HCMUTE trở thành đại học công nghệ hàng đầu với hệ sinh thái nghiên cứu – đào tạo toàn diện.",
    href: "/ve-hcmute/gioi-thieu",
    cta: "Khám phá câu chuyện",
  },
  "Sinh viên": {
    image: "/carousel/2.jpg",
    badge: "Đời sống sinh viên",
    title: "Cộng đồng năng động, sáng tạo",
    description:
      "Tham gia hơn 40 câu lạc bộ, chương trình trao đổi quốc tế và hoạt động phát triển kỹ năng dành cho sinh viên.",
    href: "/sinh-vien/hoat-dong",
    cta: "Xem hoạt động nổi bật",
  },
  CBVC: {
    image: "/news/Hinh khoi nghiep 11.jpg",
    badge: "Đồng hành cùng CBVC",
    title: "Môi trường làm việc chuyên nghiệp",
    description:
      "Cập nhật chính sách đào tạo, phát triển chuyên môn và phúc lợi dành cho cán bộ, giảng viên, nhân viên.",
    href: "/cbvc/dao-tao",
    cta: "Xem chương trình hỗ trợ",
  },

  "Khu vực": {
    image: "/news/hoi-thao-ute.jpg",
    badge: "Đơn vị HCMUTE",
    title: "Khám phá các đơn vị trực thuộc",
    description:
      "Tìm hiểu về các khoa, viện, phòng ban, trung tâm và tổ chức đoàn thể tại HCMUTE.",
    href: "/khu-vuc",
    cta: "Xem tất cả đơn vị",
  },
};
