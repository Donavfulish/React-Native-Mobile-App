import { Tabs } from "expo-router"
import {TabBarIcon} from "../TabBarIcons"

export const SiderBar = () => {
    cons t
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