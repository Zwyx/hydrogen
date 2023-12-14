export const CUSTOMER_FRAGMENT = `#graphql
  fragment Customer on Customer {
    firstName
    lastName
    emailAddress {
      emailAddress
    }
    phoneNumber {
      phoneNumber
    }
  }
` as const;

// NOTE: https://shopify.dev/docs/api/customer/latest/queries/customer
export const CUSTOMER_DETAILS_QUERY = `#graphql
  query CustomerDetails {
    customer {
      ...Customer
    }
  }
  ${CUSTOMER_FRAGMENT}
` as const;
