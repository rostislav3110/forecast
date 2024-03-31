import React from 'react';
import { useApp } from '../utils/context';
import { light_mode, dark_mode } from '../utils/theme_style';
import Weather from './Weather';

function Layout() {

const {isDarkMode} = useApp();
const currentTheme = isDarkMode ? dark_mode : light_mode
  return (
    <div style={{...currentTheme.app_box}}>
        <Weather/>
    </div>
  )
}

export default Layout;