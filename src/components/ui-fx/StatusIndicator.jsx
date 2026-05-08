import React, { useState, useEffect } from "react";

const StatusIndicator = () => {
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/");
        if (response.ok) {
          setStatus("online");
        } else {
          setStatus("offline");
        }
      } catch (error) {
        setStatus("offline");
      }
    };

    checkStatus();
    // Re-check every 30 seconds
    const interval = setInterval(checkStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = () => {
    switch (status) {
      case "online":
        return "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]";
      case "offline":
        return "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]";
      default:
        return "bg-gray-500 animate-pulse";
    }
  };

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/[0.02]">
      <div className={`h-1.5 w-1.5 rounded-full ${getStatusColor()}`} />
      <span className="text-[9px] uppercase tracking-[0.2em] text-white/50">
        System: <span className={status === "online" ? "text-white/80" : "text-white/30"}>{status}</span>
      </span>
    </div>
  );
};

export default StatusIndicator;
