import { SITE_NAME } from "@/lib/site";

export default function BrandMark() {
  return (
    <span className="flex items-center gap-3" aria-label={SITE_NAME}>
      <svg
        aria-hidden="true"
        className="brand-symbol shrink-0"
        viewBox="0 0 64 64"
        role="img"
      >
        <circle cx="32" cy="34" r="24" fill="#FFF1E2" />
        <path
          d="M31.4 55.5c-9.9-2.1-17.3-10-17.3-19.5 0-10.7 8.6-19.4 19.3-19.4 9.4 0 16.5 6.7 16.5 16.2 0 13.3-9.5 22.7-18.5 22.7Z"
          fill="#F0915A"
        />
        <path
          d="M31.3 55.5c7.3-3.7 12.1-11.7 12.1-22.3 0-6.5-3.5-12.2-9-15.1 8.8.4 15.5 6.8 15.5 14.7 0 13.3-9.5 22.7-18.6 22.7Z"
          fill="#F4A259"
        />
        <path
          d="M31.8 17.5c1.2-5.8 5.3-9.3 12.5-10.2.3 7.2-3.7 11.1-11.8 11.6"
          fill="#6A8A3A"
        />
        <path
          d="M31.8 17.5c-1.7-4.9-5-7.8-10.1-8.8 0 6 3.4 9.1 10.1 9.3"
          fill="#8BA64B"
        />
        <path
          d="M31.7 17.4c-.2 4.5-1.4 8.6-3.7 12.3"
          fill="none"
          stroke="#7B3F24"
          strokeLinecap="round"
          strokeWidth="3"
        />
        <path
          d="M19.2 39.7c2.4 5.9 7.2 9.5 13.5 10.2"
          fill="none"
          stroke="#FFFFFF"
          strokeLinecap="round"
          strokeWidth="3"
          opacity=".65"
        />
      </svg>
      <span className="brand-wordmark">
        <span className="brand-name">
          Peach State
        </span>
        <span className="brand-subtitle">
          Final Expense
        </span>
      </span>
    </span>
  );
}
