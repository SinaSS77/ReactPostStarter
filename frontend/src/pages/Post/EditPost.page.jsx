import { TextInput, Button, Group, Box } from "@mantine/core";
import DOMAIN from "../../services/endpoint";
import axios from "axios";
import { useForm } from "@mantine/form";
import { useNavigate, useLocation } from "react-router-dom";
import classes from "./EditPost.page.module.css"; 

function EditPostPage() {
  const location = useLocation();
  const { title, category, image, id, content } = location.state.postData;
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      id: id, // Include the post ID here
      title: title,
      category: category,
      image: image,
      content: content,
    },
  });

  const handleSubmit = async (values) => {
    try {
      const res = await axios.put(`${DOMAIN}/api/posts/${values.id}/edit`, values);
      if (res?.data.success) {
        navigate("/posts");
      }
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  return (
    <div className={classes.container}>
      <h1>Editing the post:</h1>
      <form className={classes.form} onSubmit={form.onSubmit(handleSubmit)}>
        <label>Title</label>
        <TextInput {...form.getInputProps("title")} />

        <label>Category</label>
        <TextInput {...form.getInputProps("category")} />

        <label>Image</label>
        <TextInput {...form.getInputProps("image")} />

        <label>Content</label>
        <TextInput {...form.getInputProps("content")} />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </div>
  );
}

export default EditPostPage;