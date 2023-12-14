import {redirect, type LoaderFunctionArgs} from '@shopify/remix-oxygen';

// fallback wild card for all unauthenticated rouutes in account sectiion
export async function loader({context}: LoaderFunctionArgs) {
  if (await context.customerAccount.isLoggedIn()) {
    return redirect('/account');
  }

  return redirect('/account/login');
}
