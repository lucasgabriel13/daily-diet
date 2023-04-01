import {
  LabelSelect,
  SelectContainer,
  SelectGroup as SeleGroupStyled,
  SelectGroupItem,
  SelectGroupItemCircle,
  SelectGroupItemTitle
} from "./styles";

type SelectGroupProps = {
  isDiet: boolean | null;
  onPressIsDiet: () => void;
  onPressNoIsDiet: () => void;
}

export function SelectGroup({
  isDiet,
  onPressIsDiet,
  onPressNoIsDiet }: SelectGroupProps) {

  return (
    <SelectContainer>
      <LabelSelect>Está dentro da dieta?</LabelSelect>
      <SeleGroupStyled>
        <SelectGroupItem
          type="PRIMARY"
          active={isDiet === true}
          onPress={onPressIsDiet}
        >
          <SelectGroupItemCircle type="PRIMARY" />
          <SelectGroupItemTitle>Sim</SelectGroupItemTitle>
        </SelectGroupItem>
        <SelectGroupItem
          type="SECONDARY"
          active={isDiet === false}
          onPress={onPressNoIsDiet}
        >
          <SelectGroupItemCircle type="SECONDARY" />
          <SelectGroupItemTitle>Não</SelectGroupItemTitle>
        </SelectGroupItem>
      </SeleGroupStyled>
    </SelectContainer>
  );
}