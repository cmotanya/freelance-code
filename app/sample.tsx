// "use client";

// import { tabs, project_categories, gallery } from "@/data/project";
// import { cn } from "@/lib/utils";
// import Image from "next/image";
// import { useState } from "react";
// import {
//   ExternalLink,
//   Plus,
//   Layers,
//   Globe,
//   Wifi,
//   Shield,
//   ArrowUpRight,
//   Zap,
//   Clock,
//   CheckCircle2,
// } from "lucide-react";

// // ── Supplementary content ──────────────────────────────────────────────────

// const projectStats = [
//   {
//     value: "50+",
//     label: "Deployed",
//     icon: CheckCircle2,
//     color: "var(--success)",
//   },
//   { value: "3", label: "Domains", icon: Layers, color: "var(--primary)" },
//   { value: "5+", label: "Years", icon: Clock, color: "var(--warning)" },
//   { value: "100%", label: "Delivered", icon: Zap, color: "var(--success)" },
// ];

// const domainHighlights = [
//   {
//     icon: Globe,
//     label: "Web",
//     color: "var(--primary)",
//     count: "20+ projects",
//     desc: "Next.js, APIs, dashboards",
//   },
//   {
//     icon: Wifi,
//     label: "Network",
//     color: "var(--warning)",
//     count: "15+ installs",
//     desc: "MikroTik, Ubiquiti, Fiber",
//   },
//   {
//     icon: Shield,
//     label: "Security",
//     color: "var(--success)",
//     count: "10+ systems",
//     desc: "CCTV, ZKTeco, Biometrics",
//   },
// ];

// // ──────────────────────────────────────────────────────────────────────────

// const ProjectTabs = () => {
//   const [activeTab, setActiveTab] = useState<tabs | null>("all");

//   const filteredGallery =
//     activeTab === "all"
//       ? gallery
//       : gallery.filter((item) => item.value === activeTab);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');

//         .projects-root { font-family: 'Sora', sans-serif; }

//         /* Grid background */
//         .proj-grid-bg {
//           position: fixed;
//           inset: 0;
//           background-image:
//             linear-gradient(var(--grid-line) 1px, transparent 1px),
//             linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
//           background-size: 44px 44px;
//           pointer-events: none;
//           z-index: 0;
//         }

//         /* Mesh blobs */
//         .proj-blob-1 {
//           position: fixed; top: -5%; right: -5%;
//           width: 480px; height: 480px;
//           background: radial-gradient(circle, color-mix(in oklch, var(--primary) 12%, transparent) 0%, transparent 70%);
//           pointer-events: none; z-index: 0; filter: blur(70px);
//         }
//         .proj-blob-2 {
//           position: fixed; bottom: 5%; left: -8%;
//           width: 380px; height: 380px;
//           background: radial-gradient(circle, color-mix(in oklch, var(--success) 10%, transparent) 0%, transparent 70%);
//           pointer-events: none; z-index: 0; filter: blur(60px);
//         }

//         /* Section label */
//         .section-label {
//           font-size: 10px; font-weight: 800;
//           letter-spacing: 0.2em; text-transform: uppercase;
//           color: color-mix(in oklch, var(--foreground) 30%, transparent);
//           display: flex; align-items: center; gap: 8px;
//         }
//         .section-label::before {
//           content: ''; display: block;
//           width: 18px; height: 1px;
//           background: color-mix(in oklch, var(--foreground) 25%, transparent);
//         }

//         /* Stat card */
//         .stat-card {
//           background: color-mix(in oklch, var(--card) 70%, transparent);
//           border: 1px solid color-mix(in oklch, var(--border) 55%, transparent);
//           backdrop-filter: blur(16px);
//           transition: all 0.25s ease;
//         }
//         .stat-card:hover {
//           transform: translateY(-2px);
//           border-color: color-mix(in oklch, var(--primary) 35%, transparent);
//         }

//         /* Domain pill */
//         .domain-pill {
//           background: color-mix(in oklch, var(--card) 60%, transparent);
//           border: 1px solid color-mix(in oklch, var(--border) 50%, transparent);
//           backdrop-filter: blur(12px);
//           transition: all 0.3s ease;
//         }
//         .domain-pill:hover {
//           transform: translateY(-3px);
//         }

//         /* Tab button */
//         .tab-btn {
//           transition: all 0.25s cubic-bezier(0.23, 1, 0.32, 1);
//         }
//         .tab-btn-active {
//           background: var(--foreground);
//           color: var(--background);
//           transform: scale(1.05);
//           box-shadow: 0 4px 16px rgba(0,0,0,0.2);
//         }
//         .tab-btn-inactive {
//           color: color-mix(in oklch, var(--foreground) 45%, transparent);
//         }
//         .tab-btn-inactive:hover {
//           color: var(--foreground);
//           background: color-mix(in oklch, var(--muted) 60%, transparent);
//         }

