import { useEffect, useState } from "react"

const URL_ANNONCE = process.env.PUBLIC_URL + '/annonce.json'

export const useGetflats = id => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch(URL_ANNONCE)
            .then(res => res.json())
            .then(res => {
                const filteredData = id ? res.filter(item => item.id === id)[0] : res
                if (!filteredData) {
                    throw new Error('id not exists')
                }
                setData(filteredData)
            })
            .catch(err => setError(true))
            .finally(() => setIsLoading(false))
    },)

    return { isLoading, data, error }
}

export default useGetflats

