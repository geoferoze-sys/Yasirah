export interface ResearchProject {
  id: string;
  title: string;
  category: 'QbD & AQbD' | 'Green Chemistry' | 'Nitrosamines & Impurities' | 'Peptides & Complex Generics' | 'Method Development';
  analytes: string[];
  techniques: string[];
  aqbdFramework?: string;
  greenMetrics?: string;
  status: 'Manuscript Under Review' | 'Published';
  summary: string;
  highlights: string[];
}

export interface Publication {
  id: string;
  type: 'Book Chapter' | 'Review Article';
  title: string;
  authors: string;
  journalOrBook: string;
  publisher?: string;
  year: number;
  volumeIssue?: string;
  pages?: string;
  doi?: string;
  doiUrl?: string;
  abstract: string;
  tags: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Internship' | 'Traineeship';
  instruments: string[];
  responsibilities: string[];
  learnings: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  field?: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  gradeLabel: string;
  status?: string;
  highlights?: string[];
}

export interface AwardCertificate {
  id: string;
  category: 'Academic Presentation' | 'Instrumentation & Analytical Training' | 'Industry 4.0 & Quality Systems' | 'Emerging Tech & Interdisciplinary' | 'Professional Development';
  title: string;
  issuer: string;
  yearOrNote: string;
  awardType?: 'First Prize' | 'Best Presentation' | 'Hands-on Certification' | 'Fellowship/Delegate';
  description?: string;
}

export interface PortfolioData {
  personal: {
    fullName: string;
    preferredName: string;
    credentials: string;
    headline: string;
    location: string;
    email: string;
    dob: string;
    languages: string[];
    registration: string;
    profileImage: string;
    cvPdf: string;
    summary: string;
    metrics: { label: string; value: string; note: string }[];
    researchInterests: string[];
  };
  skills: {
    chromatography: { name: string; level: string; description: string }[];
    analyticalTechniques: { name: string; level: string; description: string }[];
    methodologyAndQuality: { name: string; level: string; description: string }[];
    dataAndComputation: { name: string; level: string; description: string }[];
  };
  researchProjects: ResearchProject[];
  publications: Publication[];
  experience: Experience[];
  education: EducationItem[];
  certificates: AwardCertificate[];
}

