---
sidebar_position: 1

---

# Single Sign-On

GraphBolt supports AWS Single Sign-On. If you have [configured SSO profiles](https://docs.aws.amazon.com/cli/latest/userguide/sso-configure-profile-token.html) on your local machine, GraphBolt will detect them and prompt you to login if necessary. Once you've logged in, it will remember the generated temporary credentials for you until they expired. After which, you will need to log in again.
