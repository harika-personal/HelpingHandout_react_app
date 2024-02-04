import image from '../assets/WebsiteImage.png';
import SearchBar from '../components/searchBar';

const LandingPage = () => {


    return (
        <>
            <div>
                <img
                    src={image}
                    alt="HelpingHandout.png"
                />

            </div>
            <div>
                <SearchBar />
            </div>
            
        </>
    );

};
export default LandingPage;