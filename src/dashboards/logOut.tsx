export const LogOut = ({ isOpen }: { isOpen: boolean }) => {
    return (
        <div className="w-full h-full">
            <h1 className="text-2xl font-bold text-center">
            {isOpen ? 'Log Out' : 'X'}
            </h1>
        </div>
    );
}
