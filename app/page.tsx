import Link from "next/link";

function NavBar() {
  return (
    <nav className=" w-3/12    border-white">
      <ul className="flex flex-col h-screen text-white ml-10">
        <li className="h-1/3  ">
          <Link href="#">Logo</Link>
        </li>
        <li className="h-1/3  ">
          <Link href="#">Home</Link>
        </li>
        <li className="h-1/3 ">
          <Link href="#">Search</Link>
        </li>
        <li className="h-1/3 ">
          <Link href="#">Explore</Link>
        </li>
        <li className="h-1/3 ">
          <Link href="#">Reels</Link>
        </li>
        <li className="h-1/3 ">
          <Link href="#">Messages</Link>
        </li>
        <li className="h-1/3 ">
          <Link href="#">Notifications</Link>
        </li>
        <li className="h-1/3 ">
          <Link href="#">Create</Link>
        </li>
        <li className="h-1/3 ">
          <Link href="#">Profile</Link>
        </li>
      </ul>
      <Link href="#"></Link>
    </nav>
  );
}

function Post() {
  return (
    <div className="w-full  border-l-2">
      <StoriesSlideBar />
      <h2 className="text-white ">post</h2>
    </div>
  );
}
function StoriesSlideBar() {
  return (
    <div className="border-b-2 h-1/6">
      <h1 className="text-white "> Stories</h1>
    </div>
  );
}
function AboutUser() {
  return (
    <div className="w-6/12  border-l-2 border-b-2 h-3/4">
      <h1 className="text-white "> User</h1>
    </div>
  );
}
function Footer() {
  return (
    <footer>
      <h1 className="text-white "> Footer</h1>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="flex flex-row   h-screen">
      <NavBar />
      <Post />
      <AboutUser />
    </main>
  );
}
