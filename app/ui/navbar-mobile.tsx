import NavLinks from "./nav-links";

//move navlinks to separate component to use in desktop navbar as well
export default function NavbarMobile() {
  return (
    <div className="bg-element fixed right-0 bottom-0 left-0 m-2 flex flex-row justify-between rounded-full px-10 py-2 md:px-40 lg:hidden">
      <NavLinks />
    </div>
  );
}
