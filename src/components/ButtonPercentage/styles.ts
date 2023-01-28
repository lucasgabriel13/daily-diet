import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

import { ArrowUpRight } from 'phosphor-react-native';

export type ButtonPercentageStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonPercentageStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
  width: 100%;
  height: 102px;
  margin-top: 32px;

  align-items: center;
  justify-content: center;

  position: relative;

  background: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;
  
`;

export const ArrowIcon = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
  size: 24,
}))`
  position: absolute;
  right: 8px;
  top: 8px;
`;