import { Tabs } from "expo-router"
import { TabBarIcon } from "../TabBarIcons"
import { icons } from "@/constants/icons"

export const SiderBar = () => {
    const tabElements = [
        {
            name: "index",
            title: "home",
            icon: icons.home
        },
        {
            name: "profile",
            title: "profile",
            icon: icons.person
        }
        {
            name: "profile",
            title: "profile",
            icon: icons.person
        }
    ]
    return (
        <Tabs>
            {tabElements.map((tabs) => (
                <Tabs.Screen
                    name={tabs.name}
                    options={{
                        title: tabs.title,
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <TabBarIcon title={tabs.title} icon={tabs.icon} />
                        )
                    }}
                />
            ))}
        </Tabs>
    )
}