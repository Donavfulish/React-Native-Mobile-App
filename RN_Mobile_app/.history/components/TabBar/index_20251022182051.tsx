import { Tabs } from "expo-router"
import { TabBarIcon } from "../TabBarIcons"

export const SiderBar = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: "home",
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabBarIcon name="home" focused={focused}/>
                    )
                }}              
            />
        </Tabs>
    )
}