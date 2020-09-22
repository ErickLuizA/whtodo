describe('HomeScreen', () => {
  beforeAll(async () => {
    await device.reloadReactNative()
  })

  it('shoul show img', async () => {
    await expect(element(by.id('img'))).toBeVisible()
  })

  it('shoul show text', async () => {
    await expect(element(by.id('text'))).toBeVisible()
  })

  it('should be able to go to login', async () => {
    await expect(element(by.id('loginButton'))).toBeVisible()
    await element(by.id('loginButton')).tap()

    await device.pressBack()
  })

  it('should be able to go to register', async () => {
    await expect(element(by.id('registerButton'))).toBeVisible()
    await element(by.id('registerButton')).tap()

    await device.pressBack()
  })
})
