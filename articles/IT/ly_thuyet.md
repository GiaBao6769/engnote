---
title: "Lý thuyết Tin học\nSách giáo khoa"
authors: "Gia Bao, Võ Thị Bích Ngọc"
upload-date: "01/11/2026"
update-date: "01/11/2026"
---

# CHỦ ĐỀ 2 - MẠNG MÁY TÍNH VÀ INTERNET

## 1. Một số thiết bị mạng thông dụng

**Thiết bị mạng (Network Devices)** là những thiết bị có chức năng kết nối và truyền dữ liệu giữa các máy tính, thiết bị thông minh nhằm hình thành và duy trì hoạt động của một hệ thống mạng máy tính.

**Vai trò của thiết bị mạng:**

- **Kết nối:** Cho phép các thiết bị trong hệ thống mạng giao tiếp với nhau.
- **Truyền dữ liệu:** Đảm bảo việc gửi và nhận dữ liệu giữa các thiết bị diễn ra hiệu quả.
- **Bảo mật:** Hỗ trợ bảo vệ thông tin và kiểm soát truy cập mạng.
- **Tối ưu hiệu suất:** Quản lý lưu lượng mạng để tăng hiệu quả truyền tải.
- **Mở rộng mạng:** Cho phép bổ sung thiết bị mới mà không làm gián đoạn hệ thống.

### 1.1. Modem (Modulator and Demodulator - Bộ điều chế và giải điều chế)

Modem mạng là thiết bị có nhiệm vụ chuyển đổi dữ liệu số thành tín hiệu tương tự và ngược lại.

- **Chức năng:**

  - **Điều chế (Modulation):** Chuyển đổi dữ liệu số thành tín hiệu tương tự để truyền qua mạng.
  - **Giải điều chế (Demodulation):** Chuyển đổi tín hiệu tương tự nhận được thành dữ liệu số để thiết bị sử dụng.

- Hiện nay, Modem thường được tích hợp trực tiếp vào Router nhằm giảm số lượng thiết bị riêng lẻ trong hệ thống mạng.

### 1.2. Router (Bộ định tuyến)

- Router là thiết bị kết nối các mạng LAN với nhau hoặc mạng cục bộ (LAN) với mạng bên ngoài (Internet).
- Router đóng vai trò điều hướng gói tin đến đúng địa chỉ đích, cấp phát địa chỉ IP cho các thiết bị trong mạng, ngoài ra có thể tích hợp các tính năng bảo mật như tường lửa, kiểm soát truy cập.

### 1.3 Switch (Bộ chuyển mạch)

- Switch là thiết bị mạng dùng để kết nối các thiết bị trong cùng một mạng cục bộ (LAN) theo mô hình mạng hình sao. 
- Switch hoạt động bằng cách nhận dữ liệu từ một thiết bị, xác định địa chỉ MAC đích và chỉ gửi dữ liệu đến đúng thiết bị nhận nhằm tối ưu băng thông và giảm tắc nghẽn mạng.

### 1.4. Hub (Bộ trung tâm)

- Hub là thiết bị mạng dùng để kết nối các thiết bị trong cùng một mạng cục bộ (LAN). 
- Khi nhận dữ liệu, Hub sẽ phát tín hiệu đó đến tất cả các cổng còn lại mà không phân biệt địa chỉ đích, gây lãng phí băng thông và có thể dẫn đến xung đột dữ liệu. 
- Do khả năng phân luồng dữ liệu kém hơn Switch, Hub ít được sử dụng trong các hệ thống mạng hiện đại. Tuy nhiên, Hub có ưu điểm là giá thành rẻ hơn Switch, phù hợp với các mạng nhỏ hoặc yêu cầu đơn giản.

### 1.5. Access Point (AP - Điểm truy cập không dây)

- Access Point là thiết bị mạng không dây cục bộ (WLAN), kết nối các thiết bị không dây vào mạng LAN. 
- AP hoạt động như một trạm phát mạng không dây, cho phép thiết bị di động, Laptop,... truy cập vào tài nguyên mạng.

