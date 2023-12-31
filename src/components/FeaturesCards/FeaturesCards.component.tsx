import { Card, Container, Group, Badge, Title, SimpleGrid, Text } from "@mantine/core";
import { FaUserLarge, FaGaugeHigh, FaCookie } from "react-icons/fa6";

const mockdata = [
  {
    title: "Extreme performance",
    description:
      "This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit",
    icon: <FaGaugeHigh />,
  },
  {
    title: "Privacy focused",
    description:
      "People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma",
    icon: <FaUserLarge />,
  },
  {
    title: "No third parties",
    description: "They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves",
    icon: <FaCookie />,
  },
];

const FeaturesCards = () => {
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" padding="xl">
      {feature.icon}
      <Text fz="lg" fw={500} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Title order={2} ta="center">
        Spécialités
      </Title>

      <Text c="dimmed" ta="center" mt="md">
        Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when hunger drives it to try
        biting a Steel-type Pokémon.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
};

export default FeaturesCards;
