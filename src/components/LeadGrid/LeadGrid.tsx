import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme } from '@mantine/core';
import DroneCard from '../Drone/DroneCard';
import { IconGasStation, IconGauge, IconManualGearbox } from '@tabler/icons';
import { ImageActionBanner } from '../ImageActionBanner/ImageActionBanner';
import { HeroText } from '../HeroText/HeroText';
const PRIMARY_COL_HEIGHT = 300;

const cardData =
{
  droneName: "Mavic 3",
  photoUrl: "https://images.unsplash.com/photo-1650943043200-a9d69dcc52a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWF2aWMlMjAzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  link: "#",
  information: "Drone FPV Max",
  price: 800,
  data: [
    { label: '100 km/h in 4 seconds', icon: IconGauge },
    { label: 'Automatic', icon: IconManualGearbox },
    { label: 'Electric', icon: IconGasStation },
  ]
}

const baner = {
  "image": "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "title": "Mavic 3",
  "description": "15% off first buy",
  "action": {
    "label": "Buy now",
    "link": "#"
  },
  "canvas": {
    "center": true,
    "maxWidth": 480
  }
}

export function LeadGrid() {
  return (
    <Container my="md">
        <HeroText></HeroText>
      <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <Grid gutter="md">
          <Grid.Col span={12}>
            <DroneCard cardData={cardData}></DroneCard>
          </Grid.Col>
          <Grid.Col span={12}>
          </Grid.Col>
        </Grid>
        <Grid gutter="md">
          <Grid.Col span={12}>
            <ImageActionBanner image={"https://images.unsplash.com/photo-1532989029401-439615f3d4b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRyb25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"} title={baner.title} action={baner.action} style={baner.canvas} description={baner.description} />
          </Grid.Col>
          <Grid.Col span={12}>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}
