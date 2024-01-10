import Carousel from "../components/Caroussel"
import { useParams } from "react-router-dom"
import { useGetflats } from "../utils/hooks"
import MissingPage from "./MissingPage"

const LogementDetails = () => {
    const { id } = useParams()
    const { data, error, isLoading } = useGetflats(id)

    if (error) {
        return <MissingPage />
    }


    return (
        <div className="Main">
            {isLoading ? (<div>Chargement...</div>) :
                (
                    <>
                        <Carousel pictures={data.pictures} title={data.title} />
                    </>
                )
            }
        </div>
    )
}


export default LogementDetails