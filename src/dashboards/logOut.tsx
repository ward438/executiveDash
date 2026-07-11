export const LogOut = ({ isOpen }: { isOpen: boolean }) => {
    return (
        <div className="w-full h-full">
            <h1 className="text-1xl text-center">
                {isOpen ? 'Log Out' : 'X'}
            </h1>
        </div>
    );
}
