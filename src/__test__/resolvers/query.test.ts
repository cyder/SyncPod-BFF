import Query from '../../resolvers/query';

describe('[Query.ping]', () => {
  it('returns pong', async () => {
    const res = await Query.ping();
    expect(res).toEqual('pong');
  });
});
