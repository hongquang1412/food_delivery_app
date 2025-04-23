import React, {ComponentType} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

function createIcon<T extends {name: string; size?: number}>(
  Component: ComponentType<T>,
  name: T['name'],
) {
  const IconComponent = (props: Omit<T, 'name'>) => (
    <Component {...(props as T)} name={name} size={props.size || 24} />
  );
  IconComponent.displayName = `Icon(${name})`;
  return IconComponent;
}

export const icons = {
  home: createIcon(Feather, 'home'),
  cart: createIcon(Feather, 'shopping-cart'),
  chat: createIcon(Feather, 'message-square'),
  profile: createIcon(Feather, 'user'),
  next: createIcon(Feather, 'arrow-right'),
  dash: createIcon(Octicons, 'dash'),
  location: createIcon(Ionicons, 'location-outline'),
  searchOutline: createIcon(Ionicons, 'search-circle-outline'),
  search: createIcon(Ionicons, 'search'),
  notifications: createIcon(Ionicons, 'notifications-circle-outline'),
  down: createIcon(AntDesign, 'down'),
  hearto: createIcon(AntDesign, 'hearto'),
  heart: createIcon(AntDesign, 'heart'),
  star: createIcon(AntDesign, 'star'),
  starOutline: createIcon(AntDesign, 'staro'),
  backOutline: createIcon(Ionicons, 'chevron-back-circle-outline'),
  back: createIcon(Ionicons, 'chevron-back'),
  dollar: createIcon(Feather, 'dollar-sign'),
  time: createIcon(Ionicons, 'time'),
  timesCircle: createIcon(FontAwesome, 'times-circle'),
  add: createIcon(Ionicons, 'add-circle-outline'),
  remove: createIcon(Ionicons, 'remove-circle-outline'),
  checkDone: createIcon(Ionicons, 'checkmark-done'),
  phone: createIcon(Feather, 'phone'),
  send: createIcon(MaterialIcons, 'send'),
  emoticon: createIcon(MaterialIcons, 'insert-emoticon'),
  upload: createIcon(Feather, 'upload'),
  grid: createIcon(Ionicons, 'grid'),
  cash: createIcon(Ionicons, 'cash'),
  person: createIcon(Ionicons, 'person'),
  percent: createIcon(FontAwesome, 'percent'),
  checkCircle: createIcon(FontAwesome, 'check-circle'),
  user: createIcon(FontAwesome, 'user'),
  userOutline: createIcon(Feather, 'user'),
  google: createIcon(FontAwesome, 'google'),
  facebook: createIcon(FontAwesome, 'facebook'),
  apple: createIcon(FontAwesome, 'apple'),
  visibility: createIcon(MaterialIcons, 'visibility'),
  visibilityOff: createIcon(MaterialIcons, 'visibility-off'),
  dotsThree: createIcon(Entypo, 'dots-three-horizontal'),
  camera: createIcon(MaterialIcons, 'photo-camera'),
  sliders: createIcon(Feather, 'sliders'),
  hamburger: createIcon(FontAwesome5, 'hamburger'),
  hotdog: createIcon(FontAwesome5, 'hotdog'),
  cocktail: createIcon(FontAwesome5, 'cocktail'),
  pizzaSlice: createIcon(FontAwesome5, 'pizza-slice'),
  forward: createIcon(Ionicons, 'chevron-forward'),
  logOut: createIcon(Feather, 'log-out'),
  settings: createIcon(Feather, 'settings'),
  creditCard: createIcon(Feather, 'credit-card'),
  helpCircle: createIcon(Feather, 'help-circle'),
  trash: createIcon(Feather, 'trash-2'),
  userOther: createIcon(Feather, 'user-plus'),
  close: createIcon(Ionicons, 'close'),
};
