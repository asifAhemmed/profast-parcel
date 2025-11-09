
const ServiceCard = ({ service }) => {
    const { icon, title, description } = service;
  return (
    <div className="card bg-base-100 shadow-xl p-6 hover:shadow-2xl transition duration-300">
      <div className="text-4xl text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
