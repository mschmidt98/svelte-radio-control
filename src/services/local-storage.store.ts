const DEFAULT_SERVICE_ROUTE = 'http://volumio/';
const STORAGE_URL_KEY = 'service_url';
const COMMON_URL_SUFFIX = 'api/v1/';

export function getServiceUrl(): string {
  return getBaseUrl() + COMMON_URL_SUFFIX;
}

export function getBaseUrl(): string {
  const storedUrl = localStorage[STORAGE_URL_KEY];
  if (storedUrl) {
    return storedUrl;
  }

  localStorage[STORAGE_URL_KEY] = DEFAULT_SERVICE_ROUTE;
  return DEFAULT_SERVICE_ROUTE;
}
