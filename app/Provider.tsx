'use client'
import React from 'react'
import { LiveblocksProvider, RoomProvider, ClientSideSuspense } from '@liveblocks/react'
import Loader from '@/components/Loader'

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <LiveblocksProvider authEndpoint="/api/liveblocks-auth">
        {/* <RoomProvider id="my-room"> */}
            <ClientSideSuspense fallback={<Loader />}>
            {children}
            </ClientSideSuspense>
        {/* </RoomProvider> */}
        </LiveblocksProvider>
    </div>
  )
}

export default Provider
