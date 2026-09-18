"use client";

import React from "react";
import { getServiceBySlug } from "@/lib/data/services";
import ServiceDetailSection from "./ServiceDetailSection";

const category = getServiceBySlug("electrical-projects")!;

export default function ElectricalProjects() {
  return (
    <ServiceDetailSection
      category={category}
      sectionTitle="Power Infrastructure"
    />
  );
}
