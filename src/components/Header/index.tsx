import { View } from "react-native";
import { ArrowLeft } from 'phosphor-react-native';
import { Container, GoBackButton, Title } from "./styles";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

type Props = {
  title: string;
}

export function Header({ title }: Props) {

  const { COLORS } = useTheme();

  const { goBack } = useNavigation();


  return (
    <Container>
      <GoBackButton onPress={goBack}>
        <ArrowLeft size={24} color={COLORS.GRAY_700} />
      </GoBackButton>
      <Title>
        {title}
      </Title>

      <View style={{ width: 24, height: 24 }} />
    </Container>
  );
}