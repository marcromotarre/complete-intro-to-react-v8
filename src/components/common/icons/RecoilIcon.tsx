const RecoilIcon = ({
  color = "#764ABC",
  size = 20,
  className = "",
}: {
  color?: string;
  size?: number;
  className?: string;
}) => {
  const ASPECT_RATIO = 2.5306122449;
  return (
    <svg
      className={className}
      width={size / ASPECT_RATIO}
      height={size}
      viewBox="0 0 49 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.2062 12.2917C36.2062 17.911 32.3599 22.632 27.1564 23.9656C26.4867 31.3381 32.223 34.2055 36.8597 36.5232C38.4689 37.3276 39.9456 38.0658 40.9762 38.9032C41.1737 39.0636 41.3718 39.2235 41.5698 39.3833C45.4 42.474 49.2115 45.5497 48.2567 52.711C47.4533 58.7363 37.5452 61.9162 32.6915 62.7531C46.3487 72.3935 48.7588 83.172 48.2567 87.3562H43.2357C44.039 78.1175 31.8547 67.7741 25.6621 63.7573C7.33527 63.2552 4.32255 69.7825 4.82475 74.3015C5.22659 77.9173 8.65982 79.6303 13.2542 81.9228C15.4375 83.0122 17.883 84.2324 20.39 85.8499C26.3324 89.6837 27.4112 96.7192 27.2061 100.19C32.1274 101.706 35.704 106.289 35.704 111.708C35.704 118.364 30.3089 123.759 23.6536 123.759C16.9983 123.759 11.6031 118.364 11.6031 111.708C11.6031 105.552 16.2197 100.474 22.1799 99.7469C23.4861 92.7918 12.6938 87.1561 8.33949 85.8499C3.31835 84.3435 -1.70258 78.5693 0.556889 69.0294C2.36446 61.3974 13.6953 58.9873 19.1348 58.7363C8.4902 50.5018 6.33115 39.9074 6.58221 35.6395H11.8543C10.4484 44.2757 20.9758 54.6357 26.4153 58.7363C43.9889 58.7363 49.512 45.9326 35.4531 41.9158C24.4657 38.7765 22.0078 28.9927 22.1342 24.1734C16.4413 23.2118 12.1052 18.2581 12.1052 12.2917C12.1052 5.6364 17.5004 0.241211 24.1557 0.241211C30.811 0.241211 36.2062 5.6364 36.2062 12.2917Z"
        fill={color}
      />
    </svg>
  );
};

export default RecoilIcon;