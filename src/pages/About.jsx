import React from 'react'
import photo from "../assets/ac.jpg";
const About = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${photo})` }}>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p style={{fontWeight:'bold'}}>
        Fruits are an excellent source of essential vitamins and minerals, and they are high in fiber. 
        Fruits also provide a wide range of health-boosting antioxidants, including flavonoids.
        Eating a diet high in fruits and vegetables can reduce a person's risk of developing heart 
        disease, cancer, inflammation, and diabetes.
        </p>
      </div>
    </div>

  );
}

export default About
