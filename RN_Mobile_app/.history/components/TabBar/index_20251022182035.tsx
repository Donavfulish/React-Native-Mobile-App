import { Tabs } from "expo-router"
import Tab from "../TabBarIcons"

export const SiderBar = () => {
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