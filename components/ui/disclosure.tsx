"use client"

import * as React from "react"
import { Disclosure as HeadlessDisclosure } from "@headlessui/react"
import { cn } from "@/lib/utils"

interface DisclosureProps {
  children: React.ReactNode
  defaultOpen?: boolean
}

// Contexto para compartir el estado del Disclosure
const DisclosureContext = React.createContext<{ open: boolean }>({ open: false })

const Disclosure = React.forwardRef<HTMLDivElement, DisclosureProps>(
  ({ children, defaultOpen = false, ...props }, ref) => {
    return (
      <HeadlessDisclosure defaultOpen={defaultOpen} as="div" ref={ref} {...props}>
        {({ open }) => (
          <DisclosureContext.Provider value={{ open }}>
            <div className="w-full">{children}</div>
          </DisclosureContext.Provider>
        )}
      </HeadlessDisclosure>
    )
  }
)
Disclosure.displayName = "Disclosure"

const DisclosureButton = React.forwardRef<
  React.ElementRef<typeof HeadlessDisclosure.Button>,
  React.ComponentPropsWithoutRef<typeof HeadlessDisclosure.Button>
>(({ className, children, ...props }, ref) => (
  <HeadlessDisclosure.Button
    ref={ref}
    className={cn(
      "flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75",
      className
    )}
    {...props}
  >
    {children}
  </HeadlessDisclosure.Button>
))
DisclosureButton.displayName = "DisclosureButton"

const DisclosurePanel = React.forwardRef<
  React.ElementRef<typeof HeadlessDisclosure.Panel>,
  React.ComponentPropsWithoutRef<typeof HeadlessDisclosure.Panel>
>(({ className, children, ...props }, ref) => (
  <HeadlessDisclosure.Panel
    ref={ref}
    className={cn("px-4 pt-4 pb-2 text-sm text-gray-500", className)}
    {...props}
  >
    {children}
  </HeadlessDisclosure.Panel>
))
DisclosurePanel.displayName = "DisclosurePanel"

export { Disclosure, DisclosureButton, DisclosurePanel } 