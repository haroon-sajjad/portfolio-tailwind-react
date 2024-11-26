import {
  clientTWB,
  clientRobiDigital,
  clientUrbanEnigma,
  clientIMC,
  clientProactivSports,
  clientEzzree,
  clientIMS,
  clientRoadHouse,
  clientZunairKhalid,
} from "../assets/images";

const Clients = () => {
  return (
    <section className="max-container">
      <h3 className="text-center text-4xl font-bold font-montserrat">
        <span className="text-white">Delighted</span>{" "}
        <span className="text-coral-red"> Clients </span>
      </h3>
      <p className="text-white text-lg text-center lg:w-[60%] mx-auto font-montserrat leading-7 mt-3">
        I prioritize my clients. By grasping their goals and challenges, I
        customize my services accurately. Expectations are consistently
        surpassed with my approach.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-10 lg:mx-24 mx-0 mt-24">
        <img
          src={clientZunairKhalid}
          alt="Zunair Khalid Engineering Works"
          className="w-[300px] object-contain"
        />
        <img
          src={clientRoadHouse}
          alt="Roadhouse Market & Butcher"
          className="w-[300px] object-contain"
        />
        <img
          src={clientTWB}
          alt="The Why Builder"
          className="w-[300px] object-contain"
        />
        <img
          src={clientRobiDigital}
          alt="Robi Digital"
          className="w-[310px] object-contain"
        />
        <img
          src={clientUrbanEnigma}
          alt="Urban Enigma"
          className="w-[190px] object-contain"
        />
        <img
          src={clientIMC}
          alt="Indonesia Montessori"
          className="w-[150px] object-contain"
        />
        <img
          src={clientProactivSports}
          alt="Proactiv Sports"
          className="w-[250px] object-contain"
        />
        <img
          src={clientEzzree}
          alt="Ezzree"
          className="w-[150px] object-contain"
        />
        <img
          src={clientIMS}
          alt="IMS Parts"
          className="w-[180px] object-contain"
        />
      </div>
    </section>
  );
};

export default Clients;
