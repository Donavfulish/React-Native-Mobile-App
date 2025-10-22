import { Tabs } from "expo-router"
import { TabBarIcon } from "../TabBarIcons"
import { icons } from "@/constants/icons"

export const SiderBar = () => {
    const tabElements = [
        {
            name: "home",
            icon: icons.home
        }
    ]
    return (
        <Tabs>
            {tabElements.map((tabs) => {
                <Tabs.Screen
                    name="index"
                    options={{
                        title: "home",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <TabBarIcon title="home" />
                        )
                    }}
                />
            })}
        </Tabs>
                <Tabs>
            {tabElements.map((tabs) => (
                <Tabs.Screen
                    name="index"
                    options={{
                        title: "home",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <TabBarIcon title="home" />
                        )
                    }}
                />
            ))}
        </Tabs>
    )
}