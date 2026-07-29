interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  onClick,
  variant = "primary",
}: ButtonProps) {
  const base =
    "w-full rounded-xl px-6 py-4 font-semibold transition";

  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-slate-800 text-white hover:bg-slate-700";

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles}`}
    >
      {children}
    </button>
  );
}