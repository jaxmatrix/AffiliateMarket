import { View } from 'react-native';


import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { TabBarItem, iconList } from "../../components/ui/tabBarItem";



const labels: iconList = {
  'advertisment': { label: "Reels", icon: "film" },
  'income': { label: "Income", icon: "dollar" },
  'products': { label: "Items", icon: "shopping-cart" },
  'index': { label: "Home", icon: "home" },
  'upload': { label: "Uploads", icon: "upload" },
}

export function TabBar({ state, descriptors, navigation, ...props }: BottomTabBarProps) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  return (
    <View
      style={styles.tabBar}

    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label = options.tabBarLabel !== undefined ?
          options.tabBarLabel !== undefined
          : options.title !== undefined ?
            options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });


          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        }

        return (
          <TabBarItem
            onLongPress={onLongPress}
            onPress={onPress}
            isFocused
            key={route.key}
            accessibilityLabel={route.name}
            testId={route.name}
            color={isFocused ? colors.primary : colors.text}
            href={buildHref(route.name, route.params)}
            icon={labels[route.name].icon}
            label={labels[route.name].label}
          />
        )
      })}
    </View >
  )
}

TabBar.displayName = "TabBar"


const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 12,
    borderRadius: 36,
    shadowColor: '#000',
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    backgroundColor: "#fff"
  },
})
