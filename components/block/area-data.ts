export type AreaItem = {
  name: string;
  description: string;
  href: string;
  initials?: string;
};

export type AreaGroup = {
  title: string;
  items: AreaItem[];
};

export const AREA_GROUPS: AreaGroup[] = [
  {
    title: "Khoa Viện",
    items: [
      {
        name: "Khoa Cơ khí Chế tạo máy",
        description: "Trọng tâm vào cơ khí, chế tạo máy và công nghệ vật liệu.",
        href: "/khoa/co-khi-che-tao-may",
        initials: "ME",
      },
      {
        name: "Khoa Điện – Điện tử",
        description: "Đào tạo kỹ sư điện, điện tử, viễn thông và tự động hóa.",
        href: "/khoa/dien-dien-tu",
        initials: "DEE",
      },
      {
        name: "Khoa Cơ khí Động lực",
        description: "Đào tạo kỹ sư cơ khí động lực, ô tô và máy móc.",
        href: "/khoa/co-khi-dong-luc",
        initials: "AE",
      },
      {
        name: "Khoa In & Truyền thông",
        description: "Công nghệ in, truyền thông và thiết kế đồ họa.",
        href: "/khoa/in-truyen-thong",
        initials: "PRT",
      },
      {
        name: "Khoa Công nghệ Thông tin",
        description: "Các ngành CNTT, khoa học dữ liệu, trí tuệ nhân tạo.",
        href: "/khoa/cong-nghe-thong-tin",
        initials: "IT",
      },
      {
        name: "Khoa Xây dựng",
        description: "Kỹ thuật xây dựng, kiến trúc và quy hoạch đô thị.",
        href: "/khoa/xay-dung",
        initials: "CE",
      },
      {
        name: "Khoa Thời trang & Du lịch",
        description: "Thiết kế thời trang, quản trị du lịch và khách sạn.",
        href: "/khoa/thoi-trang-du-lich",
        initials: "FT",
      },
      {
        name: "Khoa Kinh tế",
        description: "Quản lý công nghiệp, kinh tế, logistics và quản trị.",
        href: "/khoa/kinh-te",
        initials: "ECO",
      },
      {
        name: "Khoa Công nghệ Hóa học & Thực phẩm",
        description: "Công nghệ hóa học, thực phẩm, vật liệu và môi trường.",
        href: "/khoa/hoa-hoc-thuc-pham",
        initials: "CHE",
      },
      {
        name: "Khoa Ngoại ngữ",
        description: "Đào tạo ngoại ngữ, giao tiếp quốc tế và văn hóa.",
        href: "/khoa/ngoai-ngu",
        initials: "FL",
      },
      {
        name: "Khoa Khoa học Ứng dụng",
        description: "Toán học, vật lý, hóa học ứng dụng và khoa học cơ bản.",
        href: "/khoa/khoa-hoc-ung-dung",
        initials: "AS",
      },
      {
        name: "Viện Sư phạm Kỹ thuật",
        description: "Đào tạo giáo viên kỹ thuật và nghiên cứu giáo dục.",
        href: "/vien/su-pham-ky-thuat",
        initials: "ITE",
      },
    ],
  },
  {
    title: "Phòng Ban",
    items: [
      {
        name: "Phòng Đào tạo",
        description: "Quản lý chương trình đào tạo, lịch học và hồ sơ học vụ.",
        href: "/phong/dao-tao",
        initials: "DT",
      },
      {
        name: "Phòng Hợp tác và Phát triển Đào tạo",
        description:
          "Hợp tác đào tạo, phát triển chương trình và liên kết giáo dục.",
        href: "/phong/hop-tac-phat-trien-dao-tao",
        initials: "HTDT",
      },
      {
        name: "Phòng Khoa học Công nghệ",
        description: "Quản lý hoạt động nghiên cứu khoa học và công nghệ.",
        href: "/phong/khoa-hoc-cong-nghe",
        initials: "KHCN",
      },
      {
        name: "Phòng Tổ chức Hành chính",
        description: "Quản lý tổ chức, hành chính và nhân sự.",
        href: "/phong/to-chuc-hanh-chinh",
        initials: "TCHC",
      },
      {
        name: "Phòng Kế hoạch Tài chính",
        description: "Quản lý ngân sách, kế hoạch và tài chính của trường.",
        href: "/phong/ke-hoach-tai-chinh",
        initials: "KHTC",
      },
      {
        name: "Phòng Tuyển sinh và Công tác Sinh viên",
        description: "Tuyển sinh, hỗ trợ sinh viên và hoạt động đoàn thể.",
        href: "/phong/tuyen-sinh-cong-tac-sinh-vien",
        initials: "TSCTSV",
      },
      {
        name: "Phòng Khảo thí và Đảm bảo Chất lượng",
        description: "Tổ chức khảo thí và đảm bảo chất lượng đào tạo.",
        href: "/phong/khao-thi-dam-bao-chat-luong",
        initials: "KTDB",
      },
      {
        name: "Phòng Quan hệ Quốc tế",
        description:
          "Quan hệ đối ngoại, trao đổi sinh viên và hợp tác quốc tế.",
        href: "/phong/quan-he-quoc-te",
        initials: "QHQT",
      },
      {
        name: "Phòng Quan hệ Doanh nghiệp",
        description: "Kết nối doanh nghiệp, hợp tác và phát triển.",
        href: "/phong/quan-he-doanh-nghiep",
        initials: "QHDN",
      },
      {
        name: "Phòng Thiết bị – Vật tư",
        description: "Quản lý thiết bị, vật tư và tài sản của trường.",
        href: "/phong/thiet-bi-vat-tu",
        initials: "TBVT",
      },
      {
        name: "Phòng Quản trị Cơ sở Vật chất",
        description: "Quản lý và bảo trì cơ sở vật chất, hạ tầng.",
        href: "/phong/quan-tri-co-so-vat-chat",
        initials: "QTCS",
      },
      {
        name: "Phòng Truyền thông",
        description: "Truyền thông, quảng bá hình ảnh và thông tin.",
        href: "/phong/truyen-thong",
        initials: "TT",
      },
      {
        name: "Phòng Thanh tra – Pháp chế",
        description: "Thanh tra, kiểm tra và đảm bảo pháp chế.",
        href: "/phong/thanh-tra-phap-che",
        initials: "TTPC",
      },
      {
        name: "Ban Quản lý KTX",
        description: "Quản lý ký túc xá và dịch vụ sinh viên.",
        href: "/ban/quan-ly-ktx",
        initials: "QLKTX",
      },
      {
        name: "Thư viện",
        description: "Quản lý tài liệu, sách và không gian học tập.",
        href: "/thu-vien",
        initials: "TV",
      },
      {
        name: "Trạm Y tế",
        description: "Chăm sóc sức khỏe và y tế cho sinh viên, cán bộ.",
        href: "/tram-y-te",
        initials: "YT",
      },
      {
        name: "Ban An ninh Trật tự",
        description: "Đảm bảo an ninh, trật tự và an toàn trong trường.",
        href: "/ban/an-ninh-trat-tu",
        initials: "ANTT",
      },
    ],
  },
  {
    title: "Trung Tâm",
    items: [
      {
        name: "Trung tâm Tin học",
        description: "Đào tạo và hỗ trợ công nghệ thông tin, tin học.",
        href: "/trung-tam/tin-hoc",
        initials: "TH",
      },
      {
        name: "Trung tâm Kỹ thuật Tổng hợp",
        description: "Đào tạo kỹ thuật tổng hợp và thực hành.",
        href: "/trung-tam/ky-thuat-tong-hop",
        initials: "KTT",
      },
      {
        name: "Trung tâm Ngoại ngữ",
        description:
          "Đào tạo ngoại ngữ, chứng chỉ quốc tế và giao lưu văn hóa.",
        href: "/trung-tam/ngoai-ngu",
        initials: "NN",
      },
      {
        name: "Trung tâm Phát triển Ngôn ngữ",
        description: "Phát triển kỹ năng ngôn ngữ và giao tiếp.",
        href: "/trung-tam/phat-trien-ngon-ngu",
        initials: "PTNN",
      },
      {
        name: "Trung tâm Nghiên cứu và Ứng dụng Kỹ thuật Xây dựng",
        description: "Nghiên cứu và ứng dụng kỹ thuật xây dựng.",
        href: "/trung-tam/nghien-cuu-ung-dung-ky-thuat-xay-dung",
        initials: "NCUD",
      },
      {
        name: "Trung tâm Việt – Đức",
        description: "Hợp tác và đào tạo theo mô hình Việt – Đức.",
        href: "/trung-tam/viet-duc",
        initials: "VD",
      },
      {
        name: "Trung tâm Hướng nghiệp và Đào tạo Việt – Nhật",
        description: "Hướng nghiệp và đào tạo theo mô hình Việt – Nhật.",
        href: "/trung-tam/huong-nghiep-viet-nhat",
        initials: "HNVN",
      },
      {
        name: "Trung tâm Kỹ thuật và Công nghệ Môi trường",
        description: "Nghiên cứu và ứng dụng công nghệ môi trường.",
        href: "/trung-tam/ky-thuat-cong-nghe-moi-truong",
        initials: "KTCNMT",
      },
      {
        name: "Trung tâm Đào tạo Ngắn hạn",
        description: "Đào tạo ngắn hạn, bồi dưỡng chuyên môn và chứng chỉ.",
        href: "/trung-tam/dao-tao-ngan-han",
        initials: "DTNH",
      },
      {
        name: "Trung tâm Tư vấn Thiết kế và Chế tạo Thiết bị Công nghiệp",
        description: "Tư vấn, thiết kế và chế tạo thiết bị công nghiệp.",
        href: "/trung-tam/tu-van-thiet-ke-che-tao",
        initials: "TVTK",
      },
      {
        name: "Trung tâm Nghiên cứu và Chuyển giao Công nghệ",
        description:
          "Nghiên cứu khoa học, chuyển giao công nghệ và đổi mới sáng tạo.",
        href: "/trung-tam/nghien-cuu-chuyen-giao-cong-nghe",
        initials: "NCCG",
      },
      {
        name: "Trường Trung học Kỹ thuật Thực hành",
        description: "Đào tạo trung học kỹ thuật thực hành.",
        href: "/truong/trung-hoc-ky-thuat-thuc-hanh",
        initials: "THKT",
      },
      {
        name: "Trung tâm Hàn ngữ Học đường A-UTE",
        description: "Đào tạo tiếng Hàn và văn hóa Hàn Quốc.",
        href: "/trung-tam/han-ngu-a-ute",
        initials: "HN",
      },
      {
        name: "Trung tâm Nghiên cứu Năng lượng Tái tạo",
        description: "Nghiên cứu và phát triển năng lượng tái tạo.",
        href: "/trung-tam/nghien-cuu-nang-luong-tai-tao",
        initials: "NCNL",
      },
      {
        name: "Trung tâm Robot Thông minh",
        description: "Nghiên cứu và phát triển robot thông minh.",
        href: "/trung-tam/robot-thong-minh",
        initials: "RTM",
      },
      {
        name: "Trung tâm Dạy học số",
        description: "Phát triển và ứng dụng công nghệ dạy học số.",
        href: "/trung-tam/day-hoc-so",
        initials: "DHS",
      },
      {
        name: "Trung tâm Sáng tạo Khởi nghiệp và Chuyển giao Công nghệ",
        description: "Hỗ trợ khởi nghiệp, sáng tạo và chuyển giao công nghệ.",
        href: "/trung-tam/sang-tao-khoi-nghiep",
        initials: "STKN",
      },
      {
        name: "Trung tâm Thông tin – Máy tính",
        description: "Quản lý thông tin, máy tính và hệ thống IT.",
        href: "/trung-tam/thong-tin-may-tinh",
        initials: "TTMT",
      },
      {
        name: "Trung tâm Công nghệ Phần mềm",
        description: "Phát triển và ứng dụng công nghệ phần mềm.",
        href: "/trung-tam/cong-nghe-phan-mem",
        initials: "CNPM",
      },
      {
        name: "Trung tâm Giáo dục Thể chất",
        description: "Đào tạo và phát triển thể chất, thể thao.",
        href: "/trung-tam/giao-duc-the-chat",
        initials: "GDTC",
      },
      {
        name: "Trung tâm Giáo dục Quốc phòng và An ninh",
        description: "Đào tạo quốc phòng và an ninh cho sinh viên.",
        href: "/trung-tam/giao-duc-quoc-phong-an-ninh",
        initials: "GDQP",
      },
    ],
  },
  {
    title: "Tổ Chức Đoàn Thể",
    items: [
      {
        name: "Đoàn Thanh niên",
        description:
          "Tổ chức các hoạt động thanh niên, tình nguyện và phong trào.",
        href: "/doan-thanh-nien",
        initials: "YOUTH",
      },
      {
        name: "Hội Sinh viên",
        description:
          "Đại diện quyền lợi sinh viên, tổ chức hoạt động và sự kiện.",
        href: "/hoi-sinh-vien",
        initials: "SVU",
      },
      {
        name: "Công Đoàn",
        description: "Bảo vệ quyền lợi cán bộ, tổ chức hoạt động đoàn thể.",
        href: "/cong-doan",
        initials: "UNION",
      },
    ],
  },
];
