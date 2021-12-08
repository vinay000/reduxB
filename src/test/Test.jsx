import axios from "axios"
import {useEffect, useState} from 'react'

function Test() {

    const [data, setData] = useState([])
    useEffect(() => {
        const getData = async() => {
            try{
                const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
                console.log(res.data);
                setData(res.data)
            }
            catch(err){
                console.log(err);
            }
        }
        getData();
    }, [])
    return (
        <div>
            {data.map((item, index) => <p>{data[index].title}</p>)}
        </div>
    )
}

export default Test
