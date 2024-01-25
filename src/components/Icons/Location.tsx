import { SvgXml } from 'react-native-svg';

export default function Location() {

  const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
  <path d="M7 0C3.66904 0 0.96875 2.70028 0.96875 6.03125C0.96875 7.14521 1.18679 8.29575 1.8125 9.125L7 16L12.1875 9.125C12.7558 8.3718 13.0312 7.04025 13.0312 6.03125C13.0313 2.70028 10.331 0 7 0ZM7 3.49316C8.40155 3.49316 9.53809 4.62971 9.53809 6.03124C9.53809 7.4328 8.40155 8.56933 7 8.56933C5.59846 8.56933 4.46192 7.4328 4.46192 6.03125C4.46192 4.62971 5.59846 3.49316 7 3.49316Z" fill="url(#paint0_linear_999_9836)"/>
  <defs>
  <linearGradient id="paint0_linear_999_9836" x1="7" y1="0" x2="7" y2="16" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FF8B4A"/>
  <stop offset="1" stop-color="#FF6534"/>
  </linearGradient>
  </defs>
  </svg>
  `

  return (
    <SvgXml xml={xml} width="14" height="16" />
  );
}