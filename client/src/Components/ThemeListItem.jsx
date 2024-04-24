import './CSS/ThemeList.css'; // Import CSS file
import PropTypes from 'prop-types';

export const ThemeListItem = ({ toggleThemeList, thisThemeName, thisThemeId, setThemeId, themeName}) => {
    ThemeListItem.propTypes = {
        toggleThemeList: PropTypes.func,
        thisThemeName: PropTypes.string,
        thisThemeId: PropTypes.number,
        setThemeId: PropTypes.func,
        themeName: PropTypes.string
    }

    const handleClick = () => {
        setThemeId(thisThemeId);
        toggleThemeList();
    }

  return (
    <div className='theme-item' onClick={handleClick}
    style={{border: (thisThemeName === themeName)? '2px solid #F6F494' : '2px solid #3E3245'}}
    >
        <span> {thisThemeName} </span>
    </div>
  );
};

export default ThemeListItem;
