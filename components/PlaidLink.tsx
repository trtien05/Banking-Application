import React, { useCallback, useEffect, useState } from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/router';
import { createLinkToken } from '@/lib/actions/user.actions';
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from 'react-plaid-link'

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
  const router = useRouter();
  const [token, setToken] = useState('');

  useEffect(() => {
    const getLinkToken = async () => {
      const data = await createLinkToken(user)
      setToken(data?.linkToken)
    }
    getLinkToken();
  }, [user])

  //just call 1 time, when user change
  const onSuccess = useCallback(async (pulic_token: string) => {
    // await exchangePublicToken({
    //   publicToken:public_token,
    //   user,
    // })
    router.push('/')

  }, [user])
  const config: PlaidLinkOptions = {
    token,
    onSuccess
  }
  const { open, ready } = usePlaidLink(config)
  return (
    <>
      {variant === 'primary' ? (
        <Button
          onClick={() => open()}
          disabled={!ready}
          className="plaidlink-primary"
        >
          Connect bank
        </Button>
      ) : variant === 'ghost' ? (
        <Button>
          Connect bank
        </Button>
      ) : (
        <Button>
          Connect bank
        </Button>
      )}
    </>
  )
}

export default PlaidLink