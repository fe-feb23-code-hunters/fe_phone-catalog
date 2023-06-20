/* eslint-disable max-len */

interface Props {
  className?: string;
}

const HeartOff: React.FC<Props> = ({ className }) => (
  <svg
    viewBox="0 0 16 16"
    height="170px"
    xmlns="http://www.w3.org/2000/svg"
    fill="#313237"
    className={className}
  >
    <g fill="currentColor">
      <path
        fillRule="evenodd"
        fill="#313237"
        d="M1.78.72A.75.75 0 00.72 1.78l.58.581A4.5 4.5 0 000 5.522a4.5 4.5 0 001.34 3.2l6.133 6.061a.75.75 0 001.054 0l2.613-2.582 3.08 3.08a.75.75 0 101.06-1.061L1.78.72zm8.3 10.42L2.36 3.422a2.999 2.999 0 00-.861 2.1 3 3 0 00.895 2.134L8 13.196l2.08-2.056z"
        clipRule="evenodd"
      />

      <path
        fill="#313237"
        d="M11.434 1a4.604 4.604 0 00-3.226 1.322l-.735.726a.75.75 0 001.054 1.067l.735-.727a3.104 3.104 0 014.342 0 2.981 2.981 0 010 4.267l-.735.727a.75.75 0 101.055 1.067l.735-.726a4.52 4.52 0 00.992-1.467 4.482 4.482 0 00-.992-4.934A4.604 4.604 0 0011.433 1z"
      />
    </g>
  </svg>
);

export default HeartOff;
