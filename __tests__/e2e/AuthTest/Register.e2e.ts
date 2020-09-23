import {device, expect, element, by, waitFor} from 'detox'
import {Logout, randomEmail} from './functions'

describe('Register flow', () => {
  beforeAll(async () => {
    await device.reloadReactNative()
  })

  it('should be able to go to register screen', async () => {
    const registerButton = element(by.id('registerButton'))
    await expect(registerButton).toBeVisible()
    await registerButton.tap()

    await expect(element(by.id('registerTitle'))).toBeVisible()
    await expect(element(by.id('googleButton'))).toBeVisible()
  })

  it('should not be able to register with email and password', async () => {
    const nameInput = element(by.id('nameInput'))
    const emailInput = element(by.id('emailInput'))
    const passwordInput = element(by.id('passwordInput'))
    const submitRegisterButton = element(by.id('submitRegisterButton'))

    const nameError = element(by.id('nameError'))
    const emailError = element(by.id('emailError'))

    await expect(nameInput).toBeVisible()
    await expect(emailInput).toBeVisible()
    await expect(passwordInput).toBeVisible()
    await expect(submitRegisterButton).toBeVisible()

    await nameInput.typeText('')
    await nameInput.tapReturnKey()

    await submitRegisterButton.tap()
    await expect(nameError).toBeVisible()

    await nameInput.typeText('someone')
    await nameInput.tapReturnKey()

    await submitRegisterButton.tap()

    await emailInput.typeText('')
    await emailInput.tapReturnKey()

    await submitRegisterButton.tap()
    await expect(emailError).toBeVisible()

    await emailInput.replaceText('somerandomemail@maii.com')
    await emailInput.tapReturnKey()

    await submitRegisterButton.tap()

    await passwordInput.typeText('s')
    await passwordInput.tapReturnKey()

    await submitRegisterButton.tap()
    await expect(element(by.id('passwordError'))).toBeVisible()
  })

  it('should be able to register with email and password', async () => {
    const nameInput = element(by.id('nameInput'))
    const emailInput = element(by.id('emailInput'))
    const passwordInput = element(by.id('passwordInput'))
    const submitRegisterButton = element(by.id('submitRegisterButton'))

    await expect(nameInput).toBeVisible()
    await expect(emailInput).toBeVisible()
    await expect(passwordInput).toBeVisible()
    await expect(submitRegisterButton).toBeVisible()

    await nameInput.replaceText('sera')
    await nameInput.tapReturnKey()

    await emailInput.replaceText(randomEmail())
    await emailInput.tapReturnKey()

    await passwordInput.replaceText('sera1234')
    await passwordInput.tapReturnKey()

    await submitRegisterButton.tap()

    await waitFor(element(by.id('hello')))
      .toBeVisible()
      .withTimeout(3000)

    await Logout()
  })
})
