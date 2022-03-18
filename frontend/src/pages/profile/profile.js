import {useState , useEffect} from 'react' ;


export default function () {
    return (
        <div class="bag">
        <div class="top">
            <div class="top_right">
                <img src="../../assets/icons/care-givers/caregiver-01.jpg" alt="" srcset="" />
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
                <div class="content">
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
                <div class="content">
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


        <div className="comments">
            {[1,3,4].map(com => (

            <div key={com} className="comment">
                <div className="top">
                    <img src="./assets/icons/caregivers/caregiver-01.jpg" />
                    <div className="rating">
                        3 stars
                    </div>
                </div>
                <div className="bottom">
                    She is the best care taker
                </div>
            </div>
            ))}
        </div>

    </div>
    )
}
