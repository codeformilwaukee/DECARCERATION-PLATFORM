/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createServiceProvider = /* GraphQL */ `
  mutation CreateServiceProvider(
    $input: CreateServiceProviderInput!
    $condition: ModelServiceProviderConditionInput
  ) {
    createServiceProvider(input: $input, condition: $condition) {
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
export const updateServiceProvider = /* GraphQL */ `
  mutation UpdateServiceProvider(
    $input: UpdateServiceProviderInput!
    $condition: ModelServiceProviderConditionInput
  ) {
    updateServiceProvider(input: $input, condition: $condition) {
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
export const deleteServiceProvider = /* GraphQL */ `
  mutation DeleteServiceProvider(
    $input: DeleteServiceProviderInput!
    $condition: ModelServiceProviderConditionInput
  ) {
    deleteServiceProvider(input: $input, condition: $condition) {
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
