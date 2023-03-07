import { TextInputProps } from "react-native";
import { Container, Input, Label } from "./styles";

type Props = TextInputProps & {
  label: string;
  width?: string;
}

export function TextField({ label, width, ...rest }: Props) {
  return (
    <Container style={{ width: width }}>
      <Label>
        {label}
      </Label>
      <Input {...rest} />
    </Container>
  );
}