### 1.6 Cáp xoắn và cáp quang

- **Cáp xoắn:** Cáp xoắn đôi có lõi kim loại (thường là đồng), truyền dữ liệu bằng tín hiệu điện và sử dụng đầu cắm RJ45. Loại cáp này được sử dụng rộng rãi trong mạng LAN nhờ giá thành thấp, dễ lắp đặt và bảo trì. Cấu trúc cáp gồm 4 cặp dây xoắn vào nhau có tác dụng giảm nhiễu điện từ, bên ngoài được bọc lớp vỏ nhựa bảo vệ.

- **Cáp quang:** Cáp quang truyền dữ liệu bằng ánh sáng, có lõi làm từ thủy tinh hoặc nhựa tổng hợp. Cấu trúc cáp gồm lõi truyền ánh sáng, lớp phản quang và lớp bảo vệ. Nhờ tốc độ cao, ít bị nhiễu và khả năng truyền xa, cáp quang được sử dụng rộng rãi trong các mạng diện rộng. Tùy vào ứng dụng, cáp có thể được gia cố thêm dây thép chịu lực hoặc vỏ chống thấm. Cáp quang sử dụng hai loại nguồn sáng: 
  - *Multimode (LED):* Chi phí thấp, truyền dữ liệu trong khoảng cách ngắn.
  - *Singlemode (Laser):* Có thể truyền xa hàng ngàn kilomet, phù hợp với mạng WAN và cáp quang biển.

## 2. Kết nối thiết bị mạng với máy tính

- **Kết nối với Modem:** 
  - Dùng dây mạng (cáp Ethernet): Cắm một đầu dây vào cổng LAN trên Modem, đầu còn lại cắm vào máy tính.
  - Dùng Wifi: Nếu Modem có tích hợp Wifi, Laptop có thể kết nối không dây.
- **Kết nối với Router:** Cắm cáp Ethernet từ cổng LAN của Router vào máy tính.
- **Kết nối với Switch:** Dùng dây mạng: Cắm cáp từ cổng LAN trên Switch vào máy tính.
- **Kết nối với Access Point (AP):** AP phát mạng không dây cho các máy tính trong khu vực kết nối.


## 3. Giao thức mạng và giao thức TCP/IP

### 3.1. Giao thức mạng (Network Protocols)

Giao thức mạng là tập hợp các quy tắc và tiêu chuẩn quy định cách các thiết bị trong mạng máy tính giao tiếp, truyền tải dữ liệu với nhau một cách chính xác và hiệu quả.

**Các loại giao thức mạng phổ biến:**

- **TCP/IP (Transmission Control Protocol / Internet Protocol):** Giao thức chính trên Internet, chịu trách nhiệm định tuyến và kiểm soát truyền dữ liệu.
- **HTTP/HTTPS (HyperText Transfer Protocol / Secure):** Giao thức dùng để truy cập trang web, trong đó HTTPS có mã hóa bảo mật.
- **FTP (File Transfer Protocol):** Giao thức truyền tải tệp giữa máy khách và máy chủ.
- **SMTP / POP3 / IMAP:** Giao thức gửi và nhận thư điện tử.
- **DHCP (Dynamic Host Configuration Protocol):** Cấp phát địa chỉ IP tự động.
- **SNMP (Simple Network Management Protocol):** Quản lý và giám sát thiết bị mạng.
- **WAP (Wireless Application Protocol):** Truyền tải dữ liệu giữa các thiết bị không dây.

### 3.2. Giao thức TCP/IP

#### a. Giao thức TCP/IP là gì?
TCP/IP là tập hợp giao thức truyền thông dùng trong Internet và mạng LAN, xác định cách dữ liệu được truyền giữa các thiết bị, đảm bảo trao đổi thông tin hiệu quả và chính xác.

