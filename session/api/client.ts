import amplify from '~/aws/amplify'

export default {
	signUp: (username: string, password: string) =>
		amplify.Auth.signUp({ username, password, attributes: {} }),
	signIn: (username: string, password: string) =>
		amplify.Auth.signIn({ username, password }),
	signOut: () => amplify.Auth.signOut(),
	forgotPassword: (username: string) => amplify.Auth.forgotPassword(username),
	forgotPasswordSubmit: (username: string, code: string, password: string) =>
		amplify.Auth.forgotPasswordSubmit(username, code, password),
	currentSession: () => amplify.Auth.currentSession(),
	currentUser: () => amplify.Auth.currentAuthenticatedUser(),
}
