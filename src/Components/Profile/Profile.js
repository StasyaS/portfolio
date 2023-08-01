import { useEffect, useState } from 'react';
import '../../styles/profile.scss';
import { photos } from './data';
// ./
// ../
import arrow_down from '../../images/icons/arrow_down.png';
import arrow_downYELL from '../../images/icons/arrow_downYELL.png';


const Profile = () => {
    const [isShow, setIsShow] = useState(false);
    const [isShow2, setIsShow2] = useState(false);

    const [render, setRender] = useState(0)
    const [isMovePhoto, setIsMovePhoto] = useState(false)
    const [photo, isPhoto] = useState({
        next : 1,
        current : 0
    })
    const clickShow = () => {
        setIsShow(!isShow)
    };
    const clickShow2 = () => {
        setIsShow2(!isShow2)
    }

    useEffect(()=>{
        const n = photo.next;
        setTimeout(()=>{
            setIsMovePhoto(true)
            setTimeout(()=>{
                isPhoto({
                    next : n,
                    current : n
                })
            },1200)

            setTimeout(()=>{
                const next = photos.length - 1 === n ? 0 :  n + 1
                isPhoto({
                    next : next,
                    current : n
                })
                    setIsMovePhoto(false)
                setRender(render + 1)
            },2200)

        },2000)

    },[render])


    console.log();

    return (
        <div>
            <div className="width container1">
                <div className="container ">

                    <div className="img">
                        <div className='profile-img'>
                            <img className='profile-current-img' src={photos[photo.current]} />
                            <div className='next-img-c'>
                                <img className={'next-img ' + (isMovePhoto ? "move" : "")} src={photos[photo.next]}/>
                            </div>
                        </div>

                        <h1>
                            p​ortfolio
                        </h1>
                    </div>
                   
                    <div className="objective_block">
                        <div className="objective">
                            Hello buddy, My name is Stasya! 
                            <br/>To leverage my skills and experience as a front-end developer to
                            contribute to the success of a dynamic organization. I aim to utilize my expertise in HTML5, CSS3,
                            JavaScript, Git, Magento4, Umbraco, WordPress, Jira ... and  React to create engaging and user-friendly web interfaces.
                            <p>
                                With a strong eye for design and a passion for delivering high-quality code, I am committed to
                                crafting seamless and visually appealing websites that provide exceptional user experiences.
                            </p>
                            { isShow === true && 
                                <div className='hidden'>
                                    <p>
                                        I am dedicated to surpassing expectations and delivering outstanding user experiences.
                                    </p>
                                    <p>
                                        As a detail-oriented professional, I strive for excellence in every project,
                                        consistently exceeding goals and driving impactful results.
                                    </p>
                                    <p>
                                        I am eager to join a forward-thinking organization where I can utilize my talents to contribute to innovative web development initiatives and foster continuous growth.
                                    </p>
                                </div>
                            }
                        </div>
                        <img src={arrow_down} onClick={clickShow}/>
                    </div>

                </div>
            </div>

            <div className="width container2">
                <div className="container ">
                    <div className="objective_block">
                        <div className="objective">
                            Today, I'm excited to share with you the world of front-end development and how it plays a crucial role in creating captivating and user-friendly web experiences. 
                            <p>
                                My name is Nastasiia, and I'm here to guide you through the exciting journey of front-end development.
                            </p>
                            <p className="h2">User Interface (UI) Design </p>
                            <div>
                                Collaboration between designers and front-end developers.
                                <p>Implementing UI designs using HTML, CSS, and JavaScript.</p>
                                Creating visually appealing and responsive user interfaces.
                            </div>

                            <p className="h2">JavaScript</p>
                            { isShow2 === true &&  
                                <>
                                <div>
                                    Enhancing interactivity and functionality with JavaScript.
                                    DOM manipulation and event handling.
                                    Popular JavaScript libraries and frameworks (e.g., React, Angular, Vue.js).
                                </div>

                                <p className="h2">HTML5</p>
                                <div>
                                    Structure and semantics of HTML5.
                                    <p>Key HTML5 elements and attributes.</p>
                                    Building the foundation of a web page with HTML5.
                                </div>

                                <p className="h2">CSS3</p>
                                <div>
                                    Styling web pages with CSS3.
                                    <p>Cascading, specificity, and inheritance.</p>
                                    Utilizing CSS frameworks (e.g., Bootstrap) for efficient development.
                                </div>

                                <p className="h2">Responsive Web Design</p>
                                <div>
                                    Creating websites that adapt to different devices and screen sizes.
                                    Media queries and responsive design techniques.
                                    Mobile-first development approach.
                                </div>    
                            
                                <p className="h2">Performance Optimization</p>
                                <div>
                                    Importance of optimizing front-end performance.
                                    Techniques for improving page load times (e.g., minification, caching).
                                    Performance testing and monitoring tools (e.g., Lighthouse, GTmetrix).
                                </div>

                                <p className="h2">Accessibility</p>
                                <div>
                                    Ensuring inclusive web experiences for all users.
                                    Implementing accessibility best practices (e.g., semantic markup, ARIA roles).
                                    Testing and auditing for accessibility compliance.
                                </div>

                                <p className="h2">Version Control and Collaboration</p>
                                <div>
                                    Using Git for version control and collaboration.
                                    Branching, merging, and resolving conflicts.
                                    Collaboration tools (e.g., GitHub, Bitbucket) for team development.
                                </div>


                                <p className="h2">Cross-Browser Compatibility</p>
                                <div>
                                    Challenges and considerations for different web browsers.
                                    Browser testing and debugging techniques.
                                    Utilizing polyfills and vendor prefixes for consistent experiences.
                                </div>

                                <p className="h2">Performance and Usability Testing</p>
                                <div>
                                    Importance of testing for performance and usability.
                                    Testing methodologies (e.g., manual, automated, A/B testing).
                                    Tools for testing and optimizing front-end performance.
                                </div>

                                <p className="h2">Continuous Learning and Growth</p>
                                <div>
                                    Evolving nature of front-end development.
                                    Resources for staying up-to-date (e.g., blogs, online courses, conferences).
                                    Building a portfolio and engaging in open-source projects.
                                </div>

                                <p className="h2">Conclusion:</p>
                                <p>Front-end development is a captivating field that merges creativity, 
                                    technical skills, and user-centered thinking. By mastering HTML, CSS, 
                                    and JavaScript, along with other relevant technologies, you can shape 
                                    the digital world and create memorable web experiences for users. 
                                </p>
                                <p>
                                    Embrace the ever-evolving nature of front-end development, continue learning, and let your creativity soar!
                                </p>
                                <p>Thank you, and I'm happy to answer any questions you may have.</p>
                                </>
                            }
                        </div>
                        <img src={arrow_downYELL} onClick={clickShow2} />
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Profile;
