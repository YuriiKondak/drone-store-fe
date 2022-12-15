import { Card, Image, Text, Group, Badge, createStyles, Center, Button, Anchor } from '@mantine/core';
import { IconGasStation, IconGauge, IconManualGearbox, IconUsers, TablerIcon } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    padding: theme.spacing.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: -0.25,
    textTransform: 'uppercase',
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
  },

  icon: {
    marginRight: 5,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
  },
}));

const mockdata = [
  { label: '4 passengers', icon: IconUsers },
  { label: '100 km/h in 4 seconds', icon: IconGauge },
  { label: 'Automatic gearbox', icon: IconManualGearbox },
  { label: 'Electric', icon: IconGasStation },
];

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
  const features = cardData.data.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size={18} className={classes.icon} stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src={cardData.photoUrl} alt={cardData.information} />
      </Card.Section>

      <Group position="apart" mt="md">
        <div>
          <Text weight={500}>{cardData.droneName}</Text>
        </div>
      </Group>

      <Card.Section className={classes.section} mt="md">
        <Text size="sm" color="dimmed" className={classes.label}>
          Basic configuration
        </Text>

        <Group spacing={8} mb={-8}>
          {features}
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group spacing={30}>
          <div>
            <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
              ${cardData.price}
            </Text>
          </div>
          <Button radius="xl" style={{ flex: 1 }}>
            Buy Now
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}
