---
sidebar_position: 3
---

# Authentication

One of the key features of GraphBolt, is that it automatically detects the authentication methods of your APIs and makes it easy to authenticate your requests.

To authenticate, click on the 🔒 icon (`Cmd/Ctrl + Shift + A`) from the Query Client window.

GraphBolt will show you the available authentication methods for the currently selected API.

## API Keys

If your API has `API_KEY` as an authentication method, GraphBolt automatically fetches all the available API keys. Just select the one you want to use from the dropdown menu.

![API keys](img/api-keys.png)

## Cognito User Pools

When a `AMAZON_COGNITO_USER_POOLS` authentication provider is available, GraphBolt will prompt you to select the User Pool you want to use (only user pools linked to that API are shown), the App Client Id, the username and password.

![Cognito User Pools](img/cognito-user-pools.png)

:::tip
Clicking on _Id Token_ or _Access Token_ in the info box, will take you to https://jwt.io/ and let your visualize the content of that token.
:::

:::info Did you know?
GraphBolt automatically manages the JWT session for you. If a `refreshToken` is available, it will use it to refresh the access token. 
:::

:::info Did you know?
_MFA_ and _Password Reset_ auth challenges are supported out of the box. A new modal will show up if the current flow requires a challenge. Other challenges are not yet supported.

![Cognito auth challenge](img/auth-challenge.png)
:::

## IAM

You can also use `AWS_IAM` as the authentication method. For now, IAM authentication is limited to using the current AWS profile. All requests are automatically signed using the _access key_, _secret access key_ and (optionally) the _session token_ of that profile.

![IAM authentication](img/iam.png)

## Lambda Authorizer and OIDC (OpenID Connect)

OIDC and Lambda authorizer are also supported. Just enter your authentication token.

![OIDC authentication](img/oidc.png)
