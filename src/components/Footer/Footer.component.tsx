import { Container, Group, ActionIcon, rem } from "@mantine/core";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

const FooterSocial = () => {
  return (
    <div>
      <Container>
        <Group gap={0} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <FaTwitter />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <FaYoutube />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <FaInstagram />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
};

export default FooterSocial;
