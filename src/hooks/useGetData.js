import { useState, useEffect } from 'react'

export const useGetData = (apiRoute) => {

  const [data, setData] = useState(null)

  const fetchData = async () => {
    await axios.get(apiRoute)
    .then(res => {
      setData(res.data)
    }).catch(err => {
      console.log(err)
    })
  }
  useEffect(() => {
    fetchData()
  }, [])

  if(!data) 
    return null
  return data
}