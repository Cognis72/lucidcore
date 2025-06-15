// Language Data
const translations = {
    en: {
        // Navigation
        'brand': 'LucidCore',
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-technology': 'Technology',
        'nav-roadmap': 'Roadmap',
        'nav-tokenomics': 'Tokenomics',
        'nav-community': 'Community',
        'nav-whitepaper': 'Whitepaper',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-title': 'Welcome to the Future of Neural Interface',
        'hero-subtitle': 'LucidCore revolutionizes human-computer interaction through advanced neural interface technology',
        'hero-cta-primary': 'Explore Technology',
        'hero-cta-secondary': 'Read Whitepaper',
        
        // About Section
        'about-title': 'About LucidCore',
        'about-subtitle': 'Pioneering the next generation of neural technology',
        'about-card1-title': 'Neural Mapping',
        'about-card1-desc': 'Advanced brain-computer interfaces that map neural pathways with unprecedented precision',
        'about-card2-title': 'Real-time Processing',
        'about-card2-desc': 'Lightning-fast signal processing for seamless thought-to-action translation',
        'about-card3-title': 'Secure & Private',
        'about-card3-desc': 'Military-grade encryption ensures your neural data remains completely private',
        
        // Technology Section
        'tech-title': 'Advanced Technology',
        'tech-subtitle': 'Cutting-edge innovations driving the future',
        'tech-feature1-title': 'Quantum Neural Networks',
        'tech-feature1-desc': 'Leverage quantum computing principles for enhanced neural signal processing and pattern recognition',
        'tech-feature2-title': 'Adaptive Learning',
        'tech-feature2-desc': 'AI algorithms that continuously learn and adapt to individual neural patterns for optimal performance',
        'tech-feature3-title': 'Biocompatible Materials',
        'tech-feature3-desc': 'Next-generation materials designed for long-term neural interface integration',
        
        // Roadmap Section
        'roadmap-title': 'Development Roadmap',
        'roadmap-subtitle': 'Our journey to neural interface excellence',
        'roadmap-q1-title': 'Q1 2025 - Foundation',
        'roadmap-q1-desc': 'Core neural mapping algorithms and initial prototype development',
        'roadmap-q2-title': 'Q2 2025 - Testing',
        'roadmap-q2-desc': 'Beta testing program and safety protocol implementation',
        'roadmap-q3-title': 'Q3 2025 - Launch',
        'roadmap-q3-desc': 'Public release and community ecosystem development',
        'roadmap-q4-title': 'Q4 2025 - Expansion',
        'roadmap-q4-desc': 'Global scaling and advanced feature integration',
        
        // Tokenomics Section
        'tokenomics-title': 'Tokenomics',
        'tokenomics-subtitle': 'Powering the neural economy',
        'token-supply': 'Total Supply',
        'token-development': 'Development',
        'token-community': 'Community',
        'token-ecosystem': 'Ecosystem',
        'token-team': 'Team',
        'token-reserve': 'Reserve',
        
        // Community Section
        'community-title': 'Join Our Community',
        'community-subtitle': 'Connect with fellow neural pioneers',
        'community-discord': 'Discord',
        'community-twitter': 'Twitter',
        'community-telegram': 'Telegram',
        'community-github': 'GitHub',
        
        // FAQ Section
        'faq-title': 'Frequently Asked Questions',
        'faq-q1': 'What is LucidCore?',
        'faq-a1': 'LucidCore is an advanced neural interface technology that enables direct brain-computer communication through sophisticated neural mapping and signal processing.',
        'faq-q2': 'Is LucidCore safe?',
        'faq-a2': 'Yes, LucidCore undergoes rigorous safety testing and uses biocompatible materials designed for safe neural interface integration.',
        'faq-q3': 'How does the token work?',
        'faq-a3': 'The LucidCore token powers our ecosystem, enabling access to neural interface services, community governance, and ecosystem rewards.',
        'faq-q4': 'When will it be available?',
        'faq-a4': 'LucidCore is planned for public release in Q3 2025, following extensive testing and safety validation phases.',
        
        // Contact Section
        'contact-title': 'Get in Touch',
        'contact-subtitle': 'Ready to explore the future?',
        'contact-email-title': 'Email',
        'contact-web-title': 'Website',
        'contact-name': 'Your Name',
        'contact-email': 'Your Email',
        'contact-message': 'Your Message',
        'contact-send': 'Send Message',
        
        // Whitepaper Section
        'whitepaper-title': 'Technical Whitepaper',
        'whitepaper-desc': 'Dive deep into the technical specifications and research behind LucidCore\'s neural interface technology',
        'whitepaper-download': 'Download Whitepaper',
        
        // Whitepaper Page
        'whitepaper-page-title': 'LucidCore Whitepaper',
        'whitepaper-page-subtitle': 'Explore the futuristic vision of brain-connected AI VR systems',
        'whitepaper-vision-title': 'Vision',
        'whitepaper-vision-text': 'LucidCore is a next-generation interface merging neuroscience, AI, and immersive 3D virtual environments through brain-computer interaction.',
        'whitepaper-technology-title': 'Technology Stack',
        'whitepaper-technology-text': 'EEG, fNIRS, TACS, VR integration, AI voice agents, and real-time 3D rendering form the foundation of LucidCore\'s infrastructure.',
        'tech-eeg-title': 'EEG (Electroencephalography)',
        'tech-eeg-desc': 'Non-invasive monitoring of electrical activity in the brain for real-time neural feedback',
        'tech-fnirs-title': 'fNIRS (Functional Near-Infrared Spectroscopy)',
        'tech-fnirs-desc': 'Optical brain monitoring technology measuring cortical activity through blood flow changes',
        'tech-tacs-title': 'TACS (Transcranial Alternating Current Stimulation)',
        'tech-tacs-desc': 'Non-invasive brain stimulation for enhancing neural plasticity and lucid dreaming states',
        'tech-vr-title': 'VR Integration',
        'tech-vr-desc': 'Immersive virtual reality environments synchronized with neural activity patterns',
        'whitepaper-roadmap-title': 'Development Roadmap',
        'phase0-title': 'Lucid Dreaming Awareness',
        'phase0-desc': 'Foundation development for dream state recognition and basic neural monitoring capabilities',
        'phase1-title': 'AI In-Head Assistance',
        'phase1-desc': 'Integration of AI voice agents directly into the neural interface for seamless interaction',
        'phase2-title': 'Brainwave-Controlled Systems',
        'phase2-desc': 'Advanced neural control mechanisms for direct thought-to-action command systems',
        'phase3-title': 'Multiplayer Lucid Economy',
        'phase3-desc': 'Shared virtual spaces with collaborative dreaming and decentralized economic systems',
        'whitepaper-tokenomics-title': 'Neural Economics',
        'whitepaper-tokenomics-text': 'A secure, crypto-based economy with neuro-authentication for all in-dream transactions.',
        'neuro-auth-title': 'Neuro-Authentication',
        'neuro-auth-desc': 'Unique brainwave patterns serve as biometric authentication for secure transactions',
        'dream-assets-title': 'Dream Assets',
        'dream-assets-desc': 'NFT-based virtual items and experiences that exist within lucid dream environments',
        'neural-network-title': 'Neural Network Rewards',
        'neural-network-desc': 'Contributors to the neural network receive tokens for sharing anonymized brain data',
        'whitepaper-community-title': 'Community & Open Innovation',
        'whitepaper-community-text': 'LucidCore encourages global collaboration in building dream apps, lucid games, and VR interactions powered by open APIs.',
        'dream-apps-title': 'Dream Applications',
        'dream-apps-desc': 'Developer ecosystem for creating applications that run within lucid dream states',
        'lucid-games-title': 'Lucid Gaming',
        'lucid-games-desc': 'Immersive gaming experiences controlled by thought and enhanced by neural feedback',
        'open-apis-title': 'Open API Framework',
        'open-apis-desc': 'Comprehensive APIs enabling third-party development and neural interface integration',
        'download-title': 'Download Full Whitepaper',
        'download-desc': 'Get the complete technical documentation and research findings',
        'download-btn': 'Download PDF',
        
        // About Page
        'about-page-title': 'About LucidCore',
        'about-page-subtitle': 'Pioneering the future of neural interface technology',
        'about-mission-title': 'Our Mission',
        'about-mission-desc': 'LucidCore is dedicated to revolutionizing human-computer interaction through advanced neural interface technology. We believe in creating seamless connections between the human mind and digital systems, opening new possibilities for communication, control, and creativity.',
        'about-vision-title': 'Our Vision',
        'about-vision-desc': 'To create a world where technology amplifies human potential, where the barrier between thought and action disappears, and where accessibility through neural interfaces becomes universal.',
        'about-values-title': 'Our Values',
        'about-value1': 'Innovation through ethical research and development',
        'about-value2': 'Privacy and security as fundamental rights',
        'about-value3': 'Accessibility for all users regardless of ability',
        'about-value4': 'Transparency in our technology and processes',
        'team-title': 'Our Team',
        'team-subtitle': 'Experts in neuroscience, AI, and technology',
        'team-ceo-name': 'Dr. Alex Chen',
        'team-ceo-role': 'CEO & Co-Founder',
        'team-ceo-bio': 'PhD in Neuroscience with 15+ years in brain-computer interface research',
        'team-cto-name': 'Dr. Sarah Kim',
        'team-cto-role': 'CTO & Co-Founder',
        'team-cto-bio': 'Former AI researcher at top tech companies, specializing in neural networks',
        'team-lead-name': 'Dr. Michael Rodriguez',
        'team-lead-role': 'Lead Researcher',
        'team-lead-bio': 'Expert in biocompatible materials and neural signal processing',
        
        // Technology Page
        'tech-page-title': 'Advanced Technology',
        'tech-page-subtitle': 'Cutting-edge innovations driving the future of neural interfaces',
        'tech-overview-title': 'Technology Overview',
        'tech-overview-desc': 'Our neural interface technology combines quantum computing principles, advanced AI algorithms, and biocompatible materials to create the most sophisticated brain-computer interface ever developed.',
        'tech-stat1': 'Signal Accuracy',
        'tech-stat2': 'Latency',
        'tech-stat3': 'Neural Channels',
        'tech-stat4': 'Monitoring',
        'core-tech-title': 'Core Technologies',
        'tech-neural-title': 'Quantum Neural Networks',
        'tech-neural-desc': 'Revolutionary quantum-enhanced neural processing that can handle complex pattern recognition and real-time signal analysis with unprecedented accuracy.',
        'tech-neural-feat1': 'Quantum entanglement for parallel processing',
        'tech-neural-feat2': 'Superposition states for multiple signal paths',
        'tech-neural-feat3': 'Error correction through quantum redundancy',
        'tech-materials-title': 'Biocompatible Materials',
        'tech-materials-desc': 'Next-generation materials engineered at the molecular level for perfect integration with neural tissue while maintaining long-term stability.',
        'tech-materials-feat1': 'Self-healing polymer matrices',
        'tech-materials-feat2': 'Anti-inflammatory surface coatings',
        'tech-materials-feat3': 'Flexible conductors that move with tissue',
        'tech-processing-title': 'Real-time Processing',
        'tech-processing-desc': 'Ultra-low latency signal processing with adaptive algorithms that learn and optimize performance for each individual user.',
        'tech-processing-feat1': 'Sub-millisecond response times',
        'tech-processing-feat2': 'Continuous learning algorithms',
        'tech-processing-feat3': 'Predictive signal modeling',
        'tech-specs-title': 'Technical Specifications',
        'spec-hardware-title': 'Hardware',
        'spec-channels': 'Neural Channels:',
        'spec-sampling': 'Sampling Rate:',
        'spec-resolution': 'Resolution:',
        'spec-power': 'Power Consumption:',
        'spec-performance-title': 'Performance',
        'spec-latency': 'Latency:',
        'spec-accuracy': 'Accuracy:',
        'spec-bandwidth': 'Bandwidth:',
        'spec-uptime': 'Uptime:',
        'spec-safety-title': 'Safety',
        'spec-biocompat': 'Biocompatibility:',
        'spec-encryption': 'Encryption:',
        'spec-monitoring': 'Monitoring:',
        'spec-failsafe': 'Failsafe:',
        'innovation-title': 'Innovation Timeline',
        'innovation-2020': 'Quantum neural network research begins',
        'innovation-2022': 'Biocompatible material breakthrough',
        'innovation-2024': 'First successful neural interface prototype',
        'innovation-2025': 'Commercial launch preparation',
        
        // Contact Page
        'contact-page-title': 'Get in Touch',
        'contact-page-subtitle': 'Ready to explore the future of neural interfaces?',
        'contact-info-title': 'Contact Information',
        'contact-research-title': 'Research Collaboration',
        'contact-research-note': 'For academic and research partnerships',
        'contact-business-title': 'Business Development',
        'contact-business-note': 'For enterprise solutions and partnerships',
        'contact-security-title': 'Security',
        'contact-security-note': 'For security-related inquiries and bug reports',
        'contact-email-note': 'For general inquiries and partnerships',
        'contact-web-note': 'Visit our main website for more information',
        'contact-form-title': 'Send us a Message',
        'contact-name-label': 'Name *',
        'contact-email-label': 'Email *',
        'contact-company-label': 'Company/Organization',
        'contact-company': 'Your company or organization',
        'contact-subject-label': 'Subject *',
        'contact-subject-default': 'Select a subject',
        'contact-subject-general': 'General Inquiry',
        'contact-subject-research': 'Research Collaboration',
        'contact-subject-business': 'Business Partnership',
        'contact-subject-press': 'Press/Media',
        'contact-subject-support': 'Technical Support',
        'contact-subject-other': 'Other',
        'contact-message-label': 'Message *',
        'contact-newsletter': 'Subscribe to our newsletter for updates',
        'contact-privacy': 'I agree to the privacy policy and terms of service *',
        'contact-faq-title': 'Frequently Asked Questions',
        'contact-faq-subtitle': 'Quick answers to common questions',
        'contact-faq-q1': 'How can I participate in beta testing?',
        'contact-faq-a1': 'Beta testing applications will open in Q2 2025. Subscribe to our newsletter or join our Discord community to be notified when applications begin.',
        'contact-faq-q2': 'Do you offer research partnerships?',
        'contact-faq-a2': 'Yes, we actively collaborate with universities and research institutions. Contact us at research@lucidcore.ai to discuss potential partnerships.',
        'contact-faq-q3': 'What is your response time for inquiries?',
        'contact-faq-a3': 'We typically respond to general inquiries within 24-48 hours. Research and business partnership inquiries may take 3-5 business days for a detailed response.',
        'contact-faq-q4': 'Can I visit your facilities?',
        'contact-faq-a4': 'Due to the sensitive nature of our research, facility visits are limited to scheduled appointments for serious business partnerships and research collaborations.',

        // Footer
        'footer-desc': 'Pioneering the future of neural interface technology',
        'footer-product': 'Product',
        'footer-technology': 'Technology',
        'footer-roadmap': 'Roadmap',
        'footer-whitepaper': 'Whitepaper',
        'footer-community-title': 'Community',
        'footer-discord': 'Discord',
        'footer-twitter': 'Twitter',
        'footer-telegram': 'Telegram',
        'footer-support': 'Support',
        'footer-faq': 'FAQ',
        'footer-contact': 'Contact',
        'footer-docs': 'Documentation',
        'footer-copyright': '© 2025 LucidCore. All rights reserved.'
    },
    th: {
        // Navigation
        'brand': 'LucidCore',
        'nav-home': 'หน้าแรก',
        'nav-about': 'เกี่ยวกับ',
        'nav-technology': 'เทคโนโลยี',
        'nav-roadmap': 'แผนงาน',
        'nav-tokenomics': 'โทเค็นโนมิกส์',
        'nav-community': 'ชุมชน',
        'nav-whitepaper': 'เอกสารเผยแพร่',
        'nav-contact': 'ติดต่อ',
        
        // Hero Section
        'hero-title': 'ยินดีต้อนรับสู่อนาคตของ Neural Interface',
        'hero-subtitle': 'LucidCore ปฏิวัติการโต้ตอบระหว่างมนุษย์และคอมพิวเตอร์ผ่านเทคโนโลยี neural interface ขั้นสูง',
        'hero-cta-primary': 'สำรวจเทคโนโลยี',
        'hero-cta-secondary': 'อ่าน Whitepaper',
        
        // About Section
        'about-title': 'เกี่ยวกับ LucidCore',
        'about-subtitle': 'เป็นผู้นำในเทคโนโลยี neural รุ่นใหม่',
        'about-card1-title': 'การทำแผนที่ Neural',
        'about-card1-desc': 'อินเทอร์เฟซ brain-computer ขั้นสูงที่จับคู่เส้นทาง neural ด้วยความแม่นยำที่ไม่เคยมีมาก่อน',
        'about-card2-title': 'การประมวลผลแบบเรียลไทม์',
        'about-card2-desc': 'การประมวลผลสัญญาณที่รวดเร็วเหมือนฟ้าแลบสำหรับการแปลความคิดให้เป็นการกระทำที่ราบรื่น',
        'about-card3-title': 'ปลอดภัยและเป็นส่วนตัว',
        'about-card3-desc': 'การเข้ารหัสระดับทหารรับประกันว่าข้อมูล neural ของคุณจะยังคงเป็นส่วนตัวอย่างสมบูรณ์',
        
        // Technology Section
        'tech-title': 'เทคโนโลยีขั้นสูง',
        'tech-subtitle': 'นวัตกรรมล้ำสมัยที่ขับเคลื่อนอนาคต',
        'tech-feature1-title': 'Quantum Neural Networks',
        'tech-feature1-desc': 'ใช้ประโยชน์จากหลักการคอมพิวเตอร์ควอนตัมเพื่อเพิ่มประสิทธิภาพการประมวลผลสัญญาณ neural และการรู้จำรูปแบบ',
        'tech-feature2-title': 'การเรียนรู้แบบปรับตัว',
        'tech-feature2-desc': 'อัลกอริทึม AI ที่เรียนรู้และปรับตัวอย่างต่อเนื่องกับรูปแบบ neural แต่ละบุคคลเพื่อประสิทธิภาพที่เหมาะสม',
        'tech-feature3-title': 'วัสดุเข้ากันได้กับร่างกาย',
        'tech-feature3-desc': 'วัสดุรุ่นใหม่ที่ออกแบบมาสำหรับการผสานรวม neural interface ระยะยาว',
        
        // Roadmap Section
        'roadmap-title': 'แผนพัฒนา',
        'roadmap-subtitle': 'เส้นทางสู่ความเป็นเลิศของ neural interface',
        'roadmap-q1-title': 'ไตรมาส 1 2025 - พื้นฐาน',
        'roadmap-q1-desc': 'อัลกอริทึมการทำแผนที่ neural หลักและการพัฒนาต้นแบบเริ่มต้น',
        'roadmap-q2-title': 'ไตรมาส 2 2025 - การทดสอบ',
        'roadmap-q2-desc': 'โปรแกรมทดสอบเบต้าและการใช้งานโปรโตคอลความปลอดภัย',
        'roadmap-q3-title': 'ไตรมาส 3 2025 - เปิดตัว',
        'roadmap-q3-desc': 'การเปิดตัวสู่สาธารณะและการพัฒนาระบบนิเวศชุมชน',
        'roadmap-q4-title': 'ไตรมาส 4 2025 - การขยาย',
        'roadmap-q4-desc': 'การขยายไปทั่วโลกและการผสานรวมฟีเจอร์ขั้นสูง',
        
        // Tokenomics Section
        'tokenomics-title': 'โทเค็นโนมิกส์',
        'tokenomics-subtitle': 'ขับเคลื่อนเศรษฐกิจ neural',
        'token-supply': 'จำนวนรวม',
        'token-development': 'การพัฒนา',
        'token-community': 'ชุมชน',
        'token-ecosystem': 'ระบบนิเวศ',
        'token-team': 'ทีม',
        'token-reserve': 'สำรอง',
        
        // Community Section
        'community-title': 'เข้าร่วมชุมชนของเรา',
        'community-subtitle': 'เชื่อมต่อกับเพื่อนผู้บุกเบิก neural',
        'community-discord': 'Discord',
        'community-twitter': 'Twitter',
        'community-telegram': 'Telegram',
        'community-github': 'GitHub',
        
        // FAQ Section
        'faq-title': 'คำถามที่พบบ่อย',
        'faq-q1': 'LucidCore คืออะไร?',
        'faq-a1': 'LucidCore เป็นเทคโนโลยี neural interface ขั้นสูงที่ช่วยให้การสื่อสารระหว่างสมองและคอมพิวเตอร์โดยตรงผ่านการทำแผนที่ neural และการประมวลผลสัญญาณที่ซับซ้อน',
        'faq-q2': 'LucidCore ปลอดภัยหรือไม่?',
        'faq-a2': 'ใช่ LucidCore ผ่านการทดสอบความปลอดภัยอย่างเข้มงวดและใช้วัสดุเข้ากันได้กับร่างกายที่ออกแบบมาเพื่อการผสานรวม neural interface ที่ปลอดภัย',
        'faq-q3': 'โทเค็นทำงานอย่างไร?',
        'faq-a3': 'โทเค็น LucidCore ขับเคลื่อนระบบนิเวศของเรา ช่วยให้เข้าถึงบริการ neural interface การกำกับดูแลชุมชน และรางวัลระบบนิเวศ',
        'faq-q4': 'จะมีให้ใช้เมื่อไหร่?',
        'faq-a4': 'LucidCore วางแผนสำหรับการเปิดตัวสู่สาธารณะในไตรมาส 3 2025 หลังจากการทดสอบและการตรวจสอบความปลอดภัยอย่างครอบคลุม',
        
        // Contact Section
        'contact-title': 'ติดต่อเรา',
        'contact-subtitle': 'พร้อมสำรวจอนาคตหรือยัง?',
        'contact-email-title': 'อีเมล',
        'contact-web-title': 'เว็บไซต์',
        'contact-name': 'ชื่อของคุณ',
        'contact-email': 'อีเมลของคุณ',
        'contact-message': 'ข้อความของคุณ',
        'contact-send': 'ส่งข้อความ',
        
        // Whitepaper Section
        'whitepaper-title': 'เอกสารเทคนิค',
        'whitepaper-desc': 'เจาะลึกข้อกำหนดทางเทคนิคและการวิจัยเบื้องหลังเทคโนโลยี neural interface ของ LucidCore',
        'whitepaper-download': 'อ่าน Whitepaper',
        
        // Whitepaper Page
        'whitepaper-page-title': 'เอกสาร LucidCore',
        'whitepaper-page-subtitle': 'สำรวจวิสัยทัศน์แห่งอนาคตของระบบ AI VR ที่เชื่อมต่อสมอง',
        'whitepaper-vision-title': 'วิสัยทัศน์',
        'whitepaper-vision-text': 'LucidCore เป็นอินเทอร์เฟซรุ่นใหม่ที่ผสานประสาทวิทยา AI และสภาพแวดล้อมเสมือน 3D แบบ immersive ผ่านการโต้ตอบระหว่างสมองและคอมพิวเตอร์',
        'whitepaper-technology-title': 'เทคโนโลยีหลัก',
        'whitepaper-technology-text': 'EEG, fNIRS, TACS, การผสานรวม VR, ตัวแทน AI ด้วยเสียง และการเรนเดอร์ 3D แบบเรียลไทม์เป็นรากฐานของโครงสร้างพื้นฐาน LucidCore',
        'tech-eeg-title': 'EEG (Electroencephalography)',
        'tech-eeg-desc': 'การตรวจสอบกิจกรรมไฟฟ้าในสมองแบบไม่รุกรานสำหรับข้อมูลป้อนกลับ neural แบบเรียลไทม์',
        'tech-fnirs-title': 'fNIRS (Functional Near-Infrared Spectroscopy)',
        'tech-fnirs-desc': 'เทคโนโลยีการตรวจสอบสมองด้วยแสงที่วัดกิจกรรม cortical ผ่านการเปลี่ยนแปลงการไหลของเลือด',
        'tech-tacs-title': 'TACS (Transcranial Alternating Current Stimulation)',
        'tech-tacs-desc': 'การกระตุ้นสมองแบบไม่รุกรานเพื่อเพิ่มความยืดหยุ่นของ neural และสภาวะฝันที่ใส',
        'tech-vr-title': 'การผสานรวม VR',
        'tech-vr-desc': 'สภาพแวดล้อมเสมือนจริงแบบ immersive ที่ซิงโครไนซ์กับรูปแบบกิจกรรม neural',
        'whitepaper-roadmap-title': 'แผนการพัฒนา',
        'phase0-title': 'การตระหนักในฝันใส',
        'phase0-desc': 'การพัฒนาพื้นฐานสำหรับการรู้จำสภาวะฝันและความสามารถในการตรวจสอบ neural ขั้นพื้นฐาน',
        'phase1-title': 'ความช่วยเหลือ AI ในหัว',
        'phase1-desc': 'การผสานรวมตัวแทน AI ด้วยเสียงโดยตรงเข้าสู่ neural interface เพื่อการโต้ตอบที่ราบรื่น',
        'phase2-title': 'ระบบควบคุมด้วยคลื่นสมอง',
        'phase2-desc': 'กลไกการควบคุม neural ขั้นสูงสำหรับระบบคำสั่งความคิดสู่การกระทำโดยตรง',
        'phase3-title': 'เศรษฐกิจฝันใสแบบผู้เล่นหลายคน',
        'phase3-desc': 'พื้นที่เสมือนที่ใช้ร่วมกันด้วยการฝันร่วมกันและระบบเศรษฐกิจแบบกระจาย',
        'whitepaper-tokenomics-title': 'เศรษฐศาสตร์ Neural',
        'whitepaper-tokenomics-text': 'เศรษฐกิจที่ปลอดภัยด้วยคริปโตพร้อมการยืนยันตัวตน neuro สำหรับการทำธุรกรรมในฝันทั้งหมด',
        'neuro-auth-title': 'การยืนยันตัวตน Neuro',
        'neuro-auth-desc': 'รูปแบบคลื่นสมองที่เป็นเอกลักษณ์ทำหน้าที่เป็นการยืนยันตัวตนแบบไบโอเมตริกสำหรับการทำธุรกรรมที่ปลอดภัย',
        'dream-assets-title': 'สินทรัพย์ในฝัน',
        'dream-assets-desc': 'ไอเทมเสมือนและประสบการณ์ที่อิงตาม NFT ที่อยู่ในสภาพแวดล้อมฝันใส',
        'neural-network-title': 'รางวัล Neural Network',
        'neural-network-desc': 'ผู้ร่วมสมทบใน neural network ได้รับโทเค็นสำหรับการแบ่งปันข้อมูลสมองแบบไม่ระบุตัวตน',
        'whitepaper-community-title': 'ชุมชนและนวัตกรรมแบบเปิด',
        'whitepaper-community-text': 'LucidCore สนับสนุนการร่วมมือระดับโลกในการสร้างแอปฝัน เกมฝันใส และการโต้ตอบ VR ที่ขับเคลื่อนด้วย API แบบเปิด',
        'dream-apps-title': 'แอปพลิเคชันฝัน',
        'dream-apps-desc': 'ระบบนิเวศนักพัฒนาสำหรับการสร้างแอปพลิเคชันที่ทำงานในสภาวะฝันใส',
        'lucid-games-title': 'เกมฝันใส',
        'lucid-games-desc': 'ประสบการณ์เกมแบบ immersive ที่ควบคุมด้วยความคิดและเพิ่มประสิทธิภาพด้วยข้อมูลป้อนกลับ neural',
        'open-apis-title': 'กรอบ API แบบเปิด',
        'open-apis-desc': 'API ที่ครอบคลุมเพื่อให้สามารถพัฒนาโดยบุคคลที่สามและการผสานรวม neural interface',
        'download-title': 'ดาวน์โหลด Whitepaper ฉบับเต็ม',
        'download-desc': 'รับเอกสารทางเทคนิคและผลการวิจัยที่สมบูรณ์',
        'download-btn': 'ดาวน์โหลด PDF',
        
        // About Page
        'about-page-title': 'เกี่ยวกับ LucidCore',
        'about-page-subtitle': 'เป็นผู้บุกเบิกอนาคตของเทคโนโลยี neural interface',
        'about-mission-title': 'ภารกิจของเรา',
        'about-mission-desc': 'LucidCore มุ่งมั่นที่จะปฏิวัติการโต้ตอบระหว่างมนุษย์และคอมพิวเตอร์ผ่านเทคโนโลยี neural interface ขั้นสูง เราเชื่อในการสร้างการเชื่อมต่อที่ราบรื่นระหว่างจิตใจมนุษย์และระบบดิจิทัล เปิดความเป็นไปได้ใหม่สำหรับการสื่อสาร การควบคุม และความคิดสร้างสรรค์',
        'about-vision-title': 'วิสัยทัศน์ของเรา',
        'about-vision-desc': 'เราจินตนาการถึงโลกที่เทคโนโลยี neural interface ช่วยให้มนุษย์สามารถขยายความสามารถทางปัญญา ควบคุมสภาพแวดล้อมดิจิทัลด้วยความคิด และเข้าถึงข้อมูลและประสบการณ์ในรูปแบบที่ไม่เคยมีมาก่อน',
        'about-team-title': 'ทีมของเรา',
        'about-team-desc': 'ทีมนักวิทยาศาสตร์ วิศวกร และนักวิจัยที่หลากหลายซึ่งมีความหลงใหลในเทคโนโลยี neural interface และมุ่งมั่นที่จะผลักดันขอบเขตของสิ่งที่เป็นไปได้',
        'about-research-title': 'การวิจัยและการพัฒนา',
        'about-research-desc': 'การวิจัยของเราครอบคลุมประสาทวิทยา วิทยาการคอมพิวเตอร์ วัสดุศาสตร์ และจริยธรรม เพื่อให้แน่ใจว่าเทคโนโลยีของเราไม่เพียงแต่ก้าวหน้าเท่านั้น แต่ยังปลอดภัยและเป็นประโยชน์ต่อมนุษยชาติ',
        
        // Technology Page
        'tech-page-title': 'เทคโนโลยี',
        'tech-page-subtitle': 'นวัตกรรมล้ำสมัยที่ขับเคลื่อนอนาคต',
        'neural-interface-title': 'Neural Interface ขั้นสูง',
        'neural-interface-desc': 'ระบบ neural interface ของเราใช้เทคโนโลยีล้ำสมัยเพื่อสร้างการเชื่อมต่อที่ปลอดภัยและมีประสิทธิภาพระหว่างสมองมนุษย์และระบบดิจิทัล',
        'signal-processing-title': 'การประมวลผลสัญญาณ',
        'signal-processing-desc': 'อัลกอริทึมการประมวลผลสัญญาณขั้นสูงที่สามารถแปลความคิดและเจตนาของมนุษย์เป็นคำสั่งดิจิทัลด้วยความแม่นยำสูง',
        'ai-integration-title': 'การผสานรวม AI',
        'ai-integration-desc': 'ระบบ AI ที่ปรับตัวได้ซึ่งเรียนรู้จากรูปแบบ neural แต่ละบุคคลเพื่อเพิ่มประสิทธิภาพและประสบการณ์ผู้ใช้',
        'safety-protocols-title': 'โปรโตคอลความปลอดภัย',
        'safety-protocols-desc': 'มาตรฐานความปลอดภัยที่เข้มงวดและระบบตรวจสอบเพื่อให้แน่ใจว่าการใช้งานที่ปลอดภัยและเชื่อถือได้',
        
        // Roadmap Page
        'roadmap-page-title': 'แผนการพัฒนา',
        'roadmap-page-subtitle': 'เส้นทางสู่ความเป็นเลิศของ neural interface',
        
        // Tokenomics Page
        'tokenomics-page-title': 'โทเค็นโนมิกส์',
        'tokenomics-page-subtitle': 'ขับเคลื่อนเศรษฐกิจ neural แห่งอนาคต',
        'token-overview-title': 'โทเค็น LucidCore (LUC)',
        'token-overview-desc': 'โทเค็น LucidCore ขับเคลื่อนระบบนิเวศ neural interface ของเรา ช่วยให้มีการทำธุรกรรมที่ราบรื่น การมีส่วนร่วมในการกำกับดูแล และการเข้าถึงฟีเจอร์ขั้นสูงภายในแพลตฟอร์ม',
        'token-total-supply': 'จำนวนรวม',
        'token-supply-note': 'จำนวนคงที่ไม่มีเงินเฟ้อ',
        'token-launch-price': 'ราคาเปิดตัว',
        'token-price-note': 'ราคาเสนอขายเริ่มต้น',
        'token-blockchain': 'บล็อกเชน',
        'token-blockchain-note': 'เข้ากันได้กับ ERC-20',
        'token-distribution-title': 'การแจกจ่ายโทเค็น',
        'token-distribution-subtitle': 'การจัดสรรที่สมดุลเพื่อการเติบโตที่ยั่งยืน',
        'token-development-desc': 'การวิจัยและพัฒนา การพัฒนาผลิตภัณฑ์ และโครงสร้างพื้นฐาน',
        'token-community-desc': 'รางวัลชุมชน airdrop และสิ่งจูงใจ',
        'token-ecosystem-desc': 'ความร่วมมือ การผสานรวม และการเติบโต',
        'token-team-desc': 'การจัดสรรทีมหลักพร้อมตารางการปลดล็อก',
        'token-reserve-desc': 'กองทุนฉุกเฉินและโอกาสในอนาคต',
        'token-utility-title': 'การใช้งานโทเค็น',
        'token-utility-subtitle': 'กรณีการใช้งานหลายรูปแบบภายในระบบนิเวศ LucidCore',
        'utility-access-title': 'การเข้าถึงแพลตฟอร์ม',
        'utility-access-desc': 'ใช้โทเค็น LUC เพื่อเข้าถึงฟีเจอร์ neural interface พรีเมียมและฟังก์ชันขั้นสูง',
        'utility-governance-title': 'การกำกับดูแล',
        'utility-governance-desc': 'เข้าร่วมในการกำกับดูแลโปรโตคอลและลงคะแนนเสียงในการตัดสินใจที่สำคัญของระบบนิเวศ',
        'utility-rewards-title': 'รางวัลการ Stake',
        'utility-rewards-desc': 'Stake โทเค็นเพื่อรับรางวัลและสนับสนุนความปลอดภัยของเครือข่าย',
        'utility-payments-title': 'ค่าธรรมเนียมการทำธุรกรรม',
        'utility-payments-desc': 'จ่าย สำหรับบริการ neural interface และการประมวลผลข้อมูลด้วยค่าธรรมเนียมที่ลดลง',
        'vesting-title': 'ตารางการปลดล็อก',
        'vesting-subtitle': 'รับประกันการจัดตำแหน่งระยะยาวและความมั่นคง',
        'vesting-launch': 'เปิดตัว',
        'vesting-6months': '6 เดือน',
        'vesting-12months': '12 เดือน',
        'vesting-24months': '24 เดือน',
        'vesting-community-unlock': 'ชุมชน:',
        'vesting-ecosystem-unlock': 'ระบบนิเวศ:',
        'vesting-development-partial': 'การพัฒนา:',
        'vesting-team-partial': 'ทีม:',
        'vesting-development-full': 'การพัฒนา:',
        'vesting-team-full': 'ทีม:',
        'vesting-reserve-unlock': 'สำรอง:',
        
        // Community Page
        'community-page-title': 'เข้าร่วมชุมชนของเรา',
        'community-page-subtitle': 'เชื่อมต่อกับเพื่อนผู้บุกเบิก neural interface และนักพัฒนา',
        'platform-discord-title': 'Discord',
        'platform-discord-desc': 'การสนทนาแบบเรียลไทม์ การสนับสนุนทางเทคนิค และกิจกรรมชุมชน',
        'platform-twitter-title': 'Twitter',
        'platform-twitter-desc': 'อัปเดตล่าสุด ประกาศ และข้อมูลเชิงลึกของอุตสาหกรรม',
        'platform-telegram-title': 'Telegram',
        'platform-telegram-desc': 'การแจ้งเตือนทันทีและการแชทชุมชน',
        'platform-github-title': 'GitHub',
        'platform-github-desc': 'การมีส่วนร่วมแบบโอเพนซอร์สและทรัพยากรสำหรับนักพัฒนา',
        'platform-members': 'สมาชิก',
        'platform-active': 'ใช้งาน',
        'platform-followers': 'ผู้ติดตาม',
        'platform-updates': 'อัปเดต',
        'platform-contributors': 'ผู้ร่วมสมทบ',
        'platform-source': 'ซอร์ส',
        'platform-reach': 'การเข้าถึง',
        'platform-join': 'เข้าร่วม',
        'platform-follow': 'ติดตาม',
        'platform-contribute': 'มีส่วนร่วม',
        'events-title': 'กิจกรรมที่จะมาถึง',
        'events-subtitle': 'เข้าร่วมเวิร์กช็อป AMA และการบรรยายเทคโนโลยี',
        'event-month-jul': 'ก.ค.',
        'event-month-aug': 'ส.ค.',
        'event1-title': 'เวิร์กช็อป Neural Interface',
        'event1-desc': 'เวิร์กช็อปแบบลงมือปฏิบัติครอบคลุมพื้นฐานการพัฒนา neural interface',
        'event2-title': 'AMA กับทีมหลัก',
        'event2-desc': 'ถามสิ่งใดก็ได้เกี่ยวกับเทคโนโลยี LucidCore และแผนงาน',
        'event3-title': 'แฮกคาธอนนักพัฒนา',
        'event3-desc': 'แฮกคาธอน 48 ชั่วโมงสร้างแอปพลิเคชัน neural interface',
        'event-upcoming': 'กำลังจะมาถึง',
        'event-registration': 'เปิดรับสมัคร',
        'guidelines-title': 'แนวทางชุมชน',
        'guidelines-subtitle': 'สร้างสภาพแวดล้อมที่เคารพและครอบคลุม',
        'guideline1-title': 'ให้ความเคารพ',
        'guideline1-desc': 'ปฏิบัติต่อสมาชิกชุมชนทุกคนด้วยความเคารพและความเมตตา จะไม่ยอมรับการคุกคามหรือการเลือกปฏิบัติ',
        'guideline2-title': 'อยู่ในหัวข้อ',
        'guideline2-desc': 'รักษาการสนทนาให้เกี่ยวข้องกับ neural interface เทคโนโลยี และการพัฒนา LucidCore',
        'guideline3-title': 'ไม่มีสแปมหรือการโปรโมตตนเอง',
        'guideline3-desc': 'หลีกเลี่ยงการโปรโมตตนเองมากเกินไป สแปม หรือโฆษณาที่ไม่เกี่ยวข้องโดยไม่ได้รับอนุมัติล่วงหน้า',
        'guideline4-title': 'แบ่งปันความรู้',
        'guideline4-desc': 'ช่วยให้ผู้อื่นเรียนรู้และเติบโตโดยการแบ่งปันความรู้และประสบการณ์ของคุณอย่างสร้างสรรค์',
        'guideline5-title': 'รายงานปัญหา',
        'guideline5-desc': 'รายงานการละเมิดหรือข้อกังวลใด ๆ ให้ผู้ดูแลเพื่อรักษามาตรฐานชุมชน',
        'guideline6-title': 'เป็นกันเอง',
        'guideline6-desc': 'ต้อนรับผู้มาใหม่และสร้างสภาพแวดล้อมที่ครอบคลุมสำหรับทุกภูมิหลังและระดับทักษะ',
        'resources-title': 'ทรัพยากรสำหรับนักพัฒนา',
        'resources-subtitle': 'เครื่องมือและเอกสารสำหรับการสร้างด้วย LucidCore',
        'resource1-title': 'เอกสาร',
        'resource1-desc': 'คู่มือที่ครอบคลุมและการอ้างอิง API',
        'resource2-title': 'SDK',
        'resource2-desc': 'ชุดเครื่องมือพัฒนาซอฟต์แวร์สำหรับ neural interface',
        'resource3-title': 'ตัวอย่างโค้ด',
        'resource3-desc': 'โครงการตัวอย่างและคู่มือการใช้งาน',
        'resource4-title': 'บทเรียน',
        'resource4-desc': 'สื่อการเรียนรู้แบบทีละขั้นตอน',
        
        // Contact Page
        'contact-page-title': 'ติดต่อเรา',
        'contact-page-subtitle': 'พร้อมสำรวจอนาคตของ neural interface หรือยัง?',
        'contact-info-title': 'ข้อมูลการติดต่อ',
        'contact-research-title': 'การร่วมมือวิจัย',
        'contact-research-note': 'สำหรับความร่วมมือทางวิชาการและการวิจัย',
        'contact-business-title': 'การพัฒนาธุรกิจ',
        'contact-business-note': 'สำหรับโซลูชันองค์กรและความร่วมมือ',
        'contact-security-title': 'ความปลอดภัย',
        'contact-security-note': 'สำหรับคำถามด้านความปลอดภัยและรายงานข้อบกพร่อง',
        'contact-email-note': 'สำหรับคำถามทั่วไปและความร่วมมือ',
        'contact-web-note': 'เยี่ยมชมเว็บไซต์หลักของเราสำหรับข้อมูลเพิ่มเติม',
        'contact-form-title': 'ส่งข้อความหาเรา',
        'contact-name-label': 'ชื่อ *',
        'contact-email-label': 'อีเมล *',
        'contact-company-label': 'บริษัท/องค์กร',
        'contact-company': 'บริษัทหรือองค์กรของคุณ',
        'contact-subject-label': 'หัวข้อ *',
        'contact-subject-default': 'เลือกหัวข้อ',
        'contact-subject-general': 'คำถามทั่วไป',
        'contact-subject-research': 'การร่วมมือวิจัย',
        'contact-subject-business': 'ความร่วมมือทางธุรกิจ',
        'contact-subject-press': 'สื่อมวลชน',
        'contact-subject-support': 'การสนับสนุนทางเทคนิค',
        'contact-subject-other': 'อื่น ๆ',
        'contact-message-label': 'ข้อความ *',
        'contact-newsletter': 'สมัครรับจดหมายข่าวของเราสำหรับการอัปเดต',
        'contact-privacy': 'ฉันยอมรับนโยบายความเป็นส่วนตัวและข้อกำหนดการให้บริการ *',
        'contact-faq-title': 'คำถามที่พบบ่อย',
        'contact-faq-subtitle': 'คำตอบรวดเร็วสำหรับคำถามทั่วไป',
        'contact-faq-q1': 'ฉันจะเข้าร่วมการทดสอบเบต้าได้อย่างไร?',
        'contact-faq-a1': 'ใบสมัครทดสอบเบต้าจะเปิดในไตรมาส 2 2025 สมัครรับจดหมายข่าวหรือเข้าร่วมชุมชน Discord ของเราเพื่อรับการแจ้งเตือนเมื่อเริ่มรับสมัคร',
        'contact-faq-q2': 'คุณมีความร่วมมือวิจัยหรือไม่?',
        'contact-faq-a2': 'ใช่ เราร่วมมืออย่างแข็งขันกับมหาวิทยาลัยและสถาบันวิจัย ติดต่อเราที่ research@lucidcore.ai เพื่อหารือเกี่ยวกับความร่วมมือที่อาจเกิดขึ้น',
        'contact-faq-q3': 'เวลาตอบกลับคำถามของคุณคือเท่าไหร่?',
        'contact-faq-a3': 'โดยปกติเราตอบคำถามทั่วไปภายใน 24-48 ชั่วโมง คำถามการวิจัยและความร่วมมือทางธุรกิจอาจใช้เวลา 3-5 วันทำการสำหรับการตอบกลับที่ละเอียด',
        'contact-faq-q4': 'ฉันสามารถเยี่ยมชมสถานที่ของคุณได้หรือไม่?',
        'contact-faq-a4': 'เนื่องจากลักษณะที่ละเอียดอ่อนของการวิจัยของเรา การเยี่ยมชมสถานที่จึงจำกัดเฉพาะการนัดหมายที่กำหนดไว้สำหรับความร่วมมือทางธุรกิจและการวิจัยที่จริงจัง',
        
        // Footer
        'footer-desc': 'เป็นผู้บุกเบิกอนาคตของเทคโนโลยี neural interface',
        'footer-product': 'ผลิตภัณฑ์',
        'footer-technology': 'เทคโนโลยี',
        'footer-roadmap': 'แผนงาน',
        'footer-whitepaper': 'เอกสารเผยแพร่',
        'footer-community-title': 'ชุมชน',
        'footer-discord': 'Discord',
        'footer-twitter': 'Twitter',
        'footer-telegram': 'Telegram',
        'footer-support': 'การสนับสนุน',
        'footer-faq': 'คำถามที่พบบ่อย',
        'footer-contact': 'ติดต่อ',
        'footer-docs': 'เอกสาร',
        'footer-copyright': '© 2025 LucidCore สงวนสิทธิ์ทั้งหมด'
    }
};

