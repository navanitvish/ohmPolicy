import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="flex py-3">
        <Link to="/privacy-policy" className="block px-3 py-2 hover:text-blue-700 rounded-md text-white">Policy Privacy</Link>
        <Link to="/terms-of-service" className="block px-3 py-2 hover:text-blue-700 rounded-md text-white">Terms of Service</Link>
        <Link to="/cancellation-policy" className="block px-3 py-2 hover:text-blue-700 rounded-md font-medium text-white">Cancellation Policy</Link>
      </div>
    </div>
  );
};


export default Navbar;
