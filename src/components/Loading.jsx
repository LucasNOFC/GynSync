const Loading = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="w-16 h-16 border-5 border-blue-950 rounded-full absolute"></div>
      <div
        className="w-16 h-16 rounded-full animate-spin [animation-duration:1s]"
        style={{
          background: "conic-gradient(#0091ff 0% 20%, transparent 20%)",
          WebkitMask:
            "radial-gradient(farthest-side, transparent calc(100% - 4px), black 0)",
        }}
      ></div>
    </div>
  );
};

export default Loading;
