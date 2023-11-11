import { Snackbar } from 'components'
import React from 'react'

import { Router } from '@/router/Router'

import { initMixpanel } from './analytics/api/mixpanel'

initMixpanel()

export const App = () => {
  return (
    <>
      <Router />

      <Snackbar />
    </>
  )
}
