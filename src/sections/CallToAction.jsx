import { Button } from "../components";

const CallToAction = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex flex-col xl:flex-row justify-between items-center gap-10"
    >
      <h3 className="text-center xl:text-left text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Let&apos;s Build Somthing
        <span className="text-coral-red"> Great </span> Together!
      </h3>
      <div className=" w-full flex justify-center xl:justify-end items-center max-sm:flex-col gap-5 p-2.5  rounded-full">
        {/* <input type='text' placeholder='subscribe@nike.com' className='input' /> */}
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button
            label="Hire Me!"
            fullWidth
            btnUrl="https://www.upwork.com/freelancers/haroonsajjad"
            backgroundColor="bg-green-500"
            textColor="text-white"
            borderColor="border-green-500"
          />
        </div>
        <div className="flex justify-center items-center max-sm:w-full">
          <Button
            label="Schedule a Meeting"
            fullWidth
            btnUrl="https://cal.com/haroon.sajjad/30min/"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
