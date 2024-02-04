import image from '../assets/WebsiteImage.png';
import text from '../assets/aboutUSText.png';
import '../styles/AboutUs.css';

const AboutUS = () => {


    return (
        <div className = "Inspiration">
            {/* <div> */}
                <div style={{width:'495'}}>
                <img className='mr -2 aboutus-logo'
                    src={image}
                    alt="HelpingHandout.png"
                />
                </div>
                <img className='mr -2 aboutus-text'
                    src={text}
                    alt="Inspiration.png"
                />
                {/* <div className='col-9 mr-4 aboutus-text'>
                    <div className='aboutus-text-1'>
                        Whether you’re a large corporation or a small business with “too many of one thing”, join us to find communities that value these items that need a home! If you’re looking for a community of change makers, volunteer with us!
                    </div>

                    <div className='aboutus-text-2'>
                        Welcome! We’re Helping Handout, a community of donors and receivers on a mission to create a more sustainable world by encouraging a culture of “handing out”.
                    </div>
                </div> */}
            {/* </div> */}




        </div>
    )
};
export default AboutUS;