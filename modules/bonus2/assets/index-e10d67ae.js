var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty,
  M = Object.prototype.propertyIsEnumerable;
var o = (s, L, t) =>
    L in s
      ? d(s, L, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (s[L] = t),
  e = (s, L) => {
    for (var t in L || (L = {})) g.call(L, t) && o(s, t, L[t]);
    if (r) for (var t of r(L)) M.call(L, t) && o(s, t, L[t]);
    return s;
  };
import { j as i, b as Z, i as n, t as C } from "./web-13cf6287.js";
import { e as p, c as V } from "./manifest-cc1f4445.js";
import { i as h, c as m, m as H } from "./solid-js-38561dfe.js";
var u = C("<svg>"),
  f = C(
    '<svg><path d="M19.6912 5.6001L9.2912 16.0001L19.6912 26.4001L22.7088 23.3825L15.3264 16.0001L22.7088 8.6177L19.6912 5.6001Z"></svg>',
    !1,
    !0
  ),
  _ = C(
    '<svg><g id=share_media/telegram><path id=vector d="M4.90694 15.2947L26.2758 5.47633C27.0847 5.10485 28.0305 5.4855 28.3877 6.32673C28.515 6.62491 28.5543 6.95474 28.5022 7.27707L25.6344 24.999C25.4582 26.0876 24.4667 26.8222 23.42 26.639C23.1213 26.5865 22.8386 26.4616 22.5952 26.2741L15.3683 20.7061C14.6572 20.1589 14.5074 19.1161 15.0344 18.3765C15.0945 18.2915 15.1633 18.2124 15.2386 18.1407L22.4846 11.2259C22.5503 11.1634 22.5543 11.0585 22.4942 10.9902C22.4421 10.9319 22.3581 10.9194 22.2916 10.9618L11.296 18.0441C10.8964 18.3006 10.4087 18.3631 9.96103 18.2132L4.96937 16.5382C4.6322 16.4249 4.44722 16.0493 4.55615 15.6994C4.61221 15.5195 4.74036 15.3713 4.90692 15.2946L4.90694 15.2947Z"></svg>',
    !1,
    !0
  ),
  $ = C(
    '<svg><path d="M24.6077 6.86258L28.4987 10.3943C29.0208 10.8677 29.3192 11.5404 29.3192 12.2449L29.3332 25.7647C29.3342 26.6862 28.5876 27.4347 27.6661 27.4356H19.3377C18.4171 27.4356 17.6696 26.6899 17.6686 25.7684L17.6546 12.2486C17.6537 11.5423 17.9521 10.8677 18.4751 10.3925L22.3642 6.86258C23.0004 6.28534 23.9715 6.28534 24.6077 6.86258ZM23.5131 10.341C22.7066 10.341 22.0527 11.0455 22.0527 11.9156C22.0527 12.7856 22.7066 13.4901 23.5131 13.4901C24.3196 13.4901 24.9735 12.7856 24.9735 11.9156C24.9735 11.0455 24.3196 10.341 23.5131 10.341Z"></svg>',
    !1,
    !0
  ),
  I = C(
    '<svg><path d="M19.2384 7.93646L17.7396 9.29677C16.891 10.0667 16.4018 11.2025 16.4027 12.3982L16.4167 25.6401C16.4167 25.7917 16.413 25.8852 16.4467 26.0864C16.4803 26.2875 16.4036 26.3071 16.2577 26.2651C15.6093 26.0798 14.6363 25.7982 13.3387 25.4212C12.449 25.1639 11.9213 24.1787 12.158 23.2198L15.324 10.4251C15.5148 9.65509 16.0116 9.01423 16.6805 8.67649L18.9577 7.52668C19.0812 7.464 19.2318 7.51358 19.2936 7.63708C19.3441 7.73718 19.3216 7.86068 19.2384 7.93646Z"></svg>',
    !1,
    !0
  ),
  b = C(
    '<svg><path d="M17.9113 6.76001L16.1122 7.68621C15.0934 8.21013 14.3271 9.18031 14.0184 10.3357L10.6045 23.1305C10.5783 23.2296 10.5512 23.3952 10.5484 23.5328C10.5456 23.6703 10.5316 23.8424 10.1489 23.6085C9.60255 23.2755 8.783 22.7796 7.68745 22.1229C6.89503 21.6448 6.63962 20.5558 7.11676 19.6904L13.4861 8.15119C13.8696 7.45607 14.5152 6.96677 15.2496 6.81334L17.7466 6.29223C17.8823 6.26416 18.0142 6.35117 18.0432 6.48589C18.0666 6.59629 18.0132 6.70762 17.9131 6.76001H17.9113Z"></svg>',
    !1,
    !0
  ),
  w = C(
    '<svg><path d="M16.9786 5.20541L15.0008 5.6339C13.881 5.87621 12.8893 6.6153 12.2924 7.6519L5.68356 19.1266C5.62088 19.2351 5.56475 19.3464 5.51516 19.4587C5.47119 19.5588 5.46371 19.7908 5.20175 19.5569C4.71245 19.12 4.02107 18.4006 3.12574 17.3986C2.48394 16.7315 2.51949 15.6135 3.20432 14.9016L12.3429 5.40375C12.893 4.83212 13.6433 4.52619 14.3927 4.56829L16.9393 4.71143C17.0778 4.71892 17.1826 4.83773 17.1751 4.97526C17.1685 5.08753 17.0881 5.18202 16.9786 5.20541Z"></svg>',
    !1,
    !0
  ),
  z = C(
    '<svg><path id=vector d="M13.2635 28.4615C7.89271 28.4615 3.53833 24.1072 3.53833 18.7364V13.2632C3.53833 7.89247 7.89271 3.53809 13.2635 3.53809L18.7367 3.53811C24.1074 3.53811 28.4617 7.8925 28.4617 13.2632V18.7364C28.4617 24.1072 24.1074 28.4616 18.7366 28.4616H13.2634L13.2635 28.4615ZM13.2635 26.3438H18.7366C22.9387 26.3438 26.3442 22.9376 26.3442 18.7364V13.2632C26.3442 9.06111 22.9378 5.65571 18.7367 5.65571H13.2635C9.06142 5.65571 5.65601 9.06201 5.65601 13.2632V18.7364C5.65601 22.9384 9.06234 26.3438 13.2635 26.3438H13.2635ZM16.0005 13.1875C15.3654 13.1875 14.8411 12.7158 14.758 12.1038L14.7469 11.9339V11.8536C14.7469 11.1613 15.3082 10.5991 16.0015 10.5991C16.6366 10.5991 17.1609 11.0708 17.2439 11.6828L17.255 11.8527V11.933C17.255 12.6253 16.6937 13.1875 16.0005 13.1875H16.0005ZM16.0005 22.1187C15.3654 22.1187 14.8411 21.647 14.758 21.0351L14.7469 20.8652V15.4824C14.7469 14.7901 15.3082 14.2279 16.0015 14.2279C16.6366 14.2279 17.1609 14.6996 17.2439 15.3116L17.255 15.4815V20.8643C17.255 21.5575 16.6937 22.1187 16.0005 22.1187H16.0005Z"></svg>',
    !1,
    !0
  ),
  P = C(
    '<svg><g id=tips/check><path id=vector fill-rule=evenodd clip-rule=evenodd d="M26.7481 8.49705C27.5297 9.30169 27.5297 10.6063 26.7481 11.4109L15.0017 23.5027C14.2201 24.3073 12.9528 24.3073 12.1712 23.5027L5.25201 16.3801C4.47037 15.5755 4.47036 14.2709 5.25199 13.4662C6.03363 12.6616 7.30092 12.6616 8.08257 13.4662L13.5864 19.1319L23.9175 8.49702C24.6992 7.69239 25.9665 7.6924 26.7481 8.49705Z"></svg>',
    !1,
    !0
  ),
  S = C(
    '<svg><g id=bingo/recommendgame><g id=vector><path d="M21.0593 6.26918C20.9846 6.27818 20.8972 6.28268 20.809 6.28268C20.1104 6.28268 19.4846 5.96847 19.066 5.4742L19.0633 5.4706L17.6264 3.75371C17.2042 3.25674 16.5784 2.94434 15.8798 2.94434C15.1632 2.94434 14.523 3.27385 14.1035 3.78973L14.0999 3.79423L12.6963 5.53723C12.2786 6.0576 11.6421 6.38712 10.929 6.38712C10.8489 6.38712 10.7688 6.38262 10.6904 6.37451L10.7003 6.37541L8.49818 6.18275C8.43785 6.17735 8.36853 6.17374 8.29831 6.17374C7.03787 6.17374 6.01602 7.1956 6.01602 8.45603C6.01602 8.54336 6.02052 8.62979 6.03043 8.71442L6.02953 8.70361L6.26901 10.9256C6.27711 10.9985 6.28161 11.0822 6.28161 11.1678C6.28161 11.8691 5.96831 12.4966 5.47404 12.9189L3.75445 14.3585C3.25748 14.7807 2.94507 15.4064 2.94507 16.1051C2.94507 16.8217 3.27458 17.4618 3.79046 17.8814L3.79496 17.885L5.53796 19.2885C6.05744 19.7099 6.38695 20.3491 6.38695 21.0649C6.38695 21.1423 6.38335 21.2188 6.37525 21.2944L6.37615 21.2845L6.18348 23.5137C6.17808 23.5713 6.17538 23.6388 6.17538 23.7064C6.17538 24.9668 7.19723 25.9886 8.45766 25.9886C8.54499 25.9886 8.63142 25.9841 8.71605 25.9742L8.70525 25.9751L10.9272 25.7159C11.0001 25.7077 11.0839 25.7032 11.1694 25.7032C11.8716 25.7032 12.5 26.0193 12.9205 26.518L12.9232 26.5216L14.3601 28.225C14.7832 28.7328 15.4152 29.0542 16.1229 29.0542C16.8305 29.0542 17.4635 28.7328 17.883 28.2286L17.8857 28.225L19.2893 26.4748C19.7106 25.9553 20.3498 25.6258 21.0656 25.6258C21.143 25.6258 21.2195 25.6294 21.2952 25.6375L21.2853 25.6366L23.5144 25.8293C23.5721 25.8347 23.6396 25.8374 23.7071 25.8374C24.9675 25.8374 25.9894 24.8155 25.9894 23.5551C25.9894 23.4678 25.9849 23.3814 25.975 23.2967L25.9759 23.3075L25.7364 21.0856C25.7274 21.0099 25.7229 20.9235 25.7229 20.8344C25.7229 20.1339 26.0398 19.5082 26.5386 19.0923L26.5422 19.0896L28.2257 17.6257C28.7335 17.2025 29.0549 16.5705 29.0549 15.8629C29.0549 15.1552 28.7335 14.5223 28.2293 14.1028L28.2257 14.1001L26.4755 12.6965C25.9552 12.2787 25.6257 11.6422 25.6257 10.9292C25.6257 10.8491 25.6302 10.7689 25.6383 10.6906L25.6374 10.7005L25.83 8.47133C25.8354 8.41101 25.839 8.34169 25.839 8.27146C25.839 7.01103 24.8172 5.98918 23.5567 5.98918C23.4694 5.98918 23.383 5.99368 23.2984 6.00359L23.3092 6.00269L21.0593 6.26918ZM22.949 18.7367C21.8245 21.533 19.1344 23.4705 15.9923 23.4705C11.8626 23.4705 8.51438 20.1222 8.51438 15.9925C8.51438 11.8628 11.8626 8.51455 15.9923 8.51455C16.9809 8.51455 17.9244 8.70631 18.7878 9.05473L18.7374 9.03673C21.5338 10.1594 23.4721 12.8477 23.4721 15.9889C23.4721 16.9784 23.2794 17.9228 22.9301 18.7871L22.949 18.7367Z"></path><path d="M16.6415 11.5909L17.6795 13.387C17.7849 13.5716 17.9631 13.7039 18.1738 13.7453L18.1783 13.7462L20.1347 14.1324C20.4795 14.2027 20.7352 14.5034 20.7352 14.8635C20.7352 15.0472 20.6685 15.2146 20.5596 15.3443L19.1902 16.9729C19.084 17.0981 19.0201 17.2619 19.0201 17.4402C19.0201 17.4681 19.0219 17.4951 19.0246 17.5221V17.5185L19.2046 19.5145C19.2046 19.5235 19.2055 19.5334 19.2055 19.5442C19.2055 19.9556 18.8715 20.2897 18.4601 20.2897C18.3637 20.2897 18.2728 20.2717 18.1882 20.2383L18.1936 20.2401L16.2507 19.4947C16.1697 19.4632 16.0761 19.4452 15.9779 19.4452C15.8798 19.4452 15.7862 19.4632 15.6997 19.4965L15.7051 19.4947L13.7956 20.2401C13.7155 20.2717 13.6227 20.2906 13.5264 20.2906C13.1149 20.2906 12.7809 19.9565 12.7809 19.5451C12.7809 19.5199 12.7818 19.4956 12.7845 19.4713V19.474L12.9709 17.478C12.9727 17.46 12.9736 17.4384 12.9736 17.4177C12.9736 17.2322 12.907 17.063 12.7971 16.9315L11.4341 15.3028C11.3251 15.1741 11.2594 15.0066 11.2594 14.823C11.2594 14.4629 11.5151 14.1622 11.8554 14.0928L11.8599 14.0919L13.8091 13.7057C14.0261 13.6616 14.2052 13.5301 14.3133 13.3501L14.3151 13.3465L15.3531 11.59C15.4846 11.3658 15.724 11.2172 15.9986 11.2172C16.2732 11.2172 16.5127 11.3658 16.6424 11.5864L16.6442 11.59L16.6415 11.5909Z"></svg>',
    !1,
    !0
  ),
  k = C(
    '<svg><path id=vector d="M14.7567 3.62933C20.0227 3.62933 24.5367 6.49724 25.7322 10.6034C25.7631 10.7072 25.7649 10.811 25.7586 10.912C27.4729 12.5007 28.5172 14.5656 28.5172 16.8263C28.5172 21.8174 23.4597 25.878 17.2441 25.878C16.3345 25.878 15.4341 25.7878 14.5582 25.6167L8.03126 28.2597C7.87557 28.3635 7.46314 28.45 7.02977 28.2597C6.59639 28.0694 6.46347 27.586 6.44526 27.3438C6.50808 22.4938 6.41795 19.5604 6.17486 18.5443C4.44228 16.9091 3.48267 14.8433 3.48267 12.6801C3.48267 7.68902 8.5402 3.62842 14.7558 3.62842L14.7567 3.62933ZM22.6867 15.3168C21.7417 15.3168 20.9769 16.0825 20.9769 17.0266C20.9769 17.9707 21.7417 18.7373 22.6867 18.7373C23.6308 18.7373 24.3965 17.9707 24.3965 17.0266C24.3965 16.0825 23.6308 15.3168 22.6867 15.3168ZM15.2229 15.3168C14.2778 15.3168 13.5131 16.0825 13.5131 17.0266C13.5131 17.9707 14.2787 18.7373 15.2229 18.7373C16.167 18.7373 16.9327 17.9707 16.9327 17.0266C16.9327 16.0825 16.1679 15.3168 15.2229 15.3168ZM14.7567 5.44294C9.54078 5.44294 5.2981 8.69052 5.2981 12.681C5.2981 13.6798 5.57851 14.6594 6.09565 15.5626C6.86497 11.1697 11.5647 7.77551 17.245 7.77551C19.3008 7.77551 21.2236 8.2271 22.8843 9.00189C21.2091 6.85596 18.1363 5.44385 14.7576 5.44385L14.7567 5.44294Z"></svg>',
    !1,
    !0
  ),
  x = C(
    '<svg><g id=vector><path d="M7.65716 13.8363L9.26059 9.19443C9.41494 8.74727 9.90267 8.51001 10.3498 8.66436C10.4715 8.70669 10.5818 8.77461 10.6726 8.86545L13.8954 12.0564L13.1245 15.1469H8.81079L7.65716 13.8363Z"></path><path d="M24.4277 13.8363L22.8243 9.19443C22.67 8.74727 22.1822 8.51001 21.7351 8.66436C21.6134 8.70669 21.5031 8.77461 21.4123 8.86545L18.1895 12.0564L18.9604 15.1469H23.2741L24.4277 13.8363Z"></path><path d="M16.497 5.6895C16.6981 5.79005 16.8613 5.95321 16.9609 6.15518L20.3248 12.9764C20.5762 13.4853 21.1918 13.6943 21.7007 13.4438C21.7077 13.4403 21.7148 13.4368 21.721 13.4332L27.5111 10.4134C28.0147 10.1514 28.6348 10.3481 28.8949 10.8517C29.0334 11.1189 29.0475 11.4329 28.9337 11.7107C27.4547 15.3665 26.5154 18.0742 26.1176 19.8346C25.681 21.7644 25.3106 23.7259 25.0054 25.7191C24.9446 26.1196 24.6015 26.4159 24.1958 26.4186H7.70549C7.28303 26.4203 6.92847 26.1028 6.88349 25.683C6.70622 24.069 6.38077 22.1198 5.90891 19.8355C5.47586 17.7408 4.53303 15.0605 3.08042 11.7954C2.84758 11.2777 3.07865 10.67 3.59637 10.4381C3.87949 10.311 4.20405 10.319 4.48011 10.4601L10.3311 13.4465C10.8365 13.7049 11.4557 13.5038 11.7132 12.9984L11.7185 12.9887L15.1176 6.15166C15.3699 5.64364 15.9872 5.43637 16.4953 5.6895H16.497ZM15.9026 15.0958L13.0944 19.2014L15.9026 23.1729L18.8087 19.2014L15.9026 15.0958Z"></svg>',
    !1,
    !0
  ),
  y = C(
    '<svg><path fill-rule=evenodd clip-rule=evenodd d="M2.53239 0.5H9V20.5H2.53239C0.977797 20.5 0.0175716 18.8041 0.817401 17.471L4.69131 11.0145C4.88132 10.6978 4.88132 10.3022 4.69131 9.9855L0.8174 3.52899C0.0175705 2.19594 0.977797 0.5 2.53239 0.5ZM9.00001 0.5H70V20.5H9.00001V10.5V0.5Z"></svg>',
    !1,
    !0
  ),
  A = C(
    '<svg><g id=vip_club/vipclub_1><path id=vector d="M14.8198 4.00086C19.8189 4.00086 24.1041 6.72341 25.2389 10.6214C25.2683 10.7199 25.27 10.8185 25.264 10.9144C26.8915 12.4226 27.8828 14.3829 27.8828 16.5289C27.8828 21.267 23.0816 25.1218 17.1811 25.1218C16.3176 25.1218 15.4628 25.0362 14.6314 24.8737L8.43522 27.3828C8.28743 27.4813 7.8959 27.5635 7.4845 27.3828C7.07309 27.2022 6.9469 26.7432 6.92962 26.5133C6.98925 21.9092 6.90369 19.1244 6.67292 18.1599C5.02816 16.6076 4.11719 14.6465 4.11719 12.5929C4.11719 7.85479 8.91837 4 14.8189 4L14.8198 4.00086ZM22.3478 15.0959C21.4507 15.0959 20.7247 15.8228 20.7247 16.7191C20.7247 17.6153 21.4507 18.3431 22.3478 18.3431C23.2441 18.3431 23.971 17.6153 23.971 16.7191C23.971 15.8228 23.2441 15.0959 22.3478 15.0959V15.0959ZM15.2623 15.0959C14.3652 15.0959 13.6392 15.8228 13.6392 16.7191C13.6392 17.6153 14.366 18.3431 15.2623 18.3431C16.1586 18.3431 16.8855 17.6153 16.8855 16.7191C16.8855 15.8228 16.1595 15.0959 15.2623 15.0959V15.0959ZM14.8198 5.72255C9.86823 5.72255 5.8406 8.80552 5.8406 12.5937C5.8406 13.5419 6.1068 14.4719 6.59773 15.3293C7.32806 11.159 11.7896 7.93689 17.1819 7.93689C19.1335 7.93689 20.9589 8.36559 22.5354 9.10111C20.9451 7.06395 18.0281 5.72342 14.8207 5.72342L14.8198 5.72255Z"></svg>',
    !1,
    !0
  ),
  R = C(
    '<svg><path id=vector fill-rule=evenodd clip-rule=evenodd d="M4.31877 7.12165C3.7738 8.19121 3.7738 9.59134 3.7738 12.3916V16.9267C3.7738 18.132 3.7738 19.0779 3.81726 19.8497V25.607C3.81726 26.9605 5.13368 27.9232 6.42355 27.5129L14.5533 24.9267H20.2262C23.0265 24.9267 24.4266 24.9267 25.4962 24.3817C26.437 23.9024 27.2019 23.1375 27.6812 22.1967C28.2262 21.1271 28.2262 19.727 28.2262 16.9267V12.3916C28.2262 9.59134 28.2262 8.19121 27.6812 7.12165C27.2019 6.18084 26.437 5.41594 25.4962 4.93657C24.4266 4.3916 23.0265 4.3916 20.2262 4.3916H11.7738C8.97354 4.3916 7.57341 4.3916 6.50385 4.93657C5.56304 5.41594 4.79814 6.18084 4.31877 7.12165ZM11.6484 13.8626C12.6545 13.8626 13.47 13.0241 13.47 11.9898C13.47 10.9556 12.6545 10.1171 11.6484 10.1171C10.6423 10.1171 9.82672 10.9556 9.82672 11.9898C9.82672 13.0241 10.6423 13.8626 11.6484 13.8626ZM20.3499 13.8626C21.356 13.8626 22.1716 13.0242 22.1716 11.9899C22.1716 10.9556 21.356 10.1172 20.3499 10.1172C19.3439 10.1172 18.5283 10.9556 18.5283 11.9899C18.5283 13.0242 19.3439 13.8626 20.3499 13.8626ZM11.3857 17.0121C10.488 17.6275 10.4882 17.6279 10.4885 17.6283L10.4891 17.6292L10.4904 17.6311L10.4933 17.6357L10.5012 17.6475C10.5073 17.6566 10.515 17.668 10.5244 17.6816C10.5431 17.7088 10.5686 17.7448 10.6007 17.7884C10.6649 17.8755 10.7561 17.9933 10.8742 18.1314C11.1095 18.4068 11.4567 18.7688 11.9153 19.1307C12.8335 19.8551 14.2264 20.5986 16.0583 20.5986C17.8901 20.5986 19.2831 19.8551 20.2012 19.1307C20.6598 18.7688 21.007 18.4068 21.2424 18.1314C21.3605 17.9933 21.4517 17.8755 21.5158 17.7884C21.5479 17.7448 21.5734 17.7088 21.5921 17.6816C21.6015 17.668 21.6093 17.6566 21.6153 17.6475L21.6232 17.6357L21.6262 17.6311L21.628 17.6283C21.6283 17.6279 21.6285 17.6275 20.7308 17.0121C19.8331 16.3968 19.8333 16.3964 19.8336 16.3961L19.8349 16.3941L19.8361 16.3922L19.8319 16.3983C19.8256 16.4074 19.8136 16.4246 19.7958 16.4488C19.7601 16.4972 19.7018 16.5729 19.6214 16.667C19.4597 16.8562 19.2136 17.1134 18.8873 17.3709C18.2357 17.885 17.2924 18.3802 16.0583 18.3802C14.8241 18.3802 13.8809 17.885 13.2292 17.3709C12.9029 17.1134 12.6568 16.8562 12.4951 16.667C12.4147 16.5729 12.3564 16.4972 12.3208 16.4488C12.303 16.4246 12.2909 16.4074 12.2846 16.3983L12.2798 16.3912L12.2804 16.3922L12.2817 16.3941L12.2825 16.3953C12.2827 16.3957 12.2835 16.3968 11.3857 17.0121Z"></svg>',
    !1,
    !0
  ),
  B = C(
    '<svg><path id=vector d="M18.8972 17.1145C18.8972 16.4626 19.6213 16.055 20.2011 16.3812L25.5652 19.3998C26.1449 19.7254 26.1449 20.5414 25.5652 20.867L20.2011 23.8855C19.6213 24.2111 18.8972 23.8034 18.8972 23.1523V21.2663H7.56964C7.1357 21.2663 6.78418 20.9233 6.78418 20.501V19.7657C6.78418 19.3434 7.13643 19.0012 7.56964 19.0012H18.8972V17.1145ZM11.7996 8.11449C12.3794 7.78891 13.1036 8.19658 13.1036 8.84773V10.7337H24.4311C24.865 10.7337 25.2165 11.076 25.2165 11.4983V12.2336C25.2165 12.6559 24.8643 12.9988 24.4311 12.9988H13.1036V14.8848C13.1036 15.5102 12.4363 15.911 11.8696 15.6542L11.7996 15.6188L6.43485 12.6002C5.85505 12.2746 5.85505 11.4586 6.43485 11.133L11.7996 8.11449Z"></svg>',
    !1,
    !0
  ),
  G = C(
    '<svg><path d="M6.32321 9.23054L13.0927 16L6.32321 22.7694L9.23051 25.6767L15.9998 18.9074L22.7695 25.6771L25.6768 22.7698L18.9073 16.0004L25.6768 9.23095L22.7695 6.32365L16.0002 13.0929L9.23051 6.32324L6.32321 9.23054Z"></svg>',
    !1,
    !0
  ),
  T = C(
    '<svg><g id=vector><path d="M27.4077 13.2726C20.3295 13.2636 11.47 13.2636 4.59287 13.2726C3.87545 13.2739 3.29358 12.6927 3.29358 11.9753V9.69262C3.29358 8.97646 3.87411 8.39528 4.59029 8.39528C5.51983 8.39528 6.62966 8.4011 7.01236 8.4011C6.98774 8.33237 6.97541 8.28178 6.95269 8.23695C5.92517 6.23386 7.22188 3.83905 9.45782 3.59903C10.4548 3.49203 11.3026 3.80402 12.0356 4.46692C12.7317 5.0968 13.4264 5.72794 14.1217 6.35846C14.1626 6.3954 14.206 6.43046 14.2612 6.47778C14.7587 5.97702 15.3483 5.69479 16.056 5.69553C16.7552 5.69553 17.3429 5.96472 17.8463 6.47325C17.9021 6.42851 17.9578 6.38761 18.0097 6.34089C18.7116 5.70585 19.4108 5.06691 20.1146 4.43445C21.99 2.75054 24.8999 3.67163 25.448 6.12426C25.6063 6.83391 25.5284 7.52214 25.1905 8.17407C25.1587 8.23572 25.1296 8.29926 25.0822 8.39789C25.4169 8.39789 26.2674 8.39594 27.4096 8.39662C28.1258 8.39662 28.7063 8.97781 28.7063 9.69396V11.9746C28.7063 12.6921 28.1251 13.2732 27.4077 13.2726ZM13.6709 8.38427C13.6177 8.24159 13.6086 8.1047 13.536 8.03723C12.6259 7.20046 11.7165 6.36172 10.7849 5.54832C10.2667 5.09554 9.52137 5.08909 8.93626 5.475C8.36803 5.8493 8.10204 6.53883 8.27396 7.19009C8.47179 7.93992 9.07441 8.39146 9.91181 8.39597C11.0839 8.40247 12.2561 8.39791 13.4276 8.39723C13.4834 8.39723 13.5392 8.39141 13.6709 8.38427ZM18.4424 8.32334C18.4684 8.34796 18.495 8.37332 18.5209 8.39794C18.6896 8.39794 18.8575 8.3992 19.0262 8.39794C20.1737 8.38951 21.3225 8.40376 22.4687 8.36165C23.1096 8.33829 23.6662 7.82584 23.8328 7.22196C24.0054 6.59534 23.792 5.9421 23.286 5.55098C22.7502 5.13713 22.0775 5.08851 21.4963 5.44135C21.3186 5.549 21.1584 5.68979 21.0027 5.82992C20.2159 6.53894 19.4303 7.24919 18.6526 7.96789C18.5559 8.05743 18.5105 8.20399 18.4424 8.32334Z"></path><path d="M6.68743 28.4213C6.60503 28.3954 6.52329 28.3675 6.44025 28.3435C5.69882 28.1301 5.24091 27.5047 5.24025 26.6874C5.2383 24.6403 5.23962 22.5931 5.23962 20.5466C5.23962 18.7667 5.23962 16.9867 5.23962 15.2068C5.23962 15.1108 5.23962 15.0141 5.23962 14.8974H14.448C14.448 14.9817 14.448 15.0673 14.448 15.153C14.448 19.4815 14.448 23.8107 14.4461 28.1393C14.4461 28.2334 14.4215 28.3281 14.4078 28.4221L6.68743 28.4213Z"></path><path d="M17.7095 28.4213C17.6965 28.335 17.6712 28.2487 17.6712 28.1632C17.6692 23.8184 17.6692 19.4737 17.6692 15.1282C17.6692 15.0569 17.6692 14.9849 17.6692 14.8954H26.8777C26.8777 15.0018 26.8777 15.1042 26.8777 15.2067C26.8777 18.9936 26.8777 22.7799 26.8777 26.5668C26.8777 27.5884 26.456 28.132 25.4642 28.3902C25.4507 28.3934 25.4409 28.4109 25.4298 28.4219L17.7095 28.4213Z"></svg>',
    !1,
    !0
  ),
  W = C(
    '<svg><g id=casino/recent><path id=vector d="M22.8892 19L22.4803 19.0193C22.4277 19.0219 22.3768 19.0245 22.3276 19.0281C22.2188 19.0342 22.1056 19.0412 21.9898 19.0421C20.621 19.043 19.2531 19.0439 17.8843 19.0439C16.9367 19.0439 15.989 19.0439 15.0414 19.043C13.6542 19.0421 13.0075 18.3917 13.0075 16.998C13.0066 15.0205 13.0075 13.044 13.0075 11.0666V7.75593H16.3734V15.5656H22.8892V19ZM15.9153 3.71682C9.17926 3.72911 3.69968 9.26116 3.71635 16.0343C3.73302 22.8372 9.24419 28.3017 16.0706 28.2841C22.7857 28.2666 28.2986 22.7266 28.2837 16.0114C28.2687 9.18831 22.7514 3.70453 15.9153 3.71682Z"></svg>',
    !1,
    !0
  ),
  j = C(
    '<svg><g id=global_settings/locked><path id=vector d="M23.7656 13.5598H22.5286V8.15924C22.5243 5.12776 20.0683 2.67178 17.0377 2.66748H15.1021C12.0707 2.67178 9.61469 5.12776 9.61039 8.15838V13.5589H8.21336C6.56687 13.571 5.23694 14.9078 5.23694 16.556V26.3369C5.23694 27.992 6.57891 29.334 8.23401 29.334H23.7647C25.4198 29.334 26.7618 27.992 26.7618 26.3369V16.556C26.7618 14.9009 25.4198 13.5589 23.7647 13.5589L23.7656 13.5598ZM17.2192 21.8869C17.171 22.4839 16.6747 22.9502 16.0699 22.9502C15.4652 22.9502 14.9688 22.4839 14.9206 21.8912V19.9101C14.9688 19.3131 15.4652 18.8468 16.0699 18.8468C16.6747 18.8468 17.171 19.3131 17.2192 19.9058V19.9101V21.8869ZM20.0838 13.5598H12.056V8.15924C12.0603 6.47833 13.4212 5.11744 15.1021 5.11314H17.0377C18.7186 5.11744 20.0795 6.47833 20.0838 8.15924V13.5598Z"></svg>',
    !1,
    !0
  ),
  N = C(
    '<svg><g id=wallet/history><path id=vector d="M16 3.39648C22.9607 3.39648 28.6035 9.03926 28.6035 16C28.6035 22.9607 22.9607 28.6035 16 28.6035C9.03926 28.6035 3.39648 22.9607 3.39648 16C3.39648 9.03926 9.03926 3.39648 16 3.39648ZM16 6.09724C10.531 6.09724 6.09724 10.531 6.09724 16C6.09724 21.469 10.531 25.9028 16 25.9028C21.469 25.9028 25.9028 21.469 25.9028 16C25.9028 10.531 21.469 6.09724 16 6.09724ZM15.0997 8.91682C15.9262 8.91682 16.6041 9.5533 16.6698 10.3626L16.6752 10.4923V16.487L20.9892 16.4879C21.8588 16.4879 22.5646 17.1937 22.5646 18.0634C22.5646 18.8898 21.9282 19.5677 21.1188 19.6334L20.9892 19.6388H15.0997C14.9755 19.6388 14.854 19.6244 14.7378 19.5974C14.7315 19.5956 14.7252 19.5947 14.7189 19.5929C14.6964 19.5875 14.6739 19.5812 14.6523 19.5749C14.6307 19.5686 14.6064 19.5605 14.5839 19.5533C14.574 19.5497 14.5641 19.5461 14.5542 19.5425C14.5254 19.5317 14.4966 19.52 14.4687 19.5083C14.4507 19.5002 14.4345 19.493 14.4174 19.4849C14.3994 19.4759 14.3804 19.4669 14.3624 19.457C14.3399 19.4453 14.3174 19.4327 14.2949 19.4192C14.2805 19.4111 14.267 19.402 14.2526 19.393C14.2364 19.3831 14.2211 19.3723 14.2058 19.3615C14.1842 19.3462 14.1626 19.3309 14.1419 19.3147C14.1284 19.3048 14.1149 19.294 14.1014 19.2832C14.0843 19.2697 14.069 19.2562 14.0528 19.2418C14.0366 19.2274 14.0221 19.2139 14.0077 19.1995C13.9924 19.1851 13.978 19.1707 13.9645 19.1563C13.9474 19.1392 13.9312 19.1212 13.915 19.1023C13.9051 19.0906 13.8952 19.0789 13.8853 19.0672C13.8709 19.05 13.8574 19.0329 13.8439 19.0149C13.8295 18.996 13.816 18.9771 13.8016 18.9573C13.7908 18.942 13.7809 18.9258 13.7701 18.9105C13.7593 18.8934 13.7485 18.8754 13.7377 18.8583C13.7269 18.8412 13.717 18.8214 13.7071 18.8025C13.6963 18.7827 13.6864 18.762 13.6765 18.7413C13.6683 18.7233 13.6602 18.7062 13.6521 18.6881C13.6449 18.671 13.6377 18.6548 13.6314 18.6377C13.608 18.5774 13.5882 18.5153 13.572 18.4523C13.5405 18.328 13.5243 18.1984 13.5243 18.0643V10.4932C13.5243 9.62352 14.2301 8.91772 15.0997 8.91772V8.91682Z"></svg>',
    !1,
    !0
  ),
  q = C(
    '<svg><path d="M15.9999 5.78467C8.86516 5.78467 3.06055 11.8948 3.06055 19.4051C3.05887 21.5072 3.5246 23.5806 4.42048 25.4594C4.64045 25.9224 5.08815 26.2153 5.57856 26.2153H26.42C26.9104 26.2153 27.3594 25.9224 27.5794 25.4594C28.4753 23.5806 28.941 21.5072 28.9393 19.4051C28.9393 11.8948 23.1347 5.78467 15.9999 5.78467ZM22.4981 12.6248L17.3715 20.8488C17.2289 21.0781 17.0447 21.2755 16.8295 21.4298C16.6143 21.584 16.3723 21.6921 16.1174 21.7477C15.8625 21.8034 15.5996 21.8056 15.3439 21.7542C15.0882 21.7028 14.8446 21.5988 14.6271 21.4481C14.3518 21.2587 14.1257 21 13.9693 20.6955C13.8128 20.391 13.7309 20.0502 13.7309 19.704C13.7309 19.3579 13.8128 19.0171 13.9693 18.7126C14.1257 18.4081 14.3518 18.1494 14.6271 17.96L22.4399 12.5635C22.4493 12.5574 22.4607 12.5553 22.4716 12.5579C22.4825 12.5604 22.492 12.5673 22.4981 12.5772C22.5022 12.5844 22.5044 12.5926 22.5044 12.601C22.5044 12.6094 22.5022 12.6176 22.4981 12.6248Z"></svg>',
    !1,
    !0
  ),
  D = C(
    '<svg><path d="M9.60053 5.46826C11.8465 5.48234 14.0114 5.80885 16.0602 6.40641L15.8939 6.36505L17.8283 6.88077C19.3675 7.34369 21.14 7.62179 22.9723 7.64819H22.9864C23.0409 7.64907 23.106 7.64995 23.1712 7.64995C24.4675 7.64995 25.7005 7.38153 26.8182 6.89661L26.7592 6.91949C26.9079 6.85173 27.0813 6.81125 27.2644 6.81125C27.773 6.81125 28.2096 7.11751 28.4005 7.55578L28.4032 7.5637C28.4709 7.71331 28.5114 7.88845 28.5132 8.07238V24.0835C28.5053 24.498 28.3028 24.8632 27.9939 25.0938L27.9904 25.0964C26.6994 25.9941 25.0985 26.5309 23.3718 26.5309C23.2319 26.5309 23.0928 26.5274 22.9538 26.5204L22.9732 26.5212C20.8953 26.4948 18.902 26.1745 17.0195 25.5981L17.17 25.6377L16.1192 25.3543C14.176 24.7382 11.938 24.366 9.61901 24.329H9.59965C9.51428 24.3264 9.41307 24.3255 9.31186 24.3255C7.83071 24.3255 6.4138 24.5992 5.10778 25.0973L5.18875 25.07C5.05233 25.1263 4.89392 25.1598 4.72759 25.1598C4.20483 25.1598 3.75864 24.835 3.57998 24.3756L3.57734 24.3677C3.52102 24.2304 3.48845 24.0711 3.48669 23.9039V8.11199C3.48933 7.71507 3.67151 7.36129 3.95489 7.12719L3.95665 7.12543C5.32369 6.02065 7.20439 5.46826 9.59877 5.46826H9.60053ZM23.5998 21.4468C22.8499 22.1693 22.3377 23.1339 22.1908 24.2146L22.1881 24.2392C22.4375 24.2392 22.6953 24.2392 22.9617 24.2392C23.0321 24.2419 23.114 24.2436 23.1976 24.2436C24.2114 24.2436 25.1751 24.0263 26.0428 23.6355L25.9988 23.6531L26.2505 23.5237V19.9709C25.1953 20.1812 24.2871 20.7075 23.6033 21.4441L23.5998 21.4468ZM16.0101 8.93749C12.921 8.93749 10.4128 11.9614 10.4128 15.7791C10.4128 19.5969 12.921 22.7044 16.0101 22.7044C19.0991 22.7044 21.6135 19.603 21.6135 15.7853C21.6135 11.9676 19.1053 8.93749 16.0101 8.93749ZM5.72559 18.4616V22.5178L6.10578 22.4272C6.98848 22.223 8.00848 22.0954 9.05576 22.0725H10.1558L10.0784 21.8014C9.7783 20.7806 9.15697 19.9331 8.33235 19.354L8.31827 19.3443C7.58693 18.8479 6.69982 18.5276 5.74231 18.4616H5.72559ZM16.6287 11.2142V11.8135C17.1348 11.8681 17.5801 12.0899 17.9189 12.4199C18.1697 12.7174 18.3282 13.1002 18.344 13.5191V14.1352H16.4096V13.5552C16.4096 13.175 16.2934 12.9814 16.0549 12.9814C15.8164 12.9814 15.6941 13.1618 15.6941 13.5103C15.6924 13.5358 15.6906 13.5649 15.6906 13.5948C15.6906 13.7682 15.7293 13.9319 15.7997 14.078L15.7971 14.0709C15.8781 14.173 15.9696 14.2628 16.0708 14.3393L16.0743 14.342L17.7702 15.4315C18.2525 15.8443 18.5561 16.4541 18.5561 17.1336C18.5561 17.1881 18.5543 17.2418 18.5499 17.2955V17.2885C18.5499 18.6256 17.9653 19.4015 16.796 19.6162H16.5707V20.3511H15.739V19.655C15.1397 19.6224 14.6108 19.3452 14.2455 18.9227L14.2429 18.9201C13.963 18.5267 13.794 18.0374 13.7914 17.5085V16.8634H15.7258V17.6502C15.7249 17.6739 15.724 17.7012 15.724 17.7294C15.724 17.9564 15.7601 18.1756 15.8261 18.3815L15.8217 18.3665C15.8613 18.4554 15.9493 18.5161 16.0514 18.5161C16.0611 18.5161 16.0708 18.5153 16.0805 18.5144C16.3383 18.5144 16.4668 18.3472 16.4668 17.9987C16.4756 17.9327 16.4809 17.857 16.4809 17.7795C16.4809 17.3492 16.3216 16.9558 16.0585 16.6548L16.0602 16.6566C15.996 16.5985 15.6413 16.3661 15.0094 15.9666C14.2825 15.5371 13.802 14.7574 13.802 13.8659C13.802 13.8359 13.8028 13.806 13.8037 13.7761V13.7805C13.8011 13.7453 13.8002 13.7039 13.8002 13.6626C13.8002 12.6866 14.5694 11.8901 15.5348 11.8461H15.5392L15.739 11.8135V11.2142H16.6287ZM26.2496 9.49193L25.9011 9.58258C25.1856 9.76035 24.3549 9.87652 23.503 9.90468L23.4836 9.90556H22.5296C22.776 10.7874 23.2407 11.5398 23.862 12.1277L23.8647 12.1295C24.4895 12.7931 25.3027 13.2736 26.2188 13.4839L26.2505 13.4901L26.2496 9.49193ZM9.56796 7.7318H9.60053C9.50372 7.7274 9.38931 7.72476 9.2749 7.72476C8.07273 7.72476 6.93568 8.0055 5.92624 8.50626L5.97025 8.48689L5.72559 8.62858V12.3944C6.86615 12.1753 7.84303 11.5883 8.5506 10.7627L8.55589 10.7566C9.18777 9.98565 9.57148 8.98941 9.57148 7.90429C9.57148 7.84356 9.5706 7.78372 9.56796 7.72388V7.7318Z"></svg>',
    !1,
    !0
  ),
  E = C(
    '<svg><path d="M21.5366 22.8249C21.3552 22.9673 21.1705 23.1124 20.9787 23.2421C18.8866 24.6576 16.3493 25.1545 13.8746 24.5311C12.6155 24.2138 11.4748 23.6403 10.4524 22.8106C10.4495 22.8084 10.4459 22.8072 10.4422 22.8074C10.4386 22.8076 10.4351 22.8092 10.4326 22.8117L7.84194 25.4024C7.82691 25.4174 7.8238 25.4346 7.83259 25.454C8.38502 26.6622 7.9854 28.0282 6.90144 28.7483C5.54264 29.6514 3.6523 29.111 3.01302 27.5626C2.47434 26.2566 3.0603 24.7213 4.37183 24.1469C5.09447 23.8303 5.82077 23.8369 6.55074 24.1667C6.5687 24.1751 6.58482 24.1722 6.59912 24.1579L9.18095 21.5755C9.18565 21.5709 9.18848 21.5647 9.18889 21.5582C9.18929 21.5517 9.18725 21.5453 9.18315 21.5403C7.63306 19.6352 6.95696 17.2067 7.29501 14.7672C7.4764 13.4553 7.95554 12.2182 8.73241 11.0558C8.79361 10.9638 8.94184 10.7648 9.1771 10.4589C9.18883 10.4435 9.18791 10.429 9.17435 10.4154L6.60461 7.84569C6.58739 7.82846 6.5676 7.8248 6.54525 7.83469C5.8369 8.14581 5.1465 8.16523 4.47407 7.89296C3.81372 7.62508 3.33514 7.16409 3.03831 6.50997C2.42212 5.15227 3.10207 3.52248 4.48671 2.99204C5.15255 2.73699 5.81528 2.74578 6.47489 3.01842C7.85073 3.58624 8.46252 5.20999 7.82874 6.5523C7.82598 6.55838 7.82514 6.56516 7.82631 6.57174C7.82749 6.57831 7.83064 6.58438 7.83534 6.58913L10.4172 9.17096C10.4315 9.18525 10.4465 9.18617 10.4622 9.17371C13.7279 6.56054 18.2776 6.54185 21.5415 9.17481C21.5566 9.1869 21.5708 9.18617 21.5844 9.17261L24.1673 6.58968C24.1718 6.58516 24.1748 6.57933 24.1759 6.57295C24.177 6.56656 24.1761 6.55994 24.1734 6.55395C23.9275 6.02406 23.8586 5.48776 23.9667 4.94504C24.3713 2.90904 26.8432 2.10486 28.3619 3.52743C29.7894 4.86424 29.2931 7.26963 27.4495 7.92374C26.7741 8.16303 26.1099 8.13225 25.4569 7.8314C25.4367 7.82223 25.419 7.82535 25.4036 7.84074L22.8206 10.4242C22.8174 10.4274 22.8155 10.4317 22.8153 10.4362C22.8151 10.4408 22.8166 10.4453 22.8195 10.449C24.2553 12.2618 24.9074 14.3071 24.7758 16.585C24.6714 18.389 23.9596 20.126 22.8239 21.5376C22.8191 21.5436 22.8166 21.5512 22.817 21.5589C22.8174 21.5666 22.8207 21.5739 22.8261 21.5794L25.3986 24.1524C25.4144 24.1678 25.4321 24.1715 25.4519 24.1634C25.5157 24.137 25.5791 24.1119 25.6421 24.0881C26.8844 23.6148 28.2492 24.153 28.8742 25.3073C29.6449 26.7293 28.9506 28.541 27.3797 29.0561C25.1952 29.7729 23.1955 27.539 24.1734 25.4436C24.1796 25.4308 24.1776 25.419 24.1673 25.4084L21.5872 22.8277C21.571 22.8119 21.5542 22.811 21.5366 22.8249ZM18.6365 12.4806C18.6365 11.7817 18.3589 11.1114 17.8647 10.6172C17.3705 10.123 16.7002 9.84541 16.0013 9.84541C15.3025 9.84541 14.6322 10.123 14.138 10.6172C13.6438 11.1114 13.3662 11.7817 13.3662 12.4806C13.3662 13.1795 13.6438 13.8497 14.138 14.3439C14.6322 14.8381 15.3025 15.1157 16.0013 15.1157C16.7002 15.1157 17.3705 14.8381 17.8647 14.3439C18.3589 13.8497 18.6365 13.1795 18.6365 12.4806ZM16.0404 16.0018C14.1863 15.9655 12.5477 17.4711 12.4917 19.3444C12.4803 19.7156 12.4774 20.1051 12.4829 20.513C12.4876 20.8838 12.6366 21.1545 12.9297 21.3249C14.83 22.4297 17.193 22.4308 19.0889 21.3155C19.2545 21.2184 19.3769 21.0749 19.4561 20.8851C19.5008 20.7774 19.5222 20.6046 19.5204 20.3668C19.5182 20.0828 19.5151 19.7949 19.511 19.5032C19.4975 18.5325 19.1616 17.7146 18.5035 17.0495C17.831 16.3701 17.01 16.0208 16.0404 16.0018Z"></svg>',
    !1,
    !0
  ),
  F = C(
    '<svg><g id=affiliate/rateRules><path d="M29.3333 10.9785V11.1248C29.3138 11.3092 29.2647 11.4667 29.1859 11.5972C28.9612 11.9698 28.818 12.2042 28.7562 12.3004C28.6458 12.4712 28.4676 12.5004 28.3046 12.3988C25.406 10.5981 22.4987 8.78734 19.5827 6.96651C19.3999 6.85192 19.3577 6.64828 19.4723 6.45609C19.5848 6.26651 19.7018 6.0764 19.8234 5.88578C20.0854 5.47536 20.5708 5.27745 21.0343 5.41703C21.1294 5.44585 21.289 5.52883 21.513 5.66599C23.9251 7.1448 26.361 8.63855 28.8208 10.1472C29.1155 10.3281 29.2864 10.6052 29.3333 10.9785Z"></path><path d="M2.66663 9.81599V9.66808C2.7326 9.19447 2.98763 8.88214 3.43173 8.7311C6.1227 7.81513 8.81384 6.8995 11.5052 5.98423C11.7569 5.89846 11.9352 5.85228 12.04 5.84569C12.5005 5.81652 12.9343 6.10975 13.0942 6.54204C13.1821 6.77885 13.2664 7.02416 13.3473 7.27798C13.4197 7.50662 13.2869 7.63579 13.0927 7.70193C9.85412 8.80714 6.6161 9.91235 3.3786 11.0176C3.21194 11.0743 3.03069 11.0071 2.96975 10.8295C2.85881 10.5077 2.7109 10.1587 2.66663 9.81599Z"></path><path d="M19.3359 24.4852C19.8036 24.3279 20.1088 23.9779 20.1338 23.4748C20.14 23.3456 20.1067 23.1743 20.0338 22.9608C18.6845 19.0205 17.4291 15.333 16.2676 11.8983C16.2319 11.7927 16.2453 11.6892 16.3078 11.5879C16.9737 10.5052 17.6334 9.43525 18.2869 8.37796C18.4296 8.14723 18.6343 8.22171 18.8327 8.34515C21.7258 10.1462 24.6185 11.9472 27.5109 13.7483C27.6723 13.8488 27.6853 14.0472 27.5942 14.1957C25.2543 18.0061 22.9183 21.8161 20.5864 25.6259C20.4301 25.8811 20.3024 26.0463 20.2031 26.1217C19.9499 26.314 19.6702 26.387 19.364 26.3404C19.2119 26.3175 19.064 26.2535 18.9338 26.1743C18.63 25.9892 18.2926 25.7844 17.9218 25.5597C17.8482 25.5153 17.7952 25.4691 17.763 25.4212C17.6551 25.2628 17.7281 25.0331 17.9166 24.968C18.4187 24.7955 18.8918 24.6345 19.3359 24.4852ZM20.539 15.2405C20.3291 15.2675 20.1598 15.1519 20.1645 14.928C20.1702 14.6832 20.2312 14.4233 20.1874 14.1852C20.0536 13.4587 19.063 13.3243 18.7286 13.9832C18.6762 14.0863 18.6414 14.249 18.6244 14.4712C18.5817 15.0396 18.5367 15.5839 18.4895 16.104C18.4656 16.372 18.5407 16.592 18.715 16.7639C18.9614 17.0071 19.2343 17.0139 19.5791 16.9618C20.5753 16.8111 21.4723 16.6852 22.2702 16.5842C22.5036 16.5543 22.6801 16.5076 22.7999 16.4441C23.4166 16.117 23.29 15.1826 22.6182 15.0123C22.4921 14.9807 22.2968 14.9854 22.0322 15.0264C21.5381 15.1035 21.0404 15.1748 20.539 15.2405Z"></path><path d="M17.6046 23.7988C14.5824 24.8342 11.8574 25.7616 9.42963 26.581C9.32512 26.6161 9.2173 26.6316 9.10619 26.6274C8.77112 26.6142 8.49109 26.4764 8.26609 26.2139C8.1963 26.1326 8.09804 25.9059 7.9713 25.5337C6.53693 21.3149 5.1036 17.1003 3.67131 12.8899C3.60256 12.6884 3.73797 12.5509 3.91974 12.4884C7.15967 11.3776 10.4093 10.2681 13.6687 9.15972C13.8364 9.10243 14.0015 9.19982 14.0551 9.35711C15.5454 13.7318 17.0201 18.066 18.4791 22.3597C18.6333 22.8133 18.4791 23.3243 18.0822 23.5936C17.9996 23.6498 17.8404 23.7182 17.6046 23.7988ZM10.8635 13.78C10.7104 14.1576 10.5666 14.5316 10.4161 14.9003C10.3208 15.1347 10.1406 15.2196 9.91036 15.0837C9.54994 14.8708 9.20359 14.6689 8.8713 14.4779C8.13744 14.0566 7.3463 14.9206 7.84317 15.6087C7.91436 15.7073 8.03033 15.8019 8.19109 15.8925C8.61053 16.1286 9.0371 16.3788 9.47078 16.643C9.58901 16.7154 9.62963 16.8727 9.58015 17.0019C9.43744 17.3745 9.28849 17.7486 9.13328 18.1243C9.0614 18.2982 9.0272 18.4462 9.03067 18.568C9.04786 19.1639 9.6588 19.542 10.1932 19.2331C10.3397 19.1488 10.4463 19.0297 10.513 18.8758C10.6373 18.589 10.7515 18.304 10.8557 18.0206C10.9463 17.7738 11.1135 17.593 11.3807 17.7509C11.6932 17.9356 11.9973 18.1121 12.2932 18.2805C13.2406 18.8196 14.0156 17.4826 13.0531 16.917C12.6746 16.6944 12.2852 16.4675 11.8848 16.2363C11.7468 16.1566 11.6645 16.0118 11.726 15.8493C11.8781 15.4476 12.0477 15.021 12.2348 14.5696C12.3262 14.3491 12.3701 14.1804 12.3666 14.0634C12.3416 13.1915 11.188 12.98 10.8635 13.78Z"></svg>',
    !1,
    !0
  ),
  c = C(
    '<svg><path d="M25.1756 11.9253H19.742V3.7749H11.5916V11.9253H6.15796L15.6668 22.7925L25.1756 11.9253ZM4.79956 25.5093H26.534V28.2261H4.79956V25.5093Z"></svg>',
    !1,
    !0
  ),
  J = C(
    '<svg><path d="M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14c-7.732 0-14-6.268-14-14s6.268-14 14-14zM16 5c-6.075 0-11 4.925-11 11s4.925 11 11 11c6.075 0 11-4.925 11-11s-4.925-11-11-11zM15 8.132c0.918 0 1.671 0.707 1.744 1.606l0.006 0.144v6.659l4.792 0.001c0.966 0 1.75 0.784 1.75 1.75 0 0.918-0.707 1.671-1.606 1.744l-0.144 0.006h-6.542c-0.138 0-0.273-0.016-0.402-0.046-0.007-0.002-0.014-0.003-0.021-0.005-0.025-0.006-0.050-0.013-0.074-0.020s-0.051-0.016-0.076-0.024c-0.011-0.004-0.022-0.008-0.033-0.012-0.032-0.012-0.064-0.025-0.095-0.038-0.020-0.009-0.038-0.017-0.057-0.026-0.020-0.010-0.041-0.020-0.061-0.031-0.025-0.013-0.050-0.027-0.075-0.042-0.016-0.009-0.031-0.019-0.047-0.029-0.018-0.011-0.035-0.023-0.052-0.035-0.024-0.017-0.048-0.034-0.071-0.052-0.015-0.011-0.030-0.023-0.045-0.035-0.019-0.015-0.036-0.030-0.054-0.046s-0.034-0.031-0.050-0.047c-0.017-0.016-0.033-0.032-0.048-0.048-0.019-0.019-0.037-0.039-0.055-0.060-0.011-0.013-0.022-0.026-0.033-0.039-0.016-0.019-0.031-0.038-0.046-0.058-0.016-0.021-0.031-0.042-0.047-0.064-0.012-0.017-0.023-0.035-0.035-0.052-0.012-0.019-0.024-0.039-0.036-0.058s-0.023-0.041-0.034-0.062c-0.012-0.022-0.023-0.045-0.034-0.068-0.009-0.020-0.018-0.039-0.027-0.059-0.008-0.019-0.016-0.037-0.023-0.056-0.026-0.067-0.048-0.136-0.066-0.206-0.035-0.138-0.053-0.282-0.053-0.431v-8.41c0-0.966 0.784-1.75 1.75-1.75z"></svg>',
    !1,
    !0
  );
const c1 = (s) => {
    const [L, t] = h(s, ["size", "class", "name"]),
      v = m(() => a1[L.name]()),
      a = H({ size: 32, class: "fill-current" }, L);
    return (() => {
      var l = u();
      return (
        i(
          l,
          Z(t, {
            fill: "",
            get width() {
              return a.size * p.remScale;
            },
            get height() {
              return a.size * p.remScale;
            },
            get class() {
              return V("fill-current", a.class);
            },
            viewBox: "0 0 32 32",
          }),
          !0,
          !0
        ),
        n(l, v),
        l
      );
    })();
  },
  K = { singleSmallArrow: () => f() },
  O = { telegram: () => _() },
  Q = { promotion: () => [$(), I(), b(), w()] },
  U = { inform: () => z(), check: () => P() },
  X = { recommendedGame: () => S() },
  Y = {
    vipChat: () => k(),
    vipCrown: () => x(),
    hostTag: () => y(),
    hostWeChat: () => A(),
    vipHostChatNow: () => R(),
  },
  C1 = { exchange: () => B(), delete: () => G(), bonus: () => T() },
  L1 = { recent: () => W() },
  t1 = { locked: () => j() },
  e1 = { history: () => N() },
  s1 = {
    dashboard: () => q(),
    myRewards: () => D(),
    referral: () => E(),
    rateRules: () => F(),
    banner: () => c(),
    download: () => c(),
    time: () => J(),
  },
  a1 = e(
    e(e(e(e(e(e(e(e(e(e({}, K), Q), U), X), Y), C1), L1), t1), e1), O),
    s1
  );
export { c1 as I };
