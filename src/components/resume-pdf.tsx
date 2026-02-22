'use client'

import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import ResumePage from '@/components/resume-page';

function ResumePDF() {
  return (
    < PDFViewer height={"100%"} >
      <ResumePage />
    </PDFViewer >
  )
}

export default ResumePDF
