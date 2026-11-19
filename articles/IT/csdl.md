---
title: "Cơ sở dữ liệu"
---

# **Tổng hợp và hệ thống hóa kiến thức SQL**

Dựa trên những câu hỏi bạn đã đặt ra, bạn đã tiếp cận được khá nhiều kiến thức nền tảng của SQL: từ thao tác dữ liệu, thay đổi cấu trúc bảng, truy vấn, kết hợp bảng cho đến ràng buộc dữ liệu và giao dịch.

Mình sẽ hệ thống hóa chúng thành một lộ trình học, giải thích lại các khái niệm quan trọng, chỉ ra những điểm cần phân biệt và bổ sung các kiến thức cần thiết để bạn có một nền tảng SQL vững chắc.

# **1. SQL là gì?**

**SQL (Structured Query Language)** là ngôn ngữ được sử dụng để định nghĩa, truy vấn và thao tác với dữ liệu trong hệ quản trị cơ sở dữ liệu quan hệ (Relational Database Management System – RDBMS).

Một cơ sở dữ liệu quan hệ thường được tổ chức thành các **table (bảng)**.

Ví dụ, một cơ sở dữ liệu quản lý trường học có thể gồm:

**Table: Students**

| student_id | name | age |
| ---------- | ---- | --- |
| 1          | An   | 18  |
| 2          | Bình | 19  |
| 3          | Chi  | 18  |

**Table: Courses**

| course_id | course_name |
| --------- | ----------- |
| 101       | Mathematics |
| 102       | English     |

**Table: Enrollments**

| student_id | course_id |
| ---------- | --------- |
| 1          | 101       |
| 1          | 102       |
| 2          | 101       |

Một số thuật ngữ cơ bản:

- **Database:** Cơ sở dữ liệu.
- **Table:** Bảng.
- **Column / Field:** Cột / trường dữ liệu.
- **Row / Record:** Hàng / bản ghi.
- **Value:** Giá trị của một ô dữ liệu.
- **Schema:** Cấu trúc hoặc định nghĩa của cơ sở dữ liệu.

# **2. Phân loại các câu lệnh SQL**

Bạn đã tìm hiểu các nhóm câu lệnh SQL sau:

| Nhóm | Tên đầy đủ                   | Chức năng                   |
| ---- | ---------------------------- | --------------------------- |
| DDL  | Data Definition Language     | Định nghĩa cấu trúc dữ liệu |
| DML  | Data Manipulation Language   | Thao tác dữ liệu            |
| DQL  | Data Query Language          | Truy vấn dữ liệu            |
| DCL  | Data Control Language        | Quản lý quyền truy cập      |
| TCL  | Transaction Control Language | Quản lý giao dịch           |

## **2.1. DDL – Data Definition Language**

DDL dùng để tạo, thay đổi hoặc xóa cấu trúc của database và các đối tượng bên trong nó.

**CREATE – tạo bảng**

```sql
CREATE TABLE Students (
    student_id INT,
    name VARCHAR(100),
    age INT
);
```

**ALTER – thay đổi cấu trúc bảng**

Thêm cột:

```sql
ALTER TABLE Students
ADD email VARCHAR(100);
```

Xóa cột:

```sql
ALTER TABLE Students
DROP COLUMN email;
```

Thay đổi kiểu dữ liệu (cú pháp phụ thuộc DBMS):

```sql
-- MySQL
ALTER TABLE Students
MODIFY COLUMN name VARCHAR(200);
```

**DROP – xóa bảng**

```sql
DROP TABLE Students;
```

Lệnh này xóa cả dữ liệu lẫn cấu trúc bảng.

**TRUNCATE – xóa toàn bộ dữ liệu**

```sql
TRUNCATE TABLE Students;
```

Bảng vẫn tồn tại nhưng các bản ghi bị xóa.

## **2.2. DML – Data Manipulation Language**

DML dùng để thao tác với các bản ghi trong bảng.

**INSERT – thêm dữ liệu**

```sql
INSERT INTO Students (student_id, name, age)
VALUES (1, 'An', 18);
```

Thêm nhiều bản ghi:

