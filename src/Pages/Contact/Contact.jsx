import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleMap from "google-maps-react-markers";

const AnyReactComponent = ({ text }) => (
  <div>
    <img
      src="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
      alt=""
    />
  </div>
);

const Contact = () => {
  return (
    <div className="">
      <div className=" bg-[#ffac74e6] mt-[-0.5px] rounded-md">
        <div className=" mx-20 grid   grid-cols-2 py-14">
          <div className="px-14">
            <div>
              <div className="mt-12">
                <span>
                  <hr className="inline-block w-20 h-0.5 bg-gray-700 border-0 dark:bg-gray-700 mb-1"></hr>
                </span>
                <p className="inline-block px-3 font-bold">CONTACT US</p>
                <br></br>
                <br></br>
                <br></br>
                <p className="text-5xl font-bold pl-20">
                  We'd love to hear from you
                </p>
                <br></br>
                <br></br>
                <p className=" pl-20">
                  If you would like to support us, volunteer your time, donate
                  books, donate seeds, have ideas or would like to contribute in
                  any manner, please reach out to us. Curious minds have
                  question do not hesitate to enquire. Please use the contact us
                  form below.
                </p>
              </div>
            </div>
          </div>
          <div className="px-14">
            <div>
              <div className="mt-12">
                <p className="inline-block px-3 font-bold">Let's connect!</p>
                <br></br>
                <br></br>
                <p className="px-3">theindependent1947@gmail.com</p>
                <br></br>
                <br></br>
                <p className="inline-block px-3 font-bold">Headoffice</p>
                <br></br>
                <br></br>
                <p className="px-3">theindependent1947@gmail.com</p>
                <br></br>
                <br></br>
                <p className="inline-block px-3 font-bold">Branch Offices</p>
                <br></br>
                <br></br>
                <p className="px-3">Delhraun, Delhi, Kolkata</p>
                <br></br>
                <br></br>
                <div className="flex px-3 gap-4">
                  <FacebookIcon sx={{ cursor: "pointer" }} />
                  <TwitterIcon sx={{ cursor: "pointer" }} />
                  <LinkedInIcon sx={{ cursor: "pointer" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <form className="max-w-md mx-auto">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <textarea
              name="message"
              id="message"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="message"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Message
            </label>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-white bg-[#eb6407] hbg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-200 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-200 dark:hover:bg-amber-200 dark:focus:ring-amber-200"
            >
              Send Message
            </button>
          </div>
        </form>
        <br />
        <br />
        <div className="">
          <div>
            <div style={{ width: "100%", height: "400px" }}>
              <GoogleMap
                apiKey="AIzaSyC6xL3mviUl2sBcm5r7IZdTZMRCNRB9T44"
                defaultCenter={{ lat: 12.902799220663754, lng: 77.55059323121979 }}
                defaultZoom={8}
              >
                <AnyReactComponent
                  lat={12.902799220663754}
                  lng={77.55059323121979}
                  text="Dore Kere Lake, Bengaluru"
                />
              </GoogleMap>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
