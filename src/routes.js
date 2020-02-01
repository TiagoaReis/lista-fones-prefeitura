import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/main'
import TelefonesPage from './pages/telefones'

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions:{
                title: 'Lista de Telefones',
                headerTitleAlign: 'center'
            }
        },
        Telefones: {
            screen: TelefonesPage,
            navigationOptions:{
                title: 'Telefones',
                headerTitleAlign: 'center'
            }
        }
    }, {
        defaultNavigationOptions:{
            headerStyle:{
                backgroundColor: '#fff'
            },
            // headerTintColor: {
            //     color: '#fff'
            // }
        }
    })
)

export default Routes