import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { userLoginAction, userLogoutAction } from '../store/actions/userAction'
import { format } from 'date-fns'
function Login() {
    const { users, error } = useSelector(state => state.userData)
    console.log(users);
    const dispatch = useDispatch()
    const [userName, setuserName] = useState()
    const [inputvalue, setinputvalue] = useState()
    const handleSubmit = () => {
        setuserName(inputvalue)
        dispatch(userLoginAction(userName))
    }

   
    return (
        <div  >
            <div className='mt-10 mb-2 text-center' >
                <input className=' rounded-1 p-2 capitalize border' placeholder=' enter valid user name..' type="text" value={inputvalue} onChange={(e) => setinputvalue(e.target.value)} />
                <button className=' rounded-2 capitalize  py-2 border hover:bg-gray-400 hover:text-white' onClick={handleSubmit} >loginser</button>
                
            </div>
            {
                users?.name && <div className='grid grid-cols-1 justify-items-center' >

                    <div className="py-10">
                        <div className="rounded overflow-hidden shaddow-lg max-w-sm ">
                            

                            <img src={users?.avatar_url} alt="" />

                            <div className='px-6 py-4' >
                                <h3 className='capitalize text-2xl' > name: {users?.name}</h3>
                                <p className='capitalize text-2xl mt-2 text-center'> create At: {format(new Date(users?.created_at), 'yyyy-MM-dd')} </p>

                                
                                <p className='capitalize text-2xl mt-2 text-center'>total public gits: {users?.public_gists} </p>
                                <p className='capitalize text-2xl mt-2 text-center'> total public repo {users?.public_repos} </p>
                            </div>
                            <div className='grid grid-flow-col gap-5 pb-2 px-6 ' >
                                <button onClick={(e) => dispatch(userLogoutAction())}
                                    className='bg-gray-200  rounded-full px-3 py-1 text-sm font-base mb-2  hover:bg-black hover:text-white '>
                                    logout</button>
                            </div>

                        </div>


                    </div>
                </div>


            }


        </div >


    )
}

export default Login