#### b. Gói tin (Packet) trong TCP/IP
Gói tin là đơn vị cơ bản của dữ liệu được truyền qua mạng. Khi một tập tin hoặc tin nhắn được gửi đi sẽ được chia thành nhiều gói tin nhỏ để truyền qua mạng. Mỗi gói tin gồm hai phần chính:
* **Header (Tiêu đề):** Chứa thông tin điều khiển như địa chỉ IP nguồn, địa chỉ IP đích, số thứ tự gói tin, thông tin kiểm tra lỗi,...
* **Data (Dữ liệu):** Chứa nội dung dữ liệu cần truyền.

#### c. Vai trò của TCP và IP trong quá trình truyền nhận gói tin

**Vai trò của TCP:** đảm bảo dữ liệu được truyền đi một cách chính xác, đầy đủ và theo đúng thứ tự.
- **Chia nhỏ dữ liệu thành các gói tin:** Khi một ứng dụng gửi dữ liệu, TCP sẽ chia dữ liệu thành các gói tin có kích thước phù hợp để truyền qua mạng.
- **Đánh số thứ tự các gói tin:** Mỗi gói tin được TCP gán số thứ tự để đảm bảo khi đến đích, dữ liệu có thể được ghép lại đúng trình tự.
- **Kiểm soát lỗi và yêu cầu gửi lại nếu cần:** Nếu một gói tin bị mất hoặc lỗi, TCP sẽ yêu cầu thiết bị gửi phát lại gói tin đó.
- **Đảm bảo dữ liệu đến đúng ứng dụng:** TCP dùng cổng để xác định ứng dụng nào trên máy nhận cần xử lý dữ liệu.

**Vai trò của IP:** định tuyến gói tin qua các mạng khác nhau để đến đúng thiết bị đích.
- **Gán địa chỉ IP nguồn và đích cho gói tin:** Mỗi gói tin được gán địa chỉ IP của thiết bị gửi và thiết bị nhận, hỗ trợ định tuyến chính xác, đảm bảo dữ liệu đến đúng đích.
- **Định tuyến gói tin qua mạng:** IP không quan tâm đến nội dung dữ liệu mà chỉ đảm bảo gói tin đi đúng đường từ nguồn đến đích qua các bộ định tuyến.

#### Địa chỉ IP, địa chỉ MAC và hệ thống tên miền (DNS)

* **Địa chỉ IP (Internet Protocol):** Là địa chỉ logic dùng để xác định và định vị thiết bị trong mạng, cho phép các thiết bị có thể giao tiếp với nhau. Địa chỉ IP có thể thay đổi khi thiết bị kết nối sang mạng khác, trừ khi được gán IP tĩnh. Địa chỉ IP có hai phiên bản chính:
  * **IPv4:** Độ dài 32 bit, được chia thành 4 nhóm 8 bit, tạo ra khoảng 4,3 tỉ địa chỉ. Ví dụ: `14.238.1.138`. Với sự bùng nổ thiết bị kết nối Internet và dân số thế giới vượt 8 tỉ người vào năm 2023, kho địa chỉ IPv4 đã gần như cạn kiệt.
  * **IPv6:** Độ dài 128 bit, cung cấp tới $2^{128}$ địa chỉ. Viết theo hệ thập lục phân, gồm 8 nhóm số cách nhau bằng dấu hai chấm (`:`). Ví dụ: `2402:9d80:85c:b680:28c6:5903:e52f:9b8a`. Nhờ kho địa chỉ lớn và khả năng bảo mật tốt hơn, IPv6 đang dần thay thế IPv4.

* **Địa chỉ MAC (Media Access Control):** Là địa chỉ vật lý của thiết bị mạng, được gán cố định cho card mạng (NIC) bởi nhà sản xuất và không thay đổi được. Mỗi thiết bị có một địa chỉ MAC duy nhất trên toàn cầu. Gồm 6 cặp số thập lục phân cách nhau bằng dấu hai chấm hoặc gạch ngang, ví dụ: `00:1A:2B:3C:4D:5E`.

