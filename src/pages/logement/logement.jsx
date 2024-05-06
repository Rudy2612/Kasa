import logements from "../../assets/logements.json"
import { useParams } from "react-router-dom"
import Carroussel from "../../components/carrousel";
import Tags from "../../components/tags";
import Host from "../../components/host";
import Rating from "../../components/rating";
import Dropdown from "../../components/dropdown";
import Error from "../../pages/error/error"



export default function Logement() {
    let { id } = useParams();
    let logement = logements.find((element) => element.id === id)

    if (!logement)
        return <Error />

    return (
        <div className="logement">
            <Carroussel pictures={logement.pictures} title={logement.title} />

            <div className="logement__wrap">

                <div>
                    <div className="logement__title">
                        <h1>{logement.title}</h1>
                        <p>{logement.location}</p>
                    </div>

                    <Tags tags={logement.tags} />
                </div>

                <div className="logement__host-wrap">
                    <Host host={logement.host} />
                    <Rating rating={logement.rating} />
                </div>

            </div>

            <div className="logement__details-wrap">
                <Dropdown title={'Description'} content={logement.description} />
                <Dropdown title={'Équipements'} content={logement.equipments} />
            </div>
        </div>
    )
}