```sql
INSERT INTO Students (student_id, name, age)
VALUES
    (2, 'Bình', 19),
    (3, 'Chi', 18);
```

**UPDATE – cập nhật dữ liệu**

```sql
UPDATE Students
SET age = 20
WHERE student_id = 1;
```

Lưu ý: Nếu bỏ `WHERE`, tất cả các bản ghi sẽ được cập nhật.

**DELETE – xóa dữ liệu**

```sql
DELETE FROM Students
WHERE student_id = 1;
```

Nếu bỏ `WHERE`, tất cả bản ghi sẽ bị xóa, nhưng bảng vẫn tồn tại.

## **2.3. DQL – Data Query Language**

DQL thường được dùng để phân loại câu lệnh truy vấn dữ liệu, tiêu biểu là `SELECT`.

```sql
SELECT name, age
FROM Students;
```

Lấy tất cả các cột:

```sql
SELECT *
FROM Students;
```

## **2.4. DCL – Data Control Language**

DCL quản lý quyền truy cập của người dùng.

```sql
GRANT SELECT ON Students TO user1;

REVOKE SELECT ON Students FROM user1;
```

## **2.5. TCL – Transaction Control Language**

TCL quản lý các transaction (giao dịch).

- `COMMIT`: Xác nhận các thay đổi trong transaction.
- `ROLLBACK`: Hoàn tác các thay đổi chưa được commit.
- `SAVEPOINT`: Tạo một điểm để có thể rollback một phần.

Ví dụ:

```sql
START TRANSACTION;

UPDATE Students
SET age = 20
WHERE student_id = 1;

SAVEPOINT checkpoint1;

UPDATE Students
SET age = 21
WHERE student_id = 2;

ROLLBACK TO SAVEPOINT checkpoint1;

COMMIT;
```

Kết quả: Thay đổi tuổi của sinh viên 1 được giữ lại, thay đổi tuổi của sinh viên 2 bị hoàn tác.

Lưu ý: Khả năng rollback và cách xử lý DDL phụ thuộc vào DBMS và loại storage engine. Ví dụ, nhiều lệnh DDL trong MySQL gây implicit commit.

# **3. Constraints – Các ràng buộc dữ liệu**

Đây là một trong những chủ đề bạn đã hỏi khá sâu, đặc biệt là `PRIMARY KEY`, `UNIQUE` và `NULL`.

**Constraint** là quy tắc được đặt lên các cột hoặc bảng nhằm đảm bảo tính hợp lệ và nhất quán của dữ liệu.

| Constraint    | Chức năng                                 |
| ------------- | ----------------------------------------- |
| `PRIMARY KEY` | Định danh duy nhất mỗi bản ghi            |
| `FOREIGN KEY` | Thiết lập và bảo vệ quan hệ giữa các bảng |
| `UNIQUE`      | Ngăn giá trị bị trùng lặp                 |
| `NOT NULL`    | Không cho phép giá trị NULL               |
| `CHECK`       | Kiểm tra điều kiện của giá trị            |
| `DEFAULT`     | Thiết lập giá trị mặc định                |

## **3.1. PRIMARY KEY – Khóa chính**

Khóa chính là một cột hoặc một tổ hợp các cột dùng để định danh duy nhất mỗi bản ghi trong bảng.

**Khóa chính đơn:**

```sql
CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    name VARCHAR(100)
);
```

**Khóa chính ghép (Composite Primary Key):**

```sql
CREATE TABLE Enrollments (
    student_id INT,
    course_id INT,
    PRIMARY KEY (student_id, course_id)
);
```

Trong ví dụ trên, `student_id` và `course_id` kết hợp với nhau để định danh một bản ghi.

Một số quy tắc:

- Một bảng chỉ có một ràng buộc `PRIMARY KEY`.
- Khóa chính có thể gồm nhiều cột.
- Các cột thuộc khóa chính đều không được chứa `NULL`.
- Giá trị của toàn bộ khóa chính phải duy nhất.

## **3.2. UNIQUE – Ràng buộc duy nhất**

`UNIQUE` ngăn các giá trị trùng lặp trong một cột hoặc một tổ hợp cột.

