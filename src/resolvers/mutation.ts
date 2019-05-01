import SyncpodV1Api from '../api/syncpodV1Api';

export default {
  login: async (
    _source: any,
    { email, password }: { email: string; password: string },
    { dataSources }: { dataSources: { syncpodV1API: SyncpodV1Api } },
  ) => dataSources.syncpodV1API.login(email, password),
  signup: async (
    _source: any,
    {
      email,
      password,
      name,
    }: { email: string; password: string; name: string },
    { dataSources }: { dataSources: { syncpodV1API: SyncpodV1Api } },
  ) => dataSources.syncpodV1API.signup(email, password, name),
  createRoom: () => ({
    id: 1112,
    name: 'MyString',
    description: 'MyText',
    key: 'dAg2r_u9',
    public: true,
    nowPlayingVideo: null, // あとで変更する
    lastPlayedVideo: null, // あとで変更する
    onlineUsers: [], // あとで変更する
    createUser: {
      id: 1988,
      name: 'MyString',
      url: null,
    },
  }),
  createUserReport: () => ({
    id: 1,
    message: 'message',
    createdAt: '2018-03-31T07:35:06.000Z',
    updatedAt: '2018-03-31T07:35:06.000Z',
  }),
  uploadUserIcon: () => ({
    id: 87,
    accessToken: '87:UyH2nBGrDiyRzsYXa6mx',
    icon:
      '/Users/shintanitoshio/Works/YouTubeSyncServer/spec/tmp/uploads/user/icon/87/icon.jpg',
    email: 'user@example.com',
    name: 'MyString',
    createdAt: '2018-03-31T07:35:06.000Z',
    updatedAt: '2018-03-31T07:35:06.000Z',
    selfIntroduction: null,
  }),
};