// Language Management
class LanguageManager {
    constructor() {
        this.currentLang = 'en';
        this.init();
    }

    init() {
        this.bindEvents();
        this.updateLanguage();
    }

    bindEvents() {
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => this.toggleLanguage());
        }
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'en' ? 'th' : 'en';
        this.updateLanguage();
        this.updateLangToggle();
    }

    updateLanguage() {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[this.currentLang] && translations[this.currentLang][key]) {
                element.textContent = translations[this.currentLang][key];
            }
        });

        // Update placeholders
        const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (translations[this.currentLang] && translations[this.currentLang][key]) {
                element.placeholder = translations[this.currentLang][key];
            }
        });

        // Update document language
        document.documentElement.lang = this.currentLang;
        
        // Update page title
        if (this.currentLang === 'th') {
            document.title = 'ลูซิดคอร์ - เทคโนโลยี Neural Interface';
        } else {
            document.title = 'LucidCore - Neural Interface Technology';
        }
    }

    updateLangToggle() {
        const langCurrent = document.querySelector('.lang-current');
        const langAlt = document.querySelector('.lang-alt');
        
        if (langCurrent && langAlt) {
            if (this.currentLang === 'en') {
                langCurrent.textContent = 'EN';
                langAlt.textContent = 'TH';
            } else {
                langCurrent.textContent = 'TH';
                langAlt.textContent = 'EN';
            }
        }
    }
}