```sql
CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    email VARCHAR(100) UNIQUE
);
```

Bạn từng hỏi liệu một cột `UNIQUE` có thể chứa `NULL` hay không.

Câu trả lời: **Có, nhưng số lượng NULL được phép phụ thuộc vào DBMS.**

| DBMS       | Hành vi phổ biến                                                 |
| ---------- | ---------------------------------------------------------------- |
| MySQL      | Cho phép nhiều NULL                                              |
| PostgreSQL | Cho phép nhiều NULL mặc định                                     |
| SQLite     | Cho phép nhiều NULL                                              |
| Oracle     | Cho phép nhiều NULL                                              |
| SQL Server | Thông thường chỉ cho phép một NULL trong unique constraint/index |

Phân biệt:

- `UNIQUE`: Không cho phép các giá trị không NULL trùng nhau.
- `NOT NULL`: Không cho phép giá trị NULL.
- `UNIQUE NOT NULL`: Mọi bản ghi phải có giá trị và các giá trị phải duy nhất.

## **3.3. FOREIGN KEY – Khóa ngoại**

Khóa ngoại là một cột hoặc tổ hợp cột dùng để tham chiếu đến khóa chính hoặc một khóa `UNIQUE` trong bảng khác.

```sql
CREATE TABLE Courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(100)
);

CREATE TABLE Enrollments (
    student_id INT,
    course_id INT,
    FOREIGN KEY (course_id)
        REFERENCES Courses(course_id)
);
```

Khóa ngoại giúp đảm bảo **referential integrity (toàn vẹn tham chiếu)**.

Bạn cũng đã hỏi điều gì xảy ra khi xóa một bản ghi được tham chiếu bởi khóa ngoại.

Hành vi phụ thuộc vào `ON DELETE`:

```sql
FOREIGN KEY (course_id)
REFERENCES Courses(course_id)
ON DELETE CASCADE
```

Một số lựa chọn phổ biến:

| Tùy chọn    | Hành vi                                  |
| ----------- | ---------------------------------------- |
| `CASCADE`   | Xóa các bản ghi liên quan                |
| `SET NULL`  | Đặt khóa ngoại thành NULL                |
| `RESTRICT`  | Ngăn xóa bản ghi đang được tham chiếu    |
| `NO ACTION` | Kiểm tra ràng buộc theo quy tắc của DBMS |

Ví dụ, nếu một course bị xóa với `ON DELETE CASCADE`, các bản ghi enrollment tham chiếu đến course đó cũng bị xóa.

# **4. SELECT – Truy vấn dữ liệu**

Đây là phần rất quan trọng vì hầu hết các ứng dụng SQL đều cần truy vấn dữ liệu.

Cấu trúc tổng quát:

```sql
SELECT column1, column2
FROM table_name
WHERE condition
GROUP BY column1
HAVING group_condition
ORDER BY column1 ASC
LIMIT 10;
```

Không phải câu lệnh nào cũng cần tất cả các mệnh đề trên.

## **4.1. WHERE – Lọc bản ghi**

`WHERE` lọc các hàng dựa trên điều kiện.

```sql
SELECT *
FROM Students
WHERE age >= 18;
```

Một số toán tử thường dùng:

| Toán tử        | Ý nghĩa           |
| -------------- | ----------------- |
| `=`            | Bằng              |
| `<>` hoặc `!=` | Khác              |
| `>`            | Lớn hơn           |
| `<`            | Nhỏ hơn           |
| `>=`           | Lớn hơn hoặc bằng |
| `<=`           | Nhỏ hơn hoặc bằng |
| `AND`          | Và                |
| `OR`           | Hoặc              |
| `NOT`          | Phủ định          |
| `BETWEEN`      | Nằm trong khoảng  |
| `IN`           | Thuộc tập giá trị |
| `LIKE`         | So khớp mẫu       |
| `IS NULL`      | Kiểm tra NULL     |

Ví dụ:

```sql
SELECT *
FROM Students
WHERE age BETWEEN 18 AND 20;
```

```sql
SELECT *
FROM Students
WHERE name LIKE 'A%';
```

