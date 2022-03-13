import React, { DetailedHTMLProps, HTMLAttributes, useState } from 'react';
import cn from 'classnames';

import { useTheme } from '../../hooks/useTheme';

import { Theme } from '../../context/ThemeContext';

import styles from './ThemeToggle.module.scss';

interface ThemeToggleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className,
}): React.ReactElement => {
  const theme = useTheme();
  const [typeTheme, setTypeTheme] = useState<Theme>(theme.theme);

  const changeTheme = () => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    setTypeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  return (
    <div className={cn(styles.Wrapper, className)} onClick={changeTheme}>
      <div
        className={cn(styles.Theme, {
          [styles.Theme_dark]: typeTheme === Theme.DARK,
        })}
      >
        <div className={cn(styles.Clouds)}>
          <svg
            className={cn(styles.Clouds__item)}
            width="87"
            height="49"
            viewBox="0 0 87 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.445 19.0828C14.1756 18.6856 14.7391 18.0354 15.0281 17.2557C18.6556 7.46971 28.0314 0.5 39.0257 0.5C48.9079 0.5 57.4824 6.1309 61.7503 14.3766C62.5066 15.8378 64.2042 16.6033 65.8217 16.3018C66.8854 16.1036 67.9821 16 69.1029 16C78.9872 16 87 24.0589 87 34C87 43.9411 78.9872 52 69.1029 52C64.7989 52 60.8498 50.472 57.7626 47.9261C56.4908 46.8773 54.6302 46.7331 53.2633 47.6546C52.5918 48.1073 51.8978 48.5289 51.1833 48.9173C50.4527 49.3145 49.8895 49.9646 49.6005 50.7443C45.973 60.5303 36.5972 67.5 25.6029 67.5C11.4628 67.5 0 55.9713 0 41.75C0 31.9541 5.43878 23.4357 13.445 19.0828Z"
              fill="#D0E7F6"
            />
            <path
              d="M14.2568 25.0608C14.9835 24.6549 15.5478 24.0066 15.8504 23.2312C18.7579 15.7799 26.013 10.5 34.5029 10.5C41.9952 10.5 48.5258 14.612 51.9554 20.6996C52.7604 22.1284 54.4504 22.8873 56.0749 22.6626C56.7079 22.5751 57.3544 22.5299 58.0114 22.5299C65.7371 22.5299 72 28.7845 72 36.5C72 44.2155 65.7371 50.4701 58.0114 50.4701C54.8766 50.4701 51.9826 49.4404 49.6502 47.701C48.3353 46.7204 46.4886 46.574 45.0972 47.4428C44.8217 47.6149 44.5417 47.7804 44.2573 47.9392C43.5307 48.3451 42.9665 48.9934 42.6639 49.7688C39.7564 57.2201 32.5013 62.5 24.0114 62.5C12.9594 62.5 4 53.5524 4 42.5149C4 35.0146 8.13718 28.4792 14.2568 25.0608Z"
              fill="#E3F1F5"
            />
          </svg>
          <svg
            className={cn(styles.Clouds__item)}
            width="77"
            height="66"
            viewBox="0 0 77 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M62.8313 25.8774C61.8081 25.8774 60.8102 25.9977 59.8484 26.2263C59.3982 26.3333 58.9236 26.1492 58.679 25.7564C57.6715 24.138 56.5139 22.6434 55.2284 21.2975C55.113 21.1766 55.0281 21.0291 54.9817 20.8685C51.7304 9.63242 42.2334 1.5 31.0241 1.5C22.4857 1.5 14.9409 6.21859 10.3932 13.4332C10.1727 13.7829 9.76588 13.97 9.35652 13.9123C8.30864 13.7647 7.24064 13.6887 6.15663 13.6887C-7.73699 13.6887 -19 26.1825 -19 41.5943C-19 57.0062 -7.73699 69.5 6.15663 69.5C11.8773 69.5 17.1521 67.3818 21.3782 63.8139C21.7711 63.4822 22.3494 63.4822 22.7423 63.8139C26.9684 67.3818 32.2432 69.5 37.9639 69.5C46.5551 69.5 54.1405 64.7227 58.679 57.4323C58.9235 57.0395 59.3982 56.8554 59.8484 56.9624C60.8102 57.191 61.8081 57.3113 62.8313 57.3113C70.6565 57.3113 77 50.2746 77 41.5943C77 32.9141 70.6565 25.8774 62.8313 25.8774Z"
              fill="#D0E7F6"
            />
            <path
              d="M61.75 30.5C60.8837 30.5 60.0384 30.5899 59.2229 30.761C58.7968 30.8503 58.3536 30.683 58.1046 30.3259C57.2577 29.1111 56.29 27.9868 55.2189 26.9703C55.0918 26.8498 54.9968 26.6989 54.9427 26.5323C52.1124 17.8077 43.9178 11.5 34.25 11.5C26.8998 11.5 20.4012 15.146 16.464 20.728C16.239 21.047 15.8556 21.2165 15.4682 21.1682C14.5777 21.0572 13.6705 21 12.75 21C0.737808 21 -9 30.7378 -9 42.75C-9 54.7622 0.737808 64.5 12.75 64.5C17.6724 64.5 22.2129 62.8648 25.8579 60.108C26.237 59.8212 26.763 59.8212 27.1421 60.108C30.7871 62.8648 35.3276 64.5 40.25 64.5C47.643 64.5 54.1745 60.8114 58.1046 55.1742C58.3535 54.817 58.7968 54.6497 59.2229 54.739C60.0384 54.9101 60.8837 55 61.75 55C68.5155 55 74 49.5155 74 42.75C74 35.9845 68.5155 30.5 61.75 30.5Z"
              fill="#E3F1F5"
            />
          </svg>
        </div>
        <svg
          className={cn(styles.Stars)}
          width="146"
          height="84"
          viewBox="0 0 146 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.6">
            <path
              opacity="0.5"
              d="M90.3953 36.7951C90.6811 35.9153 91.9258 35.9153 92.2116 36.7951C92.3395 37.1885 92.7061 37.4549 93.1198 37.4549C94.0449 37.4549 94.4295 38.6386 93.6811 39.1824C93.3464 39.4255 93.2064 39.8566 93.3342 40.25C93.6201 41.1298 92.6131 41.8614 91.8648 41.3176C91.5301 41.0745 91.0769 41.0745 90.7422 41.3176C89.9938 41.8614 88.9869 41.1298 89.2727 40.25C89.4006 39.8566 89.2605 39.4255 88.9258 39.1824C88.1774 38.6386 88.5621 37.4549 89.4871 37.4549C89.9008 37.4549 90.2675 37.1885 90.3953 36.7951Z"
              fill="#F4FEFF"
            />
            <path
              opacity="0.5"
              d="M90.3953 36.7951C90.6811 35.9153 91.9258 35.9153 92.2116 36.7951C92.3395 37.1885 92.7061 37.4549 93.1198 37.4549C94.0449 37.4549 94.4295 38.6386 93.6811 39.1824C93.3464 39.4255 93.2064 39.8566 93.3342 40.25C93.6201 41.1298 92.6131 41.8614 91.8648 41.3176C91.5301 41.0745 91.0769 41.0745 90.7422 41.3176C89.9938 41.8614 88.9869 41.1298 89.2727 40.25C89.4006 39.8566 89.2605 39.4255 88.9258 39.1824C88.1774 38.6386 88.5621 37.4549 89.4871 37.4549C89.9008 37.4549 90.2675 37.1885 90.3953 36.7951Z"
              fill="#F4FEFF"
            />
            <path
              opacity="0.5"
              d="M74.3227 73.2807C74.0242 74.1448 72.7944 74.122 72.528 73.2476C72.4089 72.8565 72.0515 72.5866 71.6427 72.579C70.7287 72.5621 70.3703 71.3855 71.1197 70.8619C71.4548 70.6278 71.6011 70.2044 71.482 69.8134C71.2156 68.9389 72.2239 68.2344 72.9534 68.7853C73.2797 69.0317 73.7274 69.04 74.0626 68.8058C74.812 68.2823 75.7935 69.0235 75.495 69.8876C75.3615 70.274 75.492 70.7024 75.8182 70.9488C76.5478 71.4997 76.1461 72.6623 75.2321 72.6454C74.8233 72.6378 74.4562 72.8943 74.3227 73.2807Z"
              fill="#F4FEFF"
            />
            <path
              opacity="0.5"
              d="M116.395 76.7951C116.681 75.9153 117.926 75.9153 118.212 76.7951C118.339 77.1885 118.706 77.4549 119.12 77.4549C120.045 77.4549 120.429 78.6386 119.681 79.1824C119.346 79.4255 119.206 79.8566 119.334 80.25C119.62 81.1298 118.613 81.8614 117.865 81.3176C117.53 81.0745 117.077 81.0745 116.742 81.3176C115.994 81.8614 114.987 81.1298 115.273 80.25C115.401 79.8566 115.261 79.4255 114.926 79.1824C114.177 78.6386 114.562 77.4549 115.487 77.4549C115.901 77.4549 116.267 77.1885 116.395 76.7951Z"
              fill="#F4FEFF"
            />
            <path
              opacity="0.5"
              d="M116.395 76.7951C116.681 75.9153 117.926 75.9153 118.212 76.7951C118.339 77.1885 118.706 77.4549 119.12 77.4549C120.045 77.4549 120.429 78.6386 119.681 79.1824C119.346 79.4255 119.206 79.8566 119.334 80.25C119.62 81.1298 118.613 81.8614 117.865 81.3176C117.53 81.0745 117.077 81.0745 116.742 81.3176C115.994 81.8614 114.987 81.1298 115.273 80.25C115.401 79.8566 115.261 79.4255 114.926 79.1824C114.177 78.6386 114.562 77.4549 115.487 77.4549C115.901 77.4549 116.267 77.1885 116.395 76.7951Z"
              fill="#F4FEFF"
            />
            <path
              opacity="0.5"
              d="M50.3518 33.3014C50.0532 34.1654 48.8235 34.1427 48.5571 33.2682C48.438 32.8771 48.0806 32.6072 47.6718 32.5996C46.7578 32.5827 46.3994 31.4061 47.1488 30.8825C47.4839 30.6484 47.6301 30.2251 47.511 29.834C47.2447 28.9595 48.2529 28.255 48.9825 28.8059C49.3087 29.0523 49.7565 29.0606 50.0916 28.8265C50.841 28.3029 51.8226 29.0441 51.5241 29.9082C51.3906 30.2946 51.5211 30.723 51.8473 30.9694C52.5768 31.5203 52.1752 32.6829 51.2612 32.666C50.8524 32.6584 50.4853 32.9149 50.3518 33.3014Z"
              fill="#F4FEFF"
            />
            <path
              opacity="0.75"
              d="M92.876 3.84422C93.3674 2.52068 95.2395 2.52067 95.731 3.84422L95.7591 3.91997C95.9638 4.47116 96.4897 4.83688 97.0777 4.83688H97.4012C98.7145 4.83688 99.2136 6.55225 98.1053 7.25682C97.5829 7.58893 97.3667 8.24909 97.5821 8.8294C98.0373 10.055 96.6861 11.1884 95.5827 10.487L95.1319 10.2004C94.6263 9.87903 93.9806 9.87903 93.4751 10.2004L93.0242 10.487C91.9209 11.1884 90.5697 10.055 91.0248 8.8294C91.2403 8.24909 91.024 7.58893 90.5016 7.25682C89.3933 6.55225 89.8924 4.83688 91.2057 4.83688H91.5293C92.1172 4.83688 92.6432 4.47116 92.8478 3.91997L92.876 3.84422Z"
              fill="#F4FEFF"
            />
            <path
              opacity="0.75"
              d="M92.876 3.84422C93.3674 2.52068 95.2395 2.52067 95.731 3.84422L95.7591 3.91997C95.9638 4.47116 96.4897 4.83688 97.0777 4.83688H97.4012C98.7145 4.83688 99.2136 6.55225 98.1053 7.25682C97.5829 7.58893 97.3667 8.24909 97.5821 8.8294C98.0373 10.055 96.6861 11.1884 95.5827 10.487L95.1319 10.2004C94.6263 9.87903 93.9806 9.87903 93.4751 10.2004L93.0242 10.487C91.9209 11.1884 90.5697 10.055 91.0248 8.8294C91.2403 8.24909 91.024 7.58893 90.5016 7.25682C89.3933 6.55225 89.8924 4.83688 91.2057 4.83688H91.5293C92.1172 4.83688 92.6432 4.47116 92.8478 3.91997L92.876 3.84422Z"
              fill="#F4FEFF"
            />
            <path
              opacity="0.75"
              d="M118.443 43.9077C118.888 42.6285 120.719 42.6285 121.164 43.9077C121.356 44.4598 121.879 44.8369 122.464 44.8369H122.627C123.931 44.8369 124.449 46.5238 123.369 47.2557C122.873 47.5922 122.667 48.2243 122.864 48.7905C123.292 50.0205 121.911 51.1028 120.833 50.3718L120.612 50.2222C120.124 49.8911 119.483 49.8911 118.995 50.2222L118.774 50.3718C117.696 51.1028 116.315 50.0205 116.743 48.7905C116.94 48.2243 116.734 47.5922 116.238 47.2557C115.158 46.5238 115.676 44.8369 116.98 44.8369H117.143C117.728 44.8369 118.251 44.4598 118.443 43.9077Z"
              fill="#F4FEFF"
            />
            <path
              opacity="0.75"
              d="M118.443 43.9077C118.888 42.6285 120.719 42.6285 121.164 43.9077C121.356 44.4598 121.879 44.8369 122.464 44.8369H122.627C123.931 44.8369 124.449 46.5238 123.369 47.2557C122.873 47.5922 122.667 48.2243 122.864 48.7905C123.292 50.0205 121.911 51.1028 120.833 50.3718L120.612 50.2222C120.124 49.8911 119.483 49.8911 118.995 50.2222L118.774 50.3718C117.696 51.1028 116.315 50.0205 116.743 48.7905C116.94 48.2243 116.734 47.5922 116.238 47.2557C115.158 46.5238 115.676 44.8369 116.98 44.8369H117.143C117.728 44.8369 118.251 44.4598 118.443 43.9077Z"
              fill="#F4FEFF"
            />
            <path
              opacity="0.75"
              d="M47.7163 66.4654C47.2686 67.7615 45.4239 67.7274 45.0243 66.4156C44.8456 65.829 44.3095 65.4242 43.6964 65.4128C42.3254 65.3875 41.7878 63.6225 42.9118 62.8372C43.4145 62.486 43.6339 61.851 43.4552 61.2643C43.0557 59.9526 44.5681 58.8959 45.6624 59.7223C46.1517 60.0919 46.8234 60.1043 47.3261 59.753C48.4502 58.9677 49.9225 60.0796 49.4748 61.3756C49.2745 61.9553 49.4703 62.5979 49.9596 62.9675C51.0539 63.7939 50.4514 65.5377 49.0804 65.5124C48.4673 65.501 47.9166 65.8858 47.7163 66.4654Z"
              fill="#F4FEFF"
            />
            <path
              d="M138.921 35.7646C139.01 35.3536 139.597 35.3536 139.686 35.7646C139.725 35.9446 139.884 36.0729 140.068 36.0729H140.133C140.543 36.0729 140.758 36.5609 140.48 36.8633L140.206 37.1618C140.096 37.2824 140.051 37.4492 140.085 37.6092L140.195 38.1151C140.273 38.4777 139.822 38.7113 139.571 38.4379C139.427 38.2809 139.18 38.2809 139.035 38.4379C138.785 38.7113 138.334 38.4777 138.412 38.1151L138.522 37.6092C138.556 37.4492 138.511 37.2824 138.4 37.1618L138.127 36.8633C137.849 36.5609 138.064 36.0729 138.474 36.0729H138.539C138.723 36.0729 138.882 35.9446 138.921 35.7646Z"
              fill="#F4FEFF"
            />
            <path
              d="M138.921 35.7646C139.01 35.3536 139.597 35.3536 139.686 35.7646C139.725 35.9446 139.884 36.0729 140.068 36.0729H140.133C140.543 36.0729 140.758 36.5609 140.48 36.8633L140.206 37.1618C140.096 37.2824 140.051 37.4492 140.085 37.6092L140.195 38.1151C140.273 38.4777 139.822 38.7113 139.571 38.4379C139.427 38.2809 139.18 38.2809 139.035 38.4379C138.785 38.7113 138.334 38.4777 138.412 38.1151L138.522 37.6092C138.556 37.4492 138.511 37.2824 138.4 37.1618L138.127 36.8633C137.849 36.5609 138.064 36.0729 138.474 36.0729H138.539C138.723 36.0729 138.882 35.9446 138.921 35.7646Z"
              fill="#F4FEFF"
            />
            <path
              d="M26.9152 73.7855C26.7659 74.2176 26.151 74.2062 26.0178 73.7689C25.9583 73.5734 25.7796 73.4384 25.5752 73.4347C25.1182 73.4262 24.939 72.8379 25.3137 72.5761C25.4812 72.459 25.5544 72.2474 25.4948 72.0518C25.3616 71.6146 25.8658 71.2624 26.2305 71.5378C26.3936 71.661 26.6175 71.6651 26.7851 71.5481C27.1598 71.2863 27.6506 71.6569 27.5013 72.0889C27.4346 72.2821 27.4998 72.4964 27.6629 72.6195C28.0277 72.895 27.8269 73.4763 27.3699 73.4678C27.1655 73.4641 26.9819 73.5923 26.9152 73.7855Z"
              fill="#F4FEFF"
            />
            <path
              d="M2.9444 33.8062C2.79515 34.2382 2.18025 34.2268 2.04706 33.7896C1.9875 33.594 1.8088 33.4591 1.60442 33.4553C1.14742 33.4469 0.968216 32.8585 1.34291 32.5968C1.51047 32.4797 1.5836 32.268 1.52404 32.0725C1.39085 31.6352 1.89499 31.283 2.25975 31.5585C2.42288 31.6816 2.64677 31.6858 2.81434 31.5687C3.18903 31.3069 3.67981 31.6776 3.53055 32.1096C3.4638 32.3028 3.52905 32.517 3.69217 32.6402C4.05693 32.9156 3.85611 33.4969 3.3991 33.4885C3.19472 33.4847 3.01116 33.613 2.9444 33.8062Z"
              fill="#F4FEFF"
            />
          </g>
        </svg>
        <div className={cn(styles.Circle)}>
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <span key={i} className={cn(styles.Circle__crater)}></span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;