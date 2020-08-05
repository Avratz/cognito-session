module.exports = {
	env: {
		AWS_REGION: process.env.AWS_REGION,
		USER_POOL_ID: process.env.USER_POOL_ID,
		APP_CLIENT_ID: process.env.APP_CLIENT_ID,
		IDENTITY_POOL_ID: process.env.IDENTITY_POOL_ID,
		DOMAIN: process.env.DOMAIN,
		REDIRECT_SIGNIN: process.env.REDIRECT_SIGNIN,
		REDIRECT_SIGNOUT: process.env.REDIRECT_SIGNOUT,
	},
}
