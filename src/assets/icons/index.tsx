export const DropdownIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      viewBox="0 0 70 66"
      fill="none"
    >
      <g filter="url(#filter0_d_117_2833)">
        <path
          d="M51.8488 39.3255C53.0161 41.3182 51.5886 43.8273 49.2793 43.8419L20.701 44.0231C18.3917 44.0377 16.9325 41.5469 18.0745 39.5397L32.2067 14.6995C33.3487 12.6923 36.2354 12.674 37.4027 14.6666L51.8488 39.3255Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_117_2833"
          x="0.675781"
          y="0.183044"
          width="68.5898"
          height="64.8401"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="8.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.341667 0 0 0 0 0.341667 0 0 0 0 0.341667 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_117_2833"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_117_2833"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export const NotificationDefault = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5064 10.8675L13.7564 9.6225C13.5989 9.345 13.4564 8.82 13.4564 8.5125V6.615C13.4564 4.8525 12.4214 3.33 10.9289 2.6175C10.5389 1.9275 9.81892 1.5 8.99392 1.5C8.17642 1.5 7.44142 1.9425 7.05142 2.64C5.58892 3.3675 4.57642 4.875 4.57642 6.615V8.5125C4.57642 8.82 4.43392 9.345 4.27642 9.615L3.51892 10.8675C3.21892 11.37 3.15142 11.925 3.33892 12.435C3.51892 12.9375 3.94642 13.3275 4.50142 13.515C5.95642 14.01 7.48642 14.25 9.01642 14.25C10.5464 14.25 12.0764 14.01 13.5314 13.5225C14.0564 13.35 14.4614 12.9525 14.6564 12.435C14.8514 11.9175 14.7989 11.3475 14.5064 10.8675Z"
        fill="#FF9454"
      />
      <path
        d="M11.1242 15.0075C10.8092 15.8775 9.97672 16.5 9.00172 16.5C8.40922 16.5 7.82422 16.26 7.41172 15.8325C7.17172 15.6075 6.99172 15.3075 6.88672 15C6.98422 15.015 7.08172 15.0225 7.18672 15.0375C7.35922 15.06 7.53922 15.0825 7.71922 15.0975C8.14672 15.135 8.58172 15.1575 9.01672 15.1575C9.44422 15.1575 9.87172 15.135 10.2917 15.0975C10.4492 15.0825 10.6067 15.075 10.7567 15.0525C10.8767 15.0375 10.9967 15.0225 11.1242 15.0075Z"
        fill="#FF9454"
      />
    </svg>
  );
};

export const NotificationWithBadge = () => {
  return (
    <span className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M16.1182 12.075L15.2849 10.6917C15.1099 10.3834 14.9516 9.80002 14.9516 9.45835V7.35002C14.9516 5.39169 13.8016 3.70002 12.1432 2.90835C11.7099 2.14169 10.9099 1.66669 9.99325 1.66669C9.08491 1.66669 8.26825 2.15835 7.83491 2.93335C6.20991 3.74169 5.08491 5.41669 5.08491 7.35002V9.45835C5.08491 9.80002 4.92658 10.3834 4.75158 10.6834L3.90991 12.075C3.57658 12.6334 3.50158 13.25 3.70991 13.8167C3.90991 14.375 4.38491 14.8084 5.00158 15.0167C6.61825 15.5667 8.31825 15.8334 10.0182 15.8334C11.7182 15.8334 13.4182 15.5667 15.0349 15.025C15.6182 14.8334 16.0682 14.3917 16.2849 13.8167C16.5016 13.2417 16.4432 12.6084 16.1182 12.075Z"
          fill="#FF9454"
        />
        <path
          d="M12.3568 16.675C12.0068 17.6417 11.0818 18.3334 9.99844 18.3334C9.3401 18.3334 8.6901 18.0667 8.23177 17.5917C7.9651 17.3417 7.7651 17.0084 7.64844 16.6667C7.75677 16.6834 7.8651 16.6917 7.98177 16.7084C8.17344 16.7334 8.37344 16.7584 8.57344 16.775C9.04844 16.8167 9.53177 16.8417 10.0151 16.8417C10.4901 16.8417 10.9651 16.8167 11.4318 16.775C11.6068 16.7584 11.7818 16.75 11.9484 16.725C12.0818 16.7084 12.2151 16.6917 12.3568 16.675Z"
          fill="#FF9454"
        />
      </svg>
      <span className="w-1 h-1 rounded-full bg-danger-600 absolute left-[0.65rem] top-[0.05rem] border border-danger-600"></span>
    </span>
  );
};

export const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
    >
      <path
        d="M15.75 16.25L12.4875 12.9875M14.25 8.75C14.25 12.0637 11.5637 14.75 8.25 14.75C4.93629 14.75 2.25 12.0637 2.25 8.75C2.25 5.43629 4.93629 2.75 8.25 2.75C11.5637 2.75 14.25 5.43629 14.25 8.75Z"
        stroke="#A1A1A1"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const MenuIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 8h22M5 16h22M5 24h22"
      />
    </svg>
  );
};

export const SideBarDivider = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M3.06043 11.2871L7.95043 6.39711C8.52793 5.81961 9.47293 5.81961 10.0504 6.39711L14.9404 11.2871"
        stroke="#16CEAA"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Balance = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M15.0333 11.2918C14.6833 11.6335 14.4833 12.1252 14.5333 12.6502C14.6083 13.5502 15.4333 14.2085 16.3333 14.2085H17.9166V15.2002C17.9166 16.9252 16.5083 18.3335 14.7833 18.3335H5.21659C3.49159 18.3335 2.08325 16.9252 2.08325 15.2002V9.59184C2.08325 7.86684 3.49159 6.4585 5.21659 6.4585H14.7833C16.5083 6.4585 17.9166 7.86684 17.9166 9.59184V10.7918H16.2333C15.7666 10.7918 15.3416 10.9752 15.0333 11.2918Z"
        stroke="#00A603"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.08325 10.3416V6.5333C2.08325 5.54163 2.69159 4.65826 3.61659 4.30826L10.2333 1.80826C11.2666 1.41659 12.3749 2.18329 12.3749 3.29162V6.45828"
        stroke="#00A603"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.7989 11.642V13.3587C18.7989 13.817 18.4323 14.192 17.9656 14.2086H16.3323C15.4323 14.2086 14.6073 13.5503 14.5323 12.6503C14.4823 12.1253 14.6823 11.6336 15.0323 11.292C15.3406 10.9753 15.7656 10.792 16.2323 10.792H17.9656C18.4323 10.8087 18.7989 11.1836 18.7989 11.642Z"
        stroke="#00A603"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.83325 10H11.6666"
        stroke="#00A603"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
