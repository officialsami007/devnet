"use client";

import { PointerEvent, useRef, type ReactNode } from "react";
import type { SitePage } from "@/data/site-content";
import { Icon } from "./Icon";

/*
  One bespoke hero panel per product / service page.
  Each panel is a small, self-contained composition that reflects that page's
  real content (visualLabels, heroStat, navTitle, capabilities). Panels share the
  outer `.sol-panel` shell + tilt interaction, but every inner design is unique.
*/

type PanelProps = { page: SitePage };

function useTilt() {
  const ref = useRef<HTMLDivElement>(null);
  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || !window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--tilt-x", `${x * 4}deg`);
    el.style.setProperty("--tilt-y", `${y * -4}deg`);
  };
  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
  };
  return { ref, onPointerMove, reset };
}

function Shell({ page, variant, children }: PanelProps & { variant: string; children: ReactNode }) {
  const { ref, onPointerMove, reset } = useTilt();
  return (
    <div className={`sol-panel sol-${variant}`} aria-label={`${page.navTitle} illustration`}>
      <div ref={ref} className="sol-stage" onPointerMove={onPointerMove} onPointerLeave={reset}>
        <div className="sol-grid-lines" />
        <div className="sol-glow sol-glow-green" />
        <div className="sol-glow sol-glow-red" />
        <div className="sol-head">
          <div><span className="sol-live" /><strong>{page.navTitle}</strong></div>
          <span className="sol-tag">{page.heroStat.value}</span>
        </div>
        {children}
      </div>
    </div>
  );
}

/* ------- reusable primitives ------- */

function StepFlow({ labels }: { labels: [string, string, string] }) {
  return (
    <div className="sol-flow">
      {labels.map((l, i) => (
        <span key={l} className="sol-flow-step" style={{ animationDelay: `${i * -1.3}s` }}>
          <b>{i + 1}</b>{l}
        </span>
      ))}
    </div>
  );
}

function StatRow({ page }: PanelProps) {
  return (
    <div className="sol-stat">
      <div><b>{page.heroStat.value}</b><small>{page.heroStat.label}</small></div>
      <span className="sol-stat-live"><i /> Live</span>
    </div>
  );
}

/* ------- 1. Document Management — smart search + doc list ------- */
function DocumentManagement({ page }: PanelProps) {
  return (
    <Shell page={page} variant="dms">
      <div className="sol-searchbar"><Icon name="search" /><span>land record 2024<i className="sol-caret" /></span></div>
      <div className="sol-doclist">
        {["Land records archive", "Approval workflow", "Banking documents"].map((t, i) => (
          <div key={t} className="sol-docrow"><i><Icon name={i === 0 ? "file" : i === 1 ? "workflow" : "shield"} /></i><span>{t}</span><b>{i === 1 ? "Active" : "Indexed"}</b></div>
        ))}
      </div>
      <StepFlow labels={page.visualLabels} />
    </Shell>
  );
}

/* ------- 2. Process Automation — routing swimlane ------- */
function ProcessAutomation({ page }: PanelProps) {
  return (
    <Shell page={page} variant="workflow">
      <div className="sol-lane">
        <div className="sol-lane-node start"><Icon name="file" /><span>Request</span></div>
        <div className="sol-lane-track"><i /><i /><i /></div>
        <div className="sol-lane-node"><Icon name="users" /><span>Review</span></div>
        <div className="sol-lane-track"><i /><i /><i /></div>
        <div className="sol-lane-node done"><Icon name="check" /><span>Approved</span></div>
      </div>
      <StatRow page={page} />
      <StepFlow labels={page.visualLabels} />
    </Shell>
  );
}

/* ------- 3. Capture Software — scan beam extracting fields ------- */
function CaptureSoftware({ page }: PanelProps) {
  return (
    <Shell page={page} variant="capture">
      <div className="sol-scan">
        <div className="sol-scan-beam" />
        <div className="sol-scan-line" style={{ width: "80%" }} />
        <div className="sol-scan-line" style={{ width: "62%" }} />
        <div className="sol-scan-line" style={{ width: "70%" }} />
        <div className="sol-scan-badge"><Icon name="scan" /> OCR / ICR</div>
      </div>
      <div className="sol-fields">
        <div><small>Invoice no.</small><b>INV-2041</b><i>99%</i></div>
        <div><small>Amount</small><b>৳ 84,500</b><i>97%</i></div>
      </div>
      <StepFlow labels={page.visualLabels} />
    </Shell>
  );
}