//         /* Project card */
//         .proj-card {
//           transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
//         }
//         .proj-card:hover {
//           border-color: color-mix(in oklch, var(--primary) 40%, transparent) !important;
//           box-shadow: 0 24px 48px -12px color-mix(in oklch, var(--primary) 15%, transparent);
//           transform: translateY(-4px);
//         }
//         .proj-card:hover .proj-image {
//           transform: scale(1.1) rotate(0.8deg);
//         }
//         .proj-card:hover .proj-overlay {
//           opacity: 1;
//         }
//         .proj-card:hover .proj-meta {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .proj-image {
//           transition: transform 0.7s ease;
//         }
//         .proj-overlay {
//           opacity: 0;
//           transition: opacity 0.4s ease;
//         }
//         .proj-meta {
//           opacity: 0;
//           transform: translateY(8px);
//           transition: all 0.4s ease 0.05s;
//         }

//         /* External link btn */
//         .ext-btn {
//           transition: all 0.2s ease;
//         }
//         .ext-btn:hover {
//           background: var(--primary) !important;
//           transform: scale(1.1);
//         }

//         /* Add placeholder */
//         .add-card {
//           transition: all 0.3s ease;
//         }
//         .add-card:hover {
//           opacity: 1;
//           border-color: color-mix(in oklch, var(--primary) 40%, transparent) !important;
//         }
//         .add-card:hover .add-icon {
//           background: var(--foreground);
//           color: var(--background);
//         }

//         /* Count badge on tab */
//         .tab-count {
//           font-size: 9px;
//           font-weight: 700;
//           padding: 1px 5px;
//           border-radius: 6px;
//           background: color-mix(in oklch, var(--muted) 80%, transparent);
//           color: color-mix(in oklch, var(--foreground) 40%, transparent);
//         }

//         /* Stagger fade */
//         @keyframes fade-up {
//           from { opacity: 0; transform: translateY(14px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         .fade-up { animation: fade-up 0.55s ease both; }
//         .d1 { animation-delay: 0.05s; }
//         .d2 { animation-delay: 0.12s; }
//         .d3 { animation-delay: 0.2s; }
//         .d4 { animation-delay: 0.28s; }

//         /* Terminal blink */
//         @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
//         .cursor { animation: blink 1.1s step-end infinite; }
//       `}</style>

//       <div className="proj-grid-bg" />
//       <div className="proj-blob-1" />
//       <div className="proj-blob-2" />

//       <div className="projects-root relative z-10 mx-auto max-w-7xl space-y-14 px-5 py-12 pb-28">
//         {/* ── 01. Header ── */}
//         <div className="fade-up d1 space-y-6">
//           <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
//             <div className="space-y-3">
//               <div
//                 className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-black tracking-[0.2em] uppercase"
//                 style={{
//                   background:
//                     "color-mix(in oklch, var(--primary) 10%, transparent)",
//                   border:
//                     "1px solid color-mix(in oklch, var(--primary) 22%, transparent)",
//                   color: "var(--primary)",
//                 }}
//               >
//                 <span
//                   className="size-1.5 animate-pulse rounded-full"
//                   style={{ background: "var(--primary)" }}
//                 />
//                 Selected Works
//               </div>
//               <h1
//                 className="text-5xl font-extrabold tracking-tighter sm:text-7xl"
//                 style={{ lineHeight: "0.88" }}
//               >
//                 <span style={{ color: "var(--foreground)" }}>Project</span>
//                 <br />
//                 <span
//                   style={{
//                     color:
//                       "color-mix(in oklch, var(--foreground) 45%, transparent)",
//                   }}
//                 >
//                   Archive.
//                 </span>
//               </h1>
//             </div>
//             <p
//               className="max-w-xs text-sm leading-relaxed sm:text-right"
//               style={{
//                 color:
//                   "color-mix(in oklch, var(--foreground) 50%, transparent)",
//               }}
//             >
//               Real-world systems built across web, network, and physical
//               security — functional, documented, and handed over clean.
//             </p>
//           </div>
//         </div>

