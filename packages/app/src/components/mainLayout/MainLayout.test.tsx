import { render, screen } from '@testing-library/react'
import React from 'react'
import { describe, expect, it, vi } from 'vitest'

import { useHasActiveSubscription } from '@/billing/hooks/useHasActiveSubscription'
import { cleanUpAfterEach } from '@/test/cleanUpAfterEach'
import { MockAppProvider } from '@/test/MockAppProvider'

import { MainLayout } from './MainLayout'

const mocks = vi.hoisted(() => ({
  useHasActiveSubscription: vi.fn<any, Partial<ReturnType<typeof useHasActiveSubscription>>>(() => ({
    data: undefined,
    isLoading: false,
  })),
  navigate: vi.fn(),
}))

vi.mock('@/billing/hooks/useHasActiveSubscription', () => ({
  useHasActiveSubscription: mocks.useHasActiveSubscription,
}))

vi.mock('react-router-dom', async () => {
  const actual = (await vi.importActual('react-router-dom')) as object

  return {
    ...actual,
    useNavigate: () => mocks.navigate,
  }
})

const getDashboardButton = () => screen.getByRole('button', { name: 'Dashboard' })

describe('MainLayout', () => {
  cleanUpAfterEach()

  it('renders', () => {
    render(
      <MockAppProvider>
        <MainLayout />
      </MockAppProvider>,
    )

    expect(getDashboardButton()).toBeInTheDocument()
  })
})
