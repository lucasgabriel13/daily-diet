import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonIconTypeStyleProps
}

export const Container = styled(TouchableOpacity) <Props>`
  width: 100%;
  height: 50px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GRAY_600 : 'transparent'};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 6px;
`;


export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
      font-size: ${theme.FONT_SIZE.SM}px;
      font-family: ${theme.FONT_FAMILY.BOLD};
      color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700}
  `}
  margin-left: 12px;
`;


export const Icon = styled(Feather).attrs<Props>(({ theme, type }) => ({
  size: 18,
  color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700
}))``;