//         {/* ── 02. Stats row ── */}
//         <div className="fade-up d2 grid grid-cols-2 gap-3 sm:grid-cols-4">
//           {projectStats.map(({ value, label, icon: Icon, color }) => (
//             <div
//               key={label}
//               className="stat-card flex items-center gap-3 rounded-2xl p-4"
//             >
//               <div
//                 className="flex size-9 shrink-0 items-center justify-center rounded-xl"
//                 style={{
//                   background: `color-mix(in oklch, ${color} 12%, transparent)`,
//                 }}
//               >
//                 <Icon size={16} style={{ color }} />
//               </div>
//               <div>
//                 <p
//                   className="text-xl leading-none font-black"
//                   style={{ color: "var(--foreground)" }}
//                 >
//                   {value}
//                 </p>
//                 <p
//                   className="text-[10px] font-bold tracking-wider uppercase"
//                   style={{
//                     color:
//                       "color-mix(in oklch, var(--foreground) 35%, transparent)",
//                   }}
//                 >
//                   {label}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ── 03. Domain highlights ── */}
//         <div className="fade-up d3 space-y-4">
//           <p className="section-label">Domains</p>
//           <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
//             {domainHighlights.map(
//               ({ icon: Icon, label, color, count, desc }) => (
//                 <div
//                   key={label}
//                   className="domain-pill rounded-2xl p-5"
//                   style={{
//                     borderLeft: `2px solid color-mix(in oklch, ${color} 40%, transparent)`,
//                   }}
//                 >
//                   <div className="mb-3 flex items-center justify-between">
//                     <div
//                       className="flex size-9 items-center justify-center rounded-xl"
//                       style={{
//                         background: `color-mix(in oklch, ${color} 12%, transparent)`,
//                       }}
//                     >
//                       <Icon size={16} style={{ color }} />
//                     </div>
//                     <span
//                       className="font-mono text-[10px] font-bold"
//                       style={{
//                         color: `color-mix(in oklch, ${color} 70%, transparent)`,
//                       }}
//                     >
//                       {count}
//                     </span>
//                   </div>
//                   <p
//                     className="text-sm font-bold"
//                     style={{ color: "var(--foreground)" }}
//                   >
//                     {label}
//                   </p>
//                   <p
//                     className="text-xs"
//                     style={{
//                       color:
//                         "color-mix(in oklch, var(--foreground) 40%, transparent)",
//                     }}
//                   >
//                     {desc}
//                   </p>
//                 </div>
//               ),
//             )}
//           </div>
//         </div>

//         {/* ── 04. Tab navigation ── */}
//         <div className="fade-up d4 sticky top-4 z-40 flex justify-center">
//           <nav
//             className="rounded-2xl p-1.5"
//             style={{
//               background:
//                 "color-mix(in oklch, var(--background) 85%, transparent)",
//               border:
//                 "1px solid color-mix(in oklch, var(--border) 50%, transparent)",
//               backdropFilter: "blur(24px)",
//               boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
//             }}
//           >
//             <ul role="tablist" className="flex items-center gap-1">
//               {project_categories.map((category) => {
//                 const isActive = activeTab === category.value;
//                 const count =
//                   category.value === "all"
//                     ? gallery.length
//                     : gallery.filter((g) => g.value === category.value).length;
//                 return (
//                   <li key={category.value}>
//                     <button
//                       type="button"
//                       onClick={() => setActiveTab(category.value)}
//                       className={cn(
//                         "tab-btn flex items-center gap-2 rounded-xl px-4 py-2 text-[11px] font-bold tracking-wider uppercase",
//                         isActive ? "tab-btn-active" : "tab-btn-inactive",
//                       )}
//                     >
//                       {category.label}
//                       <span
//                         className="tab-count"
//                         style={
//                           isActive
//                             ? {
//                                 background:
//                                   "color-mix(in oklch, var(--background) 20%, transparent)",
//                                 color:
//                                   "color-mix(in oklch, var(--background) 70%, transparent)",
//                               }
//                             : {}
//                         }
//                       >
//                         {count}
//                       </span>
//                     </button>
//                   </li>
//                 );
//               })}
//             </ul>
//           </nav>
//         </div>

//         {/* ── 05. Project Grid ── */}
//         <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
//           {filteredGallery.map((item, index) => (
//             <div
//               key={index}
//               className="proj-card relative aspect-[16/10] w-full overflow-hidden rounded-[2rem]"
//               style={{
//                 border:
//                   "1px solid color-mix(in oklch, var(--border) 50%, transparent)",
//                 background: "var(--muted)",
//               }}
//             >
//               {/* Image */}
//               <div className="absolute inset-0 overflow-hidden">
//                 <Image
//                   src={item.src}
//                   alt={`Project ${index + 1}`}
//                   fill
//                   className="proj-image object-cover"
//                 />
//                 {/* Gradient scrim */}
//                 <div
//                   className="proj-overlay absolute inset-0"
//                   style={{
//                     background:
//                       "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
//                   }}
//                 />
//               </div>

//               {/* Top badge */}
//               <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
//                 <div
//                   className="flex items-center gap-1.5 rounded-full px-3 py-1"
//                   style={{
//                     background: "rgba(0,0,0,0.45)",
//                     border: "1px solid rgba(255,255,255,0.12)",
//                     backdropFilter: "blur(10px)",
//                   }}
//                 >
//                   <span className="font-mono text-[10px] text-white/80">
//                     PRJ — {String(index + 1).padStart(2, "0")}
//                   </span>
//                 </div>
//               </div>

