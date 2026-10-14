import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Search,
  Sparkles,
  Scale,
  ShieldCheck,
  Database,
  Cpu,
  CheckCircle2,
  FileText,
  Globe,
  Terminal,
  Layers,
  Check,
  Play,
  RotateCw,
  FolderArchive,
  Scissors,
  Crop,
  Stamp,
  Wrench,
  FileDown,
  Lock,
  EyeOff,
  Zap,
  Languages,
  Home,
  BookOpen,
  Gavel,
  SlidersHorizontal,
  CreditCard,
  User,
  Moon,
  Sun,
  Paperclip,
  Plus,
  Send,
  Folder,
  Bot,
  MessageSquare,
  Settings,
  Box,
  Bell,
  Camera,
  Upload,
  Linkedin
} from 'lucide-react';

const LINKEDIN_URL = 'https://www.linkedin.com/in/idriss-zaghez/';
const ALGERIA_LAW_URL = 'https://algerialawlibrary.com';

// ============================================================================
// CUSTOM BRAND LOGOS (FAITHFUL VECTOR RECREATIONS OF UPLOADED LOGOS)
// ============================================================================

// 1. ALGERIA LAW LIBRARY LOGO (`logo.png` — Forest Green #185434 Open Book + Classical Pillar)
const AlgeriaLawLogo = ({ className = 'w-8 h-8', strokeColor = '#185434', opacity = 1 }) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    style={{ opacity }}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer Left & Right Book Covers */}
    <path
      d="M58 97 L12 83 L12 31 L22 34"
      stroke={strokeColor}
      strokeWidth="4.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
    <path
      d="M62 97 L108 83 L108 31 L98 34"
      stroke={strokeColor}
      strokeWidth="4.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
    {/* Inner Left & Right Open Pages */}
    <path
      d="M57 94 L21 76 L21 24 C34 28 45 34 50 40"
      stroke={strokeColor}
      strokeWidth="4.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
    <path
      d="M63 94 L99 76 L99 24 C86 28 75 34 70 40"
      stroke={strokeColor}
      strokeWidth="4.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
    {/* Classical Pillar Top Capital Bars */}
    <line x1="45" y1="22" x2="75" y2="22" stroke={strokeColor} strokeWidth="5" />
    <line x1="49" y1="29" x2="71" y2="29" stroke={strokeColor} strokeWidth="4.5" />
    {/* 3 Vertical Fluted Pillar Columns */}
    <line x1="53" y1="35" x2="53" y2="93" stroke={strokeColor} strokeWidth="4.5" />
    <line x1="60" y1="35" x2="60" y2="98" stroke={strokeColor} strokeWidth="4.5" />
    <line x1="67" y1="35" x2="67" y2="93" stroke={strokeColor} strokeWidth="4.5" />
  </svg>
);

// 2. PDF LAWYER / محامي PDF LOGO (`logod.jpg` — Emerald & Gold Shield, Scales, Algerian Crescent, Red PDF Icon)
const PdfLawyerLogo = ({ className = 'w-12 h-12', showText = false }) => (
  <div className="inline-flex flex-col items-center select-none">
    <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E6C989" />
          <stop offset="50%" stopColor="#B8934F" />
          <stop offset="100%" stopColor="#8A662B" />
        </linearGradient>
        <linearGradient id="greenGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1E7B4C" />
          <stop offset="100%" stopColor="#0C4128" />
        </linearGradient>
      </defs>
      {/* Outer Tech Orbit Ring */}
      <circle cx="60" cy="60" r="52" stroke="url(#greenGrad)" strokeWidth="2.5" strokeDasharray="140 40" />
      <circle cx="60" cy="60" r="52" stroke="url(#goldGrad)" strokeWidth="2.5" strokeDashoffset="160" strokeDasharray="140 160" />
      <circle cx="60" cy="8" r="3" fill="#E6C989" />
      <circle cx="8" cy="60" r="2.5" fill="#1E7B4C" />
      <circle cx="112" cy="60" r="2.5" fill="#E6C989" />

      {/* Split Shield Base */}
      <path
        d="M60 16 L24 28 V58 C24 82 40 97 60 105 V16 Z"
        fill="#072819"
        stroke="#1E7B4C"
        strokeWidth="3.5"
      />
      <path
        d="M60 16 L96 28 V58 C96 82 80 97 60 105 V16 Z"
        fill="#14110B"
        stroke="url(#goldGrad)"
        strokeWidth="3.5"
      />

      {/* Algerian Flag Wave Motif Inside Left Shield */}
      <path d="M32 68 Q46 62 56 72 L52 88 Q38 82 32 68 Z" fill="#FFFFFF" opacity="0.9" />
      <path d="M32 68 Q40 65 45 68 L43 84 Q35 80 32 68 Z" fill="#1E7B4C" />
      <circle cx="48" cy="76" r="3.5" fill="#D32F2F" />

      {/* Balance Scales Beam */}
      <path d="M36 42 L60 36 L84 42" stroke="url(#goldGrad)" strokeWidth="3" strokeLinecap="round" />
      <line x1="38" y1="42" x2="33" y2="57" stroke="url(#goldGrad)" strokeWidth="1.8" />
      <line x1="38" y1="42" x2="43" y2="57" stroke="url(#goldGrad)" strokeWidth="1.8" />
      <path d="M30 57 H46 C45 63 31 63 30 57 Z" fill="url(#goldGrad)" />

      {/* Red PDF Document Card on Right Side */}
      <rect x="65" y="48" width="24" height="30" rx="3" fill="#B91C1C" stroke="url(#goldGrad)" strokeWidth="2" />
      <circle cx="72" cy="61" r="1.6" fill="#FDE68A" />
      <circle cx="77" cy="61" r="1.6" fill="#FDE68A" />
      <circle cx="82" cy="61" r="1.6" fill="#FDE68A" />
      <rect x="72" y="68" width="20" height="9" rx="2" fill="url(#goldGrad)" />
      <text x="82" y="75" textAnchor="middle" fill="#111" fontSize="6" fontWeight="900" fontFamily="sans-serif">
        PDF
      </text>

      {/* Center Top Mini PDF Badge */}
      <rect x="51" y="29" width="18" height="14" rx="2" fill="#991B1B" stroke="#F3F4F6" strokeWidth="1.2" />
      <text x="60" y="38.5" textAnchor="middle" fill="#FFF" fontSize="6.5" fontWeight="900" fontFamily="sans-serif">
        PDF
      </text>

      {/* Bottom Diamond Crest with Mini Scales */}
      <path d="M60 76 L72 90 L60 101 L48 90 Z" fill="#F3F4F6" stroke="url(#goldGrad)" strokeWidth="2" />
      <path d="M54 88 H66 M60 84 V94" stroke="#8A662B" strokeWidth="1.4" />
    </svg>
    {showText && (
      <div className="mt-1 font-sans text-xs font-bold tracking-tight text-zinc-200">
        محامي PDF
      </div>
    )}
  </div>
);

// 3. IDRISSCLAW CLAYMATION "ic" MASCOT (`logo no bg.png` — Red 3D Clay One-Eyed "i" + Claw "c" + Blue Sparks)
const IdrissClawMascot = ({ className = 'w-14 h-14', withLaptop = false }) => (
  <svg viewBox="0 0 160 130" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="clayRed" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#FF5A3D" />
        <stop offset="55%" stopColor="#E02E16" />
        <stop offset="100%" stopColor="#A61908" />
      </radialGradient>
      <radialGradient id="eyeBall" cx="40%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="85%" stopColor="#E4E4E7" />
        <stop offset="100%" stopColor="#A1A1AA" />
      </radialGradient>
    </defs>

    {/* Left Blue Action Rays */}
    <line x1="22" y1="22" x2="12" y2="14" stroke="#0066FF" strokeWidth="5.5" strokeLinecap="round" />
    <line x1="18" y1="34" x2="6" y2="33" stroke="#0066FF" strokeWidth="5.5" strokeLinecap="round" />
    <line x1="22" y1="45" x2="12" y2="52" stroke="#0066FF" strokeWidth="5.5" strokeLinecap="round" />

    {/* Right Blue Action Rays */}
    <line x1="138" y1="74" x2="149" y2="68" stroke="#0066FF" strokeWidth="5.5" strokeLinecap="round" />
    <line x1="138" y1="86" x2="149" y2="90" stroke="#0066FF" strokeWidth="5.5" strokeLinecap="round" />

    {/* Clay "i" Stem Body */}
    <path
      d="M36 68 C30 68 28 60 35 55 C44 48 56 44 63 46 C69 48 68 58 65 75 L61 103 C67 104 70 108 69 114 C68 119 62 120 48 120 C34 120 29 118 31 111 C33 105 40 90 43 70 C39 71 38 69 36 68 Z"
      fill="url(#clayRed)"
    />

    {/* Clay "i" One-Eyed Head Dot */}
    <circle cx="52" cy="26" r="17.5" fill="url(#clayRed)" />
    <circle cx="53" cy="26" r="10.5" fill="url(#eyeBall)" />
    <circle cx="55.5" cy="26" r="5.5" fill="#18181B" />
    <circle cx="53.5" cy="24" r="2" fill="#FFFFFF" />

    {/* Clay "C" Giant Lobster Claw Body */}
    <path
      d="M132 58 C126 30 96 22 77 42 C62 58 62 92 78 108 C94 123 122 118 129 94 C131 87 125 84 121 90 C115 100 98 103 89 92 C81 82 82 62 93 52 C104 42 119 46 126 60 C128 64 133 62 132 58 Z"
      fill="url(#clayRed)"
    />
    {/* Inner Pincer Fingers */}
    <path d="M89 56 C98 56 106 62 103 68 C100 72 90 69 85 64" fill="#C8230E" />
    <path d="M98 98 C106 92 114 86 118 89 C121 92 112 102 102 103" fill="#C8230E" />

    {/* Optional Silver MacBook Laptop in front of Mascot (Matches Hero Banner of IdrissClaw) */}
    {withLaptop && (
      <g transform="translate(95, 76)">
        <polygon points="8,0 56,0 50,34 2,34" fill="#D4D8E1" stroke="#94A3B8" strokeWidth="1.5" />
        <rect x="0" y="33" width="54" height="4" rx="2" fill="#94A3B8" />
        <text x="28" y="20" textAnchor="middle" fill="#64748B" fontSize="9" fontWeight="800" fontFamily="sans-serif">
          ic
        </text>
      </g>
    )}
  </svg>
);

