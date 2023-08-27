import CopyRightContent from "./CopyRightContent";
import TotalProductCount from "./TotalProductCount";

function Footer(props) {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <CopyRightContent />
      <TotalProductCount totalProductNumber={props.totalProductNumber} />
    </footer>
  );
}

export default Footer;
