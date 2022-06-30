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
import { useAuth } from '../../context/authContext';

const ResetPassword = () => {
  const { isLoading, handlePasswordReset } = useAuth();

  const form = useForm({
    initialValues: {
      username: '',
      password: '',
      dob: '',
    },

    validationRules: {
      username: (value) => value.length > 3,
      password: (value) => value.length > 3,
      dob: (value) => value.length > 0,
    },
  });

  return (
    <div className={'flex flex-col justify-center items-center py-[6%]'}>
      <Paper radius={'md'} p={'xl'} className={'shadow-md max-w-lg w-80'}>
        <Text size="lg">Reset your password.</Text>

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

            <TextInput
              required
              label="Birth Year"
              placeholder="Birth Year"
              value={form.values.dob}
              onChange={(event) =>
                form.setFieldValue('dob', event.target.value)
              }
            />

            <PasswordInput
              required
              label="New Password"
              placeholder="New Password"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue('password', event.target.value)
              }
            />
          </Group>

          <Group position="apart" mt={'xl'}>
            {' '}
            <Button
              // type="submit"
              onClick={() => {
                handlePasswordReset(
                  form.values.username,
                  form.values.dob,
                  form.values.password
                );
              }}
              color={'cyan'}
              className={'bg-blue-500'}
              loading={isLoading}
            >
              Reset Password
            </Button>
          </Group>
        </form>
      </Paper>
    </div>
  );
};

export default ResetPassword;
