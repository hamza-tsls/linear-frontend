'use client';

import Header from "@/app/components/landing_page_components/Inbox/Header";
import Contact from "@/app/components//landing_page_components/contact/Contact"; // Import Contact here

export default function FirstHalf() {
  return (
    <div>
      <Header />
      
      {/* Anonymous Contact below the header */}
      <Contact className="mt-1" />
      
      {/* other content */}
    </div>
  );
}
