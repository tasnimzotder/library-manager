import { useForm } from '@mantine/hooks';
import {
  Paper,
  TextInput,
  PasswordInput,
  Text,
  Group,
  Button,
  Divider,
} from '@mantine/core';
import { addBook } from '../../utils/libraryService';

const AddBook = () => {
  const form = useForm({
    initialValues: {
      title: '',
      author: '',
      publisher: '',
      year: '0',
      genre: '',
      language: '',
      cover: '',
    },

    validationRules: {
      title: (value) => value.length > 3,
      author: (value) => value.length > 3,
      publisher: (value) => value.length > 3,
      year: (value) => value.length >= 4,
      genre: (value) => value.length > 3,
      language: (value) => value.length > 3,
      cover: (value) => /^https:\/\/m.media-amazon.com\/.*$/.test(value),
    },
  });

  return (
    <div className={'flex flex-col justify-center items-center py-[6%]'}>
      <Paper radius={'md'} p={'xl'} className={'shadow-md max-w-lg w-1/2 '}>
        <Text size="lg">Add a book.</Text>

        <Divider my={'lg'} />

        <form>
          <Group direction="column" grow>
            <TextInput
              required
              label="Book Title"
              placeholder="Book Title"
              value={form.values.title}
              onChange={(event) =>
                form.setFieldValue('title', event.target.value)
              }
            />

            <TextInput
              required
              label="Author"
              placeholder="Author"
              value={form.values.author}
              onChange={(event) =>
                form.setFieldValue('author', event.target.value)
              }
            />

            <TextInput
              required
              label="Publisher"
              placeholder="Publisher"
              value={form.values.publisher}
              onChange={(event) =>
                form.setFieldValue('publisher', event.target.value)
              }
            />

            <TextInput
              required
              label="Published Year"
              placeholder="Published Year"
              value={form.values.year}
              onChange={(event) =>
                form.setFieldValue('year', event.target.value)
              }
            />

            <TextInput
              required
              label="Genre"
              placeholder="Genre"
              value={form.values.genre}
              onChange={(event) =>
                form.setFieldValue('genre', event.target.value)
              }
            />

            <TextInput
              required
              label="Language"
              placeholder="Language"
              value={form.values.language}
              onChange={(event) =>
                form.setFieldValue('language', event.target.value)
              }
            />

            <TextInput
              required
              label="Cover Image URL"
              placeholder="https://m.media-amazon.com/..."
              value={form.values.cover}
              onChange={(event) =>
                form.setFieldValue('cover', event.target.value)
              }
            />
          </Group>

          <Group position="apart" mt={'xl'}>
            <Button
              // type="submit"
              onClick={() => {
                addBook({
                  title: form.values.title,
                  author: form.values.author,
                  publisher: form.values.publisher,
                  year: form.values.year,
                  genre: form.values.genre,
                  language: form.values.language,
                  cover: form.values.cover,
                }).then(() => {
                  form.reset();
                });
              }}
              color={'cyan'}
              className={'bg-blue-500'}
              //   loading={isLoading}
            >
              Add the book
            </Button>
          </Group>
        </form>
      </Paper>
    </div>
  );
};

export default AddBook;
