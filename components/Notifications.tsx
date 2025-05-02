'use client'
import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import Image from 'next/image'
import { useInboxNotifications, useUnreadInboxNotificationsCount } from '@liveblocks/react'
import { InboxNotification, InboxNotificationList, LiveblocksUIConfig } from '@liveblocks/react-ui'
  

const Notifications = () => {
    const {inboxNotifications} = useInboxNotifications();
    const {count} = useUnreadInboxNotificationsCount();
    const unreadNotifications = inboxNotifications?.filter((notification) => !notification.readAt);
  return (
    <div>
      <Popover>
        <PopoverTrigger className="relative flex size-10 items-center justify-center rounded-lg">
            <Image src="/assets/icons/bell.svg" alt="inbox" width={24} height={24} />
            {count && count > 0 ? count > 99 ? <div className="absolute left-5 bottom-5 z-20 size-6 text-[10px] flex items-center justify-center rounded-full bg-blue-500">99+</div> : <div className="absolute left-5 bottom-5 z-20 size-6 text-[10px] flex items-center justify-center rounded-full bg-blue-500">{count}</div> : null}
        </PopoverTrigger>
        <PopoverContent className="border-blue-400 mr-20 bg-dark-200 w-96 md:w-[500px]">
            <LiveblocksUIConfig 
                overrides={{
                    INBOX_NOTIFICATION_TEXT_MENTION:(user: React.ReactNode) => (<>{user} mentioned you</>)
                }}
            >
            <InboxNotificationList>
                {!unreadNotifications?.length && <p className="py-2 text-center text-dark-500">No new notifications</p>}
                {unreadNotifications?.length && unreadNotifications.length <= 0 ? <p className="py-2 text-center text-dark-500">No new notifications</p> : null}
                {unreadNotifications?.length && unreadNotifications.length > 0 ? unreadNotifications.map((notification) => (
                    <InboxNotification
                     key={notification.id}
                     inboxNotification={notification}
                     className="bg-dark-200 text-white"
                     href={`/documents/${notification.roomId}`}
                     showActions={false}
                     kinds={{ 
                        thread: (props)=> (
                            <InboxNotification.Thread {...props}
                                showActions={false}
                                showRoomName={false}
                             />
                        ),
                        textMention: (props)=> (
                            <InboxNotification.TextMention {...props}
                                showRoomName={false}
                             />
                        ),
                        $documentAccess: (props)=> (
                            <InboxNotification.Custom {...props} title={props.inboxNotification.activities[0].data.title} aside={<InboxNotification.Icon className="bg-transparent">
                                <Image src={props.inboxNotification.activities[0].data.avatar as string} alt="avatar" width={36} height={36} className="rounded-full" />
                            </InboxNotification.Icon>}>
                                {props.children}
                            </InboxNotification.Custom>
                        )
                      }}
                    />
                )) : null}
            </InboxNotificationList>
            </LiveblocksUIConfig>
        </PopoverContent>
    </Popover>
    </div>
  )
}

export default Notifications