| Tiêu chí | Địa chỉ MAC | Địa chỉ IP |
| :--- | :--- | :--- |
| **Loại địa chỉ** | Vật lý (được gán cố định cho phần cứng) | Logic (có thể thay đổi theo mạng đang kết nối) |
| **Mục đích** | Nhận diện thiết bị trong mạng cục bộ (LAN) | Định tuyến và xác định thiết bị trên mạng Internet |
| **Cấu trúc** | 48 bit, gồm 6 cặp số thập lục phân (VD: `00:1A:2B:3C:4D:5E`) | IPv4: 32 bit (VD: `192.168.1.1`)<br>IPv6: 128 bit (VD: `2402:9d80:85c:b680:1`) |
| **Phạm vi sử dụng** | Chỉ sử dụng trong mạng cục bộ (LAN) | Hoạt động trên cả mạng cục bộ (LAN) và mạng diện rộng (WAN, Internet) |
| **Khả năng thay đổi** | Cố định theo phần cứng (có thể thay đổi bằng phần mềm) | Thay đổi tùy theo mạng đang kết nối (cấp phát tĩnh hoặc động) |

* **DNS (Domain Name System):** Là hệ thống phân giải tên miền, chuyển đổi tên miền thành địa chỉ IP dạng số tương ứng và ngược lại. Nhờ DNS, người dùng có thể truy cập website dễ dàng mà không cần nhớ địa chỉ IP dạng số phức tạp.

#### d. Ưu nhược điểm của giao thức TCP/IP

**Ưu điểm:**
* **Tính chuẩn hóa và phổ biến:** Là bộ giao thức chuẩn, tương thích với nhiều nền tảng và hệ điều hành khác nhau.
* **Khả năng định tuyến tốt:** Hỗ trợ định tuyến động để dữ liệu tìm được đường đi tối ưu qua nhiều mạng khác nhau.
* **Đảm bảo độ tin cậy cao:** TCP có cơ chế kiểm soát lỗi, đánh số thứ tự gói tin và xác nhận dữ liệu đã nhận, đảm bảo truyền dữ liệu chính xác.
* **Mô hình phân lớp rõ ràng:** Chia thành các tầng (Application, Transport, Internet, Network Access), hỗ trợ dễ dàng thiết kế và phát triển hệ thống.
* **Mở rộng linh hoạt:** Có thể kết hợp với nhiều công nghệ mới, bổ sung thiết bị mà không làm gián đoạn hệ thống.

**Nhược điểm:**
* **Độ trễ cao trong một số trường hợp:** Cơ chế xác nhận và truyền lại gói tin khi lỗi làm tăng độ trễ.
* **Không tối ưu cho ứng dụng thời gian thực:** Các ứng dụng như livestream, VoIP, chơi game online yêu cầu tốc độ và tính liên tục có thể bị gián đoạn do cơ chế kiểm soát lỗi của TCP.
* **Hiệu suất chưa tối ưu với dữ liệu đa phương tiện:** Ban đầu không được thiết kế cho truyền video, âm thanh (ngày nay dùng các giao thức bổ trợ như RTP).
* **Quản lý địa chỉ IP phức tạp trong mạng lớn:** Việc cấp phát, quản lý IP phức tạp khi quy mô mở rộng.
* **Không tích hợp bảo mật mặc định:** Không có cơ chế mã hóa dữ liệu mặc định, dễ bị tấn công nếu không dùng các giao thức bảo mật bổ sung.

# CHỦ ĐỀ 6 - MẠNG MÁY TÍNH VÀ XÃ HỘI TRI THỨC

## Chức năng mạng của hệ điều hành
Hệ điều hành cung cấp nhiều chức năng mạng để hỗ trợ kết nối, quản lý và chia sẻ tài nguyên giữa các thiết bị trong cùng một hệ thống mạng. Khi máy tính được kết nối mạng, người dùng có thể:
* Chia sẻ ổ đĩa, thư mục giữa các máy tính và thiết bị di động.
* Chia sẻ máy in.
* Chia sẻ điểm truy cập mạng di động Mobile hotspot.

