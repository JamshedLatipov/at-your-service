export const ROUTES = {
    HOME: '',
    SEARCH: '/search',
    ORDERS: '/orders',
    PROFILE: '/profile',
    SETTINGS: '/settings',
    REQUEST_NEW: '/requests/new'
} as const;

export type AppRoutes = typeof ROUTES[keyof typeof ROUTES];