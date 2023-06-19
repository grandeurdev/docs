import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {

  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Grandeur" />
      <meta property="og:description" content="Docs website for grandeur.dev" />
      <link rel="icon" type="image/x-icon" href="/logo.png"></link>
    </>
  ),

  // Color hue
  primaryHue: 171,

  // Title
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Grandeur'
    }
  },

  // Logo (change logo url later with docs url)
  logoLink: 'https://docs.grandeur.dev',
  logo: (
    <svg width="100" height="25" viewBox="0 0 80 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1_2)">
        <path d="M14.3542 6.64941C16.9511 9.24612 16.9511 13.4563 14.3542 16.053C11.7574 18.6497 7.54693 18.6497 4.95007 16.053" fill="#00FFFF"/>
        <path d="M9.64971 0C5.97714 0 3 2.97697 3 6.64934C3 10.3217 5.97714 13.2987 9.64971 13.2987C13.3223 13.2987 16.2994 10.3217 16.2994 6.64934C16.2994 2.97697 13.3223 0 9.64971 0ZM9.64971 9.53808C8.05294 9.53808 6.76082 8.24392 6.76082 6.64934C6.76082 5.05476 8.05504 3.76061 9.64971 3.76061C11.2444 3.76061 12.5386 5.05476 12.5386 6.64934C12.5386 8.24392 11.2465 9.53808 9.64971 9.53808Z" fill="#FF00FF"/>
        <path d="M15.8753 9.00032C15.5518 8.14315 15.0454 7.34061 14.3563 6.64941L7.9314 13.074C8.47976 13.221 9.05754 13.2988 9.65423 13.2988C12.4969 13.2988 14.9257 11.513 15.8753 9.00032Z" fill="#FFFF00"/>
        <path d="M28.0991 5.8294H29.2168V11.4409C29.2168 12.1006 29.0844 12.6699 28.8218 13.1531C28.5592 13.6363 28.1852 14.0061 27.6978 14.2645C27.2124 14.5229 26.6347 14.6532 25.9686 14.6532C25.1051 14.6532 24.3866 14.4452 23.8109 14.0292C23.2352 13.6132 22.8759 13.046 22.7352 12.3233H24.4412C24.5357 12.5901 24.7227 12.8002 25.0064 12.9535C25.2879 13.1069 25.5989 13.1825 25.935 13.1825C26.3888 13.1825 26.7691 13.0481 27.0696 12.7771C27.3721 12.5061 27.5234 12.1447 27.5234 11.6888V11.4535C26.9981 11.8296 26.3951 12.0186 25.7123 12.0186C25.1324 12.0186 24.5988 11.88 24.1134 11.6006C23.6281 11.3233 23.2478 10.9409 22.9726 10.4535C22.6974 9.96817 22.5608 9.43034 22.5608 8.84209C22.5608 7.95551 22.8654 7.20339 23.4726 6.58363C24.0798 5.96386 24.8278 5.65503 25.7144 5.65503C26.538 5.65503 27.244 5.92605 27.8322 6.46598L28.0991 5.8294ZM25.9098 10.4871C26.3804 10.4871 26.7691 10.3316 27.0738 10.0228C27.3805 9.71396 27.5318 9.319 27.5318 8.83999C27.5318 8.36939 27.3805 7.97862 27.078 7.66979C26.7754 7.36096 26.3867 7.20549 25.9077 7.20549C25.4455 7.20549 25.061 7.36096 24.7542 7.66979C24.4475 7.97862 24.2962 8.36939 24.2962 8.83999C24.2962 9.319 24.4475 9.71186 24.75 10.0228C25.0547 10.3337 25.4392 10.4871 25.9098 10.4871Z" fill="#BFBEBF"/>
        <path d="M34.1134 5.79449H34.6785V7.41849H33.9369C33.4516 7.41849 33.1028 7.53194 32.8948 7.75883C32.6868 7.98573 32.5838 8.35969 32.5838 8.87651V12.1812H30.8673V5.83021H31.9724L32.2792 6.60754C32.7099 6.06551 33.3213 5.79449 34.1134 5.79449Z" fill="#BFBEBF"/>
        <path d="M40.6968 5.81724H41.9784V12.1683H40.6253L40.4846 11.6031C39.9047 12.1052 39.2176 12.3552 38.4256 12.3552C37.4696 12.3552 36.6754 12.0359 36.043 11.3972C35.4106 10.7586 35.0955 9.95601 35.0955 8.9917C35.0955 8.03579 35.4106 7.23955 36.043 6.60298C36.6733 5.96851 37.4675 5.64917 38.4256 5.64917C39.2324 5.64917 39.9278 5.90758 40.5077 6.4265L40.6968 5.81724ZM37.3267 10.2417C37.6524 10.5716 38.0642 10.7354 38.5621 10.7354C39.0601 10.7354 39.474 10.5716 39.8038 10.2417C40.1337 9.91189 40.2976 9.49592 40.2976 8.9959C40.2976 8.49379 40.1337 8.07781 39.8038 7.75007C39.474 7.42023 39.0622 7.25636 38.5684 7.25636C38.2386 7.25636 37.9423 7.33199 37.6797 7.48536C37.4171 7.63872 37.2112 7.84671 37.062 8.10932C36.9128 8.37193 36.8393 8.66816 36.8393 8.998C36.8393 9.49591 37.0011 9.91189 37.3267 10.2417Z" fill="#BFBEBF"/>
        <path d="M47.2497 5.67609C47.9703 5.67609 48.5418 5.91769 48.962 6.3988C49.3822 6.882 49.5923 7.52698 49.5923 8.33372V12.1805H47.8758V8.60474C47.8758 7.65513 47.5081 7.18243 46.7706 7.18243C46.4807 7.18243 46.2265 7.24966 46.0122 7.38202C45.7958 7.51647 45.6319 7.70766 45.5184 7.95766C45.405 8.20767 45.3482 8.50179 45.3482 8.84004V12.1805H43.6317V5.82945H44.8083L45.1486 6.61729C45.2663 6.46812 45.4008 6.33787 45.5541 6.22232C45.7075 6.10887 45.8735 6.01013 46.0542 5.92819C46.2349 5.84626 46.424 5.78323 46.6257 5.73911C46.819 5.6992 47.0291 5.67609 47.2497 5.67609Z" fill="#BFBEBF"/>
        <path d="M55.8371 3.53503H57.5536V12.1802H56.2825L56.0829 11.6508C55.5177 12.1298 54.8559 12.3693 54.0953 12.3693C53.4608 12.3693 52.8873 12.2243 52.3788 11.9344C51.8683 11.6445 51.4712 11.2432 51.1854 10.7285C50.8997 10.2159 50.7568 9.64024 50.7568 9.00577C50.7568 8.3713 50.8997 7.79776 51.1854 7.28934C51.4712 6.77882 51.8704 6.37965 52.3788 6.08973C52.8894 5.7998 53.4608 5.65484 54.0953 5.65484C54.7383 5.65484 55.3181 5.82711 55.8371 6.17166V3.53503ZM52.9902 10.2516C53.3201 10.5814 53.734 10.7453 54.2319 10.7453C54.7299 10.7453 55.1438 10.5793 55.4736 10.2453C55.8035 9.91126 55.9674 9.49738 55.9674 8.99947C55.9674 8.50156 55.8035 8.08768 55.4736 7.75784C55.1438 7.428 54.7299 7.26413 54.2319 7.26413C53.734 7.26413 53.3201 7.428 52.9902 7.75784C52.6604 8.08768 52.4965 8.50366 52.4965 9.00367C52.4965 9.50789 52.6604 9.92176 52.9902 10.2516Z" fill="#BFBEBF"/>
        <path d="M65.3656 8.98285C65.3656 9.14672 65.353 9.3169 65.3299 9.48917H60.5311C60.6026 9.91985 60.7728 10.2518 61.0438 10.4829C61.3148 10.714 61.6615 10.8295 62.0859 10.8295C62.3758 10.8295 62.6385 10.7644 62.8738 10.6363C63.1091 10.506 63.294 10.3295 63.4263 10.1005H65.2374C65.0021 10.7917 64.6029 11.3401 64.0377 11.7476C63.4726 12.1552 62.8212 12.359 62.0859 12.359C61.1446 12.359 60.361 12.0376 59.7328 11.3947C59.1046 10.7518 58.7915 9.95557 58.7915 9.00596C58.7915 8.6299 58.844 8.26855 58.9512 7.924C59.0562 7.57945 59.2096 7.26852 59.4092 6.9954C59.6088 6.72018 59.842 6.48278 60.1088 6.2832C60.3757 6.08361 60.6782 5.92815 61.0144 5.8189C61.3505 5.70965 61.7077 5.65503 62.0859 5.65503C62.7204 5.65503 63.2919 5.80419 63.7982 6.10252C64.3046 6.40085 64.6933 6.80422 64.9622 7.31474C65.2311 7.82106 65.3656 8.37779 65.3656 8.98285ZM62.0838 7.11095C61.6993 7.11095 61.3758 7.216 61.1131 7.42819C60.8505 7.64038 60.6719 7.9345 60.5774 8.31056H63.6469C63.5692 8.05215 63.4537 7.83366 63.3066 7.65718C63.1574 7.48071 62.9788 7.34625 62.7708 7.25171C62.5649 7.15927 62.3338 7.11095 62.0838 7.11095Z" fill="#BFBEBF"/>
        <path d="M71.6527 11.5756C71.1085 12.0966 70.3858 12.3571 69.4887 12.3571C68.5915 12.3571 67.8688 12.0945 67.3246 11.5693C66.7805 11.0441 66.5073 10.3529 66.5073 9.49992V5.82965H68.2239V9.30034C68.2239 9.75623 68.3352 10.1092 68.56 10.3655C68.7827 10.6197 69.0937 10.7479 69.4887 10.7479C69.8837 10.7479 70.1946 10.6197 70.4173 10.3655C70.64 10.1113 70.7535 9.75623 70.7535 9.30034V5.82965H72.47V9.49992C72.47 10.3634 72.1969 11.0546 71.6527 11.5756Z" fill="#BFBEBF"/>
        <path d="M77.2817 5.79449H77.8469V7.41849H77.1052C76.6199 7.41849 76.2711 7.53194 76.0631 7.75883C75.8551 7.98573 75.7522 8.35969 75.7522 8.87651V12.1812H74.0356V5.83021H75.1408L75.4475 6.60754C75.8782 6.06551 76.4896 5.79449 77.2817 5.79449Z" fill="#BFBEBF"/>
        <path d="M28.0991 5.8294H29.2168V11.4409C29.2168 12.1006 29.0844 12.6699 28.8218 13.1531C28.5592 13.6363 28.1852 14.0061 27.6978 14.2645C27.2124 14.5229 26.6347 14.6532 25.9686 14.6532C25.1051 14.6532 24.3866 14.4452 23.8109 14.0292C23.2352 13.6132 22.8759 13.046 22.7352 12.3233H24.4412C24.5357 12.5901 24.7227 12.8002 25.0064 12.9535C25.2879 13.1069 25.5989 13.1825 25.935 13.1825C26.3888 13.1825 26.7691 13.0481 27.0696 12.7771C27.3721 12.5061 27.5234 12.1447 27.5234 11.6888V11.4535C26.9981 11.8296 26.3951 12.0186 25.7123 12.0186C25.1324 12.0186 24.5988 11.88 24.1134 11.6006C23.6281 11.3233 23.2478 10.9409 22.9726 10.4535C22.6974 9.96817 22.5608 9.43034 22.5608 8.84209C22.5608 7.95551 22.8654 7.20339 23.4726 6.58363C24.0798 5.96386 24.8278 5.65503 25.7144 5.65503C26.538 5.65503 27.244 5.92605 27.8322 6.46598L28.0991 5.8294ZM25.9098 10.4871C26.3804 10.4871 26.7691 10.3316 27.0738 10.0228C27.3805 9.71396 27.5318 9.319 27.5318 8.83999C27.5318 8.36939 27.3805 7.97862 27.078 7.66979C26.7754 7.36096 26.3867 7.20549 25.9077 7.20549C25.4455 7.20549 25.061 7.36096 24.7542 7.66979C24.4475 7.97862 24.2962 8.36939 24.2962 8.83999C24.2962 9.319 24.4475 9.71186 24.75 10.0228C25.0547 10.3337 25.4392 10.4871 25.9098 10.4871Z" fill="#BFBEBF"/>
        <path d="M34.1134 5.79449H34.6785V7.41849H33.9369C33.4516 7.41849 33.1028 7.53194 32.8948 7.75883C32.6868 7.98573 32.5838 8.35969 32.5838 8.87651V12.1812H30.8673V5.83021H31.9724L32.2792 6.60754C32.7099 6.06551 33.3213 5.79449 34.1134 5.79449Z" fill="#BFBEBF"/>
        <path d="M40.6968 5.81724H41.9784V12.1683H40.6253L40.4846 11.6031C39.9047 12.1052 39.2176 12.3552 38.4256 12.3552C37.4696 12.3552 36.6754 12.0359 36.043 11.3972C35.4106 10.7586 35.0955 9.95601 35.0955 8.9917C35.0955 8.03579 35.4106 7.23955 36.043 6.60298C36.6733 5.96851 37.4675 5.64917 38.4256 5.64917C39.2324 5.64917 39.9278 5.90758 40.5077 6.4265L40.6968 5.81724ZM37.3267 10.2417C37.6524 10.5716 38.0642 10.7354 38.5621 10.7354C39.0601 10.7354 39.474 10.5716 39.8038 10.2417C40.1337 9.91189 40.2976 9.49592 40.2976 8.9959C40.2976 8.49379 40.1337 8.07781 39.8038 7.75007C39.474 7.42023 39.0622 7.25636 38.5684 7.25636C38.2386 7.25636 37.9423 7.33199 37.6797 7.48536C37.4171 7.63872 37.2112 7.84671 37.062 8.10932C36.9128 8.37193 36.8393 8.66816 36.8393 8.998C36.8393 9.49591 37.0011 9.91189 37.3267 10.2417Z" fill="#BFBEBF"/>
        <path d="M47.2497 5.67609C47.9703 5.67609 48.5418 5.91769 48.962 6.3988C49.3822 6.882 49.5923 7.52698 49.5923 8.33372V12.1805H47.8758V8.60474C47.8758 7.65513 47.5081 7.18243 46.7706 7.18243C46.4807 7.18243 46.2265 7.24966 46.0122 7.38202C45.7958 7.51647 45.6319 7.70766 45.5184 7.95766C45.405 8.20767 45.3482 8.50179 45.3482 8.84004V12.1805H43.6317V5.82945H44.8083L45.1486 6.61729C45.2663 6.46812 45.4008 6.33787 45.5541 6.22232C45.7075 6.10887 45.8735 6.01013 46.0542 5.92819C46.2349 5.84626 46.424 5.78323 46.6257 5.73911C46.819 5.6992 47.0291 5.67609 47.2497 5.67609Z" fill="#BFBEBF"/>
        <path d="M55.8371 3.53503H57.5536V12.1802H56.2825L56.0829 11.6508C55.5177 12.1298 54.8559 12.3693 54.0953 12.3693C53.4608 12.3693 52.8873 12.2243 52.3788 11.9344C51.8683 11.6445 51.4712 11.2432 51.1854 10.7285C50.8997 10.2159 50.7568 9.64024 50.7568 9.00577C50.7568 8.3713 50.8997 7.79776 51.1854 7.28934C51.4712 6.77882 51.8704 6.37965 52.3788 6.08973C52.8894 5.7998 53.4608 5.65484 54.0953 5.65484C54.7383 5.65484 55.3181 5.82711 55.8371 6.17166V3.53503ZM52.9902 10.2516C53.3201 10.5814 53.734 10.7453 54.2319 10.7453C54.7299 10.7453 55.1438 10.5793 55.4736 10.2453C55.8035 9.91126 55.9674 9.49738 55.9674 8.99947C55.9674 8.50156 55.8035 8.08768 55.4736 7.75784C55.1438 7.428 54.7299 7.26413 54.2319 7.26413C53.734 7.26413 53.3201 7.428 52.9902 7.75784C52.6604 8.08768 52.4965 8.50366 52.4965 9.00367C52.4965 9.50789 52.6604 9.92176 52.9902 10.2516Z" fill="#BFBEBF"/>
        <path d="M65.3656 8.98285C65.3656 9.14672 65.353 9.3169 65.3299 9.48917H60.5311C60.6026 9.91985 60.7728 10.2518 61.0438 10.4829C61.3148 10.714 61.6615 10.8295 62.0859 10.8295C62.3758 10.8295 62.6385 10.7644 62.8738 10.6363C63.1091 10.506 63.294 10.3295 63.4263 10.1005H65.2374C65.0021 10.7917 64.6029 11.3401 64.0377 11.7476C63.4726 12.1552 62.8212 12.359 62.0859 12.359C61.1446 12.359 60.361 12.0376 59.7328 11.3947C59.1046 10.7518 58.7915 9.95557 58.7915 9.00596C58.7915 8.6299 58.844 8.26855 58.9512 7.924C59.0562 7.57945 59.2096 7.26852 59.4092 6.9954C59.6088 6.72018 59.842 6.48278 60.1088 6.2832C60.3757 6.08361 60.6782 5.92815 61.0144 5.8189C61.3505 5.70965 61.7077 5.65503 62.0859 5.65503C62.7204 5.65503 63.2919 5.80419 63.7982 6.10252C64.3046 6.40085 64.6933 6.80422 64.9622 7.31474C65.2311 7.82106 65.3656 8.37779 65.3656 8.98285ZM62.0838 7.11095C61.6993 7.11095 61.3758 7.216 61.1131 7.42819C60.8505 7.64038 60.6719 7.9345 60.5774 8.31056H63.6469C63.5692 8.05215 63.4537 7.83366 63.3066 7.65718C63.1574 7.48071 62.9788 7.34625 62.7708 7.25171C62.5649 7.15927 62.3338 7.11095 62.0838 7.11095Z" fill="#BFBEBF"/>
        <path d="M71.6527 11.5756C71.1085 12.0966 70.3858 12.3571 69.4887 12.3571C68.5915 12.3571 67.8688 12.0945 67.3246 11.5693C66.7805 11.0441 66.5073 10.3529 66.5073 9.49992V5.82965H68.2239V9.30034C68.2239 9.75623 68.3352 10.1092 68.56 10.3655C68.7827 10.6197 69.0937 10.7479 69.4887 10.7479C69.8837 10.7479 70.1946 10.6197 70.4173 10.3655C70.64 10.1113 70.7535 9.75623 70.7535 9.30034V5.82965H72.47V9.49992C72.47 10.3634 72.1969 11.0546 71.6527 11.5756Z" fill="#BFBEBF"/>
        <path d="M77.2817 5.79449H77.8469V7.41849H77.1052C76.6199 7.41849 76.2711 7.53194 76.0631 7.75883C75.8551 7.98573 75.7522 8.35969 75.7522 8.87651V12.1812H74.0356V5.83021H75.1408L75.4475 6.60754C75.8782 6.06551 76.4896 5.79449 77.2817 5.79449Z" fill="#BFBEBF"/>
      </g>
      <defs>
        <clipPath id="clip0_1_2">
          <rect width="80" height="18" fill="white"/>
        </clipPath>
      </defs>
    </svg>

  ),

  // Discord for navbar
  chat: {
    link: 'https://discord.gg/HQWX4uwkqC',
  },

  // Footer
  footer: {
    text: <span>
    <a href="https://grandeur.dev" target="_blank">Grandeur {new Date().getFullYear()} © </a>
  </span>,
  },

  // Have to add null so it won't display
  editLink: {
     text: ''
  },

  // Feedback on the right
  feedback: {
    useLink: () => 'https://discord.gg/HQWX4uwkqC'
  }
  
}

export default config
