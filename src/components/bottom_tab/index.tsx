import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {COLOR, Color, space} from '@src/constants';
import {TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function BottomTabbar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <SafeAreaView
      edges={['bottom']}
      style={{
        position: 'absolute',
        bottom: space(32),
        left: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
      }}>
      <View
        style={{
          backgroundColor: Color.black700,
          borderRadius: space(99),
          padding: space(12),
          gap: space(16),
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;
          const icon = options.tabBarIcon?.({
            focused: isFocused,
            color: isFocused ? COLOR.text : Color.white,
            size: 24,
          });

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              onPress={onPress}
              key={route.key}
              style={[
                {
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: space(99),
                  padding: space(12),
                },
                isFocused && {backgroundColor: Color.white},
              ]}>
              {icon}
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
