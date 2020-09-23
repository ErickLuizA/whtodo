import {expect, element, by} from 'detox'

export const Login = async () => {
  const emailInput = element(by.id('emailInput'))
  const passwordInput = element(by.id('passwordInput'))
  const submitLoginButton = element(by.id('submitLoginButton'))

  await expect(emailInput).toBeVisible()
  await expect(passwordInput).toBeVisible()
  await expect(submitLoginButton).toBeVisible()

  await emailInput.replaceText('sera@mail.com')
  await emailInput.tapReturnKey()

  await passwordInput.replaceText('sera1234')
  await passwordInput.tapReturnKey()

  await submitLoginButton.tap()
}

export const Logout = async () => {
  const menu = element(by.id('menu'))
  const settings = element(by.id('settings'))
  const logout = element(by.id('logout'))

  await menu.tap()
  await settings.tap()
  await logout.tap()
}

export const randomEmail = () => {
  const ram = Math.random()
  const number = ram + 1
  const random = number.toString().slice(0, 5)

  return `someone${random}@mail.com`
}
