import { PercentageTitle } from "@components/PercentageTitle";
import {
  BoxGroupInline,
  BoxLarge,
  BoxSmall,
  Container,
  Content,
  Header,
  Heading,
  SubtitleBox,
  TitleBox
} from "./styles";

export function GeneralStatistics() {
  return (
    <Container>
      <Header
        type="PRIMARY"
      >
        <PercentageTitle
          percentage={90.86}
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