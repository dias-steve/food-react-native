import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ResultDetailsScreen from './screens/ResultDetailsScreen';
import SearchScreen from './screens/SearchScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    DetailScreen: ResultDetailsScreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'BusinessSearch'
    }
  }
);
export default createAppContainer(navigator);
