import CopyRightContent from "./CopyRightContent";
import TotalProductCount from "./TotalProductCount";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <CopyRightContent />
      <TotalProductCount />
    </footer>
  );
}

export default Footer;
