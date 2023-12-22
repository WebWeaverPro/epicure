const Header = () => {
  return (
    <header className="flex flex-row justify-between padding p-6 border-b border-solid border-[#cccccc]">
      <h1>Header Logo</h1>
      <div className="flex flex-row">
        <h2 className="px-4">Sign Up</h2>
        <h2 className="px-4">Login</h2>
        <h2 className="px-4">Cart</h2>
      </div>
    </header>
  );
};
export default Header;
