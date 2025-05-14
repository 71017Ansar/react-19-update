"use client"
import React from "react";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import {
 
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  
} from "@/components/ui/sheet";
import { useForm } from "react-hook-form";





const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
  phone : z.string().min(10).max(15),
  location: z.string().min(2).max(50),
  role : z.enum(["admin", "user"]),
})


export default function EditUser() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "Jhon doe",
      email: "jhon.doe@gmail.com",
      phone: "+1 234 5678",
      location: "New York",
      role: "Admin",
    },
  })
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Are you absolutely sure?</SheetTitle>
        <SheetDescription>
         
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  );
}
