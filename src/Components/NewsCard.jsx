import { format } from "date-fns";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    author,
    thumbnail_url,
    rating,
    total_view,
    details,
  } = news;

  

  const displayText = details.length > 200
      ? details.slice(0, 200) + "..."
      : details;

  const formatDate = (dateString) => {
    return format(new Date(dateString), "MMMM dd, yyyy");
  };

  return (
    <div className="card bg-base-100 border-1 border-gray-300 mx-auto">
      {/* Author Header */}
      <div className="flex items-center justify-between bg-base-300 p-4 rounded-t-lg">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-primary">{author.name}</h3>
            <p className="text-sm text-accent">
              {formatDate(author.published_date)}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-ghost btn-sm btn-square">
            <CiBookmark className="w-5 h-5" />
          </button>
          <button className="btn btn-ghost btn-sm btn-square">
            <CiShare2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-4">
        <h2 className="card-title text-xl font-bold leading-tight">{title}</h2>
      </div>

      {/* Image */}
      <figure className="px-4 pt-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-lg w-full object-cover h-64"
        />
      </figure>

      {/* Content */}
      <div className="card-body pt-4">
        {/* Tags */}
        {/* <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span key={index} className="badge badge-neutral badge-sm capitalize">
              {tag}
            </span>
          ))}
        </div> */}

        {/* Description */}
        <p className="text-sm text-accent">{displayText}</p>

        {/* Read More Button */}
    
          <Link
            to={`/news-details/${id}`}
            className="text-orange-500 font-semibold text-left mt-2 hover:underline cursor-pointer">
            Read More
          </Link>
        

        {/* Footer Stats */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-t-gray-300">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={`w-4 h-4 ${
                  index < rating.number
                    ? "text-orange-500 fill-orange-500"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-sm font-semibold">{rating.number}</span>
          </div>

          <div className="flex items-center gap-4">
            {/* {rating.badge === "trending" && (<GoFlame className="w-4 h-4 fill-orange-500" />} */}
            {
              <div className="flex items-center gap-1 text-orange-500">
                <span className="text-sm font-semibold capitalize">
                  {rating.badge}
                </span>
              </div>
            }

            <div className="flex items-center gap-1 text-accent">
              <IoEye className="w-4 h-4" />
              <span className="text-sm">{total_view}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
