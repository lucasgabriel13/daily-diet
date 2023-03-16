import { useRoute, useNavigation } from "@react-navigation/native";

import ImageDietCompletion from '@assets/success.svg';
import ImageNoDietCompletion from '@assets/shame.svg';

import { Button, ButtonTitle, Container, SubTitle, Title } from "./styles";
import { Text } from "react-native";

export type MealTypeData = {
  type: 'DIET' | 'NO_DIET';
}

export function RegistrationCompletion() {
  const route = useRoute();
  const diet = route.params as MealTypeData;

  const { navigate } = useNavigation();

  const dataPerTypeMeal = {
    'DIET': {
      title: 'Continue assim!',
      subtitle: <Text>Você continua <Text style={{ fontWeight: "700" }}>dentro da dieta</Text>. Muito bem!</Text>,
      image: < ImageDietCompletion />
    },
    'NO_DIET': {
      title: 'Que pena!',
      subtitle: <Text>Você <Text style={{ fontWeight: "700" }}>saiu da dieta</Text> dessa vez, mas continue se esforçando e não desista!</Text>,
      image: <ImageNoDietCompletion />
    }
  }

  return (
    <Container>
      <Title type={diet.type}>
        {dataPerTypeMeal[diet.type].title}
      </Title>
      <SubTitle>
        {dataPerTypeMeal[diet.type].subtitle}
      </SubTitle>
      {dataPerTypeMeal[diet.type].image}

      <Button
        activeOpacity={0.7}
        onPress={() => navigate("home")}
      >
        <ButtonTitle>
          Ir para a página principal
        </ButtonTitle>
      </Button>
    </Container>
  );
}