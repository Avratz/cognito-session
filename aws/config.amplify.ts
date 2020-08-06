export default {
	Auth: {
		mandatorySignId: true,
		region: process.env.AWS_REGION,
		userPoolId: process.env.USER_POOL_ID,
		userPoolWebClientId: process.env.APP_CLIENT_ID,
		IdentityPoolId: process.env.IDENTITY_POOL_ID,
		oauth: {
			domain: process.env.DOMAIN,
			scope: ['email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
			redirectSignIn: process.env.REDIRECT_SIGNIN,
			redirectSignOut: process.env.REDIRECT_SIGNOUT,
			responseType: 'code',
		},
	},
}
