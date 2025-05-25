import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Avoid rendering during SSR
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <CircularProgress />
    </div>
  );
};

export default Loader;