// Smooth Scrolling
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        const navLinks = document.querySelectorAll('nav a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Mobile Menu
class MobileMenu {
    constructor() {
        this.menuToggle = document.getElementById('mobileMenuToggle');
        this.navMenu = document.querySelector('.nav-menu');
        this.isOpen = false;
        this.init();
    }

    init() {
        if (this.menuToggle) {
            this.menuToggle.addEventListener('click', () => this.toggle());
        }

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => this.close());
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.isOpen && this.menuToggle && this.navMenu && 
                !this.menuToggle.contains(e.target) && !this.navMenu.contains(e.target)) {
                this.close();
            }
        });
    }

    toggle() {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }

    open() {
        if (this.navMenu && this.menuToggle) {
            this.navMenu.classList.add('active');
            this.menuToggle.classList.add('active');
            this.isOpen = true;
            document.body.style.overflow = 'hidden';
        }
    }

    close() {
        if (this.navMenu && this.menuToggle) {
            this.navMenu.classList.remove('active');
            this.menuToggle.classList.remove('active');
            this.isOpen = false;
            document.body.style.overflow = '';
        }
    }
}

// Scroll Effects
class ScrollEffects {
    constructor() {
        this.header = document.querySelector('.header');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.handleScroll());
        this.observeElements();
    }

    handleScroll() {
        const scrollY = window.scrollY;
        
        // Header background opacity
        if (this.header) {
            if (scrollY > 50) {
                this.header.classList.add('scrolled');
            } else {
                this.header.classList.remove('scrolled');
            }
        }
    }

    observeElements() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -10% 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe cards and sections for animation
        const animatedElements = document.querySelectorAll('.about-card, .tech-feature, .timeline-item, .token-stat, .community-link, .faq-item');
        animatedElements.forEach(el => observer.observe(el));
    }
}

