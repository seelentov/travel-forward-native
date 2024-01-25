import { useState, type PropsWithChildren } from 'react';
import { Linking, Text, TouchableOpacity, View } from 'react-native';
import Close from '../Icons/Close';
import MainIcon from '../Icons/MainIcon';
import PhoneWhite from '../Icons/PhoneWhite';
import { styles } from './Header.stylesheet';
import config from './header.config';

type IHeaderProps = PropsWithChildren<{
  navigation: any
}>

export default function Header({ navigation }: IHeaderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const switchScreen = (screen: string) => {
    navigation.navigate(screen)
    setIsOpen(false)
  }

  const call = () => {
    Linking.openURL('tel:+79517822401');
  }

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity style={styles.burderButton} onPress={() => setIsOpen(prev => !prev)}>
          {isOpen ?
            <Close />
            : <>
              <View style={styles.burderButtonLine}></View>
              <View style={styles.burderButtonLine}></View>
              <View style={styles.burderButtonLine}></View>
            </>}
        </TouchableOpacity>
        <MainIcon />
        <TouchableOpacity style={styles.call} onPress={call}>
          <PhoneWhite />
        </TouchableOpacity>
      </View>
      <View style={isOpen ? styles.menu : styles.menuClose}>
        {config.map(({ name, page, id }) =>
          <>
            <TouchableOpacity key={id} style={styles.menuItem} onPress={() => switchScreen(page)}>
              <Text style={styles.menuItemText}>{name}</Text>
            </TouchableOpacity>
            <View style={styles.hr}></View>
          </>)}
      </View>
    </>
  );
}