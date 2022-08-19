import React from 'react'
import {Loader} from "@mantine/core";

import * as css from './loading.css'

export type MainProps = {}

export const Loading = (_props: MainProps) => {
  return (
    <div className={css.container}>
      <Loader size="lg" />
    </div>
  )
}
