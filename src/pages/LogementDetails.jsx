import Carousel from "../components/Caroussel"
import { useParams } from "react-router-dom"
import { useGetflats } from "../utils/hooks"
import MissingPage from "./MissingPage"
import LogementDescription from "../components/LogementDescription"
import Collapsible from "../components/Collapsible"; 

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
                        <LogementDescription  
                            rate={data.rating} 
                            location={data.location} 
                            title={data.title} 
                            tags={data.tags}
                            badge={data.host.picture}
                            host={data.host.name}
                            id={data.id}
                        />
                        <div className="logementCollapse">
                            <Collapsible title="Description">
                                <p>
                                    {data.description}
                                </p>
                            </Collapsible> 
                            <Collapsible title="Équipements">
                                <ul>
                                    {data.equipments.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Collapsible> 
                        </div>
                    </>
                )
            }
        </div>
    )
}
export default LogementDetails