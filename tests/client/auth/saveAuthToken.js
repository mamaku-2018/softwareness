jest.mock('../../../client/lib/auth', () => {
  const testToken = {id: 'test token id'}
  const saveAuthToken = {token: 'sdfjhsd'}
  return {
    saveAuthToken: () => testToken,
    logOff: () => saveAuthToken
  }
})
