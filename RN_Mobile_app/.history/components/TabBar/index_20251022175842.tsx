import { Tabs } from "expo-router"

export const SiderBar = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: "home",

                }
                }
            />
        </Tabs>
    )
}