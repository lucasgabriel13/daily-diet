import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

type Props = {
  isHealthy: boolean;
}


export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 49px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;
  align-items: center;
  flex-direction: row;
  padding: 0 15px;
  margin-top: 14px;
  justify-content: space-between;
`;

export const Hours = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family:${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const Divider = styled.View`
    width: 1px;
    height: 14px;
    margin: 0 12px;
    background: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const Title = styled.Text`
${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family:${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `}
`;

export const TypeMeal = styled.View<Props>`
  width: 14px;
  height: 14px;
  border-radius: 14px;
  background-color: ${({ theme, isHealthy }) => isHealthy ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;