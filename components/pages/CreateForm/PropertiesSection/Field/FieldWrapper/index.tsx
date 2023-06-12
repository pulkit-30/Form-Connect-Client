type Props = {
  children: React.ReactNode;
};

const FieldWrapper = ({ children }: Props) => (
  <div className="flex gap-4 items-center mt-4 mb-4 border-b pb-4 border-slate-900">
    {children}
  </div>
);

export default FieldWrapper;