`A%` nghĩa là chuỗi bắt đầu bằng chữ A, theo quy tắc so khớp của DBMS.

**Lưu ý:** Không sử dụng `= NULL`. Hãy sử dụng `IS NULL` hoặc `IS NOT NULL`.

## **4.2. ORDER BY – Sắp xếp dữ liệu**

```sql
SELECT *
FROM Students
ORDER BY age ASC;
```

- `ASC`: Tăng dần.
- `DESC`: Giảm dần.
- Nếu không chỉ định, mặc định thường là `ASC`.

Có thể sắp xếp theo nhiều cột:

```sql
SELECT *
FROM Students
ORDER BY age DESC, name ASC;
```

**Điểm quan trọng:** Nếu không có `ORDER BY`, SQL không đảm bảo thứ tự của kết quả.

## **4.3. LIMIT và OFFSET – Giới hạn kết quả**

```sql
SELECT *
FROM Students
LIMIT 5;
```

Lấy 5 bản ghi.

```sql
SELECT *
FROM Students
LIMIT 5 OFFSET 10;
```

Bỏ qua 10 bản ghi đầu tiên rồi lấy 5 bản ghi tiếp theo.

Cú pháp khác nhau giữa các DBMS. SQL Server thường dùng `OFFSET ... FETCH` hoặc `TOP`.

## **4.4. AS – Alias**

`AS` tạo bí danh cho cột hoặc bảng trong truy vấn.

```sql
SELECT name AS student_name
FROM Students;
```

Đối với bảng:

```sql
SELECT s.name
FROM Students AS s;
```

Alias chỉ có hiệu lực trong phạm vi truy vấn, không thay đổi tên thực tế của cột hoặc bảng.

# **5. Aggregate Functions – Các hàm tổng hợp**

Bạn đã hỏi về `COUNT()`, `AVG()` và `SUM()`.

Các hàm này thực hiện tính toán trên một tập hợp bản ghi.

| Hàm       | Chức năng            |
| --------- | -------------------- |
| `COUNT()` | Đếm                  |
| `SUM()`   | Tính tổng            |
| `AVG()`   | Tính trung bình      |
| `MIN()`   | Tìm giá trị nhỏ nhất |
| `MAX()`   | Tìm giá trị lớn nhất |

Ví dụ:

```sql
SELECT
    COUNT(*) AS total_students,
    AVG(age) AS average_age,
    MIN(age) AS youngest,
    MAX(age) AS oldest
FROM Students;
```

## **5.1. Phân biệt COUNT(\*), COUNT(column), COUNT(DISTINCT column)**

Giả sử có dữ liệu:

| student_id | email        |
| ---------- | ------------ |
| 1          | a\@gmail.com |
| 2          | NULL         |
| 3          | a\@gmail.com |
| 4          | b\@gmail.com |

Kết quả:

```sql
SELECT COUNT(*) FROM Students;
-- 4
```

Đếm toàn bộ hàng, kể cả hàng có NULL.

```sql
SELECT COUNT(email) FROM Students;
-- 3
```

Đếm các giá trị không NULL.

```sql
SELECT COUNT(DISTINCT email) FROM Students;
-- 2
```

Đếm các giá trị khác nhau và không NULL.

## **5.2. NULL trong các hàm tổng hợp**

Các hàm `SUM()` và `AVG()` bỏ qua giá trị NULL.

Ví dụ:

| score |
| ----- |
| 10    |
| 8     |
| NULL  |

```sql
SELECT AVG(score)
FROM Results;
```

Kết quả:

\\[ AVG = \frac{10+8}{2}=9 \\]

Điều cần nhớ:

- NULL không được tính là 0.
- Giá trị 0 vẫn được tính trong `AVG()`.
- `SUM()` trả về NULL nếu không có giá trị không NULL để cộng.

# **6. GROUP BY và HAVING**

Đây là phần bạn đã hỏi về sự khác biệt giữa `WHERE` và `HAVING`.

## **6.1. GROUP BY – Gom nhóm**

`GROUP BY` chia các bản ghi thành các nhóm dựa trên giá trị của một hoặc nhiều cột.

Ví dụ:

