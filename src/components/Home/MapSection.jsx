"use client";

import {
  MapPin,
  Phone,
  Clock3,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

const PLACE = {
  name: "Heaven Furniture BD",
  address: [
    "Lucky Hotel More, North of Bheluaar Dighi",
    "Chattogram 4202, Bangladesh",
  ],
  phone: "+880 1897-020407",
  hours: "Open daily · 8:00 AM – 11:00 PM",
  lat: 22.3541202,
  lng: 91.7918942,
  mapsUrl:
    "https://www.google.com/maps/place/Heaven+Furniture+BD/@22.3540464,91.7916315,20.79z/data=!4m6!3m5!1s0x30acd9f19fe5a80d:0x35c3740755792624!8m2!3d22.3541202!4d91.7918942!16s%2Fg%2F11n49df152",
};

export default function MapSection() {
  const embedSrc = `https://www.google.com/maps?q=${PLACE.lat},${PLACE.lng}&z=17&output=embed`;

  return (
    <section className="relative overflow-hidden bg-depth py-16 text-bone sm:py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
        {/* Section Header */}
        <div className="mb-8 flex flex-col gap-5 sm:mb-12 md:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 flex items-center font-bold gap-2 text-[2.5rem] uppercase tracking-[0.1em] text-[var(--brass)] sm:mb-4">
              <MapPin className="h-5.5 w-5.5" />
              Visit Us
            </p>
          </div>

          <p className="max-w-md text-xl font-light leading-relaxed text-bone/55 sm:text-base">
            Visit our showroom in Chattogram and experience our furniture,
            materials and craftsmanship in person.
          </p>
        </div>

        {/* Main Card */}
        <div className="overflow-hidden rounded-sm border border-bone/10 bg-depth shadow-2xl">
          <div className="grid md:grid-cols-12">
            {/* MAP */}
            <a
              href={PLACE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block min-h-[280px] overflow-hidden md:col-span-7 md:min-h-[500px]"
            >
              <iframe
                title={`Map to ${PLACE.name}`}
                src={embedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="pointer-events-none absolute inset-0 h-full w-full border-0 grayscale-[15%] contrast-[95%] brightness-[85%] transition-all duration-700 group-hover:scale-[1.03] group-hover:brightness-100"
              />

              {/* Map Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-depth/70 via-transparent to-depth/10" />

              {/* Map Label */}
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-sm border border-bone/10 bg-depth/85 px-3 py-2 text-[0.62rem] uppercase tracking-[0.18em] text-bone backdrop-blur-md sm:bottom-6 sm:left-6">
                <ExternalLink className="h-3.5 w-3.5 text-brass" />
                Open in Maps
              </div>

              {/* Location Pin */}
              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-brass/40 bg-depth/80 text-brass backdrop-blur-md sm:right-6 sm:top-6">
                <MapPin className="h-4 w-4" />
              </div>
            </a>

            {/* CONTENT */}
            <div className="relative flex flex-col justify-between border-t border-bone/10 p-6 sm:p-8 md:col-span-5 md:border-l md:border-t-0 md:p-10 lg:p-12">
              {/* Decorative Corner */}
              <div className="pointer-events-none absolute right-5 top-5 h-8 w-8 border-r border-t border-brass/30" />

              <div>
                {/* Title */}
                <h3 className="font-heading text-2xl font-light leading-tight text-bone sm:text-3xl md:text-4xl">
                  {PLACE.name}
                </h3>

                <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-bone/50">
                  Step into our showroom and discover furniture crafted for
                  beautiful, lived-in spaces.
                </p>

                {/* Details */}
                <div className="mt-8 space-y-6 sm:mt-10">
                  {/* Address */}
                  <div className="border-t border-bone/10 pt-4">
                    <p className="mb-2 flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.2em] text-brass">
                      <MapPin className="h-3.5 w-3.5" />
                      Address
                    </p>

                    <a
                      href={PLACE.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-light leading-relaxed text-bone/75 transition-colors hover:text-brass"
                    >
                      {PLACE.address.map((line, index) => (
                        <span key={line}>
                          {line}
                          {index < PLACE.address.length - 1 && <br />}
                        </span>
                      ))}
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="border-t border-bone/10 pt-4">
                    <p className="mb-2 flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.2em] text-brass">
                      <Phone className="h-3.5 w-3.5" />
                      Phone
                    </p>

                    <a
                      href={`tel:${PLACE.phone.replace(/\s/g, "")}`}
                      className="text-sm font-light text-bone/75 transition-colors hover:text-brass"
                    >
                      {PLACE.phone}
                    </a>
                  </div>

                  {/* Hours */}
                  <div className="border-t border-bone/10 pt-4">
                    <p className="mb-2 flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.2em] text-brass">
                      <Clock3 className="h-3.5 w-3.5" />
                      Opening Hours
                    </p>

                    <p className="text-sm font-light text-bone/75">
                      {PLACE.hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a
                href={PLACE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex w-full items-center justify-between rounded-full border border-brass/50 bg-brass px-5 py-3.5 text-xs font-medium uppercase tracking-[0.16em] text-depth transition-all duration-300 hover:bg-brassBright hover:shadow-[0_10px_30px_rgba(184,137,79,0.25)] sm:w-fit sm:min-w-[190px]"
              >
                <span>Get Directions</span>

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
      </div>
    </section>
  );
}
