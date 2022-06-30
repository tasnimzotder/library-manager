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
import { useRouter } from 'next/router';

const Register = () => {
  const [type, toggle] = useToggle('login', ['login', 'register']);

  const { handleLogin, isLoading, handleRegister } = useAuth();

  const router = useRouter();

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
      <Paper radius={'md'} p={'xl'} className={'shadow-md max-w-lg'}>
        <Text size="lg">
          Welcome to the <span className={'font-medium'}>Library Manager</span>,{' '}
          {type} with
        </Text>

        <Divider my={'lg'} />

        <form>
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
            <div className={'flex flex-col items-start'}>
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

              <Anchor
                component={'button'}
                type="button"
                size={'xs'}
                color={'gray'}
                onClick={() => router.push('/auth/reset-password')}
              >
                Forget Password?
              </Anchor>
            </div>

            <Button
              // type="submit"
              onClick={() => {
                type == 'login'
                  ? handleLogin(form.values.username, form.values.password)
                  : handleRegister(
                      form.values.username,
                      form.values.email,
                      form.values.dob,
                      form.values.password
                    );
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
