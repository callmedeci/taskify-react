import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

function Header() {
  return (
    <header className="flex h-24 w-full items-center justify-between border-b border-zinc-700 p-5">
      <Logo />

      <Navigation />
    </header>
  );
}

export default Header;
