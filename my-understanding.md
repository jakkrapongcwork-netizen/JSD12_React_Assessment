อธิบายกระบวนการเขียนโค้ด React Assessment

1. สร้าง 2 Components เนื่องจาก มีจำนวน Page น้อย จึงแยกเป็น Component ละเพจ
2. เขียนโครงร่าง ที่สามารถเขียนได้เอง โดยใช้
    2.1 Tailwind CSS
    2.2 Flexbox
    - ในส่วนของ Nav Bar หัวข้อ ใส่รูป ใส่ข้อความ ทำปุ่ม
    - ใช้ AI บ้างในการถามเพื่อ หาคำสั่ง ที่จำไม่ได้
3. ให้ AI ทำงานให้ในส่วน
    3.1 เชื่อมโยง 2 Components และเปลี่ยนไป-เปลี่ยนมา โดยการใช้ React-Router
    3.2 หน้า Home ให้สร้าง ในส่วนตาราง และ input ต่างๆ
    3.3 ใช้ useState เพื่อให้เมื่อมีการใส่ข้อมูล Admin แล้ว สามารถสร้างตารางข้อมูล Admin ขึ้นมาได้ และลบข้อมูลได้

HomePage.jsx
    1. ขึ้นโครง JSX เท่าที่ขึ้นได้
    2. ใช้ AI ทำส่วน ตาราง และ ส่วนการใส่ข้อมูล Admin
        - ***ส่วนนี้ยังไม่ค่อยเข้าใจการทำงาน รู้เพียงแต่ว่า ใช้ useState
    3. ใช้ react-router เพื่อ เปลี่ยนหน้า URL
    4. ในส่วน API นั้น ให้ AI เจน และไม่เข้าใจ

OwnerPage.jsx
    1. ไม่มีอะไรมาก แค่ขึ้นโครง JSX
    2. ใช้ react-router 
        - hook useNavigate 
        - และสร้าง function navigate เพื่อ เมื่อเรียกใช้ function จะใช้ hook useNavigate เพื่อเปลี่ยนหน้า URL

App.jsx
    ใช้ react-router เพื่อ จับคู่ URL กับ Component โดย
        1. เมื่อ URL path เป็น / จะแสดงหน้า HomePage และเปลี่ยน path เป็น /Homepage เพื่อให้ URL แสดงชื่อ Path อย่างชัดเจน ว่าอยู่หน้า HomePage
        2. เมื่อกดปุ่ม Owner ที่หน้า Home จะเปลี่ยน URL path เป็น /OwnerPage และเปลี่ยนหน้า