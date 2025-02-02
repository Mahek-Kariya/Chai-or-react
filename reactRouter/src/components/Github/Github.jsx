import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {
    const data = useLoaderData
    //const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Mahek-Kariya/followers')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data);
    //     })
    // }, [])
    

    return ( 
        <> 
            <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">Github Followers : {data.length}</div>
        </>
     );
}
 
export default Github;

export const githubInfoLoader = async () => {
    const response= await fetch('https://api.github.com/users/Mahek-Kariya/followers')
    return response.json()
}