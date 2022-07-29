const { I } = inject();

module.exports = {

  // Set your Locators
  loginForm: '#login_form',
  username: "#user_login",
  password: "#user_password",
  submitButton: ".btn-primary",

  // Create your Locators
  submitLogin(username, password) {
    I.fillField(this.username, username)
    I.fillField(this.password, password)
    I.click(this.submitButton)
  },

  assertLoginFormIsVisible() {
    I.seeElement(this.loginForm)
  }

  // insert your locators and methods here
}