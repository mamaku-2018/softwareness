jest.mock('superagent', () => {
  return () => Promise.resolve({body: [
    {company: {
      name: 'test', websiteUrl: 'www.test.com', countryId: '123'
    }}
  ]})
})

