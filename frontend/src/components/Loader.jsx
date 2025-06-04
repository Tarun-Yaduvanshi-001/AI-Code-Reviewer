function Loader() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="relative flex flex-col items-center gap-2">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent border-b-transparent rounded-full animate-spin"></div>
        <div className="h-full flex justify-center items-center text-2xl text-gray-400 animate-pulse">
          Generating Response...
        </div>
      </div>
    </div>
  );
}

export default Loader;