import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import ClientHome from '@/components/ClientHome'
import { getDocuments } from '@/lib/actions/room.actions';
const Home = async () => {
  const clerkUser = await currentUser();
  if(!clerkUser) return redirect("/sign-in");
  const roomDocuments = await getDocuments({email:clerkUser.emailAddresses[0].emailAddress})
  return (
   <ClientHome clerkUser={clerkUser} documents={roomDocuments.data} />
  )
}

export default Home
