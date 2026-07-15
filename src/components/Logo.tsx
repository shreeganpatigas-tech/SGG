/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import companyLogo from "../assets/images/company/logo.svg";
import companyLogoFallback from "../assets/images/company/logo.png";

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: "light" | "dark";
}

export default function Logo({
  className = "h-14",
  showText = true,
  variant = "dark",
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={companyLogo}
        alt="Shree Ganpati Gastech Private Limited Logo"
        className="h-full w-auto object-contain shrink-0"
        draggable={false}
        onError={(e) => { e.currentTarget.src = companyLogoFallback; }}
      />

      {showText && (
        <div className="leading-none">
          <h1 className={`font-display font-bold text-[18px] tracking-wide uppercase ${variant === 'dark' ? 'text-slate-900' : 'text-white'}`}>
            Shree Ganpati
          </h1>

          <h2 className="font-display font-extrabold text-[15px] tracking-[0.18em] uppercase text-[#A30000] mt-1">
            Gastech
          </h2>

          <p className={`font-medium text-[10px] tracking-[0.28em] uppercase mt-1 ${variant === 'dark' ? 'text-slate-500' : 'text-slate-300'}`}>
            Private Limited
          </p>
        </div>
      )}
    </div>
  );
}
