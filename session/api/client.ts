import amplify from '~/aws/amplify'

export default {
	signUp: (username: string, password: string, attributes: {}) =>
		amplify.Auth.signUp({ username, password, attributes }),
	signIn: (username: string, password: string) =>
		amplify.Auth.signIn({ username, password }),
	signOut: () => amplify.Auth.signOut(),
	forgotPassword: (username: string) => amplify.Auth.forgotPassword(username),
	forgotPasswordSubmit: (username: string, code: string, password: string) =>
		amplify.Auth.forgotPasswordSubmit(username, code, password),
	currentSession: () => amplify.Auth.currentSession(),
	currentUser: () => amplify.Auth.currentAuthenticatedUser(),
	hub: {
		listen: (channel, callback) => amplify.Hub.listen(channel, callback), //missing types
		remove: (channel, callback) => amplify.Hub.remove(channel, callback),
	},
}
