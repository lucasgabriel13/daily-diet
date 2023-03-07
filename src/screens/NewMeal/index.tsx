import { Header } from "@components/Header";
import { Form } from "@components/Form";
import { Container, Content } from "./styles";

export function NewMeal() {
  return (
    <Container>
      <Header title="Nova refeição" />

      <Content>
        <Form />
      </Content>
    </Container>
  );
}