import React from 'react'

import * as Unicons from '@iconscout/react-unicons';

const About = () => {
    return (
        <div>
            <section className="about section" id="about">
                <h2 className="section__title">About Me</h2>
                <span className="section__subtitle">My introduction</span>

                <div className="about__container container grid">
                    <img src="assets/img/about.jpg" alt="" className='about__img'/>

                    <div className="about__data">
                        <p className="about__description">
                            Web develover, with extensive knowloedge and years of experience, working in web technologies and UI/UX design, delivering quality work.
                        </p>

                        {/* <!-- <div className="about__info">
                            <div>
                                <span className="about__info-title">08+</span>
                                <span className="about__info-name">Years <br> experience</span>
                            </div>
                            <div>
                                <span className="about__info-title">20+</span>
                                <span className="about__info-name">Completed <br> project</span>
                            </div>
                            <div>
                                <span className="about__info-title">05+</span>
                                <span className="about__info-name">Companies <br> worked</span>
                            </div>
                        </div> --> */}
                        <div className="about__button">
                            <a download="" href="assets/pdf/Wildan-CV.pdf" className="button button--flex">
                                Download Cv <Unicons.UilDownloadAlt className="button__icon" />
                            </a>
                        </div>
                    </div>
                </div>
        
            </section>
        </div>
    )
}

export default About;