## 1. Chia sẻ ổ đĩa, thư mục
Hệ điều hành cho phép chia sẻ ổ đĩa/thư mục trong mạng cục bộ, cho phép các thiết bị khác truy cập toàn bộ thư mục và tệp tin trong ổ đĩa/thư mục đó. 

**Cách thực hiện:**
* **Bước 1: Mở cài đặt chia sẻ**
  * Nhấp chuột phải vào ổ đĩa/thư mục cần chia sẻ &rarr; Chọn **Properties**.
  * Chuyển sang tab **Sharing**, nhấn **Advanced Sharing**.
* **Bước 2: Bật tùy chọn chia sẻ**
  * Tích chọn **Share this folder**. Trong ô *Share name*, đặt tên chia sẻ (mặc định là tên ổ đĩa/thư mục).
* **Bước 3: Thiết lập quyền truy cập**
  * Nhấn **Permissions** &rarr; Chọn người dùng hoặc nhóm cần cấp quyền.
  * Chọn quyền truy cập:
    * **Read:** Chỉ được xem tệp tin, không chỉnh sửa hoặc xóa.
    * **Change:** Được chỉnh sửa, xóa hoặc thêm tệp tin.
    * **Full Control:** Toàn quyền, bao gồm thay đổi quyền truy cập.
  * Nhấn **OK** để lưu cài đặt.


## 2. Chia sẻ máy in dùng chung trong mạng

**Vai trò của việc chia sẻ máy in:** 
* Nhiều máy tính có thể dùng chung một máy in, tiết kiệm chi phí. 
* Người dùng in trực tiếp mà không cần kết nối vật lý máy tính với máy in, tăng hiệu suất làm việc. 
* Máy in được quản lý tập trung trên một máy chủ, dễ dàng kiểm soát việc sử dụng.

### 2.1. Cách chia sẻ máy in trên máy tính chủ (kết nối trực tiếp với máy in)
* **Bước 1: Bật tính năng chia sẻ tệp và máy in**
  * Mở **Control Panel** &rarr; Chọn **Network and Sharing Center** &rarr; Nhấp vào **Change advanced sharing settings**.
  * Bật các tùy chọn:
    * **Turn on network discovery** (Bật phát hiện mạng).
    * **Turn on file and printer sharing** (Bật chia sẻ tệp và máy in).
  * Nhấn **Save changes** để lưu lại.
  * *(Tùy chọn tắt mật khẩu)*: Trong cửa sổ **Change advanced sharing settings**, kéo xuống **All Networks**. Trong mục **Password protected sharing**, chọn **Turn off password protected sharing** &rarr; Nhấn **Save changes**.
* **Bước 2: Chia sẻ máy in**
  * Mở **Control Panel** &rarr; **Devices and Printers**.
  * Nhấp chuột phải vào máy in muốn chia sẻ &rarr; Chọn **Printer properties**.
  * Chuyển sang tab **Sharing**, tích chọn **Share this printer**.
  * Đặt tên máy in chia sẻ (ví dụ: `HP_LaserJet`).
  * Nhấn **OK** để lưu cài đặt.

#### 2.2. Kết nối và sử dụng máy in dùng chung trên máy tính trạm
1. Nhấn `Windows + R`, nhập `\\<Tên-máy-chia-sẻ>` (VD: `\\PC-01`).
2. Tìm máy in trong danh sách, nhấp chuột phải và chọn **Connect**.
3. Hiển thị hộp thoại yêu cầu cài đặt Driver máy in, nháy chọn **Install driver** để thực hiện cài đặt.
4. Sử dụng máy in dùng chung để in dữ liệu giống như khi in trên máy in kết nối trực tiếp.

