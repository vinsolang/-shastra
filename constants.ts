import { Project, Service, TeamMember, TimelineEvent, Template } from './types';

export const DEFAULT_PROJECTS: Project[] = [
  {
    id: 1,
    title: "The Apex Villa",
    category: "Residential",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdxbS_Xq5XD-Mkv-Xu8-35qKp-H_8GWVke6mdDCRhf-Y_qNPiEXFd3z4PDw83Jqg1MaiaKJ-NSF-ExvHDtiVl8eXBMcx7Oi0wjNENMcS0q8pRIqh0DvLm5UhI2j6_KHpz1m_MxIPJ23jPoSKAr7lmhLS_K53RngtWb2rIKrhhgxSffGvW7vmd1DPilLiRhld_j75okTD2ehauP5yVviNIWuvkWaviX-vnrPQSsGWl6kvKQspByPv9yuy-3OTeckl1jjhSi1x2_-fk",
    location: "Beverly Hills, CA",
    details: "2,400 sq ft • 4 Bed, 3 Bath",
    status: "Completed"
  },
  {
    id: 2,
    title: "Logistics Hub A1",
    category: "Industrial",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbBORiRn5xl3F7ZdKKMMbrDRvglQBSMMFwaWzalXnjlU4VTNqaWgkuA6hdpjoZs5rGTVyhwmmg-98FrYVzzI8Q67nxr9XVB15Yfj6rzJQNfkHkdHYDMNshMIeiT0Szdycm88Uhpi8iwdjMkN6iRLEXqT33fptDi7wMYOv_j21zED3HooKvd3wMkahe6AxNUd8oLKOYBDsBkTNjPtf_F9c6OpsUggVIN2lPWjJKU2OXKDScgFzwRQa_6Rq06GIudtQn5JqsFc-sPNs",
    location: "Industrial Park, TX",
    details: "10,000 sq ft • Prefabricated Steel",
    status: "In Progress"
  },
  {
    id: 3,
    title: "City Center Office",
    category: "Commercial",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlaBX811keH3U0YLw7-V8Mow-NPTXKY6_MYh3UEO-rXELllCQBkrGH9ZfkBV4Ld8JwCfLMwjUtjpcoioNe4eF-QfTNsYmZxC9ZNwNbCO35kcVMHYaWbRatd0X-uUdOYfhd0dsCno6ws5yzFkdo9saqTxRqJQe1CQVoyS-yUSxQp1zXru0Dldi5men6SGJ6HTtuIz4rU6-l_npcjNhLcHT42E1rtDca0zLjF22FMuqp3YZcuyPBB0IRkRWcWwfv6GP4YM26o_WxH0s",
    location: "Downtown, NY",
    details: "15,000 sq ft • 5 Floors",
    status: "Completed"
  },
  {
    id: 4,
    title: "Suburban Reno Pack",
    category: "Renovation",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWmozl76GyJ3l83l76jeKVX4BA52H5jYadCaKyhQNwziMkQLhf_Vlh-8ng7ZOwyr4s-zfYCJt6mvjL4thHKwcMA8QYPvHMSyTX1Gu9ooktlls_VHzJLJeWZqKuz1xUHmneQs7VdwWlysE39-i9E8ggZne8HZApYf4U6xb6tnHhQhrRmMmg-Zo9jtfTgVMDW-oFPt3fohbC_cF2mybWEtOC9gzsiULyOfreIO8e9p2RgtK6SSa7fIkKPHUJRXY9ICFGkC8x_afhLPU",
    location: "Suburban Heights, OH",
    details: "1,200 sq ft • Interior Focus",
    status: "Completed"
  },
  {
    id: 5,
    title: "Skyline Apartments",
    category: "Residential",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBW2H1nFt7tIBiBqZr0Znn75Z10yDJDP4JP5CcmlwoKfGYomImH25QWlUNGAvB5iz86QmFGKOSxV-ldnrQCjrzuKx_Y-831fsvHZLC1VC0zEa0MWcCInRpI_nUrBhZdIHiTkhOcD05xQormDP1XRvTmlnziiNEQh7ewBvoAHoU7Nc3VmxKH78Xw3u7thMr8RDCqnOYnifItAbJtNp9rSYNpdxWg93zDAZDLM1RWFo7As5SVWaCq0wmr443tImtkE0LiONMot-oyQPY",
    location: "Metro City, FL",
    details: "Multi-unit • 20 Floors",
    status: "Planning"
  },
  {
    id: 6,
    title: "Green Eco Cabin",
    category: "Eco-Friendly",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIpL4_xneqvOwRCONTJmQa_QQnV2xSTjSkv6QWatprqQ4Cy6eiMwkKL9cCJnaszVr-XVw23-J67p4SNukoNOON84AqRbbEZwG2ykdaGevlVKECMKiNFH6eSFUFX4VJyk7egGUdGAy1D9OArxuTZClBWft0xpl1iP_3iQShEAyAQVLdZBLcaTRab8s5Hxmqki9k0WdA1G9S13xOmFNKZgG4xuDD7Xy4WlOWSzxjxI-u242vQ0AevUfpXzyo2CtfWJSk84B-uesQVeU",
    location: "Portland, OR",
    details: "800 sq ft • Sustainable Materials",
    status: "Completed"
  },
    {
    id: 7,
    title: "Riverside Bridge",
    category: "Industrial",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYQ85Y7EFHYnO3KJ2lqnEnieQ8y7-An9_hOEUgxUX9xgTiivoMFe2YdsUwikRSDAn8xh2sdUW9puJcHGj2vvv04hopHyfAg1rO8-6r34OJd4Yyo5iDfZIZFp7_fHc6DMc8FwEtgxEX_n5L2T8SPgADmcvv7i173SEkSKD4qN1ZxgvNW2Lek7sqKbmas5MKzVaNJLXXv9iTfjS8dA08_YPjpQ37BhreHUo9sAW2IJGGpObxDYkSlpUPQDPW8SoMebqeyfRCcMcQQEc",
    location: "River North, IL",
    details: "$200M Budget • Public Infrastructure",
    status: "Completed"
  },
  {
    id: 8,
    title: "Highway 99 Expansion",
    category: "Industrial",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdk4G9-R4h1eqNPbu0gF8hpdQcAw7t4Z3Vz6yAj749XC_udMVlfjdl0uLwfd3xZ92Y7ZrqRzv3peGrs47I8kf-8cDp9boCboFIxWlXK4QqL5GjapafPux2OIWluEelGuhyoiKZHG9gtpgymXJ5Nd6XGnIN5atQVxCoCJ5SBB85BiTxB0_qpQ6mcVD9uv_ysSYr6AbE9lJ189QXry5BG75EJynkF540oqyJjtT-Su56g3YzmU-NW2qyJJhkSz9hgOX8tL6y5EhX2wI",
    location: "West County, CA",
    details: "Civil Engineering • Noise Barriers",
    status: "In Progress"
  }
];

