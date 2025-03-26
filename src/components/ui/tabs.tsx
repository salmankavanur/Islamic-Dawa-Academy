"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-12 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-50 via-green-100 to-teal-50 p-1.5 shadow-lg border border-emerald-100",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "relative inline-flex items-center justify-center whitespace-nowrap rounded-xl px-5 py-2.5 text-sm font-medium text-emerald-700 ring-offset-emerald-50 transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      "hover:bg-white/80 hover:text-emerald-800 hover:shadow-md",
      "data-[state=active]:bg-gradient-to-br data-[state=active]:from-emerald-400 data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-lg",
      "after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:translate-x-[-50%] after:bg-emerald-500 after:transition-all after:duration-300 after:content-[''] hover:after:w-4/5 data-[state=active]:after:w-0",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-4 rounded-xl bg-gradient-to-br from-white to-emerald-50 p-6 shadow-lg ring-offset-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 border border-emerald-100/50",
      "animate-in fade-in-50 slide-in-from-bottom-5 duration-300 ease-in-out",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }