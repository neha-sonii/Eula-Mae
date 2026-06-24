import * as React from "react"

export type ToastActionElement = React.ReactNode

export type ToastProps = React.ComponentPropsWithoutRef<"div"> & {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export const Toast = ({ children, className, ...props }: ToastProps) => {
  return (
    <div {...props} className={["pointer-events-auto bg-white border border-[#6B4C2A]/20 shadow-2xl p-4 rounded-3xl max-w-md w-full", className]
      .filter(Boolean)
      .join(" ")}
    >
      {children}
    </div>
  )
}

export const ToastProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <div>{children}</div>
}

export const ToastTitle: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <div className="font-semibold text-base text-[#1A0A00]">{children}</div>
)

export const ToastDescription: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <div className="text-xs opacity-90">{children}</div>
)

export const ToastClose: React.FC = () => null

export const ToastViewport: React.FC = () => (
  <div id="toast-viewport" className="fixed inset-x-0 top-8 z-50 flex justify-center px-4 pointer-events-none" />
)

export default Toast
