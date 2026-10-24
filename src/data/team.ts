export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  image: string;
  summary: string;
  fullBio: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'kehinde-adams',
    name: 'Kehinde Adams',
    role: 'Managing Director & Director of Trading',
    department: 'Trading & Operations',
    image: '/assets/team-kehinde-adams.jpg',
    summary: 'Expert commodities trader with over a decade of physical energy trading across the West African downstream supply chain.',
    fullBio: `Kehinde is an expert oil trader with over a decade of experience working across the entire supply value chain in the downstream sector. His experience covers procurement of physical cargoes from refineries and international trading houses, deal structuring, trade finance, derivatives & futures trading, sales and marketing, vessel charter & operations, and more.<br/><br/>Whilst he has operated primarily in the downstream space, his vast experience provides him with a robust understanding of the broader West African energy landscape covering downstream, midstream, and upstream assets. Kehinde is also a Magna cum laude graduate from the University of Detroit Mercy, with multiple academic honors and professional distinctions.`
  },
  {
    id: 'shola-adeniyi',
    name: 'Shola Adeniyi',
    role: 'Managing Partner & Co-Founder',
    department: 'Executive Leadership',
    image: '/assets/team-shola-adeniyi.jpg',
    summary: 'Dynamic capital markets leader, founder of Krosk Partners Limited, Chairman of Zrosk Investment Management, and Co-Founder of Vrosk Energies.',
    fullBio: `Shola is the Managing Director of Krosk Partners Ltd, an inter-dealer brokerage firm specialized in fixed income trading, and the Chairman of Zrosk Investment Management—an alternative investment firm managing over $150M. He serves as Managing Partner and Co-Founder of Vrosk Energies, established to pioneer direct Pan-African energy infrastructure.<br/><br/>Over the years, Shola has built a flourishing portfolio of institutions servicing the financial and energy markets while backing top-tier African startups through series funding. He began his financial career at Barclays Capital, followed by BGC Partners London as an inter-dealer broker for Sub-Saharan Africa before establishing KPL in Nigeria. Shola holds a First-Class Honours Degree in Mechanical Engineering from University College London (UCL).`
  },
  {
    id: 'samson-esemuede',
    name: 'Samson Esemuede, CFA',
    role: 'Director – Investment & Strategy',
    department: 'Strategic Investments',
    image: '/assets/team-samson-esemuede.jpg',
    summary: 'Chief Investment Officer at Zrosk Investment Management, former Vice President at Citi Bank London and Deutsche Bank London.',
    fullBio: `Samson Esemuede is Managing Director and Chief Investment Officer at Zrosk Investment Management, where he oversees a premier group of asset managers deploying capital across West African markets. He possesses deep expertise spanning Investment Management, Equities Research, Capital Markets, and Investment Banking.<br/><br/>Prior to this, Samson served as Vice President at Citi Bank London and Deutsche Bank London, specializing in CEMEA equity markets. With over 16 years of institutional market experience, he serves on multiple startup boards and advisory councils. Samson graduated with a First-Class Honours degree in Biochemistry from University College London, receiving the Dean’s Award and the FEBS Award for outstanding undergraduate research, and is a CFA Charterholder.`
  },
  {
    id: 'dami-adeniyi',
    name: 'Damilola Adeniyi (FCCA, ICAN)',
    role: 'Director – Finance & Business Operations',
    department: 'Finance & Governance',
    image: '/assets/team-dami-adeniyi.jpg',
    summary: 'Senior finance executive with over 13 years of operational finance, budget governance, and fiscal risk leadership.',
    fullBio: `Damilola is a seasoned financial and corporate governance executive with more than 13 years of leadership experience overseeing budgeting, fiscal controls, compliance frameworks, and business systems across international jurisdictions.<br/><br/>She partners directly with senior leadership on capital allocation and strategic investment decisions. Damilola started her career in London as a chartered accountant in public practice, later serving as Management Accountant at Kennedys Law and Mane Contract Services. In Nigeria, she manages the financial operations and fiscal health of Krosk Partners and its corporate affiliates. She holds a BSc in Business & Management (Accounting) from Brunel University London, is a Fellow of the Association of Chartered Certified Accountants (FCCA), and a member of ICAN.`
  },
  {
    id: 'adeleke-alex',
    name: 'Adeleke Alex-Adedipe',
    role: 'General Counsel & Legal Advisor',
    department: 'Legal & Regulatory',
    image: '/assets/team-adeleke-alex.jpg',
    summary: 'Managing Partner at Duale, Ovia & Alex-Adedipe, specialist in energy transactions, capital markets, and cross-border commercial structuring.',
    fullBio: `Adeleke is the Managing Partner at Duale, Ovia & Alex-Adedipe, leading the Banking & Finance, Capital Markets, and Energy & Technology practice groups. He brings unparalleled depth of expertise in cross-border energy transactions, corporate commercial advisories, real estate, and project finance.<br/><br/>Adeleke has advised on landmark award-winning transactions locally and internationally. He is an active member of the Nigerian Bar Association (NBA) and the International Bar Association (IBA), an Associate Member of the African Philanthropic Forum, a member of the NBA Section on Business Law Council, and an appointee to the Lagos State Science Research and Innovation Council.`
  },
  {
    id: 'anthony-ogbedor',
    name: 'Anthony Ogbebor',
    role: 'Compliance & Human Capital Lead',
    department: 'Compliance & People',
    image: '/assets/team-anthony-ogbedor.jpg',
    summary: 'Chartered HR and regulatory compliance specialist with extensive track record in oil & gas personnel governance and statutory compliance.',
    fullBio: `Ehiosun Anthony Ogbebor is a highly skilled HR and statutory compliance specialist with over a decade of expertise in regulatory alignment, workforce planning, and organizational governance.<br/><br/>He is an Associate Member of the Chartered Institute of Personnel Management (CIPM), a Full Member of the Chartered Institute of Human Capital Development (CIHCD), and an Associate Member of the Nigerian Institute of Training and Development (NITaD). He directs corporate adherence to Nigerian local content laws, NUPRC/NMDPRA compliance, occupational safety standards, and talent development across Vrosk's operations.`
  }
];
