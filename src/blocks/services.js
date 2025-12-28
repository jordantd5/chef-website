import React, {useState} from "react";

const services = [{
  name: 'Basic',
  price: '$100/hr',
  description: 'Ac fermentum sodales platea leo curabitur. Mauris velit urna posuere; curae conubia imperdiet imperdiet. Lobortis sociosqu pharetra tortor pharetra eros posuere purus ultrices. Fringilla sodales fames habitasse tellus ad duis aenean mattis. Montes sodales curae penatibus maecenas cubilia, natoque urna. Id tempus cras ultricies congue elementum. Placerat massa mi sollicitudin suspendisse ultricies blandit auctor erat ac.'
},{
  name: 'Mid',
  price: '$100/hr',
  description: 'Ac fermentum sodales platea leo curabitur. Mauris velit urna posuere; curae conubia imperdiet imperdiet. Lobortis sociosqu pharetra tortor pharetra eros posuere purus ultrices. Fringilla sodales fames habitasse tellus ad duis aenean mattis. Montes sodales curae penatibus maecenas cubilia, natoque urna. Id tempus cras ultricies congue elementum. Placerat massa mi sollicitudin suspendisse ultricies blandit auctor erat ac.'
},{
  name: 'Fancy',
  price: '$100/hr',
  description: 'Ac fermentum sodales platea leo curabitur. Mauris velit urna posuere; curae conubia imperdiet imperdiet. Lobortis sociosqu pharetra tortor pharetra eros posuere purus ultrices. Fringilla sodales fames habitasse tellus ad duis aenean mattis. Montes sodales curae penatibus maecenas cubilia, natoque urna. Id tempus cras ultricies congue elementum. Placerat massa mi sollicitudin suspendisse ultricies blandit auctor erat ac.'
}];

function Services() {
  const [active, setActive] = useState(services.map(service => service.name));

  const handleOnMouseEnter = (section) => {
    console.log(active)
    setActive([section])
  }

  const handleOnMouseLeave = () => {
    setActive(services.map(service => service.name))
  }

  return (
    <div className="services">
      <h2>Services</h2>

      <div className="services-list">
        {services.map(service => 
          <div
            key={service.name}
            className={`service ${active.includes(service.name) ? 'active-service' : 'not-active-service'}`}
            onMouseEnter={() => handleOnMouseEnter(service.name)}
            onMouseLeave={handleOnMouseLeave}
          >
            <p className="service-name">{service.name}</p>
            <p className="service-price">{service.price}</p>
            <p className="service-description">{service.description}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Services;