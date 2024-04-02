import * as React from 'react';
import Button from '@mui/material/Button';

export default function CTA({ url, linkText }) {

  return (
    <Button
      variant='contained' 
      onClick={() => {
       window.location.href = `${url}`
      }}
    >{ linkText }</Button>
  )


}