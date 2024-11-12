const API_VERSION = '/generation-service';

const PAGE_ROUTES = {
  HOME_PAGE: '/',
  PASSWORD_PAGE: '/password',
  NUMBER_PAGE: '/numbers',
  QR_PAGE: '/qrservice',
  UPDATE_PAGE: '/updates',
};

const API_ROUTES = {
  HOME_PAGE: 'homepage.json',
  PASSWORD_PAGE: 'passwordpage.json',
  UPDATE_PAGE: 'updates.json',
};

export const getPageRoute = (route) => PAGE_ROUTES[route];

export const getApiRoute = (route) => `${API_VERSION}/${API_ROUTES[route]}`;
