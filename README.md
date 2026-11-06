# Saranshx Portfolio

Dark neo-brutalism portfolio for motion designer specializing in SaaS product launches.

## Setup

1. Install dependencies:
```bash
npm install react react-dom lucide-react
```

2. Add video files:
   - Place your Cursis project video at `/public/videos/cursis-demo.mp4`
   - Place your lakai.pro project video at `/public/videos/lakai-demo.mp4`

3. Import and use the component:
```jsx
import Portfolio from './Portfolio';

function App() {
  return <Portfolio />;
}
```

## Features

- Fixed header with navigation
- Click-to-play video showcases
- Fully responsive design
- Dark neo-brutalism aesthetic:
  - Black background (#0a0a0a)
  - White text with neon green (#00ff00) and magenta (#ff00ff) accents
  - 4px white borders
  - 8px hard black shadows
  - Space Grotesk bold fonts (700-900)
  - No rounded corners

## Structure

- Header: Fixed navigation with name and social links
- Hero: Large name display with tagline and CTA
- Work: Two video project showcases
- Contact: Call-to-action section
- Footer: Copyright and social link

## Video Setup

Replace the placeholder video paths with your actual video files:
- Cursis company project video
- lakai.pro company project video

Videos will play/pause on click with a "CLICK TO PLAY" overlay when paused.