## 3. Chia sẻ điểm truy cập mạng di động Mobile hotspot

* **Vai trò của Mobile Hotspot:**
  * Chia sẻ kết nối Internet di động với nhiều thiết bị khác nhau (laptop, máy tính bảng, điện thoại).
  * Hữu ích khi không có mạng Wifi cố định hoặc khi mất kết nối Internet.

* **Cách thiết lập Mobile Hotspot:**
  * **Trên điện thoại Android:**
    * Mở **Cài đặt (Settings)** &rarr; Chọn **Kết nối (Connections)** hoặc **Mạng & Internet**.
    * Chọn **Điểm phát sóng di động (Mobile Hotspot) & Chia sẻ kết nối**.
    * Bật **Điểm phát sóng di động (Mobile Hotspot)**.
    * Nhấn vào **Cấu hình điểm truy cập** để đổi tên Wifi, mật khẩu, hoặc chọn băng tần.
  * **Trên điện thoại iPhone:**
    * Mở **Cài đặt (Settings)** &rarr; Chọn **Di động**.
    * Nhấn **Chia sẻ kết nối (Personal Hotspot)**.
    * Bật **Cho phép người khác kết nối (Allow Others to Join)**.
    * Đặt mật khẩu Wifi nếu cần.
  * **Trên máy tính Windows:**
    * Mở **Settings** &rarr; Chọn **Network & Internet**.
    * Chọn **Mobile Hotspot** &rarr; Bật **Share my Internet connection with other devices**.
    * Nhấn **Edit** để đặt tên mạng và mật khẩu.

# CHỦ ĐỀ 5: HƯỚNG NGHIỆP VỚI TIN HỌC

## 1. Nhóm nghề dịch vụ trong ngành CNTT

Sự phát triển của CNTT làm tăng nhu cầu sử dụng các thiết bị như máy tính, điện thoại thông minh, thiết bị đeo thông minh,... Do đó, các dịch vụ như sửa chữa, bảo trì thiết bị, khôi phục dữ liệu, khắc phục sự cố kỹ thuật, bảo vệ máy tính khỏi phần mềm độc hại, nâng cấp và cài đặt phần mềm ngày càng phổ biến. 

Theo danh mục nghề nghiệp Việt Nam (Quyết định số 34/2020/QĐ-TTg), nhóm nghề dịch vụ trong ngành này thuộc mục **351** (Kỹ thuật viên hỗ trợ người dùng) và **2522** (Nhà quản trị hệ thống).

### Một số công việc chính
* Cài đặt, bảo trì, sửa chữa phần cứng máy tính và thiết bị ngoại vi.
* Hỗ trợ kỹ thuật, khắc phục sự cố phần mềm, phần cứng, hướng dẫn người dùng xử lý lỗi.
* Đánh giá nhu cầu doanh nghiệp để lựa chọn phần cứng phù hợp.
* Khôi phục dữ liệu khi dữ liệu bị mất hoặc hỏng bằng phần mềm hoặc can thiệp phần cứng.

### Kiến thức và kĩ năng cần có
* **Kiến thức:** Đào tạo về phần cứng máy tính, thiết bị ngoại vi, hệ điều hành và các phần mềm ứng dụng phổ biến; hiểu rõ cơ chế hoạt động của hệ thống máy tính.
* **Kỹ năng:** Lắp ráp, cài đặt hoàn chỉnh máy tính, sửa chữa lỗi thường gặp, phân tích và đưa ra giải pháp xử lý sự cố.
* **Yêu cầu thêm:** Thường xuyên cập nhật công nghệ mới, trau dồi kỹ năng để thích nghi với sự thay đổi nhanh chóng của công nghệ.

