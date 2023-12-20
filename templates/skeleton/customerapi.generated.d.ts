/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import * as CustomerAccountAPI from '@shopify/hydrogen/customer-account-api-types';

export type CustomerFragment = Pick<
  CustomerAccountAPI.Customer,
  'firstName' | 'lastName'
> & {
  emailAddress?: CustomerAccountAPI.Maybe<
    Pick<CustomerAccountAPI.CustomerEmailAddress, 'emailAddress'>
  >;
  phoneNumber?: CustomerAccountAPI.Maybe<
    Pick<CustomerAccountAPI.CustomerPhoneNumber, 'phoneNumber'>
  >;
};

export type CustomerDetailsQueryVariables = CustomerAccountAPI.Exact<{
  [key: string]: never;
}>;

export type CustomerDetailsQuery = {
  customer: Pick<CustomerAccountAPI.Customer, 'firstName' | 'lastName'> & {
    emailAddress?: CustomerAccountAPI.Maybe<
      Pick<CustomerAccountAPI.CustomerEmailAddress, 'emailAddress'>
    >;
    phoneNumber?: CustomerAccountAPI.Maybe<
      Pick<CustomerAccountAPI.CustomerPhoneNumber, 'phoneNumber'>
    >;
  };
};

export type OrderItemFragment = Pick<
  CustomerAccountAPI.Order,
  'financialStatus' | 'id' | 'number' | 'processedAt'
> & {totalPrice: Pick<CustomerAccountAPI.MoneyV2, 'amount' | 'currencyCode'>};

export type CustomerOrdersFragment = {
  orders: {
    nodes: Array<
      Pick<
        CustomerAccountAPI.Order,
        'financialStatus' | 'id' | 'number' | 'processedAt'
      > & {
        totalPrice: Pick<CustomerAccountAPI.MoneyV2, 'amount' | 'currencyCode'>;
      }
    >;
    pageInfo: Pick<
      CustomerAccountAPI.PageInfo,
      'hasPreviousPage' | 'hasNextPage' | 'endCursor' | 'startCursor'
    >;
  };
};

export type CustomerOrdersQueryVariables = CustomerAccountAPI.Exact<{
  endCursor?: CustomerAccountAPI.InputMaybe<
    CustomerAccountAPI.Scalars['String']['input']
  >;
  first?: CustomerAccountAPI.InputMaybe<
    CustomerAccountAPI.Scalars['Int']['input']
  >;
  last?: CustomerAccountAPI.InputMaybe<
    CustomerAccountAPI.Scalars['Int']['input']
  >;
  startCursor?: CustomerAccountAPI.InputMaybe<
    CustomerAccountAPI.Scalars['String']['input']
  >;
}>;

export type CustomerOrdersQuery = {
  customer: {
    orders: {
      nodes: Array<
        Pick<
          CustomerAccountAPI.Order,
          'financialStatus' | 'id' | 'number' | 'processedAt'
        > & {
          totalPrice: Pick<
            CustomerAccountAPI.MoneyV2,
            'amount' | 'currencyCode'
          >;
        }
      >;
      pageInfo: Pick<
        CustomerAccountAPI.PageInfo,
        'hasPreviousPage' | 'hasNextPage' | 'endCursor' | 'startCursor'
      >;
    };
  };
};

export type CustomerUpdateMutationVariables = CustomerAccountAPI.Exact<{
  customer: CustomerAccountAPI.CustomerUpdateInput;
}>;

export type CustomerUpdateMutation = {
  customerUpdate?: CustomerAccountAPI.Maybe<{
    customer?: CustomerAccountAPI.Maybe<
      Pick<CustomerAccountAPI.Customer, 'firstName' | 'lastName'> & {
        emailAddress?: CustomerAccountAPI.Maybe<
          Pick<CustomerAccountAPI.CustomerEmailAddress, 'emailAddress'>
        >;
        phoneNumber?: CustomerAccountAPI.Maybe<
          Pick<CustomerAccountAPI.CustomerPhoneNumber, 'phoneNumber'>
        >;
      }
    >;
    userErrors: Array<
      Pick<
        CustomerAccountAPI.UserErrorsCustomerUserErrors,
        'code' | 'field' | 'message'
      >
    >;
  }>;
};

interface GeneratedQueryTypes {
  '#graphql\n  query CustomerDetails {\n    customer {\n      ...Customer\n    }\n  }\n  #graphql\n  fragment Customer on Customer {\n    firstName\n    lastName\n    emailAddress {\n      emailAddress\n    }\n    phoneNumber {\n      phoneNumber\n    }\n  }\n\n': {
    return: CustomerDetailsQuery;
    variables: CustomerDetailsQueryVariables;
  };
  '#graphql\n  #graphql\n  fragment CustomerOrders on Customer {\n    orders(\n      sortKey: PROCESSED_AT,\n      reverse: true,\n      first: $first,\n      last: $last,\n      before: $startCursor,\n      after: $endCursor\n    ) {\n      nodes {\n        ...OrderItem\n      }\n      pageInfo {\n        hasPreviousPage\n        hasNextPage\n        endCursor\n        startCursor\n      }\n    }\n  }\n  #graphql\n  fragment OrderItem on Order {\n    totalPrice {\n      amount\n      currencyCode\n    }\n    financialStatus\n    id\n    number\n    processedAt\n  }\n\n\n  query CustomerOrders(\n    $endCursor: String\n    $first: Int\n    $last: Int\n    $startCursor: String\n  ) {\n    customer {\n      ...CustomerOrders\n    }\n  }\n': {
    return: CustomerOrdersQuery;
    variables: CustomerOrdersQueryVariables;
  };
}

interface GeneratedMutationTypes {
  '#graphql\n  # https://shopify.dev/docs/api/customer/latest/mutations/customerUpdate\n  mutation customerUpdate(\n    $customer: CustomerUpdateInput!\n  ){\n    customerUpdate(input: $customer) {\n      customer {\n        firstName\n        lastName\n        emailAddress {\n          emailAddress\n        }\n        phoneNumber {\n          phoneNumber\n        }\n      }\n      userErrors {\n        code\n        field\n        message\n      }\n    }\n  }\n': {
    return: CustomerUpdateMutation;
    variables: CustomerUpdateMutationVariables;
  };
}

declare module '@shopify/hydrogen' {
  interface CustomerAccountQueries extends GeneratedQueryTypes {}
  interface CustomerAccountMutations extends GeneratedMutationTypes {}
}
