import React from 'react';
import { Tabs } from 'expo-router';
import { useColorScheme } from '@/components/useColorScheme';
import { TabBar } from "../../components/ui/tabBar";



export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs tabBar={props => <TabBar {...props} />} screenOptions={{
      headerShown: false
    }}>
    </Tabs>
  );
}

