
import { ServiceCard } from "../components";
import { services } from "../constants";

const Services = () => {

  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          imgURL={service.imgURL}
          label={service.label}
          subtext={service.subtext}
        />
      ))}
    </section>
  );
};

export default Services;


