import mine from '../images/mine.jpg'
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/JS.png";
import react from "../images/react.png";
import jquery from "../images/jquery.svg";
import git from "../images/git.svg";

const Home = () => {
    return (
        <div className="page">
            <aside>
                <section className="profile">
                    <img src={mine} alt="mine" className='mine'/>
                    <h1>Toyib Lawal</h1>
                    <p>Front-End Devloper</p>
                    <div>
                        <i className="fas fa-envelope"></i>
                        toyibe25@gmail.com
                    </div>
                    <div>
                        <i className="fas fa-phone"></i>
                        (234) 9073002599
                    </div>
                    <div>
                        <i className="fas fa-location-dot"></i>
                        Ilorin, Nigera
                    </div>
                    <div>
                        <a
                            href="https://linkedin.com/in/toyib-lawal"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-linkedin"></i>
                            linkedin.com/in/toyib-lawal
                        </a>
                    </div>
                    <div>
                        <a
                            href="https://github.com/GeekyCoder25"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-github"></i>
                            github.com/GeekyCoder25
                        </a>
                    </div>
                </section>
                <section className="about">
                    <div>
                        <h1>EDUCATION</h1>
                        <p>Bachelor of Engineering</p>
                        <p>Computer Engineering</p>
                        <p className="school">Bayero University</p>

                        <p>
                            <i className="fas fa-calendar"></i>2020 - Present
                        </p>
                        <p>
                            <i className="fas fa-location-dot"></i>Kano, Nigeria
                        </p>
                    </div>
                    <h1>SKILLS</h1>
                    <h2>Languages</h2>
                    <p className="image">
                        <img src={html} alt="html" />
                        HTML
                    </p>
                    <p className="image">
                        <img src={css} alt="css" />
                        CSS
                    </p>
                    <p className="image">
                        <img src={js} alt="js" />
                        JavaScript
                    </p>
                    <h2>Libraries</h2>
                    <p className="image">
                        <img src={react} alt="react" />
                        React
                    </p>
                    <p className="image">
                        <img src={jquery} alt="jquery" />
                        jQuery
                    </p>
                    <h2>CI/CD</h2>
                    <p className="image">
                        <img src={git} alt="git" />
                        GIT
                    </p>
                </section>
            </aside>
            <main>
                <section>
                    <h1>PROFILE</h1>
                    <p>
                        Meticulous Frontend developer with over 2 years of frontend
                        experience, with passion and dedication for responsive website
                        design and a firm believer in the mobile first approach. I have
                        experience with HTML, CSS, JavaScript and React and I've built
                        different projects and UI landing pages with them{" "}
                    </p>
                </section>
                <section className="work">
                    <h1>AREAS OF INTEREST</h1>
                    <ul>
                        <li>Web Development</li>
                        <li>Mobile App Development</li>
                        <li>Blogger</li>
                        <li>Open Source</li>
                    </ul>
                </section>
                <section>
                    <h1>Experiences</h1>
                    <ul>
                        <li>
                            Implemented Website and Landing pages from concept through
                            development
                        </li>
                        <li>
                            Standardized all outputs with a new, responsive, mobile-first
                            approach and strategy
                        </li>
                        <li>Assessed UX and UI designs for technical feasibilty</li>
                    </ul>
                </section>
                <section>
                    <h1>Personal Projects</h1>
                    <p>Some of past projects include:</p>
                    <ul>
                        <li>
                            <a href="https://geekycoder25.github.io/Portfolio/" rel="noreferrer">Portfolio</a></li>
                        <li><a href="https://geekycoder25.github.io/Dees-Estate/">Dee's Estate</a></li>
                        <li><a href="https://geekycoder25.github.io/Skillers/" rel="noreferrer">Skillers</a></li>
                        <li><a href="https://geekycoder25.github.io/Snap/">Snap</a></li>
                        <li> <a href="https://geekycoder25.github.io/MagVerse/
                                " rel="noreferrer">Magverse</a>
                        </li>
                        <li> <a href="https://geekycoder25.github.io/Resume/
                                " rel="noreferrer">Resume</a>
                        </li>
                    </ul>
                </section>
                <section>
                    <h1>Languages</h1>
                    <ul>
                        <li>Yoruba - Native</li>
                        <li>English - Fluent</li>
                        <li>Hausa - Average</li>
                    </ul>
                </section>
            </main>
        </div>
    );
};

export default Home;