export const DEFAULT_TEMPLATES: Template[] = [
  { 
    id: 1, 
    title: 'Modern Eco-Studio', 
    size: '600 sq ft', 
    type: 'Residential', 
    price: '$99',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: 2, 
    title: 'Family Residence XL', 
    size: '2500 sq ft', 
    type: 'Residential', 
    price: '$299',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: 3, 
    title: 'Start-up Office Hub', 
    size: '5000 sq ft', 
    type: 'Commercial', 
    price: '$499',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: 4, 
    title: 'Industrial Warehouse A', 
    size: '10,000 sq ft', 
    type: 'Industrial', 
    price: '$399',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: 5, 
    title: 'Retail Shop Front', 
    size: '1200 sq ft', 
    type: 'Commercial', 
    price: '$199',
    image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: 6, 
    title: 'Garden Guest House', 
    size: '400 sq ft', 
    type: 'Residential', 
    price: '$79',
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=800&auto=format&fit=crop' 
  },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Residential Construction",
    description: "From custom home building to high-end renovations and extensions. We create living spaces that are built for modern comfort and timeless style.",
    icon: "home"
  },
  {
    id: 2,
    title: "Commercial Projects",
    description: "Office buildings, retail spaces, and industrial facilities built to scale. We understand the importance of timelines and budget in commercial developments.",
    icon: "domain"
  },
  {
    id: 3,
    title: "Infrastructure Development",
    description: "Roads, bridges, and public works engineering with a focus on durability. We build the connections that communities rely on.",
    icon: "add_road"
  },
  {
    id: 4,
    title: "Project Management",
    description: "End-to-end consulting, planning, safety audits, and site supervision. We ensure your project stays on track from blueprint to ribbon cutting.",
    icon: "assignment"
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "CEO & Founder",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8nRktiJ-hEY2MmmI93BqZ5tPg1xiD5n3cg9kQJ3VCxYVTnuUOIhuL8X9IhcmLohjp_EiZr3kZFplZmOw_xRfH6JdzLbJV82IL9KbSrkKq8iMMG4hXUBbyC7rGx4z2WpPzoHjgQJ-WzixGh_7q9psNCWenSR7E-szB2D_iMS0zCMai1oB8uYATGXRpHvb5Ws75UuNUZB3yYDnXPTruq_NRKgO1SYz6aIKXxjFWesV0xnBDTgZ-cVks8Vkc_kk9_iypbmby7zC9qFQ",
    bio: "With 30 years of civil engineering experience, Rajesh leads the strategic vision of Shastra Home."
  },
  {
    id: 2,
    name: "Anita Desai",
    role: "Head Architect",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQWbTvlxINZmUogugK9UDg8YPW3dqCuN9n6Fvwsn6sqD5bgn3zem75H0NW2hkXlaPqXRXrI4BIQdnxt7bc9ccjxXaLwEpy5lH7gpmQHaJeoJN4ilD-JA14BBUchGLWhQSLdmKJ9hvVYPUcaa9yPtMmh3bJXLX9cS4gUxA7znEzJy1UP4k3ycp90rYi29v4C3MTmB1BY-ux033Y41serQoA2THBrusgfRAHgqcC7WY6is21B4QftxYxF1y6qbQmOCclYx1KmBLGEOo",
    bio: "Anita brings creative flair and structural precision, specializing in sustainable urban design."
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Operations Director",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCeKhLFlIxEBUNCTN_iwO0D9Ja7c7xoKtkKkEimp9YoRIFhX8ULzUBiHp_R7568Z-UP7pfJNIsRUY3B046XbTKFRLTPrKuQb4chhiVEyj-18LZEy_zNrrLreko3tLQhGZojyt1FnJ1TGMxFBzu2Da5IDdKwse4uYMAm-bIA3LzkDy4kBnwNBSgkKQVkvl9IGculq7KpNgLq4AGpyoORfZ3oWC_f3yqYo4v-aFZmr6Rngh6ivg846uTXOnGhAlj45I2-sNodRr29TI",
    bio: "Ensuring every project is delivered on time and within budget through meticulous planning."
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: "1995",
    title: "Founded",
    description: "Started as a small residential contractor with a team of five.",
    location: "Bangalore",
    icon: "foundation"
  },
  {
    year: "2005",
    title: "Commercial Expansion",
    description: "Expanded operations to commercial skyscrapers and office complexes.",
    location: "Mumbai",
    icon: "domain"
  },
  {
    year: "2015",
    title: "Green Building Award",
    description: "Recognized for sustainable practices and LEED certified projects.",
    location: "Delhi",
    icon: "eco"
  },
  {
    year: "2023",
    title: "National Operations",
    description: "Celebrating over 500 completed projects across 12 states.",
    location: "Pan-India",
    icon: "map"
  }
];