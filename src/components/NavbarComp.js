const NavbarComp = () => {
  return (
    <div className="flex bg-gray-800 text-gray-500 font-light">
      <div className="mx-56 my-5">
        <ul className="flex text-base">
          <li>
            <img
              src="https://hybrismediaprod.blob.core.windows.net/sys-master-phoenix-images-container/h5b/h8c/8796147679262/razer.svg"
              alt="logo"
              className="h-3.5 mt-1 mr-9"
            />
          </li>
          <li className="mr-9">WHAT'S NEW</li>
          <li className="mr-9">PRODUCTS</li>
          <li className="mr-9">APPS & DOWNLOADS</li>
          <li className="mr-9">EXPLORE</li>
          <li className="mr-9">SUPPORT</li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarComp;
