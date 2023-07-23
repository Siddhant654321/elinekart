import "./ProgressContainer.css";
import { useLocation } from 'react-router-dom';

const ProgressContainer = () => {

  const location = useLocation();

  return (
    <section>
      <div className="progress_container">
        <div className={location.pathname === '/shipping' && "active"}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_174_42)">
              <path
                d="M28.8458 28.9257H15.2001C14.8212 28.9257 14.4579 28.7752 14.19 28.5073C13.9221 28.2394 13.7715 27.876 13.7715 27.4972C13.7715 27.1183 13.9221 26.7549 14.19 26.487C14.4579 26.2191 14.8212 26.0686 15.2001 26.0686H28.8458C29.2247 26.0686 29.5881 26.2191 29.856 26.487C30.1239 26.7549 30.2744 27.1183 30.2744 27.4972C30.2744 27.876 30.1239 28.2394 29.856 28.5073C29.5881 28.7752 29.2247 28.9257 28.8458 28.9257ZM36.7087 28.9257H36.3658C35.987 28.9257 35.6236 28.7752 35.3557 28.5073C35.0878 28.2394 34.9373 27.876 34.9373 27.4972C34.9373 27.1183 35.0878 26.7549 35.3557 26.487C35.6236 26.2191 35.987 26.0686 36.3658 26.0686H36.7087C36.8027 26.0701 36.8961 26.0529 36.9834 26.018C37.0707 25.983 37.1501 25.9311 37.2171 25.8651C37.2841 25.7992 37.3374 25.7206 37.3737 25.6338C37.41 25.5471 37.4287 25.454 37.4287 25.36V20.4571C37.4282 20.2964 37.3739 20.1404 37.2745 20.0141C37.1751 19.8877 37.0363 19.7983 36.8801 19.76H28.4573C27.5105 19.76 26.6024 19.3847 25.9319 18.7163C25.2614 18.048 24.8831 17.141 24.8801 16.1943V8.53715C24.8817 8.44367 24.8644 8.35084 24.8293 8.26417C24.7943 8.17751 24.7421 8.09878 24.676 8.03267C24.6099 7.96656 24.5312 7.91443 24.4445 7.87937C24.3579 7.84431 24.265 7.82703 24.1715 7.82858H7.33726C6.95838 7.82858 6.59502 7.67807 6.32711 7.41016C6.0592 7.14225 5.90869 6.77889 5.90869 6.40001C5.90869 6.02113 6.0592 5.65776 6.32711 5.38985C6.59502 5.12195 6.95838 4.97144 7.33726 4.97144H24.1715C24.6398 4.97144 25.1035 5.06367 25.5361 5.24286C25.9687 5.42205 26.3618 5.6847 26.6929 6.01581C27.024 6.34692 27.2866 6.74 27.4658 7.17261C27.645 7.60522 27.7373 8.06889 27.7373 8.53715V16.1714C27.7373 16.2655 27.756 16.3585 27.7923 16.4453C27.8286 16.532 27.8818 16.6106 27.9488 16.6766C28.0158 16.7425 28.0953 16.7945 28.1826 16.8294C28.2699 16.8643 28.3633 16.8815 28.4573 16.88H36.7087C36.9696 16.8834 37.2297 16.9102 37.4858 16.96L37.7373 17.04C38.4773 17.2564 39.1265 17.7082 39.5864 18.327C40.0464 18.9457 40.2919 19.6976 40.2858 20.4686V25.3714C40.2798 26.3162 39.9003 27.2202 39.2301 27.8861C38.5599 28.552 37.6535 28.9257 36.7087 28.9257Z"
                fill="currentColor"
              />
              <path
                d="M37.1999 19.8057C36.9062 19.8056 36.6198 19.7143 36.3803 19.5444C36.1407 19.3745 35.9599 19.1343 35.8628 18.8571L33.5771 12.5028C33.5156 12.4171 33.4351 12.3467 33.3419 12.2972C33.2488 12.2476 33.1454 12.2202 33.0399 12.2171H26.2857C25.9068 12.2171 25.5434 12.0666 25.2755 11.7987C25.0076 11.5308 24.8571 11.1674 24.8571 10.7886C24.8571 10.4097 25.0076 10.0463 25.2755 9.7784C25.5434 9.5105 25.9068 9.35999 26.2857 9.35999H33.0399C33.6733 9.36245 34.2942 9.53574 34.8373 9.86158C35.3803 10.1874 35.8254 10.6538 36.1257 11.2114C36.1609 11.2778 36.1914 11.3465 36.2171 11.4171L38.5028 17.8971C38.6278 18.2549 38.6067 18.6475 38.4441 18.9898C38.2815 19.3321 37.9905 19.5965 37.6342 19.7257C37.4934 19.7705 37.3475 19.7974 37.1999 19.8057ZM32.6057 35.0286C31.5772 35.0286 30.5718 34.7236 29.7167 34.1522C28.8616 33.5808 28.1951 32.7687 27.8015 31.8185C27.4079 30.8683 27.3049 29.8228 27.5056 28.8141C27.7062 27.8054 28.2015 26.8788 28.9287 26.1516C29.6559 25.4244 30.5825 24.9291 31.5912 24.7285C32.5999 24.5278 33.6454 24.6308 34.5956 25.0244C35.5458 25.418 36.3579 26.0845 36.9293 26.9396C37.5007 27.7947 37.8057 28.8001 37.8057 29.8286C37.8057 31.2077 37.2578 32.5303 36.2826 33.5055C35.3074 34.4807 33.9848 35.0286 32.6057 35.0286ZM32.6057 27.4857C32.14 27.4743 31.6816 27.602 31.2888 27.8525C30.8961 28.1029 30.587 28.4647 30.4008 28.8917C30.2147 29.3187 30.1601 29.7914 30.2439 30.2496C30.3278 30.7078 30.5463 31.1305 30.8715 31.4639C31.1968 31.7973 31.6141 32.0262 32.07 32.1213C32.526 32.2165 32.9999 32.1735 33.4314 31.998C33.8628 31.8225 34.2322 31.5223 34.4922 31.1359C34.7523 30.7495 34.8912 30.2943 34.8914 29.8286C34.8916 29.217 34.6526 28.6295 34.2255 28.1918C33.7984 27.754 33.2171 27.5006 32.6057 27.4857ZM11.4285 35.0286C10.4001 35.0286 9.39469 34.7236 8.53955 34.1522C7.68442 33.5808 7.01792 32.7687 6.62434 31.8185C6.23077 30.8683 6.12779 29.8228 6.32843 28.8141C6.52908 27.8054 7.02433 26.8788 7.75156 26.1516C8.4788 25.4244 9.40535 24.9291 10.414 24.7285C11.4227 24.5278 12.4683 24.6308 13.4185 25.0244C14.3686 25.418 15.1808 26.0845 15.7522 26.9396C16.3235 27.7947 16.6285 28.8001 16.6285 29.8286C16.6285 31.2077 16.0807 32.5303 15.1055 33.5055C14.1303 34.4807 12.8076 35.0286 11.4285 35.0286ZM11.4285 27.4857C10.9651 27.4857 10.5122 27.6231 10.1269 27.8805C9.74162 28.138 9.44132 28.5039 9.264 28.932C9.08667 29.3601 9.04028 29.8312 9.13068 30.2856C9.22108 30.7401 9.44421 31.1576 9.77187 31.4852C10.0995 31.8129 10.517 32.036 10.9714 32.1264C11.4259 32.2168 11.897 32.1704 12.3251 31.9931C12.7532 31.8158 13.1191 31.5155 13.3765 31.1302C13.634 30.7449 13.7714 30.2919 13.7714 29.8286C13.7714 29.2072 13.5245 28.6113 13.0852 28.1719C12.6458 27.7325 12.0499 27.4857 11.4285 27.4857Z"
                fill="currentColor"
              />
              <path
                d="M26.2855 28.9257C26.0975 28.9272 25.911 28.8913 25.737 28.8201C25.563 28.7488 25.4049 28.6436 25.272 28.5107C25.139 28.3777 25.0338 28.2196 24.9626 28.0456C24.8913 27.8716 24.8554 27.6852 24.8569 27.4971V15.0057C24.8569 14.6268 25.0074 14.2635 25.2754 13.9956C25.5433 13.7276 25.9066 13.5771 26.2855 13.5771C26.6644 13.5771 27.0278 13.7276 27.2957 13.9956C27.5636 14.2635 27.7141 14.6268 27.7141 15.0057V27.4971C27.7156 27.6852 27.6797 27.8716 27.6084 28.0456C27.5372 28.2196 27.432 28.3777 27.2991 28.5107C27.1661 28.6436 27.008 28.7488 26.834 28.8201C26.66 28.8913 26.4735 28.9272 26.2855 28.9257ZM11.6455 15.0514H2.28551C1.90662 15.0514 1.54326 14.9009 1.27535 14.633C1.00744 14.3651 0.856934 14.0017 0.856934 13.6228C0.856934 13.244 1.00744 12.8806 1.27535 12.6127C1.54326 12.3448 1.90662 12.1943 2.28551 12.1943H11.6455C12.0244 12.1943 12.3877 12.3448 12.6557 12.6127C12.9236 12.8806 13.0741 13.244 13.0741 13.6228C13.0741 14.0017 12.9236 14.3651 12.6557 14.633C12.3877 14.9009 12.0244 15.0514 11.6455 15.0514ZM13.4055 21.4286H8.51408C8.1352 21.4286 7.77183 21.2781 7.50392 21.0101C7.23601 20.7422 7.08551 20.3789 7.08551 20C7.08551 19.6211 7.23601 19.2577 7.50392 18.9898C7.77183 18.7219 8.1352 18.5714 8.51408 18.5714H13.4055C13.7844 18.5714 14.1477 18.7219 14.4157 18.9898C14.6836 19.2577 14.8341 19.6211 14.8341 20C14.8341 20.3789 14.6836 20.7422 14.4157 21.0101C14.1477 21.2781 13.7844 21.4286 13.4055 21.4286Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_174_42">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p>Shipping</p>
        </div>
        <div className={location.pathname === '/payment' && "active"}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 23.75C9.66848 23.75 9.35054 23.8817 9.11612 24.1161C8.8817 24.3505 8.75 24.6685 8.75 25C8.75 25.3315 8.8817 25.6495 9.11612 25.8839C9.35054 26.1183 9.66848 26.25 10 26.25H20C20.3315 26.25 20.6495 26.1183 20.8839 25.8839C21.1183 25.6495 21.25 25.3315 21.25 25C21.25 24.6685 21.1183 24.3505 20.8839 24.1161C20.6495 23.8817 20.3315 23.75 20 23.75H10Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.3335 6.66666C7.00741 6.66666 5.73564 7.19344 4.79796 8.13112C3.86028 9.0688 3.3335 10.3406 3.3335 11.6667V28.3333C3.3335 29.6594 3.86028 30.9312 4.79796 31.8689C5.73564 32.8065 7.00741 33.3333 8.3335 33.3333H31.6668C32.9929 33.3333 34.2647 32.8065 35.2024 31.8689C36.14 30.9312 36.6668 29.6594 36.6668 28.3333V11.6667C36.6668 10.3406 36.14 9.0688 35.2024 8.13112C34.2647 7.19344 32.9929 6.66666 31.6668 6.66666H8.3335ZM31.6668 9.16666H8.3335C7.67045 9.16666 7.03457 9.43005 6.56573 9.89889C6.09689 10.3677 5.8335 11.0036 5.8335 11.6667V13.75H34.1668V11.6667C34.1668 11.0036 33.9034 10.3677 33.4346 9.89889C32.9658 9.43005 32.3299 9.16666 31.6668 9.16666ZM5.8335 28.3333V16.25H34.1668V28.3333C34.1668 28.9964 33.9034 29.6322 33.4346 30.1011C32.9658 30.5699 32.3299 30.8333 31.6668 30.8333H8.3335C7.67045 30.8333 7.03457 30.5699 6.56573 30.1011C6.09689 29.6322 5.8335 28.9964 5.8335 28.3333Z"
              fill="currentColor"
            />
          </svg>

          <p>Payment</p>
        </div>
        <div className={location.pathname === '/placeorder' && "active"}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.0161 35.8867C19.5668 35.5977 20.1176 35.3047 20.6684 35.0156C21.9926 34.3164 23.3129 33.6172 24.6372 32.918C26.2426 32.0703 27.852 31.2227 29.4575 30.3711C30.8403 29.6406 32.227 28.9102 33.6098 28.1797C34.2817 27.8242 34.9497 27.457 35.6293 27.1133C35.6372 27.1094 35.6489 27.1016 35.6567 27.0977C35.3325 27.6602 35.0122 28.2227 34.6879 28.7852C34.6879 28.1992 34.6879 27.6172 34.6879 27.0313C34.6879 25.6367 34.6879 24.2383 34.6879 22.8438C34.6879 21.1563 34.6879 19.4688 34.6879 17.7774C34.6879 16.3125 34.6879 14.8477 34.6879 13.3789C34.6879 12.668 34.6762 11.957 34.6879 11.2461C34.6879 11.2383 34.6879 11.2266 34.6879 11.2188C35.6684 11.7813 36.6489 12.3438 37.6254 12.9063C37.0747 13.1992 36.5239 13.4883 35.9731 13.7813C34.6489 14.4805 33.3286 15.1797 32.0043 15.8789C30.3989 16.7266 28.7895 17.5781 27.184 18.4258C25.8012 19.1563 24.4145 19.8906 23.0317 20.6211C22.3598 20.9766 21.6918 21.3438 21.0122 21.6875C21.0043 21.6914 20.9926 21.6992 20.9848 21.7031C21.309 21.1406 21.6293 20.5781 21.9536 20.0156C21.9536 20.5977 21.9536 21.1836 21.9536 21.7656C21.9536 23.1602 21.9536 24.5547 21.9536 25.9492C21.9536 27.6367 21.9536 29.3242 21.9536 31.0117C21.9536 32.4766 21.9536 33.9414 21.9536 35.4063C21.9536 36.1172 21.9614 36.8281 21.9536 37.5391C21.9536 37.5469 21.9536 37.5586 21.9536 37.5664C21.9536 38.0664 21.7348 38.5938 21.3832 38.9492C21.0434 39.2891 20.4887 39.543 20.0004 39.5195C19.4965 39.4961 18.9731 39.332 18.6176 38.9492C18.2661 38.5664 18.0473 38.0977 18.0473 37.5664C18.0473 36.9844 18.0473 36.3984 18.0473 35.8164C18.0473 34.4219 18.0473 33.0274 18.0473 31.6328C18.0473 29.9453 18.0473 28.2578 18.0473 26.5703C18.0473 25.1055 18.0473 23.6406 18.0473 22.1758C18.0473 21.4649 18.0395 20.7539 18.0473 20.043C18.0473 20.0352 18.0473 20.0234 18.0473 20.0156C18.0473 19.3516 18.4145 18.6484 19.0161 18.3281C19.5668 18.0352 20.1176 17.7461 20.6684 17.4531C21.9926 16.7539 23.3129 16.0547 24.6372 15.3555C26.2426 14.5078 27.852 13.6563 29.4575 12.8086C30.8403 12.0781 32.227 11.3438 33.6098 10.6133C34.2817 10.2578 34.9536 9.89454 35.6293 9.54688C35.6372 9.54298 35.6489 9.53517 35.6567 9.53126C36.2817 9.19923 37.0043 9.16798 37.6293 9.53126C38.2231 9.87892 38.5981 10.5274 38.5981 11.2188C38.5981 11.8047 38.5981 12.3867 38.5981 12.9727C38.5981 14.3672 38.5981 15.7656 38.5981 17.1602C38.5981 18.8477 38.5981 20.5352 38.5981 22.2266C38.5981 23.6914 38.5981 25.1563 38.5981 26.625C38.5981 27.3359 38.6059 28.0469 38.5981 28.7578C38.5981 28.7656 38.5981 28.7774 38.5981 28.7852C38.5981 29.4492 38.2309 30.1563 37.6293 30.4727C37.0786 30.7617 36.5278 31.0547 35.977 31.3438C34.6528 32.043 33.3325 32.7422 32.0082 33.4414C30.4028 34.2891 28.7934 35.1367 27.1879 35.9883C25.8051 36.7188 24.4184 37.4492 23.0356 38.1797C22.3637 38.5352 21.6918 38.8984 21.0161 39.2461C21.0082 39.25 20.9965 39.2578 20.9887 39.2617C20.5278 39.5039 19.9926 39.5977 19.4848 39.457C19.0317 39.332 18.5395 38.9805 18.3168 38.5586C18.0786 38.1055 17.9575 37.5547 18.1215 37.0547C18.27 36.582 18.5629 36.125 19.0161 35.8867Z"
              fill="currentColor"
            />
            <path
              d="M4.34028 27.0977C4.89106 27.3867 5.44184 27.6797 5.99262 27.9688C7.31684 28.668 8.63715 29.3672 9.96137 30.0664C11.5668 30.9141 13.1762 31.7617 14.7817 32.6133C16.1645 33.3438 17.5512 34.0742 18.934 34.8047C19.6059 35.1602 20.2856 35.5039 20.9536 35.8711C20.9614 35.875 20.9731 35.8828 20.9809 35.8867C20.0004 36.4492 19.02 37.0117 18.0434 37.5742C18.0434 36.9922 18.0434 36.4063 18.0434 35.8242C18.0434 34.4297 18.0434 33.0352 18.0434 31.6406C18.0434 29.9531 18.0434 28.2656 18.0434 26.5781C18.0434 25.1133 18.0434 23.6484 18.0434 22.1836C18.0434 21.4727 18.0317 20.7617 18.0434 20.0508C18.0434 20.043 18.0434 20.0313 18.0434 20.0234C18.3676 20.5859 18.6879 21.1484 19.0122 21.7109C18.4614 21.418 17.9106 21.1289 17.3598 20.8359C16.0356 20.1367 14.7153 19.4375 13.3911 18.7383C11.7856 17.8906 10.1762 17.0391 8.57075 16.1914C7.18793 15.4609 5.80121 14.7266 4.4184 13.9961C3.74653 13.6406 3.06684 13.293 2.39887 12.9297C2.39106 12.9258 2.37934 12.918 2.37153 12.9141C3.352 12.3516 4.33247 11.7891 5.30903 11.2266C5.30903 11.8125 5.30903 12.3945 5.30903 12.9805C5.30903 14.375 5.30903 15.7734 5.30903 17.168C5.30903 18.8555 5.30903 20.543 5.30903 22.2344C5.30903 23.6992 5.30903 25.1641 5.30903 26.6328C5.30903 27.3438 5.31684 28.0547 5.30903 28.7656C5.30903 28.7734 5.30903 28.7852 5.30903 28.793C5.30903 29.293 5.09028 29.8203 4.73871 30.1758C4.39887 30.5156 3.84418 30.7695 3.3559 30.7461C2.852 30.7227 2.32856 30.5586 1.97309 30.1758C1.62153 29.793 1.40278 29.3242 1.40278 28.793C1.40278 28.207 1.40278 27.625 1.40278 27.0391C1.40278 25.6445 1.40278 24.2461 1.40278 22.8516C1.40278 21.1641 1.40278 19.4766 1.40278 17.7852C1.40278 16.3203 1.40278 14.8555 1.40278 13.3867C1.40278 12.6758 1.39497 11.9649 1.40278 11.2539C1.40278 11.2461 1.40278 11.2344 1.40278 11.2266C1.40278 10.5391 1.77778 9.88673 2.37153 9.53907C2.99262 9.17579 3.71918 9.20704 4.34418 9.53907C4.89497 9.83204 5.44575 10.1211 5.99653 10.4141C7.32075 11.1133 8.64106 11.8125 9.96528 12.5117C11.5707 13.3594 13.1801 14.2109 14.7856 15.0586C16.1684 15.7891 17.5551 16.5234 18.9379 17.2539C19.6098 17.6094 20.2934 17.9531 20.9575 18.3203C20.9653 18.3242 20.977 18.332 20.9848 18.3359C21.5864 18.6524 21.9536 19.3555 21.9536 20.0234C21.9536 20.6055 21.9536 21.1914 21.9536 21.7734C21.9536 23.168 21.9536 24.5625 21.9536 25.957C21.9536 27.6445 21.9536 29.332 21.9536 31.0195C21.9536 32.4844 21.9536 33.9492 21.9536 35.4141C21.9536 36.125 21.9614 36.8359 21.9536 37.5469C21.9536 37.5547 21.9536 37.5664 21.9536 37.5742C21.9536 38.2617 21.5786 38.9141 20.9848 39.2617C20.3637 39.625 19.6372 39.5899 19.0122 39.2617C18.4614 38.9727 17.9106 38.6797 17.3598 38.3906C16.0356 37.6914 14.7153 36.9922 13.3911 36.293C11.7856 35.4453 10.1762 34.5977 8.57075 33.7461C7.18793 33.0156 5.80121 32.2852 4.4184 31.5547C3.74653 31.1992 3.06293 30.8555 2.39887 30.4883C2.39106 30.4844 2.37934 30.4766 2.37153 30.4727C1.94965 30.25 1.59809 29.7578 1.47309 29.3047C1.34418 28.8359 1.40278 28.2149 1.6684 27.8008C2.26215 26.8789 3.37153 26.5859 4.34028 27.0977Z"
              fill="currentColor"
            />
            <path
              d="M4.33984 9.53517C4.89062 9.82814 5.44141 10.1172 5.99219 10.4102C7.31641 11.1094 8.63672 11.8086 9.96094 12.5078C11.5664 13.3555 13.1758 14.207 14.7813 15.0547C16.1641 15.7852 17.5508 16.5195 18.9336 17.25C19.6055 17.6055 20.2852 17.9531 20.9531 18.3164C20.9609 18.3203 20.9727 18.3281 20.9805 18.332C20.3242 18.332 19.668 18.332 19.0078 18.332C19.5586 18.0391 20.1094 17.75 20.6602 17.457C21.9844 16.7578 23.3047 16.0586 24.6289 15.3594C26.2344 14.5117 27.8438 13.6602 29.4492 12.8125C30.832 12.082 32.2188 11.3477 33.6016 10.6172C34.2734 10.2617 34.9414 9.89454 35.6211 9.55079C35.6289 9.54689 35.6406 9.53907 35.6484 9.53517C35.6484 10.6602 35.6484 11.7852 35.6484 12.9063C35.0977 12.6172 34.5469 12.3242 33.9961 12.0352C32.6719 11.3359 31.3516 10.6367 30.0273 9.93751C28.4219 9.08986 26.8125 8.23829 25.207 7.39064C23.8242 6.66017 22.4375 5.9297 21.0547 5.19532C20.3828 4.83986 19.7031 4.4922 19.0352 4.12892C19.0273 4.12501 19.0156 4.1172 19.0078 4.11329C19.6641 4.11329 20.3203 4.11329 20.9805 4.11329C20.4297 4.40236 19.8789 4.69532 19.3281 4.98439C18.0039 5.68361 16.6836 6.38282 15.3594 7.08204C13.7539 7.9297 12.1445 8.78126 10.5391 9.62892C9.15625 10.3594 7.76953 11.0899 6.38672 11.8242C5.71484 12.1797 5.04297 12.543 4.36719 12.8906C4.35938 12.8945 4.34766 12.9024 4.33984 12.9063C3.87891 13.1484 3.34375 13.2422 2.83594 13.1016C2.38281 12.9766 1.89062 12.625 1.66797 12.2031C1.42969 11.75 1.30859 11.1992 1.47266 10.6992C1.625 10.2266 1.91797 9.76954 2.37109 9.53126C2.92969 9.23829 3.48828 8.94142 4.04688 8.64845C5.375 7.94923 6.69922 7.24611 8.02734 6.54689C9.64062 5.69532 11.2539 4.84376 12.8672 3.9922C14.2461 3.26173 15.625 2.53517 17.0039 1.8047C17.668 1.45314 18.3281 1.08986 18.9961 0.753918C19.4023 0.546887 19.8047 0.449231 20.2617 0.511731C20.5312 0.546887 20.7656 0.628918 21.0117 0.757824C21.0859 0.796887 21.1562 0.835949 21.2305 0.871106C21.5742 1.05079 21.918 1.23439 22.2617 1.41407C23.5156 2.07814 24.7734 2.7422 26.0273 3.40236C27.625 4.24611 29.2266 5.09376 30.8242 5.93751C32.2695 6.69923 33.7109 7.46486 35.1562 8.22657C35.9453 8.64454 36.7344 9.06251 37.5234 9.47657C37.5586 9.49611 37.5977 9.51564 37.6328 9.53517C38.9062 10.207 38.9062 12.2344 37.6328 12.9063C37.0742 13.2031 36.5156 13.4961 35.957 13.793C34.6289 14.4961 33.3047 15.1953 31.9766 15.8984C30.3633 16.75 28.75 17.6055 27.1367 18.457C25.7578 19.1875 24.3789 19.9141 23 20.6445C22.3359 20.9961 21.6758 21.3594 21.0078 21.6992C20.6016 21.9063 20.1992 22.0039 19.7422 21.9414C19.4727 21.9063 19.2383 21.8242 18.9922 21.6953C18.918 21.6563 18.8477 21.6172 18.7734 21.582C18.4297 21.4024 18.0859 21.2188 17.7422 21.0391C16.4883 20.375 15.2305 19.7109 13.9766 19.0469C12.3789 18.2031 10.7773 17.3555 9.17969 16.5117C7.73438 15.75 6.29297 14.9844 4.84766 14.2227C4.05859 13.8047 3.26953 13.3867 2.48047 12.9688C2.44531 12.9492 2.40625 12.9297 2.37109 12.9102C1.94922 12.6875 1.59766 12.1953 1.47266 11.7422C1.34375 11.2734 1.40234 10.6524 1.66797 10.2383C2.26172 9.31642 3.37109 9.02345 4.33984 9.53517Z"
              fill="currentColor"
            />
            <path
              d="M27.3357 17.3125C26.7849 17.0195 26.2341 16.7305 25.6833 16.4375C24.3591 15.7383 23.0388 15.0391 21.7146 14.3398C20.1091 13.4922 18.4997 12.6406 16.8943 11.793C15.5115 11.0625 14.1247 10.3281 12.7419 9.59764C12.07 9.24217 11.3865 8.89842 10.7224 8.53124C10.7146 8.52733 10.7029 8.51952 10.695 8.51561C10.2732 8.29296 9.92161 7.80077 9.79661 7.34764C9.6677 6.87889 9.7263 6.2578 9.99192 5.84374C10.5857 4.92186 11.695 4.6328 12.6638 5.14452C13.2146 5.43749 13.7654 5.72655 14.3161 6.01952C15.6404 6.71874 16.9607 7.41796 18.2849 8.11717C19.8904 8.96483 21.4997 9.81639 23.1052 10.6641C24.488 11.3945 25.8747 12.1289 27.2575 12.8594C27.9294 13.2148 28.613 13.5586 29.2771 13.9258C29.2849 13.9297 29.2966 13.9375 29.3044 13.9414C29.7263 14.1641 30.0779 14.6562 30.2029 15.1094C30.3318 15.5781 30.2732 16.1992 30.0075 16.6133C29.4177 17.5312 28.3044 17.8242 27.3357 17.3125Z"
              fill="currentColor"
            />
          </svg>

          <p>Order</p>
        </div>
        <hr className="connecting_line" />
      </div>
    </section>
  );
};
export default ProgressContainer;
