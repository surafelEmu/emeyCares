import './styles/home_styles/style.css'
import './styles/home_styles/query.css' ;

import { useEffect } from 'react';
import {loadServices} from './action/servicesAction' ;
import {useDispatch , useSelector} from 'react-redux'


function App() {

  const dispatch = useDispatch() ;
  useEffect(() => {
    dispatch(loadServices('This is from app.js')) ;
  })

  return (
    <body>
    <header>
        <div id="my_nav" class="nav-bar">
            <div class="logo">
                EmeyCares
            </div>
            <nav class="navs">
                <a href="http://127.0.0.1:5501/pages/home/index.html">Home</a>
                <a href="http://127.0.0.1:5501/pages/services/index.html">Services</a>
                <a href="http://127.0.0.1:5501/pages/blog/index.html">Blogs</a>
                <a href="http://127.0.0.1:5501/pages/about/index.html">About Us</a>
                <a href="#">Book Now</a>
            </nav>

            <button onclick="openNav()" class="mobile-nav">
                <svg  xmlns="http://www.w3.org/2000/svg" class="ionicon nav-open" viewBox="0 0 512 512"><title>Menu</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 160h352M80 256h352M80 352h352"/></svg>
    
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon nav-close"  viewBox="0 0 512 512"><title>Close</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg>        </button>
    
        </div>
       
        <div class="hero_section">
            <div class="hero-message">
                
                <p>
                    New way of professional care and Therapy service tailored for you in your own home.
                </p>

    
            </div>

            <div class="hero_img">
                <img src="./assets/elderly_care_02.jpg"  alt="" />
                <div class="hero-shape">

                </div>
            </div>
            

            <div class="action-section">

                <div class="action-first">
                    <img src="./assets/icons/icons8-search-24.png" alt="" />
                    <p>I'm looking for</p>
                </div>
                
                <div class="dropdown	">
                    <button onclick="myFunction()" class="dropbtn">Dropdown</button>
                    <div id="myDropdown" class="dropdown-content">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                    </div>
                </div>
                <div class="action">
                    <a href="#">Book Know!</a>
                </div>
            </div>
            
        </div>

       
       

    </header>
    <div class="body">
        <div class="services">
            <div class="services-message">
                <div class="services-message-top">
                    <h3>
                        Personalized Care, Real Convienience
                    </h3>
                    <p>
                        With our Continously Trained and Professional care takers,You leave all worries to us.We are Family.he demonstrates superb leadership and organizational skills in leading group projects.
                    </p>
                </div>
    
                <div class="services-list">
                    <div class="service">
                        <img src="./assets/icons/icons8-home-100.png" alt="" />
                        <h4>Home Care</h4>
                        <p>We bring the care your need to your door steps.</p>
                    </div>
                    <div class="service">
                        <img src="./assets/icons/icons8-trust-100.png" alt="" />
                        <h4>Real RelationShip</h4>
                        <p>We aspire to make real change.We care becouse, we are family.</p>
                    </div>
                    <div class="service">
                        <img src="./assets/icons/icons8-hospital-100.png" alt="" />
                        <h4>You Choose</h4>
                        <p>Do you have some one in mind? See raings and reviews to decide the best fit for you.</p>
                    </div>
                </div>
            </div>
    
                <div class="services-special">
                    <h2 class="special-heading">
                        Special Treatments
                    </h2>
                    <div class="special">
                        <div class="special-message">
                            <h3 class="heading">
                                Care For Autism
                            </h3>
                            <p>
                                We have a dedicated care givers, who Continously trained to make real change.
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                            </p>
                            <div class="special-btn">
                                <a href="" class="btn">
                                    Learn More
                                </a>
                            </div>
                            
                        </div>
                        <img src="./assets/autism_care_02.jpg" alt="" />
                    </div>
                    <div class="special">
                        <img src="./assets/elderly_care_01.jpg" alt="" />
                        <div class="special-message">
                            <h3 class="heading">
                                Elderly Care
                            </h3>
                            <p>
                                Our Care givers do adapt to any personality 
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                            </p>
                            <div class="special-btn">
                                <a href="" class="btn">
                                    Learn More
                                </a>
                            </div>
                            
                        </div>
                    </div>
    
                    <div class="special">
                        <div class="special-message">
                            <h3 class="heading">
                                Professional Health Care
                            </h3>
                            <p>
                                We have professional nurses who can work with your doctor to give the best treatment your loved one deserve
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                            </p>
                            <div class="special-btn">
                                <a href="" class="btn">
                                    Learn More
                                </a>
                            </div>
                            
                        </div>
                        <img src="./assets/home_nursing_01.png" alt=""/>
                    </div>
             
    
                </div>
    
    
                
        </div>
    
        <div class="how_to">
            <h2 class="how_to-heading">
                It only Takes Few Steps
            </h2>
    
            <div class="how_to-steps">
                <div class="step">
                    <div class="step-heading">
                        <h4 class="num">1</h4>
                        <h3 class="step-title">
                            Step 1
                        </h3>
    
                    </div>
                    <div class="step-message">
                        We have professional nurses who can work with your doctor to give the best treatment your loved one deserve
    
                    </div>
                </div>
                <div class="step">
                    <div class="step-heading">
                        <h4 class="num">2</h4>
                        <h3 class="step-title">
                            Step 2
                        </h3>
    
                    </div>
                    <div class="step-message">
                        We have professional nurses who can work with your doctor to give the best treatment your loved one deserve
    
                    </div>
                </div>
                <div class="step">
                    <div class="step-heading">
                        <h4 class="num">3</h4>
                        <h3 class="step-title">
                            Step 3
                        </h3>
    
                    </div>
                    <div class="step-message">
                        We have professional nurses who can work with your doctor to give the best treatment your loved one deserve
    
                    </div>
                </div>
            </div>

            <div class="btn2-cont">
                <a href="" class="btn2">
                    Get Started
                </a>
            </div>
                
            </div>
    
    </div>

    <div class="care_givers">
        <div class="care-giver giver-1">
            <div class="care-giver-img">
                <img src="./assets/icons/care-givers/caregiver-01.jpg" alt="" />
            </div>
            <div class="care-giver-icon">
            <img class="icon"  src="./assets/icons/care-givers/icons8-health-64-1.png" alt="" />
            </div>
        
        </div>

        <div class="care-giver giver-2" >
            <div class="care-giver-img">
                <img src="./assets/icons/care-givers/caregiver-02.jpeg" alt="" />
            </div>
            <div class="care-giver-icon">

            <img class="icon" src="./assets/icons/care-givers/icons8-care-64.png" alt=""  />
            </div>
        </div>
        <div class="care-giver giver-3">
            <div class="care-giver-img">
                <img src="./assets/icons/care-givers/caregiver-03.png" alt="" />
            </div>
            <div class="care-giver-icon">
                <img class="icon" src="./assets/icons/care-givers/icons8-health-64-2.png" alt="" />

            </div>
            
        </div>

        <div class="care_givers-message">
            <h2 class="care_givers-message-heading">
                Our Care Givers
            </h2>
            <p class="care_givers-about">
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            </p>
        </div>

        <div class="shape">

        </div>

    </div>

    <div class="recent_blogs">
        <h2 class="latest_blogs-heading">
            Latest Blogs
        </h2>

        <div class="blogs">
            <div class="blog">
                <img src="./assets/care_01.jpg" alt="" />
                <div class="blog-message">
                    <small>02/01/2022</small>
                    <h2 class="blog-heading">
                        Making an Impact
                    </h2>
                    <p>                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </p>
                    <a href="">Read More</a>
                </div>
            </div>
    
            <div class="blog">
                <img src="./assets/care_01.jpg" alt="" />
                <div class="blog-message">
                    <small>02/01/2022</small>
                    <h2 class="blog-heading">
                        Making an Impact
                    </h2>
                    <p>                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </p>
                    <a href="">Read More</a>
                </div>
            </div>
    
            <div class="blog">
                <img src="./assets/care_01.jpg" alt="" />
                <div class="blog-message">
                    <small>02/01/2022</small>
                    <h2 class="blog-heading">
                        Making an Impact
                    </h2>
                    <p>                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </p>

                    <div class="blog-btn">
                        <a href="">Read More</a>
                    </div>

                </div>
            </div>
        </div>
       
    </div>

    <footer> 
        2022 emeyCares Plc
    </footer>
  
    
</body>
  );
}

export default App;
