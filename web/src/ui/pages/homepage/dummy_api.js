import * as axiosWrapper from '../../../utilities/axios/wrapper'

export const fetch = {
  formatUrl: () => `/animals/favorites`,
  request: (url, body) => axiosWrapper.get(url, body),
  serialize: (amount) => ({ amount })
}
