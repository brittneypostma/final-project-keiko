import React from 'react'
const socials = `ml-2 w-10`
const icon = `icon shadow-lg hover:shadow-sm`
const Socials = () => {
  return (
    <div className="flex justify-center gap-10 my-5">
      <a
        href="https://www.facebook.com/"
        className={socials}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className={icon} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="25" fill="white" />
          <path d="M32.017 26.4765L32.7949 22.1406H27.9314V19.3269C27.9314 18.1407 28.6108 16.9845 30.789 16.9845H33V13.2929C33 13.2929 30.9936 13 29.0752 13C25.0701 13 22.4521 15.0767 22.4521 18.8361V22.1406H18V26.4765H22.4521V36.9583H27.9314V26.4765H32.017Z" fill="#FF7800" />
        </svg>
      </a>

      <a
        href="https://twitter.com/"
        className={socials}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          className={icon} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="25" fill="white" />
          <path d="M33.9349 20.4781C33.9498 20.6747 33.9498 20.8712 33.9498 21.0677C33.9498 27.062 29.138 33.9688 20.3435 33.9688C17.6341 33.9688 15.1172 33.2247 13 31.9333C13.385 31.9753 13.7551 31.9894 14.1548 31.9894C16.3904 31.9894 18.4484 31.2735 20.0918 30.0521C17.9894 30.01 16.2276 28.7045 15.6205 26.9076C15.9167 26.9497 16.2128 26.9778 16.5237 26.9778C16.9531 26.9778 17.3825 26.9216 17.7822 26.8234C15.591 26.4022 13.9475 24.5773 13.9475 22.3733V22.3172C14.5841 22.6541 15.3245 22.8646 16.1091 22.8927C14.821 22.0785 13.9771 20.6887 13.9771 19.1164C13.9771 18.2742 14.214 17.5021 14.6286 16.8282C16.9826 19.5797 20.5212 21.3765 24.489 21.5731C24.415 21.2362 24.3706 20.8853 24.3706 20.5343C24.3706 18.0355 26.5026 16 29.1527 16C30.5296 16 31.7733 16.5475 32.6468 17.4319C33.7276 17.2354 34.764 16.8563 35.682 16.3369C35.3266 17.3898 34.5715 18.2742 33.5796 18.8357C34.5419 18.7375 35.4747 18.4847 36.3334 18.1338C35.682 19.0322 34.8677 19.8323 33.9349 20.4781Z" fill="#FF7800" />
        </svg>
      </a>
      <a
        href="https://www.instagram.com/"
        className={socials}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          className={icon} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="25" fill="white" />
          <path d="M25.1698 18.8365C21.1497 18.8365 17.9071 21.579 17.9071 24.979C17.9071 28.379 21.1497 31.1215 25.1698 31.1215C29.1899 31.1215 32.4325 28.379 32.4325 24.979C32.4325 21.579 29.1899 18.8365 25.1698 18.8365ZM25.1698 28.9725C22.5719 28.9725 20.4481 27.1815 20.4481 24.979C20.4481 22.7765 22.5656 20.9856 25.1698 20.9856C27.774 20.9856 29.8915 22.7765 29.8915 24.979C29.8915 27.1815 27.7677 28.9725 25.1698 28.9725ZM34.4236 18.5852C34.4236 19.3818 33.6651 20.0179 32.7296 20.0179C31.7878 20.0179 31.0356 19.3764 31.0356 18.5852C31.0356 17.794 31.7941 17.1525 32.7296 17.1525C33.6651 17.1525 34.4236 17.794 34.4236 18.5852ZM39.2338 20.0393C39.1263 18.1201 38.608 16.4201 36.9456 15.0194C35.2895 13.6188 33.2795 13.1804 31.0103 13.0842C28.6716 12.9719 21.6617 12.9719 19.323 13.0842C17.0601 13.1751 15.0501 13.6135 13.3877 15.0141C11.7253 16.4147 11.2133 18.1148 11.0996 20.034C10.9668 22.012 10.9668 27.9407 11.0996 29.9187C11.207 31.8379 11.7253 33.5379 13.3877 34.9386C15.0501 36.3392 17.0538 36.7776 19.323 36.8738C21.6617 36.9861 28.6716 36.9861 31.0103 36.8738C33.2795 36.7829 35.2895 36.3446 36.9456 34.9386C38.6017 33.5379 39.12 31.8379 39.2338 29.9187C39.3665 27.9407 39.3665 22.0173 39.2338 20.0393ZM36.2124 32.041C35.7194 33.0889 34.7649 33.8961 33.5197 34.3184C31.655 34.9439 27.2304 34.7996 25.1698 34.7996C23.1092 34.7996 18.6783 34.9386 16.8199 34.3184C15.5811 33.9014 14.6266 33.0942 14.1273 32.041C13.3877 30.464 13.5584 26.7218 13.5584 24.979C13.5584 23.2362 13.394 19.4887 14.1273 17.917C14.6203 16.8692 15.5747 16.0619 16.8199 15.6396C18.6846 15.0141 23.1092 15.1584 25.1698 15.1584C27.2304 15.1584 31.6614 15.0194 33.5197 15.6396C34.7586 16.0566 35.713 16.8638 36.2124 17.917C36.9519 19.494 36.7813 23.2362 36.7813 24.979C36.7813 26.7218 36.9519 30.4693 36.2124 32.041Z" fill="#FF7800" />
        </svg>
      </a>
    </div>
  )
}

export default Socials
