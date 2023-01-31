import React from 'react';
import { SubHeading } from '../../components';

import {images} from '../../constants';
import './Header.css';


const Header = () => (
  <div className="app__header app__wrapper section__padding" id="Home">
    <div className="app__wrapper_info">
      <SubHeading title="Lets Meet while we eat meat"/>
      <h1 className="app__header-h1">
        Kamakis' is the Joint you've been missing
      </h1>
      <p className="p__opensans" style={{ margin: '2rem 0'}}>
      The flavors are expertly balanced, with every bite exploding with richness and depth. The tender, juicy meat pairs perfectly with the crispy, aromatic vegetables, and the sauce is like a symphony of spices on the tongue. I'm blown away by the skill of the chef, and I can tell that each ingredient has been carefully selected and prepared with care. This is truly the epitome of delicious food, and I feel so grateful to be able to enjoy it.
      </p>
      <button type='button' className='custom__button'>Look at the Menu</button>
    </div>

    <div className="app__wrapper_img">

    </div>
  </div>
);

export default Header;
