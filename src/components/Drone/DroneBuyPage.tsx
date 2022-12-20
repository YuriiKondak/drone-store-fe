import { Carousel } from '@mantine/carousel';
import { IconStar } from '@tabler/icons';
import { Card, Image, Text, Group, Badge, createStyles, Center, Button, Anchor, Container, SimpleGrid, Grid } from '@mantine/core';
import { IconGasStation, IconGauge, IconManualGearbox, IconUsers, TablerIcon } from '@tabler/icons';
import { CommentHtml } from '../CommentHtml/CommentHtml';
import Colors from "../../constants/colors/drones/colors";
const useStyles = createStyles((theme, _params, getRef) => ({
  price: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  carousel: {
    '&:hover': {
      [`& .${getRef('carouselControls')}`]: {
        opacity: 1,
      },
    },
  },

  carouselControls: {
    ref: getRef('carouselControls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
  },

  carouselIndicator: {
    width: 4,
    height: 4,
    transition: 'width 250ms ease',

    '&[data-active]': {
      width: 16,
    },
  },

  droneInformation: {
    color: Colors.gray,
  },

  rightSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around"
  }
}));

const images = [
  require("../../images/drone-images/mavic3/buy1.jpeg"),
  require("../../images/drone-images/mavic3/buy2.jpeg"),
  require("../../images/drone-images/mavic3/buy3.jpeg"),
  require("../../images/drone-images/mavic3/buy4.jpeg")
];

const comment = {
  "postedAt": "10 minutes ago",
  "body": "<p>I use <a href=\"https://heroku.com/\" rel=\"noopener noreferrer\" target=\"_blank\">Heroku</a> to host my Node.js application, but MongoDB add-on appears to be too <strong>expensive</strong>. I consider switching to <a href=\"https://www.digitalocean.com/\" rel=\"noopener noreferrer\" target=\"_blank\">Digital Ocean</a> VPS to save some cash.</p>",
  "author": {
    "name": "Jacob Warnhalter",
    "image": "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
  }
}


interface DroneBuyPageProps {
  cardData: {
    droneName: string
    photoUrl: string;
    link: string;
    information: string;
    price: number
    data: {
      label: string;
      icon: TablerIcon;
    }[];
  }
}


export function DroneBuyPage({ cardData }: DroneBuyPageProps) {
  const { classes } = useStyles();

  const slides = images.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} height={220} />
    </Carousel.Slide>
  ));

  return (
    <Container my="md">
      <SimpleGrid cols={2} spacing="md" style={{ marginBottom: 50 }} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <Grid gutter="md">
          <Grid.Col span={12}>
            <Card radius="md" withBorder p="xl">
              <Card.Section>
                <Carousel
                  withIndicators
                  loop
                  classNames={{
                    root: classes.carousel,
                    controls: classes.carouselControls,
                    indicator: classes.carouselIndicator,
                  }}
                >
                  {slides}
                </Carousel>
              </Card.Section>

              <Group position="apart" mt="lg">
                <Text weight={500} size="lg">
                  DJI Mavic 3
                </Text>

                <Group spacing={5}>
                  <IconStar size={16} />
                  <Text size="xs" weight={500}>
                    USD $2,049
                  </Text>
                </Group>
              </Group>

            </Card>
          </Grid.Col>
        </Grid>
        <Grid gutter="md">
          <Grid.Col className={classes.rightSection}>
              <div>
                <h3>DJI MAVIC 3</h3>
                <h4>USD $800</h4>
              </div>
              <nav className={classes.droneInformation}>
                <li>Under 249 g</li>
                <li>Extended Battery Life</li>
                <li>4K HDR Video</li>
                <li>True Vertical Shooting</li>
                <li>Intelligent Features</li>
                <li>38kph (Level 5) Wind Resistance</li>
                <li>Beginner-Friendly, Easy-To-Fly, and Easy-To-Use</li>
              </nav>
            <div>
              <Button radius="xl" style={{ flex: 1 }}>
                Shop Now
              </Button>
            </div>
          </Grid.Col>
        </Grid>
      </SimpleGrid>

      <CommentHtml postedAt={comment.postedAt} body={comment.body} author={comment.author} />
    </Container >
  );
}
