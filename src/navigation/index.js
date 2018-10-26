import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import Category from '../components/ArticleListing'
import ArticleDetail from '../components/ArticleDetail'
import Favorite from '../components/Favorite'
import RDV from '../components/RDV'

const StackArticleNavigation = createStackNavigator({
  Articles: {
    screen: Category,
    navigationOptions: {
      title: 'Articles'
    }
  },
  Article:{
    screen: ArticleDetail,
    navigationOptions:{
      title: 'Article'
    }
  }
})

const TabNavigation = createBottomTabNavigator({
  TabArticles:{
    screen: StackArticleNavigation,
    navigationOptions:{
      title: 'Articles'
    },
  },
  RDV: {
    screen: RDV,
    navigationOptions:{
      title: 'RDV'
    }
  },
  TabFavorite:{
    screen: Favorite,
    navigationOptions:{
      title: 'Favorites'
    }
  }
})

export default TabNavigation
