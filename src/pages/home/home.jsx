import banner from "../../assets/banner.png"
import Banner from "../../components/banner"
import ThumbnailGrid from "../../components/thumbnail_grid"

export default function Home() {

    return (
        <div className="home">

            <Banner img={banner} text={"Chez vous, partout et ailleurs"} />

            <div>
                <ThumbnailGrid />
            </div>
        </div>
    )
}
