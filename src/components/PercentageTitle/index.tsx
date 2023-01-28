import { Container, Subtitle, Title } from "./styles";

type Props = {
  percentage: number;
}

export function PercentageTitle({ percentage }: Props) {
  const percentageFormatted = String(percentage).replace('.', ',');
  return (
    <Container>
      <Title>
        {percentageFormatted}%
      </Title>
      <Subtitle>
        das refeições dentro da dieta
      </Subtitle>
    </Container>
  );
}