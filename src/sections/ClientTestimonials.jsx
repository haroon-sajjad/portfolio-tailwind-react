import { TestimonialCard } from "../components";
import { testimonials } from "../constants";
import upWork from "../assets/images/upwork.svg";

const ClientTestimonials = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What My
        <span className="text-coral-red"> Clients </span>
        Say?
      </h3>
      <p className="m-auto mt-4 max-w-lg  text-center info-text">
        Hear genuine stories from my satisfied clients about their exceptional
        experiences with me.
      </p>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-14">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            imgURL={testimonial.imgURL}
            customerName={testimonial.customerName}
            companyName={testimonial.companyName}
            rating={testimonial.rating}
            feedback={testimonial.feedback}
          />
        ))}
      </div>
      <a
        href="https://www.upwork.com/freelancers/haroonsajjad"
        target="__blank"
        className="flex items-center justify-center gap-2 rounded-full bg-white mt-6text-2xl text-center mt-10"
      >
        <span className="text-slate-700 text-2xl">Read more on </span>
        <img src={upWork} alt="upWork" className="w-auto h-[90px]" />
      </a>
    </section>
  );
};

export default ClientTestimonials;
