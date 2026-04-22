"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  const intervalId = setInterval(callback, 1000);
  return () => clearInterval(intervalId);
}

function getSnapshot() {
  return new Intl.DateTimeFormat("en-KE", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "Africa/Nairobi",
  }).format(new Date());
}

const getServerSnapshot = () => "00:00:00 AM";

export default function CurrentTime() {
  const time = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return <div className="text-muted-primary w-30 uppercase">{time}</div>;
}
