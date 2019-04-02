import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import * as humps from 'humps';

export default class SyncpodV1Api extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.SYNCPOD_VI_API_BASE_URL || 'http://localhost:3000/api/v1';
  }

  // eslint-disable-next-line class-methods-use-this
  willSendRequest(request: RequestOptions) {
    request.headers.set('Content-Type', 'application/json');
  }

  async signup(email: string, password: string, name: string) {
    const { user } = await this.post('/users', {
      user: {
        email,
        password,
        name,
      },
    });

    user.icon = user.icon.url;
    return humps.camelizeKeys(user);
  }

  async login(email: string, password: string) {
    return this.post('/login', {
      email,
      password,
    });
  }
}
