import { createNavigationReducer } from 'react-navigation-redux-helpers';
import Navigator from '../navigators/navigator';

const navigation = createNavigationReducer(Navigator);
export default navigation;
