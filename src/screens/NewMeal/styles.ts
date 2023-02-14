import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`
export const Content = styled.View`
  flex: 1;
  margin-top: -33px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 40px 24px;
`;