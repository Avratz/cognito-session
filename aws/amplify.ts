import Auth from '@aws-amplify/auth'
import AuthConfig from './config.amplify'

Auth.configure(AuthConfig)

export default {
	Auth,
}
