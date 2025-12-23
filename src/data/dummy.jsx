import React from 'react';
import { HiCurrencyDollar } from "react-icons/hi";
import { BsShieldFillCheck } from "react-icons/bs";
import { TfiCreditCard } from "react-icons/tfi";
import { ShoppingBag, ShoppingCart, Palette, FileEdit, Kanban, CalendarDays, UserCheck, Users, AlignVerticalSpaceAround,
  Triangle, Layers, CandlestickChart, PieChart, BarChart3, AreaChart, TrendingUp} from 'lucide-react';

export const gridOrderImage = (props) => (
  props.ProductImage
);

export const gridOrderStatus = (props) => (
  props.Status
);

export const sidebarLinks = [
  {
    title: "DASHBOARD",
    links: [
      { name: "Ecommerce", path: "/dashboard", icon: <ShoppingBag/> },
    ],
  },
  {
    title: "PAGES",
    links: [
      { name: "Orders", path: "/orders", icon: <ShoppingCart/> },
      { name: "Employees", path: "/employees", icon: <Users/> },
      { name: "Customers", path: "/customers", icon: <UserCheck/> },
    ],
  },
  {
    title: "APPS",
    links: [
      { name: "Calendar", path: "/apps/calendar", icon: <CalendarDays/> },
      { name: "Kanban", path: "/apps/kanban", icon: <Kanban/> },
      { name: "Editor", path: "/apps/editor", icon: <FileEdit/> },
      { name: "Color Picker", path: "/apps/color-picker", icon: <Palette/> },
    ],
  },
  {
    title: "CHARTS",
    links: [
      { name: "Line", path: "/charts/line", icon: <TrendingUp/> },
      { name: "Area", path: "/charts/area", icon: <AreaChart/> },
      { name: "Bar", path: "/charts/bar", icon: <BarChart3/>},
      { name: "Pie", path: "/charts/pie", icon: <PieChart/> },
      { name: "Financial", path: "/charts/financial", icon: <CandlestickChart/> },
      { name: "Color Mapping", path: "/charts/color-mapping", icon: <Layers/> },
      { name: "Pyramid", path: "/charts/pyramid", icon: <Triangle/> },
      { name: "Stacked", path: "/charts/stacked", icon: <AlignVerticalSpaceAround/> },
    ],
  },
];

