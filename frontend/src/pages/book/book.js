import {useState , useEffect} from 'react' ;
import {bookNow} from '../../action/bookingAction'

import stock from '../../utils/stock';


import './style.css' ;

import './script.js' ;

import { useDispatch, useSelector  } from 'react-redux';


export default function () {

    const stock_nxt = new stock() ;
    const stock_bck = new stock() ;


    const [data , setData] = useState({
        firstName: '' ,
        lastName: '' ,
        gender: '' ,
        dateofBirth: '' ,
        city: '' ,
        subCity: '' ,
        street: '' ,
        phone: ''
    })


    const {firstName , lastName , gender , dateofBirth , city ,
                subCity , street , phone} = data ;

    


    console.log(stock_bck)

    const dispatch = useDispatch() ;

    useEffect(() => {


    } ,[])


    function onChange(e) {
        console.log(e.target.className) ;
        let flag = '' ;
        flag = e.target.className.split(' ') ;
        console.log('.................Here i am....................')
        console.log(flag)
        if(flag[0] === 'btn') {
            if(flag[1] === 'btn_nxt') {
                console.log(data) ;
                dispatch(bookNow(data)) ;
            }
            console.log('i am here') ;
        }else {
            setData({...data , [e.target.className]: e.target.value})
        }
    }




    return (
        <body>

    <div className="header_bag">
        <h2>Book Your Caregiver</h2>

        <div className="progress">
            <div className="step one">
                <p>Client's Info</p>
                <div className="counter counter_1">
                    
                        <span>1</span> 
                        <svg className="checked" xmlns="http://www.w3.org/2000/svg" width="192" height="250" fill="#ffff" viewBox="0 0 256 256"><rect width="256" height="260" fill="none"></rect><polyline points="216 72 104 184 48 128" fill="none" stroke="#f1f7f7" stroke-linecap="round" stroke-linejoin="round" stroke-width="25"></polyline></svg>         
            </div>
            </div>
            <div className="step two">
                <p>Choose your Care giver</p>
                <div className="counter counter_2">
                    <span>2</span>
                    <svg className="checked" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#ffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="216 72 104 184 48 128" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>
                </div>
            </div>
            <div className="step three">
                <p>Terms and Conditions</p>
                <div className="counter counter_3">
                    <span>3</span>
                    <svg className="checked" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#ffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="216 72 104 184 48 128" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>
                </div>
            </div>
            <div className="step four">
                <p>Conformation</p>
                <div className="counter counter_4">
                    <span>4</span>
                    <svg className="checked" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#ffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="216 72 104 184 48 128" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>
                  </div>
            </div>
        </div>
    </div>



    <div className="bag">

        


        <div className="container personal_Info oneC on" id="oneC">
            <div className="container_left">
                
                <h4>Full Name</h4>

                <div className="name_container">
                    <input value={firstName} className="firstName" onChange={onChange} id="Name_f" type="text" placeholder="First Name" />
                    <input value={lastName} className="lastName" onChange={onChange} id="Name_l" type="text" placeholder="Last Name" />
                </div>
                <small id="error_Name" className="error"></small>
                <div className="gender_and_Dbirth">
                   
                <div className="dropdown">
                    <button onClick="myFunction()" className="dropbtn">Gender</button>
                    <div id="myDropdown" className="dropdown-content">
                    <a href="#home">Male</a>
                    <a href="#about">Female</a>
                    </div>
                </div>
                
                <div className="dateofBirth">
                <small>Date of Birth</small>
                <input  className="birthDate" onChange={onChange} id="gb_birth"  placeholder="Date of Birth" type="date" onfocus="{this.type='date'}" />
                </div>
                
            </div>
            <small id="error_gb" className="error"></small>
                
                <div className="address">
                    <h4>Address</h4>
                    <div>

                        <input value={city} className="city" onChange={onChange} id="address_city" type="text" placeholder="City" />
                        <input value={subCity} className="subCity" onChange={onChange} id="address_subCity" type="text" placeholder="SubCity" />
                        <input value={street} className="street" onChange={onChange} id="address_street" type="text" placeholder="Street Address" />
                        <input value={phone} className="phone" onChange={onChange} id="address_phone" type="number" placeholder="Phone Number" /> 
                    </div>
                </div>
 
            <small id="error_address" className="error"></small>

                
            </div>

      
    
            <div className="container_right">
                      
                <div className="inner_container">

                    <div className="medical_container">
                        <p>past medical problem</p>
                        <div className="medical_problems">
                            <input onChange={onChange} type="text" placeholder="ex a hart surgery" />
                            <div>
                                <button>+</button>
                                <button>x</button>
                            </div>
                        </div>
                    </div>
    
                    <div className="medical_container">
                        <p>Any kind of medicaions currently taking</p>
                        <div className="medical_problems">
                            <input onChange={onChange} type="text" placeholder="ex a hart surgery" />
                            <div>
                                <button>+</button>
                                <button>x</button>
                            </div>
                        </div>
                    </div>
    
                    <div className="medical_container">
                        <p>current medical problems</p>
                        <div className="medical_problems ">
                            <input onChange={onChange} type="text" placeholder="ex a hart surgery" />
                            <div>
                                <button>+</button>
                                <button>x</button>
                            </div>
                           

                        </div>
                    </div>
    
                    <div className="medical_container">
                        <p>How can we help?</p>
                        <div className="medical_problems">
                            <input onChange={onChange} type="text" placeholder="ex I need just a baby sitter" />
                            <div>
                                <button>+</button>
                                <button>x</button>
                            </div>
                        </div>
                    </div>
        
                </div>
            </div>
    
        </div>


        <div className="container caregiver_detail twoC" id="twoC">
            <div className="caregiver">
                <img src="../../assets/icons/care-givers/caregiver-01.jpg" alt="" srcset="" />
                <div className="personal_info">
                    <h5>Eleanor Pana</h5>
                    <span>age</span>
                    <p>Profession</p>
                    
                    <p className="pay">120 birr/Hr</p>

                    <button>Book Now</button>
                </div>

                <div className="professional_info"> 
                    <p className="memo">Eleanor is a dedecated and compassionate person who has real connection with kids.</p>
                    <p className="aval">She is now avaliable to work 40hr per week including weekends</p>

                    <a href="">See Detail</a>
                </div>

            </div>

            <div className="caregiver">
                <img src="../../assets/icons/care-givers/caregiver-01.jpg" alt="" srcset="" />
                <div className="personal_info">
                    <h5>Eleanor Pana</h5>
                    <span>age</span>
                    <p>Profession</p>
                    
                    <p className="pay">120 birr/Hr</p>

                    <button>Book Now</button>
                </div>

                <div className="professional_info"> 
                    <p className="memo">Eleanor is a dedecated and compassionate person who has real connection with kids.</p>
                    <p className="aval">She is now avaliable to work 40hr per week including weekends</p>

                    <a href="">See Detail</a>
                </div>

            </div>

            <div className="caregiver">
                <img src="../../assets/icons/care-givers/caregiver-01.jpg" alt="" srcset="" />
                <div className="personal_info">
                    <h5>Eleanor Pana</h5>
                    <span>age</span>
                    <p>Profession</p>
                    
                    <p className="pay">120 birr/Hr</p>

                    <button>Book Now</button>
                </div>

                <div className="professional_info"> 
                    <p className="memo">Eleanor is a dedecated and compassionate person who has real connection with kids.</p>
                    <p className="aval">She is now avaliable to work 40hr per week including weekends</p>

                    <a href="">See Detail</a>
                </div>

            </div>
    
        </div>

        <div className="terms threeC" id="threeC">
            <h3>Terms and Conditions</h3>

            <p>
                Terms of Service

These HTML-CSS-JS Analytics Terms of Service (this "Agreement") are entered into by Ruwix Services SRL. ("WWWEEEBBB") and the entity executing this Agreement ("You"). This Agreement governs Your use of this website (the "Service"). BY STAYING ON THIS WEBSITE, AND USING THE SERVICE, YOU ACKNOWLEDGE THAT YOU HAVE REVIEWED AND ACCEPT THIS AGREEMENT AND ARE AUTHORIZED TO ACT ON BEHALF OF, AND BIND TO THIS AGREEMENT. In consideration of the foregoing, the parties agree as specified below.

We may amend this Agreement at any time by posting the amended terms on our Website. We may or may not post notices on the homepage of our Website when such changes occur.

We refer to this Agreement, our Privacy Policy accessible below, and any other terms, rules, or guidelines on our Website collectively as our "Legal Terms." You explicitly and implicitly agree to be bound by our Legal Terms each time you access our Website. If you do not wish to be so bound, please do not use or access our Website.
Limited License

HTML CSS JS grants you a non-exclusive, non-transferable, revocable license to access and use our Website in order for you to make purchases of electronic documents and related services through our Website, strictly in accordance with our Legal Terms.
Copyrights and Trademarks

Unless otherwise stated, all materials including without limitation, logos, brand names, images, designs, photographs, video clips, written and other materials that appear as part of our Website are copyrights, trademarks, service marks, trade dress and/or other intellectual property whether registered or unregistered ("Intellectual Property") owned, controlled or licensed by HTML CSS JS. Our Website as a whole is protected by copyright and trade dress. Nothing on our Website should be construed as granting, by implication, estoppel or otherwise, any license or right to use any Intellectual Property displayed or used on our Website, without the prior written permission of the Intellectual Property owner. HTML CSS JavaScript aggressively enforces its intellectual property rights to the fullest extent of the law. The names and logos of HTML CSS JS, may not be used in any way, including in advertising or publicity pertaining to distribution of materials on our Website, without prior, written permission from HTML CSS Javascript. Fair use of HTML CSS JS’s Intellectual Property requires proper acknowledgment. Other product and company names mentioned in our Website may be the Intellectual Property of their respective owners.
Links to Third-Party Websites

Our Website contains links to Websites owned or operated by parties other than HTML CSS JS. Such links are provided for your reference only. HTML CSS JS does not monitor or control outside Websites and is not responsible for their content. HTML CSS JS’s inclusion of links to an outside Website does not imply any endorsement of the material on our Website or, unless expressly disclosed otherwise, any sponsorship, affiliation or association with its owner, operator or sponsor, nor does HTML CSS JS’ inclusion of the links imply that HTML CSS JS is authorized to use any trade name, trademark, logo, legal or official seal, or copyrighted symbol that may be reflected in the linked Website.
Content Disclaimer

Postings on our Website are made at such times as HTML CSS JS determines in its discretion. You should not assume that the information contained on our Website has been updated or otherwise contains current information. HTML CSS JS does not review past postings to determine whether they remain accurate and information contained in such postings may have been superseded. THE INFORMATION AND MATERIALS IN OUR WEBSITE ARE PROVIDED FOR YOUR REVIEW IN ACCORDANCE WITH THE NOTICES, TERMS AND CONDITIONS SET FORTH HEREIN. THESE MATERIALS ARE NOT GUARANTEED OR REPRESENTED TO BE COMPLETE, CORRECT OR UP TO DATE. THESE MATERIALS MAY BE CHANGED FROM TIME TO TIME WITHOUT NOTICE.
No Warranties; Exclusion of Liability; Indemnification

our website is operated by HTML CSS JS on an "as is," "as available" basis, without representations or warranties of any kind. To the fullest extent permitted by law, HTML CSS JS specifically disclaims all warranties and conditions of any kind, including all implied warranties and conditions of merchantability, fitness for a particular purpose, title and noninfringement for our website and any contracts and services you purchase through it. HTML CSS JS shall not have any liability or responsibility for any errors or omissions in the content of our website, for contracts or services sold through our website, for your action or inaction in connection with our website or for any damage to your computer or data or any other damage you may incur in connection with our website. Your use of our website and any contracts or services are at your own risk. In no event shall either HTML CSS JS or their agents be liable for any direct, indirect, punitive, incidental, special or consequential damages arising out of or in any way connected with the use of our website, contracts and services purchased through our website, the delay or inability to use our website or otherwise arising in connection with our website, contracts or related services, whether based on contract, tort, strict liability or otherwise, even if advised of the possibility of any such damages. In no event shall HTML CSS JS’ liability for any damage claim exceed the amount paid by you to HTML CSS JS for the transaction giving rise to such damage claim.

some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so the above exclusion may not apply to you.

without limiting the foregoing, HTML CSS JS do not represent or warrant that the information on the webite is accurate, complete, reliable, useful, timely or current or that our website will operate without interruption or error.

you agree that all times, you will look to attorneys from whom you purchase services for any claims of any nature, including loss, damage, or warranty. HTML CSS JS and their respective affiliates make no representation or guarantees about any contracts and services offered through our website.
Indemnification

You agree to defend, indemnify and hold HTML CSS JS harmless from and against any and all claims, damages, costs and expenses, including attorneys' fees, arising from or related to your use of our Website or any Contracts or Services you purchase through it.
Privacy Policy

We are not collecting personal data but we do use third party applications that may do. Please verify their privacy policies to find out more: Google Analytics, Google Adsense, Gmail, Facebook, Youtube. We might add or remove thrid party applications to the website at any time without notice. Please check the source code of the site or use browser plugins to identify them.

Our Privacy Policy was posted on 13 September 2012 and last updated on 16 April 2018. It governs the privacy terms of our Website, located at html-css-js.com. Any capitalized terms not defined in our Privacy Policy, have the meaning as specified in our Terms of Use accessible above.
Your Privacy

HTML CSS JS follows all legal requirements to protect your privacy. Our Privacy Policy is a legal statement that explains how we may collect information from you, how we may share your information, and how you can limit our sharing of your information.
            </p>
        </div>

        <div className="final_instr fourC">

            <h3>ALMOST DONE!!</h3>

            <div>
                <h5>
                    To Reserve your caregiver, Please pay your fee using your payment code <strong>548373</strong> and we will confirm your payment
                </h5>
               
            </div>

        </div>


        <div className="confirm fiveC" >
                <img src="https://img.icons8.com/cute-clipart/512/000000/ok.png"/>
                <div className="message">You Have Successfully Scheduled your Session the final step is to payment through banking or up front in person on office</div>
        </div>
        
    </div>




    <div className="action_set">
        <button onClick={onChange} className="btn btn_back" id="bck">Back</button>
        <button onClick={onChange} className="btn btn_nxt">Next</button>
    </div>
</body>
    )
}