const ImageIcon = ({ color }) => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.8 28.15H30.25L22.9 18.35L16.3 26.9L11.65 20.55L5.8 28.15ZM3 36C2.2 36 1.5 35.7 0.9 35.1C0.3 34.5 0 33.8 0 33V3C0 2.2 0.3 1.5 0.9 0.9C1.5 0.3 2.2 0 3 0H33C33.8 0 34.5 0.3 35.1 0.9C35.7 1.5 36 2.2 36 3V33C36 33.8 35.7 34.5 35.1 35.1C34.5 35.7 33.8 36 33 36H3ZM3 33H33V3H3V33ZM3 3V33V3Z" fill={color || "black"} />
  </svg>
);

export default ImageIcon;