// ============================================================================
// REALISTIC PORTRAIT ILLUSTRATION OF IDRISS ZAGHEZ (`image_5b0d47.jpg`)
// Recreates the exact photo: Dark tapered hair, neat beard, looking slightly right,
// deep teal-blue Lacoste polo shirt (#174A5B), cream chinos (#E6DEC8), black leather belt,
// gold/silver chronograph watch on left wrist, crimson mosaic tile bar & warm hotel lounge behind.
// ============================================================================
const IdrissPortraitArtwork = ({ customPhotoUrl, isMonochrome }) => {
  if (customPhotoUrl) {
    return (
      <img
        src={customPhotoUrl}
        alt="Idriss Zaghez"
        className={`h-full w-full object-cover object-top transition duration-500 ${
          isMonochrome ? 'grayscale contrast-125' : ''
        }`}
      />
    );
  }

  return (
    <svg
      viewBox="0 0 400 400"
      className={`h-full w-full object-cover transition duration-500 ${
        isMonochrome ? 'grayscale contrast-125' : ''
      }`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Warm Upscale Lounge Ceiling Gradient */}
        <linearGradient id="loungeCeiling" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D7C7B2" />
          <stop offset="55%" stopColor="#B8A48C" />
          <stop offset="100%" stopColor="#8C755C" />
        </linearGradient>
        {/* Deep Teal Lacoste Polo Gradient */}
        <linearGradient id="tealPolo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1D5A6E" />
          <stop offset="50%" stopColor="#144454" />
          <stop offset="100%" stopColor="#0D2F3B" />
        </linearGradient>
        {/* Crimson Red Mosaic Tile Counter Pattern */}
        <pattern id="redMosaic" width="8" height="8" patternUnits="userSpaceOnUse">
          <rect width="8" height="8" fill="#8C1D2E" />
          <rect x="0.8" y="0.8" width="6.4" height="6.4" rx="0.8" fill="#B52B3F" />
          <rect x="1.5" y="1.5" width="2.5" height="2.5" fill="#D14357" opacity="0.55" />
        </pattern>
        {/* Skin Tone Gradient */}
        <linearGradient id="skinTone" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F2CCB0" />
          <stop offset="60%" stopColor="#DFB193" />
          <stop offset="100%" stopColor="#C59374" />
        </linearGradient>
        {/* Cream Chinos Gradient */}
        <linearGradient id="creamChinos" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EFE9DC" />
          <stop offset="60%" stopColor="#E2D9C5" />
          <stop offset="100%" stopColor="#CFC3AC" />
        </linearGradient>
      </defs>

      {/* 1. BACKGROUND: Warm Hotel Lounge Ceiling, Recessed Lights & Wood Paneling */}
      <rect width="400" height="400" fill="url(#loungeCeiling)" />
      {/* Distant Architectural Glass & Wall */}
      <rect x="15" y="75" width="160" height="135" fill="#EAE2D6" opacity="0.7" />
      <rect x="24" y="92" width="100" height="95" fill="#3B332B" opacity="0.25" />
      {/* Warm Wood Paneling on Right */}
      <rect x="245" y="65" width="155" height="145" fill="#9E6234" />
      <line x1="285" y1="65" x2="285" y2="210" stroke="#784722" strokeWidth="2" />
      <line x1="330" y1="65" x2="330" y2="210" stroke="#784722" strokeWidth="2" />

      {/* Ceiling Recessed Spotlights */}
      {[55, 95, 130, 155, 225, 260, 355].map((cx, i) => (
        <circle
          key={i}
          cx={cx}
          cy={22 + (i % 3) * 14}
          r="4.5"
          fill="#FFFBEB"
           opacity="0.9"
        />
      ))}

      {/* Left & Top-Right Black Drum Pendant Lamps with Warm Golden Glow */}
      <g transform="translate(36, 76)">
        <line x1="16" y1="-40" x2="16" y2="0" stroke="#27272A" strokeWidth="2" />
        <rect x="0" y="0" width="32" height="16" rx="2" fill="#27272A" />
        <ellipse cx="16" cy="16" rx="15" ry="4" fill="#FDE047" />
      </g>
      <g transform="translate(302, 4)">
        <rect x="0" y="0" width="44" height="22" rx="3" fill="#18181B" />
        <ellipse cx="22" cy="22" rx="21" ry="5" fill="#FEF08A" />
      </g>

      {/* 2. MIDGROUND: Crimson Red Mosaic Tile Counter & Black Marble Ledge */}
      <polygon points="0,208 400,248 400,264 0,224" fill="#1F191A" />
      <polygon points="0,222 400,262 400,400 0,400" fill="url(#redMosaic)" />

      {/* Amber Glass Reed Diffuser Vase on Right Counter */}
      <g transform="translate(300, 178)">
        <line x1="18" y1="0" x2="6" y2="-45" stroke="#D97706" strokeWidth="2" />
        <line x1="22" y1="0" x2="20" y2="-48" stroke="#F59E0B" strokeWidth="2" />
        <line x1="26" y1="0" x2="36" y2="-44" stroke="#991B1B" strokeWidth="2" />
        <line x1="30" y1="0" x2="46" y2="-38" stroke="#E5E7EB" strokeWidth="1.8" />
        <rect x="14" y="0" width="18" height="12" rx="2" fill="#D97706" />
        <rect x="3" y="10" width="40" height="52" rx="6" fill="#B45309" fillOpacity="0.65" stroke="#FDE68A" strokeWidth="1" />
      </g>

      {/* 3. FOREGROUND SUBJECT: IDRISS ZAGHEZ */}
      {/* Right Arm (Viewer's Left) angled casually into pocket */}
      <path
        d="M158 164 L132 238 L126 292 L148 298 L156 246 L174 195 Z"
        fill="url(#skinTone)"
      />

      {/* Left Arm (Viewer's Right) bent toward left pocket with Chronograph Watch */}
      <path
        d="M268 166 L298 238 L266 306 L244 295 L268 238 L248 195 Z"
        fill="url(#skinTone)"
      />

      {/* Cream / Beige Tailored Chinos (`#E6DEC8`) */}
      <path
        d="M150 288 L256 298 L268 400 L204 400 L198 355 L190 400 L134 400 C134 358 142 320 150 288 Z"
        fill="url(#creamChinos)"
      />
      {/* Chino Pocket Slants & Fly Crease */}
      <line x1="194" y1="304" x2="191" y2="352" stroke="#C5B89E" strokeWidth="2" />
      <line x1="146" y1="302" x2="165" y2="328" stroke="#C5B89E" strokeWidth="2" />
      <line x1="254" y1="306" x2="235" y2="336" stroke="#C5B89E" strokeWidth="2" />

      {/* Black Leather Belt with Silver Buckle & Chino Belt Loops */}
      <path
        d="M149 283 Q202 296 257 291 L256 304 Q202 309 148 295 Z"
        fill="#141417"
      />
      {/* Silver Belt Buckle */}
      <rect
        x="175"
        y="285"
        width="18"
        height="14"
        rx="2"
        fill="none"
        stroke="#E4E4E7"
        strokeWidth="2.5"
      />
      {/* Cream Belt Loops */}
      <rect x="160" y="283" width="4.5" height="15" rx="1" fill="#EAE3D2" />
      <rect x="208" y="288" width="4.5" height="15" rx="1" fill="#EAE3D2" />
      <rect x="242" y="289" width="4.5" height="15" rx="1" fill="#EAE3D2" />

      {/* Deep Teal-Blue Lacoste Polo Shirt (`#174A5B`) */}
      <path
        d="M152 150 C168 142 238 140 266 152 L288 220 L258 228 L252 196 L254 291 Q202 296 150 284 L158 195 L150 220 L130 212 L152 150 Z"
        fill="url(#tealPolo)"
      />
      {/* Subtle Fabric Folds near Waist */}
      <path d="M168 258 Q195 274 235 268" stroke="#0C2A35" strokeWidth="3" fill="none" opacity="0.6" />
      <path d="M182 242 Q212 256 244 248" stroke="#0C2A35" strokeWidth="2.5" fill="none" opacity="0.5" />

      {/* Polo Collar & Placket with 2 Mother-of-Pearl Buttons */}
      <path d="M196 146 L193 196 L203 196 L206 146 Z" fill="#133E4D" stroke="#0D2F3B" strokeWidth="1.2" />
      <circle cx="200" cy="158" r="2.2" fill="#E2E8F0" />
      <circle cx="199" cy="176" r="2.2" fill="#E2E8F0" />
      {/* Spread Polo Collar Wings with Subtle Light Piping Edge */}
      <path
        d="M178 134 L199 152 L182 158 L172 145 Z"
        fill="#1A4F61"
        stroke="#64748B"
        strokeWidth="1.2"
      />
      <path
        d="M232 128 L201 152 L222 158 L238 142 Z"
        fill="#1A4F61"
        stroke="#64748B"
        strokeWidth="1.2"
      />

      {/* Iconic Small Green/White Lacoste Crocodile Emblem on Left Chest */}
      <g transform="translate(222, 184)">
        <ellipse cx="6" cy="4" rx="6.5" ry="3.2" fill="#FFFFFF" />
        <ellipse cx="5.5" cy="4" rx="5" ry="2" fill="#15803D" />
        <circle cx="9" cy="3.2" r="0.8" fill="#DC2626" />
      </g>

      {/* Gold/Silver Chronograph Watch with Black Leather Strap on Left Wrist */}
      <g transform="translate(254, 290) rotate(26)">
        <rect x="-8" y="-4" width="24" height="9" rx="2" fill="#18181B" />
        <circle cx="5" cy="0.5" r="7.5" fill="#FDE68A" stroke="#D97706" strokeWidth="1.5" />
        <circle cx="5" cy="0.5" r="5.5" fill="#FFFBEB" />
        <line x1="5" y1="0.5" x2="5" y2="-3" stroke="#18181B" strokeWidth="1.2" />
        <line x1="5" y1="0.5" x2="8" y2="1" stroke="#18181B" strokeWidth="1.2" />
      </g>

      {/* 4. NECK, HEAD, BEARD & FACIAL FEATURES (3/4 View Looking Slightly Left) */}
      {/* Neck */}
      <path
        d="M188 112 L185 145 Q202 156 226 138 L224 106 Z"
        fill="url(#skinTone)"
      />
      {/* Subtle Neck Shadow under Jaw */}
      <path d="M187 122 Q204 134 222 118 L223 128 Q202 142 186 132 Z" fill="#B58364" opacity="0.55" />

      {/* Head Base Shape */}
      <path
        d="M174 68 C174 44 232 42 234 74 C236 104 222 126 196 128 C178 128 172 112 173 94 C173 84 174 75 174 68 Z"
        fill="url(#skinTone)"
      />

      {/* Right Ear (Viewer's Right) */}
      <path
        d="M224 84 C231 82 234 90 231 99 C229 105 223 106 221 101 Z"
        fill="#DFAF90"
        stroke="#B58364"
        strokeWidth="1.2"
      />

      {/* Short Dark Tapered Haircut (`#181414`) */}
      <path
        d="M176 62 C178 44 202 38 222 44 C238 50 242 68 235 88 C232 82 229 78 224 82 C222 72 216 64 212 58 C200 54 185 55 176 62 Z"
        fill="#181414"
      />

      {/* Well-Groomed Trimmed Full Beard, Sideburns & Mustache */}
      <path
        d="M222 82 C221 96 218 106 208 113 C198 118 188 116 184 111 C180 107 177 104 175 106 C173 114 177 126 192 128 C210 129 224 118 226 102 C227 94 225 86 222 82 Z"
        fill="#231D1B"
        opacity="0.88"
      />
      {/* Mustache & Goatee Chin Accent */}
      <path
        d="M173 103 Q182 99 194 104 Q183 107 173 105 Z"
        fill="#231D1B"
      />
      <path
        d="M179 112 Q184 114 188 112 L186 124 L179 123 Z"
        fill="#231D1B"
      />

      {/* Expressive Dark Eyebrows */}
      <path d="M173 74 Q179 71 185 74" stroke="#181414" strokeWidth="2.8" strokeLinecap="round" fill="none" />
      <path d="M192 73 Q202 69 212 74" stroke="#181414" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Warm Dark Eyes Looking Slightly Left */}
      <ellipse cx="179" cy="81" rx="3.8" ry="2.2" fill="#FFFFFF" />
      <circle cx="177.8" cy="81" r="2" fill="#1F1614" />
      <ellipse cx="201" cy="81" rx="4.8" ry="2.5" fill="#FFFFFF" />
      <circle cx="199.5" cy="81" r="2.3" fill="#1F1614" />
      <circle cx="198.8" cy="80.3" r="0.7" fill="#FFFFFF" />

      {/* Defined Nose Bridge & Tip in 3/4 Profile */}
      <path
        d="M186 76 L177 93 C176 96 180 98 185 97"
        stroke="#B58364"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Subtle Warm Smile */}
      <path
        d="M176 107 Q184 110 192 106"
        stroke="#8C5842"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

// ============================================================================
// 6 AUTHENTIC FRAMES EXCLUSIVELY FOR IDRISS'S 3 PROJECTS:
// 1. Algeria Law Library (Hero)
// 2. Algeria Law Library (AI Assistant & JORA Search)
// 3. PDF Lawyer / محامي PDF (Split-Screen Auth & 5 Offline Features)
// 4. PDF Lawyer / محامي PDF PRO (Dark Tools Grid: تحسين 5 & تنظيم 7)
// 5. IdrissClaw (The AI Agent OS Desktop Light Mode + Claymation Mascot)
// 6. IdrissClaw (MCP & Multi-Agent Legal Orchestrator)
// ============================================================================
const WORKS_FRAMES = [
  // ==========================================================================
  // ONE SCREEN PER PLATFORM — the main screen for each of the three products.
  // Array order within a wall IS corridor depth order (nearest first), so the
  // first entry on each wall is the biggest and closest frame.
  // ==========================================================================
  {
    id: 'all-hero',
    label: 'Algeria Law Library / المكتبة القانونية الجزائرية',
    shortLabel: 'Algeria Law Library / Hero',
    wall: 'left',
    url: ALGERIA_LAW_URL,
    linkText: 'algerialawlibrary.com'
  },
  {
    id: 'pdf-tools',
    label: 'PDF Lawyer PRO / 20 أداة محلية للعمل القانوني',
    shortLabel: 'محامي PDF / Tools Grid',
    wall: 'left',
    url: LINKEDIN_URL,
    linkText: 'محامي PDF PRO'
  },
  {
    id: 'idrissclaw-os',
    label: 'IdrissClaw / The AI Agent OS',
    shortLabel: 'IdrissClaw / Agent OS',
    wall: 'right',
    url: LINKEDIN_URL,
    linkText: 'IdrissClaw Desktop'
  }
];