/* ------- 4. Record Management — lifecycle vault ------- */
function RecordManagement({ page }: PanelProps) {
  return (
    <Shell page={page} variant="records">
      <div className="sol-vault">
        <div className="sol-vault-core"><Icon name="archive" /><b>360°</b></div>
        {["Create", "Store", "Retain", "Dispose"].map((s, i) => (
          <span key={s} className={`sol-vault-node n${i + 1}`}><i /> {s}</span>
        ))}
      </div>
      <StepFlow labels={page.visualLabels} />
    </Shell>
  );
}

/* ------- 5. Agile Audit — live audit progress board ------- */
function AgileAudit({ page }: PanelProps) {
  return (
    <Shell page={page} variant="audit">
      <div className="sol-board">
        {[["Planned", "6"], ["In review", "3"], ["Resolved", "12"]].map(([k, v], i) => (
          <div key={k} className={`sol-board-col c${i + 1}`}><span>{k}</span><b>{v}</b><i /><i /></div>
        ))}
      </div>
      <div className="sol-progress"><span style={{ width: "72%" }} /></div>
      <StepFlow labels={page.visualLabels} />
    </Shell>
  );
}

/* ------- 6. HRIS — people directory ------- */
function Hris({ page }: PanelProps) {
  return (
    <Shell page={page} variant="hris">
      <div className="sol-people">
        {["ME", "SJ", "MA", "NF"].map((a, i) => <span key={a} className={`sol-face f${i + 1}`}>{a}</span>)}
        <span className="sol-face more">+24</span>
      </div>
      <div className="sol-hr-rows">
        <div><Icon name="person" /><small>Onboarding</small><b>3 active</b></div>
        <div><Icon name="clock" /><small>Leave requests</small><b>5 pending</b></div>
      </div>
      <StepFlow labels={page.visualLabels} />
    </Shell>
  );
}

/* ------- 7. Invoice Processing — invoice → validate → pay ------- */
function InvoiceProcessing({ page }: PanelProps) {
  return (
    <Shell page={page} variant="invoice">
      <div className="sol-invoice">
        <div className="sol-invoice-head"><Icon name="file" /><span>INV-2041</span><b>Matched</b></div>
        <div className="sol-invoice-row"><small>Vendor</small><b>Devnet Ltd</b></div>
        <div className="sol-invoice-row"><small>Amount</small><b>৳ 84,500</b></div>
        <div className="sol-invoice-row total"><small>Status</small><b><Icon name="check" /> Ready to pay</b></div>
      </div>
      <StepFlow labels={page.visualLabels} />
    </Shell>
  );
}

/* ------- 8. Online Proctoring — monitored exam feed ------- */
function OnlineProctoring({ page }: PanelProps) {
  return (
    <Shell page={page} variant="proctor">
      <div className="sol-proctor">
        <div className="sol-proctor-feed"><span className="sol-proctor-face"><Icon name="person" /></span><i className="sol-proctor-scan" /><b className="sol-proctor-rec"><em /> REC</b></div>
        <div className="sol-proctor-checks">
          <span><Icon name="check" /> Identity verified</span>
          <span><Icon name="eye" /> Gaze tracking</span>
          <span><Icon name="shield" /> Environment scan</span>
        </div>
      </div>
      <StepFlow labels={page.visualLabels} />
    </Shell>
  );
}

/* ------- 9. Library Management — catalog + bilingual ------- */
function LibraryManagement({ page }: PanelProps) {
  return (
    <Shell page={page} variant="library">
      <div className="sol-shelf">{[0, 1, 2, 3, 4, 5, 6].map((i) => <i key={i} className={`b${i % 4}`} />)}</div>
      <div className="sol-lib-rows">
        <div><Icon name="book" /><small>Catalog</small><b>Bangla · English</b></div>
        <div><Icon name="search" /><small>Discover</small><b>Full-text</b></div>
      </div>
      <StepFlow labels={page.visualLabels} />
    </Shell>
  );
}

