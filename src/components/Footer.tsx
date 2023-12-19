import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useWebsiteContext } from "../context/context";

export default function Footer() {
  const { footerSocialsInfo, showModal } = useWebsiteContext();

  const socialLink = footerSocialsInfo.map((i) => (
    <a
      key={i.href}
      href={i.href}
      className="w-1/5 mdMobile:w-3/12 sm:w-2/12 md:w-2/12
        h-2/3 sm:h-2/4 md:h-3/5
      flex justify-center items-center"
    >
      <FontAwesomeIcon
        className="h-5/6 w-2/4 p-3 text-thirdColor cursor-pointer border-2 rounded-full 
          border-thirdColor transition-all ease-in-out duration-700 
          hover:border-fourthColor hover:scale-90 hover:text-fourthColor hover:border-opacity-0"
        icon={i.icon}
      />
    </a>
  ));

  return (
    <footer className="w-full h-3/4 sm:h-5/6 md:h-full bg-mainColor flex flex-col justify-between 
        items-center 
      ">
      <div 
        className="h-16 sm:h-20 w-full mdMobile:w-4/5 lgMobile:w-3/4 md:w-3/5
        flex justify-between sm:justify-around md:justify-between items-center
        "
        // border border-yellow-300
      >
        {socialLink}
      </div>

      <div className="w-full h-3/5 sm:h-3/4 flex flex-col justify-center items-center">
        <h1
          id="title"
          className="uppercase transition-all ease-in-out duration-700 
             text-thirdColor text-8xl sm:text-custom10 md:text-custom12 
             text-center opacity-90 font-suisseInt peer-hover:text-red-300 
            mdMobile:tracking-wider lgMobile:tracking-widest sm:tracking-wider 
            leading-relaxed sm:leading-snug
          "
        >
          Get in touch{" "}
        </h1>
        <button
          onClick={showModal}
          onMouseEnter={() => {
            document.getElementById("title")!.style.color = "#FFFFFF";
          }}
          onMouseLeave={() => {
            document.getElementById("title")!.style.color = "#D3D3D3";
          }}
          className="h-10 w-3/5 btn bg-thirdColor border-mainColor font-normal 
            rounded-3xl text-mainColor z-50 absolute uppercase text-xl 
            transition-all ease-in-out duration-700 
            hover:text-fourthColor hover:bg-mainColor hover:border-fourthColor 
            hover:scale-105 peer
          "
        >
          {" "}
          Contact{" "}
        </button>
      </div>
    </footer>
  );
}
