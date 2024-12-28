const Error = () => {
  return (
    <div className="p-4 md:p-5 border border-red-500/50 rounded-xl bg-red-500/50 shadow backdrop-blur">
      <p className="text-2xl">City not found</p>
      <p className="text-white/50">Please try again</p>
    </div>
  );
};

export default Error;
