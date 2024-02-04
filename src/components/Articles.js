import { Link } from "react-router-dom";
import '../styles/Articles.css';
import article3 from '../assets/clothWaste.png';
import article1 from '../assets/saveAnimals.png';
import article2 from '../assets/imperfectFood.png';
import ArticlesCard from "./ArticlesCard";


const Articles = () => {

    return (
        <div className="Aritcles">
            <div className="Article-heading">News we care about...</div>
            <div className="row">
                <div className="col">
                    <ArticlesCard
                        image={article1}
                        link="https://www.nytimes.com/2024/01/30/science/amazon-stingless-bees-honey.html"
                        headline="In Peru, a mission to save the stingless Bee"
                        source="The Newyork Times"
                    />
                </div>
                <div className="col">
                    <ArticlesCard
                        image={article2}
                        link="https://www.nytimes.com/2024/01/30/science/amazon-stingless-bees-honey.html"
                        headline="The Timely Rise of Imperfect Produce"
                        source="Food Unfolded"
                    />
                </div>
                <div className="col">
                    <ArticlesCard
                        image={article3}
                        link="https://www.cbsnews.com/news/inside-the-landfill-of-fast-fashion-chile/"
                        headline="Inside the landfill of fast-fashion: 'These clothes don't even come from here'"
                        source="CBS News"
                    />
                </div>





            </div>
        </div>
    )
};
export default Articles;