'use server';

import { clerkClient } from "@clerk/nextjs/server";
import { parseStringify } from "../utils";
import liveblocks from "../liveblocks";
import { RoomContext } from "@liveblocks/react";

export const getClerkUsers = async ({userIds}:{userIds:string[]}) => {
   try{
    const clerk = await clerkClient();
    const {data} = await clerk.users.getUserList({
        emailAddress:userIds,
    });

    const users = data.map((user) => ({
        id:user.id,
        name:(user.lastName) ? `${user.firstName} ${user.lastName}` : user.firstName,
        email:user.emailAddresses[0].emailAddress,
        avatar:user.imageUrl,
    }));

    const sortedUsers = userIds.map((email) => users.find((user) => user.email === email));
    return parseStringify(sortedUsers);
   }catch(error){
    console.log(`Error fetching users: ${error}`);
    return null;
   }
}

export const getDocumentUsers = async ({roomId,currentUser,text}:{roomId:string,currentUser:string,text:string}) => {
    try{
        const room = await liveblocks.getRoom(roomId);
        const users = Object.keys(room.usersAccesses).filter((userId) => userId !== currentUser);
        if(text.length){
            const lowerCaseText = text.toLowerCase();
            const filteredUsers = users.filter((email:string) => email.toLowerCase().includes(lowerCaseText));
            return parseStringify(filteredUsers);
        }
        return parseStringify(users);
    }catch(error){
        console.log(`Error fetching document users: ${error}`);
        return null;
    }
}