```sql
SELECT age, COUNT(*) AS total
FROM Students
GROUP BY age;
```

Kết quả:

| age | total |
| --- | ----- |
| 18  | 2     |
| 19  | 1     |

SQL gom các sinh viên có cùng độ tuổi vào một nhóm, sau đó đếm số lượng trong từng nhóm.

## **6.2. HAVING – Lọc nhóm**

`HAVING` lọc kết quả sau khi đã thực hiện việc gom nhóm.

```sql
SELECT age, COUNT(*) AS total
FROM Students
GROUP BY age
HAVING COUNT(*) >= 2;
```

Chỉ hiển thị các nhóm có ít nhất hai sinh viên.

## **6.3. WHERE khác HAVING như thế nào?**

| WHERE                          | HAVING                                  |
| ------------------------------ | --------------------------------------- |
| Lọc từng hàng                  | Lọc từng nhóm                           |
| Trước GROUP BY                 | Sau GROUP BY                            |
| Thường dùng điều kiện trên cột | Thường dùng điều kiện trên hàm tổng hợp |

Ví dụ kết hợp:

```sql
SELECT age, COUNT(*) AS total
FROM Students
WHERE age >= 18
GROUP BY age
HAVING COUNT(*) >= 2;
```

Thứ tự xử lý logic thường được mô tả như sau:

**FROM / JOIN**

**WHERE**

**GROUP BY**

**HAVING**

**SELECT**

**ORDER BY**

**LIMIT / OFFSET**

Thứ tự xử lý logic khái quát, không phải thứ tự viết câu lệnh.

# **7. JOIN – Kết hợp các bảng**

Bạn đã tìm hiểu về `INNER JOIN`, `LEFT JOIN` và một số loại JOIN khác.

JOIN cho phép truy vấn dữ liệu từ nhiều bảng dựa trên một điều kiện liên kết.

Giả sử có hai bảng:

**Students**

| student_id | name |
| ---------- | ---- |
| 1          | An   |
| 2          | Bình |
| 3          | Chi  |

**Enrollments**

| student_id | course_id |
| ---------- | --------- |
| 1          | 101       |
| 1          | 102       |
| 2          | 101       |
| 4          | 103       |

## **7.1. INNER JOIN**

Chỉ trả về các bản ghi có sự tương ứng ở cả hai bảng.

```sql
SELECT *
FROM Students s
INNER JOIN Enrollments e
    ON s.student_id = e.student_id;
```

Kết quả chỉ chứa An và Bình.

## **7.2. LEFT JOIN**

Trả về toàn bộ bản ghi của bảng bên trái và những bản ghi phù hợp của bảng bên phải.

```sql
SELECT *
FROM Students s
LEFT JOIN Enrollments e
    ON s.student_id = e.student_id;
```

Chi sẽ xuất hiện dù không có enrollment. Các cột lấy từ `Enrollments` sẽ có giá trị NULL.

## **7.3. Các loại JOIN khác**

| JOIN              | Kết quả                                  |
| ----------------- | ---------------------------------------- |
| `INNER JOIN`      | Các bản ghi khớp ở cả hai bảng           |
| `LEFT JOIN`       | Toàn bộ bảng trái và phần khớp bảng phải |
| `RIGHT JOIN`      | Toàn bộ bảng phải và phần khớp bảng trái |
| `FULL OUTER JOIN` | Toàn bộ hai bảng, khớp hoặc không khớp   |
| `CROSS JOIN`      | Tích Descartes của hai bảng              |

## **7.4. Một ứng dụng quan trọng của LEFT JOIN**

Tìm sinh viên chưa đăng ký khóa học nào:

```sql
SELECT s.*
FROM Students s
LEFT JOIN Enrollments e
    ON s.student_id = e.student_id
WHERE e.student_id IS NULL;
```

Đây là kỹ thuật thường được gọi là **anti-join**.

# **8. Một số kiến thức quan trọng cần bổ sung**

Các phần dưới đây chưa được bạn hỏi nhiều, nhưng chúng liên kết trực tiếp với những kiến thức đã học.

## **8.1. NULL không phải là 0 hay chuỗi rỗng**

