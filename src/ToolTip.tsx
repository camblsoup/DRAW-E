import React from "react";
import './ToolTip.css';

interface TooltipButtonProps {
  onClick: () => void;
  tooltip: string;
  children: React.ReactNode;
  className?: string;
}

export default function TooltipButton({
  onClick,
  tooltip,
  children,
  className = ""
}: TooltipButtonProps) {
  return (
    <div className={`tooltip-container ${className}`} onClick={onClick}>
      {children}
      <span className="tooltip-text">{tooltip}</span>
    </div>
  );
}