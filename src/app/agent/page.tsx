"use client";

import { useState } from "react";

export default function WalidCommandCenter() {
  const [selectedProject, setSelectedProject] = useState("smartloans");
  const [selectedTask, setSelectedTask] = useState("seo_article");
  const [prompt, setPrompt] = useState("");
  const [status, setStatus] = useState("System Ready");

  // المشروعات المستوردة من "Walid Tracking Sheet"
  const projects = [
    { id: "smartloans", name: "Smart Loans Analysis", type: "Blog/AdSense", yt: "@Fate_of_Money" },
    { id: "aitool", name: "AI Tool Detect", type: "Tool/Blog", yt: "None" },
    { id: "rbxvibe", name: "RbxVibe", type: "Gaming Hub", yt: "@Roblix-Roblox" },
    { id: "kian", name: "Kian Digital Ventures", type: "B2B / Agency", yt: "None" },
    { id: "kova", name: "KOVA&Co", type: "Etsy Store", yt: "@MarshymellosCatVibes" },
  ];

  // المهام التسويقية المطلوبة
  const tasks = [
    { id: "seo_article", name: "✍️ Write & Publish SEO Article" },
    { id: "social_post", name: "📱 Create Social Media Post (X/FB/LinkedIn)" },
    { id: "short_video", name: "🎬 Generate Short Video Script & Media" },
    { id: "pinterest_pin", name: "📌 Create & Auto-Pin to Pinterest" },
  ];

  const handleExecute = () => {
    setStatus("Connecting to AI Core (n8n)...");
    
    // هذه البيانات هي التي سيتم إرسالها لاحقاً لعمل الأتمتة
    const payload = {
      projectId: selectedProject,
      taskType: selectedTask,
      instructions: prompt,
      date: new Date().toISOString()
    };

    console.log("Data to process:", payload);

    setTimeout(() => {
      setStatus("Mission Sent! AI Agent is working in the background 🚀");
      setPrompt("");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#05070a] text-white p-4 md:p-10 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* رأس الصفحة */}
        <div className="mb-10 border-b border-white/10 pb-6">
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter mb-2">
            <span className="text-blue-500">Walid's</span> AI Agent
          </h1>
          <p className="text-slate-400 font-medium text-sm md:text-base">
            Central Command for Automated Content & Marketing Workflows.
          </p>
        </div>

        {/* لوحة التحكم */}
        <div className="bg-[#0B0F19] border border-white/5 rounded-3xl p-6 md:p-8 shadow-2xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* اختيار المشروع */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                1. Select Target Project
              </label>
              <select 
                className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                value={selectedProject}
                onChange={(e) => setSelectedProject(e.target.value)}
              >
                {projects.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} ({p.type})
                  </option>
                ))}
              </select>
            </div>

            {/* اختيار المهمة */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                2. Select AI Task
              </label>
              <select 
                className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                value={selectedTask}
                onChange={(e) => setSelectedTask(e.target.value)}
              >
                {tasks.map((task) => (
                  <option key={task.id} value={task.id}>{task.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* التوجيهات (Prompt) */}
          <div className="mb-8">
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
              3. Mission Briefing (Instructions)
            </label>
            <textarea 
              rows={4}
              className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none placeholder-slate-600"
              placeholder="Example: Write a 1000-word review about 'NordVPN for Gaming' and generate a Twitter thread..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          {/* زر التنفيذ والحالة */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
            <div className="text-xs md:text-sm font-medium px-4 py-2 rounded-lg bg-white/5 border border-white/10">
              Status: <span className={status.includes("Sent") ? "text-emerald-400" : "text-amber-400"}>{status}</span>
            </div>
            <button 
              onClick={handleExecute}
              disabled={!prompt}
              className={`w-full md:w-auto px-10 py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all ${
                prompt 
                  ? "bg-blue-600 text-white hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:scale-[1.02]" 
                  : "bg-white/5 text-slate-500 cursor-not-allowed"
              }`}
            >
              Execute Mission ⚡
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}