Trong SQL, `NULL` biểu thị một giá trị không xác định hoặc không hiện diện.

```sql
SELECT *
FROM Students
WHERE email IS NULL;
```

Không nên nhầm lẫn:

| Giá trị  | Ý nghĩa                          |
| -------- | -------------------------------- |
| `NULL`   | Không có giá trị / chưa xác định |
| `0`      | Giá trị số bằng 0                |
| `''`     | Chuỗi rỗng                       |
| `'NULL'` | Chuỗi ký tự NULL                 |

SQL sử dụng logic ba giá trị (three-valued logic): một biểu thức điều kiện có thể cho kết quả `TRUE`, `FALSE` hoặc `UNKNOWN`.

Ví dụ:

```sql
SELECT *
FROM Students
WHERE age = NULL;
```

Điều kiện trên không tìm được các hàng có NULL vì phép so sánh với NULL cho kết quả UNKNOWN. Hãy dùng `IS NULL`.

## **8.2. Subquery – Truy vấn con**

Subquery là một câu truy vấn được đặt bên trong một câu truy vấn khác.

Ví dụ: Tìm những sinh viên có tuổi lớn hơn tuổi trung bình.

```sql
SELECT *
FROM Students
WHERE age > (
    SELECT AVG(age)
    FROM Students
);
```

Truy vấn bên trong:

```sql
SELECT AVG(age)
FROM Students;
```

được thực hiện để cung cấp giá trị cho truy vấn bên ngoài.

Một số toán tử thường gặp khi sử dụng subquery:

- `IN`: Kiểm tra một giá trị có thuộc tập kết quả hay không.
- `EXISTS`: Kiểm tra truy vấn con có trả về ít nhất một hàng hay không.
- `ANY`: So sánh với ít nhất một giá trị trong tập hợp.
- `ALL`: So sánh với tất cả giá trị trong tập hợp.

## **8.3. Set operations – Các phép toán tập hợp**

SQL có thể kết hợp kết quả từ nhiều truy vấn.

| Toán tử     | Ý nghĩa                 |
| ----------- | ----------------------- |
| `UNION`     | Hợp, loại bỏ hàng trùng |
| `UNION ALL` | Hợp, giữ cả hàng trùng  |
| `INTERSECT` | Giao                    |
| `EXCEPT`    | Hiệu                    |

Ví dụ:

```sql
SELECT name FROM CurrentStudents
UNION
SELECT name FROM FormerStudents;
```

Hai truy vấn phải có cùng số lượng cột tương ứng và các kiểu dữ liệu phải tương thích.

## **8.4. CASE – Biểu thức điều kiện**

`CASE` cho phép tạo logic điều kiện ngay trong câu truy vấn.

```sql
SELECT
    name,
    age,
    CASE
        WHEN age < 18 THEN 'Minor'
        WHEN age >= 18 THEN 'Adult'
        ELSE 'Unknown'
    END AS age_group
FROM Students;
```

Có thể xem `CASE` như một biểu thức điều kiện tương tự `if / else` trong lập trình.

# **9. Phân biệt các khái niệm dễ nhầm lẫn**

Đây là những điểm bạn nên ghi nhớ khi học SQL.

| Hai khái niệm                  | Điểm khác biệt                                     |
| ------------------------------ | -------------------------------------------------- |
| `DELETE` và `DROP`             | Xóa bản ghi so với xóa cả bảng                     |
| `DELETE` và `TRUNCATE`         | Xóa có thể chọn hàng so với xóa toàn bộ hàng       |
| `WHERE` và `HAVING`            | Lọc hàng so với lọc nhóm                           |
| `PRIMARY KEY` và `UNIQUE`      | Khóa định danh chính so với ràng buộc duy nhất     |
| `PRIMARY KEY` và `FOREIGN KEY` | Định danh bản ghi so với tham chiếu bảng khác      |
| `COUNT(*)` và `COUNT(column)`  | Đếm hàng so với đếm giá trị không NULL             |
| `INNER JOIN` và `LEFT JOIN`    | Chỉ lấy hàng khớp so với giữ toàn bộ hàng bên trái |
| `COMMIT` và `ROLLBACK`         | Xác nhận so với hoàn tác thay đổi chưa commit      |