// ------------------------------
// USER PROFILE
// ------------------------------
export const userProfile = [
  {
    icon: <HiCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShieldFillCheck />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <TfiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];

export const userProfileData = {
  name: "Michael Roberts",
  email: "michael@shoppy.com",
  role: "Administrator",
  avatar: "https://i.pravatar.cc/150?img=3",
  icon: "User",
};

export const userProfileOptions = [
  {
    icon: "DollarSign",
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: "Shield",
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: "CreditCard",
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];

// ------------------------------
// CHAT & CART & NOTIFICATIONS
// ------------------------------
export const chatData = [
  {
    image: "https://i.pravatar.cc/150?img=12",
    message: "Roman Joined the Team!",
    desc: "Congratulate him",
    time: "9:08 AM",
    icon: "MessageCircle",
  },
  {
    image: "https://i.pravatar.cc/150?img=5",
    message: "New message received",
    desc: "Salma sent you new message",
    time: "11:56 AM",
    icon: "Mail",
  },
  {
    image: "https://i.pravatar.cc/150?img=3",
    message: "New Payment received",
    desc: "Check your earnings",
    time: "4:39 AM",
    icon: "DollarSign",
  },
];

export const cartData = [
  {
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=200&h=200",
    name: "Butterscotch Ice Cream",
    category: "Milk Product",
    price: "$250",
  },
  {
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=200&h=200",
    name: "Supreme Fresh Tomato",
    category: "Vegetable Item",
    price: "$450",
  },
  {
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=200&h=200",
    name: "Cauliflower",
    category: "Food Item",
    price: "$190",
  },
];

export const notifications = [
  {
    id: 1,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    title: "Roman Joined the Team!",
    message: "Congratulate him",
  },
  {
    id: 2,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    title: "New message received",
    message: "Salma sent you new message",
  },
  {
    id: 3,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    title: "New Payment received",
    message: "Check your earnings",
  },
  {
    id: 4,
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    title: "Jolly completed tasks",
    message: "Assign her new tasks",
  },
];


// ------------------------------
// DASHBOARD STATS
// ------------------------------
export const earningCards = [
  {
    title: "Earnings",
    amount: "$63,448.78",
    icon: "DollarSign",
    iconBg: "#E0F7FA",
    iconColor: "#00ACC1",
  },
  {
    title: "Customers",
    amount: "39,354",
    percentage: "-4%",
    icon: "Users",
    iconBg: "#E8F5E9",
    iconColor: "#43A047",
  },
  {
    title: "Products",
    amount: "4,396",
    percentage: "+23%",
    icon: "Box",
    iconBg: "#FFF8E1",
    iconColor: "#FDD835",
  },
  {
    title: "Sales",
    amount: "423,39",
    percentage: "+38%",
    icon: "BarChart3",
    iconBg: "#FFF3E0",
    iconColor: "#FB8C00",
  },
];

export const recentTransactions = [
  {
    title: "Paypal Transfer",
    amount: "+$350",
    status: "Added",
    icon: "Wallet",
    iconColor: "#00ACC1",
    iconBg: "#E0F7FA",
    desc: "Money Added",
  },
  {
    title: "Wallet Payment",
    amount: "-$560",
    status: "Bill",
    icon: "Shield",
    iconColor: "#4CAF50",
    iconBg: "#E8F5E9",
    desc: "Bill Payment",
  },
  {
    title: "Credit Card Refund",
    amount: "+$350",
    status: "Reversed",
    icon: "CreditCard",
    iconColor: "#FDD835",
    iconBg: "#FFF8E1",
    desc: "Money reversed",
  },
  {
    title: "Bank Transfer",
    amount: "+$350",
    status: "Added",
    icon: "ArrowUpRight",
    iconColor: "#E57373",
    iconBg: "#FFEBEE",
    desc: "Money Added",
  },
];

export const weeklyStats = [
  {
    title: "Top Sales",
    amount: "-$560",
    desc: "Johnathan Doe",
    icon: "ShoppingCart",
    iconBg: "#FB9678",
    pcColor: "red-600",
  },
  {
    title: "Best Seller",
    amount: "+$230",
    desc: "MaterialPro Admin",
    icon: "Star",
    iconBg: "#FDD835",
    pcColor: "green-600",
  },
  {
    title: "Most Commented",
    amount: "+$156",
    desc: "Ample Admin",
    icon: "MessageCircle",
    iconBg: "#00C292",
    pcColor: "green-600",
  },
];

export const themeColors = [
  { name: 'blue-theme', color: '#1A97F5' },
  { name: 'green-theme', color: '#03C9D7' },
  { name: 'purple-theme', color: '#7352FF' },
  { name: 'red-theme', color: '#FF5C8E' },
  { name: 'indigo-theme', color: '#1E4DB7' },
  { color: '#FB9678', name: 'orange-theme' },
];

// ------------------------------
// GRID DATA (Orders, Employees, Customers)
// ------------------------------

export const ordersGrid = [
  { headerText: 'Image', field: 'ProductImage', textAlign: 'Center', width: '120' },
  { headerText: 'Item', field: 'OrderItems', width: '150', textAlign: 'Center' },
  { headerText: 'Customer Name', field: 'CustomerName', width: '150', textAlign: 'Center' },
  { headerText: 'Total Amount', field: 'TotalAmount', format: 'C2', textAlign: 'Center', width: '150' },
  { headerText: 'Status', field: 'Status', textAlign: 'Center', width: '120' },
  { headerText: 'Order ID', field: 'OrderID', width: '120', textAlign: 'Center' },
  { headerText: 'Location', field: 'Location', width: '150', textAlign: 'Center' },
];

export const ordersData = [
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalAmount: 32.38,
    OrderItems: 'Fresh Tomato',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=50&q=80',
  },
  {
    OrderID: 345653,
    CustomerName: 'Carson Darrin',
    TotalAmount: 56.34,
    OrderItems: 'Butter Scotch',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=50&q=80',
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    TotalAmount: 93.31,
    OrderItems: 'Candy Gucci',
    Location: 'New York',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage: 'https://images.unsplash.com/photo-1582039325967-68b4f9804579?auto=format&fit=crop&w=50&q=80',
  },
  {
    OrderID: 893486,
    CustomerName: 'Anika Viseer',
    TotalAmount: 93.31,
    OrderItems: 'Night Lamp',
    Location: 'Germany',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage: 'https://images.unsplash.com/photo-1507473888900-52e1adad54cd?auto=format&fit=crop&w=50&q=80',
  },
  {
    OrderID: 748975,
    CustomerName: 'Miron Vitold',
    TotalAmount: 23.99,
    OrderItems: 'Healthcare Erbology',
    Location: 'Spain',
    Status: 'rejected',
    StatusBg: 'red',
    ProductImage: 'https://images.unsplash.com/photo-1556228720-19de77d69e66?auto=format&fit=crop&w=50&q=80',
  },
];

export const customersGrid = [
  { type: 'checkbox', width: '50' },
  { headerText: 'Name', field: 'CustomerName', width: '150', textAlign: 'Center' },
  { field: 'ProjectName', headerText: 'Project Name', width: '150', textAlign: 'Center' },
  { field: 'Status', headerText: 'Status', width: '130', textAlign: 'Center' },
  { field: 'Weeks', headerText: 'Weeks', width: '100', format: 'C2', textAlign: 'Center' },
  { field: 'Budget', headerText: 'Budget', width: '100', format: 'yMd', textAlign: 'Center' },
  { field: 'Location', headerText: 'Location', width: '150', textAlign: 'Center' },
  { field: 'CustomerID', headerText: 'Customer ID', width: '120', textAlign: 'Center', isPrimaryKey: true },
];

export const customersData = [
  {
    CustomerID: 1001,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage: 'https://i.pravatar.cc/150?img=1',
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1002,
    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage: 'https://i.pravatar.cc/150?img=2',
    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    CustomerID: 1003,
    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage: 'https://i.pravatar.cc/150?img=3',
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
];

export const employeesGrid = [
  { headerText: 'Employee', field: 'Name', width: '150', textAlign: 'Center' },
  { field: 'Title', headerText: 'Designation', width: '170', textAlign: 'Center' },
  { headerText: 'Country', field: 'Country', width: '120', textAlign: 'Center' },
  { field: 'HireDate', headerText: 'Hire Date', width: '135', format: 'yMd', textAlign: 'Center' },
  { field: 'ReportsTo', headerText: 'Reports To', width: '120', textAlign: 'Center' },
  { field: 'EmployeeID', headerText: 'Employee ID', width: '125', textAlign: 'Center' },
];

export const employeesData = [
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: 'https://i.pravatar.cc/150?img=1',
  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: 'https://i.pravatar.cc/150?img=2',
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: 'https://i.pravatar.cc/150?img=3',
  },
];

// ------------------------------
// APP DATA (Kanban, Calendar, Editor)
// ------------------------------

export const kanbanData = [
  {
    Id: 'Task 1',
    Title: 'Task - 29001',
    Status: 'Open',
    Summary: 'Analyze the new requirements gathered from the customer.',
    Type: 'Story',
    Priority: 'Low',
    Tags: 'Analyze,Customer',
    Estimate: 3.5,
    Assignee: 'Nancy Davloio',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-nancy-davloio',
  },
  {
    Id: 'Task 2',
    Title: 'Task - 29002',
    Status: 'InProgress',
    Summary: 'Improve application performance',
    Type: 'Improvement',
    Priority: 'Normal',
    Tags: 'Improvement',
    Estimate: 6,
    Assignee: 'Andrew Fuller',
    RankId: 1,
    Color: '#673AB8',
    ClassName: 'e-improvement, e-normal, e-andrew-fuller',
  },
  {
    Id: 'Task 3',
    Title: 'Task - 29003',
    Status: 'Open',
    Summary: 'Arrange a web meeting with the customer to get new requirements.',
    Type: 'Others',
    Priority: 'Critical',
    Tags: 'Meeting',
    Estimate: 5.5,
    Assignee: 'Janet Leverling',
    RankId: 2,
    Color: '#1F88E5',
    ClassName: 'e-others, e-critical, e-janet-leverling',
  },
];

export const scheduleData = [
  {
    Id: 1,
    Subject: 'Explosion of Betelgeuse Star',
    Location: 'Space Center USA',
    StartTime: '2024-01-10T04:00:00.000Z',
    EndTime: '2024-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 2,
    Subject: 'Thule Air Crash Report',
    Location: 'Newyork City',
    StartTime: '2024-01-11T06:30:00.000Z',
    EndTime: '2024-01-11T08:30:00.000Z',
    CategoryColor: '#357cd2',
  },
];

// ------------------------------
// CHART DATA (Line, Sparkline, Stacked, Pie, Financial)
// ------------------------------

export const lineChartData = [
  [
    { x: new Date(2005, 0, 1), y: 21 },
    { x: new Date(2006, 0, 1), y: 24 },
    { x: new Date(2007, 0, 1), y: 36 },
    { x: new Date(2008, 0, 1), y: 38 },
    { x: new Date(2009, 0, 1), y: 54 },
    { x: new Date(2010, 0, 1), y: 57 },
    { x: new Date(2011, 0, 1), y: 70 },
  ],
  [
    { x: new Date(2005, 0, 1), y: 28 },
    { x: new Date(2006, 0, 1), y: 44 },
    { x: new Date(2007, 0, 1), y: 48 },
    { x: new Date(2008, 0, 1), y: 50 },
    { x: new Date(2009, 0, 1), y: 66 },
    { x: new Date(2010, 0, 1), y: 78 },
    { x: new Date(2011, 0, 1), y: 84 },
  ],
  [
    { x: new Date(2005, 0, 1), y: 10 },
    { x: new Date(2006, 0, 1), y: 20 },
    { x: new Date(2007, 0, 1), y: 30 },
    { x: new Date(2008, 0, 1), y: 39 },
    { x: new Date(2009, 0, 1), y: 50 },
    { x: new Date(2010, 0, 1), y: 70 },
    { x: new Date(2011, 0, 1), y: 100 },
  ],
];

export const lineCustomSeries = [
  { dataSource: lineChartData[0], xName: 'x', yName: 'y', name: 'Germany', width: '2', marker: { visible: true, width: 10, height: 10 }, type: 'Line' },
  { dataSource: lineChartData[1], xName: 'x', yName: 'y', name: 'England', width: '2', marker: { visible: true, width: 10, height: 10 }, type: 'Line' },
  { dataSource: lineChartData[2], xName: 'x', yName: 'y', name: 'India', width: '2', marker: { visible: true, width: 10, height: 10 }, type: 'Line' },
];

export const areaChartData = [
  [
    { x: new Date(2002, 0, 1), y: 2.2 },
    { x: new Date(2003, 0, 1), y: 3.4 },
    { x: new Date(2004, 0, 1), y: 2.8 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 2.5 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 2 },
    { x: new Date(2003, 0, 1), y: 1.7 },
    { x: new Date(2004, 0, 1), y: 1.8 },
    { x: new Date(2005, 0, 1), y: 2.1 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 1.7 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 0.8 },
    { x: new Date(2003, 0, 1), y: 1.3 },
    { x: new Date(2004, 0, 1), y: 1.1 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2 },
    { x: new Date(2007, 0, 1), y: 1.7 },
  ],
];

export const areaCustomSeries = [
  { dataSource: areaChartData[0], xName: 'x', yName: 'y', name: 'USA', opacity: '0.8', type: 'SplineArea', width: '2' },
  { dataSource: areaChartData[1], xName: 'x', yName: 'y', name: 'France', opacity: '0.8', type: 'SplineArea', width: '2' },
  { dataSource: areaChartData[2], xName: 'x', yName: 'y', name: 'Germany', opacity: '0.8', type: 'SplineArea', width: '2' },
];

export const barChartData = [
  [
    { x: 'USA', y: 46 },
    { x: 'GBR', y: 27 },
    { x: 'CHN', y: 26 },
  ],
  [
    { x: 'USA', y: 37 },
    { x: 'GBR', y: 23 },
    { x: 'CHN', y: 18 },
  ],
  [
    { x: 'USA', y: 38 },
    { x: 'GBR', y: 17 },
    { x: 'CHN', y: 26 },
  ],
];

export const barCustomSeries = [
  { dataSource: barChartData[0], xName: 'x', yName: 'y', name: 'Gold', type: 'Column', marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } } },
  { dataSource: barChartData[1], xName: 'x', yName: 'y', name: 'Silver', type: 'Column', marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } } },
  { dataSource: barChartData[2], xName: 'x', yName: 'y', name: 'Bronze', type: 'Column', marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } } },
];

