import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { GestureResponderEvent, Pressable, Text } from "react-native"
import { StyleSheet } from 'react-native';

type logoIcon = React.ComponentProps<typeof FontAwesome>['name'];

export interface iconListItem {
  label: string,
  icon: logoIcon,
}

export interface iconList {
  [key: string]: iconListItem
}


function TabBarIcon(props: {
  name: logoIcon;
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

interface TabBarItemProps {
  color: string
  href?: string,
  isFocused: boolean,
  onPress: () => void,
  onLongPress: () => void,
  accessibilityLabel: string,
  testId: string,
  icon?: React.ComponentProps<typeof FontAwesome>['name'],
  label?: string,
}

export function TabBarItem({
  color, href, isFocused, onPress, onLongPress,
  ...options
}: TabBarItemProps) {



  return (
    <Pressable
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={options.accessibilityLabel}
      testID={options.testId}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabItem}
    >
      {options.icon && <TabBarIcon name={options.icon} color={color} />}
      {options.label && (
        <Text style={{ color: color }}>
          {options.label}
        </Text>)
      }
    </Pressable>
  )
}

const styles = StyleSheet.create({
  tabItem: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    paddingTop: 16,
    gap: 4
  }
})
