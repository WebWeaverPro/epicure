import appLogo from "../images/app-logo.png";
const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between padding py-6 px-20 border-b border-solid border-[#cccccc]">
      <img className="h-16 w-16 rounded-full" src={appLogo} alt="Header Logo" />
      <div className="flex flex-row">
        <h2 className="px-4 text-footer-text-color text-xl">Sign Up</h2>
        <h2 className="px-4 text-footer-text-color text-xl">Login</h2>
        <h2 className="px-4 text-footer-text-color text-xl">Cart</h2>
      </div>
    </header>
  );
};
export default Header;
