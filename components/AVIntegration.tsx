"use client";

import React from "react";
import { getServiceBySlug } from "@/lib/data/services";
import ServiceDetailSection from "./ServiceDetailSection";

const category = getServiceBySlug("av-integration")!;

export default function AVIntegration() {
  return (
    <ServiceDetailSection
      category={category}
      sectionTitle="Immersive Audio & Visual"
    />
  );
}
