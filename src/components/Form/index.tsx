import { TextField } from "@components/TextField";
import { ButtonIcon } from '@components/ButtonIcon';
import { useForm, Controller } from "react-hook-form";

import { Container, InputInline, LabelSelect, SelectContainer, SelectGroup, SelectGroupItem, SelectGroupItemCircle, SelectGroupItemTitle } from "./styles";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

type MealData = {
  name: string;
  description: string;
  date: string;
  hour: string;
  is_diet: boolean;
}

export function Form() {
  const [isDiet, setIsDiet] = useState<Boolean | null>(null);
  const { control, handleSubmit } = useForm<MealData>();

  const { navigate } = useNavigation();

  function handleIsDiet(value: boolean) {
    setIsDiet(value);
    navigate('registrationCompletion', { type: 'NO_DIET' });
  }

  function onSubmit(data: MealData) {
    const newMeal = {
      ...data,
      is_diet: isDiet
    } as MealData;

    console.log(newMeal)
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

      {/**
       * 
       * SEPARAR O FORM: CRIAR UM COMPONENTE SELECT DENTRO DE FORM/COMPONENTS
       * 
       */}

      <SelectContainer>
        <LabelSelect>Está dentro da dieta?</LabelSelect>
        <SelectGroup>
          <SelectGroupItem
            type="PRIMARY"
            active={isDiet === true}
            onPress={() => handleIsDiet(true)}
          >
            <SelectGroupItemCircle type="PRIMARY" />
            <SelectGroupItemTitle>Sim</SelectGroupItemTitle>
          </SelectGroupItem>
          <SelectGroupItem
            type="SECONDARY"
            active={isDiet === false}
            onPress={() => handleIsDiet(false)}
          >
            <SelectGroupItemCircle type="SECONDARY" />
            <SelectGroupItemTitle>Não</SelectGroupItemTitle>
          </SelectGroupItem>
        </SelectGroup>
      </SelectContainer>

      <ButtonIcon
        title="Cadastrar refeição"
        onPress={handleSubmit(onSubmit)}
      />
    </Container>
  );
}