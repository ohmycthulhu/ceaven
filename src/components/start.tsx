import React from 'react'
import {Button} from '@mantine/core'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaw} from "@fortawesome/free-solid-svg-icons";

import * as css from './start.css'

export type StartProps = {
  onStart?: () => void;
}

export function Start({onStart}: StartProps) {
  return (
    <div className={css.container}>
      <Button onClick={onStart}>
        <span className={css.buttonContent}>
          Let's start
        </span>
        <FontAwesomeIcon icon={faPaw} />
      </Button>
    </div>
  )
}
