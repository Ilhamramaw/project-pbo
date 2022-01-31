import Button from './Button';
import Logo from './Logo';
import Nav from './Nav';
function Navbar(){
return (
    <div className="navbar bg-violet-600">
      <div className="container flex mx-auto items-center">
        <div className="w-3/12">
          <Logo/>
        </div>
         
        <div className="w-6/12">
          <div className="nav text-center">
            <ul className="nav-item text-pink text-lg text-opacity-60 flex justify-center space-x-10 py-10 font-semibold">
              <li>
                <a className="text-lg text-opacity-60 font-semibold">Profile</a>
              </li>
              <li>
                <a className="text-lg text-opacity-60 font-semibold">Skills</a>
              </li>
              <li>
                <a className="text-lg text-opacity-60 font-semibold">Project</a>
              </li>
              <li>
                <a className="text-lg text-opacity-60 font-semibold">Contacts</a>
              </li>
             
            </ul>
            </div>
            </div>
        <div className="w-3/12">
          <Button/>
        </div>
        
          <div className="text-center-uppercase"></div>
      </div>
      </div>
  );
}

export default Navbar;