export const pieChartData = [
  { x: 'Labour', y: 18, text: '18%' },
  { x: 'Legal', y: 8, text: '8%' },
  { x: 'Production', y: 15, text: '15%' },
  { x: 'License', y: 11, text: '11%' },
  { x: 'Facilities', y: 18, text: '18%' },
  { x: 'Taxes', y: 14, text: '14%' },
  { x: 'Insurance', y: 16, text: '16%' },
];

export const contextMenuItems = [
  'AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending',
  'Copy', 'Edit', 'Delete', 'Save', 'Cancel',
  'PdfExport', 'ExcelExport', 'CsvExport',
  'FirstPage', 'PrevPage', 'LastPage', 'NextPage',
];

export const ecomPieChartData = [
  { x: '2018', y: 18, text: '35%' },
  { x: '2019', y: 18, text: '15%' },
  { x: '2020', y: 18, text: '25%' },
  { x: '2021', y: 18, text: '25%' },
];

export const stackedChartData = [
  [
    { x: 'Jan', y: 111.1 },
    { x: 'Feb', y: 127.3 },
    { x: 'Mar', y: 143.4 },
    { x: 'Apr', y: 159.9 },
    { x: 'May', y: 159.9 },
    { x: 'Jun', y: 159.9 },
    { x: 'July', y: 159.9 },
  ],
  [
    { x: 'Jan', y: 111.1 },
    { x: 'Feb', y: 127.3 },
    { x: 'Mar', y: 143.4 },
    { x: 'Apr', y: 159.9 },
    { x: 'May', y: 159.9 },
    { x: 'Jun', y: 159.9 },
    { x: 'July', y: 159.9 },
  ],
];

