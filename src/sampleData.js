
// Enhanced Sample Users for Demo - Aligned with SRS Requirements
export const SAMPLE_USERS = {
  admin: { 
    id: 'admin1', 
    email: 'admin@gharinto.com', 
    password: 'admin123', 
    role: 'admin', 
    name: 'Arjun Patel',
    title: 'Super Admin - Operations Head',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    phone: '+91-9876543210',
    joinDate: '2023-01-15',
    permissions: ['FULL_ACCESS', 'USER_MANAGEMENT', 'FINANCIAL_OVERSIGHT', 'LEAD_ASSIGNMENT', 'SYSTEM_CONFIG']
  },
  pm: { 
    id: 'pm1', 
    email: 'rajesh@gharinto.com', 
    password: 'pm123', 
    role: 'pm', 
    name: 'Rajesh Kumar',
    title: 'Senior Project Manager',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    phone: '+91-9876543211',
    joinDate: '2023-02-20',
    activeProjects: 8,
    completedProjects: 45,
    rating: 4.8,
    specializations: ['Residential', 'Commercial', 'Luxury Projects']
  },
  customer: { 
    id: 'cust1', 
    email: 'sharma@gmail.com', 
    password: 'cust123', 
    role: 'customer', 
    name: 'Sharma Family',
    title: 'Premium Customer',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    phone: '+91-9876543212',
    joinDate: '2023-11-10',
    projectId: 'PR001',
    propertyType: '3BHK Apartment',
    location: 'Mumbai, Maharashtra',
    totalSpent: 520000
  },
  designer: { 
    id: 'des1', 
    email: 'priya@designer.com', 
    password: 'des123', 
    role: 'designer', 
    name: 'Priya Mehta',
    title: 'Senior Interior Designer',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b2a90000?w=100&h=100&fit=crop&crop=face',
    phone: '+91-9876543213',
    joinDate: '2023-03-15',
    rating: 4.8,
    activeProjects: 6,
    completedProjects: 28,
    walletBalance: 65000,
    specializations: ['Modern', 'Minimalist', 'Contemporary'],
    verificationStatus: 'Verified'
  },
  procurement: { 
    id: 'proc1', 
    email: 'inventory@gharinto.com', 
    password: 'proc123', 
    role: 'procurement', 
    name: 'Vikash Singh',
    title: 'Procurement Manager',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face',
    phone: '+91-9876543214',
    joinDate: '2023-04-01',
    managedVendors: 25,
    activeOrders: 12,
    monthlyVolume: 2500000
  },
  vendor: {
    id: 'vendor1',
    email: 'vendor@classicfurniture.com',
    password: 'vendor123',
    role: 'vendor',
    name: 'Classic Furniture Pvt Ltd',
    title: 'Premium Furniture Supplier',
    avatar: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=face',
    phone: '+91-9876543215',
    joinDate: '2023-05-01',
    businessType: 'Manufacturer',
    categories: ['Furniture', 'Lighting', 'Decor'],
    rating: 4.6,
    totalProducts: 150
  }
};