### Ngành học liên quan
* **Kĩ thuật máy tính:** Tập trung vào thiết kế phần cứng, vi mạch và phát triển hệ thống máy tính.
* **Mạng máy tính:** Cung cấp kiến thức về thiết kế, cấu hình và quản trị mạng, hạ tầng mạng, điện toán đám mây và dịch vụ web.
* **Khoa học máy tính:** Chuyên sâu về phần mềm, thuật toán và lý thuyết máy tính, phát triển ứng dụng, trí tuệ nhân tạo.
* **An toàn thông tin:** Tập trung bảo vệ dữ liệu, phát hiện và xử lý mối đe dọa an ninh mạng, xây dựng chính sách bảo mật.
* **Công nghệ phần mềm:** Liên quan đến quy trình phát triển phần mềm từ thiết kế, lập trình đến kiểm thử và triển khai.

### Học tập, giao lưu và nhu cầu nhân lực
* **Kênh học tập và giao lưu:** 
  * Diễn đàn trực tuyến về CNTT.
  * Nhóm chuyên ngành trên Facebook, Telegram.
  * Trường đại học, viện nghiên cứu.
* **Yêu cầu đào tạo:** Tốt nghiệp các chuyên ngành CNTT, Khoa học máy tính, Trí tuệ nhân tạo, Điện tử, Viễn thông từ các trường đại học, cao đẳng hoặc trung tâm đào tạo nghề.

## 2. Nhóm nghề quản trị thuộc ngành CNTT

### a. Nhóm nghề Quản trị mạng và Bảo mật hệ thống thông tin
Chuyển đổi số là xu hướng tất yếu trong Cách mạng công nghiệp 4.0. An toàn, an ninh mạng và bảo vệ dữ liệu là nền tảng quan trọng theo Chương trình chuyển đổi số quốc gia đến năm 2025, định hướng đến năm 2030. Người quản trị và bảo trì hệ thống chịu trách nhiệm duy trì, khắc phục sự cố mạng và bảo vệ dữ liệu trước các mối đe dọa.

Theo Quyết định số 34/2020/QĐ-TTg, nhóm này thuộc mục **2521** (Nhà quản trị và thiết kế cơ sở dữ liệu) và **2529** (Nhà chuyên môn về cơ sở dữ liệu và mạng).

#### Một số công việc trong nghề Quản trị mạng và hệ thống:
* **Thiết lập và cấu hình mạng:** Lựa chọn, cài đặt, bảo trì thiết bị mạng (router, firewall, switch,...).
* **Bảo vệ mạng:** Xây dựng chính sách truy cập, ngăn chặn truy cập trái phép bằng biện pháp kỹ thuật và vật lý.
* **Hỗ trợ người dùng:** Giải quyết các vấn đề về kết nối, bảo mật và quản lý tài nguyên mạng.
* **Tối ưu hóa hiệu suất hệ thống:** Giám sát, phân tích và điều chỉnh cấu hình IP, Subnet Mask, Gateway, DNS, nâng cao băng thông và cân bằng tải.
* **Bảo trì mạng và máy tính:** Sửa chữa sự cố mạng, bảo trì phần cứng.

#### Một số công việc trong nghề Bảo mật hệ thống thông tin:
* **Thiết kế và triển khai giải pháp bảo mật:** Xây dựng, cấu hình công cụ và thiết lập chính sách bảo mật.
* **Ngăn chặn truy cập trái phép:** Kiểm soát quyền truy cập, ngăn chặn tội phạm mạng, triển khai công nghệ bảo mật mới.
* **Xử lý sự cố bảo mật:** Khắc phục và khôi phục hệ thống nhanh chóng khi xảy ra sự cố.

#### Yêu cầu về kiến thức, kỹ năng:
* **Kiến thức & Kỹ năng:** Đào tạo về CNTT, phần cứng, thiết bị mạng, hệ điều hành mạng, kiến trúc mạng, giao thức mạng, cấu hình IP, an ninh mạng; kỹ năng giao tiếp, làm việc nhóm, giải quyết vấn đề.
* **Các chuyên ngành nên chọn:**
  * *Quản trị hệ thống:* Quản lý và duy trì hệ thống máy tính (phần cứng + phần mềm).
  * *Quản trị mạng:* Quản lý, cấu hình và bảo dưỡng hạ tầng mạng.
  * *Bảo mật thông tin:* Phân tích rủi ro, quản lý chính sách an ninh, kiểm thử xâm nhập trái phép và xử lý sự cố.

