import { blogs } from '@/data';
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
  const post = blogs.find((blog)=>blog.titleSlug === slug)
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
      backgroundSize: '20px 20px'
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
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 255, 255, 0.6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
            <div style={styles.dateBadge}>{post.date}</div>
          </div>
        </div>
        <div style={styles.title}>
          {post.title}
        </div>
        <div style={styles.description}>
          {post.description}
        </div>
      </div>
      <div
      style={styles.readMore}>Read More</div>
    </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
