import "./Buttons.css";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

export const OutlineButton = ({ onClick, children }: Props) => {
  return (
    <button className="btn-outline" onClick={onClick}>
      {children}
    </button>
  );
};
