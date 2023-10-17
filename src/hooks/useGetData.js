import { useState, useEffect } from 'react'

export const useGetData = (apiRoute) => {

  const [data, setData] = useState({})

  useEffect(() => {
    const getData = async () => {
        const response = await fetch(apiRoute);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
    }
    getData()
  }, [apiRoute])

  return data
}