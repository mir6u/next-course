'use client';
import { Button, TextArea } from '@radix-ui/themes';
import { TextField } from '@radix-ui/themes'
import React from 'react'

const NeWIssuePage = () => {
  return (
    <div  className='max-w-xl space-y-3'>
      <TextField.Root>
        <TextField.Input placeholder='title'/>
      </TextField.Root>
      <TextArea placeholder='Description'/>
      <Button>Submit New Issue</Button>
    </div>
  )
}

export default NeWIssuePage