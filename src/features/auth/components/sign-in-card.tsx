import { DottedSeparator } from '@/components/dotted-separator'
import { 
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import React from 'react'

export const SignInCard = () => {
  return (
    <Card className='h-full w-full md:w-[487px] border-none shadow-none'>
      <CardHeader className='flex justify-center items-center text-center p-7'>
        <CardTitle className='text-2xl'>
          Welcome Back!
        </CardTitle>
        
      </CardHeader>
      <div className='px-7'>
        <DottedSeparator />
      </div>
      <CardContent className='p-7'>
        <form className='space-y-4'>
          <Input 
              required 
              type='email'
              value={""}
              onChange={()=>{}} 
              placeholder='Enter Your Email Here'
              disabled = {false}
          />
          <Input 
              required
              type='password'
              value={""}
              onChange={()=>{}} 
              placeholder='Enter Your Password Here'
              disabled = {false}
              min={8}
              max={256}
          />
          <Input type='submit' value='Sign in' />
        </form>
      </CardContent>
      
    </Card>
  )
}


