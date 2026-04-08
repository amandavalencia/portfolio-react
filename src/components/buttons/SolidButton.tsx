import "./Buttons.css";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

export const SolidButton = ({ onClick, children }: Props) => {
  return (
    <button className="btn-solid" onClick={onClick}>
      {children}
    </button>
  );
};
