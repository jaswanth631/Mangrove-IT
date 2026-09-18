"use client";

import React from "react";
import { getServiceBySlug } from "@/lib/data/services";
import ServiceDetailSection from "./ServiceDetailSection";

const category = getServiceBySlug("it-integration")!;

export default function ITIntegration() {
  return (
    <ServiceDetailSection
      category={category}
      sectionTitle="Connected Digital Infrastructure"
    />
  );
}
