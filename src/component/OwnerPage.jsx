import { useNavigate } from 'react-router-dom'
import AdminProfile from '../assets/AdminProfile.png'

function OwnerPage() {
    const navigate = useNavigate()

    return(
        <>
            <div style={{ 
                // border: 'm-0 2px solid red',
                background: '#e7e8e7',
                position: 'fixed',   // ✅ แก้จาก default เป็น fixed
                top: 0,              // ✅ เริ่มจากขอบบนสุด
                left: 0,             // ✅ เริ่มจากขอบซ้ายสุด
                width: '100vw', 
                height: '100vh', 
                overflow: 'hidden',  // ตัด scroll
                margin: 0, 
                padding: 0,
                }}>
                <div className="flex flex-col">
                    <nav className="border flex justify-end gap-3">
                        <button type="button" className="inline-block p-5 m-3 rounded-4xl hover:bg-amber-100" onClick={() => navigate('/HomePage')}>Home</button>
                        <button type="button" className="inline-block p-5 m-3 rounded-4xl hover:bg-amber-100">Owner</button>
                    </nav>
                    <div className='mt-5 flex justify-center'>
                        <h1 className='text-3xl'>
                            06_Jakkrapong (Tae/เต้)😎☠️👨‍💻
                        </h1>
                    </div>
                    <div className='flex justify-center m-10'>
                        <div className='p-2 border-4 border-black rounded-2xl'>
                            <img src={AdminProfile} alt="AdminProfile" className='w-52 h-auto rounded-2xl'/>
                        </div>
                     </div>
                     <div className='ml-96 mr-96'>
                        <p className='indent-8 text-justify'>Recent graduate of the Generation Thailand Junior Software Developer Bootcamp, holding a Bachelor's degree in Management Accounting and 2 years of experience in accounting and asset management. Developed and applied full-stack development skills. Demonstrates strong problem-solving abilities, attention to detail, and proactive learning, while effectively collaborating in team environments.</p>
                     </div>
                </div>
            </div>
        </>
    )
}

export default OwnerPage