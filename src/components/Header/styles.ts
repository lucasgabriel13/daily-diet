import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 132px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  padding: 0 24px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700}
  `}
`

export const GoBackButton = styled(TouchableOpacity)`
  width: 24px;
  height: 24px;
` 