import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import { TextField } from "@components/TextField";
import { ButtonIcon } from '@components/ButtonIcon';
import { useNavigation } from "@react-navigation/native";
import { SelectGroup } from "@components/SelectGroup";

import { Container, InputInline } from "./styles";
import { TextFieldMask } from "@components/TextFieldMask";
import { View } from "react-native";

type MealData = {
  name: string;
  description: string;
  date: string;
  hour: string;
  is_diet: boolean | null;
}

export function Form() {
  const [isDiet, setIsDiet] = useState<boolean | null>(null);
  const { control, handleSubmit, formState } = useForm<MealData>({
    mode: "onChange",
  });


  const { navigate } = useNavigation();

  function handleIsDiet(value: boolean) {
    setIsDiet(value);
  }

  function onSubmit(data: MealData) {
    const newMeal = {
      ...data,
      is_diet: isDiet
    } as MealData;

    console.log(newMeal)

    if (!isDiet) {
      navigate('registrationCompletion', { type: 'NO_DIET' });
    } else {
      navigate('registrationCompletion', { type: 'DIET' });
    }
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
            <TextFieldMask
              label="Data"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              keyboardType="numeric"
              mask={[/[0-3]/, /[0-9]/, '/', /[0-1]/, /[0-2]/, '/', /\d/, /\d/, /\d/, /\d/]}
              placeholderFillCharacter="0"
            />
          )}
        />
        <View style={{ width: 20 }} />
        <Controller
          name="hour"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextFieldMask
              label="Hora"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              keyboardType="numeric"
              mask={[/[0-2]/, /[0-9]/, ':', /[0-5]/, /[0-9]/,]}
              placeholderFillCharacter="0"
            />
          )}
        />
      </InputInline>

      <SelectGroup
        isDiet={isDiet}
        onPressIsDiet={() => handleIsDiet(true)}
        onPressNoIsDiet={() => handleIsDiet(false)}
      />

      <ButtonIcon
        title="Cadastrar refeição"
        onPress={handleSubmit(onSubmit)}
        disabled={!formState.isValid}
      />
    </Container>
  );
}