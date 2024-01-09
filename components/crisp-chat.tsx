"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("27620b2b-eb0a-4e90-96b6-b01482850401");
  }, []);

  return null;
};