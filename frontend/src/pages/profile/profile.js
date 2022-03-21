import {useState , useEffect} from 'react' ;

import './style.css'

export default function () {
    return (
        <div class="container">
        <div class="top">
            <div class="top_right">
                <img src="../../assets/icons/care-givers/caregiver-01.jpg" alt="" srcset="" />

                <div className="caregiver_desc">
                    <div className="ratings">4 Stars</div>
                <div className="schedules">
                    <div className="schedule">
                        WeekDays (7am to 8pm)
                    </div>
                    <div className="schedule">
                        WeekDays (7am to 8pm)
                    </div> <div className="schedule">
                        WeekDays (7am to 8pm)
                    </div>
                </div>
                </div>
            </div>
            <div class="top_left">
                <div class="content">
                    <h4 class="title">
                        Name :
                    </h4>
                    <p class="desc">
                        Abeba
                    </p>
                </div>
                <div class="content">
                    <h4 class="title">
                        Age :
                    </h4>
                    <p class="desc">
                        33
                    </p>
                </div>
                <div class="content_list">
                    <h4 class="title">
                        Professions :
                    </h4>
                    <div class="detail_list">
                        {
                            [1,2,3].map(det => (
                            
                        <div className="des">
                        <p key={det} class="desc">
                         Abeba {det}
                        </p>
                        <p className="yrOfExp">
                            3 yrs
                        </p>
                        </div>
                            ))
                        }

                    </div>
                </div>
                <div class="content_list">
                    <h4 class="title">
                        Languages :
                    </h4>
                    <div class="detail_list">
                        {
                            [1,2,3].map(det => (
                            
                        <div className="des">
                        <p key={det} class="desc">
                         Abeba {det}
                        </p>
                        <p className="yrOfExp">
                            Fluent
                        </p>
                        </div>
                            ))
                        }

                    </div>
                </div>
                

            </div>
        </div>


        <div class="comments">
                <h2>Comments</h2>
                <div class="comment">
                    <div class="top">
                        <div class="person">
                            <img src="../../assets/icons/care-givers/caregiver-03.png" alt="" />
                            <small>Samira Jemal</small>
                            <p>
                                Jovember 22 2022 at 6:00 am
                            </p>
                        </div>
                        <a href="#">Reply</a>
                    </div>
                    
                    <p class="comm">When a cat is frightened, its pupils grow bigger. This is to allow the cat to absorb as much information as possible. When the cat is angry or aroused, its pupils narrow in order to enable it to zoom in on tiny details. Do note, however, that since cats? pupils also change size according to the light, you should pay attention to its body language when trying to figure out how it is feeling.</p>
                </div>
            </div>


        {/* <div className="comments">
            {[1,3,4].map(com => (

            <div key={com} className="comment">
                <div className="top">
                    <img src="../../assets/icons/care-givers/caregiver-01.jpg" />

                    <div className="rating">
                        3 stars
                    </div>
                </div>
                <div className="bottom">
                    She is the best care taker
                </div>
            </div>
            ))}
        </div> */}

    </div>
    )
}
