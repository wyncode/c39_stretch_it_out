import NeckPain from '../../images/neck-pain-pic.png';
import LowerBack from '../../images/back-pain-pic.png';
import AllAround from '../../images/all-around-pain-pic.png';
import Clock5 from '../../images/five-minutes.png';
import Clock10 from '../../images/ten-minutes.png';
import Clock15 from '../../images/fifteen-minutes.png';

export const cards = [
  {
    Title: 'Neck Pain',
    Picture: NeckPain,
    Text:
      'Is there a constant throbbing in your neck? Does it hurt to turn your head?',
    Desc: 'Woman with neck pain'
  },
  {
    Title: 'Lower Back Pain',
    Picture: LowerBack,
    Text:
      'Pain if you sit or stand for too long? Do you have nagging lower back pain?',
    Desc: 'Man with back pain'
  },
  {
    Title: 'All-Around Pain',
    Picture: AllAround,
    Text:
      'Does everything hurt? Do you have low physical energy and feel mentally drained?',
    Desc: 'Woman exhausted with pain'
  }
];

export const clocks = [
  { image: Clock5, alt: 'clock displaying 5minutes', desc: '5 Minutes' },
  { image: Clock10, alt: 'clock displaying 10minutes', desc: '10 Minutes' },
  { image: Clock15, alt: 'clock displaying 15minutes', desc: '15 Minutes' }
];

export const reviews = [
  {
    name: 'Eileen N.',
    text:
      'I love Stretch It Out!  I have achieved great results.  I am no longer in pain and getting stronger by the day.  My energy is up and feel so much better now that I stretch every day',
    footer: '3 weeks ago'
  },
  {
    name: 'Vivian Marcel',
    text:
      "I like it so far!  It's really great when I'm working late at the office or at home and can pop in a quick 5 minute stretch.  I will update in a couple of weeks",
    footer: '7 months ago'
  },
  {
    name: 'Jose Garcia',
    text:
      'Stretch It Out is sent from heaven.  I have been able to breathe better and my pain is no longer a pain that keeps me from enjoying my life.  THANK YOU!',
    footer: '4 months ago'
  },
  {
    name: 'Michael Goldman',
    text:
      "I didn't think doing stretching everyday was going to change my life, but it did AND I'm SO grateful that this is part of my everyday routine.",
    footer: '8 months'
  }
];
