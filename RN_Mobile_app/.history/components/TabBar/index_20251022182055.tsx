import { Tabs } from "expo-router"
import TabBa

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