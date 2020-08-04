import Auth from '@aws-amplify/auth'
import { Hub } from '@aws-amplify/core'
import AuthConfig from './config.amplify'

Auth.configure(AuthConfig)

export default {
	Auth,
	Hub,
}
