import banner from "../../assets/banner.png"
import ThumbnailGrid from "../../components/thumbnail_grid/thumbnail_grid"

export default function Home() {

    return (
        <div className="home">

            <div className="home__banner">
                <img src={banner} alt="banner"></img>
                <div className="home__banner__text">
                    <h1>Chez vous, partout et ailleurs</h1>
                </div>
            </div>

            <div>
                <ThumbnailGrid />
            </div>
        </div>
    )
}
