import { MealTypeData } from "./index";
import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 0 24px;
`;

export const Title = styled.Text<MealTypeData>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === "DIET" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `}
  margin-bottom: 8px;
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `}
  text-align: center;
  margin-bottom: 40px;
`;

export const Button = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  margin-top: 32px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const ButtonTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `}
`;
