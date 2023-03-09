import { TextField } from "@components/TextField";
import { ButtonIcon } from '@components/ButtonIcon';
import { useForm, Controller } from "react-hook-form";

import { Container, InputInline } from "./styles";

type MealData = {
  name: string;
  description: string;
  date: string;
  hour: string;
  is_diet: boolean;
}

export function Form() {
  const { control, handleSubmit } = useForm();

  function onSubmit(data: any) {
    console.log(data);
  }

  return (
    <Container>
      <Controller
        name="name"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            label="Nome"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            label="Descrição"
            style={{ height: 120, textAlignVertical: 'top' }}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            numberOfLines={4}
            multiline
          />
        )}
      />

      <InputInline>
        <Controller
          name="date"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              width="45%"
              label="Data"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
        <Controller
          name="hour"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              width="45%"
              label="Hora"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
      </InputInline>

      <ButtonIcon
        title="Cadastrar refeição"
        onPress={handleSubmit(onSubmit)}
      />
    </Container>
  );
}