export interface Article {
  id: number;
  title: string;
  slug: string;
  category: string;
  description: string;
  content: string[];
  buttonText: string;
  affiliateUrl: string;
}

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: 'Best Credit Cards for Beginners in India',
    slug: 'best-credit-cards-for-beginners-in-india',
    category: 'Finance',
    description: 'Learn how to choose a beginner-friendly credit card based on eligibility, CIBIL score and usage.',
    content: [
      'Credit cards can be useful for online shopping, fuel, travel, cashback and emergency payments.',
      'Before applying for a credit card, check annual fee, joining fee, reward points, cashback, interest charges and eligibility.',
      'Approval depends on bank eligibility, income, CIBIL score, KYC and internal policy. This website does not guarantee approval.'
    ],
    buttonText: 'Check Eligibility',
    affiliateUrl: '#'
  },
  {
    id: 2,
    title: 'Best Zero Balance Savings Account Online',
    slug: 'best-zero-balance-savings-account-online',
    category: 'Finance',
    description: 'Simple guide to compare zero balance savings accounts and online account opening options.',
    content: [
      'Zero balance savings accounts are useful for students, freshers, salaried users and beginners.',
      'Compare debit card charges, UPI support, mobile banking, branch availability and minimum balance rules.',
      'Account opening depends on KYC verification and bank policy.'
    ],
    buttonText: 'Open Account',
    affiliateUrl: '#'
  },
  {
    id: 3,
    title: 'Best Bike for Daily 40 km Travel',
    slug: 'best-bike-for-daily-40-km-travel',
    category: 'Vehicles',
    description: 'Compare mileage, comfort, maintenance cost and daily travel suitability before choosing a bike.',
    content: [
      'For daily 40 km travel, comfort, mileage, braking, service cost and reliability are very important.',
      'A good commuter bike should give decent mileage, low maintenance, comfortable seating and good service network.',
      'Before buying, compare petrol cost, yearly maintenance, insurance, EMI and resale value.'
    ],
    buttonText: 'View Bike Offers',
    affiliateUrl: '#'
  },
  {
    id: 4,
    title: 'EV Scooter vs Petrol Bike Cost Comparison',
    slug: 'ev-scooter-vs-petrol-bike-cost-comparison',
    category: 'Vehicles',
    description: 'Understand running cost, maintenance and practical use difference between EV scooter and petrol bike.',
    content: [
      'EV scooters have lower running cost, but charging time, range, service and battery warranty should be checked.',
      'Petrol bikes have faster refuelling and better long-distance convenience, but fuel cost is higher.',
      'Choose based on daily distance, charging availability, service centre and total ownership cost.'
    ],
    buttonText: 'Compare Options',
    affiliateUrl: '#'
  },
  {
    id: 5,
    title: 'Best Laptop for AutoCAD and SolidWorks',
    slug: 'best-laptop-for-autocad-and-solidworks',
    category: 'Tech Products',
    description: 'Simple guide to choose a laptop for AutoCAD, CATIA, SolidWorks and design work.',
    content: [
      'For AutoCAD, CATIA and SolidWorks, choose a laptop with strong processor, enough RAM, SSD storage and good display.',
      'Beginner users can start with Intel i5 or Ryzen 5, 16GB RAM and SSD.',
      'For heavy 3D assembly work, dedicated graphics and better cooling are useful.'
    ],
    buttonText: 'Check Price',
    affiliateUrl: '#'
  },
  {
    id: 6,
    title: 'Best Laptop for .NET Full Stack Development',
    slug: 'best-laptop-for-dotnet-full-stack-development',
    category: 'Tech Products',
    description: 'Laptop guide for Visual Studio, SQL Server, Angular and .NET development.',
    content: [
      'For .NET full stack development, laptop should run Visual Studio, SQL Server, Angular and browser smoothly.',
      'Recommended minimum is 16GB RAM, SSD storage and i5/Ryzen 5 processor.',
      'If you also use CAD software, choose a laptop with better graphics and cooling.'
    ],
    buttonText: 'Check Price',
    affiliateUrl: '#'
  },
  {
    id: 7,
    title: 'Best Monitor for CAD Designers',
    slug: 'best-monitor-for-cad-designers',
    category: 'Tech Products',
    description: 'A practical guide for choosing a monitor for CAD, design and programming work.',
    content: [
      'CAD designers need a monitor with good size, clear text, proper brightness and eye comfort.',
      'A 24 inch Full HD monitor is a good starting option for students and office users.',
      'Check IPS panel, anti-glare display, refresh rate and eye-care features before buying.'
    ],
    buttonText: 'Check Price',
    affiliateUrl: '#'
  },
  {
    id: 8,
    title: 'Best .NET Course for Freshers',
    slug: 'best-dotnet-course-for-freshers',
    category: 'Courses',
    description: 'Understand what a good .NET full stack course should cover for fresher developer jobs.',
    content: [
      'A good .NET course should cover C#, OOP, ASP.NET Core MVC, Web API, Entity Framework Core and SQL Server.',
      'Frontend basics like HTML, CSS, JavaScript, Bootstrap and Angular are also useful.',
      'Choose a course that gives projects, interview preparation and placement support.'
    ],
    buttonText: 'Get Course Details',
    affiliateUrl: '#'
  },
  {
    id: 9,
    title: 'Best CAD Course after Mechanical Engineering',
    slug: 'best-cad-course-after-mechanical-engineering',
    category: 'Courses',
    description: 'Guide for mechanical students to choose AutoCAD, CATIA, SolidWorks or design course.',
    content: [
      'Mechanical students can learn AutoCAD, CATIA, SolidWorks and basic GD&T for design jobs.',
      'For faster job entry, AutoCAD 2D drafting and SolidWorks 3D modelling are useful.',
      'For automotive companies, CATIA V5 knowledge can be helpful.'
    ],
    buttonText: 'Get Course Details',
    affiliateUrl: '#'
  },
  {
    id: 10,
    title: 'Best Bike Insurance Renewal Online',
    slug: 'best-bike-insurance-renewal-online',
    category: 'Vehicles',
    description: 'Simple awareness guide before renewing bike insurance online.',
    content: [
      'Before renewing bike insurance, compare premium, IDV, claim settlement, add-ons and network garages.',
      'Third-party insurance is mandatory, but own-damage cover gives additional protection.',
      'Always verify policy details on the official insurer or partner website.'
    ],
    buttonText: 'Check Insurance Price',
    affiliateUrl: '#'
  }
];
