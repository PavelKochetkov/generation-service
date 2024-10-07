const PAGE_ROUTES = {
  HOME_PAGE: '/',
  PASSWORD_PAGE: '/password',
  NUMBER_PAGE: '/numbers',
  QR_PAGE: '/qrservice',
  UPDATE_PAGE: '/updates',
};

const getPageRoute = (route) => PAGE_ROUTES[route];

export default getPageRoute;