#### Học tập, giao lưu và cơ hội nghề nghiệp:
* **Cơ hội việc làm:** Nhu cầu tuyển dụng cao tại các công ty công nghệ, ngân hàng, tổ chức quốc tế và cơ quan Chính phủ với các vị trí: Quản trị viên mạng, Chuyên gia bảo mật, Kỹ sư hệ thống.
* **Thăng tiến nghề nghiệp:** Có thể thăng tiến lên Team Leader, CISO (Chief Information Security Officer), Network Manager, CTO (Chief Technology Officer).
* **Chứng chỉ quốc tế uy tín:**
  * **CompTIA:** Network+, Security+
  * **Cisco:** CCNA, CCNP
  * **ISC²:** CISSP
  * **EC-Council:** CEH (Certified Ethical Hacker)

#### Nhu cầu nhân lực:
* **Tại Việt Nam:** Nhu cầu nhân lực tăng mạnh do sự phát triển doanh nghiệp và chuyển đổi số. Việc bảo vệ hệ thống trước các cuộc tấn công tinh vi trở thành ưu tiên hàng đầu.
* **Trên thế giới:** Nhu cầu toàn cầu cao đối với lực lượng lao động chất lượng cao có kỹ năng bảo mật và quản lý hệ thống.

## 3. Ngành nghề và lĩnh vực có sử dụng nhân lực CNTT

Chuyển đổi số khiến nhân lực CNTT trở thành một phần không thể thiếu trong đa dạng các ngành nghề:

* **Giáo dục:** Cải thiện môi trường học tập, quản lý dữ liệu người học, phát triển hệ thống học trực tuyến.
* **Y tế:** Hồ sơ bệnh án điện tử, hệ thống chẩn đoán bệnh, phân tích dữ liệu lớn (Big Data) trong nghiên cứu và điều trị.
* **Tài chính - Ngân hàng:** Thanh toán điện tử, ngân hàng số, công nghệ Blockchain, bảo mật tài chính.
* **Logistics:** Tối ưu hóa quá trình vận chuyển, quản lý kho bãi, theo dõi hàng hóa, giảm thiểu chi phí.

### Đào tạo nguồn nhân lực CNTT ở bậc Đại học và Cao đẳng:

#### Trình độ Đại học:
* **Khoa học máy tính:** Nghiên cứu lý thuyết, mô hình và thuật toán.
* **Kĩ thuật máy tính:** Thiết kế phần cứng, vi mạch bán dẫn.
* **Hệ thống thông tin:** Thiết kế, triển khai và quản lý hệ thống thông tin tổ chức.
* **Mạng máy tính và truyền thông:** Phát triển hạ tầng mạng và công nghệ truyền thông.
* **An toàn thông tin:** Bảo mật hệ thống thông tin, ngăn ngừa tấn công mạng.
* **Kĩ thuật phần mềm:** Quy trình phát triển và đảm bảo chất lượng phần mềm.
* **Khoa học dữ liệu:** Phân tích và xử lý dữ liệu lớn.
* **Trí tuệ nhân tạo (AI):** Phát triển hệ thống có khả năng học hỏi và tự động hóa.

#### Trình độ Cao đẳng, dạy nghề:
Tập trung vào kỹ năng thực tế để nhanh chóng đáp ứng thị trường lao động. Các vị trí công việc bao gồm:
* Lập trình phần mềm.
* Quản trị hệ thống mạng.
* Phân tích và xử lý dữ liệu.
* Thiết kế giao diện người dùng (UI/UX).
* Hỗ trợ kỹ thuật (IT Helpdesk).
* Quản lý dự án CNTT.