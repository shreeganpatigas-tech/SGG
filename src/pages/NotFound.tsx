/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowLeft, HelpCircle } from 'lucide-react';
import { ActivePage } from '../types';

interface NotFoundProps {
  onNavigate: (page: ActivePage) => void;
}

export default function NotFound({ onNavigate }: NotFoundProps) {
  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center bg-brand-light py-20 px-4 text-center">
      <div className="max-w-md bg-white border border-slate-200 p-8 sm:p-12 shadow-md rounded-sm space-y-6">
        <div className="w-16 h-16 bg-brand-red/10 text-brand-red flex items-center justify-center rounded-full mx-auto shadow-sm">
          <HelpCircle size={32} />
        </div>
        <div className="space-y-2">
          <h1 className="font-display font-black text-brand-charcoal text-4xl leading-none">404</h1>
          <h2 className="font-display font-bold text-neutral-800 text-sm uppercase tracking-wider">Page Not Discovered</h2>
          <p className="text-xs text-neutral-500 leading-relaxed font-sans font-light">
            The requested SGGPL documentation sheet, product directory, or asset path does not exist on our servers.
          </p>
        </div>
        <div className="pt-4 border-t border-slate-100">
          <button
            onClick={() => onNavigate('home')}
            className="w-full flex items-center justify-center gap-2 py-3 bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-colors cursor-pointer"
          >
            <ArrowLeft size={14} />
            Return to Homepage
          </button>
        </div>
      </div>
    </div>
  );
}
