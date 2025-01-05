import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const navBarLink = [
    {
      to: "/",
      name: "HOME",
    },
    {
      to: "/about",
      name: "ABOUT",
    },
    {
      to: "/initiatives",
      name: "INITIATIVES",
    },
    {
      to: "/gallery",
      name: "GALLERY",
    },
    {
      to: "/contact",
      name: "CONTACT",
    },
  ];

  return (
    <header className="bg-[#ffffffcc] w-[80vw] rounded-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <div
            className="font-bold text-2xl border-2 border-[#eb6407] p-2 cursor-pointer text-[#eb6407]"
            onClick={() => navigate("/")}
          >
            The Independent
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {navBarLink.map((item, index) => (
            <Link
              key={index + "laptop-view"}
              className="text-sm font-bold leading-6 text-[#006B3C] hover:text-black"
              to={item.to}
            >
              {item.name}
            </Link>
          ))}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            variant="contained"
            size="small"
            sx={{
              textTransform: "none",
              padding: "10px 24px",
              backgroundColor: "#eb6407",
              borderRadius: "4px",
              fontWeight: "600",
              color:"white"
            }}
          >
            Donate
          </Button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only"></span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navBarLink.map((item, index) => (
                  <Link
                    key={index + "mobile-view"}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                    to={item.to}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    textTransform: "none",
                    padding: "9.5px 16px",
                    backgroundColor: "#eb6407",
                    color: "white",
                    borderRadius: "4px",
                  }}
                >
                  Donate
                </Button>
                {/* <button
                  onClick={() => {
                    navigate("/donate");
                  }}
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  type="button"
                >
                  Donate
                </button> */}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
