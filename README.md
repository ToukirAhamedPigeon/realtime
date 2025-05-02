This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Reference https://www.youtube.com/watch?v=y5vE8y_f_OM&list=PLzUVJZo0gh2aXk0Yb6-0kwNkLjQGS4Cqz&index=12 

**Here Document = Live Blocks Channel Room**
Packages Used
1. ShadCN UI
    1.1 Button
    1.2 Input
    1.3 Dialog (For Share Documents & Delete Modal)
    1.4 Label
    1.5 Popover (For show Notifications)
2. Copied Resources from Adrian Github Repository
    2.1 global.css
    2.2 tailwind.config.ts
    2.3 Public Assets Folder
3. JSM Editor
4. Clerk
5. LiveBlocks
    5.1 Authentication with Next JS: https://liveblocks.io/docs/authentication/id-token/nextjs
        Set Up Live Blocks Editor Features  lib/liveblocks.ts globally define .env file liveblocks secret key. 
    5.2 lexical rich text
        Used Lexical Rich Text
    5.3 Live Blocks Authentication with Clerk
        Authenticated Users only should collaborate in the room. app/api/liveblocks-auth, LiveblocksProvider
    5.4 Collaborative Editor Room
        Define document Editor page as a Liveblocks Room. components/editor/Editor.tsx Modified
    5.5 Edit Document Title Feature
        Edit Document Title Feature and update Liveblocks meta. lib/actions/room.action.ts
    5.6 List All Documents on HomePage
        Fetch All Documents or room from liveblocks Storage and Show in Home Page As List. Clerk Authentication is required to view the list. lib/actions/room.action.ts
    5.7 Live Features with Floating Comments
        Addded floating comment after selecting a portion of text. Added Floating Toolbar Component in components/editor/plugins/FloatingToolbar.tsx
    5.8 Sticky Comments
        Set Sticky comment right side of the screen to view all comments together. Resolve Functionality of unread comments.
    5.9 User Mention Feature
        Mention Users with @ before comment
    5.10 Share Modal
        Share Document or room via Gmail to others
    5.11 User Permissions (View, Edit)
        Access Permission to the shared Person to edit or only view the document
    5.12 Delete Modal & Feature
        Delete Document Functionalities
    5.13 Notifications Feature
        Send Notification on Mentioning in comment or Share a Document.
    5.14 All build in libraries is in Liveblocks
        RoomProvider (Provide A Collaborative Room) , ClientSideSuspense (Show Loader when Fetch Room Collaborative Data), liveblocksConfig (Wrap Editor Config with LiveBlocks Config), LexicalComposer (Wrap Editor JSX with  LexicalComposer), LiveblocksPlugin, FloatingComposer,  FloatingThreads (For Floating Comments), Thread and Composer (for Comment UI), InboxNotification (InboxNotification.Thread,InboxNotification.TextMention, InboxNotification.Custom, InboxNotification.Icon ),  InboxNotificationList, LiveblocksUIConfig  For Notifications UI 
    5.15 room.action.ts
        createDocument (liveblocks.createRoom), getDocuments (liveblocks.getRooms), getDocument (liveblocks.getRoom), updateDocument (liveblocks.updateRoom), deleteDocument (usersAccesses:RoomAccesses, liveblocks.updateRoom ), updateDocumentAccess (liveblocks.updateRoom, liveblocks.triggerInboxNotification), removeCollaborator (liveblocks.getRoom,await liveblocks.updateRoom(roomId, usersAccesses:) ), deleteDocument (liveblocks.deleteRoom(roomId))
    5.16 user.action.ts
        getClerkUsers (clerkClient, clerk.users.getUserList ) , getDocumentUsers (liveblocks.getRoom, Object.keys(room.usersAccesses))
    5.17 LiveBlocks Hooks
        useOthers() (get other users in room), useThreads() (Define a message or comment section), useInboxNotifications(), useUnreadInboxNotificationsCount() (For get Notifications)
        


6. Sentry