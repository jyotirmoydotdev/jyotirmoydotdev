import { practices } from '@/data';
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
  const post = practices.find((blog)=>blog.titleSlug === slug)
  const id = String(post?.id)
  if (post === undefined) {
    return new ImageResponse(
      (
        <div 
        className=' justify-center items-center'
        style={
          {
            fontSize: '10rem',
            textAlign: 'center',
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%'
          }
        }>
          Could not found
        </div>
      )
    )
  }
  const styles = {
    wrapper: {
      display: 'flex',
      flexDirection: 'column' as const,
      justifyContent: 'space-between',
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
    },
    contentContainer: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '32px',
    },
    headerContainer: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    dateWrapper: {
      display: 'flex',
      gap: '16px',
      alignItems: 'center',
    },
    calendarIcon: {
      width: '32px',
      height: '32px',
      color: '#F97316',
    },
    dateBadge: {
      padding: '8px 16px',
      borderRadius: '12px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      fontSize: '24px',
      color: 'rgba(255, 255, 255, 0.6)',
    },
    title: {
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical' as const,
      overflow: 'hidden',
      fontWeight: 900,
      fontSize: '64px',
      fontFamily: 'sans-serif',
      color: '#F97316',
      lineHeight: '1.2',
    },
    description: {
      display: '-webkit-box',
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical' as const,
      overflow: 'hidden',
      fontSize: '32px',
      color: 'rgba(255, 255, 255, 0.8)',
      lineHeight: '1.5',
    },
    readMore: {
      display: 'flex',
      gap: '16px',
      flexWrap: 'wrap' as const,
      fontSize: '28px',
      color: '#F97316',
      fontWeight: 500,
    },
  };


  return new ImageResponse(
    (
      <div style={styles.wrapper}>
      <div style={styles.contentContainer}>
        <div style={styles.headerContainer}>
          <div style={styles.dateWrapper}>
            <svg 
              stroke="currentColor" 
              fill="rgba(255, 255, 255, 0.6)" 
              strokeWidth="0" 
              role="img" 
              viewBox="0 0 24 24" 
              height={40}
              width={40}
              xmlns="http://www.w3.org/2000/svg">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z">
                </path>
            </svg>
            <div style={styles.dateBadge}>{`#${id}`}</div>
          </div>
        </div>
        <div style={styles.description}>
          {post.difficulty}
        </div>
        <div style={styles.title}>
          {post.title}
        </div>
      </div>
      <div
      style={{
        display: 'flex',
        gap: 8
      }}
      >
        {
          post.topicTags.map((tag, i)=>(
            <div key={i} style={styles.dateBadge}>{tag}</div>
          ))
        }
      </div>
    </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
