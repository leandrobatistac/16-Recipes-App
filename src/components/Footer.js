import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';

class Footer extends React.Component {
  render() {
    return (
      <div data-testid="footer" className="footer">
        <Link to="/drinks">
          <img alt="drinkIcon" data-testid="drinks-bottom-btn" src={ drinkIcon } />
        </Link>

        <Link to="/meals">
          <img alt="mealIcon" data-testid="meals-bottom-btn" src={ mealIcon } />
        </Link>
      </div>
    );
  }
}

export default Footer;
