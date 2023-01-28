import { SectionList, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  HeaderProfile,
  NewMealContainer,
  NewMealContainerTitle,
  ProfileImage,
  TitleList
}
  from './styles';

import { ButtonPercentage } from '@components/ButtonPercentage';
import { ButtonIcon } from '@components/ButtonIcon';
import { MealListItem } from '@components/MealListItem';

import LogoImage from '@assets/logo.svg';
import ImageProfile from '@assets/profile.png';

export function Home() {

  const DATA = [
    {
      title: '26.01.23',
      data: [
        {
          id: '1',
          title: 'X-tudo',
          hours: '20:00',
          isHealthy: false
        },
        {
          id: '2',
          title: 'Sanduíche',
          hours: '16:00',
          isHealthy: true
        },
        {
          id: '3',
          title: 'X-tudo',
          hours: '20:00',
          isHealthy: false
        },
        {
          id: '4',
          title: 'Sanduíche',
          hours: '16:00',
          isHealthy: true
        }
      ],
    },
    {
      title: '25.01.23',
      data: [{
        id: '3',
        title: 'X-tudo',
        hours: '20:00',
        isHealthy: false
      }],
    },
  ];

  const { navigate } = useNavigation();

  function handleStatisticsMeal() {
    navigate('statistics');
  }

  return (
    <Container>
      <HeaderProfile>
        <LogoImage />
        <ProfileImage source={ImageProfile} />
      </HeaderProfile>

      <ButtonPercentage
        percentage={90.86}
        onPress={handleStatisticsMeal}
      />

      <NewMealContainer>
        <NewMealContainerTitle>Refeições</NewMealContainerTitle>
        <ButtonIcon
          icon="plus"
          title="Nova refeição"
        />
      </NewMealContainer>


      <SectionList
        sections={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealListItem
            title={item.title}
            hours={item.hours}
            isHealthy={item.isHealthy}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <TitleList>{title}</TitleList>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        style={{ marginTop: 32 }}
        ItemSeparatorComponent={() => (
          <View style={{ marginTop: 14 }} />
        )}
        SectionSeparatorComponent={() => (
          <View style={{ marginTop: 16 }} />
        )}
      />


    </Container>
  );
}