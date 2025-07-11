type Props = {
  message: string;
  type?: "success" | "error";
};

export default function StatusMessage({ message, type = "success" }: Props) {
  if (!message) return null;
  return (
    <div
      className={`mt-4 w-full max-w-md px-4 py-2 rounded text-center ${
        type === "error"
          ? "bg-red-100 text-red-700 border border-red-300"
          : "bg-green-100 text-green-700 border border-green-300"
      }`}
    >
      {message}
    </div>
  );
}
