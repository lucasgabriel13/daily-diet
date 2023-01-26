import { Container, HeaderProfile, NewSnackContainer, NewSnackContainerTitle, ProfileImage } from './styles';
import LogoImage from '@assets/logo.svg';
import ImageProfile from '@assets/profile.png';
import { ButtonPercentage } from '@components/ButtonPercentage';
import { ButtonIcon } from '@components/ButtonIcon';

export function Home() {
  return (
    <Container>
      <HeaderProfile>
        <LogoImage />
        <ProfileImage source={ImageProfile} />
      </HeaderProfile>

      <ButtonPercentage
        percentage={90.86}
      />

      <NewSnackContainer>
        <NewSnackContainerTitle>Refeições</NewSnackContainerTitle>
        <ButtonIcon
          icon="plus"
          title="Nova refeição"
        />
      </NewSnackContainer>

    </Container>
  );
}