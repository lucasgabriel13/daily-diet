import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 40px 24px;
`

export const HeaderProfile = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 20px;
`;

export const NewSnackContainer = styled.View`
  align-items: flex-start;
  margin-top: 40px;
`;

export const NewSnackContainerTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `}

  margin-bottom: 8px;
`;