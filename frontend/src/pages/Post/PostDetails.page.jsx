import { Link } from "react-router-dom";
import DOMAIN from "../../services/endpoint";
import axios from "axios";
import { Button, Container } from "@mantine/core";
import { Card, Image, Avatar, Text, Group } from '@mantine/core';
import classes from './PostDetail.page.module.css';

function PostDetailsPage() {
  return (
    <>
      <Container>
        <Card withBorder radius="md" p={0} className={classes.card}>
          <Group wrap="nowrap" gap={0}>
            <Image
              src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
              height={160}
            />
            <div className={classes.body}>
              <Text tt="uppercase" c="red" fw={700} size="md">
                Title
              </Text>
              <Text tt="uppercase" c="dimmed" fw={700} size="xs">
                Category
              </Text>
              <Text className={classes.title} mt="xs" mb="md">
                Description
              </Text>
              <Group wrap="nowrap" gap="xs">
                <Avatar
                  size={20}
                  src="https://gravatar.com/avatar/d39d8361032487a18cc3be6a0829c85d?s=400&d=robohash&r=x"
                />
                <Text size="xs">authour</Text>
              </Group>
            </div>
          </Group>
        </Card>
        <Button>
          <Link to="/posts">Back to Posts</Link>
        </Button>
      </Container>
    </>
  );
}

export const postDetailsLoader = async ({ params }) => {
  // do something with this
  return null;
};

export default PostDetailsPage;
