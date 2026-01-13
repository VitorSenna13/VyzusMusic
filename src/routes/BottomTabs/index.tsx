import { dark, light } from "@/api/themes";
import { ContextThemes } from "@/context/Themes";
import { Home } from "@/screens/home";
import { Playlist } from "@/screens/playlist";
import { faHeadphonesSimple, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useContext } from "react";

const Tab = createBottomTabNavigator();

export function TabRoutes() {    

    const { choiceTheme } = useContext(ContextThemes);

    return (
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: choiceTheme == 'dark' ? '#fff' : '#101010',
            tabBarInactiveTintColor: choiceTheme == 'dark' ? '#848081' : '#c7c7c7',
            tabBarStyle: {
                height: 70,
                backgroundColor: choiceTheme == 'dark' ? dark.tabBackground : light.tabBackground
            },
            tabBarItemStyle: {
                padding: 7
            }
        }}
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarLabel: 'Minhas Músicas',
                    tabBarIcon: ({color, size}) => <FontAwesomeIcon icon={faHeadphonesSimple} size={size} color={color} />
                }}
            />

            <Tab.Screen
                name='Playlist'
                component={Playlist}
                options={{
                    tabBarLabel: 'Biblioteca',
                    tabBarIcon: ({color, size}) => <FontAwesomeIcon icon={faList} size={size} color={color} />
                }}
            />
        </Tab.Navigator>
    )
}