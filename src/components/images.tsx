import React from 'react'
import {Alert, Button, Image} from '@mantine/core'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRefresh} from "@fortawesome/free-solid-svg-icons";

import {useImage} from "../hooks/useImage";
import {Loading} from "./loading";
import * as css from './images.css'

export type MainProps = {}

export const Images = (_props: MainProps) => {
  const {isLoading, data, refetch, isRefetching, isError, error} = useImage()

  if (isLoading || isRefetching) {
    return (<Loading/>)
  }

  if (isError) {
    console.error(error)

    return (
      <Alert color="red">
        Error on fetching the image!
      </Alert>
    )
  }

  const image = data?.at(0)?.url

  return (
    <div>
      <div className={css.buttonContainer}>
        <Button onClick={() => refetch()}>
          <FontAwesomeIcon icon={faRefresh} />
        </Button>
      </div>

      <Image src={image}/>
    </div>
  )
}
