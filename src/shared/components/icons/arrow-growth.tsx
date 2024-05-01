type IArrowSize = {
    width: string,
    height: string;
}
export const ArrowGrowth = ({width, height}: IArrowSize) => (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.2667 5.51667C18.1821 5.31304 18.0203 5.15123 17.8167 5.06667C17.7165 5.02397 17.6089 5.00132 17.5 5H13.3333C13.1123 5 12.9004 5.0878 12.7441 5.24408C12.5878 5.40036 12.5 5.61232 12.5 5.83333C12.5 6.05435 12.5878 6.26631 12.7441 6.42259C12.9004 6.57887 13.1123 6.66667 13.3333 6.66667H15.4917L10.8333 11.325L8.09167 8.575C8.0142 8.49689 7.92203 8.4349 7.82048 8.39259C7.71893 8.35028 7.61001 8.3285 7.5 8.3285C7.38999 8.3285 7.28107 8.35028 7.17952 8.39259C7.07797 8.4349 6.9858 8.49689 6.90833 8.575L1.90833 13.575C1.83023 13.6525 1.76823 13.7446 1.72592 13.8462C1.68362 13.9477 1.66183 14.0567 1.66183 14.1667C1.66183 14.2767 1.68362 14.3856 1.72592 14.4871C1.76823 14.5887 1.83023 14.6809 1.90833 14.7583C1.9858 14.8364 2.07797 14.8984 2.17952 14.9407C2.28107 14.9831 2.38999 15.0048 2.5 15.0048C2.61001 15.0048 2.71893 14.9831 2.82048 14.9407C2.92203 14.8984 3.0142 14.8364 3.09167 14.7583L7.5 10.3417L10.2417 13.0917C10.3191 13.1698 10.4113 13.2318 10.5129 13.2741C10.6144 13.3164 10.7233 13.3382 10.8333 13.3382C10.9433 13.3382 11.0523 13.3164 11.1538 13.2741C11.2554 13.2318 11.3475 13.1698 11.425 13.0917L16.6667 7.84167V10C16.6667 10.221 16.7545 10.433 16.9107 10.5893C17.067 10.7455 17.279 10.8333 17.5 10.8333C17.721 10.8333 17.933 10.7455 18.0893 10.5893C18.2455 10.433 18.3333 10.221 18.3333 10V5.83333C18.332 5.72444 18.3094 5.61685 18.2667 5.51667Z" fill="black" fillOpacity="0.87"/>
    </svg>
);