import { useState } from "react";
import { TextField } from "@components/TextField";
import { ButtonIcon } from '@components/ButtonIcon';
import { Container, InputInline } from "./styles";

type MealData = {
  name: string;
  description: string;
  date: string;
  hour: string;
  is_diet: boolean;
}

export function Form() {
  const [data, setData] = useState<MealData>({} as MealData);

  return (
    <Container>
      <TextField
        label="Nome"
      />
      <TextField
        label="Descrição"
        style={{ height: 120 }}
      />

      <InputInline>
        <TextField
          width="46%"
          label="Data"
        />
        <TextField
          width="46%"
          label="Hora"
        />
      </InputInline>

      <ButtonIcon
        title="Cadastrar refeição"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0
        }}
      />
    </Container>
  );
}