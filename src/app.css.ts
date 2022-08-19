import {style} from '@vanilla-extract/css'

export const app = style({
  maxWidth: '50rem',
  minHeight: '90vh',
  margin: 'auto',
  padding: '0 2rem',
  borderLeft: '1px solid currentColor',
  borderRight: '1px solid currentColor',
})

export const header = style({
  borderBottom: '1px solid grey',
  textAlign: 'center',
  marginBottom: '1rem',
})
