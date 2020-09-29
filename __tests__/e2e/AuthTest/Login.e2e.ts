import { device, expect, element, by, waitFor } from 'detox'
import { Login, Logout } from '../functions'

describe('Login flow', () => {
  beforeAll(async () => {
    await device.reloadReactNative()
  })

  it('should be able to go to login screen', async () => {
    const loginButton = element(by.id('LOGINButton'))
    await expect(loginButton).toBeVisible()
    await loginButton.tap()

    await expect(element(by.id('loginTitle'))).toBeVisible()
    await expect(element(by.id('googleButton'))).toBeVisible()
  })

  it('should not be able to login with email and password', async () => {
    const emailInput = element(by.id('emailInput'))
    const passwordInput = element(by.id('passwordInput'))
    const submitLoginButton = element(by.id('LOGINBigButton'))

    const emailError = element(by.id('emailError'))

    await expect(emailInput).toBeVisible()
    await expect(passwordInput).toBeVisible()

    await emailInput.typeText('')
    await emailInput.tapReturnKey()

    await submitLoginButton.tap()
    await expect(emailError).toBeVisible()

    await emailInput.replaceText('someone@mail.com')
    await emailInput.tapReturnKey()

    await submitLoginButton.tap()

    await passwordInput.typeText('s')
    await passwordInput.tapReturnKey()

    await submitLoginButton.tap()
    await expect(element(by.id('passwordError'))).toBeVisible()
  })

  it('should be able to login with email and password', async () => {
    await Login()

    await waitFor(element(by.id('hello')))
      .toBeVisible()
      .withTimeout(3000)

    await Logout()
  })
})
