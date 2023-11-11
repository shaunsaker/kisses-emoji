import { ErrorBoundary } from '@sentry/react'
import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom'

import { MainLayout } from '@/components/mainLayout/MainLayout'
import { Dashboard } from '@/pages/dashboard'

import { routes } from './routes'

const errorElement = <ErrorBoundary />

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />} errorElement={errorElement}>
      <Route path={routes.dashboard} element={<Dashboard />} errorElement={errorElement} />

      <Route path="*" element={<Navigate to={routes.dashboard} />} />
    </Route>,
  ),
)

export const Router = () => {
  return <RouterProvider router={router} />
}
