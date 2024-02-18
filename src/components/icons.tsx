type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  google: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      />
    </svg>
  ),
  twitter: (props: IconProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.1668 2.49996C18.3688 3.06285 17.4853 3.49338 16.5502 3.77496C16.0483 3.19788 15.3813 2.78887 14.6394 2.60323C13.8974 2.41759 13.1164 2.46429 12.4019 2.737C11.6874 3.00972 11.0739 3.49529 10.6443 4.12805C10.2148 4.76082 9.98991 5.51024 10.0002 6.27496V7.10829C8.53569 7.14626 7.08456 6.82147 5.776 6.16283C4.46745 5.50419 3.34209 4.53215 2.50016 3.33329C2.50016 3.33329 -0.83317 10.8333 6.66683 14.1666C4.9506 15.3316 2.90613 15.9157 0.833496 15.8333C8.3335 20 17.5002 15.8333 17.5002 6.24996C17.4994 6.01783 17.4771 5.78629 17.4335 5.55829C18.284 4.71953 18.8842 3.66055 19.1668 2.49996Z"
        fill="white"
      />
    </svg>
  ),
  close: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-x"
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  ),
  body: (props: IconProps) => (
    <svg
      width="140"
      height="112"
      viewBox="0 0 140 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M113.135 23.9879V37.7295C113.135 38.8673 112.216 39.7908 111.084 39.7908H95.0225C93.8904 39.7908 92.9717 38.8673 92.9717 37.7295V23.9879C92.9717 22.8474 93.8904 21.9267 95.0225 21.9267H111.084C112.216 21.9267 113.135 22.8474 113.135 23.9879Z"
        fill="#555760"
      />
      <path
        d="M9.78962 21.9252H2.05078C0.918204 21.9252 0 22.8478 0 23.9865V37.7281C0 38.8667 0.918204 39.7893 2.05078 39.7893H9.78962C10.9222 39.7893 11.8404 38.8667 11.8404 37.7281V23.9865C11.8404 22.8481 10.9222 21.9252 9.78962 21.9252Z"
        fill="#555760"
      />
      <path
        d="M140 23.9878V37.7294C140 38.8672 139.081 39.7906 137.949 39.7906H130.211C129.079 39.7906 128.16 38.8672 128.16 37.7294V23.9878C128.16 22.8473 129.079 21.9266 130.211 21.9266H137.949C139.081 21.9266 140 22.8473 140 23.9878Z"
        fill="#555760"
      />
      <path
        d="M140 31.0592V37.7293C140 38.8671 139.081 39.7906 137.949 39.7906H130.211C129.079 39.7906 128.16 38.8671 128.16 37.7293V31.0592C128.16 32.197 129.079 33.1204 130.211 33.1204H137.949C139.081 33.1204 140 32.197 140 31.0592Z"
        fill="#2E384D"
      />
      <path
        d="M11.8399 31.0578V37.728C11.8399 38.8658 10.9211 39.7892 9.78907 39.7892H2.05078C0.918751 39.7892 0 38.8658 0 37.728V31.0578C0 32.1956 0.918751 33.119 2.05078 33.119H9.78907C10.9211 33.119 11.8399 32.1956 11.8399 31.0578Z"
        fill="#2E384D"
      />
      <path
        d="M113.135 33.1211V37.73C113.135 38.8678 112.216 39.7912 111.084 39.7912H95.0225C93.8904 39.7912 92.9717 38.8678 92.9717 37.73V33.1211H113.135Z"
        fill="#2E384D"
      />
      <path
        d="M18.6708 13.0499V48.6653C18.6708 50.1824 18.0583 51.5538 17.0685 52.5487C16.0814 53.5436 14.7142 54.1565 13.2048 54.1565C12.2095 54.1565 11.2771 53.8899 10.4731 53.4199C8.83799 52.4745 7.73877 50.6991 7.73877 48.6653V13.0499C7.73877 11.0161 8.83799 9.24072 10.4731 8.2953C11.2771 7.82533 12.2095 7.55875 13.2048 7.55875C16.2235 7.55875 18.6708 10.0157 18.6708 13.0499Z"
        fill="#3FB023"
      />
      <path
        d="M18.6708 13.0496V48.6651C18.6708 50.1821 18.0583 51.5536 17.0685 52.5484C16.0814 53.5433 14.7142 54.1562 13.2048 54.1562C12.2095 54.1562 11.2771 53.8896 10.4731 53.4197C10.8888 53.1806 11.2688 52.8865 11.6052 52.5484C12.5923 51.5536 13.2048 50.1821 13.2048 48.6651V13.0496C13.2048 11.0159 12.1056 9.24319 10.4731 8.29502C11.2771 7.82506 12.2095 7.55847 13.2048 7.55847C16.2235 7.55847 18.6708 10.0155 18.6708 13.0496Z"
        fill="#4CD62B"
      />
      <path
        d="M132.276 13.049V48.6644C132.276 50.1815 131.663 51.5529 130.673 52.5478C129.686 53.5427 128.319 54.1556 126.81 54.1556C125.814 54.1556 124.882 53.889 124.078 53.419C122.443 52.4736 121.344 50.6982 121.344 48.6644V13.049C121.344 11.0152 122.443 9.2398 124.078 8.29438C124.882 7.82442 125.814 7.55783 126.81 7.55783C129.829 7.55783 132.276 10.0148 132.276 13.049Z"
        fill="#3FB023"
      />
      <path
        d="M132.276 13.049V48.6644C132.276 50.1815 131.663 51.5529 130.673 52.5478C129.686 53.5427 128.319 54.1556 126.81 54.1556C125.814 54.1556 124.882 53.889 124.078 53.419C124.494 53.1799 124.874 52.8858 125.21 52.5478C126.197 51.5529 126.81 50.1815 126.81 48.6644V13.049C126.81 11.0152 125.711 9.24255 124.078 8.29438C124.882 7.82442 125.814 7.55783 126.81 7.55783C129.829 7.55783 132.276 10.0148 132.276 13.049Z"
        fill="#4DD82B"
      />
      <path
        d="M97.0729 23.8065V37.7295C97.0729 38.1829 96.9225 38.6254 96.6463 38.9855L85.9221 52.9744L89.1104 86.5121C89.1651 87.0893 88.9737 87.6637 88.5854 88.0952C88.1971 88.5239 87.6475 88.7685 87.0678 88.7685H52.9318C52.3522 88.7685 51.8025 88.5239 51.4143 88.0952C51.026 87.6637 50.8346 87.0893 50.8893 86.5121L51.4717 80.3944L51.5756 79.295L54.0447 53.2987L43.7389 45.3011C43.2357 44.9108 42.9404 44.3089 42.9404 43.6713V15.8666C42.9404 14.7288 43.8592 13.8054 44.9912 13.8054H87.117C92.6049 13.8054 97.0729 18.2906 97.0729 23.8065Z"
        fill="#FFD3C0"
      />
      <path
        d="M97.0727 23.8065V37.7295C97.0727 38.1829 96.9223 38.6254 96.6461 38.9855L85.9219 52.9744L89.1102 86.5121C89.1649 87.0893 88.9735 87.6637 88.5852 88.0952C88.1969 88.5239 87.6473 88.7685 87.0676 88.7685H52.9316C52.352 88.7685 51.8023 88.5239 51.4141 88.0952C51.0258 87.6637 50.8344 87.0893 50.8891 86.5121L51.4715 80.3944L51.5754 79.295H79.6848C80.2645 79.295 80.8141 79.0504 81.2024 78.6217C81.5907 78.1902 81.7821 77.6158 81.7274 77.0387L79.6328 52.8452L91.4508 37.2073C91.727 36.8473 91.8774 36.4048 91.8774 35.9486V22.0283C91.8774 18.6232 88.536 15.611 85.941 13.8054H87.1168C92.6047 13.8054 97.0727 18.2906 97.0727 23.8065Z"
        fill="#FFB9A1"
      />
      <path
        d="M85.8316 23.9879V31.4084C85.8316 31.8069 85.7167 32.1999 85.498 32.5324L85.1152 33.1206L81.3937 38.8536C81.0164 39.439 80.3683 39.7908 79.6765 39.7908H28.9155C27.7835 39.7908 26.8647 38.8673 26.8647 37.7295V23.9879C26.8647 23.4355 27.0835 22.9078 27.4745 22.5203C27.8628 22.1328 28.396 21.9184 28.9401 21.9267H83.8027C84.9265 21.9377 85.8316 22.8584 85.8316 23.9879Z"
        fill="#555760"
      />
      <path
        d="M26.8647 33.1205H85.1152L81.3937 38.8535C81.0164 39.4389 80.3683 39.7906 79.6765 39.7906H28.9155C27.7835 39.7906 26.8647 38.8672 26.8647 37.7294V33.1205Z"
        fill="#2E384D"
      />
      <path
        d="M30.9669 6.17874V55.5358C30.9669 58.9437 28.2107 61.714 24.82 61.714C23.7017 61.714 22.6517 61.4117 21.7466 60.8812C19.9091 59.8149 18.6704 57.8196 18.6704 55.5358V6.17874C18.6704 3.89488 19.9091 1.89961 21.7466 0.833259C22.6517 0.302833 23.7017 0.000518799 24.82 0.000518799C28.2107 0.000518799 30.9669 2.77082 30.9669 6.17874Z"
        fill="#4953B8"
      />
      <path
        d="M30.9669 6.17877V55.5358C30.9669 58.9437 28.2106 61.714 24.82 61.714C23.7017 61.714 22.6517 61.4117 21.7466 60.8813C23.5813 59.8149 24.82 57.8169 24.82 55.5358V6.17877C24.82 3.89766 23.5813 1.89964 21.7466 0.833289C22.6517 0.302864 23.7017 0.000549316 24.82 0.000549316C28.2106 0.000549316 30.9669 2.77085 30.9669 6.17877Z"
        fill="#5965E0"
      />
      <path
        d="M121.33 6.17822V55.5353C121.33 58.9432 118.573 61.7135 115.183 61.7135C114.064 61.7135 113.014 61.4112 112.109 60.8807C110.272 59.8144 109.033 57.8191 109.033 55.5353V6.17822C109.033 3.89437 110.272 1.89909 112.109 0.832741C113.014 0.302316 114.064 0 115.183 0C118.573 0 121.33 2.77031 121.33 6.17822Z"
        fill="#5297E8"
      />
      <path
        d="M121.33 6.17822V55.5353C121.33 58.9432 118.574 61.7135 115.183 61.7135C114.065 61.7135 113.015 61.4112 112.11 60.8807C113.945 59.8144 115.183 57.8164 115.183 55.5353V6.17822C115.183 3.89712 113.945 1.89909 112.11 0.832741C113.015 0.302316 114.065 0 115.183 0C118.574 0 121.33 2.77031 121.33 6.17822Z"
        fill="#5965E0"
      />
      <path
        d="M48.3027 8.40359C45.3416 8.40359 42.9414 10.8161 42.9414 13.7922V25.6696C42.9414 28.6458 45.3416 31.0582 48.3027 31.0582C51.2638 31.0582 53.664 28.6458 53.664 25.6696V13.7922C53.664 10.8163 51.2635 8.40359 48.3027 8.40359Z"
        fill="#FFD3C0"
      />
      <path
        d="M59.0249 8.40359C56.0638 8.40359 53.6636 10.8161 53.6636 13.7922V25.6696C53.6636 28.6458 56.0638 31.0582 59.0249 31.0582C61.9859 31.0582 64.3862 28.6458 64.3862 25.6696V13.7922C64.3862 10.8163 61.9859 8.40359 59.0249 8.40359Z"
        fill="#FFB9A1"
      />
      <path
        d="M69.7475 8.40359C66.7865 8.40359 64.3862 10.8161 64.3862 13.7922V25.6696C64.3862 28.6458 66.7865 31.0582 69.7475 31.0582C72.7086 31.0582 75.1088 28.6458 75.1088 25.6696V13.7922C75.1088 10.8163 72.7086 8.40359 69.7475 8.40359Z"
        fill="#FFD3C0"
      />
      <path
        d="M80.4707 8.40359C77.5096 8.40359 75.1094 10.8161 75.1094 13.7922V25.6696C75.1094 28.6458 77.5096 31.0582 80.4707 31.0582C83.4317 31.0582 85.832 28.6458 85.832 25.6696V13.7922C85.8317 10.8163 83.4315 8.40359 80.4707 8.40359Z"
        fill="#FFB9A1"
      />
      <path
        d="M97.6502 111.307C97.2592 111.747 96.7014 112 96.1163 112H43.8842C43.299 112 42.7412 111.747 42.3502 111.307C41.9619 110.868 41.7787 110.282 41.8471 109.697L42.4185 104.854L44.5842 86.4654C44.7045 85.4293 45.5795 84.646 46.6213 84.646H93.3791C94.4209 84.646 95.2959 85.4293 95.4163 86.4654L98.1534 109.697C98.2217 110.282 98.0385 110.868 97.6502 111.307Z"
        fill="#EEF6FF"
      />
      <path
        d="M97.6502 111.307C97.2592 111.747 96.7014 112 96.1163 112H43.8842C43.299 112 42.7412 111.747 42.3502 111.307C41.9619 110.868 41.7787 110.282 41.8471 109.697L42.4185 104.854H87.9213C88.5065 104.854 89.0643 104.602 89.4526 104.162C89.8436 103.722 90.0241 103.137 89.9557 102.551L88.1483 86.4654C88.0252 85.4293 87.1502 84.646 86.1112 84.646H93.3791C94.4209 84.646 95.2959 85.4293 95.4163 86.4654L98.1534 109.697C98.2217 110.282 98.0385 110.868 97.6502 111.307Z"
        fill="#DAE6EF"
      />
    </svg>
  ),
  checkCircle: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
        fill="#4CD62B"
      />
    </svg>
  ),
  eye: (props: IconProps) => (
    <svg
      width="152"
      height="78"
      viewBox="0 0 152 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M76 0C22.2567 0.952301 0 39 0 39C0 39 22.2567 77.0477 76 78C129.744 77.0477 152 39 152 39C152 39 129.744 0.952301 76 0Z"
        fill="#D8ECFE"
      />
      <path
        d="M142.543 27.3365C143.242 28.3589 143.584 28.9431 143.584 28.9431C143.584 28.9431 121.328 66.9908 67.5842 67.9434C33.5667 67.3405 12.1689 51.8778 1.04053 40.6069C5.99032 47.8487 28.9058 77.1654 75.9997 78C129.743 77.0477 152 39 152 39C152 39 148.996 33.8722 142.543 27.3365Z"
        fill="#C4E2FF"
      />
      <path
        d="M75.9999 78C97.628 78 115.161 60.5391 115.161 39C115.161 17.4609 97.628 0 75.9999 0C54.3719 0 36.8389 17.4609 36.8389 39C36.8389 60.5391 54.3719 78 75.9999 78Z"
        fill="#0182FC"
      />
      <path
        d="M76.0003 60.7891C63.9359 60.7891 54.1206 51.0145 54.1206 38.9997C54.1206 26.9846 63.9356 17.21 76.0003 17.21C88.0647 17.21 97.8797 26.9846 97.8797 38.9997C97.8797 51.0145 88.0647 60.7891 76.0003 60.7891Z"
        fill="#465A61"
      />
      <path
        d="M89.0675 36.5271C83.2309 36.5271 78.4824 31.7981 78.4824 25.9855C78.4824 20.1727 83.2309 15.444 89.0675 15.444C94.9041 15.444 99.6526 20.173 99.6526 25.9855C99.6523 31.7981 94.9041 36.5271 89.0675 36.5271Z"
        fill="#D8ECFE"
      />
      <path
        d="M98.1783 6.85571C102.519 13.1354 105.063 20.7429 105.063 28.9428C105.063 50.4821 87.5294 67.9428 65.9015 67.9428C57.6674 67.9428 50.0285 65.41 43.7231 61.0869C50.7846 71.3018 62.6059 77.9998 76 77.9998C97.6282 77.9998 115.161 60.5388 115.161 38.9998C115.161 25.6608 108.435 13.8878 98.1783 6.85571V6.85571Z"
        fill="#0172FB"
      />
    </svg>
  ),
  level: (props: IconProps) => (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.5004 8.72163V15.2719H3.50165V8.72163H0.702148L7.00102 0.708496L13.2999 8.72163H10.5004Z"
        fill="#4CD62B"
      />
      <path
        d="M13.3007 9.44964C13.0978 9.44964 12.8969 9.35866 12.7583 9.18254L6.99975 1.863L1.24188 9.18254C0.996224 9.49476 0.556702 9.53916 0.257156 9.28588C-0.0423906 9.03043 -0.0864815 8.57264 0.157775 8.26186L6.45735 0.253822C6.724 -0.0846074 7.2748 -0.0846074 7.54145 0.253822L13.8417 8.26186C14.0867 8.57264 14.0419 9.03115 13.7423 9.28588C13.6129 9.39578 13.4568 9.44964 13.3007 9.44964Z"
        fill="#4CD62B"
      />
      <path
        d="M3.50017 16C3.11314 16 2.80029 15.6747 2.80029 15.2722V8.72195C2.80029 8.31947 3.11314 7.99414 3.50017 7.99414C3.8872 7.99414 4.20004 8.31947 4.20004 8.72195V15.2722C4.20004 15.6747 3.8872 16 3.50017 16Z"
        fill="#4CD62B"
      />
      <path
        d="M10.4989 15.9997H3.50017C3.11314 15.9997 2.80029 15.6743 2.80029 15.2719C2.80029 14.8694 3.11314 14.5441 3.50017 14.5441H10.4989C10.8859 14.5441 11.1988 14.8694 11.1988 15.2719C11.1988 15.6743 10.8859 15.9997 10.4989 15.9997Z"
        fill="#4CD62B"
      />
      <path
        d="M10.4992 16C10.1122 16 9.79932 15.6747 9.79932 15.2722V8.72195C9.79932 8.31947 10.1122 7.99414 10.4992 7.99414C10.8862 7.99414 11.1991 8.31947 11.1991 8.72195V15.2722C11.1991 15.6747 10.8862 16 10.4992 16Z"
        fill="#4CD62B"
      />
      <path
        d="M3.50056 9.44975H0.700363C0.313332 9.44975 0.000488281 9.12442 0.000488281 8.72195C0.000488281 8.31947 0.313332 7.99414 0.700363 7.99414H3.50056C3.88759 7.99414 4.20043 8.31947 4.20043 8.72195C4.20043 9.12442 3.88759 9.44975 3.50056 9.44975Z"
        fill="#4CD62B"
      />
      <path
        d="M13.3001 9.44975H10.4992C10.1122 9.44975 9.79932 9.12442 9.79932 8.72195C9.79932 8.31947 10.1122 7.99414 10.4992 7.99414H13.3001C13.6871 7.99414 14 8.31947 14 8.72195C14 9.12442 13.6871 9.44975 13.3001 9.44975Z"
        fill="#4CD62B"
      />
    </svg>
  ),
  levelUp: (props: IconProps) => (
    <svg
      width="59"
      height="80"
      viewBox="0 0 59 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M43.3272 33.5322V58.4572H15.1403V33.5322H3.86548L29.2337 3.04053L54.602 33.5322H43.3272Z"
        fill="#4CD62B"
      />
      <path
        d="M55.6392 36.3211C54.7902 36.3211 53.95 35.9714 53.3703 35.2944L29.2812 7.16071L5.195 35.2944C4.16738 36.4945 2.32878 36.6651 1.07573 35.6916C-0.177327 34.7097 -0.361767 32.9502 0.659999 31.7557L27.0122 0.975602C28.1277 -0.325201 30.4318 -0.325201 31.5472 0.975602L57.9023 31.7557C58.927 32.9502 58.7397 34.7125 57.4866 35.6916C56.945 36.1141 56.2921 36.3211 55.6392 36.3211Z"
        fill="#4CD62B"
      />
      <path
        d="M14.6423 61.4982C13.0233 61.4982 11.7146 60.2478 11.7146 58.7008V33.524C11.7146 31.977 13.0233 30.7266 14.6423 30.7266C16.2613 30.7266 17.57 31.977 17.57 33.524V58.7008C17.57 60.2478 16.2613 61.4982 14.6423 61.4982Z"
        fill="#4CD62B"
      />
      <path
        d="M43.9193 61.4979H14.6423C13.0233 61.4979 11.7146 60.2475 11.7146 58.7005C11.7146 57.1535 13.0233 55.9031 14.6423 55.9031H43.9193C45.5383 55.9031 46.847 57.1535 46.847 58.7005C46.847 60.2475 45.5383 61.4979 43.9193 61.4979Z"
        fill="#4CD62B"
      />
      <path
        d="M43.9199 61.4982C42.3009 61.4982 40.9922 60.2478 40.9922 58.7008V33.524C40.9922 31.977 42.3009 30.7266 43.9199 30.7266C45.5389 30.7266 46.8476 31.977 46.8476 33.524V58.7008C46.8476 60.2478 45.5389 61.4982 43.9199 61.4982Z"
        fill="#4CD62B"
      />
      <path
        d="M14.6431 36.3214H2.92941C1.31039 36.3214 0.00170898 35.071 0.00170898 33.524C0.00170898 31.977 1.31039 30.7266 2.92941 30.7266H14.6431C16.2621 30.7266 17.5708 31.977 17.5708 33.524C17.5708 35.071 16.2621 36.3214 14.6431 36.3214Z"
        fill="#4CD62B"
      />
      <path
        d="M55.6365 36.3214H43.9199C42.3009 36.3214 40.9922 35.071 40.9922 33.524C40.9922 31.977 42.3009 30.7266 43.9199 30.7266H55.6365C57.2555 30.7266 58.5642 31.977 58.5642 33.524C58.5642 35.071 57.2555 36.3214 55.6365 36.3214Z"
        fill="#4CD62B"
      />
      <path
        d="M34.872 39.2014H23.5973C22.0385 39.2014 20.7786 37.9222 20.7786 36.3397C20.7786 34.7572 22.0385 33.478 23.5973 33.478H34.872C36.4308 33.478 37.6907 34.7572 37.6907 36.3397C37.6907 37.9222 36.4308 39.2014 34.872 39.2014Z"
        fill="#3FB023"
      />
      <path
        d="M29.2342 44.9222C27.6755 44.9222 26.4155 43.643 26.4155 42.0605V30.6194C26.4155 29.0369 27.6755 27.7577 29.2342 27.7577C30.793 27.7577 32.0529 29.0369 32.0529 30.6194V42.0605C32.0529 43.643 30.793 44.9222 29.2342 44.9222Z"
        fill="#3FB023"
      />
      <rect
        x="11.6938"
        y="65.1582"
        width="35.1773"
        height="5.59071"
        rx="2.79536"
        fill="#4DD82B"
      />
      <rect
        x="11.6938"
        y="74.4093"
        width="35.1773"
        height="5.59071"
        rx="2.79536"
        fill="#4DD82B"
      />
    </svg>
  ),
  play: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M8 5V19L19 12L8 5Z" fill="white" />
    </svg>
  ),
  home: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-home"
      {...props}
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  award: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-award"
      {...props}
    >
      <circle cx={12} cy={8} r={6} />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  ),
  logout: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-log-out"
      {...props}
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1={21} x2={9} y1={12} y2={12} />
    </svg>
  ),
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
};