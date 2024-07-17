import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const ExpertServices = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="Shoe Promotion"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold">
          Expert <span className="text-coral-red">Services </span>
        </h2>
        <p className="mt-4 info-text">
        Discover the innovative solutions and cutting-edge designs I&apos;ve recently developed. From custom WordPress sites and dynamic ReactJS applications to responsive designs using Bootstrap and Tailwind CSS, my latest projects demonstrate my expertise and commitment to quality. Each project showcases robust functionalities built with Laravel and NodeJS, along with seamless e-commerce solutions, API integrations, and optimized performance. Explore these projects to see how I can transform your ideas into exceptional digital experiences.
        </p>
        <p className="mt-6 info-text">
          From custom WordPress websites to dynamic front-end applications with
          ReactJS, I offer unparalleled expertise to elevate your digital
          experience.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button
            label="Let's Connect"
            iconURL={arrowRight}
            linkTarget="_blank"
            btnUrl="https://cal.com/haroon.sajjad/30min/"
          />
          <Button
            label="Hire Me!"
            btnUrl="https://www.upwork.com/freelancers/haroonsajjad"
            linkTarget="_blank"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default ExpertServices;
