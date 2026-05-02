import banshikaImage from '../assets/facultyimg/21.jpeg';
import kajalImage from '../assets/facultyimg/23.jpeg';
import piyushImage from '../assets/facultyimg/24.jpeg';
import akankshaImage from '../assets/facultyimg/25.jpeg';
import abcImage from '../assets/facultyimg/26.jpeg';
import sonamImage from '../assets/facultyimg/22.jpeg';

const siteData = {
  school: {
    name: 'Vedanta International School',
    tagline: 'Inspiring Excellence, Building Character',
    established: '2026',
    session: '2026–2027',
    type: 'International School',
    medium: 'English & Hindi',
    classes: 'Nursery to 8th',
    principal: 'Piyush Raj Gupta',
    director: 'Subhash Prasad Gupta',
    principalImage: piyushImage,
    directorImage: sonamImage,
    address: `Village Nawadih, PS Rohtas,\nDistrict Rohtas, State Bihar – 821308`,
    phones: ['9508579707','6299101194'],
    email: 'vedantainternationalschool@gmail.com',
    officeTiming: '9:00 AM – 2:30 PM',
    schoolTiming: '9:00 AM – 2:30 PM',
    admissionOpenDate: '16 February 2026'
  },
  faculty: [
    { name: 'Piyush Raj Gupta', role: 'Principal', qual: 'BSc Chemistry', image: piyushImage },
    { name: 'Akanksha Raj', role: 'Science Teacher', qual: 'BSc Mathematics', image: akankshaImage },
    { name: 'Kajal Kumari', role: 'Biology Teacher', qual: 'BSc Biology', image: kajalImage },
    { name: 'Sonam Kumari', role: 'Class Teacher', qual: 'B.Ed (AU)', image: sonamImage },
    { name: 'Banshika Gupta', role: 'English Teacher', qual: 'B.Ed', image: banshikaImage },
    { name: 'ABC', role: 'Hindi Teacher', qual: 'B.Ed', image: abcImage }
  ],
  subjects: ['English','Hindi','Sanskrit','Mathematics','Science','Social Science','Computer Science','General Knowledge','Spoken English'],
  activities: ['Spoken English','Yoga & Meditation','Sports & Athletics'],
  highlights: [
    {title:'Small Class Size',desc:'Personalised attention with low student-teacher ratio.',icon:'👥'},
    {title:'Bilingual Curriculum',desc:'English & Hindi medium with emphasis on communication.',icon:'📚'},
    {title:'Holistic Development',desc:'Sports, yoga and spoken English built into schedule.',icon:'🌱'}
  ],
  images: [
    'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1523050854058-8df90110c476?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80'
  ],
  notices: [
    {
      id: 1,
      title: 'Admission Open 2026–27',
      date: '2026-02-16',
      category: 'Admission',
      content: 'Admissions are now open for Nursery to Class 8 for the new session.'
    },
    {
      id: 2,
      title: 'Holi Holiday',
      date: '2026-03-13',
      category: 'Holiday',
      content: 'School will remain closed on account of Holi festival.'
    },
    {
      id: 3,
      title: 'Annual Examination Schedule',
      date: '2026-03-25',
      category: 'Exam',
      content: 'Annual examinations will commence from 25th March 2026.'
    }
  ],
  events: [
    { title: 'Annual Sports Day', date: '2026-01-20', desc: 'Athletics, team sports and prize distribution.' },
    { title: 'Republic Day Celebration', date: '2026-01-26', desc: 'Flag hoisting, cultural performances and speeches.' },
    { title: 'Annual Function & Prize Day', date: '2026-02-10', desc: 'Cultural showcase, academic awards and parent meet.' }
  ],
  testimonials: [
    { name: 'Rajesh Kumar', role: 'Parent', text: 'My children have grown tremendously — both in academics and personality. The teachers genuinely care about every student\'s progress and wellbeing.' },
    { name: 'Sunita Devi', role: 'Parent', text: 'The bilingual curriculum and emphasis on values make Vedanta stand out in the region. We are very satisfied with the holistic development.' },
    { name: 'Amit Gupta', role: 'Parent', text: 'Safe environment, dedicated teachers, and a focus on character building. We couldn\'t ask for a better foundation for our daughter\'s future.' }
  ]
}

export default siteData;
