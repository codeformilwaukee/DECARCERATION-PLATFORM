/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getServiceProvider = /* GraphQL */ `
  query GetServiceProvider($id: ID!) {
    getServiceProvider(id: $id) {
      id
      name
      typeOfOrg
      programmingAndServices
      description
      tag1
      tag2
      tag3
      tag4
      tag5
      primaryAddress
      primaryAddressName
      secondaryAddress
      secondaryAddressName
      primaryPhone
      primaryPhoneName
      secondaryPhone
      secondaryPhoneName
      fax
      email
      website
      attribution
      createdAt
      updatedAt
    }
  }
`;
export const listServiceProviders = /* GraphQL */ `
  query ListServiceProviders(
    $filter: ModelServiceProviderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServiceProviders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        typeOfOrg
        programmingAndServices
        description
        tag1
        tag2
        tag3
        tag4
        tag5
        primaryAddress
        primaryAddressName
        secondaryAddress
        secondaryAddressName
        primaryPhone
        primaryPhoneName
        secondaryPhone
        secondaryPhoneName
        fax
        email
        website
        attribution
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
