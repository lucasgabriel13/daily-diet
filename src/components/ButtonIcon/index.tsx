import { TouchableOpacityProps } from 'react-native';
import { ButtonIconTypeStyleProps, Container, Icon, Title } from './styles';

import { Feather } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {
  title: string;
  icon?: keyof typeof Feather.glyphMap;
  type?: ButtonIconTypeStyleProps
}

export function ButtonIcon({ title, icon, type = 'PRIMARY', ...rest }: Props) {
  return (
    <Container
      activeOpacity={0.7}
      type={type}
      {...rest}
    >
      {icon &&
        <Icon
          name={icon}
          type={type}
        />
      }
      <Title type={type}>{title}</Title>
    </Container>
  );
}