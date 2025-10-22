import { Tabs } from "expo-router"
import {TabBarIcon} from "../TabBarIcons"

export const SiderBar = () => {
    const tabElemen = [
        {
            name: "home",
            icon: 
        }
    ]
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: "home",
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabBarIcon title="home"/>
                    )
                }}              
            />
        </Tabs>
    )
}