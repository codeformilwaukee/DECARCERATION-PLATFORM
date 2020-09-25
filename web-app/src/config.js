export default {
  cognito: {
    REGION: WDP_AWS_REGION,
    USER_POOL_ID: WDP_AWS_USER_POOL_ID, // us-east-1_0K1BtopkC // us-east-1:2cae9edf-585c-46b4-a424-428625d433fc is the identity pool ID
    APP_CLIENT_ID: WDP_AWS_APP_CLIENT_ID,
    IDENTITY_POOL_ID: WDP_AWS_IDENTITY_POOL_ID
  },
  api: {
    GRAPHQL_ENDPOINT: WDP_GRAPHQL_ENDPOINT
    // GRAPHQL_API_KEY: "da2-myd5h4qiind7xhyfszyum6iuue",
  }
};