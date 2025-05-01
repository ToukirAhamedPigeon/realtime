'use client'
import { UserButton } from '@clerk/nextjs'
import { SignedIn } from '@clerk/nextjs'
import { SignUpButton } from '@clerk/nextjs'
import { SignInButton } from '@clerk/nextjs'
import { SignedOut } from '@clerk/nextjs'
import { ClientSideSuspense } from '@liveblocks/react'
import { RoomProvider } from '@liveblocks/react'
import Header from './Header'
import { Editor } from './editor/Editor'

const CollaborativeRoom = () => {
  return (
    <RoomProvider id="my-room">
        <ClientSideSuspense fallback={<div>Loading…</div>}>
            <div className="collaborative-room">
                <Header>
                    <div className="flex w-fit items-center justify-center gap-2">
                    <p className="document-title">Share</p>
                    </div>
                    <SignedOut>
                    <SignInButton />
                    <SignUpButton />
                    </SignedOut>
                    <SignedIn>
                    <UserButton />
                    </SignedIn>
                </Header>
                <Editor />
            </div>
        </ClientSideSuspense>
    </RoomProvider>
  )
}

export default CollaborativeRoom