// ============================================================================
// FIGMA / FRAMER SELECTION BOUNDING BOX WITH 4 SQUARE HANDLES
// ============================================================================
const FigmaSelectionBox = ({
  label,
  dimensionsBadge,
  active = true,
  children,
  className = '',
  labelClassName = ''
}) => {
  return (
    <div className={`relative ${className}`}>
      {label && (
        <div
          className={`pointer-events-none absolute -top-6 left-0 select-none font-sans text-[12px] font-medium tracking-tight transition-opacity duration-200 ${
            active ? 'text-[#0099FF] opacity-100' : 'text-zinc-400 opacity-75'
          } ${labelClassName}`}
        >
          {label}
        </div>
      )}

      <div
        className={`relative h-full w-full transition-shadow duration-300 ${
          active
            ? 'ring-[1.5px] ring-[#0099FF] shadow-[0_20px_60px_rgba(0,0,0,0.07)]'
            : 'ring-1 ring-zinc-200/80 shadow-[0_12px_36px_rgba(0,0,0,0.04)]'
        }`}
      >
        {children}

        {active && (
          <>
            <span className="pointer-events-none absolute -left-[4.5px] -top-[4.5px] z-30 h-[8px] w-[8px] border-[1.5px] border-[#0099FF] bg-white" />
            <span className="pointer-events-none absolute -right-[4.5px] -top-[4.5px] z-30 h-[8px] w-[8px] border-[1.5px] border-[#0099FF] bg-white" />
            <span className="pointer-events-none absolute -bottom-[4.5px] -left-[4.5px] z-30 h-[8px] w-[8px] border-[1.5px] border-[#0099FF] bg-white" />
            <span className="pointer-events-none absolute -bottom-[4.5px] -right-[4.5px] z-30 h-[8px] w-[8px] border-[1.5px] border-[#0099FF] bg-white" />
          </>
        )}

        {active && dimensionsBadge && (
          <div className="pointer-events-none absolute -bottom-7 left-1/2 z-30 -translate-x-1/2 rounded-[4px] bg-[#0099FF] px-2 py-0.5 font-sans text-[11px] font-semibold text-white shadow-sm">
            {dimensionsBadge}
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================================================
// LIVE MULTIPLAYER CURSOR COMPONENT (ARROW + PILL TAG)
// ============================================================================
const MultiplayerCursor = ({ x, y, label, color, isOrangeClient = false }) => {
  return (
    <div
      style={{
        transform: `translate3d(${x}px, ${y}px, 0)`,
        transition: isOrangeClient
          ? 'transform 90ms cubic-bezier(0.22, 1, 0.36, 1)'
          : 'transform 1400ms cubic-bezier(0.22, 1, 0.36, 1)'
      }}
      className="pointer-events-none fixed left-0 top-0 z-50 select-none"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="-translate-x-1 -translate-y-1 drop-shadow-sm"
      >
        <path
          d="M1.5 1.5L6.2 13.8L8.5 8.8L13.5 6.5L1.5 1.5Z"
          fill={color}
          stroke="white"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>

      <div
        style={{ backgroundColor: color }}
        className="ml-2.5 -mt-1 inline-flex items-center rounded-[6px] px-2 py-[2px] font-sans text-[11px] font-semibold leading-tight text-white shadow-md"
      >
        {label}
      </div>
    </div>
  );
};

// ============================================================================
// PIXEL-FAITHFUL RENDERER FOR EACH OF THE FRAMES (3 EXCLUSIVE PROJECTS)
// ============================================================================
const WorkFrameContent = ({ frame, isInteractive }) => {
  const [allQuery, setAllQuery] = useState('');
  const [selectedPdfTool, setSelectedPdfTool] = useState('ضغط PDF');
  const [clawPrompt, setClawPrompt] = useState('');
  const [activeModel, setActiveModel] = useState('GPT-4o');

  // --------------------------------------------------------------------------
  // FRAME 1: ALGERIA LAW LIBRARY (`image_5afefd.png` + `logo.png` EXACT REPLICA)
  // --------------------------------------------------------------------------
  if (frame.id === 'all-hero') {
    const suggestionPills = [
      'شروط عقد الإيجار',
      'الطلاق والتطليق',
      'جرائم تهريب',
      'التعويض عن حوادث المرور',
      'المدة الخاصة بالدعوى العمومية'
    ];

    const stats = [
      { num: '20', label: 'مجال قانوني', icon: Scale },
      { num: '1.595', label: 'قرار قضائي (المحكمة العليا ومجلس الدولة)', icon: Gavel },
      { num: '30.243', label: 'مادة قانونية', icon: FileText },
      { num: '533', label: 'نص قانوني وتنظيمي', icon: BookOpen }
    ];

    return (
      <div
        dir="rtl"
        className="flex h-full w-full flex-col justify-between bg-[#F9F8F3] p-4 sm:p-6 text-[#111827] select-none overflow-hidden font-sans"
      >
        {/* Exact Top RTL Navbar from `image_5afefd.png` */}
        <div className="flex items-center justify-between border-b border-[#E6E4DD] pb-3 text-[11px]">
          {/* Right Side: Brand + Navigation Links */}
          <div className="flex items-center gap-2 sm:gap-3.5">
            <div className="flex items-center gap-2">
              <AlgeriaLawLogo className="h-6 w-6" strokeColor="#185434" />
              <span className="font-bold text-[#185434] text-xs hidden sm:inline">
                المكتبة القانونية الجزائرية
              </span>
            </div>

            <span className="inline-flex items-center gap-1 rounded-full bg-[#E3EFE8] px-2.5 py-1 font-semibold text-[#185434]">
              <Home className="h-3 w-3" /> الرئيسية
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-zinc-600 hover:text-zinc-900">
              <BookOpen className="h-3 w-3" /> القوانين
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-zinc-600 hover:text-zinc-900">
              <Gavel className="h-3 w-3" /> الاجتهاد القضائي
            </span>
            <span className="hidden lg:inline-flex items-center gap-1 text-zinc-600 hover:text-zinc-900">
              <SlidersHorizontal className="h-3 w-3" /> البحث المتقدم
            </span>
            <span className="hidden xl:inline-flex items-center gap-1 text-zinc-600 hover:text-zinc-900">
              <CreditCard className="h-3 w-3" /> الأسعار والاشتراكات
            </span>
          </div>

          {/* Left Side: Login, Dark Mode, FR, Ask Assistant (`اسأل المساعد`) */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-[10px] font-medium text-zinc-700">
              <User className="h-3 w-3" /> تسجيل الدخول
            </span>
            <span className="hidden sm:inline-flex h-6 w-6 items-center justify-center rounded-full text-zinc-500">
              <Moon className="h-3.5 w-3.5" />
            </span>
            <span className="hidden sm:inline-flex items-center text-[10px] font-semibold text-zinc-600 px-1">
              FR  文A
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-[#134E35] px-3 py-1 text-[10px] font-semibold text-white shadow-2xs">
              <Sparkles className="h-3 w-3" /> اسأل المساعد
            </span>
          </div>
        </div>

        {/* Center Hero Card with Watermark Logo & Search Bar */}
        <div className="relative my-auto flex flex-col items-center justify-center rounded-2xl border border-[#EBE9E2] bg-[#FAF9F5] px-4 py-5 sm:py-6 text-center shadow-2xs overflow-hidden">
          {/* Giant Faint Watermark of the Pillar-Book Logo Behind Heading */}
          <div className="pointer-events-none absolute top-2 left-1/2 -translate-x-1/2">
            <AlgeriaLawLogo className="h-36 w-36" strokeColor="#185434" opacity={0.07} />
          </div>

          <h2 className="relative z-10 font-sans text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0D2618]">
            المكتبة القانونية الجزائرية
          </h2>
          <p className="relative z-10 mt-1.5 text-xs sm:text-sm font-bold text-[#3B5246]">
            كل القوانين والاجتهاد القضائي (المحكمة العليا ومجلس الدولة)، في منصة واحدة
          </p>
          <p className="relative z-10 mt-1 max-w-lg text-[10px] sm:text-[11px] text-zinc-500 leading-relaxed">
            تصفّح النصوص القانونية مصنّفة حسب المجالات، وابحث بمحرك متقدم يفهم العربية، وتواصل مع مساعد بحث ذكي يستند إلى النصوص والقرارات مباشرة.
          </p>

          {/* Search Input + Sage Green `بحث` Button */}
          <div
            onClick={(e) => isInteractive && e.stopPropagation()}
            className="relative z-10 mt-3.5 flex w-full max-w-md items-center gap-2"
          >
            <div className="flex flex-1 items-center rounded-xl border border-zinc-200/90 bg-white px-3 py-1.5 shadow-2xs">
              <Search className="h-3.5 w-3.5 text-zinc-400 ml-2 shrink-0" />
              <input
                type="text"
                value={allQuery}
                onChange={(e) => setAllQuery(e.target.value)}
                readOnly={!isInteractive}
                placeholder="ابحث في القوانين، المواد، وقرارات المحكمة العليا ومجلس الدولة..."
                className="w-full bg-transparent text-[11px] text-zinc-800 placeholder:text-zinc-400 focus:outline-none"
              />
            </div>
            <button
              type="button"
              onClick={() => setAllQuery('شروط عقد الإيجار — القانون المدني')}
              className="rounded-xl bg-[#6B8E7B] px-4 py-1.5 text-xs font-bold text-white shadow-2xs hover:bg-[#587967] transition"
            >
              بحث
            </button>
          </div>

          {/* 5 Suggestion Pills */}
          <div
            onClick={(e) => isInteractive && e.stopPropagation()}
            className="relative z-10 mt-2.5 flex flex-wrap items-center justify-center gap-1.5"
          >
            {suggestionPills.map((pill) => (
              <button
                key={pill}
                type="button"
                onClick={() => setAllQuery(pill)}
                className="rounded-full border border-zinc-200 bg-white px-2.5 py-0.5 text-[10px] text-zinc-600 hover:border-[#185434] hover:text-[#185434] transition"
              >
                {pill}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom 4 White Stat Cards (`533`, `30.243`, `1.595`, `20`) */}
        <div dir="ltr" className="grid grid-cols-4 gap-2.5 pt-1">
          {stats.map((st, i) => {
            const IconComp = st.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center justify-center rounded-xl border border-[#EBE9E2] bg-white p-2.5 text-center shadow-2xs"
              >
                <IconComp className="h-3.5 w-3.5 text-[#185434] mb-1" />
                <div className="font-sans text-base sm:text-lg font-extrabold text-[#111827] leading-none">
                  {st.num}
                </div>
                <div dir="rtl" className="mt-1 text-[9px] sm:text-[10px] text-zinc-500 line-clamp-1">
                  {st.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // FRAME 2: ALGERIA LAW LIBRARY — AI LEGAL ASSISTANT (`اسأل المساعد`)
  // --------------------------------------------------------------------------
  if (frame.id === 'all-assistant') {
    return (
      <div
        dir="rtl"
        className="flex h-full w-full flex-col justify-between bg-[#F9F8F3] p-5 sm:p-6 text-[#111827] select-none overflow-hidden font-sans"
      >
        <div className="flex items-center justify-between border-b border-[#E6E4DD] pb-3">
          <div className="flex items-center gap-2.5">
            <AlgeriaLawLogo className="h-7 w-7" strokeColor="#185434" />
            <div>
              <div className="text-xs font-bold text-[#185434]">
                المساعد القانوني الذكي — المكتبة القانونية الجزائرية
              </div>
              <div className="font-mono text-[10px] text-zinc-400">algerialawlibrary.com • RAG Verified</div>
            </div>
          </div>
          <span className="rounded-full bg-[#134E35] px-3 py-1 text-[10px] font-semibold text-white">
            30.243 مادة قانونية مفهرسة
          </span>
        </div>

        <div className="grid grid-cols-12 gap-3 my-auto py-2">
          <div className="col-span-7 rounded-2xl border border-[#E2E0D8] bg-white p-4 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-[10px] font-semibold text-[#185434] mb-2">
                <span>إجابة مدعومة بالنصوص والاجتهاد القضائي</span>
                <span>مؤكدة 100%</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-zinc-800 font-medium">
                بناءً على <strong className="text-[#185434]">المادة 119 من القانون المدني الجزائري</strong> وقرارات الغرفة المدنية والتجارية بالمحكمة العليا (من بين 1.595 قراراً مفهرساً)، يشترط لفسخ العقد الملزم للجانبين توجيه إعذار رسمي للمدين قبل رفع الدعوى القضائية.
              </p>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5 border-t border-zinc-100 pt-2.5 text-[10px]">
              <span className="rounded-lg bg-[#E3EFE8] px-2.5 py-1 font-semibold text-[#185434]">
                المادة 119 — القانون المدني
              </span>
              <span className="rounded-lg bg-zinc-100 px-2.5 py-1 font-medium text-zinc-700">
                قرار المحكمة العليا رقم 0894120
              </span>
            </div>
          </div>

          <div className="col-span-5 flex flex-col gap-2.5">
            <div className="rounded-2xl border border-[#E2E0D8] bg-white p-3.5 shadow-2xs">
              <div className="text-[10px] text-zinc-400">قاعدة البيانات التشريعية</div>
              <div className="text-lg font-extrabold text-[#185434] mt-0.5">533 نص قانوني</div>
              <div className="text-[10px] text-zinc-500 mt-0.5">الجريدة الرسمية للجمهورية الجزائرية</div>
            </div>
            <div className="rounded-2xl border border-[#E2E0D8] bg-white p-3.5 shadow-2xs">
              <div className="text-[10px] text-zinc-400">الاجتهاد القضائي</div>
              <div className="text-lg font-extrabold text-[#111827] mt-0.5">1.595 قرار قضائي</div>
              <div className="text-[10px] text-zinc-500 mt-0.5">المحكمة العليا ومجلس الدولة</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-[#E6E4DD] pt-2.5 text-[10px] text-zinc-500">
          <span>محرك بحث هجين يفهم اللغة العربية القانونية</span>
          <span className="font-mono text-[#185434] font-semibold">algerialawlibrary.com</span>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // FRAME 3: PDF LAWYER / محامي PDF (`image_5b0298.png` + `logod.jpg` REPLICA)
  // --------------------------------------------------------------------------
  if (frame.id === 'pdf-auth') {
    const features = [
      {
        title: 'سريع بما يكفي للمواعيد',
        desc: 'تتم المعالجة على معالج جهازك، فتنجز الملفات الكبيرة في ثوانٍ.',
        icon: Zap
      },
      {
        title: 'مصمم للوثائق العربية',
        desc: 'يبقى النص العربي وتنسيق RTL سليمين في كل أداة.',
        icon: Languages
      },
      {
        title: 'كل شيء على جهازك',
        desc: 'لا يُرفع أي ملف إلى الإنترنت. فلا انتظار في صف ولا حدّ لحجم الملف.',
        icon: EyeOff
      },
      {
        title: 'امحُ فعلاً، لا تغطِّ فقط',
        desc: 'الإخفاء يحذف النص والبكسلات من الأسفل، فلا يبقى شيء يمكن استرجاعه.',
        icon: ShieldCheck
      },
      {
        title: 'خصوصية من الأساس',
        desc: 'لا تتبع ولا تخزين سحابي. تسجيل الدخول هو الخطوة الوحيدة التي تستخدم الإنترنت.',
        icon: Lock
      }
    ];

    return (
      <div className="grid h-full w-full grid-cols-12 overflow-hidden select-none font-sans">
        {/* LEFT PANEL: Dark Emerald Grid (`#0A4A33`) with 5 Feature Cards */}
        <div
          dir="rtl"
          className="col-span-6 relative flex flex-col justify-between bg-[#0A4A33] p-4 sm:p-5 text-white overflow-hidden"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '26px 26px'
          }}
        >
          {/* Top Brand Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="rounded-xl bg-white/10 p-1 border border-white/15">
                <PdfLawyerLogo className="h-8 w-8" />
              </div>
              <div>
                <div className="text-xs font-bold">محامي PDF</div>
                <div className="text-[9px] text-emerald-200/80">أدوات PDF محلية للعمل القانوني</div>
              </div>
            </div>
            <span className="rounded-full border border-emerald-300/30 bg-emerald-900/60 px-2.5 py-0.5 text-[9px] text-emerald-100">
              🛡️ ورشة PDF الخاصة بالمستندات القانونية
            </span>
          </div>

          {/* Headline */}
          <div className="my-1">
            <h3 className="text-lg sm:text-xl font-extrabold tracking-tight">
              مرحبًا بك في PDF محامي
            </h3>
            <p className="text-[10px] text-emerald-100/80 mt-0.5">
              عشرون أداة للضغط والتنظيم والتحويل والحماية — كل ذلك على هذا الجهاز.
            </p>
          </div>

          {/* 5 Frosted Feature Cards */}
          <div className="space-y-1.5">
            {features.map((f, i) => {
              const IconComp = f.icon;
              return (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-xl border border-emerald-300/20 bg-emerald-950/40 px-3 py-1.5 backdrop-blur-xs"
                >
                  <div>
                    <div className="text-[10px] font-bold text-white">{f.title}</div>
                    <div className="text-[8.5px] text-emerald-100/75 line-clamp-1">{f.desc}</div>
                  </div>
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-200 mr-2">
                    <IconComp className="h-3 w-3" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-left font-mono text-[9px] text-emerald-200/60 pt-1">
            محامي PDF v1.0.1
          </div>
        </div>

        {/* RIGHT PANEL: Pitch-Black (`#050505`) Login Screen */}
        <div
          dir="rtl"
          className="col-span-6 flex flex-col items-center justify-center bg-[#050505] p-5 text-white"
        >
          <PdfLawyerLogo className="h-12 w-12" />
          <h4 className="mt-2 text-sm font-bold">مرحبًا بك في PDF محامي</h4>
          <p className="text-[9.5px] text-zinc-400 mt-0.5">
            سجّل الدخول لفتح صندوق أدوات PDF. كل شيء يبقى على هذا الجهاز.
          </p>

          {/* Status Banner */}
          <div className="mt-2.5 w-full max-w-[240px] rounded-lg border border-red-900/60 bg-red-950/30 px-3 py-1.5 text-[9.5px] text-red-300 flex items-center gap-1.5">
            <span>⚠️</span>
            <span>وضع عدم الاتصال جاهز — كل شيء يبقى على جهازك.</span>
          </div>

          {/* Email & Password Fields */}
          <div className="mt-2.5 w-full max-w-[240px] space-y-2">
            <div>
              <div className="text-[9px] text-zinc-400 mb-0.5">البريد الإلكتروني</div>
              <div className="rounded-lg border border-zinc-800 bg-zinc-900/90 px-2.5 py-1.5 text-[10px] text-zinc-300 font-mono text-left">
                idriss@algerialawlibrary.com
              </div>
            </div>
            <div>
              <div className="text-[9px] text-zinc-400 mb-0.5">كلمة المرور</div>
              <div className="rounded-lg border border-zinc-800 bg-zinc-900/90 px-2.5 py-1.5 text-[10px] text-zinc-400 font-mono text-left">
                ••••••••••••
              </div>
            </div>
            <button
              type="button"
              className="w-full rounded-lg bg-[#2E8B62] py-1.5 text-[11px] font-bold text-white hover:bg-[#257350] transition"
            >
              تسجيل الدخول
            </button>
            <button
              type="button"
              className="w-full rounded-lg border border-zinc-800 bg-zinc-900/70 py-1.5 text-[10px] font-medium text-zinc-200 flex items-center justify-center gap-1.5"
            >
              <span className="font-bold text-emerald-400">G</span> المتابعة باستخدام Google
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // FRAME 4: PDF LAWYER PRO — DARK TOOLS GRID (`Screenshot 2026-08-18 224119.png`)
  // --------------------------------------------------------------------------
  if (frame.id === 'pdf-tools') {
    const optimizeTools = [
      { title: 'ضغط PDF', desc: 'قلّص حجم ملفات PDF بإعدادات جودة ذكية.', icon: FileDown },
      { title: 'إصلاح PDF', desc: 'أصلح التلف وأعد بناء نسخة نظيفة.', icon: Wrench },
      { title: 'إضافة علامة مائية', desc: 'ختم النص قطريًا على كل صفحة', icon: Stamp },
      { title: 'قص الهوامش', desc: 'قص الحدود البيضاء حول الصفحات تلقائيًا', icon: Crop },
      { title: 'ضغط مجلد', desc: 'ضغط جميع ملفات PDF في مجلد ومجلداته الفرعية', icon: FolderArchive }
    ];

    const organizeTools = [
      { title: 'دمج PDF', desc: 'ادمج عدة ملفات PDF في مستند واحد.', icon: Layers },
      { title: 'تقسيم PDF', desc: 'استخرج نطاقات صفحات أو قسّم إلى ملفات منفصلة.', icon: Scissors },
      { title: 'تدوير PDF', desc: 'دوّر كل الصفحات أو المحددة 90/180/270 درجة.', icon: RotateCw }
    ];

    return (
      <div
        dir="rtl"
        className="flex h-full w-full flex-col justify-between bg-[#0B0D0C] p-4 sm:p-5 text-white select-none overflow-hidden font-sans"
      >
        {/* Top Header Bar Matching `Screenshot 2026-08-18 224119.png` */}
        <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5">
          {/* Right Side: Logo + محامي PDF + User + Gold PRO Badge */}
          <div className="flex items-center gap-2.5">
            <PdfLawyerLogo className="h-8 w-8" />
            <span className="font-bold text-sm text-white">محامي PDF</span>
            <span className="hidden sm:inline font-mono text-[10px] text-zinc-400">
              ZAGHEZ Lokmane
            </span>
            <span className="hidden md:inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-2.5 py-0.5 text-[9px] text-zinc-300">
              📅 ينتهي في 18 أوت 2027
            </span>
            <span className="rounded-full bg-[#D4AF37] px-2 py-0.5 font-mono text-[9px] font-black text-black">
              PRO
            </span>
          </div>

          {/* Left Side: Language Switcher (`انجليزية | عربية | الفرنسية`) */}
          <div className="flex items-center gap-1.5">
            <div className="flex items-center rounded-full border border-zinc-800 bg-zinc-900/90 p-0.5 text-[9.5px]">
              <span className="px-2 py-0.5 text-zinc-400">انجليزية</span>
              <span className="rounded-full bg-zinc-800 px-2 py-0.5 font-bold text-white">عربية</span>
              <span className="px-2 py-0.5 text-zinc-400">الفرنسية</span>
            </div>
          </div>
        </div>

        {/* Filter & Search Row */}
        <div className="flex items-center justify-between my-1.5">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-[#1E7B52] px-3 py-0.5 text-[10px] font-bold text-white">
              الكل
            </span>
            <span className="text-[10px] text-zinc-400">
              الأداة النشطة: <strong className="text-emerald-400">{selectedPdfTool}</strong>
            </span>
          </div>
          <div className="flex items-center rounded-lg border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-[10px] text-zinc-400 w-44">
            <Search className="h-3 w-3 ml-1.5" />
            <span>ابحث عن الأدوات...</span>
          </div>
        </div>

        {/* Section 1: تحسين (5) */}
        <div>
          <div className="flex items-center gap-1.5 mb-1.5 text-[11px] font-bold text-zinc-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>تحسين</span>
            <span className="rounded-full bg-zinc-800 px-1.5 py-0.2 text-[9px] text-zinc-400">5</span>
          </div>
          <div
            onClick={(e) => isInteractive && e.stopPropagation()}
            className="grid grid-cols-3 gap-2"
          >
            {optimizeTools.slice(0, 3).map((tool) => {
              const IconComp = tool.icon;
              const isSel = selectedPdfTool === tool.title;
              return (
                <button
                  key={tool.title}
                  type="button"
                  onClick={() => setSelectedPdfTool(tool.title)}
                  className={`rounded-xl border p-2.5 text-right transition ${
                    isSel
                      ? 'border-emerald-500/60 bg-[#131C18]'
                      : 'border-zinc-800/90 bg-[#111413] hover:border-zinc-700'
                  }`}
                >
                  <div className="mb-2 flex h-10 w-full items-center justify-center rounded-lg border border-dashed border-zinc-800 bg-[#0D100F]">
                    <IconComp className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-white">{tool.title}</span>
                    <IconComp className="h-3 w-3 text-zinc-500" />
                  </div>
                  <p className="mt-0.5 text-[9px] text-zinc-400 line-clamp-1">{tool.desc}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section 2: تنظيم (7) */}
        <div>
          <div className="flex items-center gap-1.5 mb-1.5 text-[11px] font-bold text-zinc-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>تنظيم</span>
            <span className="rounded-full bg-zinc-800 px-1.5 py-0.2 text-[9px] text-zinc-400">7</span>
          </div>
          <div
            onClick={(e) => isInteractive && e.stopPropagation()}
            className="grid grid-cols-3 gap-2"
          >
            {organizeTools.map((tool) => {
              const IconComp = tool.icon;
              const isSel = selectedPdfTool === tool.title;
              return (
                <button
                  key={tool.title}
                  type="button"
                  onClick={() => setSelectedPdfTool(tool.title)}
                  className={`rounded-xl border p-2.5 text-right transition ${
                    isSel
                      ? 'border-emerald-500/60 bg-[#131C18]'
                      : 'border-zinc-800/90 bg-[#111413] hover:border-zinc-700'
                  }`}
                >
                  <div className="mb-2 flex h-10 w-full items-center justify-center rounded-lg border border-dashed border-zinc-800 bg-[#0D100F]">
                    <IconComp className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-white">{tool.title}</span>
                    <IconComp className="h-3 w-3 text-zinc-500" />
                  </div>
                  <p className="mt-0.5 text-[9px] text-zinc-400 line-clamp-1">{tool.desc}</p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // FRAME 5: IDRISSCLAW — THE AI AGENT OS (`image_5b031a.jpg` + `logo no bg.png`)
  // --------------------------------------------------------------------------
  if (frame.id === 'idrissclaw-os') {
    return (
      <div className="grid h-full w-full grid-cols-12 bg-[#F8FAFC] text-[#0F172A] select-none overflow-hidden font-sans">
        {/* LEFT SIDEBAR (2 cols): Claymation Logo, Navigation & "Small claw, big dreams." */}
        <div className="col-span-2 flex flex-col justify-between border-r border-slate-200/80 bg-white p-3">
          <div>
            {/* macOS Window Traffic Lights */}
            <div className="flex items-center gap-1.5 mb-2.5">
              <span className="h-2 w-2 rounded-full bg-[#FF5F56]" />
              <span className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
              <span className="h-2 w-2 rounded-full bg-[#27C93F]" />
            </div>

            {/* Brand Lockup */}
            <div className="flex items-center gap-1.5 mb-3">
              <IdrissClawMascot className="h-7 w-7 shrink-0" />
              <div>
                <div className="text-[11px] font-extrabold text-[#1E3A8A] leading-none">
                  IdrissClaw
                </div>
                <div className="text-[8px] text-slate-400 mt-0.5">The AI Agent OS</div>
              </div>
            </div>

            {/* Nav Items */}
            <div className="space-y-1 text-[10px] font-medium text-slate-600">
              <div className="flex items-center gap-1.5 rounded-lg bg-red-50 px-2 py-1 text-[#E02E16] font-semibold">
                <Home className="h-3 w-3" /> Home
              </div>
              <div className="flex items-center justify-between px-2 py-1">
                <span className="flex items-center gap-1.5">
                  <Bot className="h-3 w-3" /> Agents
                </span>
                <span className="rounded-full bg-slate-100 px-1.5 text-[8px]">3</span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1">
                <MessageSquare className="h-3 w-3" /> Chat
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1">
                <Folder className="h-3 w-3" /> Projects
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1">
                <Wrench className="h-3 w-3" /> Tools
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1">
                <Box className="h-3 w-3" /> MCP
              </div>
            </div>
          </div>

          {/* Bottom Mascot Sticker ("Small claw, big dreams.") */}
          <div className="flex flex-col items-center text-center pt-2 border-t border-slate-100">
            <span className="text-[8px] italic text-blue-600 font-medium">
              Small claw, big dreams.
            </span>
            <IdrissClawMascot className="h-9 w-9 mt-0.5" />
          </div>
        </div>

        {/* CENTER WORKSPACE (7 cols): Greeting, Prompt Box, Recent Projects & Active Agents */}
        <div className="col-span-7 flex flex-col justify-between p-4">
          {/* Top Search Bar */}
          <div className="flex items-center justify-between rounded-xl border border-slate-200/90 bg-white px-3 py-1.5 text-[10px] text-slate-400 shadow-2xs">
            <span className="flex items-center gap-1.5">
              <Search className="h-3 w-3" /> Search or ask IdrissClaw anything...
            </span>
            <span className="rounded border border-slate-200 px-1 text-[8px] font-mono">⌘K</span>
          </div>

          {/* Greeting & Claymation Mascot with Laptop */}
          <div className="flex items-center justify-between my-1">
            <div>
              <div className="text-xs font-semibold text-slate-700">
                Good evening, Idriss 👋
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-[#0F172A]">
                What shall we <span className="text-[#E02E16]">claw</span> today?
              </h3>
              <p className="text-[10px] text-slate-400">
                Research, code, automate, and do more — together.
              </p>
            </div>
            <IdrissClawMascot className="h-16 w-20 shrink-0" withLaptop={true} />
          </div>

          {/* Interactive Prompt Box */}
          <div
            onClick={(e) => isInteractive && e.stopPropagation()}
            className="rounded-2xl border border-slate-200 bg-white p-2.5 shadow-xs"
          >
            <input
              type="text"
              value={clawPrompt}
              onChange={(e) => setClawPrompt(e.target.value)}
              readOnly={!isInteractive}
              placeholder="Ask IdrissClaw anything..."
              className="w-full bg-transparent text-[11px] text-slate-800 placeholder:text-slate-400 focus:outline-none"
            />
            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-slate-400">
                <span className="rounded-full border border-slate-200 p-1">
                  <Paperclip className="h-2.5 w-2.5" />
                </span>
                <span className="rounded-full border border-slate-200 p-1">
                  <Globe className="h-2.5 w-2.5" />
                </span>
                <span className="rounded-full border border-slate-200 p-1">
                  <Plus className="h-2.5 w-2.5" />
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() =>
                    setActiveModel((m) => (m === 'GPT-4o' ? 'Claude 3.5' : 'GPT-4o'))
                  }
                  className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[9.5px] font-semibold text-slate-700"
                >
                  {activeModel} ▾
                </button>
                <button
                  type="button"
                  onClick={() => setClawPrompt('Browsing algerialawlibrary.com via Research Agent...')}
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E02E16] text-white shadow-xs"
                >
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom 2 Columns: Recent Projects & Active Agents */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            {/* Recent Projects */}
            <div className="rounded-xl border border-slate-200/80 bg-white p-2.5">
              <div className="flex items-center justify-between text-[10px] font-bold text-slate-800 mb-1.5">
                <span>Recent Projects</span>
                <span className="text-[8.5px] font-normal text-slate-400">View all →</span>
              </div>
              <div className="space-y-1.5 text-[9.5px]">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-slate-800">Algerian Legal Research</div>
                    <div className="text-[8px] text-slate-400">Legal research • 2h ago</div>
                  </div>
                  <ChevronRight className="h-3 w-3 text-slate-300" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-slate-800">PC Build Guide</div>
                    <div className="text-[8px] text-slate-400">Hardware • 1d ago</div>
                  </div>
                  <ChevronRight className="h-3 w-3 text-slate-300" />
                </div>
              </div>
            </div>

            {/* Active Agents */}
            <div className="rounded-xl border border-slate-200/80 bg-white p-2.5">
              <div className="flex items-center justify-between text-[10px] font-bold text-slate-800 mb-1.5">
                <span>Active Agents</span>
                <span className="text-[8.5px] font-normal text-slate-400">View all →</span>
              </div>
              <div className="space-y-1.5 text-[9.5px]">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-slate-800 flex items-center gap-1">
                      Research Agent <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <div className="text-[8px] text-slate-400">Browsing • algerialawlibrary.com</div>
                  </div>
                  <ChevronRight className="h-3 w-3 text-slate-300" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-slate-800 flex items-center gap-1">
                      Legal Assistant <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <div className="text-[8px] text-slate-400">RAG • Algerian laws</div>
                  </div>
                  <ChevronRight className="h-3 w-3 text-slate-300" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL (3 cols): Quick Tools, Model Providers & System Status */}
        <div className="col-span-3 flex flex-col justify-between border-l border-slate-200/80 bg-white p-3">
          {/* Top User Pill */}
          <div className="flex items-center justify-end gap-1.5">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1E293B] text-[8.5px] font-bold text-white">
              ID
            </span>
            <span className="text-[10px] font-semibold text-slate-700">Idriss ▾</span>
          </div>

          {/* Quick Tools */}
          <div>
            <div className="text-[9.5px] font-bold text-slate-700 mb-1.5">⚡ Quick Tools</div>
            <div className="grid grid-cols-2 gap-1 text-[8.5px] font-medium text-slate-600">
              <div className="rounded-lg border border-slate-200 p-1.5">📁 File Manager</div>
              <div className="rounded-lg border border-slate-200 p-1.5">＞_ Terminal</div>
              <div className="rounded-lg border border-slate-200 p-1.5">🌐 Browser</div>
              <div className="rounded-lg border border-slate-200 p-1.5">🔗 MCP Tools</div>
            </div>
          </div>

          {/* Model Providers */}
          <div>
            <div className="flex items-center justify-between text-[9.5px] font-bold text-slate-700 mb-1">
              <span>Model Providers</span>
              <span className="text-[8px] font-normal text-slate-400">Manage</span>
            </div>
            <div className="space-y-1 text-[8.5px]">
              {[
                { name: 'OpenAI', sub: 'GPT-4o' },
                { name: 'Anthropic', sub: 'Claude 3.5' },
                { name: 'Google', sub: 'Gemini 1.5 Pro' },
                { name: 'Ollama', sub: 'Llama 3.1' }
              ].map((mp) => (
                <div key={mp.name} className="flex items-center justify-between">
                  <span className="font-semibold text-slate-700">
                    {mp.name} <span className="font-normal text-slate-400">• {mp.sub}</span>
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
              ))}
            </div>
          </div>

          {/* System Status (`CPU 12%`, `RAM 36%`, `Disk 42%`) */}
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-2">
            <div className="flex items-center gap-1 text-[8.5px] font-semibold text-emerald-600 mb-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> All systems operational
            </div>
            <div className="grid grid-cols-3 gap-1 text-center">
              <div className="rounded bg-white p-1 border border-slate-100">
                <div className="text-[7.5px] text-slate-400">CPU</div>
                <div className="text-[9.5px] font-bold text-slate-800">12%</div>
              </div>
              <div className="rounded bg-white p-1 border border-slate-100">
                <div className="text-[7.5px] text-slate-400">RAM</div>
                <div className="text-[9.5px] font-bold text-slate-800">36%</div>
              </div>
              <div className="rounded bg-white p-1 border border-slate-100">
                <div className="text-[7.5px] text-slate-400">Disk</div>
                <div className="text-[9.5px] font-bold text-slate-800">42%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // PARAMETERISED PROJECT SCREENS
  // Every `mini` frame renders through one shared archetype component, so new
  // corridor frames are added as config rather than new bespoke JSX.
  // This branch MUST stay above the fallback return at the end of this
  // function, or those frames would silently render the MCP screen instead.
  // FRAME 6: IDRISSCLAW — MCP & ACTIVE LEGAL AGENTS ORCHESTRATOR
  // --------------------------------------------------------------------------
  return (
    <div className="flex h-full w-full flex-col justify-between bg-[#F8FAFC] p-5 sm:p-6 text-[#0F172A] select-none overflow-hidden font-sans">
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2.5">
          <IdrissClawMascot className="h-8 w-8" />
          <div>
            <div className="text-xs font-extrabold text-[#1E3A8A]">
              IdrissClaw — Model Context Protocol (MCP) Orchestrator
            </div>
            <div className="text-[10px] text-slate-400">
              Connected to Algeria Law Library RAG &amp; محامي PDF Local Engine
            </div>
          </div>
        </div>
        <span className="rounded-full bg-red-500/10 px-2.5 py-1 text-[10px] font-bold text-[#E02E16]">
          ● 4 Agents Active
        </span>
      </div>

      <div className="grid grid-cols-12 gap-3 my-auto py-2">
        <div className="col-span-5 space-y-2">
          {[
            { name: 'Research Agent', task: 'Browsing • algerialawlibrary.com', status: 'ONLINE' },
            { name: 'Legal Assistant', task: 'RAG • 30,243 Algerian Law Articles', status: 'ONLINE' },
            { name: 'Coding Agent', task: 'Editing files • ~/projects/pdf-lawyer', status: 'ACTIVE' },
            { name: 'Automation Agent', task: 'MCP • 3 local tools connected', status: 'READY' }
          ].map((ag) => (
            <div
              key={ag.name}
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-2.5 shadow-2xs"
            >
              <div>
                <div className="text-xs font-bold text-slate-800">{ag.name}</div>
                <div className="text-[10px] text-slate-400">{ag.task}</div>
              </div>
              <span className="rounded bg-emerald-50 px-2 py-0.5 font-mono text-[9px] font-bold text-emerald-600">
                {ag.status}
              </span>
            </div>
          ))}
        </div>

        <div className="col-span-7 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xs flex flex-col justify-between font-mono text-[10px]">
          <div className="space-y-1.5">
            <div className="text-[#E02E16] font-bold">// LIVE MCP EXECUTION LOG</div>
            <div className="text-slate-600">
              [12:04:01] Research Agent → GET https://algerialawlibrary.com/api/jora
            </div>
            <div className="text-slate-600">
              [12:04:02] Legal Assistant → Retrieved 4 Supreme Court rulings (المحكمة العليا)
            </div>
            <div className="text-slate-600">
              [12:04:03] Automation Agent → Invoking محامي PDF offline redaction tool
            </div>
            <div className="text-emerald-600 font-bold">
              [12:04:04] ✓ Synthesis complete. Zero cloud data leakage.
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-slate-100 pt-2.5 font-sans">
            <span className="text-[10px] italic text-blue-600 font-medium">
              &ldquo;Your AI teammate is always here!&rdquo;
            </span>
            <IdrissClawMascot className="h-8 w-8" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-slate-200 pt-2.5 text-[10px] text-slate-400">
        <span>MCP Integration • OpenAI GPT-4o • Claude 3.5 • Gemini 1.5 Pro • Ollama</span>
        <span className="font-mono text-slate-600 font-semibold">CPU 12% • RAM 36%</span>
      </div>
    </div>
  );
};

// ============================================================================
// MAIN SPATIAL PORTFOLIO APPLICATION
// ============================================================================
export default function App() {
  // Primary Mode: 'intro' | 'works' | 'about' | 'contact'
  const [mode, setMode] = useState('intro');

  // Intro Typing Sequence State (00:00 - 00:03 in video)
  const fullIntroName = 'Idriss Zaghez';
  const fullIntroRole = 'Lawyer & Legal Tech Architect';
  const [typedName, setTypedName] = useState('');
  const [typedRole, setTypedRole] = useState('');
  const [introPhase, setIntroPhase] = useState('typing-name');

  // Works Sub-State: 'corridor' (3D angled hallway) vs 'stepped' (flat zoomed-in horizontal strip)
  const [worksView, setWorksView] = useState('corridor');
  const [activeWorkIndex, setActiveWorkIndex] = useState(0);
  const [showHowItWorks, setShowHowItWorks] = useState(true);

  // 3D Corridor Camera Drag Look-Around State
  const [cameraDrag, setCameraDrag] = useState({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });

  // About Mode Active Card Index (0 to 3 -> 1/4 to 4/4)
  const [activeAboutIndex, setActiveAboutIndex] = useState(0);

  // Custom Portrait Photo Upload & Color/Monochrome Toggle in `About -> Profile`
  const [customPhotoUrl, setCustomPhotoUrl] = useState(null);
  const [isPortraitMonochrome, setIsPortraitMonochrome] = useState(false);
  const fileInputRef = useRef(null);

  // Contact Mode Cal.com Interactive State
  const [selectedCalDate, setSelectedCalDate] = useState(3);
  const [calTimeFormat, setCalTimeFormat] = useState('12h');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [hoveredBottomUrl, setHoveredBottomUrl] = useState('www.linkedin.com/in/idriss-zaghez/');

  // Multiplayer Cursors State
  const [clientCursor, setClientCursor] = useState({ x: 540, y: 520 });
  const [idrissCursor, setIdrissCursor] = useState({ x: 780, y: 420 });

  // Handle Custom Photo Upload for Profile Card
  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCustomPhotoUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // ==========================================================================
  // SEQUENCE 1: INTRO TYPING ANIMATION EFFECT (00:00 - 00:03)
  // ==========================================================================
  useEffect(() => {
    if (mode !== 'intro') return;

    let timeout;
    if (introPhase === 'typing-name') {
      if (typedName.length < fullIntroName.length) {
        timeout = setTimeout(() => {
          setTypedName(fullIntroName.slice(0, typedName.length + 1));
        }, 68);
      } else {
        timeout = setTimeout(() => setIntroPhase('typing-role'), 180);
      }
    } else if (introPhase === 'typing-role') {
      if (typedRole.length < fullIntroRole.length) {
        timeout = setTimeout(() => {
          setTypedRole(fullIntroRole.slice(0, typedRole.length + 1));
        }, 36);
      } else {
        setIntroPhase('done');
      }
    } else if (introPhase === 'done') {
      timeout = setTimeout(() => {
        setMode('works');
        setWorksView('corridor');
        setShowHowItWorks(true);
      }, 1100);
    }

    return () => clearTimeout(timeout);
  }, [mode, introPhase, typedName, typedRole]);

  const replayIntro = () => {
    setTypedName('');
    setTypedRole('');
    setIntroPhase('typing-name');
    setMode('intro');
  };

  // ==========================================================================
  // MULTIPLAYER CURSORS: CLIENT FOLLOWER & AUTONOMOUS "IDRISS" CURSOR
  // ==========================================================================
  useEffect(() => {
    const handleMouseMove = (e) => {
      setClientCursor({ x: e.clientX + 12, y: e.clientY + 18 });

      if (isDraggingRef.current && mode === 'works' && worksView === 'corridor') {
        const dx = (e.clientX - dragStartRef.current.x) * 0.08;
        const dy = (e.clientY - dragStartRef.current.y) * 0.05;
        setCameraDrag({
          x: Math.max(-18, Math.min(18, dx)),
          y: Math.max(-10, Math.min(10, dy))
        });
      }
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mode, worksView]);

  // Autonomous "Idriss" purple cursor patrol loop
  useEffect(() => {
    const waypoints =
      mode === 'intro'
        ? [
            { x: window.innerWidth * 0.72, y: window.innerHeight * 0.66 },
            { x: window.innerWidth * 0.54, y: window.innerHeight * 0.56 }
          ]
        : mode === 'works' && worksView === 'corridor'
        ? [
            { x: window.innerWidth * 0.62, y: window.innerHeight * 0.64 },
            { x: window.innerWidth * 0.68, y: window.innerHeight * 0.48 },
            { x: window.innerWidth * 0.58, y: window.innerHeight * 0.68 }
          ]
        : mode === 'works' && worksView === 'stepped'
        ? [
            { x: window.innerWidth * 0.76, y: window.innerHeight * 0.75 },
            { x: window.innerWidth * 0.71, y: window.innerHeight * 0.32 }
          ]
        : mode === 'about'
        ? [
            { x: window.innerWidth * 0.58, y: window.innerHeight * 0.42 },
            { x: window.innerWidth * 0.68, y: window.innerHeight * 0.78 }
          ]
        : [
            { x: window.innerWidth * 0.86, y: window.innerHeight * 0.89 },
            { x: window.innerWidth * 0.75, y: window.innerHeight * 0.22 }
          ];

    let idx = 0;
    setIdrissCursor(waypoints[0]);
    const interval = setInterval(() => {
      idx = (idx + 1) % waypoints.length;
      setIdrissCursor(waypoints[idx]);
    }, 2400);

    return () => clearInterval(interval);
  }, [mode, worksView, activeWorkIndex, activeAboutIndex]);

  // ==========================================================================
  // KEYBOARD & WHEEL NAVIGATION (ARROWS, ESCAPE, SCROLL TO WALK FRAMES)
  // ==========================================================================
  const stepWorkPrev = useCallback(() => {
    setShowHowItWorks(false);
    if (worksView === 'corridor') {
      setWorksView('stepped');
      setActiveWorkIndex(0);
    } else {
      setActiveWorkIndex((prev) => (prev - 1 + WORKS_FRAMES.length) % WORKS_FRAMES.length);
    }
  }, [worksView]);

  const stepWorkNext = useCallback(() => {
    setShowHowItWorks(false);
    if (worksView === 'corridor') {
      setWorksView('stepped');
      setActiveWorkIndex(0);
    } else {
      setActiveWorkIndex((prev) => (prev + 1) % WORKS_FRAMES.length);
    }
  }, [worksView]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (mode === 'intro') {
        if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
          setMode('works');
        }
        return;
      }

      if (e.key === 'Escape') {
        if (mode === 'works' && worksView === 'stepped') {
          setWorksView('corridor');
        } else if (showHowItWorks) {
          setShowHowItWorks(false);
        }
      } else if (e.key === 'ArrowRight') {
        if (mode === 'works') stepWorkNext();
        if (mode === 'about') setActiveAboutIndex((p) => Math.min(3, p + 1));
      } else if (e.key === 'ArrowLeft') {
        if (mode === 'works') stepWorkPrev();
        if (mode === 'about') setActiveAboutIndex((p) => Math.max(0, p - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mode, worksView, showHowItWorks, stepWorkNext, stepWorkPrev]);

  const lastWheelRef = useRef(0);
  const handleWheel = (e) => {
    if (mode === 'intro' || mode === 'contact') return;
    const now = Date.now();
    if (now - lastWheelRef.current < 420) return;
    if (Math.abs(e.deltaY) < 18 && Math.abs(e.deltaX) < 18) return;

    lastWheelRef.current = now;
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

    if (mode === 'works') {
      if (delta > 0) stepWorkNext();
      else stepWorkPrev();
    } else if (mode === 'about') {
      if (delta > 0) setActiveAboutIndex((p) => Math.min(3, p + 1));
      else setActiveAboutIndex((p) => Math.max(0, p - 1));
    }
  };

  const leftWallFrames = useMemo(
    () => WORKS_FRAMES.filter((f) => f.wall === 'left'),
    []
  );
  const rightWallFrames = useMemo(
    () => WORKS_FRAMES.filter((f) => f.wall === 'right'),
    []
  );

  // ---------------------------------------------------------------------------
  // 3D CORRIDOR GEOMETRY
  //
  // Every frame is positioned at its OWN depth on its wall rather than sitting
  // on one flat plane. The browser's `perspective` then shrinks and converges
  // each frame toward the vanishing point for free — that stagger is what makes
  // the row read as a corridor you are standing inside, instead of two placards.
  // ---------------------------------------------------------------------------
  const CORRIDOR = {
    perspective: 1200,
    frameW: 640,
    frameH: 430,
    // Large enough that the NEAREST frame runs off the screen edge — that
    // partial occlusion is what makes the viewer feel inside the corridor
    // rather than looking at a row of cards.
    wallX: 820,
    // Each frame is rotated `angle` degrees, so it occupies frameW*sin(angle)
    // of z-depth. depthStep MUST exceed that or consecutive frames intersect
    // in 3D and smear into each other instead of receding.
    depthStep: 430,
    angle: 30, // degrees each frame turns inward toward the viewer
    fade: 0.06, // opacity falloff with depth
    vanishZ: 3550 // where the centre badge sits, beyond the last frame
  };

  // Flattened, side-tagged walk order so both walls share one render path.
  const corridorFrames = useMemo(
    () => [
      ...leftWallFrames.map((frame, index) => ({ frame, index, side: -1 })),
      ...rightWallFrames.map((frame, index) => ({ frame, index, side: 1 }))
    ],
    [leftWallFrames, rightWallFrames]
  );

  const october2026Cells = useMemo(() => {
    const leadingBlanks = [null, null, null, null];
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    return [...leadingBlanks, ...days];
  }, []);

  const timeSlots = useMemo(() => {
    return calTimeFormat === '12h'
      ? ['8:45pm', '9:00pm', '9:15pm', '9:30pm', '9:45pm']
      : ['20:45', '21:00', '21:15', '21:30', '21:45'];
  }, [calTimeFormat]);

  return (
    <div
      onWheel={handleWheel}
      className="relative h-screen w-screen overflow-hidden bg-[#FAFAFA] font-sans text-[#09090B] select-none"
    >
      {/* Subtle Figma Infinite Canvas Dot Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-45"
        style={{
          backgroundImage: 'radial-gradient(#D4D4D8 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* =====================================================================
          MULTIPLAYER LIVE CURSORS ("Client" Orange & "Idriss" Purple)
      ===================================================================== */}
      <MultiplayerCursor
        x={clientCursor.x}
        y={clientCursor.y}
        label="Client"
        color="#F97316"
        isOrangeClient={true}
      />
      <MultiplayerCursor
        x={idrissCursor.x}
        y={idrissCursor.y}
        label="Idriss"
        color="#A855F7"
        isOrangeClient={false}
      />

      {/* =====================================================================
          TOP-LEFT DYNAMIC BREADCRUMB (`Idriss Zaghez / Works` + LinkedIn Link)
      ===================================================================== */}
      {mode !== 'intro' && (
        <header className="fixed left-7 top-6 z-40 flex items-center justify-between right-7 pointer-events-none">
          <div className="pointer-events-auto flex items-center gap-2 text-[15px] tracking-tight">
            <button
              type="button"
              onClick={() => {
                setMode('works');
                setWorksView('corridor');
              }}
              className="font-bold text-[#09090B] hover:opacity-75 transition"
            >
              Idriss Zaghez
            </button>
            <span className="text-zinc-400 font-normal">/</span>
            <span className="text-zinc-400 font-normal capitalize">
              {mode === 'works' ? 'Works' : mode === 'about' ? 'About' : 'Contact'}
            </span>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="Idriss Zaghez on LinkedIn"
              className="ml-1.5 inline-flex items-center gap-1 rounded-md border border-zinc-200 bg-white px-2 py-0.5 text-[11px] font-medium text-zinc-600 shadow-2xs hover:border-[#0099FF] hover:text-[#0099FF] transition"
            >
              <span>in/idriss-zaghez</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>

          <div className="pointer-events-auto flex items-center gap-2">
            {mode === 'works' && worksView === 'stepped' && (
              <button
                type="button"
                onClick={() => setWorksView('corridor')}
                className="rounded-lg border border-zinc-200/90 bg-white/90 px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-2xs backdrop-blur-md hover:border-[#0099FF] hover:text-[#0099FF] transition"
              >
                Esc • Back to 3D Corridor
              </button>
            )}
            <button
              type="button"
              onClick={replayIntro}
              title="Replay Typing Intro"
              className="rounded-lg border border-zinc-200/90 bg-white/90 px-2.5 py-1.5 text-xs font-medium text-zinc-500 shadow-2xs backdrop-blur-md hover:text-zinc-900 transition"
            >
              Intro
            </button>
          </div>
        </header>
      )}

      {/* =====================================================================
          SEQUENCE 1: INTERACTIVE TYPING INTRO (`00:00 – 00:03` IN VIDEO)
      ===================================================================== */}
      {mode === 'intro' && (
        <div className="relative flex h-full w-full items-center justify-center px-6">
          <FigmaSelectionBox
            label="Portfolio"
            dimensionsBadge="1100 × 440"
            active={true}
            className="w-full max-w-[1020px] h-[390px] sm:h-[430px] bg-white"
          >
            <div className="flex h-full w-full flex-col items-center justify-center px-6 text-center">
              <h1 className="font-sans text-5xl sm:text-7xl md:text-[82px] font-bold tracking-[-0.04em] text-[#09090B] leading-none flex items-center justify-center">
                <span>{typedName}</span>
                {introPhase === 'typing-name' && (
                  <span className="ml-1 inline-block h-[0.88em] w-[3.5px] bg-[#0099FF] animate-pulse" />
                )}
              </h1>

              <div className="mt-4 h-9 flex items-center justify-center">
                <p className="font-sans text-lg sm:text-2xl font-normal tracking-tight text-[#8E8E93] flex items-center">
                  <span>{typedRole}</span>
                  {introPhase !== 'typing-name' && (
                    <span className="ml-1 inline-block h-[1.1em] w-[2px] bg-[#0099FF] animate-pulse" />
                  )}
                </p>
              </div>
            </div>
          </FigmaSelectionBox>

          <button
            type="button"
            onClick={() => {
              setMode('works');
              setWorksView('corridor');
              setShowHowItWorks(true);
            }}
            className="fixed bottom-6 right-7 z-40 rounded-lg border border-zinc-200 bg-white px-3.5 py-1.5 text-xs font-medium text-zinc-700 shadow-sm hover:bg-zinc-100 transition"
          >
            Skip
          </button>
        </div>
      )}

      {/* =====================================================================
          SEQUENCE 2A: `WORKS` MODE — 3D PERSPECTIVE CORRIDOR OVERVIEW
      ===================================================================== */}
      {mode === 'works' && worksView === 'corridor' && (
        <div
          onMouseDown={(e) => {
            isDraggingRef.current = true;
            dragStartRef.current = { x: e.clientX, y: e.clientY };
          }}
          className="relative flex h-full w-full items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing"
          style={{ perspective: `${CORRIDOR.perspective}px`, perspectiveOrigin: '50% 50%' }}
        >
          {/* Floor and ceiling shading — sells the tunnel volume. */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-[#e4e4e7] via-[#f1f1f2]/70 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-[#ddddE1] via-[#efeff0]/70 to-transparent" />

          <div
            className="relative h-full w-full transition-transform duration-200 ease-out"
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateY(${cameraDrag.x}deg) rotateX(${-cameraDrag.y}deg)`
            }}
          >
            {/* CORRIDOR WALLS — each frame recedes one step further into z */}
            {corridorFrames.map(({ frame, index: i, side }) => {
              const globalIndex = WORKS_FRAMES.findIndex((f) => f.id === frame.id);
              return (
                <div
                  key={frame.id}
                  onClick={() => {
                    setActiveWorkIndex(globalIndex);
                    setWorksView('stepped');
                    setShowHowItWorks(false);
                  }}
                  className="group absolute left-1/2 top-1/2 cursor-pointer"
                  style={{
                    width: `${CORRIDOR.frameW}px`,
                    height: `${CORRIDOR.frameH}px`,
                    marginLeft: `${-CORRIDOR.frameW / 2}px`,
                    marginTop: `${-CORRIDOR.frameH / 2}px`,
                    transformStyle: 'preserve-3d',
                    transform: `translate3d(${side * CORRIDOR.wallX}px, 0px, ${-i * CORRIDOR.depthStep}px) rotateY(${side * CORRIDOR.angle}deg)`,
                    opacity: Math.max(0.32, 1 - i * CORRIDOR.fade),
                    zIndex: 200 - i
                  }}
                >
                  <div className="absolute -top-6 left-0 w-full truncate font-sans text-[11px] font-medium text-zinc-400 transition group-hover:text-[#0099FF]">
                    {frame.shortLabel}
                  </div>
                  <div className="h-full w-full overflow-hidden rounded-sm border border-zinc-200/90 bg-white shadow-xl transition group-hover:ring-2 group-hover:ring-[#0099FF]">
                    <WorkFrameContent frame={frame} isInteractive={false} />
                  </div>
                  <div className="absolute -bottom-6 left-0 text-[10px] font-medium text-[#0099FF] opacity-0 transition group-hover:opacity-100">
                    Click to inspect ↗
                  </div>
                </div>
              );
            })}

            {/* CENTER VANISHING POINT FOCAL CARD (3 Custom Logos Badge) */}
            <div
              onClick={() => {
                setActiveWorkIndex(0);
                setWorksView('stepped');
                setShowHowItWorks(false);
              }}
              className="group absolute left-1/2 top-1/2 cursor-pointer"
              style={{
                width: '150px',
                height: '84px',
                marginLeft: '-75px',
                marginTop: '-42px',
                transformStyle: 'preserve-3d',
                transform: `translate3d(0px, 0px, ${-CORRIDOR.vanishZ}px)`
              }}
            >
              <div className="flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-zinc-200 bg-white p-2 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:border-[#0099FF]">
                <div className="flex items-center gap-2">
                  <AlgeriaLawLogo className="h-6 w-6" />
                  <PdfLawyerLogo className="h-6 w-6" />
                  <IdrissClawMascot className="h-6 w-6" />
                </div>
                <span className="mt-1 font-mono text-[8px] font-bold uppercase tracking-wider text-zinc-400">
                  3 FLAGSHIP PLATFORMS
                </span>
              </div>
            </div>
          </div>

          {/* =================================================================
              FLOATING 3D-TILTED "HOW THIS WORKS" MODAL CARD (`00:05 – 00:07`)
          ================================================================= */}
          {showHowItWorks && (
            <div
              className="fixed left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2"
              style={{ perspective: '1000px' }}
            >
              <div
                style={{
                  transform: 'rotateX(6deg) rotateY(-8deg) rotateZ(-1.5deg)'
                }}
                className="w-[340px] sm:w-[375px] rounded-2xl border border-zinc-200/90 bg-white/95 p-7 shadow-[0_30px_90px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all"
              >
                <h2 className="font-sans text-xl font-bold tracking-tight text-zinc-900 mb-4">
                  How this works
                </h2>

                <div className="space-y-3 text-[13px] leading-relaxed text-zinc-500">
                  <p>
                    <strong className="font-semibold text-zinc-900">Scroll</strong> or use the{' '}
                    <strong className="font-semibold text-zinc-900">arrows</strong> below to walk from frame to frame.
                  </p>
                  <p>
                    <strong className="font-semibold text-zinc-900">Click</strong> any frame to step up to it.{' '}
                    <strong className="font-semibold text-zinc-900">Drag</strong> to look around,{' '}
                    <strong className="font-semibold text-zinc-900">Esc</strong> to step back.
                  </p>
                  <p>
                    <strong className="font-semibold text-zinc-900">Visit live ↗</strong> under a frame opens{' '}
                    <strong className="font-semibold text-zinc-900">algerialawlibrary.com</strong> or LinkedIn.
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4">
                  <div>
                    <div className="font-sans text-xs font-bold text-zinc-900">
                      Idriss Zaghez
                    </div>
                    <div className="font-sans text-[11px] text-zinc-400">
                      Lawyer, Legal Tech Architect
                    </div>
                  </div>

                  <svg
                    width="68"
                    height="28"
                    viewBox="0 0 90 36"
                    fill="none"
                    className="text-[#00A6FF]"
                  >
                    <path
                      d="M6 28C14 10 20 6 22 24C24 14 31 12 34 23C37 15 44 13 48 22C53 13 62 9 68 20C73 16 79 14 85 17"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="mt-5 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setShowHowItWorks(false)}
                    className="rounded-xl bg-[#18181B] px-5 py-2 text-xs font-semibold text-white shadow-md hover:bg-black transition"
                  >
                    Got it
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* =====================================================================
          SEQUENCE 2B: `WORKS` MODE — STEPPED-IN HORIZONTAL FRAME WALK (`1 / 6` to `6 / 6`)
      ===================================================================== */}
      {mode === 'works' && worksView === 'stepped' && (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
          <div className="relative flex items-center justify-center w-full h-full">
            {WORKS_FRAMES.map((frame, index) => {
              const offset = index - activeWorkIndex;
              const isCurrent = offset === 0;
              const translateX = offset * 870;

              return (
                <div
                  key={frame.id}
                  onClick={() => {
                    if (!isCurrent) setActiveWorkIndex(index);
                  }}
                  style={{
                    transform: `translate3d(${translateX}px, -10px, 0) scale(${isCurrent ? 1 : 0.94})`,
                    transition: 'transform 520ms cubic-bezier(0.22, 1, 0.36, 1), opacity 400ms ease'
                  }}
                  className={`absolute w-[90vw] max-w-[800px] h-[450px] sm:h-[480px] ${
                    isCurrent ? 'z-20 cursor-default opacity-100' : 'z-10 cursor-pointer opacity-85 hover:opacity-100'
                  }`}
                >
                  <FigmaSelectionBox
                    label={frame.label}
                    active={isCurrent}
                    className="h-full w-full bg-white"
                  >
                    <WorkFrameContent frame={frame} isInteractive={isCurrent} />
                  </FigmaSelectionBox>

                  {/* Bottom Action Links Under Each Frame */}
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <a
                        href={frame.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-md border border-zinc-200 bg-white px-2.5 py-1 text-[11px] font-medium text-zinc-700 shadow-2xs hover:border-[#0099FF] hover:text-[#0099FF] transition"
                      >
                        <span>{frame.linkText}</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                      <a
                        href={LINKEDIN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-md border border-zinc-200 bg-white px-2.5 py-1 text-[11px] font-medium text-zinc-500 shadow-2xs hover:border-zinc-900 hover:text-zinc-900 transition"
                      >
                        <span>LinkedIn</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </div>

                    {isCurrent && (
                      <span className="font-mono text-[11px] text-zinc-400">
                        Interactive Frame • Use ← → arrows or scroll
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* =====================================================================
          SEQUENCE 3: `ABOUT` MODE — 4-CARD HORIZONTAL FIGMA STRIP (`1/4` to `4/4`)
          Featuring Idriss's Real Portrait Recreation (`image_5b0d47.jpg`) in Card 1/4!
      ===================================================================== */}
      {mode === 'about' && (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
          <div
            style={{
              transform: `translate3d(${(1.5 - activeAboutIndex) * 340}px, -8px, 0)`,
              transition: 'transform 520ms cubic-bezier(0.22, 1, 0.36, 1)'
            }}
            className="flex items-center gap-8 px-10"
          >
            {/* CARD 1/4: PROFILE (Idriss Zaghez Portrait `image_5b0d47.jpg` + Nested Blue Face Box + Upload) */}
            <div
              onClick={() => setActiveAboutIndex(0)}
              className="w-[380px] sm:w-[420px] h-[460px] shrink-0 cursor-pointer"
            >
              <FigmaSelectionBox
                label="Profile"
                active={activeAboutIndex === 0}
                className="h-full w-full bg-white p-6 sm:p-7 flex flex-col justify-between"
              >
                {/* Portrait Container with Nested #0099FF Face Bounding Box */}
                <div className="relative mx-auto flex h-[315px] w-full items-center justify-center overflow-hidden rounded-xs bg-[#D7C7B2]">
                  <IdrissPortraitArtwork
                    customPhotoUrl={customPhotoUrl}
                    isMonochrome={isPortraitMonochrome}
                  />

                  {/* Top-Right Controls inside Portrait: Color/B&W Toggle + Upload Raw Photo */}
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute right-2.5 top-2.5 z-30 flex items-center gap-1.5"
                  >
                    <button
                      type="button"
                      onClick={() => setIsPortraitMonochrome((m) => !m)}
                      className="rounded-md bg-black/65 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur-xs hover:bg-black transition"
                    >
                      {isPortraitMonochrome ? 'Color' : 'B&W'}
                    </button>
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      title="Upload raw photo file from device"
                      className="inline-flex items-center gap-1 rounded-md bg-white/90 px-2 py-1 text-[10px] font-semibold text-zinc-900 shadow-xs hover:bg-white transition"
                    >
                      <Upload className="h-2.5 w-2.5" />
                      <span>Photo</span>
                    </button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                  </div>

                  {/* Nested #0099FF Face-Detection Bounding Box with 4 Corner Handles */}
                  <div className="pointer-events-none absolute top-[28px] left-1/2 -translate-x-1/2 h-[125px] w-[125px] border-[1.5px] border-[#0099FF]">
                    <span className="absolute -left-[4px] -top-[4px] h-[7px] w-[7px] border-[1.5px] border-[#0099FF] bg-white" />
                    <span className="absolute -right-[4px] -top-[4px] h-[7px] w-[7px] border-[1.5px] border-[#0099FF] bg-white" />
                    <span className="absolute -bottom-[4px] -left-[4px] h-[7px] w-[7px] border-[1.5px] border-[#0099FF] bg-white" />
                    <span className="absolute -bottom-[4px] -right-[4px] h-[7px] w-[7px] border-[1.5px] border-[#0099FF] bg-white" />
                  </div>
                </div>

                {/* Bottom Identity Row + Direct LinkedIn Badge */}
                <div className="flex items-end justify-between pt-3">
                  <div>
                    <h2 className="font-sans text-3xl font-bold tracking-tight text-zinc-900">
                      Hi, I&apos;m Idriss.
                    </h2>
                    <span className="font-sans text-xs text-zinc-400">
                      Lawyer &amp; Legal Tech Architect
                    </span>
                  </div>

                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 rounded-lg bg-[#0A66C2] px-2.5 py-1.5 text-[11px] font-semibold text-white shadow-2xs hover:bg-[#084e96] transition"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </FigmaSelectionBox>
            </div>

            {/* CARD 2/4: ABOUT (Bio Headline, Works With & Open To Pills) */}
            <div
              onClick={() => setActiveAboutIndex(1)}
              className="w-[390px] sm:w-[440px] h-[460px] shrink-0 cursor-pointer"
            >
              <FigmaSelectionBox
                label="About"
                active={activeAboutIndex === 1}
                className="h-full w-full bg-white p-8 flex flex-col justify-between"
              >
                <div>
                  <h2 className="font-sans text-[27px] sm:text-[30px] font-bold leading-[1.14] tracking-tight text-zinc-900">
                    I build sovereign legal platforms, offline PDF suites, and AI agent operating systems.
                  </h2>
                  <p className="mt-4 font-sans text-[13.5px] leading-relaxed text-zinc-400">
                    Combining Algerian jurisprudence with full-stack AI engineering—creator of{' '}
                    <strong className="text-zinc-600">Algeria Law Library</strong>,{' '}
                    <strong className="text-zinc-600">محامي PDF (PDF Lawyer)</strong>, and{' '}
                    <strong className="text-zinc-600">IdrissClaw</strong>.
                  </p>
                </div>

                <div className="space-y-3.5 pt-4">
                  <div>
                    <div className="text-[11px] font-medium text-zinc-400 mb-1.5">
                      Works with
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {['Legal Tech', 'AI Agents', 'Offline-First Apps', 'Arabic NLP', 'Law Firms'].map(
                        (tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-800"
                          >
                            {tag}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] font-medium text-zinc-400 mb-1.5">
                      Open to
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {['Legal AI Advisory', 'Collaborations', 'Enterprise Licensing'].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FigmaSelectionBox>
            </div>

            {/* CARD 3/4: IN NUMBERS (Real Metrics from Idriss's Screenshots: 30.243, 1.595, 20+) */}
            <div
              onClick={() => setActiveAboutIndex(2)}
              className="w-[390px] sm:w-[430px] h-[460px] shrink-0 cursor-pointer"
            >
              <FigmaSelectionBox
                label="In numbers"
                active={activeAboutIndex === 2}
                className="h-full w-full bg-white p-8 flex flex-col justify-between"
              >
                <div className="flex items-baseline justify-between border-b border-zinc-100 pb-4">
                  <span className="font-sans text-5xl sm:text-[62px] font-bold tracking-tighter text-zinc-900 leading-none">
                    30.243
                  </span>
                  <span className="text-xs text-zinc-400 text-right">
                    legal articles indexed (مادة قانونية)
                  </span>
                </div>

                <div className="flex items-baseline justify-between border-b border-zinc-100 pb-4">
                  <span className="font-sans text-5xl sm:text-[62px] font-bold tracking-tighter text-zinc-900 leading-none">
                    1.595
                  </span>
                  <span className="text-xs text-zinc-400 text-right">
                    Supreme Court &amp; Council of State rulings
                  </span>
                </div>

                <div className="flex items-baseline justify-between">
                  <span className="font-sans text-5xl sm:text-[62px] font-bold tracking-tighter text-zinc-900 leading-none">
                    20+
                  </span>
                  <span className="text-xs text-zinc-400 text-right">
                    offline legal PDF tools in محامي PDF
                  </span>
                </div>
              </FigmaSelectionBox>
            </div>

            {/* CARD 4/4: EXPERIENCE (3 Custom Brand Logos: Algeria Law Library, محامي PDF, IdrissClaw) */}
            <div
              onClick={() => setActiveAboutIndex(3)}
              className="w-[410px] sm:w-[460px] h-[460px] shrink-0 cursor-pointer"
            >
              <FigmaSelectionBox
                label="Experience"
                active={activeAboutIndex === 3}
                className="h-full w-full bg-white p-8 flex flex-col justify-between"
              >
                {/* Row 1: Algeria Law Library */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-900/15 bg-[#F9F8F3] shadow-2xs">
                    <AlgeriaLawLogo className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-bold text-zinc-900">
                      Founder — Algeria Law Library
                    </h3>
                    <div className="text-xs text-zinc-400">
                      المكتبة القانونية الجزائرية (algerialawlibrary.com)
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-600">
                      533 statutory texts, 30,243 articles, and 1,595 Supreme Court &amp; Council of State rulings with an Arabic-native AI legal assistant.
                    </p>
                  </div>
                </div>

                {/* Row 2: PDF Lawyer (محامي PDF) */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#072819] shadow-2xs">
                    <PdfLawyerLogo className="h-9 w-9" />
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-bold text-zinc-900">
                      Creator — PDF Lawyer (محامي PDF)
                    </h3>
                    <div className="text-xs text-zinc-400">
                      أدوات PDF محلية للعمل القانوني • v1.0.1 PRO
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-600">
                      20+ 100% offline Arabic RTL-preserving PDF tools for compression, true pixel redaction, margin cropping, merging, and splitting.
                    </p>
                  </div>
                </div>

                {/* Row 3: IdrissClaw */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-2xs">
                    <IdrissClawMascot className="h-9 w-9" />
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-bold text-zinc-900">
                      Architect — IdrissClaw
                    </h3>
                    <div className="text-xs text-zinc-400">
                      The AI Agent OS • Multi-Agent &amp; MCP Desktop
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-600">
                      Desktop AI Agent OS orchestrating Research, Coding, Legal Assistant, and MCP Automation agents across GPT-4o, Claude 3.5, Gemini, and Ollama.
                    </p>
                  </div>
                </div>
              </FigmaSelectionBox>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          SEQUENCE 4: `CONTACT` MODE — INTERACTIVE CAL.COM FRAME + LINKEDIN
      ===================================================================== */}
      {mode === 'contact' && (
        <div className="relative flex h-full w-full items-center justify-center px-4 sm:px-8">
          <FigmaSelectionBox
            label="Contact"
            active={true}
            className="w-full max-w-[1000px] h-[540px] sm:h-[560px] bg-white p-7 sm:p-10 flex flex-col justify-between"
          >
            {/* Top Row: Headline on Left, Social Pills on Right (LinkedIn Highlighted in Black Pill!) */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h2 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
                  Let&apos;s build your next legal tech system
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-zinc-400">
                  Algeria Law Library, محامي PDF, IdrissClaw, or legal tech consulting. Pick a time below.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                {[
                  { label: 'AlgeriaLawLibrary', url: ALGERIA_LAW_URL, highlighted: false },
                  { label: 'LinkedIn', url: LINKEDIN_URL, highlighted: true },
                  { label: 'محامي PDF', url: LINKEDIN_URL, highlighted: false },
                  { label: 'IdrissClaw', url: LINKEDIN_URL, highlighted: false }
                ].map((soc) => (
                  <a
                    key={soc.label}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredBottomUrl(soc.url.replace('https://', ''))}
                    onMouseLeave={() => setHoveredBottomUrl('www.linkedin.com/in/idriss-zaghez/')}
                    className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                      soc.highlighted
                        ? 'bg-[#09090B] text-white shadow-xs'
                        : 'text-zinc-700 hover:bg-[#09090B] hover:text-white'
                    }`}
                  >
                    {soc.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Center Interactive Cal.com Widget */}
            <div className="mx-auto my-auto w-full max-w-[650px] rounded-2xl border border-zinc-100 bg-[#FCFCFA] p-5 shadow-2xs">
              {!bookingConfirmed ? (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Left 7 Columns: October 2026 Calendar Grid */}
                  <div className="md:col-span-7">
                    <div className="flex items-center justify-between mb-4">
                      <div className="font-sans text-sm font-semibold text-zinc-900">
                        October <span className="font-normal text-zinc-400">2026</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-400">
                        <button
                          type="button"
                          onClick={() => setSelectedCalDate((d) => Math.max(1, d - 1))}
                          className="p-1 hover:text-zinc-900"
                        >
                          <ChevronLeft className="h-3.5 w-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedCalDate((d) => Math.min(31, d + 1))}
                          className="p-1 hover:text-zinc-900"
                        >
                          <ChevronRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-7 gap-1 text-center font-sans text-[10px] font-semibold text-zinc-400 mb-2">
                      {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((d) => (
                        <div key={d}>{d}</div>
                      ))}
                    </div>

                    <div className="grid grid-cols-7 gap-1.5 text-center">
                      {october2026Cells.map((day, idx) => {
                        if (!day) return <div key={`empty-${idx}`} className="h-8" />;
                        const isSelected = day === selectedCalDate;
                        const isPast = day < 3;
                        return (
                          <button
                            key={day}
                            type="button"
                            disabled={isPast}
                            onClick={() => setSelectedCalDate(day)}
                            className={`relative flex h-8 w-full flex-col items-center justify-center rounded-lg text-xs font-medium transition ${
                              isSelected
                                ? 'bg-[#18181B] text-white font-bold shadow-sm'
                                : isPast
                                ? 'text-zinc-300 cursor-not-allowed'
                                : 'bg-zinc-100/80 text-zinc-700 hover:bg-zinc-200/80'
                            }`}
                          >
                            <span>{day}</span>
                            {day === 3 && (
                              <span
                                className={`h-1 w-1 rounded-full mt-0.5 ${
                                  isSelected ? 'bg-white' : 'bg-zinc-900'
                                }`}
                              />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right 5 Columns: Time Slots & 12h / 24h Switcher */}
                  <div className="md:col-span-5 flex flex-col justify-between border-t md:border-t-0 md:border-l border-zinc-200/70 pt-4 md:pt-0 md:pl-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="font-sans text-xs font-semibold text-zinc-900">
                        Sat <span className="text-zinc-400 font-normal">{selectedCalDate}rd</span>
                      </div>
                      <div className="inline-flex rounded-md bg-zinc-100 p-0.5 text-[10px] font-medium">
                        <button
                          type="button"
                          onClick={() => setCalTimeFormat('12h')}
                          className={`rounded px-2 py-0.5 transition ${
                            calTimeFormat === '12h' ? 'bg-white text-zinc-900 shadow-2xs' : 'text-zinc-400'
                          }`}
                        >
                          12h
                        </button>
                        <button
                          type="button"
                          onClick={() => setCalTimeFormat('24h')}
                          className={`rounded px-2 py-0.5 transition ${
                            calTimeFormat === '24h' ? 'bg-white text-zinc-900 shadow-2xs' : 'text-zinc-400'
                          }`}
                        >
                          24h
                        </button>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => {
                            setSelectedTimeSlot(slot);
                            setBookingConfirmed(true);
                          }}
                          className="w-full rounded-lg border border-zinc-200/90 bg-white py-2 text-center font-sans text-xs font-medium text-zinc-700 transition hover:border-[#09090B] hover:bg-[#09090B] hover:text-white"
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="py-8 text-center space-y-3">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                    <Check className="h-5 w-5" />
                  </div>
                  <h3 className="font-sans text-lg font-bold text-zinc-900">
                    Session Scheduled with Idriss Zaghez
                  </h3>
                  <p className="text-xs text-zinc-500">
                    October {selectedCalDate}, 2026 at{' '}
                    <strong className="text-zinc-800">{selectedTimeSlot}</strong> (Algiers CET)
                  </p>
                  <button
                    type="button"
                    onClick={() => setBookingConfirmed(false)}
                    className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-zinc-900 px-4 py-2 text-xs font-semibold text-white hover:bg-zinc-800"
                  >
                    Change Date / Time
                  </button>
                </div>
              )}
            </div>

            <div className="text-center font-sans text-sm font-bold tracking-tight text-zinc-700">
              Cal.com
            </div>
          </FigmaSelectionBox>

          {/* Bottom-Left Browser URL Watermark (`www.linkedin.com/in/idriss-zaghez/` matching `image_5a9ce4.png`) */}
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-3 left-4 z-40 rounded bg-white/90 px-2 py-0.5 font-sans text-[11px] text-zinc-500 hover:text-[#0099FF] transition"
          >
            {hoveredBottomUrl}
          </a>
        </div>
      )}

      {/* =====================================================================
          BOTTOM FLOATING CONTROL DOCK (`Works | About | Contact | < 1/6 > | ?`)
      ===================================================================== */}
      {mode !== 'intro' && (
        <nav
          aria-label="Spatial Canvas Controls"
          className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2 flex items-center gap-1 rounded-xl border border-zinc-200/90 bg-white/95 p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-md"
        >
          {[
            { id: 'works', label: 'Works' },
            { id: 'about', label: 'About' },
            { id: 'contact', label: 'Contact' }
          ].map((tab) => {
            const isActive = mode === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setMode(tab.id);
                  if (tab.id === 'works') {
                    setWorksView('corridor');
                  }
                }}
                className={`rounded-lg px-3.5 py-1.5 font-sans text-xs font-semibold transition ${
                  isActive
                    ? 'bg-[#00A6FF] text-white shadow-2xs'
                    : 'text-zinc-700 hover:bg-zinc-100'
                }`}
              >
                {tab.label}
              </button>
            );
          })}

          {(mode === 'works' || mode === 'about') && (
            <>
              <div className="mx-1 h-4 w-[1px] bg-zinc-200" />
              <button
                type="button"
                onClick={() => {
                  if (mode === 'works') stepWorkPrev();
                  else setActiveAboutIndex((p) => Math.max(0, p - 1));
                }}
                aria-label="Previous Frame"
                className="flex h-7 w-7 items-center justify-center rounded-lg text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 transition"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
              </button>

              <div className="min-w-[44px] text-center font-sans text-xs font-medium text-zinc-400">
                {mode === 'works' ? (
                  worksView === 'corridor' ? (
                    <span>- / {WORKS_FRAMES.length}</span>
                  ) : (
                    <span>
                      <strong className="font-semibold text-zinc-700">{activeWorkIndex + 1}</strong> / {WORKS_FRAMES.length}
                    </span>
                  )
                ) : (
                  <span>
                    <strong className="font-semibold text-zinc-700">{activeAboutIndex + 1}</strong> / 4
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={() => {
                  if (mode === 'works') stepWorkNext();
                  else setActiveAboutIndex((p) => Math.min(3, p + 1));
                }}
                aria-label="Next Frame"
                className="flex h-7 w-7 items-center justify-center rounded-lg text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 transition"
              >
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </>
          )}

          <div className="mx-0.5 h-4 w-[1px] bg-zinc-200" />
          <button
            type="button"
            onClick={() => {
              if (mode !== 'works') {
                setMode('works');
                setWorksView('corridor');
                setShowHowItWorks(true);
              } else {
                setWorksView('corridor');
                setShowHowItWorks((prev) => !prev);
              }
            }}
            title="How this works"
            className={`flex h-7 w-7 items-center justify-center rounded-lg font-sans text-xs font-semibold transition ${
              mode === 'works' && worksView === 'corridor' && showHowItWorks
                ? 'bg-zinc-900 text-white'
                : 'text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900'
            }`}
          >
            ?
          </button>
        </nav>
      )}
    </div>
  );
}