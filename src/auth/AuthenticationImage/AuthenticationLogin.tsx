import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
} from '@mantine/core';
import { useContext, useEffect, useState } from 'react';

import { Link, Navigate } from "react-router-dom";
import { AuthContext } from '../AuthContext';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 900,
    backgroundSize: 'cover',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)',
  },

  form: {
    borderRight: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
      }`,
    minHeight: 900,
    maxWidth: 450,
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  logo: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    width: 120,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));



export function AuthenticationLogin() {
  const { classes } = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, user } = useContext(AuthContext);

  if (user) {
    return <Navigate to="/" />
  }

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} align="center" mt="md" mb={50}>
          Welcome back to Drone Store
        </Title>

        <TextInput label="Email address" placeholder="hello@gmail.com" size="md" onChange={e => setEmail(e.target.value)} />
        <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" onChange={e => setPassword(e.target.value)} />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />
        <Button onClick={() => login(email, password)} fullWidth mt="xl" size="md">
          Login
        </Button>

        <Text align="center" mt="md">
          Don&apos;t have an account?{' '}
          <Link to="/users" style={{ textDecoration: "none", color: "#1c7ed6", fontWeight: 700 }}>
            Register
          </Link>
        </Text>
      </Paper>
    </div>
  );
}
