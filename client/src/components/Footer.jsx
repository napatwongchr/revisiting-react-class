import CopyRightContent from "./CopyRightContent";
import TotalProductCount from "./TotalProductCount";

// 🛠️ Todo 11: ลบ Parameter `props`
function Footer(props) {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <CopyRightContent />
      {/* 🛠️ Todo 12: ลบ Prop ที่ส่งเข้าไปใน Component TotalProductCount ออก 
        เพราะเดี๋ยวเราจะไป Consume ข้อมูล totalProductNumber ที่เก็บไว้ใน ProductContext
      */}
      <TotalProductCount totalProductNumber={props.totalProductNumber} />
    </footer>
  );
}

export default Footer;
