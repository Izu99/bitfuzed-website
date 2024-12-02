import Button from "./Button";

const Hero = () => {
    const backgroundImage = "/assets/images/heroImg.png";
    const title = "Smart Solutions";
    const subTitle = "for a Digital Future";
    const description = "Empowering Innovation with Custom Web, Mobile, and AI Solutions for a Smarter Future.";
  
    return (
      <div
        className="h-screen bg-cover bg-center flex"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="bg-black bg-opacity-0 p-0 rounded-lg mt-40 ms-0 text-center md:text-left md:ms-[6rem] md:p-8">
          <h1 className="text-white text-7xl mb-5 font-bold">{title}</h1>
          <h2 className="text-white text-5xl mb-10 font-bold mt-3">{subTitle}</h2>
          <p className="text-white text-xl mt-5">{description}</p>
          <Button id='heroBtn' text='Learn More' containerClass='text-black bg-white'/>
        </div>
        
      </div>
    );
  };
  
  export default Hero;
  