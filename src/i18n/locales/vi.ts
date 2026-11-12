import type { Dictionary } from './en'

const vi: Dictionary = {
  meta: {
    tagline: 'Dịch vụ khám chữa bệnh tại Trung Quốc cho bệnh nhân quốc tế',
    description: 'YiLu Health hỗ trợ bệnh nhân quốc tế đến các bệnh viện hàng đầu Trung Quốc: đánh giá hồ sơ, đặt lịch khám, giấy tờ xin thị thực, phiên dịch, hỗ trợ thanh toán và theo dõi sau khi về nước.',
  },
  nav: {
    treatments: 'Dịch vụ điều trị',
    hospitals: 'Bệnh viện',
    visa: 'Thị thực & nhập cảnh',
    costs: 'Chi phí',
    faq: 'Hỏi đáp',
    contact: 'Liên hệ',
    cta: 'Đánh giá miễn phí',
    menu: 'Menu',
    close: 'Đóng',
    language: 'Ngôn ngữ',
    skip: 'Chuyển đến nội dung',
  },
  common: {
    reviewed: 'Thông tin được rà soát lần cuối: {date}',
    officialSources: 'Nguồn chính thức',
    typicalStay: 'Thời gian lưu trú thường gặp',
  },
  home: {
    hero: {
      eyebrow: 'Khám chữa bệnh tại Trung Quốc',
      title: 'Bệnh viện hàng đầu Trung Quốc, trong tầm tay bạn.',
      subtitle: 'Chúng tôi giúp bệnh nhân quốc tế tìm đúng bệnh viện tại Trung Quốc — đánh giá hồ sơ, sắp xếp lịch khám, giấy tờ xin thị thực, phiên dịch và thanh toán, đồng hành cùng bạn đến tận giai đoạn theo dõi sau khi về nước.',
      primary: 'Bắt đầu đánh giá miễn phí',
      secondary: 'Xem quy trình',
      notes: ['Đánh giá ban đầu miễn phí', 'Không ràng buộc', 'Bảo mật'],
      glyphs: { yi: 'y học', lu: 'con đường' },
    },
    stats: {
      items: [
        {
          value: '1,28 triệu',
          label: 'lượt bệnh nhân quốc tế đến các bệnh viện lớn của Trung Quốc năm 2025',
        },
        { value: '+73,6%', label: 'mức tăng số lượt khám này trong ba năm' },
        {
          value: '79',
          label: 'quốc gia được miễn thị thực nhập cảnh Trung Quốc đại lục (tháng 2/2026)',
        },
        { value: '240 giờ', label: 'quá cảnh miễn thị thực cho công dân 57 quốc gia' },
      ],
      source: 'Nguồn: Ủy ban Y tế Quốc gia Trung Quốc; Bộ Ngoại giao Trung Quốc; Cục Quản lý Xuất nhập cảnh Quốc gia Trung Quốc.',
    },
    why: {
      title: 'Vì sao bệnh nhân chọn Trung Quốc',
      subtitle: 'Không chỉ vì chi phí: còn là tốc độ, bề dày kinh nghiệm và những liệu pháp khó tiếp cận ở nơi khác.',
      items: [
        {
          title: 'Thời gian chờ ngắn',
          body: 'Lịch khám chuyên khoa, chẩn đoán hình ảnh và lịch mổ thường được sắp xếp trong vài ngày đến vài tuần, thay vì nhiều tháng.',
        },
        {
          title: 'Liệu pháp tiên tiến',
          body: 'Liệu pháp tế bào CAR-T, xạ trị proton và ion nặng, phẫu thuật có robot hỗ trợ cùng ngày càng nhiều thuốc mới.',
        },
        {
          title: 'Kinh nghiệm từ số lượng ca lớn',
          body: 'Các bệnh viện đại học lớn điều trị ca phức tạp mỗi ngày, với đội ngũ đa chuyên khoa và khoa quốc tế riêng.',
        },
        {
          title: 'Chi phí rõ ràng, cạnh tranh',
          body: 'Giá dịch vụ tự chi trả thường chỉ bằng một phần so với ở Mỹ, và bạn nhận được dự toán bằng văn bản trước khi lên đường.',
        },
        {
          title: 'Y học cổ truyền Trung Quốc ngay tại nơi khởi nguồn',
          body: 'Châm cứu, thuốc thảo dược và phục hồi chức năng tại các bệnh viện y học cổ truyền hàng đầu, kết hợp chẩn đoán hiện đại.',
        },
        {
          title: 'Nhập cảnh dễ dàng hơn',
          body: 'Miễn thị thực cho nhiều loại hộ chiếu, quá cảnh miễn thị thực 240 giờ và tờ khai nhập cảnh trực tuyến giúp các chuyến đi chữa bệnh ngắn ngày trở nên đơn giản.',
        },
      ],
    },
    treatments: {
      title: 'Bạn có thể đến để làm gì',
      subtitle: 'Từ khám sức khỏe tổng quát trong một ngày đến điều trị ung thư phức tạp.',
      all: 'Xem tất cả dịch vụ',
    },
    process: {
      title: 'Quy trình',
      subtitle: 'Một điều phối viên duy nhất, từ tin nhắn đầu tiên đến khi theo dõi tại nhà.',
      steps: [
        {
          when: 'Ngày 1',
          title: 'Chia sẻ trường hợp của bạn',
          body: 'Gửi chẩn đoán, kết quả xét nghiệm và mong muốn của bạn qua biểu mẫu. Không cần thanh toán.',
        },
        {
          when: 'Ngày 2–5',
          title: 'Nhận phương án và dự toán',
          body: 'Chúng tôi trao đổi với các bệnh viện phù hợp rồi gửi bạn ý kiến bác sĩ chuyên khoa, kế hoạch đề xuất và dự toán chi phí bằng văn bản.',
        },
        {
          when: 'Tuần 2',
          title: 'Chuẩn bị chuyến đi',
          body: 'Chúng tôi đặt lịch khám, xin thư của bệnh viện để làm thị thực nếu cần, đồng thời sắp xếp chỗ ở và đón sân bay.',
        },
        {
          when: 'Khi đến nơi',
          title: 'Điều trị có phiên dịch',
          body: 'Điều phối viên và phiên dịch y khoa đi cùng bạn khi đăng ký, khám, làm xét nghiệm và thanh toán.',
        },
        {
          when: 'Sau đó',
          title: 'Theo dõi tại nhà',
          body: 'Bạn ra về với hồ sơ đã dịch và kế hoạch theo dõi; chúng tôi sắp xếp các buổi tái khám từ xa với bác sĩ của bạn.',
        },
      ],
      note: 'Lộ trình mang tính minh họa — mỗi trường hợp một khác.',
    },
    destinations: {
      title: 'Bạn có thể điều trị ở đâu',
      subtitle: 'Chúng tôi giúp bạn chọn trong các trung tâm y tế lớn của Trung Quốc dựa trên bệnh tình của bạn, chứ không theo một danh sách có sẵn.',
      cta: 'Xem bệnh viện và thành phố',
    },
    entry: {
      title: 'Nhập cảnh đơn giản hơn bạn nghĩ',
      subtitle: 'Từ năm 2024, Trung Quốc nới lỏng nhập cảnh rất nhanh. Lựa chọn phù hợp tùy vào hộ chiếu và kế hoạch điều trị của bạn.',
      items: [
        {
          title: 'Miễn thị thực 30 ngày',
          body: 'Dành cho hộ chiếu phổ thông của khoảng 50 quốc gia, cùng các nước có thỏa thuận miễn thị thực song phương.',
        },
        {
          title: 'Hải Nam: được phép nhập cảnh để chữa bệnh',
          body: 'Công dân khoảng 60 quốc gia được vào Hải Nam không cần thị thực, và chữa bệnh là mục đích được cho phép.',
        },
        {
          title: 'Thị thực S2 cho điều trị theo kế hoạch',
          body: 'Với điều trị dài ngày hoặc theo kế hoạch, chúng tôi hỗ trợ bạn xin thư của bệnh viện cần cho hồ sơ xin thị thực.',
        },
      ],
      cta: 'Đọc hướng dẫn thị thực & nhập cảnh',
    },
    cta: {
      title: 'Chưa biết bắt đầu từ đâu?',
      body: 'Hãy cho chúng tôi biết tình hình của bạn. Chúng tôi sẽ phản hồi với các phương án khả thi, thời gian dự kiến và dự toán — miễn phí và không ràng buộc.',
      button: 'Bắt đầu đánh giá miễn phí',
    },
  },
  treatments: {
    title: 'Dịch vụ điều trị',
    intro: 'Đây là những dịch vụ bệnh nhân quốc tế hỏi chúng tôi nhiều nhất. Nếu nhu cầu của bạn không có trong danh sách, hãy gửi hồ sơ — chúng tôi sẽ nói thẳng liệu Trung Quốc có phải lựa chọn phù hợp hay không.',
    popular: 'Thường được yêu cầu',
    items: {
      checkup: {
        name: 'Khám sức khỏe tổng quát & tầm soát',
        summary: 'Chương trình toàn diện trong một đến hai ngày, chẩn đoán hình ảnh và nội soi ngay tại chỗ, có bác sĩ chuyên khoa giải thích kết quả.',
        points: [
          'Gói khám sức khỏe cao cấp',
          'MRI, CT liều thấp và PET-CT',
          'Nội soi dạ dày và đại tràng không đau',
          'Tầm soát tim mạch và ung thư',
        ],
        stay: '1–3 ngày',
      },
      oncology: {
        name: 'Điều trị ung thư',
        summary: 'Các trung tâm ung bướu đa chuyên khoa với số ca lớn, xạ trị hiện đại và khả năng tiếp cận các liệu pháp tế bào, thuốc nhắm trúng đích mới được phê duyệt.',
        points: [
          'Liệu pháp tế bào CAR-T cho ung thư máu',
          'Xạ trị proton và ion nặng (ion carbon)',
          'Điều trị nhắm trúng đích và miễn dịch',
          'Phẫu thuật ít xâm lấn và có robot hỗ trợ',
        ],
        stay: '2–8 tuần, tùy phác đồ',
      },
      tcm: {
        name: 'Y học cổ truyền Trung Quốc',
        summary: 'Chương trình kết hợp Đông – Tây y tại các bệnh viện y học cổ truyền hàng đầu cho đau mạn tính, phục hồi và bệnh mạn tính, đi kèm chẩn đoán hiện đại.',
        points: [
          'Châm cứu và cứu ngải',
          'Xoa bóp trị liệu tuina',
          'Thuốc thảo dược kê theo từng người',
          'Phục hồi chức năng sau đột quỵ hoặc phẫu thuật',
        ],
        stay: '1–4 tuần',
      },
      dental: {
        name: 'Nha khoa',
        summary: 'Cấy ghép implant, chỉnh nha và phục hình toàn hàm với các hệ thống implant quốc tế và kế hoạch điều trị kỹ thuật số.',
        points: [
          'Cấy ghép implant',
          'Mão răng và mặt dán sứ',
          'Chỉnh nha và khay trong suốt',
          'Phục hình toàn hàm',
        ],
        stay: '3–10 ngày; cấy implant có thể cần hai lần đi',
      },
      eye: {
        name: 'Nhãn khoa',
        summary: 'Các trung tâm mắt có số ca phẫu thuật lớn: phẫu thuật khúc xạ bằng laser, phẫu thuật đục thủy tinh thể và khám võng mạc.',
        points: [
          'Phẫu thuật khúc xạ SMILE và LASIK',
          'Đặt kính nội nhãn ICL',
          'Phẫu thuật đục thủy tinh thể với thủy tinh thể nhân tạo cao cấp',
          'Khám võng mạc và glôcôm',
        ],
        stay: '3–7 ngày',
      },
      ortho: {
        name: 'Chấn thương chỉnh hình & cột sống',
        summary: 'Thay khớp, phẫu thuật cột sống và y học thể thao, ngày càng nhiều ca có robot hỗ trợ, tiếp nối bằng chương trình phục hồi chức năng bài bản.',
        points: [
          'Thay khớp háng và khớp gối',
          'Phẫu thuật cột sống ít xâm lấn',
          'Nội soi khớp và chấn thương thể thao',
          'Chương trình phục hồi chức năng',
        ],
        stay: '2–4 tuần',
      },
      cardio: {
        name: 'Tim mạch',
        summary: 'Các trung tâm tim mạch cấp quốc gia thực hiện can thiệp và phẫu thuật cho bệnh tim phức tạp.',
        points: [
          'Chụp mạch vành và đặt stent',
          'Sửa và thay van tim, bao gồm TAVI',
          'Triệt đốt rối loạn nhịp',
          'Phẫu thuật bắc cầu và bệnh tim cấu trúc',
        ],
        stay: '1–3 tuần',
      },
      remote: {
        name: 'Hội chẩn từ xa',
        summary: 'Trước khi quyết định lên đường, một bác sĩ chuyên khoa Trung Quốc xem hồ sơ và phim chụp của bạn, rồi trao đổi các lựa chọn qua cuộc gọi video.',
        points: [
          'Xem xét kết quả và phim chụp',
          'Tư vấn qua video có phiên dịch',
          'Bản tóm tắt bằng văn bản đã dịch',
          'Phương án điều trị và dự toán chi phí',
        ],
        stay: 'Không cần đi lại',
      },
    },
    notOffered: {
      title: 'Những gì chúng tôi không thu xếp',
      body: 'Chúng tôi không thu xếp ghép tạng, mang thai hộ hay các liệu pháp chưa được cơ quan quản lý Trung Quốc phê duyệt. Trung Quốc cấm du lịch ghép tạng, và chúng tôi chỉ làm việc với các cơ sở y tế được cấp phép.',
    },
  },
  hospitals: {
    title: 'Bệnh viện và điểm đến',
    intro: 'Những bệnh viện mạnh nhất Trung Quốc tập trung ở một số thành phố. Dưới đây là các cơ sở nổi tiếng mà bệnh nhân quốc tế thường hỏi, xếp theo thành phố.',
    disclaimer: 'Danh sách bệnh viện chỉ nhằm cung cấp thông tin. Việc nêu tên không hàm ý quan hệ đối tác hay bảo chứng, và dịch vụ dành cho bệnh nhân quốc tế ở mỗi bệnh viện một khác. Với từng trường hợp, chúng tôi xác nhận với bệnh viện về khả năng tiếp nhận trước khi bạn lên đường.',
    types: {
      public: 'Bệnh viện công',
      private: 'Bệnh viện tư',
      zone: 'Bệnh viện trong khu thí điểm',
    },
    tags: {
      general: 'Ca phức tạp & điều trị đa chuyên khoa',
      oncology: 'Ung bướu',
      proton: 'Xạ trị proton & ion nặng',
      hematology: 'Huyết học & liệu pháp tế bào',
      cardio: 'Tim mạch',
      neuro: 'Thần kinh & phẫu thuật thần kinh',
      ortho: 'Chấn thương chỉnh hình',
      eye: 'Nhãn khoa',
      dental: 'Nha khoa',
      tcm: 'Y học cổ truyền Trung Quốc',
      surgery: 'Phẫu thuật ít xâm lấn',
      innovative: 'Thuốc & thiết bị đã được phê duyệt ở nước ngoài',
      checkup: 'Khám tổng quát',
    },
    cities: {
      beijing: {
        name: 'Bắc Kinh',
        blurb: 'Thủ đô tập trung nhiều bệnh viện tuyến quốc gia hàng đầu Trung Quốc — lựa chọn số một cho chẩn đoán phức tạp, bệnh tim, thần kinh và ung thư.',
      },
      shanghai: {
        name: 'Thượng Hải',
        blurb: 'Thành phố quốc tế nhất Trung Quốc, có hơn 20 bệnh viện công tham gia chương trình thí điểm du lịch y tế quốc tế cùng các bệnh viện tư mạnh. Nổi tiếng về ung bướu và xạ trị proton, ion nặng.',
      },
      guangzhou: {
        name: 'Quảng Châu',
        blurb: 'Trung tâm y tế phía Nam, gần Hồng Kông và Đông Nam Á, nổi bật về điều trị ung thư, nhãn khoa và y học cổ truyền Trung Quốc.',
      },
      shenzhen: {
        name: 'Thâm Quyến',
        blurb: 'Nằm sát Hồng Kông, có các bệnh viện hiện đại vận hành theo chuẩn quốc tế và qua lại biên giới thuận tiện.',
      },
      hangzhou: {
        name: 'Hàng Châu',
        blurb: 'Nơi đặt các bệnh viện thực hành của Đại học Chiết Giang, mạnh về phẫu thuật gan mật và phẫu thuật ít xâm lấn, cách Thượng Hải khoảng một giờ tàu cao tốc.',
      },
      chengdu: {
        name: 'Thành Đô',
        blurb: 'Trung tâm y tế của miền Tây Trung Quốc, với trụ cột là Bệnh viện Hoa Tây (West China Hospital) — một trong những bệnh viện lớn nhất và được xếp hạng cao nhất cả nước.',
      },
      hainan: {
        name: 'Hải Nam · Bác Ngao Lạc Thành',
        blurb: 'Hòn đảo nhiệt đới có khu thí điểm cấp quốc gia, nơi các bệnh viện được cấp phép có thể dùng thuốc và thiết bị tiên tiến đã được phê duyệt ở nước ngoài nhưng chưa lưu hành tại Trung Quốc đại lục — cùng chính sách miễn thị thực áp dụng cả cho mục đích chữa bệnh.',
      },
    },
    choose: {
      title: 'Chúng tôi giúp bạn lựa chọn như thế nào',
      items: [
        {
          title: 'Chuyên khoa là trước hết',
          body: 'Chúng tôi bắt đầu từ những khoa giàu kinh nghiệm nhất với bệnh của bạn, chứ không từ tên tuổi bệnh viện.',
        },
        {
          title: 'Mức độ sẵn sàng đón bệnh nhân quốc tế',
          body: 'Chúng tôi kiểm tra hỗ trợ ngôn ngữ, khu điều trị quốc tế, hình thức thanh toán và bệnh viện có thể tiếp nhận bạn nhanh đến đâu.',
        },
        {
          title: 'Phù hợp trên thực tế',
          body: 'Đường bay, diện thị thực, khí hậu, nhu cầu của người đi cùng và ngân sách đều ảnh hưởng đến đề xuất cuối cùng.',
        },
      ],
    },
  },
  visa: {
    title: 'Hướng dẫn thị thực & nhập cảnh',
    intro: 'Từ năm 2024, nhập cảnh Trung Quốc đã đơn giản hơn nhiều. Lựa chọn phù hợp tùy vào hộ chiếu, thời gian điều trị và nơi bạn điều trị. Trang này là hướng dẫn chung, không phải tư vấn pháp lý — hãy luôn kiểm tra nguồn chính thức trước khi đặt vé.',
    options: [
      {
        title: 'Miễn thị thực 30 ngày',
        badge: 'Lưu trú ngắn',
        body: 'Người mang hộ chiếu phổ thông của khoảng 50 quốc gia — gồm phần lớn châu Âu, Anh, Canada, Úc, New Zealand, Nhật Bản, Hàn Quốc, Nga cùng một số nước vùng Vịnh và Mỹ Latinh — được nhập cảnh Trung Quốc đại lục không cần thị thực tối đa 30 ngày. Các nước có thỏa thuận miễn thị thực song phương như Singapore, Malaysia, Thái Lan, UAE, Qatar và Kazakhstan được hưởng điều kiện tương tự.',
        points: [
          'Mục đích được phép: công tác, du lịch, thăm thân, giao lưu và quá cảnh.',
          'Chữa bệnh không nằm trong các mục đích được nêu. Việc đi khám hoặc kiểm tra sức khỏe trong chuyến đi khá phổ biến, nhưng nếu chữa bệnh là mục đích chính, hãy hỏi đại sứ quán hoặc lãnh sự quán Trung Quốc xem có cần xin thị thực không.',
          'Phần lớn các chính sách này được công bố áp dụng đến 31/12/2026 (Nga: đến 31/12/2027). Hãy kiểm tra việc gia hạn trước khi đặt vé.',
        ],
      },
      {
        title: 'Miễn thị thực 30 ngày vào Hải Nam',
        badge: 'Được phép chữa bệnh',
        body: 'Công dân khoảng 60 quốc gia được vào tỉnh Hải Nam không cần thị thực tối đa 30 ngày, và chữa bệnh là mục đích được nêu rõ là hợp lệ. Hải Nam là nơi có Khu thí điểm du lịch y tế quốc tế Bác Ngao Lạc Thành.',
        points: [
          'Bạn chỉ được lưu trú trong phạm vi tỉnh Hải Nam.',
          'Phù hợp cho khám tổng quát, thủ thuật theo kế hoạch và các liệu pháp có tại Bác Ngao Lạc Thành.',
        ],
      },
      {
        title: 'Quá cảnh miễn thị thực 240 giờ',
        badge: 'Tối đa 10 ngày',
        body: 'Công dân 57 quốc gia — trong đó có Việt Nam, Indonesia và Hoa Kỳ — được lưu lại tối đa 240 giờ tại các khu vực quy định khi đang trên đường đến nước hoặc vùng lãnh thổ thứ ba. Hồng Kông và Ma Cao được tính là vùng lãnh thổ thứ ba.',
        points: [
          'Bạn cần vé đã xác nhận đi tiếp đến nước hoặc vùng lãnh thổ thứ ba trong vòng 240 giờ.',
          'Nhập cảnh qua các cửa khẩu được chỉ định và chỉ lưu trú trong những tỉnh được phép.',
          'Đủ thời gian cho nhiều gói khám tổng quát, buổi tư vấn và hội chẩn.',
        ],
      },
      {
        title: 'Thị thực S2 để chữa bệnh',
        badge: 'Điều trị theo kế hoạch',
        body: 'Với điều trị theo kế hoạch, lưu trú dài ngày hoặc hộ chiếu không thuộc diện miễn thị thực, cách thông thường là xin thị thực S2 (việc riêng ngắn hạn) kèm thư mời hoặc giấy tiếp nhận của bệnh viện.',
        points: [
          'Hồ sơ thường gồm: hộ chiếu, tờ khai, ảnh và thư của bệnh viện nêu chẩn đoán, kế hoạch điều trị, thời gian và chi phí dự kiến. Có thể phải chứng minh tài chính.',
          'Thị thực S2 áp dụng cho thời gian lưu trú tối đa 180 ngày. Điều trị lâu hơn cần thị thực S1 và giấy phép cư trú.',
          'Người nhà đi cùng có thể nộp hồ sơ kèm giấy tờ chứng minh quan hệ.',
          'Khi kế hoạch điều trị đã được xác nhận, chúng tôi hỗ trợ bạn xin thư của bệnh viện.',
        ],
      },
      {
        title: 'Nếu điều trị kéo dài hơn dự kiến',
        badge: 'Gia hạn',
        body: 'Bạn có thể nộp đơn tại cơ quan quản lý xuất nhập cảnh địa phương để xin gia hạn hoặc giấy phép lưu trú trước khi hết thời hạn được phép, kèm giấy xác nhận của bệnh viện.',
        points: [
          'Hãy nộp đơn ít nhất bảy ngày trước khi hết thời hạn lưu trú được phép.',
        ],
      },
    ],
    arrival: {
      title: 'Tờ khai nhập cảnh trực tuyến',
      body: 'Từ ngày 20/11/2025, khách nước ngoài có thể điền tờ khai nhập cảnh trực tuyến trước khi hạ cánh — trên trang web của Cục Quản lý Xuất nhập cảnh Quốc gia (NIA), ứng dụng “NIA 12367”, hoặc các chương trình mini của ứng dụng này trên WeChat và Alipay. Bạn cũng có thể điền khi đến nơi.',
    },
    checklist: {
      title: 'Trước khi bay',
      items: [
        'Hộ chiếu còn hạn ít nhất sáu tháng và còn trang trống',
        'Xác nhận lịch hẹn hoặc thư mời của bệnh viện (bản in)',
        'Hồ sơ bệnh án và phim chụp, đã dịch sang tiếng Anh hoặc tiếng Trung',
        'Thuốc kê đơn còn nguyên bao bì, kèm thư của bác sĩ',
        'Thông tin bảo hiểm du lịch và bảo hiểm y tế',
        'Địa chỉ nơi ở và số điện thoại liên hệ tại Trung Quốc',
        'Thẻ quốc tế, và đã cài đặt sẵn Alipay hoặc WeChat Pay',
        'Vé khứ hồi hoặc vé đi tiếp',
      ],
    },
    links: {
      nia: 'Cục Quản lý Xuất nhập cảnh Quốc gia Trung Quốc',
      visaCenter: 'Trung tâm Dịch vụ Thị thực Trung Quốc',
      arrivalCard: 'Tờ khai nhập cảnh trực tuyến',
    },
    disclaimer: 'Quy định thị thực có thể thay đổi và được cơ quan chức năng áp dụng theo từng trường hợp. Chúng tôi không phải đại lý thị thực và không thể bảo đảm việc nhập cảnh. Danh sách quốc gia và ngày tháng nêu trên chỉ là tóm tắt; thông báo chính thức mới có giá trị.',
  },
  costs: {
    title: 'Chi phí & thanh toán',
    intro: 'Bệnh nhân quốc tế tự chi trả khi điều trị tại Trung Quốc. Giá tại các khoa quốc tế và bệnh viện tư cao hơn giá bệnh viện công thông thường, nhưng thường vẫn thấp hơn nhiều so với giá dịch vụ tư nhân tại Mỹ và các thị trường đắt đỏ khác.',
    table: {
      title: 'Khoảng giá tham khảo',
      caption: 'Khoảng giá ước tính bằng đô la Mỹ, tổng hợp từ các thông tin công khai năm 2026. Đây không phải báo giá — bản dự toán bằng văn bản của bệnh viện mới là căn cứ.',
      service: 'Dịch vụ',
      range: 'Khoảng giá tham khảo tại Trung Quốc',
      note: 'Lưu ý',
      rows: {
        checkup: {
          name: 'Khám sức khỏe tổng quát toàn diện',
          note: 'Tùy các hạng mục chẩn đoán hình ảnh (MRI, CT, PET-CT) và nội soi bổ sung',
        },
        mri: { name: 'Chụp MRI một vùng', note: 'Thường có lịch trong vài ngày' },
        implant: {
          name: 'Cấy implant kèm mão răng, mỗi răng',
          note: 'Giá phụ thuộc chủ yếu vào hãng implant',
        },
        vision: {
          name: 'Phẫu thuật khúc xạ bằng laser, hai mắt',
          note: 'SMILE hoặc LASIK; kính nội nhãn ICL đắt hơn',
        },
        proton: {
          name: 'Xạ trị proton hoặc ion nặng, trọn liệu trình',
          note: 'Thay đổi theo loại khối u và số buổi chiếu',
        },
        cart: {
          name: 'Liệu pháp tế bào CAR-T',
          note: 'Tổng chi phí theo thông tin đã công bố; tại Mỹ, tổng chi phí thường được ghi nhận trên 500.000 USD',
        },
      },
    },
    pay: {
      title: 'Cách thanh toán',
      items: [
        {
          title: 'Thẻ quốc tế',
          body: 'Visa và Mastercard được chấp nhận ở hầu hết các khoa quốc tế và bệnh viện tư.',
        },
        {
          title: 'Alipay và WeChat Pay',
          body: 'Cả hai ứng dụng đều cho phép liên kết thẻ nước ngoài sau khi xác minh hộ chiếu — tiện cho chi tiêu hằng ngày. Có hạn mức giao dịch, nên hóa đơn lớn thường được thanh toán bằng thẻ hoặc chuyển khoản.',
        },
        {
          title: 'Chuyển khoản ngân hàng',
          body: 'Với điều trị chi phí lớn, bệnh viện cấp bản dự toán hoặc hóa đơn chiếu lệ và nhận chuyển khoản quốc tế.',
        },
        {
          title: 'Tiền tạm ứng',
          body: 'Bệnh viện thường yêu cầu tạm ứng trước khi nhập viện. Số tiền chưa dùng hết được hoàn lại khi ra viện.',
        },
      ],
    },
    insurance: {
      title: 'Bảo hiểm',
      points: [
        'Bảo hiểm y tế công của Trung Quốc không chi trả cho khách nước ngoài đến ngắn hạn.',
        'Nhiều bệnh viện tư và một số khoa quốc tế có bảo lãnh viện phí trực tiếp với các hãng bảo hiểm quốc tế; thường cần được chấp thuận trước.',
        'Nếu không, bạn thanh toán trước rồi yêu cầu bồi hoàn sau. Chúng tôi hỗ trợ bạn lấy hóa đơn chi tiết và báo cáo y tế bằng tiếng Anh.',
        'Trước khi đi, hãy kiểm tra xem hợp đồng bảo hiểm của bạn có chi trả cho điều trị theo kế hoạch ở nước ngoài hay không.',
      ],
    },
    factors: {
      title: 'Những yếu tố quyết định tổng chi phí',
      items: [
        'Bệnh viện và loại phòng bệnh (khu quốc tế hoặc VIP so với khu thường)',
        'Thời gian lưu trú và việc có người đi cùng hay không',
        'Thuốc và thiết bị nhập khẩu hay sản xuất tại Trung Quốc',
        'Dịch vụ phiên dịch, điều phối và chỗ ở',
      ],
    },
    fees: {
      title: 'Phí dịch vụ của chúng tôi',
      body: 'Việc đánh giá hồ sơ ban đầu là miễn phí. Viện phí được thanh toán trực tiếp cho bệnh viện. Nếu bạn nhờ chúng tôi điều phối chuyến đi, chúng tôi sẽ báo phí dịch vụ bằng văn bản trước khi bạn cam kết bất cứ điều gì.',
    },
  },
  faq: {
    title: 'Câu hỏi thường gặp',
    intro: 'Trả lời ngắn gọn cho những câu hỏi chúng tôi nhận được nhiều nhất. Nếu còn thắc mắc khác, hãy viết cho chúng tôi.',
    items: [
      {
        q: 'Người nước ngoài có được khám chữa bệnh tại bệnh viện Trung Quốc không?',
        a: 'Có. Nhiều bệnh viện công hàng đầu có khoa y tế quốc tế, và các bệnh viện tư quốc tế tiếp nhận bệnh nhân nước ngoài mỗi ngày. Bạn đăng ký bằng hộ chiếu và tự chi trả.',
      },
      {
        q: 'Bác sĩ có nói được tiếng của tôi không?',
        a: 'Ở các khoa quốc tế và bệnh viện tư, nhiều bác sĩ nói được tiếng Anh. Với các ngôn ngữ khác, và ở khu điều trị thường, chúng tôi bố trí phiên dịch y khoa đi cùng bạn trong các buổi khám.',
      },
      {
        q: 'Tôi có cần thị thực không?',
        a: 'Tùy vào hộ chiếu và thời gian lưu trú. Công dân nhiều nước được miễn thị thực 30 ngày hoặc dùng diện quá cảnh 240 giờ; với điều trị theo kế hoạch hoặc dài ngày, cách thông thường là thị thực S2 kèm thư của bệnh viện. Xem hướng dẫn thị thực & nhập cảnh của chúng tôi.',
      },
      {
        q: 'Chi phí khoảng bao nhiêu?',
        a: 'Tùy vào bệnh viện, loại phòng bệnh và phương pháp điều trị. Trước khi đi, bạn nhận được dự toán bằng văn bản từ bệnh viện. Trang Chi phí có khoảng giá tham khảo cho các dịch vụ phổ biến.',
      },
      {
        q: 'Bao lâu thì tôi được khám?',
        a: 'Khám tổng quát và khám chuyên khoa thường sắp xếp được trong vài ngày. Phẫu thuật và các liệu pháp phức tạp tùy vào kết quả đánh giá trước điều trị, nhưng nhìn chung thời gian chờ ngắn.',
      },
      {
        q: 'Tôi cần gửi những hồ sơ y tế nào?',
        a: 'Tóm tắt chẩn đoán, kết quả xét nghiệm gần đây, kết quả chẩn đoán hình ảnh (kèm tệp ảnh nếu có), kết quả giải phẫu bệnh và danh sách thuốc đang dùng. Tốt nhất là bằng tiếng Anh hoặc tiếng Trung; chúng tôi có thể sắp xếp dịch từ ngôn ngữ khác.',
      },
      {
        q: 'Bảo hiểm của tôi có chi trả không?',
        a: 'Bảo hiểm công của Trung Quốc không chi trả cho khách nước ngoài đến ngắn hạn. Một số hợp đồng bảo hiểm quốc tế chi trả cho điều trị tại Trung Quốc và một số bệnh viện có bảo lãnh viện phí trực tiếp. Hãy hỏi hãng bảo hiểm trước khi đi; chúng tôi hỗ trợ giấy tờ để bạn yêu cầu bồi hoàn.',
      },
      {
        q: 'Điều trị tại Trung Quốc có an toàn không?',
        a: 'Nước nào cũng có bệnh viện mạnh và bệnh viện yếu hơn. Chúng tôi chỉ làm việc với các cơ sở được cấp phép và tập trung vào các bệnh viện đại học lớn cùng bệnh viện tư có uy tín. Không có điều trị nào hoàn toàn không rủi ro; bác sĩ sẽ giải thích rủi ro và các lựa chọn thay thế trước khi bạn đồng ý.',
      },
      {
        q: 'Người nhà có thể đi cùng tôi không?',
        a: 'Có, và chúng tôi khuyên nên có người đi cùng khi phẫu thuật hoặc điều trị dài ngày. Người đi cùng có thể dùng cùng diện miễn thị thực hoặc xin thị thực cùng bạn. Chúng tôi hỗ trợ tìm chỗ ở gần bệnh viện.',
      },
      {
        q: 'Sau khi về nước thì sao?',
        a: 'Bạn nhận giấy ra viện, kết quả xét nghiệm và phim chụp, được dịch khi cần. Chúng tôi sắp xếp tái khám từ xa với bác sĩ điều trị và có thể chuyển hồ sơ cho bác sĩ của bạn ở trong nước.',
      },
      {
        q: 'Các bạn có phải bệnh viện không? Có tư vấn y khoa không?',
        a: 'Không. YiLu Health là đơn vị điều phối hành trình y tế. Việc chẩn đoán và quyết định điều trị chỉ do các bác sĩ có giấy phép hành nghề tại bệnh viện điều trị cho bạn thực hiện.',
      },
      {
        q: 'Có dịch vụ nào các bạn không thu xếp không?',
        a: 'Có. Chúng tôi không thu xếp ghép tạng, mang thai hộ hay các liệu pháp chưa được cơ quan quản lý Trung Quốc phê duyệt.',
      },
    ],
  },
  contact: {
    title: 'Bắt đầu đánh giá hồ sơ miễn phí',
    intro: 'Hãy cho chúng tôi biết ngắn gọn bạn cần gì. Điều phối viên sẽ trả lời bằng ngôn ngữ của bạn kèm các bước tiếp theo. Việc gửi biểu mẫu này không tạo ra ràng buộc nào.',
    form: {
      name: 'Họ và tên',
      email: 'Email',
      phone: 'Điện thoại / WhatsApp (không bắt buộc)',
      country: 'Quốc gia hoặc vùng lãnh thổ cư trú',
      treatment: 'Bạn cần hỗ trợ về việc gì?',
      city: 'Thành phố mong muốn (không bắt buộc)',
      timeframe: 'Bạn muốn đi khi nào? (không bắt buộc)',
      message: 'Mô tả ngắn gọn tình hình của bạn',
      messageHint: 'Ví dụ: chẩn đoán, điều trị đã thực hiện và điều bạn mong đạt được. Vui lòng chưa gửi tài liệu — chúng tôi sẽ hướng dẫn cách chia sẻ an toàn.',
      select: 'Vui lòng chọn',
      other: 'Khác / chưa chắc',
      anyCity: 'Không có yêu cầu',
      timeframes: {
        asap: 'Càng sớm càng tốt',
        month: 'Trong vòng một tháng',
        quarter: 'Trong vòng ba tháng',
        exploring: 'Chỉ đang tìm hiểu',
      },
      consent: 'Tôi đồng ý để YiLu Health sử dụng thông tin tôi cung cấp, bao gồm thông tin sức khỏe, nhằm trả lời yêu cầu của tôi, như nêu trong thông báo về quyền riêng tư.',
      privacyLink: 'Thông báo về quyền riêng tư',
      submit: 'Gửi yêu cầu',
      sending: 'Đang gửi…',
      successTitle: 'Cảm ơn bạn — chúng tôi đã nhận được yêu cầu.',
      successBody: 'Điều phối viên sẽ trả lời qua email. Nếu không thấy thư của chúng tôi, vui lòng kiểm tra hộp thư rác.',
      again: 'Gửi yêu cầu khác',
      errorGeneric: 'Chưa gửi được yêu cầu của bạn. Vui lòng thử lại sau giây lát.',
      errorValidation: 'Vui lòng kiểm tra các ô được đánh dấu rồi thử lại.',
      errorRate: 'Bạn đã thử quá nhiều lần. Vui lòng chờ vài phút rồi thử lại.',
      errorUnavailable: 'Biểu mẫu trực tuyến tạm thời không hoạt động. Vui lòng liên hệ trực tiếp với chúng tôi.',
    },
    aside: {
      title: 'Điều gì diễn ra tiếp theo',
      steps: [
        'Điều phối viên đọc tin nhắn của bạn và có thể hỏi thêm vài câu.',
        'Chúng tôi cho bạn biết cần gửi hồ sơ nào và cách chia sẻ an toàn.',
        'Bạn nhận được ý kiến bác sĩ chuyên khoa, các phương án và dự toán chi phí.',
      ],
      privacy: 'Thông tin của bạn chỉ được dùng để trả lời yêu cầu và chỉ được chia sẻ với bệnh viện khi bạn đồng ý.',
      directTitle: 'Muốn liên hệ trực tiếp với chúng tôi?',
      email: 'Email',
      whatsapp: 'WhatsApp',
      wechat: 'ID WeChat',
    },
  },
  legal: {
    title: 'Thông báo về quyền riêng tư & miễn trừ trách nhiệm y khoa',
    updated: 'Cập nhật lần cuối: {date}',
    sections: [
      {
        title: 'Miễn trừ trách nhiệm y khoa',
        body: 'Nội dung trên trang web này là thông tin chung, không phải lời khuyên y khoa và không thay thế việc thăm khám với bác sĩ có chuyên môn. Đừng trì hoãn việc đi khám hay bỏ qua lời khuyên chuyên môn vì những gì bạn đọc ở đây. Trong trường hợp khẩn cấp, hãy gọi số cấp cứu tại nơi bạn ở.',
      },
      {
        title: 'Vai trò của chúng tôi',
        body: 'YiLu Health là đơn vị điều phối hành trình y tế, không phải cơ sở khám chữa bệnh. Chúng tôi không chẩn đoán hay điều trị. Mọi quyết định y khoa do bạn và các bác sĩ có giấy phép hành nghề tại bệnh viện điều trị cho bạn đưa ra. Chúng tôi không bảo đảm kết quả điều trị, quyết định cấp thị thực hay mức giá nào.',
      },
      {
        title: 'Thông tin trên trang web',
        body: 'Quy định thị thực, giá cả và dịch vụ của bệnh viện có thể thay đổi. Chúng tôi rà soát trang web thường xuyên nhưng không thể bảo đảm mọi chi tiết luôn cập nhật. Thông báo chính thức và bản dự toán bằng văn bản của bệnh viện luôn là căn cứ cuối cùng.',
      },
      {
        title: 'Thông tin cá nhân chúng tôi thu thập',
        body: 'Khi bạn gửi yêu cầu, chúng tôi thu thập những thông tin bạn điền: họ tên, thông tin liên hệ, quốc gia và thông tin sức khỏe bạn chọn mô tả. Chúng tôi không yêu cầu tài liệu y tế qua biểu mẫu trên trang web.',
      },
      {
        title: 'Cách chúng tôi sử dụng và chia sẻ',
        body: 'Chúng tôi chỉ dùng thông tin của bạn để trả lời yêu cầu và, khi bạn đề nghị, để điều phối việc khám chữa bệnh. Chúng tôi chỉ chia sẻ với bệnh viện hoặc nhà cung cấp dịch vụ khác khi bạn đồng ý. Chúng tôi không bán thông tin cá nhân.',
      },
      {
        title: 'Lưu trữ và quyền của bạn',
        body: 'Chúng tôi chỉ lưu thông tin yêu cầu trong thời gian cần thiết cho các mục đích nêu trên hoặc theo quy định pháp luật. Bạn có thể liên hệ với chúng tôi bất cứ lúc nào để yêu cầu xem, chỉnh sửa hoặc xóa thông tin của mình, hoặc rút lại sự đồng ý.',
      },
      {
        title: 'Cookie',
        body: 'Trang web này dùng một cookie chức năng để ghi nhớ ngôn ngữ bạn chọn, không dùng cookie quảng cáo hay theo dõi.',
      },
    ],
  },
  footer: {
    tagline: 'Người điều phối hành trình chữa bệnh tại Trung Quốc của bạn.',
    explore: 'Khám phá',
    support: 'Hỗ trợ',
    legal: 'Quyền riêng tư & miễn trừ',
    disclaimer: 'YiLu Health là đơn vị điều phối hành trình y tế, không phải nhà cung cấp dịch vụ y tế. Nội dung trên trang web này là thông tin chung, không phải lời khuyên y khoa.',
    rights: 'Bảo lưu mọi quyền.',
  },
  notFound: {
    title: 'Không tìm thấy trang',
    body: 'Trang bạn tìm không tồn tại hoặc đã được chuyển đi.',
    cta: 'Về trang chủ',
  },
}

export default vi
