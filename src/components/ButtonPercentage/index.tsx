import { TouchableOpacityProps } from "react-native";
import { ArrowIcon, ButtonPercentageStyleProps, Container } from "./styles";
import { useTheme } from "styled-components/native";
import { PercentageTitle } from "@components/PercentageTitle";

type Props = TouchableOpacityProps & {
  percentage: number;
  type?: ButtonPercentageStyleProps;
}

export function ButtonPercentage({ type = 'PRIMARY', percentage, ...rest }: Props) {
  const { COLORS } = useTheme();
  
  return (
    <Container
      type={type}
      {...rest}
      activeOpacity={0.7}
    >
      <PercentageTitle
        percentage={percentage}
      />

      <ArrowIcon
        color={type === 'PRIMARY' ? COLORS.GREEN_DARK : COLORS.RED_DARK}
      />
    </Container>
  );
}