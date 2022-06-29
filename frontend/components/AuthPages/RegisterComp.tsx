import { upperFirst, useForm, useToggle } from '@mantine/hooks';
import {
  Paper,
  TextInput,
  PasswordInput,
  Text,
  Group,
  Anchor,
  Button,
  Divider,
} from '@mantine/core';
import { useAuth } from '../../context/authContext';

const Register = () => {
  // private String username;
  // private String password;
  // private String email;
  // private int dob;

  const [type, toggle] = useToggle('login', ['login', 'register']);

  const { handleLogin, isLoading, user } = useAuth();

  const form = useForm({
    initialValues: {
      username: '',
      email: '',
      password: '',
      dob: '',
    },

    validationRules: {
      username: (value) => value.length > 3,
      email: (value) => /^\S+@\S+$/.test(value),
      password: (value) => value.length > 3,
      dob: (value) => value.length > 0,
    },
  });

  return (
    <div className={'flex flex-col justify-center items-center pt-[6%]'}>
      {JSON.stringify(user)}
      <Paper radius={'md'} p={'xl'} className={'shadow-md max-w-lg'}>
        <Text size="lg">
          Welcome to the{' '}
          <span className={'font-medium'}>Network Traffic Monitor</span>, {type}{' '}
          with
        </Text>

        <Divider my={'lg'} />

        <form
          // onSubmit={form.onSubmit(() => {
          //   alert('knk');
          // })}

          onSubmit={() => {
            handleLogin(form.values.username, form.values.password);
          }}
        >
          <Group direction="column" grow>
            <TextInput
              required
              label="Username"
              placeholder="Username"
              value={form.values.username}
              onChange={(event) =>
                form.setFieldValue('username', event.target.value)
              }
            />

            {type == 'register' && (
              <TextInput
                label="email"
                placeholder="Email"
                value={form.values.email}
                onChange={(event) =>
                  form.setFieldValue('email', event.target.value)
                }
              />
            )}

            {type == 'register' && (
              <TextInput
                label="Birth Year"
                placeholder="Birth Year"
                value={form.values.dob}
                onChange={(event) =>
                  form.setFieldValue('dob', event.target.value)
                }
              />
            )}

            <PasswordInput
              required
              label="Password"
              placeholder="Password"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue('password', event.target.value)
              }
            />
          </Group>

          <Group position="apart" mt={'xl'}>
            <Anchor
              component={'button'}
              type="button"
              color={'gray'}
              onClick={() => toggle()}
              size="xs"
            >
              {type == 'register'
                ? 'Already have an account? Login'
                : "Don't have an account? Register"}
            </Anchor>

            <Button
              // type="submit"
              onClick={() => {
                handleLogin(form.values.username, form.values.password);
              }}
              color={'cyan'}
              className={'bg-blue-500'}
              loading={isLoading}
            >
              {upperFirst(type)}
            </Button>
          </Group>
        </form>
      </Paper>
    </div>
  );
};

export default Register;
