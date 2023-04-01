import styled, { css } from "styled-components/native";
import MaskInput from "react-native-mask-input";

export const Container = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 24px;
`;

export const Label = styled.Text`
  margin-bottom: 4px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_600};
  `}
`;

export const Input = styled(MaskInput)`
  width: 100%;
  height: 48px;
  border-radius: 6px;
  padding: 14px;
  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_300};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `}
`;
