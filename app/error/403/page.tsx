'use client';

import { Button, Group, Stack, Text, Title } from '@mantine/core';
import { IconChevronLeft } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import classes from './page.module.css';
import { Metadata } from 'next';

function Error403() {
  const router = useRouter();

  return (
    <>
      <>
        <title>Access Denied | DesignSparx</title>
        <meta
          name="description"
          content="Explore our versatile dashboard website template featuring a stunning array of themes and meticulously crafted components. Elevate your web project with seamless integration, customizable themes, and a rich variety of components for a dynamic user experience. Effortlessly bring your data to life with our intuitive dashboard template, designed to streamline development and captivate users. Discover endless possibilities in design and functionality today!"
        />
      </>
      <Stack>
        <div className={classes.label}>403</div>
        <Title className={classes.title}>Access Denied.</Title>
        <Text fz="md" ta="center" className={classes.description}>
          The page you're trying to access has restricted access. Please refer
          to your system administrator.
        </Text>
        <Group justify="center" mt="md">
          <Button
            size="md"
            variant="subtle"
            leftSection={<IconChevronLeft size={18} />}
            onClick={() => {
              router.back();
            }}
          >
            Go back
          </Button>
        </Group>
      </Stack>
    </>
  );
}

export default Error403;
