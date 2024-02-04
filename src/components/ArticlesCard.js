import '../styles/Articles.css';
import article1 from '../assets/saveAnimals.png';
const ArticlesCard = ({ image, link, headline, source }) => {

    return (
        <div className="Articles-card">
            <div className="card " style={{ width: '435px', height: '421px' }}>
                {/* Clickable card, you can add an onClick handler to the whole card */}
                <a href={link}
                    style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="gradient-overlay">
                    <img src={image} alt="Card Image" className="card-image" />
                    </div>
                    

                    {/* Text on the top left corner */}
                    <div className="position-absolute top-0 start-0 p-3 card-text ">
                        {headline}
                    </div>
                    <div className="end-0 card-source"> {source}
                    </div>
                </a>
            </div>
        </div>

    );

}
export default ArticlesCard;