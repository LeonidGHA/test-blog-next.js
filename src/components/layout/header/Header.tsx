import { useRouter } from "next/router";
import Link from "next/link";

const activeLink = (nameLink: string, pathName: string) => {
  return nameLink === pathName
    ? `transition-all py-4 text-pink-600`
    : `transition-all py-4 text-white hover:text-pink-600 duration-300`;
};

const Header = () => {
  const { pathname, asPath } = useRouter();

  console.log("path", pathname);
  console.log("as", asPath);

  return (
    <header className={" border-b-2 border-rose-600"}>
      <div className={"container mx-auto px-20"}>
        <nav>
          <ul className={" flex gap-10"}>
            <li className="flex">
              <Link href="/" className={activeLink("/", pathname)}>
                Home
              </Link>
            </li>
            <li className="flex">
              <Link
                href="/pokemons"
                className={activeLink("/pokemons", pathname)}
              >
                pokemons
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
