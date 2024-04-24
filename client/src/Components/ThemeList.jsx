import { useEffect } from 'react';
import './CSS/ThemeList.css'; // Import CSS file
import PropTypes from 'prop-types';

export const ThemeList = ({themeData, themeName}) => {
  ThemeList.propTypes = {
    themeData: PropTypes.array.isRequired,
  };

  const generateItems = () => {
    if (themeData.length > 0){
      return themeData.map(theme => (
        <div key={theme.id} className="theme-item">
          <span>{theme.name}</span>
        </div>
      ));
    }
    return <div></div>
  };

  return (
    <div className='themelist'>
        {generateItems()}
    </div>
  );
};

export default ThemeList;
