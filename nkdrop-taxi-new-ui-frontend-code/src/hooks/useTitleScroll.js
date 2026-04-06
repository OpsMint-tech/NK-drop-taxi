import { useEffect, useRef } from 'react';

export default function useTitleScroll(speed = 300) {
  const initialTitleRef = useRef(document.title);

  useEffect(() => {
    const initialTitle = initialTitleRef.current;
    // Use en-spaces (\u2002) because browsers usually collapse regular spaces in the title.
    // This creates a nice, large gap between the repeating text so it looks much smoother!
    let currentTitle = initialTitle + "\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002";
    let timeoutId;
    let isPaused = false;

    const scrollTitle = () => {
      if (!isPaused) {
        currentTitle = currentTitle.substring(1) + currentTitle.substring(0, 1);
        document.title = currentTitle;
      }
      timeoutId = setTimeout(scrollTitle, speed);
    };

    const handleMouseLeave = () => {
      isPaused = true;
      // Reset to original title so it's fully readable when hovering the tab
      document.title = initialTitle; 
    };

    const handleMouseEnter = () => {
      isPaused = false;
    };

    // Start scrolling
    scrollTitle();

    // When mouse leaves the window (moves to browser tabs), we pause and reset.
    // When it re-enters the window, we resume.
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.title = initialTitle; 
    };
  }, [speed]);
}
