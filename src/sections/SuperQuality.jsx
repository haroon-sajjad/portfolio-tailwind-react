import { services } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          I Provide You
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red">Quality </span> Services
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Experience the difference with robust Laravel and NodeJS applications,
          responsive designs using Bootstrap and Tailwind CSS, and comprehensive
          e-commerce solutions. Enhance your website&apose;s performance with
          API integration, SEO optimization, and ongoing maintenance, ensuring
          your site surpasses all expectations. Your digital journey with my
          services is nothing short of exceptional.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          From custom WordPress websites to dynamic front-end applications with
          ReactJS, I offer unparalleled expertise to elevate your digital
          experience.
        </p>
      </div>
      <div className="flex-1 flex justify-end items-center">
        <img
          src={services}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