// Enhanced Sample Data with Premium Images - Aligned with SRS Requirements
export const SAMPLE_DATA = {
  customers: [
    { id: 'CUST001', name: 'Sharma Family', email: 'sharma.family@gmail.com', phone: '+91-9999999999', location: 'Mumbai, Maharashtra', projects: 2, totalSpent: 850000, status: 'Active', registrationDate: '2023-12-01', propertyType: '3BHK Apartment', budget: '5-8L', kycStatus: 'Verified', leadSource: 'Website', assignedPM: 'Rajesh Kumar' },
    { id: 'CUST002', name: 'Gupta Residence', email: 'gupta@gmail.com', phone: '+91-8888888888', location: 'Delhi, NCR', projects: 1, totalSpent: 420000, status: 'Active', registrationDate: '2024-01-15', propertyType: '2BHK Flat', budget: '3-5L', kycStatus: 'Verified', leadSource: 'Referral', assignedPM: 'Rajesh Kumar' },
    { id: 'CUST003', name: 'Patel Villa', email: 'patel@gmail.com', phone: '+91-7777777777', location: 'Pune, Maharashtra', projects: 3, totalSpent: 1200000, status: 'VIP', registrationDate: '2023-10-20', propertyType: '4BHK Villa', budget: '10-15L', kycStatus: 'Verified', leadSource: 'Builder Partner', assignedPM: 'Suresh Gupta' },
    { id: 'CUST004', name: 'Singh Mansion', email: 'singh@gmail.com', phone: '+91-6666666666', location: 'Bangalore, Karnataka', projects: 1, totalSpent: 680000, status: 'Active', registrationDate: '2024-02-10', propertyType: '3BHK Duplex', budget: '6-9L', kycStatus: 'Verified', leadSource: 'Social Media', assignedPM: 'Rajesh Kumar' },
    { id: 'CUST005', name: 'Agarwal Heights', email: 'agarwal@gmail.com', phone: '+91-5555555555', location: 'Chennai, Tamil Nadu', projects: 2, totalSpent: 950000, status: 'Active', registrationDate: '2023-11-30', propertyType: '3BHK Penthouse', budget: '8-12L', kycStatus: 'Verified', leadSource: 'Google Ads', assignedPM: 'Suresh Gupta' },
    { id: 'CUST006', name: 'Verma Residency', email: 'verma@gmail.com', phone: '+91-4444444444', location: 'Hyderabad, Telangana', projects: 1, totalSpent: 320000, status: 'Active', registrationDate: '2024-01-20', propertyType: '2BHK Apartment', budget: '2-4L', kycStatus: 'Pending', leadSource: 'Website', assignedPM: 'Rajesh Kumar' },
    { id: 'CUST007', name: 'Khan Palace', email: 'khan@gmail.com', phone: '+91-3333333333', location: 'Lucknow, UP', projects: 4, totalSpent: 1800000, status: 'VIP', registrationDate: '2023-09-15', propertyType: '5BHK Villa', budget: '15-20L', kycStatus: 'Verified', leadSource: 'Builder Partner', assignedPM: 'Suresh Gupta' },
    { id: 'CUST008', name: 'Joshi Apartments', email: 'joshi@gmail.com', phone: '+91-2222222222', location: 'Ahmedabad, Gujarat', projects: 1, totalSpent: 480000, status: 'Active', registrationDate: '2024-03-05', propertyType: '2BHK Flat', budget: '4-6L', kycStatus: 'Verified', leadSource: 'Referral', assignedPM: 'Rajesh Kumar' },
    { id: 'CUST009', name: 'Reddy Homes', email: 'reddy@gmail.com', phone: '+91-1111111111', location: 'Visakhapatnam, AP', projects: 2, totalSpent: 720000, status: 'Active', registrationDate: '2023-12-20', propertyType: '3BHK House', budget: '6-8L', kycStatus: 'Verified', leadSource: 'Website', assignedPM: 'Suresh Gupta' },
    { id: 'CUST010', name: 'Bhattacharya Estate', email: 'bhatta@gmail.com', phone: '+91-9898989898', location: 'Kolkata, WB', projects: 1, totalSpent: 550000, status: 'Active', registrationDate: '2024-02-28', propertyType: '3BHK Apartment', budget: '5-7L', kycStatus: 'Verified', leadSource: 'Social Media', assignedPM: 'Rajesh Kumar' }
  ],
  
  projects: [
    { id: 'PR001', customerName: 'Sharma Family', designerName: 'Priya Mehta', pmName: 'Rajesh Kumar', status: 'In Progress', progress: 65, budget: 520000, spent: 338000, location: 'Mumbai, Maharashtra', startDate: '2024-01-01', expectedEnd: '2024-03-15', nextMilestone: 'Material Procurement', propertyType: '3BHK Apartment', area: '1200 sq ft', phase: 'Civil Work' },
    { id: 'PR002', customerName: 'Gupta Residence', designerName: 'Anita Sharma', pmName: 'Rajesh Kumar', status: 'Design Phase', progress: 25, budget: 420000, spent: 105000, location: 'Delhi, NCR', startDate: '2024-02-01', expectedEnd: '2024-04-30', nextMilestone: 'Design Approval', propertyType: '2BHK Flat', area: '900 sq ft', phase: 'Design' },
    { id: 'PR003', customerName: 'Patel Villa', designerName: 'Priya Mehta', pmName: 'Suresh Gupta', status: 'Completed', progress: 100, budget: 1200000, spent: 1180000, location: 'Pune, Maharashtra', startDate: '2023-10-01', expectedEnd: '2024-01-15', nextMilestone: 'Handover', propertyType: '4BHK Villa', area: '2500 sq ft', phase: 'Completed' },
    { id: 'PR004', customerName: 'Singh Mansion', designerName: 'Rohit Desai', pmName: 'Rajesh Kumar', status: 'Procurement', progress: 45, budget: 680000, spent: 306000, location: 'Bangalore, Karnataka', startDate: '2024-02-10', expectedEnd: '2024-05-20', nextMilestone: 'Material Delivery', propertyType: '3BHK Duplex', area: '1800 sq ft', phase: 'Procurement' },
    { id: 'PR005', customerName: 'Agarwal Heights', designerName: 'Kavya Nair', pmName: 'Suresh Gupta', status: 'Installation', progress: 80, budget: 950000, spent: 760000, location: 'Chennai, Tamil Nadu', startDate: '2023-12-01', expectedEnd: '2024-03-30', nextMilestone: 'Final Setup', propertyType: '3BHK Penthouse', area: '1600 sq ft', phase: 'Installation' },
    { id: 'PR006', customerName: 'Verma Residency', designerName: 'Anita Sharma', pmName: 'Rajesh Kumar', status: 'Design Phase', progress: 15, budget: 320000, spent: 48000, location: 'Hyderabad, Telangana', startDate: '2024-03-01', expectedEnd: '2024-05-15', nextMilestone: 'Initial Design', propertyType: '2BHK Apartment', area: '800 sq ft', phase: 'Design' },
    { id: 'PR007', customerName: 'Khan Palace', designerName: 'Priya Mehta', pmName: 'Suresh Gupta', status: 'In Progress', progress: 55, budget: 1800000, spent: 990000, location: 'Lucknow, UP', startDate: '2023-11-15', expectedEnd: '2024-04-30', nextMilestone: 'Kitchen Installation', propertyType: '5BHK Villa', area: '3500 sq ft', phase: 'Civil Work' },
    { id: 'PR008', customerName: 'Joshi Apartments', designerName: 'Rohit Desai', pmName: 'Rajesh Kumar', status: 'Procurement', progress: 35, budget: 480000, spent: 168000, location: 'Ahmedabad, Gujarat', startDate: '2024-03-05', expectedEnd: '2024-06-10', nextMilestone: 'Material Order', propertyType: '2BHK Flat', area: '1000 sq ft', phase: 'Procurement' },
    { id: 'PR009', customerName: 'Reddy Homes', designerName: 'Kavya Nair', pmName: 'Suresh Gupta', status: 'Installation', progress: 90, budget: 720000, spent: 648000, location: 'Visakhapatnam, AP', startDate: '2023-12-20', expectedEnd: '2024-03-25', nextMilestone: 'Final Touches', propertyType: '3BHK House', area: '1400 sq ft', phase: 'Installation' },
    { id: 'PR010', customerName: 'Bhattacharya Estate', designerName: 'Anita Sharma', pmName: 'Rajesh Kumar', status: 'Design Phase', progress: 20, budget: 550000, spent: 110000, location: 'Kolkata, WB', startDate: '2024-02-28', expectedEnd: '2024-06-15', nextMilestone: 'Design Review', propertyType: '3BHK Apartment', area: '1100 sq ft', phase: 'Design' }
  ],
  
  leads: [
    { id: 'LD001', customer: 'Verma Family', budget: '5-8L', location: 'Bangalore', status: 'New', assignedTo: null, requirements: '3BHK Modern Interior', propertyType: '3BHK Apartment', area: '1300 sq ft', phone: '+91-9876543215', priority: 'High', source: 'Website' },
    { id: 'LD002', customer: 'Singh Residence', budget: '3-5L', location: 'Chennai', status: 'Assigned', assignedTo: 'Priya Mehta', requirements: '2BHK Minimalist Design', propertyType: '2BHK Flat', area: '850 sq ft', phone: '+91-9876543216', priority: 'Medium', source: 'Referral' },
    { id: 'LD003', customer: 'Kapoor Villa', budget: '10-15L', location: 'Mumbai', status: 'New', assignedTo: null, requirements: '4BHK Luxury Interior', propertyType: '4BHK Villa', area: '2800 sq ft', phone: '+91-9876543217', priority: 'High', source: 'Social Media' },
    { id: 'LD004', customer: 'Mishra Apartments', budget: '2-4L', location: 'Delhi', status: 'In Discussion', assignedTo: 'Anita Sharma', requirements: '1BHK Compact Design', propertyType: '1BHK Studio', area: '600 sq ft', phone: '+91-9876543218', priority: 'Low', source: 'Google Ads' },
    { id: 'LD005', customer: 'Rao Penthouse', budget: '8-12L', location: 'Hyderabad', status: 'New', assignedTo: null, requirements: '3BHK Contemporary Style', propertyType: '3BHK Penthouse', area: '1800 sq ft', phone: '+91-9876543219', priority: 'High', source: 'Website' },
    { id: 'LD006', customer: 'Malhotra Residency', budget: '4-6L', location: 'Pune', status: 'Assigned', assignedTo: 'Rohit Desai', requirements: '2BHK Traditional Design', propertyType: '2BHK House', area: '1000 sq ft', phone: '+91-9876543220', priority: 'Medium', source: 'Referral' }
  ],
  
  designers: [
    { id: 'DES001', name: 'Priya Mehta', rating: 4.8, projects: 28, walletBalance: 65000, status: 'Active', specialization: 'Modern, Minimalist, Contemporary', experience: 8, location: 'Mumbai', completedProjects: 45, avatar: 'https://images.unsplash.com/photo-1494790108755-2616b2a90000?w=100&h=100&fit=crop&crop=face', phone: '+91-9876543213', joinDate: '2023-03-15' },
    { id: 'DES002', name: 'Anita Sharma', rating: 4.6, projects: 22, walletBalance: 52000, status: 'Active', specialization: 'Traditional, Ethnic, Vintage', experience: 6, location: 'Delhi', completedProjects: 38, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face', phone: '+91-9876543221', joinDate: '2023-04-20' },
    { id: 'DES003', name: 'Rohit Desai', rating: 4.5, projects: 19, walletBalance: 48000, status: 'Active', specialization: 'Contemporary, Industrial, Luxury', experience: 7, location: 'Bangalore', completedProjects: 32, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face', phone: '+91-9876543222', joinDate: '2023-05-10' },
    { id: 'DES004', name: 'Kavya Nair', rating: 4.7, projects: 25, walletBalance: 58000, status: 'Active', specialization: 'Minimalist, Scandinavian, Eco-friendly', experience: 5, location: 'Chennai', completedProjects: 41, avatar: 'https://images.unsplash.com/photo-1494790108755-2616b2a90000?w=100&h=100&fit=crop&crop=face', phone: '+91-9876543223', joinDate: '2023-06-01' },
    { id: 'DES005', name: 'Suresh Gupta', rating: 4.4, projects: 16, walletBalance: 42000, status: 'Active', specialization: 'Classic, Royal, Heritage', experience: 9, location: 'Pune', completedProjects: 29, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face', phone: '+91-9876543224', joinDate: '2023-07-15' }
  ],
  
  materials: [
    { id: 'MAT001', name: 'Premium Marble Tiles', category: 'Flooring', price: 850, unit: 'sq ft', stock: 500, vendor: 'Classic Stones', image: 'https://images.pexels.com/photos/279648/pexels-photo-279648.jpeg', description: 'High-quality Italian marble tiles', rating: 4.8 },
    { id: 'MAT002', name: 'Modular Kitchen Set', category: 'Furniture', price: 150000, unit: 'set', stock: 25, vendor: 'Kitchen Masters', image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg', description: 'Complete modular kitchen with appliances', rating: 4.6 },
    { id: 'MAT003', name: 'LED Ceiling Lights', category: 'Lighting', price: 3500, unit: 'piece', stock: 150, vendor: 'Bright Lights Co', image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg', description: 'Energy-efficient LED ceiling fixtures', rating: 4.7 },
    { id: 'MAT004', name: 'Luxury Sofa Set', category: 'Furniture', price: 85000, unit: 'set', stock: 18, vendor: 'Comfort Furniture', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg', description: '7-seater luxury fabric sofa set', rating: 4.9 },
    { id: 'MAT005', name: 'Wooden Flooring', category: 'Flooring', price: 450, unit: 'sq ft', stock: 800, vendor: 'Wood Works', image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg', description: 'Premium engineered wood flooring', rating: 4.5 },
    { id: 'MAT006', name: 'Designer Wallpaper', category: 'Wall Decor', price: 1200, unit: 'sq ft', stock: 300, vendor: 'Wall Art Studio', image: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg', description: 'Premium textured wallpaper', rating: 4.4 },
    { id: 'MAT007', name: 'Bathroom Fixtures', category: 'Sanitary', price: 25000, unit: 'set', stock: 40, vendor: 'Bath Essentials', image: 'https://images.pexels.com/photos/342800/pexels-photo-342800.jpeg', description: 'Complete bathroom fixture set', rating: 4.6 },
    { id: 'MAT008', name: 'Window Blinds', category: 'Window Treatment', price: 2500, unit: 'piece', stock: 120, vendor: 'Shade Solutions', image: 'https://images.pexels.com/photos/3356416/pexels-photo-3356416.jpeg', description: 'Motorized window blinds', rating: 4.3 },
    { id: 'MAT009', name: 'Dining Table Set', category: 'Furniture', price: 45000, unit: 'set', stock: 30, vendor: 'Dining Delights', image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914', description: '6-seater solid wood dining set', rating: 4.7 },
    { id: 'MAT010', name: 'Smart Home System', category: 'Technology', price: 75000, unit: 'set', stock: 15, vendor: 'Tech Home Solutions', image: 'https://images.unsplash.com/photo-1696987007764-7f8b85dd3033', description: 'Complete smart home automation', rating: 4.8 }
  ],

  teamMembers: [
    { name: 'Arjun Patel', role: 'CEO & Founder', image: 'https://images.pexels.com/photos/5922204/pexels-photo-5922204.jpeg', bio: 'Visionary leader with 15+ years in interior design industry' },
    { name: 'Priya Mehta', role: 'Lead Designer', image: 'https://images.pexels.com/photos/2678468/pexels-photo-2678468.jpeg', bio: 'Award-winning designer specializing in modern interiors' },
    { name: 'Rajesh Kumar', role: 'Project Manager', image: 'https://images.unsplash.com/photo-1716703373020-17ff360924ee', bio: 'Expert in managing complex interior projects' },
    { name: 'Vikash Singh', role: 'Operations Head', image: 'https://images.unsplash.com/photo-1716703742354-c3c45ecc3b27', bio: 'Streamlining operations for seamless execution' }
  ],

  services: [
    { 
      name: 'Residential Interior Design', 
      description: 'Complete home makeover with personalized design solutions',
      features: ['3D Visualization', 'Space Planning', 'Furniture Selection', 'Color Consultation'],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      price: 'Starting from ₹50,000'
    },
    { 
      name: 'Commercial Space Design', 
      description: 'Professional workspace design for optimal productivity',
      features: ['Office Planning', 'Brand Integration', 'Ergonomic Design', 'Lighting Solutions'],
      image: 'https://images.unsplash.com/photo-1715593949345-50d3304cff4b',
      price: 'Starting from ₹1,00,000'
    },
    { 
      name: 'Kitchen & Bathroom Design', 
      description: 'Specialized design for kitchens and bathrooms',
      features: ['Modular Kitchen', 'Storage Solutions', 'Premium Fixtures', 'Water Management'],
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
      price: 'Starting from ₹75,000'
    }
  ],

  // New high-quality portfolio items with our curated images
  portfolioItems: [
    { 
      id: 'PORT001', 
      title: 'Luxury Living Room', 
      category: 'Living Room', 
      image: 'https://images.unsplash.com/photo-1572525621554-9013384b1d36',
      description: 'Modern luxury living room with blue accents and contemporary furniture',
      location: 'Mumbai',
      area: '450 sq ft',
      budget: '₹3.5L',
      designer: 'Priya Mehta'
    },
    { 
      id: 'PORT002', 
      title: 'Sophisticated City View Living', 
      category: 'Living Room', 
      image: 'https://images.unsplash.com/photo-1721301856929-1f983c06bae7',
      description: 'Elegant living space with panoramic city views and minimalist design',
      location: 'Delhi',
      area: '600 sq ft',
      budget: '₹4.2L',
      designer: 'Anita Sharma'
    },
    { 
      id: 'PORT003', 
      title: 'Contemporary Kitchen Design', 
      category: 'Kitchen', 
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
      description: 'Spacious white kitchen with modern appliances and functional island',
      location: 'Bangalore',
      area: '200 sq ft',
      budget: '₹2.8L',
      designer: 'Rohit Desai'
    },
    { 
      id: 'PORT004', 
      title: 'Minimalist Bedroom Retreat', 
      category: 'Bedroom', 
      image: 'https://images.unsplash.com/photo-1633944095397-878622ebc01c',
      description: 'Serene bedroom with clean lines and neutral color palette',
      location: 'Chennai',
      area: '300 sq ft',
      budget: '₹2.2L',
      designer: 'Kavya Nair'
    },
    { 
      id: 'PORT005', 
      title: 'Elegant Bedroom Suite', 
      category: 'Bedroom', 
      image: 'https://images.unsplash.com/photo-1631048501851-4aa85ffc3be8',
      description: 'Luxurious bedroom with sophisticated neutral tones and premium finishes',
      location: 'Pune',
      area: '350 sq ft',
      budget: '₹3.1L',
      designer: 'Suresh Gupta'
    },
    { 
      id: 'PORT006', 
      title: 'Modern Home Interior', 
      category: 'Living Room', 
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
      description: 'Bright and airy living space with stylish furniture and natural light',
      location: 'Hyderabad',
      area: '500 sq ft',
      budget: '₹3.8L',
      designer: 'Priya Mehta'
    }
  ],

  // Vendors/Suppliers Data - As per SRS Requirements
  vendors: [
    { id: 'VEN001', name: 'Classic Furniture Pvt Ltd', email: 'orders@classicfurniture.com', phone: '+91-9876543215', businessType: 'Manufacturer', categories: ['Furniture', 'Lighting'], location: 'Mumbai, Maharashtra', rating: 4.6, totalProducts: 150, monthlyOrders: 45, paymentTerms: '30 days', gstNumber: 'GST123456789', status: 'Active', joinDate: '2023-05-01' },
    { id: 'VEN002', name: 'Premium Stones & Tiles', email: 'sales@premiumstones.com', phone: '+91-9876543216', businessType: 'Distributor', categories: ['Flooring', 'Wall Tiles'], location: 'Rajasthan', rating: 4.8, totalProducts: 200, monthlyOrders: 60, paymentTerms: '15 days', gstNumber: 'GST123456790', status: 'Active', joinDate: '2023-04-15' },
    { id: 'VEN003', name: 'Bright Lights Co', email: 'info@brightlights.com', phone: '+91-9876543217', businessType: 'Manufacturer', categories: ['Lighting', 'Electrical'], location: 'Delhi, NCR', rating: 4.5, totalProducts: 120, monthlyOrders: 35, paymentTerms: '45 days', gstNumber: 'GST123456791', status: 'Active', joinDate: '2023-06-01' },
    { id: 'VEN004', name: 'Wood Works India', email: 'orders@woodworks.com', phone: '+91-9876543218', businessType: 'Manufacturer', categories: ['Flooring', 'Furniture'], location: 'Bangalore, Karnataka', rating: 4.7, totalProducts: 180, monthlyOrders: 50, paymentTerms: '30 days', gstNumber: 'GST123456792', status: 'Active', joinDate: '2023-03-20' },
    { id: 'VEN005', name: 'Bath Essentials Ltd', email: 'sales@bathessentials.com', phone: '+91-9876543219', businessType: 'Distributor', categories: ['Sanitary', 'Plumbing'], location: 'Chennai, Tamil Nadu', rating: 4.4, totalProducts: 90, monthlyOrders: 25, paymentTerms: '30 days', gstNumber: 'GST123456793', status: 'Active', joinDate: '2023-07-10' }
  ],

  // Purchase Orders - As per SRS Requirements
  purchaseOrders: [
    { id: 'PO001', projectId: 'PR001', vendorId: 'VEN001', vendorName: 'Classic Furniture Pvt Ltd', orderDate: '2024-01-15', expectedDelivery: '2024-01-30', status: 'Delivered', totalAmount: 125000, items: [{ name: 'Luxury Sofa Set', quantity: 1, price: 85000 }, { name: 'Coffee Table', quantity: 2, price: 20000 }], deliveryAddress: 'Mumbai, Maharashtra', pmApproval: 'Approved', paymentStatus: 'Paid' },
    { id: 'PO002', projectId: 'PR002', vendorId: 'VEN002', vendorName: 'Premium Stones & Tiles', orderDate: '2024-02-01', expectedDelivery: '2024-02-15', status: 'In Transit', totalAmount: 85000, items: [{ name: 'Premium Marble Tiles', quantity: 500, price: 850 }], deliveryAddress: 'Delhi, NCR', pmApproval: 'Approved', paymentStatus: 'Pending' },
    { id: 'PO003', projectId: 'PR004', vendorId: 'VEN003', vendorName: 'Bright Lights Co', orderDate: '2024-02-20', expectedDelivery: '2024-03-05', status: 'Processing', totalAmount: 45000, items: [{ name: 'LED Ceiling Lights', quantity: 12, price: 3500 }, { name: 'Pendant Lights', quantity: 4, price: 2500 }], deliveryAddress: 'Bangalore, Karnataka', pmApproval: 'Approved', paymentStatus: 'Advance Paid' },
    { id: 'PO004', projectId: 'PR005', vendorId: 'VEN004', vendorName: 'Wood Works India', orderDate: '2024-01-25', expectedDelivery: '2024-02-10', status: 'Delivered', totalAmount: 95000, items: [{ name: 'Wooden Flooring', quantity: 200, price: 450 }, { name: 'Dining Table Set', quantity: 1, price: 45000 }], deliveryAddress: 'Chennai, Tamil Nadu', pmApproval: 'Approved', paymentStatus: 'Paid' },
    { id: 'PO005', projectId: 'PR007', vendorId: 'VEN005', vendorName: 'Bath Essentials Ltd', orderDate: '2024-02-10', expectedDelivery: '2024-02-25', status: 'Shipped', totalAmount: 75000, items: [{ name: 'Bathroom Fixtures', quantity: 3, price: 25000 }], deliveryAddress: 'Lucknow, UP', pmApproval: 'Approved', paymentStatus: 'Paid' }
  ],

  // Tasks Management - As per SRS Requirements
  tasks: [
    { id: 'TASK001', projectId: 'PR001', title: 'Site Measurement & Survey', assignedTo: 'Site Team A', assignedBy: 'Rajesh Kumar', priority: 'High', status: 'Completed', dueDate: '2024-01-05', completedDate: '2024-01-04', category: 'Pre-Construction', description: 'Complete site measurement and structural survey', estimatedHours: 8, actualHours: 7 },
    { id: 'TASK002', projectId: 'PR001', title: 'Electrical Wiring - Living Room', assignedTo: 'Electrical Team B', assignedBy: 'Rajesh Kumar', priority: 'High', status: 'In Progress', dueDate: '2024-03-10', completedDate: null, category: 'Electrical', description: 'Install electrical wiring for living room area', estimatedHours: 16, actualHours: 12 },
    { id: 'TASK003', projectId: 'PR001', title: 'Furniture Installation', assignedTo: 'Carpentry Team A', assignedBy: 'Rajesh Kumar', priority: 'Medium', status: 'Pending', dueDate: '2024-03-15', completedDate: null, category: 'Installation', description: 'Install custom furniture and fittings', estimatedHours: 24, actualHours: 0 },
    { id: 'TASK004', projectId: 'PR002', title: 'Design Approval Meeting', assignedTo: 'Anita Sharma', assignedBy: 'Rajesh Kumar', priority: 'High', status: 'Scheduled', dueDate: '2024-03-05', completedDate: null, category: 'Design', description: 'Client meeting for final design approval', estimatedHours: 4, actualHours: 0 },
    { id: 'TASK005', projectId: 'PR004', title: 'Material Procurement', assignedTo: 'Vikash Singh', assignedBy: 'Rajesh Kumar', priority: 'High', status: 'In Progress', dueDate: '2024-03-01', completedDate: null, category: 'Procurement', description: 'Procure materials as per BOQ', estimatedHours: 12, actualHours: 8 },
    { id: 'TASK006', projectId: 'PR005', title: 'Final Quality Check', assignedTo: 'Quality Team', assignedBy: 'Suresh Gupta', priority: 'High', status: 'Completed', dueDate: '2024-02-28', completedDate: '2024-02-27', category: 'Quality Control', description: 'Final quality inspection before handover', estimatedHours: 6, actualHours: 5 }
  ],

  // Financial Transactions - As per SRS Requirements
  transactions: [
    { id: 'TXN001', projectId: 'PR001', customerId: 'CUST001', type: 'Payment', amount: 104000, status: 'Completed', date: '2024-01-15', method: 'Online', milestone: 'Design Approval', description: 'First milestone payment - 20%', invoiceNumber: 'INV001', gstAmount: 18720 },
    { id: 'TXN002', projectId: 'PR001', customerId: 'CUST001', type: 'Payment', amount: 156000, status: 'Completed', date: '2024-02-01', method: 'Online', milestone: 'Material Procurement', description: 'Second milestone payment - 30%', invoiceNumber: 'INV002', gstAmount: 28080 },
    { id: 'TXN003', projectId: 'PR002', customerId: 'CUST002', type: 'Payment', amount: 84000, status: 'Completed', date: '2024-02-15', method: 'Bank Transfer', milestone: 'Design Approval', description: 'First milestone payment - 20%', invoiceNumber: 'INV003', gstAmount: 15120 },
    { id: 'TXN004', projectId: 'PR003', customerId: 'CUST003', type: 'Refund', amount: 20000, status: 'Processed', date: '2024-01-20', method: 'Bank Transfer', milestone: 'Project Completion', description: 'Excess payment refund', invoiceNumber: 'REF001', gstAmount: 0 },
    { id: 'TXN005', projectId: 'PR004', customerId: 'CUST004', type: 'Payment', amount: 136000, status: 'Pending', date: '2024-03-01', method: 'Online', milestone: 'Material Procurement', description: 'Second milestone payment - 30%', invoiceNumber: 'INV005', gstAmount: 24480 }
  ],

  // Communication Logs - As per SRS Requirements
  communications: [
    { id: 'COMM001', projectId: 'PR001', fromUser: 'Sharma Family', toUser: 'Rajesh Kumar', type: 'Message', subject: 'Query about timeline', message: 'Hi, can you please update on the current progress and expected completion date?', timestamp: '2024-02-28 10:30:00', status: 'Read', priority: 'Medium' },
    { id: 'COMM002', projectId: 'PR001', fromUser: 'Rajesh Kumar', toUser: 'Sharma Family', type: 'Response', subject: 'Re: Query about timeline', message: 'Hello! The project is 65% complete. We expect to finish by March 15th as planned. The electrical work is currently in progress.', timestamp: '2024-02-28 14:15:00', status: 'Read', priority: 'Medium' },
    { id: 'COMM003', projectId: 'PR002', fromUser: 'Anita Sharma', toUser: 'Gupta Residence', type: 'Update', subject: 'Design Ready for Review', message: 'Your 3D designs are ready for review. Please check the shared link and provide your feedback.', timestamp: '2024-02-25 16:45:00', status: 'Unread', priority: 'High' },
    { id: 'COMM004', projectId: 'PR001', fromUser: 'Priya Mehta', toUser: 'Rajesh Kumar', type: 'Alert', subject: 'Material Delay', message: 'There might be a 2-day delay in furniture delivery due to transport issues. Please inform the client.', timestamp: '2024-02-27 09:20:00', status: 'Read', priority: 'High' },
    { id: 'COMM005', projectId: 'PR004', fromUser: 'Singh Mansion', toUser: 'Rohit Desai', type: 'Feedback', subject: 'Design Modifications', message: 'We love the overall design but would like to change the kitchen color scheme to white and grey.', timestamp: '2024-02-26 11:30:00', status: 'Read', priority: 'Medium' }
  ]
};
