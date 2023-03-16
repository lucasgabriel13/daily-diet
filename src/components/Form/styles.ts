import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type SelectTypeStylesProps = "PRIMARY" | "SECONDARY";

type SelectStylesProps = {
  active?: boolean;
  type: SelectTypeStylesProps;
};

export const Container = styled.View`
  flex: 1;
`;

export const InputInline = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SelectContainer = styled.View`
  display: flex;
  align-items: flex-start;
  margin-bottom: 100px;
`;

export const LabelSelect = styled.Text`
  margin-bottom: 4px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_600};
  `}
`;

export const SelectGroup = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SelectGroupItem = styled(TouchableOpacity)<SelectStylesProps>`
  width: 48%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 8px;
  border-radius: 6px;
  ${({ theme, active, type }) => css`
    background-color: ${active
      ? type === "PRIMARY"
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_200};
    border: ${active
      ? `1px solid ${
          type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
        }`
      : "none"};
  `}
`;

export const SelectGroupItemCircle = styled.View<SelectStylesProps>`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  margin-right: 8px;
`;

export const SelectGroupItemTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;
