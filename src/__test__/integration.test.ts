import { createTestClient } from 'apollo-server-testing';
import { gql } from 'apollo-server-express';

import { server } from '../server';

const PING = gql`
  query {
    ping
  }
`;

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      icon
      email
      name
      accessToken
      createdAt
      updatedAt
      selfIntroduction
    }
  }
`;

describe('Queries', () => {
  it('returns pong ', async () => {
    const { query } = createTestClient(server);
    const res = await query({ query: PING });
    expect(res).toMatchSnapshot();
  });
});

describe('Mutations', () => {
  it('returns user', async () => {
    const { mutate } = createTestClient(server);
    const res = await mutate({
      query: undefined,
      mutation: LOGIN,
      variables: { email: 'user@example.com', password: 'password' },
    } as any);
    expect(res).toMatchSnapshot();
  });
});
