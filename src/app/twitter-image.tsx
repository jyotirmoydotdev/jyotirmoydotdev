import { ImageResponse } from 'next/og'

export const alt = 'Jyotirmoy Barman'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  try {
    return new ImageResponse(
      (
        <div
          className=' '
          style={{
            height: '100%',
            width: '100%',
            position:'relative',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            backgroundColor: '#F97316',
            backgroundImage: `
              linear-gradient(#fb923c 1px, transparent 1px), 
              linear-gradient(90deg, #fb923c 1px, transparent 1px)`,
            backgroundSize: '20px 20px',

          }}
        >

          <div
            style={{
              display: 'flex',
              fontSize: 100,
              fontStyle: 'normal',
              color: 'white',
              whiteSpace: 'pre-wrap',
            }}
          >
            <b>Jyotirmoy Barman</b>
          </div>
          <div style={{
            fontSize: 40,
            fontWeight: 700,
            paddingTop: 8,
            color: 'white'
          }}
          >
            Software Engineer / Bringing ideas to reality
          </div>
        </div>
      ),
      {
        ...size,
      }
    )
  } catch (error) {
    console.log(error)
  }
}