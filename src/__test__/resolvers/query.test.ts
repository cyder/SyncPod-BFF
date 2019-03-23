import { resolvers } from '../..';

describe('[Query.ping]', () => {
  it('returns pong', async () => {
    const res = await resolvers.Query.ping();
    expect(res).toEqual('pong');
  });
});
