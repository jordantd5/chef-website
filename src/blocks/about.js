import React from "react";
import headshot from '../imgs/headshot.jpeg'

function About() {
  return (
    <div className="about">
      <div className="about-photo">
        <img src={headshot} alt="headshot" className="headshot" />
      </div>
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Integer egestas
          dolor eleifend porta platea ultricies hac maecenas. Efficitur mollis
          venenatis dapibus euismod fermentum parturient vivamus. Fermentum
          tempor nisi odio habitant vivamus et rhoncus. Ad conubia montes
          efficitur feugiat ornare. Nostra aliquam himenaeos quam malesuada
          aliquam magnis egestas hac donec. Integer dolor vivamus libero nulla
          curae scelerisque posuere vitae et. Dolor augue mi parturient maximus
          varius torquent montes mattis. Etiam platea eros dui egestas commodo
          aptent dignissim. Imperdiet ultricies curabitur ligula erat
          ullamcorper netus? Pellentesque euismod posuere fusce blandit fusce
          vulputate. Ac fermentum sodales platea leo curabitur. Mauris velit
          urna posuere; curae conubia imperdiet imperdiet. Lobortis sociosqu
          pharetra tortor pharetra eros posuere purus ultrices. Fringilla
          sodales fames habitasse tellus ad duis aenean mattis. Montes sodales
          curae penatibus maecenas cubilia, natoque urna. Id tempus cras
          ultricies congue elementum. Placerat massa mi sollicitudin suspendisse
          ultricies blandit auctor erat ac.
        </p>
      </div>
    </div>
  );
}

export default About;