export const stackedCustomSeries = [
  { dataSource: stackedChartData[0], xName: 'x', yName: 'y', name: 'Budget', type: 'StackingColumn', background: 'blue' },
  { dataSource: stackedChartData[1], xName: 'x', yName: 'y', name: 'Expense', type: 'StackingColumn', background: 'red' },
];

export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: 'Rotate45',
  valueType: 'Category',
};

export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 100,
  maximum: 400,
  interval: 100,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}',
};

export const financialChartData = [
  { x: new Date('2017-01-01'), open: 120, high: 125, low: 118, close: 122, volume: 100000 },
  { x: new Date('2017-01-02'), open: 122, high: 130, low: 120, close: 128, volume: 150000 },
  { x: new Date('2017-01-03'), open: 128, high: 135, low: 125, close: 132, volume: 120000 },
  { x: new Date('2017-01-04'), open: 132, high: 134, low: 128, close: 130, volume: 110000 },
  { x: new Date('2017-01-05'), open: 130, high: 138, low: 129, close: 136, volume: 160000 },
  { x: new Date('2017-01-06'), open: 136, high: 140, low: 135, close: 139, volume: 180000 },
];

export const sparklineAreaData = [
  { x: 1, yval: 2 },
  { x: 2, yval: 6 },
  { x: 3, yval: 8 },
  { x: 4, yval: 5 },
  { x: 5, yval: 10 },
];

