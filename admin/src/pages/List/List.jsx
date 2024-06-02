import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const List = ({url}) => {
  const [list, setList] = useState([])

  useEffect(() => {
    fetchList()

  }, [])
  const fetchList = async () => {
    // const response = await fetch('http://localhost:8000/list')
    // const data = await response.json()
    // setList(data)
    const response = await axios.get(`${url}/api/food/list`);
    console.log(response.data);
    if (response.data.success) {
      setList(response.data.data)

    }
    else {
      toast.error("Error")
    }
  }

  const removeFood = async(foodId)=>{
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId})
    if(response.data.success){
      toast.success(response.data.message)
      fetchList()
    }
    else{
      toast.error(response.data.message)
    }

  }
  return (
    <div className='list add flex-col'>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image
          </b><b>Name</b><b>category</b><b>Price</b><b>Action</b>
        </div>
        {
          list.map((item,index)=>{
            return(
              <div className="list-table-format" key={index}>
                <img src={`http://localhost:4000/images/${item.image}`} alt="" />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>{item.price}</p>
                {/* <p onClick={removeFood(item._id)} className="cursor">X</p> */}
                <p onClick={()=>{
                  removeFood(item._id)
                }} className="cursor">X</p>
              </div>
            )
          
          })
        }
      </div>
    </div>
  )
}

export default List
