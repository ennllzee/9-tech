import Data from "../../models/Data";

const thai: Data = {
  service: {
    electrical: {
      title: "งานระบบไฟฟ้า",
      service: [
        "ตรวจสอบ ติดตั้ง ซ่อมแซม ไฟฟ้า แสงสว่าง บ้านเรือน อาคารหมู่บ้าน และโรงงานอุตสาหกรรม",
        "ออกแบบ ติดตั้งระบบ ตู้สวตซ์บอร์ด MDB ตู้คอนโทรล Distribution Boards, ประกอบตู้คอนโทรล",
        "บริการด้านระบบไฟฟ้ากำลัง และรับปรึกษาระบบไฟฟ้าทั่วไป",
        "งานความปลอดภัย CCTV IP Camera Motion Sensor",
      ],
    },
    sanitary: {
      title: "งานระบบประปาและสุขาภิบาล",
      service: [
        "ออกแบบ ติดตั้ง ปรับปรุง แก้ไข ระบบประปาและสุขาภิบาล",
        "ตรวจสอบคุณภาพและความหนาของท่อ ติดตั้งปั๊ม Overhaul Pump",
        "งานติดต่อท่อน้ำ PPR, HDPE, ระบายน้ำฝน",
        "บริการปรับปรุงระบบระบายอากาศ ภายในอาคารสูง",
      ],
    },
    machine: {
      title: "งานซ่อมเครื่องจักรอุตสาหกรรม",
      service: [
        "ติดตั้งและซ่อมแซม Inverter, PLC, Controller Board, AC/DC Servo Drive etc.",
        "ปรับปรุงโปรแกรมควบคุมเครื่องจักร วงจร Relay, PLC program",
        "รับซ่อมเครื่องจักร ระบบไฟฟ้า, แมคคานิค, นิวเมติก, ไฮดรอลิก",
        "รับทำ Preventive Maintenance เครื่องจักรทุกชนิด",
      ],
    },
    equipment: {
      title: "อุปกรณ์ไฟฟ้า",
      service: [
        "จัดหาอะไหล่อุตสาหกรรม และจำหน่ายอุปกรณ์ไฟฟ้าแบบครบวงจร",
        "ดูแลการบริการหลังการขาย",
      ],
    },
  },
  foundation: `บริษัท นายย์ เทคนิคอล เซอร์วิส จำกัด ก่อตั้งขึ้นเมื่อปี 2554
    บริหารงานโดยบุคคลที่มีประสบการณ์ในการทำงานมากกว่า 20 ปี
    ดำเนินธุรกิจเกี่ยวกับงานออกแบบ ติดตั้ง ซ่อมแซม
    และแก้ไขระบบไฟฟ้าของเครื่องจักรและโรงงานอุตสาหกรรม
    รวมถึงบริการหลังการติดตั้ง วิเคราะห์ถึงความต้องการของลูกค้าในทุก ๆ
    ด้าน โดยทีมงานผู้เชี่ยวชาญและช่างชำนาญงานเฉพาะทาง
    เน้นการทำงานอย่างละเอียดคำนึงถึงคุณภาพของผลงานที่ได้มาตรฐาน
    งานทุกชิ้นผ่านการตรวจสอบและทดสอบก่อนส่งมอบ
    เพื่อตอบสนองความต้องการของลูกค้าให้เกิดประโยชน์สูงสุดทั้งเวลาที่จำกัดและเงินที่ลงทุน
    ทำให้บริษัทได้รับความไว้วางใจจากหน่วยงานต่าง ๆ
    และโรงงานอุตสาหกรรมชั้นนำหลายแหล่ง`,
  contact: {
    company: "บริษัท นายน์ เทคนิคอล เซอร์วิส จำกัด",
    addressTopic: "สำนักงานใหญ่: ",
    address: `55/293 ซอยประเสริฐมนูกิจ 42 ถนนประเสริฐมนูกิจ แขวงนวมินทร์ เขตบึงกุ่ม
      กรุงเทพฯ 10230`,
    workshopTopic: `ที่อยู่ส่งเอกสาร /
    สินค้า: `,
    workshop: `70/535 หมู่บ้านประชานิเวศน์ 2 ซอยสามัคคี 58/20 ถนนสามัคคี
      แขวงท่าทราย เขตนนทบุรี จังหวัดนนทบุรี 11000`,
  },
};

export default thai;
