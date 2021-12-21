import { useEffect, useState } from 'react'
import mcData from '../data/mcdonalds.json'

export const useData = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        setData(mcData)
    }, [])

    return data
}