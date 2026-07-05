"use client";

import { PointerEvent, useRef } from "react";
import { Icon } from "./Icon";

type AnimatedHeroVisualProps = {
  labels?: [string, string, string];
  title?: string;
  stat?: string;
  compact?: boolean;
};

export function AnimatedHeroVisual({
  labels = ["Capture", "Classify", "Secure"],
  title = "Information, understood instantly.",
  stat = "78% processed",
  compact = false
}: AnimatedHeroVisualProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!ref.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.setProperty("--tilt-x", `${x * 4.5}deg`);
    ref.current.style.setProperty("--tilt-y", `${y * -4.5}deg`);
  };

  const reset = () => {
    if (!ref.current) return;
    ref.current.style.setProperty("--tilt-x", "0deg");
    ref.current.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <div
      className={`creative-hero ${compact ? "compact" : ""}`}
      aria-label="Animated DocuDEX document intelligence workflow"
    >
      <div
        ref={ref}
        className="intelligence-stage"
        onPointerMove={onPointerMove}
        onPointerLeave={reset}
      >
        <div className="stage-grid" />
        <div className="stage-glow glow-green" />
        <div className="stage-glow glow-red" />

        <div className="orbit-ring orbit-ring-one"><i /></div>
        <div className="orbit-ring orbit-ring-two"><i /></div>

        <div className="orbit-node node-capture"><span><Icon name="scan" /></span><b>{labels[0]}</b></div>
        <div className="orbit-node node-classify"><span><Icon name="spark" /></span><b>{labels[1]}</b></div>
        <div className="orbit-node node-secure"><span><Icon name="shield" /></span><b>{labels[2]}</b></div>

        <div className="document-stack" aria-hidden="true">
          <div className="floating-document document-back"><i /><i /><i /></div>
          <div className="floating-document document-mid"><i /><i /><i /></div>
        </div>

        <div className="intelligence-card">
          <div className="scan-beam" />
          <div className="intelligence-head">
            <div className="docudex-mini">docu<span>DEX</span></div>
            <span className="live-pill"><i /> Live</span>
          </div>
          <div className="intelligence-label">Document intelligence</div>
          <h3>{title}</h3>
          <div className="extraction-row"><span>Vendor</span><strong>Devnet Limited</strong><i>99%</i></div>
          <div className="extraction-row"><span>Document</span><strong>Land record</strong><i>96%</i></div>
          <div className="extraction-row"><span>Status</span><strong>{stat}</strong><i><Icon name="check" /></i></div>
          <div className="intelligence-progress"><span /></div>
          <small>{labels[0]} <span>→</span> understand <span>→</span> route</small>
        </div>

        <div className="activity-card">
          <span className="activity-icon"><Icon name="workflow" /></span>
          <div><small>Automation running</small><strong>12 workflows active</strong></div>
          <i className="activity-pulse" />
        </div>

        <div className="security-card">
          <span><Icon name="shield" /></span>
          <div><small>Security layer</small><strong>Encrypted & auditable</strong></div>
        </div>

        <div className="flow-rail" aria-hidden="true">
          <span className="flow-file file-one">PDF</span>
          <span className="flow-file file-two">DOC</span>
          <span className="flow-file file-three">IMG</span>
          <div className="flow-line" />
        </div>
      </div>
    </div>
  );
}
