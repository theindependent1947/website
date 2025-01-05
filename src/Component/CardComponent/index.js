import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Card = ({ imageUrl, name, title,fbUrl, twitterUrl, linkedInUrl }) => {
  return (
    <>
      <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
        <div className="flex flex-col">
          <img
            className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
            src={imageUrl}
            alt="bg-img"
          />

          <div className="text-center mt-6">
            <h1 className="text-gray-900 text-xl font-bold mb-1">{name}</h1>

            <div className="text-gray-700 font-light mb-2">{title}</div>

            <div className="flex justify-center gap-4 mx-20">
              <FacebookIcon sx={{ cursor: "pointer" }}  onClick={() => window.open(fbUrl, "_blank")}/>
              <TwitterIcon sx={{ cursor: "pointer" }} onClick={() => window.open(twitterUrl, "_blank")}/>
              <LinkedInIcon sx={{ cursor: "pointer" }} onClick={() => window.open(linkedInUrl, "_blank")}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
