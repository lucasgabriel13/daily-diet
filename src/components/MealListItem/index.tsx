import { View, TouchableOpacityProps } from "react-native";
import { Container, Divider, Hours, TypeMeal, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  hours: string;
  isHealthy?: boolean;
}

export function MealListItem({ title, hours, isHealthy = false, ...rest }: Props) {
  return (
    <Container
      activeOpacity={0.7}
      {...rest}
    >

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Hours>
          {hours}
        </Hours>

        <Divider />

        <Title>
          {title}
        </Title>
      </View>

      <TypeMeal
        isHealthy={isHealthy}
      />
    </Container>
  );
}