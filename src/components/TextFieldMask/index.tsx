import { MaskInputProps } from "react-native-mask-input";
import { Container, Input, Label } from "./styles";

type Props = MaskInputProps & {
  label: string;
  width?: string;
}

export function TextFieldMask({ label, width, ...rest }: Props) {
  return (
    <Container>
      <Label>
        {label}
      </Label>
      <Input {...rest} />
    </Container>
  );
}