import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="About">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="logo" />
    </div>
  </div>
);

export default AboutUs;