/* ------- 10. E-KYC — identity verification ------- */
function Ekyc({ page }: PanelProps) {
  return (
    <Shell page={page} variant="ekyc">
      <div className="sol-kyc">
        <div className="sol-kyc-id"><span className="sol-kyc-photo"><Icon name="person" /></span><div><i /><i /><i className="short" /></div></div>
        <div className="sol-kyc-check"><span className="sol-kyc-ring"><Icon name="fingerprint" /></span><b>Verified</b><small>Real-time match</small></div>
      </div>
      <StepFlow labels={page.visualLabels} />
    </Shell>
  );
}

/* ------- 11. Land Management — mouza map ------- */
function LandManagement({ page }: PanelProps) {
  return (
    <Shell page={page} variant="land">
      <div className="sol-map">
        <span className="sol-map-plot p1" /><span className="sol-map-plot p2" /><span className="sol-map-plot p3" />
        <span className="sol-map-pin"><Icon name="map" /></span>
        <b className="sol-map-count">213K<small>mouza maps</small></b>
      </div>
      <StepFlow labels={page.visualLabels} />
    </Shell>
  );
}

/* ------- 12. RPA — bots executing tasks ------- */
function Rpa({ page }: PanelProps) {
  return (
    <Shell page={page} variant="rpa">
      <div className="sol-bots">
        {["Extract data", "Reconcile", "Post entry"].map((t, i) => (
          <div key={t} className={`sol-bot b${i + 1}`}><span><Icon name="bot" /></span><small>{t}</small><i className="sol-bot-run" /></div>
        ))}
      </div>
      <StatRow page={page} />
      <StepFlow labels={page.visualLabels} />
    </Shell>
  );
}

/* ------- 13-16. Scanners — device with feed/plate + throughput ------- */
function ScannerPanel({ page, kind }: PanelProps & { kind: "document" | "robotic" | "book" | "microfilm" }) {
  const spec: Record<string, { icon: string; a: string; b: string }> = {
    document: { icon: "scanner", a: "Feed tray", b: "210 ppm" },
    robotic: { icon: "layers", a: "Auto page-turn", b: "A0 / A1" },
    book: { icon: "book", a: "V-cradle", b: "2× Legal" },
    microfilm: { icon: "film", a: "ScanPro optics", b: "26 MP" }
  };
  const s = spec[kind];
  return (
    <Shell page={page} variant={`scanner scanner-${kind}`}>
      <div className="sol-device">
        <div className="sol-device-body"><span className="sol-device-icon"><Icon name={s.icon} /></span><div className="sol-device-beam" /></div>
        <div className="sol-device-feed"><i /><i /><i /></div>
      </div>
      <div className="sol-device-specs">
        <div><small>Mechanism</small><b>{s.a}</b></div>
        <div><small>Throughput</small><b>{s.b}</b></div>
      </div>
      <StepFlow labels={page.visualLabels} />
    </Shell>
  );
}