# **10. Lộ trình học SQL tiếp theo**

Bạn đã có nền tảng về các câu lệnh cơ bản và những thao tác thường dùng. Để tiến xa hơn, mình đề xuất lộ trình sau:

1. **SQL Fundamentals**&#x20;

   Đã học phần lớn

   - Database, table, row, column
   - DDL, DML, DQL, DCL, TCL
   - CREATE, ALTER, DROP, INSERT, UPDATE, DELETE

2. **Constraints và Data Integrity**&#x20;

   Đã học phần lớn

   - Primary key, composite primary key
   - Foreign key, unique, not null
   - Check, default
   - Referential integrity

3. **Data Retrieval**&#x20;

   Đã học phần lớn

   - SELECT, WHERE, ORDER BY
   - Aggregate functions
   - GROUP BY, HAVING
   - JOIN

4. **Advanced Queries**&#x20;

   Nên học tiếp

   - Subqueries
   - EXISTS, IN, ANY, ALL
   - UNION, INTERSECT, EXCEPT
   - CASE
   - Common Table Expressions (CTE)
   - Window functions

5. **Database Design**

   - Entity-Relationship Diagram (ERD)
   - Relationships: 1:1, 1:N, M:N
   - Normalization: 1NF, 2NF, 3NF
   - Functional dependencies

6. **Database Management**

   - Transactions và ACID
   - Indexes
   - Views
   - Stored procedures và triggers
   - Query optimization và execution plans

# **11. Bài tập tổng hợp để kiểm tra kiến thức**

Hãy sử dụng ba bảng sau để thực hành:

```sql
CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT,
    email VARCHAR(100) UNIQUE
);

CREATE TABLE Courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL
);

CREATE TABLE Enrollments (
    student_id INT,
    course_id INT,
    score DECIMAL(4,2),
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES Students(student_id),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);
```

Thử giải quyết các yêu cầu sau mà không xem lời giải:

**SQL practice checklist**

0/12 hoàn thành

1\. Thêm 5 sinh viên vào bảng Students.

2\. Thêm 3 khóa học vào bảng Courses.

3\. Đăng ký một sinh viên vào hai khóa học.

4\. Tìm tất cả sinh viên có tuổi từ 18 đến 20.

5\. Sắp xếp sinh viên theo tuổi giảm dần.

6\. Đếm tổng số sinh viên.

7\. Tính điểm trung bình của mỗi khóa học.

8\. Tìm những khóa học có ít nhất 2 sinh viên đăng ký.

9\. Hiển thị tên sinh viên cùng tên khóa học mà họ đăng ký.

10\. Tìm những sinh viên chưa đăng ký khóa học nào.

11\. Tìm sinh viên có điểm cao hơn điểm trung bình của tất cả sinh viên.

12\. Xóa một bản ghi đăng ký nhưng giữ nguyên thông tin sinh viên và khóa học.

Đặt lại tiến độ

## **12. Một lưu ý khi học SQL**

SQL có nhiều hệ quản trị cơ sở dữ liệu, chẳng hạn:

- MySQL
- PostgreSQL
- SQLite
- Microsoft SQL Server
- Oracle Database

Chúng sử dụng chung nhiều cú pháp SQL nhưng có những khác biệt về kiểu dữ liệu, hàm, cú pháp thay đổi cấu trúc bảng, xử lý transaction và nhiều tính năng khác.

**Khuyến nghị:** Hãy chọn một DBMS để học thực hành trước. Nếu chưa có lựa chọn, MySQL hoặc PostgreSQL đều phù hợp để bắt đầu.

**Định hướng học tiếp:** Mình khuyên bạn nên học sâu về `Subqueries`, sau đó là `CTE` và `Window Functions`. Đây là những kiến thức giúp bạn chuyển từ viết các truy vấn SQL cơ bản sang giải quyết các bài toán truy vấn phức tạp.

Mình cũng có thể chuẩn bị một bài luyện SQL mỗi ngày, tăng dần độ khó và có đáp án giải thích để bạn củng cố kiến thức.