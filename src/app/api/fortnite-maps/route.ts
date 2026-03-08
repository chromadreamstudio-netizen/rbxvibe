import { NextResponse } from 'next/server';

// قاعدة بيانات خرائط فورتنايت (Backend)
export async function GET() {
  const mapsDatabase = [
    { id: 1, name: "Ultimate AFK XP Room", code: "1234-5678-9012", type: "AFK / Passive", status: "Active" },
    { id: 2, name: "Red vs Blue (Super XP)", code: "9876-5432-1098", type: "Combat / Kills", status: "Active" },
    { id: 3, name: "Secret Timer Glitch", code: "4567-8901-2345", type: "Button Glitch", status: "Active" },
    { id: 4, name: "1v1 Build Fights Pro", code: "1111-2222-3333", type: "Playtime XP", status: "Active" },
    { id: 5, name: "Mega Deathrun 500+", code: "5555-6666-7777", type: "Parkour", status: "Active" },
    { id: 6, name: "Old XP Glitch (Nerfed)", code: "0000-0000-0000", type: "Glitch", status: "Patched" },
  ];

  // محاكاة سرعة الإنترنت لإظهار علامة التحميل باحترافية
  await new Promise((resolve) => setTimeout(resolve, 800));

  return NextResponse.json(mapsDatabase);
}