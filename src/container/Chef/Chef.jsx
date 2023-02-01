import React from 'react';

import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="mpishi" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What we believe in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">World Class Mixologist, Calories measured with precision</p>
        </div>
        <p className="p__opensans">The Tender, Juicy Meat Pairs Perfectly With The Crispy, Aromatic Vegetables, And The Sauce Is Like A Symphony Of Spices On The Tongue.</p>
      </div>
      <div className="app__chef-sign">
        <p>Stephen Muambi</p>
        <p className="p__opensans">Q & A Officer</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
