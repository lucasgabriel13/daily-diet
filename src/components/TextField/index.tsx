import { TextInputProps } from "react-native";
import { Container, Input, Label } from "./styles";

type Props = TextInputProps & {
  label: string;
}

export function TextField({ label, ...rest }: Props) {
  return (
    <Container>
      <Label>
        {label}
      </Label>
      <Input {...rest} />
    </Container>
  );
}