import { PercentageTitle } from "@components/PercentageTitle";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "phosphor-react-native";
import { useTheme } from 'styled-components/native';
import {
  BoxGroupInline,
  BoxLarge,
  BoxSmall,
  Container,
  Content,
  GoBackButton,
  Header,
  Heading,
  SubtitleBox,
  TitleBox
} from "./styles";


export function GeneralStatistics() {
  const { COLORS } = useTheme();

  const { goBack } = useNavigation();

  const percentage = 50.86;
  const isPercentageGreaterThanFiftyPercent = percentage >= 50;

  function handleGoBack() {
    goBack();
  }

  return (
    <Container>
      <Header
        type={isPercentageGreaterThanFiftyPercent ? 'PRIMARY' : 'SECONDARY'}
      >
        <GoBackButton
          activeOpacity={0.7}
          onPress={handleGoBack}
        >
          <ArrowLeft
            color={isPercentageGreaterThanFiftyPercent ? COLORS.GREEN_DARK : COLORS.RED_DARK}
            size={24}
          />
        </GoBackButton>
        <PercentageTitle
          percentage={percentage}
        />
      </Header>

      <Content>
        <Heading>
          Estatísticas gerais
        </Heading>

        <BoxLarge>
          <TitleBox>22</TitleBox>
          <SubtitleBox>
            melhor sequência de pratos dentro da dieta
          </SubtitleBox>
        </BoxLarge>

        <BoxLarge>
          <TitleBox>109</TitleBox>
          <SubtitleBox>
            refeições registradas
          </SubtitleBox>
        </BoxLarge>

        <BoxGroupInline >
          <BoxSmall
            type="PRIMARY"
          >
            <TitleBox>99</TitleBox>
            <SubtitleBox>refeições dentro da dieta</SubtitleBox>
          </BoxSmall>

          <BoxSmall
            type="SECONDARY"
          >
            <TitleBox>10</TitleBox>
            <SubtitleBox>refeições fora da{'\n'} dieta</SubtitleBox>
          </BoxSmall>
        </BoxGroupInline>

      </Content>

    </Container>
  );
}