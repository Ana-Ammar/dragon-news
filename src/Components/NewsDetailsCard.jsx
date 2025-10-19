import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const NewsDetailsCard = ({news}) => {
    const {image_url, title, details, category_id} = news

    return (

        <div className="bg-base-100 border border-gray-200 p-5 rounded-md mt-5">

          <img src={image_url} className="w-full rounded-md mb-5"/>  

          {/* Headline */}
          <h2 className="card-title text-2xl font-bold text-gray-800">
            {title}
          </h2>

          {/* Summary */}
          <p className="mt-3 text-gray-700 leading-relaxed">
            {details}
          </p>

        

          {/* Button */}
          <div className="mt-6">
            <Link 
            to={`/catagory/${category_id}`}
             className="btn btn-secondary btn-sm">
              <FaArrowLeft /> All news in this category
            </Link>
          </div>
        </div>
    );
};

export default NewsDetailsCard;