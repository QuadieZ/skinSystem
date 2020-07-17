const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');

const modal = document.getElementById('modal');
const head = document.getElementById('modalHead');
const info = document.getElementById('modalInfo');

one.onclick = () => {
  modal.style.display = 'flex';
  head.innerText = "ระบบผิวหนังทำอะไรกันนะ?" 
  info.innerText = "หน้าที่ของระบบผิวหนัง: ห่อหุ้มร่างกาย รักษาสมดุล เก็บพลังงาน ป้องกันอันตราย/รังสี สร้างความสวยงาม สังเคราะห์วิตามิน\n" +
"ระบบผิวหนังนั้น เป็นระบบแรกที่พัฒนาขึ้นในสิ่งมีชีวิต ในสภาพแวดล้อมและการใช้ชีวิตที่แตกต่างกัน ทำให้เกิดการพัฒนาอวัยวะต่างๆ จากเยื่อบางๆนี้  ให้เหมาะสมกับการใช้ชีวิตได้ นอกจากนั้นยังเป็นระบบพื้นที่มากที่สุดอีกด้วย"
}

two.onclick = () => {
  modal.style.display = 'flex';
  head.innerText = "โครงสร้างของผิวหนัง" 
  info.innerText = "•	Epidermis (ชั้นหนังกำพร้า) เป็นผิวชั้นนอกสุดของผิวหนัง ส่วนมากประกอบด้วยเซลล์ที่ตายแล้ว ไม่สามารถรับสัมผัสได้ มีห้าชั้นย่อย มี ทำหน้าที่ห้อหุ้ม รับการเสียดสี ปกป้องอวัยวะที่อยู่ด้านล่าง\n" +
"•	Dermis (ชั้นหนังแท้) เป็นชั้นกลางที่รวบรวมการทำงานหลักของผิวหนัง ประกอบด้วย Collagen(คอลลาเจน) และ Elastin(เนื้อเยื่ออีลาสติน)เป็นหลัก สร้างขน ผม และ เล็บอีกด้วย\n" +
"•	Hypodermis/ Subcutaneous Fat Layer (ชั้นใต้ผิวหนัง) ชั้นนี้ประกอบด้วยไขมันเป็นส่วนใหญ่ ทำหน้าที่ในการรับแรงกระแทก เก็บพลังงาน เป็นฉนวนกันอุณหภูมิที่เปลี่ยนแปลง และยึดเหนี่ยวระบบผิวหนังไว้กับร่างกาย\n"
}

three.onclick = () => {
  modal.style.display = 'flex';
  head.innerText = "การดูแลผิวหนัง" 
  info.innerText = "•	อาบน้ำชำระร่างกายให้สะอาดอยู่เสมอ  หลังอาบน้ำแล้ว ควรใส่เสื้อผ้าที่สะอาด และเหมาะสมกับอากาศและงานที่ปฏิบัติ\n"+
"•	กินอาหารให้ถูกต้องและครบถ้วนตามหลักโภชนาการ ดื่มน้ำมากๆ เพื่อทำให้ผิวหนังเปล่งปลั่ง\n" + 
"•	ออกกำลังกายสม่ำเสมอ\n" +
"•	ควรให้ผิวหนังได้รับแสงแดดสม่ำเสมอ เฉพาะเวลาเช้าซึ่งแดดไม่จัดเกินไป\n" +     
"•	ระมัดระวังโนการใช้เครื่องสำอาง\n" +     
"•	เมื่อมีสิ่งผิดปกติใดๆเกิดขึ้นกับผิวหนัง ควรปรึกษาแพทย์"
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
}
}