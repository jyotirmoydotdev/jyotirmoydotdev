/**
 * Parses .mdx source content and extracts a structured content outline
 * Returns an array of main headings (h1, h2) with nested sub-headings (h3)
 * 
 * Structure:
 * - Top-level strings are h1/h2 headings
 * - Arrays of strings are nested h3 headings under the preceding heading
 * - h4+ headings are treated as h3 level
 * 
 * @param mdxContent - The raw .mdx file content as a string
 * @returns Array of headings in format: (string | string[])[]
 * 
 * @example
 * // Returns: ['Question', 'Solution', ['Approach', 'Example'], 'Wrap up']
 * parseMdxContent(mdxContent)
 */
export const parseMdxContent = (mdxContent: string): (string | string[])[] => {
  const lines = mdxContent.split('\n');
  const content: (string | string[])[] = [];
  let currentHeading: string | null = null;
  let subHeadings: string[] = [];

  const extractHeadingText = (line: string): string => {
    // Remove JSX components, HTML, markdown formatting at the end
    return line
      .replace(/\s*<[^>]*>.*$/, '') // Remove JSX/HTML tags and anything after
      .replace(/\s*\[[^\]]*\]\([^)]*\)\s*$/, '') // Remove markdown links
      .trim();
  };

  for (const line of lines) {
    // Match h1 headings (# ) - rare but possible
    const h1Match = line.match(/^#\s+(.+)/);
    if (h1Match && !line.match(/^##/)) {
      // Save previous heading if exists
      if (currentHeading) {
        content.push(currentHeading);
        if (subHeadings.length > 0) {
          content.push(subHeadings);
        }
      }
      currentHeading = extractHeadingText(h1Match[1]);
      subHeadings = [];
      continue;
    }

    // Match h2 headings (## )
    const h2Match = line.match(/^##\s+(.+)/);
    if (h2Match && !line.match(/^###/)) {
      // Save previous heading if exists
      if (currentHeading) {
        content.push(currentHeading);
        if (subHeadings.length > 0) {
          content.push(subHeadings);
        }
      }
      currentHeading = extractHeadingText(h2Match[1]);
      subHeadings = [];
      continue;
    }

    // Match h3 headings (### ) - these become sub-items
    const h3Match = line.match(/^###\s+(.+)/);
    if (h3Match && !line.match(/^####/)) {
      if (currentHeading) {
        subHeadings.push(extractHeadingText(h3Match[1]));
      }
      continue;
    }

    // Match h4+ headings (#### ) - treat as h3 level
    const h4PlusMatch = line.match(/^####+\s+(.+)/);
    if (h4PlusMatch && currentHeading) {
      subHeadings.push(extractHeadingText(h4PlusMatch[1]));
      continue;
    }
  }

  // Don't forget to push the last heading and its subheadings
  if (currentHeading) {
    content.push(currentHeading);
    if (subHeadings.length > 0) {
      content.push(subHeadings);
    }
  }

  return content;
};

/**
 * Alternative version that also accepts file paths and reads the file
 * @param filePath - Path to the .mdx file
 * @returns Promise resolving to content array
 */
export const parseMdxFile = async (filePath: string): Promise<(string | string[])[]> => {
  try {
    const response = await fetch(filePath);
    const mdxContent = await response.text();
    return parseMdxContent(mdxContent);
  } catch (error) {
    console.error(`Failed to parse MDX file: ${filePath}`, error);
    return [];
  }
};