// Particle Animation
class ParticleAnimation {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.particles = [];
        this.init();
    }

    init() {
        this.createCanvas();
        this.createParticles();
        this.animate();
        window.addEventListener('resize', () => this.handleResize());
    }

    createCanvas() {
        const particleField = document.querySelector('.particle-field');
        if (!particleField) return;

        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        
        particleField.appendChild(this.canvas);
        this.handleResize();
    }

    createParticles() {
        if (!this.canvas) return;
        
        const particleCount = 50;
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2,
                color: ['#00d4ff', '#ff006e', '#7c3aed'][Math.floor(Math.random() * 3)]
            });
        }
    }

    animate() {
        if (!this.ctx || !this.canvas) return;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(particle => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Wrap around edges
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;

            // Draw particle
            this.ctx.save();
            this.ctx.globalAlpha = particle.opacity;
            this.ctx.fillStyle = particle.color;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.restore();
        });

        requestAnimationFrame(() => this.animate());
    }

    handleResize() {
        if (!this.canvas) return;

        const rect = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
    }
}

// Contact Form Handler
class ContactForm {
    constructor() {
        this.form = document.querySelector('.contact-form');
        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);
        
        // Show success message (in a real app, this would send to a server)
        this.showMessage('Message sent successfully!', 'success');
        this.form.reset();
    }

    showMessage(message, type) {
        const messageEl = document.createElement('div');
        messageEl.className = `form-message form-message--${type}`;
        messageEl.textContent = message;
        
        this.form.appendChild(messageEl);
        
        setTimeout(() => {
            messageEl.remove();
        }, 3000);
    }
}