/* ------- 17. Scanning & Archiving — throughput meter ------- */
function DigitalArchiving({ page }: PanelProps) {
  return (
    <Shell page={page} variant="archiving">
      <div className="sol-meter">
        <b>30M+</b><small>pages digitized / year</small>
        <div className="sol-bars">{[38, 62, 48, 78, 90, 66, 82].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div>
      </div>
      <StepFlow labels={page.visualLabels} />
    </Shell>
  );
}

/* ------- 18. Application Development — code / build pipeline ------- */
function AppDevelopment({ page }: PanelProps) {
  return (
    <Shell page={page} variant="appdev">
      <div className="sol-code">
        <div className="sol-code-head"><i /><i /><i /><span>build</span></div>
        <div className="sol-code-body"><i style={{ width: "70%" }} /><i style={{ width: "45%" }} className="hl" /><i style={{ width: "82%" }} /><i style={{ width: "56%" }} /></div>
      </div>
      <div className="sol-pipeline"><span className="ok"><Icon name="check" /> Build</span><span className="ok"><Icon name="check" /> Test</span><span className="run"><i /> Deploy</span></div>
      <StepFlow labels={page.visualLabels} />
    </Shell>
  );
}

/* ------- 19. Mobile App Development — phone frame ------- */
function MobileDevelopment({ page }: PanelProps) {
  return (
    <Shell page={page} variant="mobile">
      <div className="sol-phone">
        <div className="sol-phone-notch" />
        <div className="sol-phone-screen"><span className="sol-phone-hero" /><i /><i className="short" /><div className="sol-phone-cards"><b /><b /></div></div>
      </div>
      <StepFlow labels={page.visualLabels} />
    </Shell>
  );
}

/* ------- 20. Data Processing — raw → clean → structured ------- */
function DataProcessing({ page }: PanelProps) {
  return (
    <Shell page={page} variant="data">
      <div className="sol-data">
        <div className="sol-data-col raw"><small>Raw</small><i /><i /><i /><i /></div>
        <div className="sol-data-arrow"><Icon name="pulse" /></div>
        <div className="sol-data-col clean"><small>Structured</small><i /><i /><i /><i /></div>
      </div>
      <StepFlow labels={page.visualLabels} />
    </Shell>
  );
}

/* ------- 21. BPO — operations dashboard ------- */
function Bpo({ page }: PanelProps) {
  return (
    <Shell page={page} variant="bpo">
      <div className="sol-ops">
        <div className="sol-ops-tile"><Icon name="headset" /><b>Transition</b><small>Onboarded</small></div>
        <div className="sol-ops-tile hl"><Icon name="settings" /><b>Operate</b><small>Running</small></div>
        <div className="sol-ops-tile"><Icon name="chart" /><b>Improve</b><small>+18%</small></div>
      </div>
      <StepFlow labels={page.visualLabels} />
    </Shell>
  );
}

/* ------- 22. Banking Solution — secure ledger ------- */
function BankingSolution({ page }: PanelProps) {
  return (
    <Shell page={page} variant="banking">
      <div className="sol-bank">
        <div className="sol-bank-head"><Icon name="bank" /><span>Secure ledger</span><b><Icon name="shield" /></b></div>
        <div className="sol-bank-row"><small>KYC verified</small><i><Icon name="check" /></i></div>
        <div className="sol-bank-row"><small>Approval routed</small><i><Icon name="check" /></i></div>
        <div className="sol-bank-row"><small>Audit trail</small><b>10+ banks</b></div>
      </div>
      <StepFlow labels={page.visualLabels} />
    </Shell>
  );
}

/* ------- 23. AI & Machine Learning — neural network ------- */
function AiMl({ page }: PanelProps) {
  return (
    <Shell page={page} variant="ai">
      <div className="sol-neural">
        <span className="nl l1"><i /><i /><i /></span>
        <span className="nl l2"><i /><i /><i /><i /></span>
        <span className="nl l3"><i /><i /></span>
        <svg className="sol-neural-lines" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M8,25 L50,15 M8,25 L50,40 M8,50 L50,15 M8,50 L50,63 M8,75 L50,40 M8,75 L50,88 M50,15 L92,35 M50,63 L92,35 M50,88 L92,65 M50,40 L92,65" /></svg>
      </div>
      <div className="sol-ai-out"><small>Prediction</small><b>96.4%</b><i>confidence</i></div>
      <StepFlow labels={page.visualLabels} />
    </Shell>
  );
}

const REGISTRY: Record<string, (p: PanelProps) => ReactNode> = {
  "docudex-edms": DocumentManagement,
  "docudex-workflow": ProcessAutomation,
  "capture-software": CaptureSoftware,
  "record-management": RecordManagement,
  "agile-audit": AgileAudit,
  "hrms": Hris,
  "invoice-processing": InvoiceProcessing,
  "online-proctoring": OnlineProctoring,
  "library-management": LibraryManagement,
  "e-kyc-and-cim-solution": Ekyc,
  "land-management-solution": LandManagement,
  "rpa": Rpa,
  "document-scanner": (p) => <ScannerPanel page={p.page} kind="document" />,
  "robotic-scanner": (p) => <ScannerPanel page={p.page} kind="robotic" />,
  "book-map-scanner": (p) => <ScannerPanel page={p.page} kind="book" />,
  "microfilm-scanners": (p) => <ScannerPanel page={p.page} kind="microfilm" />,
  "digital-archiving": DigitalArchiving,
  "application-development": AppDevelopment,
  "mobile-app-development": MobileDevelopment,
  "data-processing": DataProcessing,
  "bpo": Bpo,
  "banking-solution": BankingSolution,
  "ai-and-machine-learning": AiMl
};

export function SolutionHeroPanel({ page }: PanelProps) {
  const Panel = REGISTRY[page.slug];
  if (Panel) return <>{Panel({ page })}</>;
  // Fallback: a clean generic panel driven by the page's own data.
  return (
    <Shell page={page} variant="generic">
      <StatRow page={page} />
      <StepFlow labels={page.visualLabels} />
    </Shell>
  );
}
