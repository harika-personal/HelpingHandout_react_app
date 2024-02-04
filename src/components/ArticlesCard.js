import '../styles/Articles.css';
import article1 from '../assets/saveAnimals.png';
const ArticlesCard = ({ image, link, headline, source }) => {

    return (
        <div className="Articles-card">
            <div className="card " style={{ width: '19rem', height: '19rem' }}>
                {/* Clickable card, you can add an onClick handler to the whole card */}
                <a href={link}
                    style={{ textDecoration: 'none', color: 'inherit' }}>
                    <img src={image} alt="Card Image" className="card-image" />

                    {/* Text on the top left corner */}
                    <div className="position-absolute top-0 start-0 p-3"
                        style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}>
                        {headline}
                    </div>
                    <div className="bottom-0 end-0 p-3 card-source"
                    > {source}
                    </div>
                </a>
            </div>
        </div>

    );

}
export default ArticlesCard;