export const PyramidData = [
  { x: 'Sweet Treats', y: 120, text: '120 cal' },
  { x: 'Milk, Youghnut, Cheese', y: 435, text: '435 cal' },
  { x: 'Vegetables', y: 470, text: '470 cal' },
  { x: 'Meat, Poultry, Fish', y: 475, text: '475 cal' },
  { x: 'Fruits', y: 520, text: '520 cal' },
  { x: 'Bread, Rice, Pasta', y: 930, text: '930 cal' },
];

// ------------------------------
// CHART CONFIGURATIONS (X/Y Axis)
// ------------------------------

export const areaPrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  majorGridLines: { width: 0 },
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  labelStyle: { color: 'gray' },
};

export const areaPrimaryYAxis = {
  labelFormat: '{value}%',
  lineStyle: { width: 0 },
  maximum: 4,
  interval: 1,
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelStyle: { color: 'gray' },
};

export const barPrimaryXAxis = {
  valueType: 'Category',
  interval: 1,
  majorGridLines: { width: 0 },
};

export const barPrimaryYAxis = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  labelStyle: { color: 'transparent' },
};

export const FinancialPrimaryXAxis = {
  valueType: 'DateTime',
  minimum: new Date('2016, 12, 31'),
  maximum: new Date('2017, 9, 30'),
  crosshairTooltip: { enable: true },
  majorGridLines: { width: 0 },
};

