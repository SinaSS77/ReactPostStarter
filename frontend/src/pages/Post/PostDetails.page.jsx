import { Link, useLocation, useLoaderData } from "react-router-dom";
import DOMAIN from "../../services/endpoint";
import axios from "axios";
import { Button, Container } from "@mantine/core";
import { Card, Image, Avatar, Text, Group } from '@mantine/core';
import classes from './PostDetail.page.module.css';

function PostDetailsPage() {
  const location = useLocation();
  const { title, category, image, id, content } = location.state.postData

  return (
    <>
      <Container>
        <Card withBorder radius="md" p={0} className={classes.card}>
          <Group wrap="nowrap" gap={0}>
            <Image
              src={image}
              height={160}
            />
            <div className={classes.body}>
              <Text tt="uppercase" c="red" fw={700} size="md">
                {title}
              </Text>
              <Text tt="uppercase" c="dimmed" fw={700} size="xs">
                {category}
              </Text>
              <Text className={classes.title} mt="xs" mb="md">
                {content}
              </Text>
              <Group wrap="nowrap" gap="xs">
                <Avatar
                  size={20}
                  src="https://gravatar.com/avatar/d39d8361032487a18cc3be6a0829c85d?s=800&d=robohash&r=x"
                />
                <Text size="xs">authour</Text>
              </Group>
            </div>
          </Group>
          <Button>
            <Link to={`/posts/${id.toString()}/edit`} state={{postData: { title, category, image, id, content }}}>Edit</Link>
          </Button>
        </Card>
        <Button>
          <Link to="/posts">Back to Posts</Link>
        </Button>
      </Container>
    </>
  );
}

export const postDetailsLoader = async ({ params }) => {
  console.log(params)
  return params
  // do something with this
  // return null;
};

export default PostDetailsPage;
