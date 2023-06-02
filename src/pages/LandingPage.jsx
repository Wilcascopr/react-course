import { useState, useEffect } from 'react'
import axiosInstance from '../services/axios.js'
import Button from '../components/Button.jsx'

const LandingPage = () => {

    const [capsules, setCapsules] = useState([])
    const getRockets = async () => {
        try {
            const response = await axiosInstance.get('https://api.spacexdata.com/v3/capsules')
            setTimeout(() => {
                setCapsules(response.data)
            }, 1500);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getRockets()
    }, [])
    return (
        <>
            <div className="flex flex-col items-center min-h-screen min-w-screen">
                <div className="flex justify-between p-6 w-full">
                    <h1 className="text-3xl font-bold text-center">Landing Page</h1>
                    <div className="">
                        more info
                    </div>
                </div>
                <div className={`grid place-content-center p-6 w-full lg:grid-cols-4 md:grid-cols-3 ${!capsules.length && 'grid-cols-1' }`}>
                    {!capsules.length && 
                        <div className="border-8 border-r-white border-blue-500 w-[50px] h-[50px] rounded-full animate-spin" />
                    } 
                    {
                        !!capsules.length &&
                        capsules.map((capsule, index) => {
                            return (
                                <div key={index} 
                                    className="flex flex-col text-center shadow-md items-center
                                    m-2 p-2 hover:relative hover:top-[-2px]"
                                >
                                    <h2 className="text-xl font-bold">
                                        Capsule serial: {capsule.capsule_serial}
                                    </h2>
                                    <p> Status: {capsule.status} </p>
                                    { capsule.details && <p className="text-sm"> Details: {capsule.details}</p> }
                                    <Button className={"my-2"} children={'See more'} />
                                    <p> { capsule.original_launch } </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default LandingPage