import "../../styles/experience.scss";

function Experience() {
    return (
        <div className="background">
            <div className="gallery container">
                <div className="card">
                    <a href="https://rrtalberta.ca/">
                        <img src="img/shutterstock.jpg" />
                    </a>
                    {/* <video>
                            <source src="img/shutterstock.mp4" type="video/mp4">
                        </video> */}
                </div>
                <div className="card">
                    <a href="https://www.healthcareexcellence.ca/">
                        <img src="img/hec_visuals_covid.png" />
                    </a>
                </div>
                <div className="card">
                    <a href="https://don-key.finance/">
                        <img src="img/donkey.png" />
                    </a>
                </div>
                <div className="card">
                    <a href="http://joinposter.com/en">
                        <img src="img/restaurant-pos-en.webp" />
                    </a>
                </div>
                <div className="card">
                    <a href="https://aquapolis.ua/">
                        <img src="img/swimm.jpg" />
                    </a>
                </div>
                <div className="card">
                    <a href="https://stasyas.github.io/MiniProjects/choiceElem.html">
                        <img src="img/git.png" /> 
                    </a>
                </div>
            
            </div>
        </div>
    )
}

export default Experience;