//               {/* Top-right: category badge */}
//               <div className="absolute top-4 right-4 z-20">
//                 <div
//                   className="rounded-full px-2.5 py-1 text-[9px] font-black tracking-widest uppercase"
//                   style={{
//                     background: "rgba(0,0,0,0.4)",
//                     border: "1px solid rgba(255,255,255,0.1)",
//                     backdropFilter: "blur(8px)",
//                     color: "rgba(255,255,255,0.6)",
//                   }}
//                 >
//                   {item.value}
//                 </div>
//               </div>

//               {/* Bottom metadata */}
//               <div className="proj-meta absolute inset-x-0 bottom-0 z-20 p-5">
//                 <div className="flex items-end justify-between">
//                   <div className="space-y-1">
//                     <p
//                       className="text-[10px] font-black tracking-widest uppercase"
//                       style={{ color: "var(--primary)" }}
//                     >
//                       {item.value}
//                     </p>
//                     <h3 className="text-lg leading-tight font-bold text-white">
//                       {item.title ??
//                         `Project ${String(index + 1).padStart(2, "0")}`}
//                     </h3>
//                     {item.desc && (
//                       <p className="max-w-[180px] text-xs leading-snug text-white/55">
//                         {item.desc}
//                       </p>
//                     )}
//                   </div>
//                   <button
//                     className="ext-btn flex size-11 items-center justify-center rounded-full"
//                     style={{
//                       background: "rgba(255,255,255,0.95)",
//                       color: "#000",
//                     }}
//                     aria-label="Open project"
//                   >
//                     <ExternalLink size={17} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}

//           {/* Add placeholder */}
//           <div
//             className="add-card hidden aspect-[16/10] cursor-pointer flex-col items-center justify-center gap-4 rounded-[2rem] border-2 border-dashed opacity-40 lg:flex"
//             style={{
//               borderColor:
//                 "color-mix(in oklch, var(--border) 60%, transparent)",
//               background: "color-mix(in oklch, var(--muted) 20%, transparent)",
//             }}
//           >
//             <div
//               className="add-icon flex size-12 items-center justify-center rounded-full transition-all"
//               style={{
//                 border:
//                   "1px solid color-mix(in oklch, var(--border) 70%, transparent)",
//                 color:
//                   "color-mix(in oklch, var(--foreground) 40%, transparent)",
//               }}
//             >
//               <Plus size={22} />
//             </div>
//             <p
//               className="text-[10px] font-bold tracking-widest uppercase"
//               style={{
//                 color:
//                   "color-mix(in oklch, var(--foreground) 30%, transparent)",
//               }}
//             >
//               More coming soon
//             </p>
//           </div>
//         </div>

//         {/* ── 06. Terminal footer ── */}
//         <div
//           className="overflow-hidden rounded-2xl p-5 font-mono text-[11px]"
//           style={{
//             background: "rgba(0,0,0,0.85)",
//             border: "1px solid rgba(255,255,255,0.07)",
//             boxShadow:
//               "0 0 24px -6px color-mix(in oklch, var(--success) 30%, transparent)",
//           }}
//         >
//           <div
//             className="mb-3 flex items-center justify-between pb-3"
//             style={{
//               borderBottom: "1px solid rgba(255,255,255,0.05)",
//               color: "color-mix(in oklch, var(--success) 50%, transparent)",
//             }}
//           >
//             <span className="flex items-center gap-2 text-[10px]">
//               <span
//                 className="size-1.5 animate-pulse rounded-full"
//                 style={{ background: "var(--success)" }}
//               />
//               DEPLOYMENT_LOG
//             </span>
//             <span style={{ color: "rgba(255,255,255,0.2)" }}>v3.0.4</span>
//           </div>
//           <p
//             style={{ color: "rgba(255,255,255,0.3)" }}
//           >{`> sentinel@MOMBASA_NODE: fetch project_registry`}</p>
//           <p
//             style={{ color: "var(--primary)" }}
//           >{`[OK] ${gallery.length} projects loaded from archive.`}</p>
//           <p
//             style={{ color: "rgba(255,255,255,0.3)" }}
//           >{`> sentinel@MOMBASA_NODE: status continuous_deployment`}</p>
//           <p
//             style={{ color: "var(--success)" }}
//           >{`[ACTIVE] Pipeline running — new deploys incoming.`}</p>
//           <div
//             className="mt-1 flex items-center gap-1.5"
//             style={{ color: "rgba(255,255,255,0.2)" }}
//           >
//             <span>{`>`}</span>
//             <span
//               className="cursor inline-block h-3 w-1.5"
//               style={{ background: "rgba(255,255,255,0.25)" }}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProjectTabs;