export const portfolioData: PortfolioData = {
  personal: {
    fullName: 'Yasirah Sabreen F',
    preferredName: 'Yasirah Sabreen',
    credentials: 'M. Pharm (Pharmaceutical Analysis) · Registered Pharmacist (India)',
    headline: 'Pharmaceutical Scientist & Analytical Method Development Specialist',
    location: 'India | Qatar',
    email: 'yasirahsabreenkhan26@gmail.com',
    dob: '26 June 2002',
    languages: ['English', 'Tamil'],
    registration: 'Registered Pharmacist (Pharmacy Council of India)',
    profileImage: '/assets/aistudio/IMG-20261024-WA0029_28d35da0.jpg',
    cvPdf: '/assets/aistudio/Yasirah_Sabreen_CV2_a1435965.pdf',
    summary:
      'Detail-oriented M. Pharm (Pharmaceutical Analysis) researcher with hands-on experience in pharmaceutical quality control, analytical method development, and method validation. Proficient in RP-HPLC, UPLC, HPTLC, UV-Visible spectroscopy, GMP documentation, and ICH Q2(R1/R2) guidelines. Passionate about sustainable green analytical chemistry, Analytical Quality by Design (AQbD), and data-driven laboratory quality assurance using Python, MySQL, and Power BI.',
    metrics: [
      { label: 'M.Pharm CGPA', value: '8.79', note: 'Ranked in the top academic cohort at Crescent University' },
      { label: 'Research Manuscripts', value: '5', note: 'Novel AQbD and green analytical methods currently under peer review' },
      { label: 'Peer-Reviewed Works', value: '3', note: 'Includes a Springer book chapter and peer-reviewed review articles' },
      { label: 'Industrial Internships', value: '4', note: 'Hands-on roles across commercial QC/QA, method validation, and GMP manufacturing' },
    ],
    researchInterests: [
      'Pharmaceutical Analysis',
      'Stability-Indicating Methods',
      'RP-HPLC Method Development',
      'Ultra-Performance Liquid Chromatography (UPLC)',
      'Analytical Quality by Design (AQbD / QbD)',
      'ICH Guidelines and Method Validation',
      'Green Analytical Chemistry and Eco-Scale Assessment',
      'Forced Degradation Kinetics',
      'Related-Substance and Trace Impurity Profiling',
      'Pharmaceutical Quality Assurance and Quality Control (QA/QC)',
    ],
  },

  skills: {
    chromatography: [
      { name: 'RP-HPLC', level: 'Advanced', description: 'Method development, gradient optimization, resolution profiling, and system suitability testing' },
      { name: 'UPLC', level: 'Advanced', description: 'Sub-2-micron column separations, rapid run-time validation, and high-throughput quantification' },
      { name: 'HPTLC', level: 'Intermediate', description: 'Densitometric evaluation, chromatographic fingerprinting, and TLC plate development' },
      { name: 'Gas Chromatography (GC)', level: 'Intermediate', description: 'Practical gas chromatography workflow, sample preparation, and oven temperature programming' },
      { name: 'Preparative & Analytical HPLC', level: 'Advanced', description: 'Proficiency with Waters, Agilent, and Shimadzu systems using Empower and LabSolutions software' },
    ],
    analyticalTechniques: [
      { name: 'UV-Visible Spectroscopy', level: 'Advanced', description: 'Photometric quantitation, multi-component analysis, and absorption spectra characterization' },
      { name: 'FTIR Spectroscopy', level: 'Proficient', description: 'Functional group identification, attenuated total reflectance (ATR) sampling, and spectral matching' },
      { name: 'Stability Studies', level: 'Advanced', description: 'Accelerated and real-time stability protocols conforming to ICH Q1A guidelines' },
      { name: 'Forced Degradation Studies', level: 'Advanced', description: 'Hydrolytic (acid/base), oxidative, photolytic, and thermal stress testing to prove stability indication' },
      { name: 'Related-Substance Analysis', level: 'Advanced', description: 'Trace impurity determination, limit of detection (LOD), and limit of quantitation (LOQ)' },
      { name: 'X-ray Photoelectron Spectroscopy (XPS)', level: 'Foundational', description: 'Surface chemical analysis and instrumentation principles studied at Sathyabama Institute' },
    ],
    methodologyAndQuality: [
      { name: 'Analytical Quality by Design (AQbD)', level: 'Advanced', description: 'Risk assessment, Critical Analytical Attributes (CAAs), and Method Operable Design Regions (MODR)' },
      { name: 'Green Analytical Chemistry', level: 'Advanced', description: 'AGREE metric scoring, Analytical Eco-Scale evaluation, and green solvent substitution' },
      { name: 'ICH Regulatory Guidelines', level: 'Advanced', description: 'Comprehensive compliance with ICH Q2(R1/R2), Q1A, and Q3A/B standards' },
      { name: 'Pharmaceutical QC & QA', level: 'Proficient', description: 'In-process controls, finished product testing, and standard operating procedure (SOP) formulation' },
      { name: 'GMP & GLP Documentation', level: 'Proficient', description: 'Batch manufacturing records, analytical test reports, certificates of analysis, and deviation logging' },
    ],
    dataAndComputation: [
      { name: 'Python for Scientific Analysis', level: 'Working Knowledge', description: 'Data manipulation with Pandas and NumPy, alongside scientific automation scripts' },
      { name: 'Power BI', level: 'Working Knowledge', description: 'Interactive data visualization dashboards and laboratory KPI reporting' },
      { name: 'MySQL Database Management', level: 'Working Knowledge', description: 'Relational database querying and structured laboratory information management' },
      { name: 'Advanced Microsoft Excel', level: 'Advanced', description: 'Multivariate statistical ANOVA, linear regression calibration curves, and precision calculations' },
    ],
  },

  researchProjects: [
    {
      id: 'proj-paracetamol-polmacoxib',
      title: 'QbD-Based Green Stability-Indicating RP-HPLC Method for the Simultaneous Determination of Paracetamol and Polmacoxib in Bulk Drug and Pharmaceutical Formulations',
      category: 'QbD & AQbD',
      analytes: ['Paracetamol', 'Polmacoxib'],
      techniques: ['RP-HPLC', 'AQbD', 'Green Analytical Chemistry', 'Forced Degradation'],
      aqbdFramework: 'Central Composite Design (CCD) / Response Surface Methodology',
      greenMetrics: 'Evaluated using AGREE and Analytical Eco-Scale scoring for non-toxic solvent mobile phases',
      status: 'Manuscript Under Review',
      summary:
        'Engineered an Analytical Quality by Design (AQbD) driven, environmentally conscious reversed-phase HPLC method for the concurrent determination of paracetamol and polmacoxib. Conducted systematic forced degradation under hydrolytic, oxidative, thermal, and photolytic stress to demonstrate unambiguous stability-indicating resolution.',
      highlights: [
        'Optimized critical process parameters (flow rate, organic modifier ratio, and column temperature) using statistical experimental design.',
        'Validated in accordance with ICH Q2(R1) parameters: specificity, linearity, precision, accuracy, LOD/LOQ, and robustness.',
        'Significantly reduces hazardous organic solvent waste relative to conventional chromatographic methods.',
      ],
    },
    {
      id: 'proj-lobeglitazone-glimepiride',
      title: 'AQbD-Based Stability-Indicating UPLC Method Development and Validation for the Simultaneous Determination of Lobeglitazone and Glimepiride with Green Analytical Assessment',
      category: 'Green Chemistry',
      analytes: ['Lobeglitazone', 'Glimepiride'],
      techniques: ['UPLC', 'AQbD', 'Green Analytical Chemistry', 'Method Validation'],
      aqbdFramework: 'Fishbone (Ishikawa) Risk Analysis & Box-Behnken Factorial Design',
      greenMetrics: 'Sub-2-minute run time substantially reduces solvent consumption and environmental impact',
      status: 'Manuscript Under Review',
      summary:
        'Developed a rapid ultra-performance liquid chromatographic method for the simultaneous quantification of a novel antidiabetic combination (lobeglitazone and glimepiride). Utilized an AQbD framework to define a robust Method Operable Design Region (MODR).',
      highlights: [
        'Substantially shortened chromatographic run times per injection, increasing sample throughput for industrial quality control.',
        'Applied quantitative green metric assessments to verify environmental safety and solvent economy.',
        'Resolved both active pharmaceutical ingredients with high theoretical plate counts and symmetric peak shape.',
      ],
    },
    {
      id: 'proj-semaglutide',
      title: 'Development of a Novel Stability-Indicating RP-HPLC Method for the Determination of Semaglutide and Its Related Substances',
      category: 'Peptides & Complex Generics',
      analytes: ['Semaglutide', 'Related Peptide Degradants'],
      techniques: ['RP-HPLC', 'Related-Substance Analysis', 'Peptide Chromatography'],
      aqbdFramework: 'Gradient elution optimization for complex polypeptide separation',
      greenMetrics: 'Controlled buffer systems designed to minimize chemical waste footprint',
      status: 'Manuscript Under Review',
      summary:
        'Formulated a specialized stability-indicating liquid chromatography protocol to quantify semaglutide (a GLP-1 receptor agonist) and resolve its related degradation substances and peptide impurities generated under accelerated stress conditions.',
      highlights: [
        'Mitigated polypeptide peak tailing and secondary silica interactions using optimized stationary phase chemistries.',
        'Achieved baseline chromatographic separation between intact semaglutide and all stress-induced degradation peaks.',
        'Directly applicable to the commercial quality control of therapeutic peptide formulations.',
      ],
    },
    {
      id: 'proj-melatonin-theanine',
      title: 'Analytical Quality by Design-Based RP-HPLC Method Development and Validation for the Simultaneous Estimation of Melatonin and L-Theanine in Bulk and Pharmaceutical Dosage Forms',
      category: 'QbD & AQbD',
      analytes: ['Melatonin', 'L-Theanine'],
      techniques: ['RP-HPLC', 'AQbD', 'Dosage Form Analysis'],
      aqbdFramework: 'Plackett-Burman screening design followed by response surface optimization',
      greenMetrics: 'Aqueous-rich mobile phase that curtails volatile organic solvent emissions',
      status: 'Manuscript Under Review',
      summary:
        'Established an AQbD-guided chromatographic procedure for the dual quantification of melatonin and L-theanine in nutraceutical and pharmaceutical solid oral dosage forms, ensuring reproducible recovery across diverse excipient matrices.',
      highlights: [
        'Demonstrated excellent linearity with correlation coefficients exceeding R² > 0.999 across all tested ranges.',
        'Demonstrated exceptional ruggedness against intentional fluctuations in buffer pH and column temperature.',
        'Tailored for routine commercial batch release in contemporary quality control departments.',
      ],
    },
    {
      id: 'proj-nitrosamines-rifapentine',
      title: 'Development and Validation of a Simple and Sensitive RP-HPLC Method for the Simultaneous Determination of N-Nitrosodimethylamine, N-Nitrosodiethylamine, and N-Nitrosodiisopropylamine in Rifapentine',
      category: 'Nitrosamines & Impurities',
      analytes: ['NDMA', 'NDEA', 'NDIPA', 'Rifapentine Matrix'],
      techniques: ['RP-HPLC', 'Trace Impurity Analysis', 'Nitrosamine Safety Screening'],
      aqbdFramework: 'Trace sensitivity enhancement and sample matrix cleanup optimization',
      greenMetrics: 'Direct single-run detection that eliminates solvent-intensive multi-step extractions',
      status: 'Manuscript Under Review',
      summary:
        'Addressed a critical global regulatory mandate by establishing a sensitive RP-HPLC assay for trace mutagenic nitrosamine impurities (NDMA, NDEA, and NDIPA) in rifapentine, ensuring compliance with international safety thresholds.',
      highlights: [
        'Achieved ultra-trace LOD and LOQ thresholds that align with international regulatory limits on acceptable intake.',
        'Ensured complete chromatographic resolution of trace nitrosamines without co-elution with rifapentine degradation peaks.',
        'Provides an accessible, reliable method for ongoing patient safety and impurity monitoring.',
      ],
    },
  ],

  publications: [
    {
      id: 'pub-springer-colorants',
      type: 'Book Chapter',
      title: 'Analytical Identification of Colorants Using HPLC and Mass Spectrometry',
      authors: 'Yasirah Sabreen F (Co-author)',
      journalOrBook: 'Methods and Protocols in Food Science: Food Colorants',
      publisher: 'Springer, New York, NY',
      year: 2026,
      pages: 'pp. 183–193',
      doi: '10.1007/978-1-0716-5504-7_9',
      doiUrl: 'https://doi.org/10.1007/978-1-0716-5504-7_9',
      abstract:
        'Co-authored a comprehensive protocol chapter detailing chromatographic (HPLC) and mass spectrometric (MS) workflows for the separation, characterization, and quantitative determination of synthetic and natural food colorants. Describes end-to-end sample extraction, column chemistry, gradient optimization, and spectral fragmentation analysis.',
      tags: ['HPLC', 'Mass Spectrometry', 'Springer', 'Analytical Protocols', 'Food Science & Colorants'],
    },
    {
      id: 'pub-ai-cancer',
      type: 'Review Article',
      title: 'Artificial Intelligence in the Diagnosis and Treatment of Cancer',
      authors: 'Yasirah Sabreen F',
      journalOrBook: 'Future Journal of Pharmaceuticals and Health Sciences',
      year: 2026,
      volumeIssue: '6(2)',
      pages: '61–65',
      doi: '10.26452/fjphs.v6i2.924',
      doiUrl: 'https://doi.org/10.26452/fjphs.v6i2.924',
      abstract:
        'A comprehensive review evaluating artificial intelligence frameworks and machine learning algorithms applied to oncological biomarker discovery, individualized dosing regimens, therapeutic drug monitoring, and drug delivery optimization.',
      tags: ['Artificial Intelligence', 'Oncology', 'Health Sciences', 'Therapeutic Monitoring'],
    },
    {
      id: 'pub-green-cardiovascular',
      type: 'Review Article',
      title: 'A Comprehensive Review of Conventional and Green Analytical Approaches for the Simultaneous Determination of Amlodipine Besylate, Valsartan, and Hydrochlorothiazide in Pharmaceutical Formulations',
      authors: 'Yasirah Sabreen F',
      journalOrBook: 'Journal of Chemical Health Risks',
      year: 2026,
      volumeIssue: '16(5)',
      pages: '1305–1316',
      abstract:
        'A systematic review evaluating conventional chromatographic assays alongside modern green analytical paradigms for triple-combination cardiovascular therapies. Analyzes eco-friendly mobile phases, alternative extraction methods, and green metric indices for routine quality control.',
      tags: ['Green Analytical Chemistry', 'Cardiovascular Drugs', 'HPLC', 'Eco-Scale', 'Method Comparison'],
    },
  ],

  experience: [
    {
      id: 'exp-softgel',
      role: 'Analytical Department Intern',
      company: 'Softgel Healthcare Pvt. Ltd.',
      location: 'Vandalur, Chennai, India',
      period: 'September 2026 – Present',
      type: 'Internship',
      instruments: ['HPLC (Waters / Agilent)', 'Gas Chromatography (GC)', 'Analytical Balances', 'Sonicators & Centrifuges'],
      responsibilities: [
        'Conducted routine chromatographic analyses and instrument preparations in a state-of-the-art analytical testing facility.',
        'Executed mobile phase compounding, precision standard and sample preparations, and finished formulation release assays.',
        'Performed system suitability evaluations (theoretical plate counts, tailing factors, and %RSD) in accordance with Standard Operating Procedures (SOPs).',
      ],
      learnings: [
        'Managed commercial-scale quality control workflows and high-throughput sample batches under strict turnaround windows.',
        'Mastered routine chromatographic troubleshooting, column care, and GMP laboratory safety standards.',
      ],
    },
    {
      id: 'exp-arka',
      role: 'Analytical Research Trainee',
      company: 'Arka Drug Testing Laboratory',
      location: 'Chennai, India',
      period: '2 Months, 2025',
      type: 'Traineeship',
      instruments: ['RP-HPLC', 'UV-Visible Spectrophotometer', 'Dissolution Test Apparatus', 'pH Meter & Conductivity Cell'],
      responsibilities: [
        'Assisted senior analysts in developing and validating stability-indicating RP-HPLC methods for commercial drug products.',
        'Prepared laboratory notebooks, instrument calibration logs, and analytical test reports conforming to regulatory audit standards.',
        'Performed physical, chemical, and dissolution profiling on incoming raw materials and finished drug batches.',
      ],
      learnings: [
        'Executed ICH Q2(R1) validation protocols covering specificity, linearity, precision, and recovery within an accredited commercial drug testing facility.',
      ],
    },
    {
      id: 'exp-kniss',
      role: 'Quality Control & Quality Assurance Intern',
      company: 'KNISS Laboratories Pvt. Ltd.',
      location: 'Chennai, India',
      period: 'June 2024',
      type: 'Internship',
      instruments: ['HPLC', 'FTIR Spectrometer', 'UV-Vis Spectrophotometer', 'Stability Chambers'],
      responsibilities: [
        'Operated HPLC, FTIR, and UV spectrophotometric instruments under Good Manufacturing Practices (GMP).',
        'Assisted the Quality Assurance team with stability chamber monitoring, sample pulls, and archival documentation.',
        'Shadowed senior personnel through deviation investigations, change control assessments, and Certificate of Analysis (CoA) verifications.',
      ],
      learnings: [
        'Correlated analytical laboratory testing with Quality Assurance release protocols and GMP regulatory compliance.',
      ],
    },
    {
      id: 'exp-madras-pharma',
      role: 'Pharmaceutical Manufacturing Intern',
      company: 'Madras Pharmaceuticals',
      location: 'Chennai, India',
      period: 'July 2024',
      type: 'Internship',
      instruments: ['Tablet Compression Machines', 'Fluid Bed Dryers', 'Coating Pans', 'Blister Packaging Lines'],
      responsibilities: [
        'Gained firsthand operational exposure to large-scale solid oral dosage manufacturing, cleanroom HVAC systems, and automated packaging lines.',
        'Monitored GMP-compliant manufacturing runs, line clearance verifications, and in-process quality control (IPQC) checks.',
        'Assisted production supervisors during batch reconciliation procedures and equipment cleaning validation.',
      ],
      learnings: [
        'Developed a comprehensive understanding of how solid oral dosage manufacturing operations interface directly with analytical QC testing.',
      ],
    },
  ],

  education: [
    {
      id: 'edu-mpharm',
      degree: 'Master of Pharmacy (M. Pharm)',
      field: 'Pharmaceutical Analysis',
      institution: 'B.S. Abdur Rahman Crescent Institute of Science and Technology',
      location: 'Chennai, India',
      period: '2025 – 2027',
      grade: '8.79 CGPA',
      gradeLabel: 'Cumulative Grade Point Average',
      status: 'Pursuing',
      highlights: [
        'Specialization in Advanced Pharmaceutical Analysis, Modern Analytical Instrumentation, and AQbD Methodologies.',
        'Maintains outstanding academic standing with a cumulative GPA of 8.79 / 10.0.',
        'Recipient of institutional conference presentation honors and an active student researcher in the Department of Pharmaceutical Analysis.',
      ],
    },
    {
      id: 'edu-bpharm',
      degree: 'Bachelor of Pharmacy (B. Pharm)',
      field: 'Pharmaceutical Sciences',
      institution: 'B.S. Abdur Rahman Crescent Institute of Science and Technology',
      location: 'Chennai, India',
      period: '2021 – 2025',
      grade: '7.66 CGPA',
      gradeLabel: 'Cumulative Grade Point Average',
      status: 'Graduated',
      highlights: [
        'Completed a comprehensive curriculum spanning Medicinal Chemistry, Pharmacology, Pharmaceutics, Pharmacognosy, and Pharmaceutical Analysis.',
        'Conferred Registered Pharmacist licensure under the Pharmacy Council of India upon degree completion.',
      ],
    },
    {
      id: 'edu-xii',
      degree: 'Senior Secondary Education (CBSE Class XII)',
      field: 'Science Stream (Physics, Chemistry, Biology, Mathematics)',
      institution: 'Noble International School',
      location: 'Doha, Qatar',
      period: 'Graduated 2021',
      grade: '82%',
      gradeLabel: 'Board Examination Score',
      status: 'Completed',
      highlights: ['Built a rigorous academic foundation in physical and life sciences through accredited CBSE schooling in Doha, Qatar.'],
    },
    {
      id: 'edu-x',
      degree: 'Secondary Education (CBSE Class X)',
      field: 'General Sciences & Mathematics',
      institution: 'Noble International School',
      location: 'Doha, Qatar',
      period: 'Graduated 2019',
      grade: '77%',
      gradeLabel: 'Board Examination Score',
      status: 'Completed',
    },
  ],

  certificates: [
    {
      id: 'cert-nextgen-1st',
      category: 'Academic Presentation',
      title: 'First Prize – Oral Presentation',
      issuer: 'International Conference on "NextGen Pharma: Technology Reshaping Healthcare", Bharath Institute of Higher Education and Research',
      yearOrNote: '2026',
      awardType: 'First Prize',
      description: 'Awarded First Prize for an outstanding scientific presentation on advanced technological paradigms reshaping contemporary healthcare and analytical workflows.',
    },
    {
      id: 'cert-best-pres',
      category: 'Academic Presentation',
      title: 'Best Presentation Award',
      issuer: 'National Summit on Benefits and Challenges of Artificial Intelligence in Human Wellbeing, Crescent Global Outreach Mission (R&D)',
      yearOrNote: '2026',
      awardType: 'Best Presentation',
      description: 'Conferred the Best Presentation Award for research detailing artificial intelligence applications and predictive quality models in pharmaceutical care.',
    },
    {
      id: 'cert-poster-tagore',
      category: 'Academic Presentation',
      title: 'E-Poster Presentation',
      issuer: 'International Conference on Drug Discovery & Development, Tagore College of Pharmacy & Antiviral Research Society (AVRS)',
      yearOrNote: '2026',
      awardType: 'Fellowship/Delegate',
      description: 'Presented a peer-reviewed scientific e-poster detailing chromatographic separation strategies and drug discovery methodologies.',
    },
    {
      id: 'cert-appreciation-crescent',
      category: 'Academic Presentation',
      title: 'Certificate of Appreciation – Presentation',
      issuer: 'International Conference on Recent Advances in Pharmaceutical Research: Industry Perspective, Crescent School of Pharmacy & IPA-TNSB',
      yearOrNote: 'February 2026',
      awardType: 'Fellowship/Delegate',
      description: 'Recognized for an impactful scientific delivery addressing industry-oriented advancements in pharmaceutical analytical research.',
    },
    {
      id: 'cert-chemcon-sriher',
      category: 'Instrumentation & Analytical Training',
      title: 'Chemcon 2025 (Series XI) – Hands-on Training in HPLC & HPTLC',
      issuer: 'SRIHER (DST-FIST Sponsored Central Instrument Facility)',
      yearOrNote: '2025',
      awardType: 'Hands-on Certification',
      description: 'Completed intensive hands-on instrumentation training covering HPLC and HPTLC calibration, sample derivatization, and quantitative evaluation.',
    },
    {
      id: 'cert-spinco-mgr',
      category: 'Instrumentation & Analytical Training',
      title: 'Workshop on High Performance Liquid Chromatography (HPLC)',
      issuer: 'Dr. M.G.R. Educational and Research Institute in association with Spinco Biotech',
      yearOrNote: '2025',
      awardType: 'Hands-on Certification',
      description: 'Completed technical training on Shimadzu HPLC modules, column stationary phases, degasser systems, and UV detector optimization.',
    },
    {
      id: 'cert-dkss-advancements',
      category: 'Instrumentation & Analytical Training',
      title: 'Workshop on Recent Advancements in Analytical Techniques',
      issuer: 'DKSS Institute of Pharmaceutical Science & Research',
      yearOrNote: '2025',
      awardType: 'Hands-on Certification',
      description: 'Explored emerging hyphenated analytical techniques, ultra-fast chromatography, and spectroscopic characterization tools.',
    },
    {
      id: 'cert-xps-sathyabama',
      category: 'Instrumentation & Analytical Training',
      title: 'Workshop on X-ray Photoelectron Spectroscopy (XPS): Basics, Instrumentation & Applications',
      issuer: 'Sathyabama Institute of Science and Technology',
      yearOrNote: '2025',
      awardType: 'Hands-on Certification',
      description: 'Completed specialized training on surface chemical states, ultra-high vacuum instrumentation, and XPS spectral deconvolution.',
    },
    {
      id: 'cert-3d-print',
      category: 'Instrumentation & Analytical Training',
      title: 'Workshop on 3D Printing Technology for Pharmaceutical Dosage Forms',
      issuer: 'Crescent School of Pharmacy & Crescent Innovation and Incubation Council (CIIC)',
      yearOrNote: '2025',
      awardType: 'Hands-on Certification',
      description: 'Completed practical training on additive manufacturing techniques, polymer extrusion, and personalized dosage form fabrication.',
    },
    {
      id: 'cert-pharma-40',
      category: 'Industry 4.0 & Quality Systems',
      title: 'Workshop on Pharmaceuticals 4.0: Industry Perspective Through Quality by Design (QbD)',
      issuer: 'Crescent School of Pharmacy',
      yearOrNote: '2025',
      awardType: 'Hands-on Certification',
      description: 'Studied digital transformation within pharmaceutical manufacturing, process analytical technology (PAT), and QbD implementation.',
    },
    {
      id: 'cert-python-sql',
      category: 'Emerging Tech & Interdisciplinary',
      title: 'Certificate Course in Python & MySQL Programming',
      issuer: 'Professional Programming & Data Management Certification',
      yearOrNote: '2025',
      awardType: 'Hands-on Certification',
      description: 'Completed a specialized course on Python syntax, scientific data manipulation, and relational MySQL database design.',
    },
    {
      id: 'cert-ai-integration',
      category: 'Emerging Tech & Interdisciplinary',
      title: 'Symposium on Next Generation Pharmacy: AI Integration in Pharmaceutical Sciences',
      issuer: 'C.L. Baid Metha College of Pharmacy, accredited by The Tamil Nadu Dr. M.G.R. Medical University',
      yearOrNote: '2024',
      awardType: 'Fellowship/Delegate',
      description: 'Explored computational drug design, machine-learning formulation models, and algorithmic quality predictions.',
    },
    {
      id: 'cert-nano-adv',
      category: 'Emerging Tech & Interdisciplinary',
      title: 'National Seminar on Nanotechnology for Advanced Drug Delivery',
      issuer: 'Pallavan Pharmacy College',
      yearOrNote: '2024',
      awardType: 'Fellowship/Delegate',
      description: 'Participated in advanced seminars covering liposomal carriers, polymeric nanoparticles, and targeted drug delivery systems.',
    },
    {
      id: 'cert-future-pharmacist',
      category: 'Professional Development',
      title: 'Continuing Education Programme: Future Pharmacist (VPW–NP 2024)',
      issuer: 'Vivekanandha Pharmacy College for Women',
      yearOrNote: '2024',
      awardType: 'Fellowship/Delegate',
      description: 'Completed professional training on global pharmacovigilance, emerging clinical standards, and patient-centered pharmaceutical care.',
    },
    {
      id: 'cert-global-opps',
      category: 'Professional Development',
      title: 'Career Guidance Program: Global Opportunities in Higher Education & Placement',
      issuer: 'The Erode College of Pharmacy',
      yearOrNote: '2024',
      awardType: 'Fellowship/Delegate',
      description: 'Participated in international career development sessions detailing global fellowship pathways and regulatory careers.',
    },
  ],
};
