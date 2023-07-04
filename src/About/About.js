import React from 'react';
import Innerbanner from '../Common/Banners/Innerbanner';
import Contentbanner from '../Common/Banners/Contentbanner';
import about1 from '../images/About/about-1.png';
import about2 from '../images/About/about-2.png';
import about3 from '../images/About/about-3.png';
import bgImg1 from '../images/About/about-c-1.png';
import howworks from '../images/About/how-we-work.png'
import Teams from './Teams';
import './About.css';



const About = () => {



    const data = {
        pageTitle: "About",
        pageHeading: "The design team giving life to automation",
        pageContent: "A team of experienced user researchers, UX architects, visual designers, content creators and consultants. An initiative of WNS Vuram. We help organisations to design people-centred solutions.",
    };

    document.title = "About";

    return (
        <div className='about'>



            <useDocumentTitle data={data} />

            <div className='headbanner'>
                <div className='container'>
                    <Innerbanner data={data} />
                    <div className="w-counts mb-5 ">
                        <div className="count me-5 ">
                            <h3 className="min-lg-f80">20+</h3>
                            <p className="f-monts">Commercialised Services</p>
                        </div>
                        <div className="count">
                            <h3 className="min-lg-f80">110+</h3>
                            <p className="f-monts">Projects Launched</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-banner bg-yellow bgimg1">
                <Contentbanner image={bgImg1} />
            </div>

            <div className="works section-wrap">
                <div className="container">
                    <div className="section-head pb-5 mb-3 text-center" >
                        <h2>We believe In…</h2>
                    </div>
                    <div className="works-content text-left">

                        <div className="row" >
                            <div className="col-lg-6 col-sm-12">
                                <div className="w-images">
                                    <img src={about1} alt="" title="" className="img-md-100" />
                                </div>

                            </div>
                            <div className="col-lg-6 col-sm-12 position-relative">
                                <div>
                                    <div className="w-header">

                                        <h4>Humanity centred design</h4>
                                    </div>
                                    <div className="w-content pt-1 mt-3 mb-4">
                                        <p>Human-centered design is a problem-solving approach that puts people at the center of the design process. It involves understanding the needs, wants, and behaviors of the people who will use or interact with the product, service, or system being designed.</p>

                                        <p>Human-centered design involves several stages, including research, ideation, prototyping, and testing. During the research phase, designers gather insights about the users and their needs through methods such as interviews, surveys, and observation.</p>

                                        <p>During the ideation phase, designers brainstorm and generate ideas that address the needs and insights gathered during the research phase. The prototyping phase involves creating low-fidelity and high-fidelity prototypes to test and refine the ideas. Finally, during the testing phase, designers gather feedback from users and iterate on the design to improve its usability and effectiveness.</p>
                                    </div>

                                </div>
                            </div>


                        </div>
                        <div className="clr clr-100"></div>
                        <div className="row" >

                            <div className="col-lg-6 col-sm-12 position-relative">
                                <div>
                                    <div className="w-header">

                                        <h4>Balancing people, business and technology perspectives</h4>
                                    </div>
                                    <div className="w-content pt-1 mt-3 mb-4">
                                        <p>People perspective: Understanding the needs, wants, and behaviours of users are essential for creating a product that people will use and love. By incorporating a people perspective, designers can create products that are intuitive, accessible, and enjoyable to use.</p>

                                        <p>Business perspective: It’s important to consider the business goals and constraints when designing a product. A product that doesn’t align with the company’s goals or can’t be produced efficiently may not be sustainable in the long run. By incorporating a business perspective, designers can create products that are both user-friendly and financially viable.</p>

                                        <p>Technology perspective: Understanding the technical capabilities and limitations is important for designing a product that can be built and maintained effectively. By incorporating a technology perspective, designers can ensure that the product is feasible to develop and can be maintained and updated as needed. </p>
                                    </div>


                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <div className="w-images">
                                    <img src={about2} alt="" title="" className="img-md-100" />
                                </div>

                            </div>

                        </div>
                        <div className="clr clr-100"></div>
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <div className="w-images">
                                    <img src={about3} alt="" title="" className="img-md-100" />
                                </div>

                            </div>
                            <div className="col-lg-6 col-sm-12 position-relative">
                                <div>
                                    <div className="w-header">

                                        <h4>Evidence based UX design</h4>
                                    </div>
                                    <div className="w-content pt-1 mt-3 mb-4">
                                        <p>The goal of evidence-based UX design is to create digital products that are user-centered, effective, and efficient. By using evidence to inform design decisions, designers can create interfaces and products that are more likely to meet the needs and preferences of users. Some of the key methods and techniques used in evidence-based UX design include:</p>

                                        <p>User research: Conducting user research through methods such as interviews, surveys, and usability testing to gather insights about users’ needs, goals, and behaviours.</p>

                                        <p>Analytics: Analysing user data, such as website traffic, click-through rates, and conversion rates, to gain insights into user behaviour.</p>

                                        <p>A/B testing: Conducting A/B testing to compare two different versions of a design and determine which performs better with users.</p>

                                        <p>Expert reviews: Seeking feedback and input from experts in UX design, information architecture, and other related fields.</p>
                                    </div>

                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>

            <div className="content-banner bg-light bgimg2 mb-5">
                <div className="contentbanner-wrap">
                    <div className="container">
                        <div className="content-details text-center pt-5 pb-5">
                            <div className="w-header">
                                <h2 className='mt-5 mb-4'>How we work?</h2>
                            </div>
                            <div className='w-fullimg'>
                                <img src={howworks} alt="" title="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='how-contents'>
                <div className="contentbanner-wrap pt-5">
                    <div className="container">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                            <div className='col-lg-6'>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Teams />

        </div>
    )
}

export default About