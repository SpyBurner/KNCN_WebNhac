import './CSS/ThemeList.css'; // Import CSS file
import PropTypes from 'prop-types';
import ThemeListItem from './ThemeListItem';

export const ThemeList = ({toggleThemeList, themeData, themeName, setThemeId }) => {
  ThemeList.propTypes = {
    themeData: PropTypes.array.isRequired,
    toggleThemeList: PropTypes.func,
    themeName: PropTypes.string,
    setThemeId: PropTypes.func,
  };

  const generateItems = () => {
    if (themeData.length > 0){

      return themeData.map(theme => (
        <ThemeListItem key={theme.name} className="theme-item" 
        toggleThemeList={toggleThemeList} setThemeId={setThemeId}
        thisThemeName={theme.name} thisThemeId={theme.id} themeName={themeName}
        >
        </ThemeListItem>
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
