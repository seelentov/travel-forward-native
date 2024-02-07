import React, { useEffect, useState } from 'react';
import { Animated, Easing, Linking, Text, TouchableOpacity, View } from 'react-native';
import { useGetContactsQuery } from '../../store/api/contacts.api';
import Close from '../Icons/Close';
import MainIcon from '../Icons/MainIcon';
import PhoneWhite from '../Icons/PhoneWhite';
import { styles } from './Header.stylesheet';
import config from './header.config';
import Burger from '../Icons/Burger';

type IHeaderProps = {
  navigation: any
}

export default function Header({ navigation }: IHeaderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const menuAnimation = new Animated.Value(0);

  const { data, isLoading, error } = useGetContactsQuery()

  const switchScreen = (screen: string) => {
    navigation.navigate(screen)
    setIsOpen(false)
  }

  const call = () => {
    Linking.openURL(`tel:${data?.object?.number}`);
  }

  useEffect(() => {
    Animated.timing(menuAnimation, {
      toValue: isOpen ? 1 : 0,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [isOpen]);

  const menuTranslateX = menuAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-250, 0]
  });

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity style={styles.burderButton} onPress={() => setIsOpen(prev => !prev)}>
          {isOpen ?
            <Close />
            :
            <Burger />
          }
        </TouchableOpacity>
        <MainIcon />
        <TouchableOpacity style={styles.call} onPress={call}>
          <PhoneWhite />
        </TouchableOpacity>
      </View>
      <Animated.View style={[isOpen ? [styles.menu, { transform: [{ translateX: menuTranslateX }] }] : styles.menuClose]}>
        {config.map(({ name, page, id }) =>
          <>
            <TouchableOpacity key={id} style={styles.menuItem} onPress={() => switchScreen(page)}>
              <Text style={styles.menuItemText}>{name}</Text>
            </TouchableOpacity>
            <View style={styles.hr}></View>
          </>)}
      </Animated.View>
    </>
  );
}