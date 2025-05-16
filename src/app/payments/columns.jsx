"use client"
 
import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"


 
export const columns = [
  
    {
        accessorKey: "username",
        header: "Username",
    },
    {
        accessorKey: "email",
          header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="h-8 bg-black px-1 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    },
    {
        accessorKey: "amount",
        header: "Amount",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
]