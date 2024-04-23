import logements from "../../assets/logements.json"
import Thumb from "../thumb/thumb"

export default function ThumbnailGrid() {
    return (
        <div className="thumbnail-grid">
            {logements.map((e) => {
                return <Thumb id={e.id} title={e.title} cover={e.cover} key={e.id} />
            })}
        </div>
    )
}
