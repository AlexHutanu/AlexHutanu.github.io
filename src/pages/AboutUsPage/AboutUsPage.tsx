import NavBar from '../../components/NavBar'
import FacebookIcon from '../../icons/FacebookIcon'
import InstagramIcon from '../../icons/InstagramIcon'
import MailIcon from '../../icons/MailIcon'
import PhoneIcon from '../../icons/PhoneIcon'
import PinIcon from '../../icons/PinIcon'
import RightArrowIcon from '../../icons/RightArrowIcon'
import { contactInfo } from '../../components/constants/contactInfo';


export default () => {

   return <div className="about-us__wrapper">
      <NavBar/>
      <div className="about-us">
         <div className="about-us__group-photo">
            <img
               src="https://media.istockphoto.com/photos/group-multiracial-people-having-fun-outdoor-happy-mixed-race-friends-picture-id1211345565?k=20&m=1211345565&s=612x612&w=0&h=Gg65DvzedP7YDo6XFbB-8-f7U7m5zHm1OPO3uIiVFgo="
               alt="group photo"/>
         </div>
         <div className="about-us__information">
            <div className="about-us__information__sections">
               <div
                  className="about-us__information__sections__section">
                  <div className="about-us__information__sections__section__arrow">
                     <RightArrowIcon/>
                  </div>
                  <div className="about-us__information__sections__section__container">
                     <p className="about-us__information__sections__section__container__title">
                        Informatii despre comenzi
                     </p>
                     <div
                        className="about-us__information__sections__section__container__details">
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex itaque magni
                           minus, nam nulla quis quos rem sit? Aliquam, itaque? Lorem ipsum dolor
                           sit amet, consectetur adipisicing elit. Ab accusantium, amet at dolorem
                           doloremque incidunt iste nihil reprehenderit saepe totam?
                        </p>
                     </div>
                  </div>
               </div>
               <div
                  className="about-us__information__sections__section">
                  <div className="about-us__information__sections__section__arrow">
                     <RightArrowIcon/>
                  </div>
                  <div className="about-us__information__sections__section__container">
                     <p className="about-us__information__sections__section__container__title">
                        Povestea Noastra
                     </p>
                     <div
                        className="about-us__information__sections__section__container__details">
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
                           dicta
                           dolorem eaque error harum incidunt officiis porro quas sint suscipit?
                        </p>
                     </div>
                  </div>
               </div>
               <div
                  className="about-us__information__sections__section">
                  <div className="about-us__information__sections__section__arrow">
                     <RightArrowIcon/>
                  </div>
                  <div className="about-us__information__sections__section__container">
                     <p className="about-us__information__sections__section__container__title">
                        Contact
                     </p>
                     <div
                        className="about-us__information__sections__section__container__details">
                        <div
                           className="about-us__information__sections__section__container__details__contact-list">
                           <div
                              className="about-us__information__sections__section__container__details__contact-list__element">
                              <PinIcon/>
                              <p className="about-us__information__sections__section__container__details__contact-list__element__name">
                                 {contactInfo.address}
                              </p>
                           </div>
                           <div
                              className="about-us__information__sections__section__container__details__contact-list__element">
                              <MailIcon/>
                              <p className="about-us__information__sections__section__container__details__contact-list__element__name">
                                 {contactInfo.mail}
                              </p>
                           </div>
                           <div
                              className="about-us__information__sections__section__container__details__contact-list__element">
                              <PhoneIcon/>
                              <p className="about-us__information__sections__section__container__details__contact-list__element__name">
                                 {contactInfo.phoneNumber}
                              </p>
                           </div>
                           <div
                              className="about-us__information__sections__section__container__details__contact-list__social-media">
                              <div
                                 className="about-us__information__sections__section__container__details__contact-list__social-media__element" onClick={() => window.open('https://www.facebook.com/Cofetaria-Acasa-Targu-Ocna-101771164709091')}>
                                 <FacebookIcon fill={'black'}/>
                              </div>
                              <div
                                 className="about-us__information__sections__section__container__details__contact-list__social-media__element" onClick={() => window.open('https://www.instagram.com/claudiabranzaru/')}>
                                 <InstagramIcon/>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
}