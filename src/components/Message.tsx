import { twMerge } from 'tailwind-merge';

type MessageProps = {
  children: React.ReactNode;
  className: string;
  key: string;
};

export function Message({ children, className, key }: MessageProps) {
  console.log(key)
  return (
    <div
      className={twMerge(
        `bg-gray-200 rounded self-end p-2 text-sm ${className}`
      )}
    >
      {children}
    </div>
  );
}
