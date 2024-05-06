import Banner from "../../components/banner";
import about from "../../assets/about.png"
import aboutList from "../../assets/aboutList.json"
import Dropdown from "../../components/dropdown";

export default function About() {
    return (
        <div className="about">

            <Banner img={about} />

            <div className="about__wrap">

                {aboutList.map((e, i) => {
                    return (<Dropdown key={i} title={e.title} content={e.content} />)
                })}
            </div>

        </div>
    )
}
