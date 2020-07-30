export default {
	mandatorySignId: true,
	region: process.env.AWS_REGION,
	userPoolId: process.env.USER_POOL_ID,
	userPoolWebClientId: process.env.APP_CLIENT_ID,
}
