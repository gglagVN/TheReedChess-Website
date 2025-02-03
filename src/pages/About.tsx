import React from "react";
import styles from "./About.module.css";

const About: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1>Về chúng tôi</h1>
      <p>
        Câu Lạc Bộ Cờ Vua The Reed Chess hướng đến việc trở thành trung tâm hàng
        đầu trong việc phát triển và thúc đẩy phong trào cờ vua tại Ninh Bình,
        đồng thời mở rộng ảnh hưởng của mình ra toàn quốc. Câu lạc bộ không
        ngừng nỗ lực để đưa cờ vua trở thành một phần yếu tố trong đời sống văn
        hóa, khuyến khích sự sáng tạo, tư duy chiến lược và tinh thần thể thao
        cho các thế hệ trẻ.
      </p>
      <p>
        Được thành lập vào năm 2019 dưới sự quản lý của Công ty TNHH The Reed
        Chess, CLB Cờ Vua tự hào là đơn vị tiên phong trong việc phát triển
        phong trào cờ vua tại Ninh Bình.
      </p>
      <h2>Mục tiêu</h2>
      <ul>
        <li>
          Tạo ra các hoạt động cờ vua lành mạnh, bổ ích cho trẻ em tại Ninh
          Bình, giúp các em phát triển tư duy.
        </li>
        <li>
          Tìm kiếm và hỗ trợ các tài năng trẻ trong môn cờ vua, cung cấp môi
          trường đào tạo chuyên nghiệp để phát triển kỹ năng, thành tích.
        </li>
        <li>
          Cung cấp thông tin cập nhật, kết nối những người yêu thích cờ vua, xây
          dựng một cộng đồng cờ vua gắn kết và phát triển.
        </li>
        <li>
          Tổ chức các giải đấu và hoạt động cộng đồng để nâng cao nhận thức về
          cờ vua, khuyến khích sự tham gia của mọi lứa tuổi.
        </li>
        <li>
          Luôn tìm kiếm và áp dụng các phương pháp giảng dạy sáng tạo để làm
          phong phú thêm trải nghiệm chơi cờ và đáp ứng nhu cầu đa dạng của các
          thành viên.
        </li>
      </ul>
      <h2>Cơ sở hiện tại</h2>
      <ul>
        <li>CS1: Số 4 Phan Đình Phùng, Vân Giang, TP Ninh Bình</li>
        <li>CS2: Tiểu học Ninh Khánh, TP Ninh Bình</li>
        <li>CS3: Tiểu học Trần Phú, Bắc Sơn, TP Tam Điệp</li>
        <li>CS4: 255 Nguyễn Công Trứ, Thanh Bình, TP Ninh Bình</li>
        <li>CS5: Tiểu học Thị trấn Thiên Tôn, Thiên Tôn, Hoa Lư, Ninh Bình</li>
      </ul>
    </div>
  );
};

export default About;
