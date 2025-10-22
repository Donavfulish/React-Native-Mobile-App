import { Tabs } from "expo-router"
import { TabBarIcon } from "../TabBarIcons"
import { icons } from "@/constants/icons"

export const SiderBar = () => {
    const tabElements = [
        {
            name: "home",
            icon: icons.home
        },
        {
            name: "play",
            icon: icons.play
        }
    ]
    return (
        <Tabs>
            {tabElements.map((tabs) => (
                <Tabs.Screen
                    name={tabs.name}
                    options={{
                        title: tabs.name,
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <TabBarIcon title={tabs.name} icon={tabs.icon} />
                        )
                    }}
                />
            ))}
        </Tabs>
    )
}