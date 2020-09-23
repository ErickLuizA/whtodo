import { device, expect, element, by } from 'detox'

describe('Forgot password flow', () => {
  beforeAll(async () => {
    await device.reloadReactNative()
  })

  it('should be able to go to login screen', async () => {
    const loginButton = element(by.id('loginButton'))
    await expect(loginButton).toBeVisible()
    await loginButton.tap()

    await expect(element(by.id('loginTitle'))).toBeVisible()
  })

  it('should be able to go to forgot password screen', async () => {
    const forgotButton = element(by.id('forgotButton'))

    await expect(forgotButton).toBeVisible()
    await forgotButton.tap()

    await expect(element(by.id('forgotTitle'))).toBeVisible()
  })

  it('should be able to send a password reset request', async () => {
    const forgotInput = element(by.id('forgotInput'))
    const resetButton = element(by.id('resetButton'))

    await expect(forgotInput).toBeVisible()
    await expect(resetButton).toBeVisible()

    await forgotInput.typeText('someemail@mail.com')
    await expect(forgotInput).toHaveText('someemail@mail.com')

    // await resetButton.tap()

    // await waitFor(element(by.id('snackbar')))
    //   .toBeVisible()
    //   .withTimeout(1000)

    // await waitFor(element(by.id('loginTitle')))
    //   .toBeVisible()
    //   .withTimeout(3000)
    // Comented this to stop sending e-mails
  })
})
