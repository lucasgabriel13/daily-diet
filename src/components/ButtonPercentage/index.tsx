import { TouchableOpacityProps } from "react-native";
import { ArrowIcon, ButtonPercentageStyleProps, Container, Subtitle, Title } from "./styles";
import { useTheme } from "styled-components/native";

type Props = TouchableOpacityProps & {
  percentage: number;
  type?: ButtonPercentageStyleProps;
}

export function ButtonPercentage({ type = 'PRIMARY', percentage, ...rest }: Props) {
  const { COLORS } = useTheme();

  const percentageFormatted = String(percentage).replace('.', ',');


  return (
    <Container
      type={type}
      {...rest}
      activeOpacity={0.7}
    >
      <Title>
        {percentageFormatted}%
      </Title>
      <Subtitle>
        das refeições dentro da dieta
      </Subtitle>

      <ArrowIcon
        color={type === 'PRIMARY' ? COLORS.GREEN_DARK : COLORS.RED_DARK}
      />
    </Container>
  );
}