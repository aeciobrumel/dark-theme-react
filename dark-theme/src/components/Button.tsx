
type Props = {
    label: string;
    onClick: () => void;
}
export const Button = ({ label, onClick }: Props) => {
    return (
        <button className={` border px-4 py-3 rounded-md
          dark:bg-white dark:text-black bg-black text-white cursor-pointer dark:hover:bg-gray-200 hover:bg-gray-800
            `}
            onClick={onClick}
        >{label}</button>
    );
}