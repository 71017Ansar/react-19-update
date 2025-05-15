import CardList from "@/components/CardList";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HoverCardContent,
  HoverCard,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { Badge, BadgeCheck } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import EditUser from "@/components/EditUser";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AppLineChart } from "@/components/AppLineChart";

export default function page() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/user">User</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Badges Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm col-span-1 lg:col-span-3 xl:col-span-1">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">User Badges</h1>
          <div className="flex flex-wrap mt-4 gap-4">
            <HoverCard>
              <HoverCardTrigger>
                <BadgeCheck
                  size={36}
                  className="text-white bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition-colors"
                />
              </HoverCardTrigger>
              <HoverCardContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Verified User</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This user is verified by the admin.
                </p>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger>
                <Badge size={36} className="text-white bg-green-500 p-2 rounded-full hover:bg-green-600 transition-colors" />
              </HoverCardTrigger>
              <HoverCardContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Premium User</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This user is a premium user.
                </p>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger>
                <Badge size={36} className="text-white bg-red-500 p-2 rounded-full hover:bg-red-600 transition-colors" />
              </HoverCardTrigger>
              <HoverCardContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white">VIP User</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This user is a VIP user.
                </p>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger>
                <Badge size={36} className="text-white bg-yellow-500 p-2 rounded-full hover:bg-yellow-600 transition-colors" />
              </HoverCardTrigger>
              <HoverCardContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white">New User</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This user is a new user.
                </p>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>

        {/* User Info Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">User Information</h1>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  Edit User
                </Button>
              </SheetTrigger>
              <EditUser />
            </Sheet>
          </div>
          <div className="space-y-4 mt-4">
            <div className="flex flex-col gap-2 mb-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Profile completion
              </p>
              <Progress value={66} className="h-2" />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-700 dark:text-gray-300">Username:</span>
              <span className="text-gray-900 dark:text-white">john.doe</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-700 dark:text-gray-300">Email:</span>
              <span className="text-gray-900 dark:text-white">john.doe@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-700 dark:text-gray-300">Phone:</span>
              <span className="text-gray-900 dark:text-white">+1 234 5678</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-700 dark:text-gray-300">Location:</span>
              <span className="text-gray-900 dark:text-white">New York, NY</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-700 dark:text-gray-300">Role:</span>
              <Badge className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200">ansar</Badge> Admin
            </div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Joined on 2025.01.01
          </p>
        </div>

        {/* Additional Info Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Additional Info</h1>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Last Active</p>
              <p className="text-gray-900 dark:text-white">2 hours ago</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Account Status</p>
              <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">Active</Badge>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Storage Used</p>
              <p className="text-gray-900 dark:text-white">15.2 GB of 50 GB</p>
            </div>
          </div>
        </div>

        {/* Transactions Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm col-span-1 lg:col-span-3 xl:col-span-1">
          <CardList title={"Recent Transactions"} />
        </div>
      </div>
         <div className="w-full xl:w-2/3 space-y-6">
          {/* USER CARD CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2">
              <Avatar className="size-12">
                <AvatarImage src="https://avatars.githubusercontent.com/u/1486366" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h1 className="text-xl font-semibold">John Doe</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
              voluptas distinctio ab ipsa commodi fugiat labore quos veritatis
              cum corrupti sed repudiandae ipsum, harum recusandae ratione ipsam
              in, quis quia.
            </p>
          </div>
          {/* CHART CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Activity</h1>
            <AppLineChart />
          </div>
        </div>
      
    </div>
  );
}