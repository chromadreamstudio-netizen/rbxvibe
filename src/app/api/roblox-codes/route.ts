import { NextResponse } from 'next/server';

// هذا الكود يمثل الخادم (Backend) وقاعدة البيانات الخاصة بك
export async function GET() {
  // تخيل أن هذه البيانات قادمة من قاعدة بيانات حقيقية (Database)
  const codesDatabase = [
    { id: 1, code: "SUB2GAMERROBOT_RESET1", reward: "Free Stat Reset", status: "Active" },
    { id: 2, code: "KittGaming", reward: "20 Minutes of 2x Experience", status: "Active" },
    { id: 3, code: "Sub2Fer999", reward: "2x Experience Boost", status: "Active" },
    { id: 4, code: "Envy3", reward: "20 Minutes of 2x Experience", status: "Active" },
    { id: 5, code: "Magicbus", reward: "20 Minutes of 2x Experience", status: "Active" },
    { id: 6, code: "OLD_CODE_2025", reward: "Free Pet", status: "Expired" },
  ];

  // محاكاة تأخير الشبكة (لكي ترى تأثير التحميل Loading في الموقع كالمواقع الحقيقية)
  await new Promise((resolve) => setTimeout(resolve, 800));

  // إرسال البيانات كـ JSON إلى الواجهة الأمامية
  return NextResponse.json(codesDatabase);
}