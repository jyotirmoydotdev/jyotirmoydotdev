// app/blogs/building-a-json-validation-pipeline-with-go-and-gin/opengraph-image.tsx
import { Capitalize } from '@/lib/misc';
import { ImageResponse } from 'next/og'
import React from 'react';

export const alt = 'Jyotirmoy Barman'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundImage: `radial-gradient( circle farthest-corner at 10% 20%,  rgba(95,117,227,1) 0%, rgba(188,167,205,1) 90% )`
        }}

      >
        <p
        style={{
            color: '#fff',
            fontSize: 38,
            fontWeight: 'bold',
            maxWidth: '50rem',
            textAlign: 'center',
        }}
        >Leetcode</p>
        <h1
          style={{
            color: '#fff',
            fontSize: 58,
            fontWeight: 'bold',
            maxWidth: '50rem',
            textAlign: 'center'
          }}
        >
          {Capitalize(slug)}
        </h1>
        <p
        style={{
            color: '#fff',
            fontSize: 38,
            fontWeight: 'bold',
            maxWidth: '50rem',
            textAlign: 'center',
        }}
        >jyotirmoy.dev</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
