// Product Registry — standalone LSUM PYPT sub-brand
// File prefixed with _ so Cloudflare Pages won't expose as a route.

export const PRODUCTS = {
  'lsum-pypt': {
    name: 'LSUM PYPT',
    packages: {
      mini: 'LSUM PYPT Mini 8gm',
      starter: 'LSUM PYPT 1 Pek (80gm)',
      bestvalue: 'LSUM PYPT 2 Pek + FREE Ship',
      hardcore: 'LSUM PYPT 3 Pek + FREE Ship',
    },
  },
};

export function resolveBillName(productId, pkg) {
  const product = PRODUCTS[productId] || PRODUCTS['lsum-pypt'];
  return (product.packages && product.packages[pkg]) || product.name;
}

export function resolveProductName(productId) {
  const product = PRODUCTS[productId] || PRODUCTS['lsum-pypt'];
  return product.name;
}
