'use client'

import Image from 'next/image'
import { useState } from 'react'

const mediaItems = [
  { src: 'clanek - zdravje - 2005.jpg', label: 'Zdravje - Februar 2005 (1. del)' },
  { src: 'clanek - zdravje2 - 2005.jpg', label: 'Zdravje - Februar 2005 (2. del)' },
  { src: 'clanek ONA 2005.jpg', label: 'Ona - Maj 2005 (1. del)' },
  { src: 'clanek ONA - 2 - 2005.jpg', label: 'Ona - Maj 2005 (2. del)' },
  { src: 'clanek OTROK IN DRUŽINA 05OKT05 .jpg', label: 'Otrok in družina - Oktober 2005' },
  { src: 'clanek jana 2006.jpg', label: 'Jana - Maj 2006' },
  { src: 'clanek nedeljski dnevnik - 2004.jpg', label: 'Nedeljski dnevnik - December 2004' },
  { src: 'clanek primorske novice 2005.jpg', label: 'Primorske novice - Maj 2005' },
  { src: 'clanek sloevnske novice - 2003.jpg', label: 'Slovenske novice - November 2003' },
  { src: 'clanek-gorenjskiglas.jpg', label: 'Gorenjski glas - November 2003' },
  { src: 'clanek-jana-1-2005.jpg', label: 'Jana - Januar 2005 (1. del)' },
  { src: 'clanek-jana-2-2005.jpg', label: 'Jana - Januar 2005 (2. del)' },
  { src: 'clanek-mag.jpg', label: 'MAG - November 2002 (1. del)' },
  { src: 'clanek-mag2.jpg', label: 'MAG - November 2002 (2. del)' },
  { src: 'clanek-mhealth1.jpg', label: "Men's Health - Marec 2004 (1. del)" },
  { src: 'clanek-mhealth2.jpg', label: "Men's Health - Marec 2004 (2. del)" },
  { src: 'clanek-mhealth3.jpg', label: "Men's Health - Marec 2004 (3. del)" },
  { src: 'clanek-nedeljski dnevnik-updated.jpg', label: 'Nedeljski dnevnik - September 2002' },
  { src: 'clanek_cosmopolitan1.jpg', label: 'Cosmopolitan - Maj 2004 (1. del)' },
  { src: 'clanek_cosmopolitan2.jpg', label: 'Cosmopolitan - Maj 2004 (2. del)' },
  { src: 'clanek_cosmopolitan3.jpg', label: 'Cosmopolitan - Maj 2004 (3. del)' },
  { src: 'clanek_cosmopolitan4.jpg', label: 'Cosmopolitan - Maj 2004 (4. del)' },
]

export default function MediaPageContent() {
  const [zoomed, setZoomed] = useState<string | null>(null)

  return (
    <>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '2rem',
        alignItems: 'center',
      }}>
        {mediaItems.map((item, i) => (
          <div key={i} className="group flex flex-col items-center">
            <div
              className="relative w-full rounded-lg overflow-hidden bg-white transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl"
              onClick={() => setZoomed(`/images/page_mediji_images of magazines/${item.src}`)}
              style={{
                boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                aspectRatio: '3/4',
                marginBottom: '1rem',
                cursor: 'zoom-in',
              }}
            >
              <Image
                src={`/images/page_mediji_images of magazines/${item.src}`}
                alt={item.label}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '1.1rem',
              fontWeight: 600,
              color: '#1A1A1A',
              textAlign: 'center',
            }}>
              {item.label}
            </h3>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {zoomed && (
        <div
          onClick={() => setZoomed(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.88)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            cursor: 'zoom-out',
          }}
        >
          <img
            src={zoomed}
            alt="Povečana slika"
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              objectFit: 'contain',
              borderRadius: '4px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
          />
        </div>
      )}
    </>
  )
}
