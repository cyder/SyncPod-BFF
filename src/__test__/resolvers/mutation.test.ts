import Mutation from '../../resolvers/mutation';

describe('[Mutation.login]', () => {
  it('returns user', async () => {
    const res = await Mutation.login();
    expect(res).toEqual({
      id: 69,
      icon: null,
      email: 'user@example.com',
      name: 'MyString',
      accessToken: '69:q1aXhT-onz4sWejxcV1s',
      createdAt: '2018-03-31T07:35:05.000Z',
      updatedAt: '2018-03-31T07:35:05.000Z',
      selfIntroduction: null,
    });
  });
});
