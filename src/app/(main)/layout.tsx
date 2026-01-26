import PremiumModal from "@/components/premium/PremiumModel";
import { getUserSubscriptionLevel } from "@/lib/subscription";
// import { auth } from "@clerk/nextjs/server";
import Navbar from "../Navbar";
import SubscriptionLevelProvider from "./SubscriptionLevelProvider";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userId = "bypass-user"; // const { userId } = await auth();

  // if (!userId) {
  //   return null;
  // }

  const userSubscriptionLevel = "free"; // await getUserSubscriptionLevel(userId);

  return (
    <SubscriptionLevelProvider userSubscriptionLevel={userSubscriptionLevel}>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        {children}
        <PremiumModal />
      </div>
    </SubscriptionLevelProvider>
  );
}
