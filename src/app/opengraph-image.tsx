import { ImageResponse } from 'next/og'
 
// Image metadata
export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
// Image generation
export default async function Image() {
  // Font loading, process.cwd() is Next.js project directory
 
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 100,
          background: 'white',
          paddingBottom: 8,
          fontWeight:700,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Jyotirmoy Barman
            <div className=" font-b"
            style={{
                fontSize: 40,
                fontWeight: 700
            }}
            >
                Software Engineer / Bringing ideas to reality
            </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  )
}