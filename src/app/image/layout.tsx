export default function ImageLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <div className="p-5 w-screen h-screen flex flex-col items-center justify-center">
            {children}
        </div>
    )
}