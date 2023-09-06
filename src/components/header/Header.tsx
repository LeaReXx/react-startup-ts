import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header(): JSX.Element {
  const [toggleMenu, setToggleMenu] = useState<Boolean>(false);

  let ToggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
    console.log(toggleMenu);
    
  };

  // close all mobile menu child when menu toggle
  useEffect(() => {
    let mobileMenuChild = document.querySelectorAll(
      ".nav-items > ul"
    ) as NodeListOf<HTMLElement>;
    for (let mobileItem of mobileMenuChild) {
      mobileItem.style.height = "0px";
    }
    
  }, [toggleMenu]);

  let mobileMenuTreeHandler = (event: any) => {
    event.currentTarget.nextElementSibling.style.height === "0px"
      ? (event.currentTarget.nextElementSibling.style.height =
          event.currentTarget.nextElementSibling.scrollHeight + "px")
      : (event.currentTarget.nextElementSibling.style.height = "0px");
  };
  return (
    <header className="container px-3 lg:pt-5 mx-auto max-w-[1330px]">
      <div className="relative py-4 flex justify-between items-center">
        <div>
          <img src="./img/knor-logo.svg" alt="Main logo" />
        </div>
        <nav
          className={`absolute overflow-hidden invisible top-20 w-full bg-[#0e0e0ee7] text-white  shadow-2xl ${
            toggleMenu ? "active" : null
          } lg:bg-inherit lg:shadow-none lg:text-black lg:w-auto lg:static lg:visible lg:overflow-visible`}
        >
          <ul className="hidden lg:flex lg:w-100">
            <li className="desktop-tree-menu cursor-pointer relative px-5 mx-2">
              <a href="https://react.dev/" className="py-3 font-medium">
                Home
                <FontAwesomeIcon
                  icon={["fas", "chevron-down"]}
                  className="text-sm px-1 text-slate-600"
                />
              </a>
              <ul className="bg-[#0e0e0ee7] absolute top-0 smooth-trans invisible p-2 rounded">
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="https://react.dev/" className="block mb-2">
                    About Us
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="https://react.dev/" className="block mb-2">
                    Services
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="https://react.dev/" className="block mb-2">
                    Team
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="https://react.dev/" className="block mb-2">
                    Portfolio Details
                  </a>
                </li>
              </ul>
            </li>
            <li className="desktop-tree-menu cursor-pointer relative px-5 mx-2">
              <a href="https://react.dev/" className="py-3 font-medium">
                Product
                <FontAwesomeIcon
                  icon={["fas", "chevron-down"]}
                  className="text-sm px-1 text-slate-600"
                />
              </a>
              <ul className="bg-[#0e0e0ee7] absolute top-0 smooth-trans invisible p-2 rounded">
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="https://react.dev/" className="block mb-2">
                    About Us
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="https://react.dev/" className="block mb-2">
                    Services
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="https://react.dev/" className="block mb-2">
                    Team
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="https://react.dev/" className="block mb-2">
                    Portfolio Details
                  </a>
                </li>
              </ul>
            </li>
            <li className="desktop-tree-menu cursor-pointer relative px-5 mx-2">
              <a href="https://react.dev/" className="py-3 font-medium">
                Pages
                <FontAwesomeIcon
                  icon={["fas", "chevron-down"]}
                  className="text-sm px-1 text-slate-600"
                />
              </a>
              <ul className="bg-[#0e0e0ee7] absolute top-0 smooth-trans invisible p-2 rounded">
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="https://react.dev/" className="block mb-2">
                    About Us
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="https://react.dev/" className="block mb-2">
                    Services
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="https://react.dev/" className="block mb-2">
                    Team
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="https://react.dev/" className="block mb-2">
                    Portfolio Details
                  </a>
                </li>
              </ul>
            </li>
            <li className="px-4">
              <a href="https://react.dev/" className="py-3 font-medium">
                About Us
              </a>
            </li>
          </ul>

          {/* mobile menu  */}
          <ul className="lg:hidden">
            <li className="nav-items cursor-pointer py-2 px-3 border-b border-slate-500 ">
              <span
                className="py-2 flex justify-between items-center"
                onClick={(event) => mobileMenuTreeHandler(event)}
              >
                Home
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  className="text-sm px-1 smooth-trans"
                />
              </span>
              <ul
                className="overflow-hidden h-0 px-3 smooth-trans"
                style={{ height: "0px" }}
              >
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="https://react.dev/" className="block mb-2">
                    About Us
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="https://react.dev/" className="block mb-2">
                    Services
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="https://react.dev/" className="block mb-2">
                    Team
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="https://react.dev/" className="block mb-2">
                    Portfolio Details
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-items cursor-pointer py-2 px-3 border-b border-slate-500 ">
              <span
                className="py-2 flex justify-between  items-center"
                onClick={(event) => mobileMenuTreeHandler(event)}
              >
                Product
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  className="text-sm px-1 smooth-trans"
                />
              </span>
              <ul
                className="overflow-hidden h-0 px-3 smooth-trans"
                style={{ height: "0px" }}
              >
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="https://react.dev/" className="block mb-2">
                    About Us
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="https://react.dev/" className="block mb-2">
                    Services
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="https://react.dev/" className="block mb-2">
                    Team
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="https://react.dev/" className="block mb-2">
                    Portfolio Details
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-items cursor-pointer py-2 px-3 border-b border-slate-500 ">
              <span
                className="py-2 flex justify-between  items-center"
                onClick={(event) => mobileMenuTreeHandler(event)}
              >
                Pages
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  className="text-sm px-1 smooth-trans"
                />
              </span>
              <ul
                className="overflow-hidden h-0 px-3 smooth-trans"
                style={{ height: "0px" }}
              >
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="https://react.dev/" className="block mb-2">
                    About Us
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="https://react.dev/" className="block mb-2">
                    Services
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="https://react.dev/" className="block mb-2">
                    Team
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="https://react.dev/" className="block mb-2">
                    Portfolio Details
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-items cursor-pointer py-2 px-3 border-b border-slate-500 ">
              <a
                href="https://react.dev/"
                className="py-2 block"
              >
                About Us
              </a>
            </li>
          </ul>
        </nav>
        <div className="hidden lg:block">
          <a href="https://react.dev/">
            <button className="bg-[#1C2639] text-white py-2 px-5 rounded smooth-trans hover:bg-[#3BCBB0]">
              Sign Up
            </button>
          </a>
        </div>
        <div
          className="text-3xl cursor-pointer lg:hidden	"
          onClick={() => ToggleMenuHandler()}
        >
          <FontAwesomeIcon icon={["fas", "bars"]} />
        </div>
      </div>
      <div className="flex flex-col pt-28 lg:flex-row lg:justify-between lg:items-center">
        <div className="md:text-left max-w-md mx-auto md:mx-0">
          <h4 className="text-[#3BCBB0] bg-[#3acbb01a] py-2 px-3 rounded-full tracking-[.15em] font-medium inline">
            STARTUP
          </h4>
          <h1 className="text-4xl md:text-5xl lg:text-6xl my-4 font-semibold leading-tight text-[#10101B]">
            Build Amazing Startup Business Together
          </h1>

          <p className="font-normal text-lg py-1 lg:py-3 text-[#555555]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            delectus eligendi totam culpa. Hic laboriosam, quis libero cumque
            iure assumenda.
          </p>
          <div className="flex flex-col my-3 gap-4 md:flex-row">
            <button className="bg-[#1C2639] text-white py-3 rounded font-medium md:px-8 smooth-trans hover:bg-[#3BCBB0]">
              Invest Now
              <FontAwesomeIcon
                icon={["fas", "arrow-right-long"]}
                className="px-1"
              />
            </button>
            <button className="border py-3 rounded font-medium md:px-4 smooth-trans hover:bg-[#3BCBB0] hover:text-white">
              Learn More
            </button>
          </div>
        </div>
        <div className="p-5 my-2 lg:max-w-2xl 2xl:max-w-3xl">
          <img
            src="./img/startup-banner.png"
            alt="Startup banner"
            className="w-full"
          />
        </div>
      </div>
    </header>
  );
}
