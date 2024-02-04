import image from '../assets/WebsiteImage.png';
import '../styles/AboutUs.css';

const AboutUS = () => {


    return (
        <div className = "Inspiration">
            <div className='row'>
                <img className='col-3 mr -2'
                    src={image}
                    alt="HelpingHandout.png"
                >
                    
                </img>
                <div className='col-9 mr-4 aboutUs'>
                    <div className='mt-4'>
                        Whether you’re a large corporation or a small business with “too many of one thing”, join us to find communities that value these items that need a home! If you’re looking for a community of change makers, volunteer with us!
                    </div>

                    <div className='mt-4'>
                        Welcome! We’re Helping Handout, a community of donors and receivers on a mission to create a more sustainable world by encouraging a culture of “handing out”.
                    </div>
                </div>
            </div>




        </div>
    )
};
export default AboutUS;