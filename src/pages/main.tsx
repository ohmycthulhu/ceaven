import React, {useCallback, useState} from 'react'

import * as css from './main.css'
import {Start} from "../components/start";
import {Images} from "../components/images";

export type MainProps = {}

export const Main = (props: MainProps) => {
  const [started, setStarted] = useState(false)

  const renderBody = useCallback(() => {
    if (!started) {
      return (
        <Start onStart={() => setStarted(true)} />
      )
    }

    return (
      <Images />
    )
  }, [started])

  return (
    <main className={css.container}>
      {renderBody()}
    </main>
  )
}
