"use client";

import React from "react";
import { getServiceBySlug } from "@/lib/data/services";
import ServiceDetailSection from "./ServiceDetailSection";

const category = getServiceBySlug("interior-acoustics")!;

export default function InteriorAcoustics() {
  return (
    <ServiceDetailSection
      category={category}
      sectionTitle="Spaces That Perform"
      groups={[
        { label: "Interior Solutions", items: category.services },
        { label: "Acoustic Solutions", items: category.acousticSolutions ?? [] },
      ]}
    />
  );
}