// FAQ Accordion
class FAQAccordion {
    constructor() {
        this.init();
    }

    init() {
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const summary = item.querySelector('summary');
            if (summary) {
                summary.addEventListener('click', (e) => {
                    // Close other open items
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.hasAttribute('open')) {
                            otherItem.removeAttribute('open');
                        }
                    });
                });
            }
        });
    }
}

// Performance Monitor
class PerformanceMonitor {
    constructor() {
        this.init();
    }

    init() {
        // Monitor page load performance
        window.addEventListener('load', () => {
            if ('performance' in window) {
                const navigation = performance.getEntriesByType('navigation')[0];
                console.log(`Page loaded in ${navigation.loadEventEnd - navigation.fetchStart}ms`);
            }
        });

        // Monitor memory usage (if available)
        if ('memory' in performance) {
            setInterval(() => {
                const memory = performance.memory;
                if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.9) {
                    console.warn('High memory usage detected');
                }
            }, 30000);
        }
    }
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    new LanguageManager();
    new SmoothScroll();
    new MobileMenu();
    new ScrollEffects();
    new ParticleAnimation();
    new ContactForm();
    new FAQAccordion();
    new PerformanceMonitor();

    // Add loaded class to body for CSS animations
    document.body.classList.add('loaded');

    // Service Worker registration (for offline support)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('SW registered: ', registration);
                })
                .catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
        });
    }
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        LanguageManager,
        SmoothScroll,
        MobileMenu,
        ScrollEffects,
        ParticleAnimation,
        ContactForm,
        FAQAccordion,
        PerformanceMonitor
    };
}
