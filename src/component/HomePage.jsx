import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function HomePage() {
    const navigate = useNavigate()
    const [showTable, setShowTable] = useState(false)
    const [showAdmin, setShowAdmin] = useState(false)
    const [users, setUsers] = useState([])
    const [form, setForm] = useState({ name: '', lastName: '', position: '' })

    const handleSave = () => {
        if (form.name || form.lastName || form.position) {
        setUsers([...users, form])
        setForm({ name: '', lastName: '', position: '' })
        }
    }

    const handleDelete = (index) => {
        setUsers(users.filter((_, i) => i !== index))
    }

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
                overflow: 'auto',  // ตัด scroll
                margin: 0, 
                padding: 0,
                }}>
                <div className="flex flex-col">
                    <nav className="border flex justify-end gap-3">
                        <button type="button" className="inline-block p-5 m-3 rounded-4xl hover:bg-amber-100">Home</button>
                        <button type="button" className="inline-block p-5 m-3 rounded-4xl hover:bg-amber-100" onClick={() => navigate('/OwnerPage')}>Owner</button>
                    </nav>
                    <div className="flex flex-col items-center gap-3">
                        <h1 className="text-5xl mt-5"s>
                            Generation Thailand
                        </h1>
                        <h1 className="text-5xl mb-10">
                            React Assessment
                        </h1>
                    </div>
                    <div className="flex justify-center">
                        <button type="button" className="bg-white p-5 mr-10 border-2 border-black hover:bg-blue-300" onClick={() => { setShowTable(true); setShowAdmin(false)}}>User Home Section</button>
                        <button type="button" className="bg-white p-5 ml-10 border-2 border-black hover:bg-blue-300" onClick={() => { setShowAdmin(true); setShowTable(false)}}>Admin Home Section</button>
                    </div>

                    {/* ✅ แสดงตารางเมื่อ showTable เป็น true */}
                    {showTable && (
                        <>
                            <div className='flex justify-center mt-5'>
                                <p>User Home Section</p>
                            </div>
                            <div className="flex justify-center mt-5">
                            
                                <table className="border-collapse border border-gray-300 w-2/3 bg-white">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border border-gray-300 p-3">Name</th>
                                            <th className="border border-gray-300 p-3">Last Name</th>
                                            <th className="border border-gray-300 p-3">Position</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-300 p-3"></td>
                                            <td className="border border-gray-300 p-3"></td>
                                            <td className="border border-gray-300 p-3"></td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 p-3"></td>
                                            <td className="border border-gray-300 p-3"></td>
                                            <td className="border border-gray-300 p-3"></td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 p-3"></td>
                                            <td className="border border-gray-300 p-3"></td>
                                            <td className="border border-gray-300 p-3"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}

                    {/* Admin Section */}
                    {showAdmin && (
                        <>
                            <div className='flex justify-center'>
                                <div className="mt-5 mx-10">
                                    <h2 className="font-bold text-lg">Create Admin User Here</h2>
                                    <div className="flex gap-3 mb-5 justify-between">
                                        <input className="border p-3 rounded bg-white w-1/4" placeholder="Name"
                                            value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                                        <input className="border p-3 rounded bg-white w-1/4" placeholder="Last Name"
                                            value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
                                        <input className="border p-3 rounded bg-white w-1/4" placeholder="Position"
                                            value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })} />
                                        <button type="button" className="bg-indigo-500 text-white px-6 rounded hover:bg-indigo-600"
                                            onClick={handleSave}>Save</button>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-center'>
                                <table className="border-collapse border border-gray-300 w-2/3 bg-white">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border border-gray-300 p-3">Name</th>
                                            <th className="border border-gray-300 p-3">Last Name</th>
                                            <th className="border border-gray-300 p-3">Position</th>
                                            <th className="border border-gray-300 p-3">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user, i) => (
                                            <tr key={i}>
                                                <td className="border border-gray-300 p-3">{user.name}</td>
                                                <td className="border border-gray-300 p-3">{user.lastName}</td>
                                                <td className="border border-gray-300 p-3">{user.position}</td>
                                                <td className="border border-gray-300 p-3 text-center">
                                                    <button type="button" className="text-red-500 font-bold hover:text-red-700"
                                                        onClick={() => handleDelete(i)}>Delete</button>
                                                </td>
                                            </tr>
                                        ))}
                                        {/* <tr>
                                            <td className="border border-gray-300 p-3"></td>
                                            <td className="border border-gray-300 p-3"></td>
                                            <td className="border border-gray-300 p-3"></td>
                                            <td className="border border-gray-300 p-3 text-center">
                                                <button type='button' className='hover:bg-red-500 rounded-2xl p-1'>Delete</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 p-3"></td>
                                            <td className="border border-gray-300 p-3"></td>
                                            <td className="border border-gray-300 p-3"></td>
                                            <td className="border border-gray-300 p-3 text-center">
                                                <button type='button' className='hover:bg-red-500 rounded-2xl p-1'>Delete</button>
                                            </td>
                                        </tr> */}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}
                </div>
            </div>
            
        </>
    )
}
export default HomePage