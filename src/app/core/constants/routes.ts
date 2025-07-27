export const ROUTES = {
    HOME: '/',
    SEARCH: '/search',
    ORDERS: '/orders',
    PROFILE: '/profile'
} as const;

export type AppRoutes = typeof ROUTES[keyof typeof ROUTES];