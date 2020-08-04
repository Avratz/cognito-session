import { CognitoUser, CognitoAccessToken } from 'amazon-cognito-identity-js'
import { HubCallback as HubCallbk } from '@aws-amplify/core/lib/Hub'
export type User = CognitoUser

export interface cUser {
	name: User
	token: CognitoAccessToken
}

export type HubCallback = HubCallbk
