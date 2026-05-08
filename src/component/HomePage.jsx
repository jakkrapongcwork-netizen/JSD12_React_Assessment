function HomePage() {

    return(
        <>
            <div style={{ 
            // border: 'm-0 2px solid red',
            background: 'black',
            position: 'fixed',   // ✅ แก้จาก default เป็น fixed
            top: 0,              // ✅ เริ่มจากขอบบนสุด
            left: 0,             // ✅ เริ่มจากขอบซ้ายสุด
            width: '100vw', 
            height: '100vh', 
            overflow: 'hidden',  // ตัด scroll
            margin: 0, 
            padding: 0,
            display: 'flex',
            justifyContent: 'center', /* กลางแนวนอน */
            alignItems: 'center'      /* กลางแนวตั้ง */
        }}>
            </div>
        </>
    )
}
export default HomePage