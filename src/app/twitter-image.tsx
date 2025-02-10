import { ImageResponse } from 'next/og'

export const alt = 'Jyotirmoy Barman'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  const styles = {
    wrapper: {
      display: 'flex',
      flexDirection: 'column' as const,
      justifyContent: 'center',
      alignItems: 'center',
      gap: '32px',
      padding: '48px',
      width: '100%',
      height: '100%',
      backgroundColor: '#1a1a1a',
      backgroundImage: `
        linear-gradient(#262422 3px, transparent 1px), 
        linear-gradient(90deg, #262422 3px, transparent 1px)`,
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backgroundSize: '20px 20px',
    }
  }
    return new ImageResponse(
      (
        <div
          style={styles.wrapper}
        >

          <div
            style={{
              display: 'flex',
              fontSize: 100,
              color: '#F97316',
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
}