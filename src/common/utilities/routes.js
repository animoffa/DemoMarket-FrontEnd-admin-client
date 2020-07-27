import React from 'react';
export const adminRoutes = [
    {
        path: "/admin/:resource",
        exact: true,
        component: React.lazy(() => import("@acontainers/resourceContainer"))
    },
    {
        path: '/admin/:resource/:id',
        exact: true,
        component: React.lazy(() => import("@acontainers/editResourceContainer"))
    }
]

export const shopRoutes = {
    loggedIn: [{
        path: "/:resource/:id?",
        exact: true,
        component: React.lazy(() => import("@ccontainers/resourceContainer"))
    },],
    rest: [
        {
            path: "/login",
            exact: true,
            component: React.lazy(() => import("../components/auth/login/login"))
        },
        {
            path: "/registration",
            exact: true,
            component: React.lazy(() => import("../components/auth/registration/registration"))
        },
    ]
}