export const FinancialPrimaryYAxis = {
  title: 'Price',
  minimum: 100,
  maximum: 180,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
};

export const LinePrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 },
  background: 'white',
};

export const LinePrimaryYAxis = {
  labelFormat: '{value}%',
  rangePadding: 'None',
  minimum: 0,
  maximum: 100,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

export const ColorMappingPrimaryXAxis = {
  valueType: 'Category',
  majorGridLines: { width: 0 },
  title: 'Months',
};

export const ColorMappingPrimaryYAxis = {
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}°C',
  title: 'Temperature',
};

export const colorMappingData = [
  [
    { x: 'Jan', y: 6.96 },
    { x: 'Feb', y: 8.9 },
    { x: 'Mar', y: 12 },
    { x: 'Apr', y: 17.5 },
    { x: 'May', y: 22.1 },
    { x: 'June', y: 25 },
    { x: 'July', y: 29.4 },
    { x: 'Aug', y: 29.6 },
    { x: 'Sep', y: 25.8 },
    { x: 'Oct', y: 21.1 },
    { x: 'Nov', y: 15.5 },
    { x: 'Dec', y: 9.9 },
  ],
  ['#FFFF99'],
  ['#FFA500'],
  ['#FF4040'],
];

export const rangeColorMapping = [
  { label: '1°C to 10°C', start: '1', end: '10', colors: colorMappingData[1] },
  { label: '11°C to 20°C', start: '11', end: '20', colors: colorMappingData[2] },
  { label: '21°C to 30°C', start: '21', end: '30', colors: colorMappingData[3] },
];