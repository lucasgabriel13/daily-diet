import { ArrowLeft } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

type GeneralStatisticsTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: GeneralStatisticsTypeStyleProps;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
export const Header = styled.View<Props>`
  width: 100%;
  height: 200px;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const GoBackButton = styled(TouchableOpacity)`
  position: absolute;
  left: 24px;
  top: 56px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 24px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  margin-top: -33px;
`;

export const Heading = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
  text-align: center;
  margin: 33px 0 23px;
`;

export const BoxLarge = styled.View`
  width: 100%;
  height: 89px;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 8px;
`;

export const BoxSmall = styled.View<Props>`
  width: 151.5px;
  height: 107px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;
  margin-right: 12px;
`;

export const BoxGroupInline = styled.View`
  flex-direction: row;
`;

export const TitleBox = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const SubtitleBox = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `}
  text-align: center;
`;