import { useState } from "react";
import {
  Users,
  UserPlus,
  UserMinus,
  TrendingUp,
  Search,
  Bell,
  Settings,
  LogOut,
  LayoutDashboard,
  Briefcase,
  Calendar,
  MoreVertical,
  Filter,
  Download,
  Plus,
  CheckCircle2,
  Clock,
  AlertCircle,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  Loader2,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Building2,
  Star,
  FileText
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { motion, AnimatePresence } from "motion/react";

// Mock Data
const stats = [
  {
    title: "Total Employees",
    value: "1,248",
    change: "+12% from last month",
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "New Hires",
    value: "42",
    change: "+5% from last month",
    icon: UserPlus,
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  {
    title: "Turnover Rate",
    value: "2.4%",
    change: "-0.8% from last month",
    icon: UserMinus,
    color: "text-rose-600",
    bg: "bg-rose-50"
  },
  {
    title: "Avg. Performance",
    value: "4.2/5",
    change: "+0.3 from last year",
    icon: TrendingUp,
    color: "text-amber-600",
    bg: "bg-amber-50"
  }
];

const employeeData = [
  {
    id: "EMP001",
    name: "Sarah Jenkins",
    role: "Senior Product Designer",
    department: "Design",
    status: "Active",
    email: "sarah.j@company.com",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    phone: "+1 (555) 123-4567",
    address: "789 Design Blvd, San Francisco, CA",
    joinedDate: "Jan 12, 2022",
    jobHistory: [
      { role: "Senior Product Designer", period: "2023 - Present", company: "Jayshaw ventures" },
      { role: "Product Designer", period: "2022 - 2023", company: "Jayshaw ventures" },
      { role: "UI Designer", period: "2020 - 2022", company: "Creative Studio" }
    ],
    performanceReviews: [
      { date: "Dec 2023", rating: "Exceeds Expectations", comment: "Outstanding leadership in the rebranding project." },
      { date: "Jun 2023", rating: "Meets Expectations", comment: "Consistent high-quality output." }
    ]
  },
  {
    id: "EMP002",
    name: "Michael Chen",
    role: "Full Stack Developer",
    department: "Engineering",
    status: "Active",
    email: "m.chen@company.com",
    avatar: "https://i.pravatar.cc/150?u=michael",
    phone: "+1 (555) 987-6543",
    address: "456 Coder Way, Palo Alto, CA",
    joinedDate: "Mar 15, 2021",
    jobHistory: [
      { role: "Full Stack Developer", period: "2021 - Present", company: "Jayshaw ventures" },
      { role: "Backend Developer", period: "2019 - 2021", company: "Tech Solutions" }
    ],
    performanceReviews: [
      { date: "Dec 2023", rating: "Exceeds Expectations", comment: "Key contributor to the core API optimization." }
    ]
  },
  {
    id: "EMP003",
    name: "Elena Rodriguez",
    role: "HR Manager",
    department: "Human Resources",
    status: "On Leave",
    email: "elena.r@company.com",
    avatar: "https://i.pravatar.cc/150?u=elena",
    phone: "+1 (555) 246-8135",
    address: "321 People St, Austin, TX",
    joinedDate: "Nov 01, 2020",
    jobHistory: [
      { role: "HR Manager", period: "2020 - Present", company: "Jayshaw ventures" }
    ],
    performanceReviews: [
      { date: "Dec 2023", rating: "Meets Expectations", comment: "Effectively managed the annual hiring plan." }
    ]
  },
  {
    id: "EMP004",
    name: "David Smith",
    role: "Marketing Specialist",
    department: "Marketing",
    status: "Active",
    email: "david.s@company.com",
    avatar: "https://i.pravatar.cc/150?u=david",
    phone: "+1 (555) 135-7924",
    address: "159 Market Ave, New York, NY",
    joinedDate: "Jul 20, 2022",
    jobHistory: [
      { role: "Marketing Specialist", period: "2022 - Present", company: "Jayshaw ventures" }
    ],
    performanceReviews: [
      { date: "Dec 2023", rating: "Meets Expectations", comment: "Successful execution of the Q4 campaign." }
    ]
  },
  {
    id: "EMP005",
    name: "Jessica Wu",
    role: "Data Analyst",
    department: "Engineering",
    status: "Active",
    email: "jessica.w@company.com",
    avatar: "https://i.pravatar.cc/150?u=jessica",
    phone: "+1 (555) 369-2581",
    address: "753 Data Dr, Seattle, WA",
    joinedDate: "Feb 10, 2023",
    jobHistory: [
      { role: "Data Analyst", period: "2023 - Present", company: "Jayshaw ventures" }
    ],
    performanceReviews: [
      { date: "Dec 2023", rating: "Exceeds Expectations", comment: "Transformed our reporting with automated dashboards." }
    ]
  }
];

const growthData = [
  { name: "Jan", employees: 1100 },
  { name: "Feb", employees: 1150 },
  { name: "Mar", employees: 1180 },
  { name: "Apr", employees: 1210 },
  { name: "May", employees: 1230 },
  { name: "Jun", employees: 1248 }
];

const departmentData = [
  { name: "Engineering", value: 450 },
  { name: "Design", value: 180 },
  { name: "Marketing", value: 220 },
  { name: "Sales", value: 300 },
  { name: "HR", value: 98 }
];

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

const activities = [
  {
    id: 1,
    type: "hire",
    user: "Sarah Jenkins",
    action: "joined the Engineering team",
    time: "2 hours ago",
    icon: UserPlus,
    iconColor: "text-emerald-500"
  },
  {
    id: 2,
    type: "leave",
    user: "Elena Rodriguez",
    action: "started maternity leave",
    time: "5 hours ago",
    icon: Clock,
    iconColor: "text-blue-500"
  },
  {
    id: 3,
    type: "alert",
    user: "System",
    action: "Performance reviews are due in 3 days",
    time: "1 day ago",
    icon: AlertCircle,
    iconColor: "text-rose-500"
  }
];

const payrollStats = [
  {
    title: "Total Payroll",
    value: "$428,500",
    change: "+4.2%",
    trend: "up",
    icon: Wallet,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "Avg. Net Salary",
    value: "$5,240",
    change: "+1.5%",
    trend: "up",
    icon: DollarSign,
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  {
    title: "Tax Withholding",
    value: "$84,200",
    change: "+2.1%",
    trend: "up",
    icon: TrendingUp,
    color: "text-amber-600",
    bg: "bg-amber-50"
  },
  {
    title: "Benefits Cost",
    value: "$32,100",
    change: "-0.5%",
    trend: "down",
    icon: Briefcase,
    color: "text-purple-600",
    bg: "bg-purple-50"
  }
];

const payrollHistory = [
  { id: "PAY-001", period: "June 2024", amount: "$428,500", status: "Processed", date: "Jun 30, 2024" },
  { id: "PAY-002", period: "May 2024", amount: "$412,200", status: "Processed", date: "May 31, 2024" },
  { id: "PAY-003", period: "April 2024", amount: "$408,900", status: "Processed", date: "Apr 30, 2024" },
  { id: "PAY-004", period: "March 2024", amount: "$395,400", status: "Processed", date: "Mar 31, 2024" },
  { id: "PAY-005", period: "February 2024", amount: "$392,100", status: "Processed", date: "Feb 28, 2024" }
];

const payrollTrendData = [
  { month: "Jan", amount: 380000 },
  { month: "Feb", amount: 392100 },
  { month: "Mar", amount: 395400 },
  { month: "Apr", amount: 408900 },
  { month: "May", amount: 412200 },
  { month: "Jun", amount: 428500 }
];

const recruitmentStats = [
  { title: "Open Positions", value: "12", change: "+2 this month", icon: Briefcase, color: "text-blue-600", bg: "bg-blue-50" },
  { title: "Active Candidates", value: "156", change: "+24 this week", icon: Users, color: "text-emerald-600", bg: "bg-emerald-50" },
  { title: "Time to Hire", value: "18 days", change: "-2 days", icon: Clock, color: "text-amber-600", bg: "bg-amber-50" },
  { title: "Interviews Today", value: "8", change: "4 scheduled", icon: Calendar, color: "text-purple-600", bg: "bg-purple-50" }
];

const attendanceStats = [
  { title: "Present Today", value: "1,180", change: "94.5%", icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-50" },
  { title: "On Leave", value: "42", change: "3.4%", icon: Clock, color: "text-blue-600", bg: "bg-blue-50" },
  { title: "Late Arrivals", value: "12", change: "0.9%", icon: AlertCircle, color: "text-rose-600", bg: "bg-rose-50" },
  { title: "Remote", value: "340", change: "27.2%", icon: Users, color: "text-slate-600", bg: "bg-slate-50" }
];

const performanceStats = [
  { title: "Avg. Score", value: "4.2/5", change: "+0.3", icon: TrendingUp, color: "text-blue-600", bg: "bg-blue-50" },
  { title: "Reviews Done", value: "88%", change: "240/272", icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-50" },
  { title: "Top Performers", value: "34", change: "12.5%", icon: Users, color: "text-amber-600", bg: "bg-amber-50" },
  { title: "Under Review", value: "8", change: "2.9%", icon: AlertCircle, color: "text-rose-600", bg: "bg-rose-50" }
];

const jobPostings = [
  { id: "JOB001", title: "Senior React Developer", department: "Engineering", type: "Full-time", candidates: 45, status: "Active" },
  { id: "JOB002", title: "Product Designer", department: "Design", type: "Full-time", candidates: 28, status: "Active" },
  { id: "JOB003", title: "HR Specialist", department: "HR", type: "Contract", candidates: 12, status: "Closed" },
  { id: "JOB004", title: "Marketing Manager", department: "Marketing", type: "Full-time", candidates: 32, status: "Active" }
];

export default function App() {
  const [activeView, setActiveView] = useState("dashboard");
  const [selectedEmployeeProfile, setSelectedEmployeeProfile] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  // Global App State
  const [companyName, setCompanyName] = useState("Jayshaw ventures");
  const [employees, setEmployees] = useState(employeeData);
  const [jobs, setJobs] = useState(jobPostings);
  const [dashboardStats, setDashboardStats] = useState(stats);
  const [currentRecruitmentStats, setCurrentRecruitmentStats] = useState(recruitmentStats);
  const [currentAttendanceStats, setCurrentAttendanceStats] = useState(attendanceStats);
  const [currentPerformanceStats, setCurrentPerformanceStats] = useState(performanceStats);
  const [currentGrowthData, setCurrentGrowthData] = useState(growthData);
  const [currentDepartmentData, setCurrentDepartmentData] = useState(departmentData);
  const [currentActivities, setCurrentActivities] = useState(activities);

  // Editing State
  const [editingEmployee, setEditingEmployee] = useState<any>(null);
  const [isAddingEmployee, setIsAddingEmployee] = useState(false);
  const [editingJob, setEditingJob] = useState<any>(null);
  const [isAddingJob, setIsAddingJob] = useState(false);
  const [editingPayroll, setEditingPayroll] = useState<any>(null);
  const [editingStat, setEditingStat] = useState<{ category: string, index: number, data: any } | null>(null);
  const [editingChart, setEditingChart] = useState<{ type: string, data: any } | null>(null);

  // Settings State
  const [hrEmail, setHrEmail] = useState("hr@jayshaw.com");
  const [companyAddress, setCompanyAddress] = useState("123 Innovation Drive, Tech City, TC 12345");
  const [notifications, setNotifications] = useState({
    "Email on new hire": true,
    "Alert on leave request": true,
    "Payroll processing reminder": true,
    "Performance review alerts": false
  });

  // Payroll State
  const [currentPayrollStats, setCurrentPayrollStats] = useState(payrollStats);
  const [currentPayrollHistory, setCurrentPayrollHistory] = useState(payrollHistory);
  const [currentPayrollTrendData, setCurrentPayrollTrendData] = useState(payrollTrendData);

  const handleUpdateEmployee = (updatedEmp: any) => {
    setEmployees(prev => prev.map(emp => emp.id === updatedEmp.id ? updatedEmp : emp));
    setEditingEmployee(null);
  };

  const handleAddEmployee = (newEmp: any) => {
    const id = `EMP${String(employees.length + 1).padStart(3, '0')}`;
    setEmployees(prev => [...prev, { ...newEmp, id, status: "Active", avatar: `https://i.pravatar.cc/150?u=${id}` }]);
    setIsAddingEmployee(false);
    // Update total employees stat
    setDashboardStats(prev => prev.map(s => s.title === "Total Employees" ? { ...s, value: (parseInt(s.value.replace(',', '')) + 1).toLocaleString() } : s));
  };

  const handleTerminateEmployee = (id: string) => {
    setEmployees(prev => prev.map(emp => emp.id === id ? { ...emp, status: "Terminated" } : emp));
  };

  const handleUpdateJob = (updatedJob: any) => {
    setJobs(prev => prev.map(job => job.id === updatedJob.id ? updatedJob : job));
    setEditingJob(null);
  };

  const handleAddJob = (newJob: any) => {
    const id = `JOB${String(jobs.length + 1).padStart(3, '0')}`;
    setJobs(prev => [...prev, { ...newJob, id, status: "Active", candidates: 0 }]);
    setIsAddingJob(false);
  };

  const handleUpdatePayroll = (updatedPay: any) => {
    setCurrentPayrollHistory(prev => prev.map(pay => pay.id === updatedPay.id ? updatedPay : pay));
    setEditingPayroll(null);
  };

  const handleUpdateStat = (updatedStat: any) => {
    if (!editingStat) return;
    const { category, index } = editingStat;
    const setterMap: Record<string, any> = {
      dashboard: setDashboardStats,
      recruitment: setCurrentRecruitmentStats,
      attendance: setCurrentAttendanceStats,
      performance: setCurrentPerformanceStats,
      payroll: setCurrentPayrollStats
    };
    setterMap[category](prev => prev.map((s, i) => i === index ? { ...s, ...updatedStat } : s));
    setEditingStat(null);
  };

  const handleUpdateChartData = (newData: any) => {
    if (!editingChart) return;
    if (editingChart.type === "growth") setCurrentGrowthData(newData);
    if (editingChart.type === "department") setCurrentDepartmentData(newData);
    setEditingChart(null);
  };

  const handleRunPayroll = () => {
    setIsProcessing(true);

    // Simulate processing delay
    setTimeout(() => {
      const nextMonth = "July 2024";
      const nextAmount = 435000;
      const nextId = `PAY-00${currentPayrollHistory.length + 1}`;

      // Update History
      const newHistoryEntry = {
        id: nextId,
        period: nextMonth,
        amount: `$${nextAmount.toLocaleString()}`,
        status: "Processed",
        date: "Jul 31, 2024"
      };

      setCurrentPayrollHistory([newHistoryEntry, ...currentPayrollHistory]);

      // Update Trend Data
      setCurrentPayrollTrendData([
        ...currentPayrollTrendData,
        { month: "Jul", amount: nextAmount }
      ]);

      // Update Stats (slightly increase values)
      setCurrentPayrollStats(prev => prev.map(stat => {
        if (stat.title === "Total Payroll") {
          return { ...stat, value: `$${nextAmount.toLocaleString()}`, change: "+1.5%" };
        }
        return stat;
      }));

      setIsProcessing(false);
    }, 2000);
  };

  const handleExport = () => {
    setIsExporting(true);

    // Prepare data based on current view
    const reportData = {
      reportTitle: `Jayshaw Ventures - ${activeView.charAt(0).toUpperCase() + activeView.slice(1)} Report`,
      generatedAt: new Date().toLocaleString(),
      organization: "Jayshaw ventures",
      data: {}
    };

    if (activeView === "dashboard") {
      reportData.data = { stats, employeeData, growthData, departmentData, activities };
    } else if (activeView === "payroll") {
      reportData.data = { currentPayrollStats, currentPayrollHistory, currentPayrollTrendData };
    } else if (activeView === "recruitment") {
      reportData.data = { recruitmentStats, jobPostings };
    } else if (activeView === "attendance") {
      reportData.data = { attendanceStats };
    } else if (activeView === "performance") {
      reportData.data = { performanceStats };
    }

    // Simulate export delay for better UX
    setTimeout(() => {
      const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `Jayshaw_Ventures_${activeView}_${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setIsExporting(false);
    }, 1500);
  };

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col bg-white border-r border-slate-200">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
            <Users size={24} />
          </div>
          <h1 className="font-bold text-xl tracking-tight">{companyName}</h1>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          <NavItem
            icon={LayoutDashboard}
            label="Dashboard"
            active={activeView === "dashboard"}
            onClick={() => setActiveView("dashboard")}
          />
          <NavItem
            icon={Users}
            label="Employees"
            active={activeView === "employees"}
            onClick={() => setActiveView("employees")}
          />
          <NavItem
            icon={DollarSign}
            label="Payroll"
            active={activeView === "payroll"}
            onClick={() => setActiveView("payroll")}
          />
          <NavItem
            icon={Briefcase}
            label="Recruitment"
            active={activeView === "recruitment"}
            onClick={() => setActiveView("recruitment")}
          />
          <NavItem
            icon={Calendar}
            label="Attendance"
            active={activeView === "attendance"}
            onClick={() => setActiveView("attendance")}
          />
          <NavItem
            icon={TrendingUp}
            label="Performance"
            active={activeView === "performance"}
            onClick={() => setActiveView("performance")}
          />
          <NavItem
            icon={Settings}
            label="Settings"
            active={activeView === "settings"}
            onClick={() => setActiveView("settings")}
          />
        </nav>

        <div className="p-4 mt-auto">
          <div className="bg-slate-50 rounded-xl p-4 flex items-center gap-3">
            <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
              <AvatarImage src="https://i.pravatar.cc/150?u=admin" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-semibold truncate">Jackyshaw</p>
              <p className="text-xs text-slate-500 truncate">HR Director</p>
            </div>
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-rose-600">
              <LogOut size={18} />
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 z-10">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <Input
                placeholder="Search employees, documents, tasks..."
                className="pl-10 bg-slate-50 border-none focus-visible:ring-1 focus-visible:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell size={20} className="text-slate-600" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
            </Button>
            <Separator orientation="vertical" className="h-6" />
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
              onClick={() => setIsAddingEmployee(true)}
            >
              <Plus size={18} />
              <span>Add Employee</span>
            </Button>
          </div>
        </header>

        {/* Modals */}
        <AnimatePresence>
          {(editingEmployee || isAddingEmployee || editingJob || isAddingJob || editingPayroll || editingStat || editingChart) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4"
            >
              <motion.div
                key={isAddingEmployee ? "add-emp" : editingEmployee?.id || isAddingJob ? "add-job" : editingJob?.id || editingPayroll?.id || editingStat?.data?.title || editingChart?.type || "modal"}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden"
              >
                <div className="p-6 border-b border-slate-100">
                  <h3 className="text-xl font-bold">
                    {isAddingEmployee ? "Add New Employee" :
                     editingEmployee ? "Edit Employee Details" :
                     isAddingJob ? "Create Job Posting" :
                     editingPayroll ? "Edit Payroll Record" :
                     editingStat ? `Edit ${editingStat.data.title}` :
                     editingChart ? "Edit Chart Data" : "Edit Details"}
                  </h3>
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const data = Object.fromEntries(formData.entries());
                    if (isAddingEmployee) handleAddEmployee(data);
                    else if (editingEmployee) handleUpdateEmployee({ ...editingEmployee, ...data });
                    else if (isAddingJob) handleAddJob(data);
                    else if (editingJob) handleUpdateJob({ ...editingJob, ...data });
                    else if (editingPayroll) handleUpdatePayroll({ ...editingPayroll, ...data });
                    else if (editingStat) handleUpdateStat(data);
                    else if (editingChart) {
                      try {
                        const parsed = JSON.parse(formData.get("chartJson") as string);
                        handleUpdateChartData(parsed);
                      } catch (err) {
                        console.warn("Invalid JSON format");
                      }
                    }
                  }}
                  className="p-6 space-y-4"
                >
                  {(editingEmployee || isAddingEmployee) ? (
                    <>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Full Name</label>
                        <Input name="name" defaultValue={editingEmployee?.name} required />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email Address</label>
                        <Input name="email" type="email" defaultValue={editingEmployee?.email} required />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Department</label>
                          <Input name="department" defaultValue={editingEmployee?.department} required />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Role</label>
                          <Input name="role" defaultValue={editingEmployee?.role} required />
                        </div>
                      </div>
                    </>
                  ) : editingPayroll ? (
                    <>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Period</label>
                        <Input name="period" defaultValue={editingPayroll?.period} required />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Amount</label>
                        <Input name="amount" defaultValue={editingPayroll?.amount} required />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Payment Date</label>
                        <Input name="date" defaultValue={editingPayroll?.date} required />
                      </div>
                    </>
                  ) : editingStat ? (
                    <>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Value</label>
                        <Input name="value" defaultValue={editingStat.data.value} required />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Change/Trend Text</label>
                        <Input name="change" defaultValue={editingStat.data.change} required />
                      </div>
                    </>
                  ) : editingChart ? (
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Data (JSON Format)</label>
                      <textarea
                        name="chartJson"
                        className="w-full h-48 p-3 text-xs font-mono border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        defaultValue={JSON.stringify(editingChart.data, null, 2)}
                      />
                    </div>
                  ) : (
                    <>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Job Title</label>
                        <Input name="title" defaultValue={editingJob?.title} required />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Department</label>
                          <Input name="department" defaultValue={editingJob?.department} required />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Type</label>
                          <Input name="type" defaultValue={editingJob?.type} placeholder="e.g. Full-time" required />
                        </div>
                      </div>
                    </>
                  )}
                  <div className="flex justify-end gap-3 pt-4">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => {
                        setEditingEmployee(null);
                        setIsAddingEmployee(false);
                        setEditingJob(null);
                        setIsAddingJob(false);
                        setEditingPayroll(null);
                        setEditingStat(null);
                        setEditingChart(null);
                      }}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-blue-600 text-white">
                      {isAddingEmployee || isAddingJob ? "Create" : "Save Changes"}
                    </Button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content Area */}
        <ScrollArea className="flex-1 p-8">
          <AnimatePresence mode="wait">
            {activeView === "dashboard" && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-7xl mx-auto space-y-8"
              >
                {/* Page Title */}
                <div className="flex items-end justify-between">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight">Dashboard Overview</h2>
                    <p className="text-slate-500 mt-1">Welcome back, Jackyshaw. Here's what's happening today.</p>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      className="gap-2"
                      onClick={handleExport}
                      disabled={isExporting}
                    >
                      {isExporting ? (
                        <Loader2 size={18} className="animate-spin" />
                      ) : (
                        <Download size={18} />
                      )}
                      {isExporting ? "Exporting..." : "Export"}
                    </Button>
                    <Select defaultValue="last-30">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="last-7">Last 7 days</SelectItem>
                        <SelectItem value="last-30">Last 30 days</SelectItem>
                        <SelectItem value="last-90">Last 90 days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {dashboardStats.map((stat, idx) => (
                    <motion.div
                      key={stat.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      onClick={() => setEditingStat({ category: "dashboard", index: idx, data: stat })}
                      className="cursor-pointer"
                    >
                      <Card className="border-none shadow-sm hover:shadow-md transition-shadow group">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className={`p-2 rounded-lg ${stat.bg} ${stat.color}`}>
                              <stat.icon size={24} />
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary" className="bg-slate-100 text-slate-600 font-medium">
                                {stat.change}
                              </Badge>
                              <Settings size={14} className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                            <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Charts & Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <Card className="lg:col-span-2 border-none shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Employee Growth</CardTitle>
                        <CardDescription>Headcount trend over the last 6 months</CardDescription>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-slate-400"
                          onClick={() => setEditingChart({ type: "growth", data: currentGrowthData })}
                        >
                          <Settings size={16} />
                        </Button>
                        <Tabs defaultValue="line" className="w-auto">
                          <TabsList className="grid w-24 grid-cols-2">
                            <TabsTrigger value="line" className="p-1">Line</TabsTrigger>
                            <TabsTrigger value="bar" className="p-1">Bar</TabsTrigger>
                          </TabsList>
                        </Tabs>
                      </div>
                    </CardHeader>
                    <CardContent className="h-[300px] pt-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={currentGrowthData}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                          <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#94a3b8", fontSize: 12 }}
                            dy={10}
                          />
                          <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#94a3b8", fontSize: 12 }}
                          />
                          <Tooltip
                            contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)" }}
                          />
                          <Line
                            type="monotone"
                            dataKey="employees"
                            stroke="#3b82f6"
                            strokeWidth={4}
                            dot={{ r: 4, fill: "#3b82f6", strokeWidth: 2, stroke: "#fff" }}
                            activeDot={{ r: 6, strokeWidth: 0 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Department Distribution</CardTitle>
                        <CardDescription>Employee count by department</CardDescription>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-slate-400"
                        onClick={() => setEditingChart({ type: "department", data: currentDepartmentData })}
                      >
                        <Settings size={16} />
                      </Button>
                    </CardHeader>
                    <CardContent className="h-[300px] flex flex-col items-center justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={currentDepartmentData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {currentDepartmentData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4 w-full px-4">
                        {departmentData.map((dept, idx) => (
                          <div key={dept.name} className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[idx % COLORS.length] }}></div>
                            <span className="text-xs text-slate-600 truncate">{dept.name}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Employee Table */}
                <Card className="border-none shadow-sm">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Recent Employees</CardTitle>
                      <CardDescription>Manage your team members and their status</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Filter size={14} />
                        Filter
                      </Button>
                      <Button variant="outline" size="sm">View All</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow className="hover:bg-transparent border-slate-100">
                          <TableHead className="w-[250px]">Employee</TableHead>
                          <TableHead>Department</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {employees.filter(e =>
                          e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          e.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          e.department.toLowerCase().includes(searchQuery.toLowerCase())
                        ).map((emp) => (
                          <TableRow key={emp.id} className="border-slate-50 hover:bg-slate-50/50 transition-colors">
                            <TableCell className="font-medium">
                              <div className="flex items-center gap-3">
                                <Avatar className="h-9 w-9">
                                  <AvatarImage src={emp.avatar} />
                                  <AvatarFallback>{emp.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                  <span className="text-sm font-semibold">{emp.name}</span>
                                  <span className="text-xs text-slate-500">{emp.email}</span>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline" className="font-normal border-slate-200">
                                {emp.department}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${emp.status === "Active" ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" : emp.status === "On Leave" ? "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]" : "bg-slate-400"}`}></div>
                                <span className="text-sm">{emp.status}</span>
                              </div>
                            </TableCell>
                            <TableCell className="text-slate-600 text-sm">{emp.role}</TableCell>
                            <TableCell className="text-right">
                              <DropdownMenu>
                                <DropdownMenuTrigger className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "h-8 w-8")}>
                                  <MoreVertical size={16} />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-40">
                                  <DropdownMenuGroup>
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuItem onClick={() => setEditingEmployee(emp)}>Edit Details</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => {
                                      setSelectedEmployeeProfile(emp);
                                      setActiveView("profile");
                                    }}>View Profile</DropdownMenuItem>
                                  </DropdownMenuGroup>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem
                                    className="text-rose-600"
                                    onClick={() => handleTerminateEmployee(emp.id)}
                                  >
                                    Terminate
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                {/* Recent Activity Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-8">
                  <Card className="lg:col-span-2 border-none shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>Stay updated with the latest HR events</CardDescription>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-blue-600"
                        onClick={() => {
                          const newActivity = {
                            id: Date.now(),
                            type: "alert",
                            user: "System",
                            action: "New custom activity added",
                            time: "Just now",
                            icon: AlertCircle,
                            iconColor: "text-blue-500"
                          };
                          setCurrentActivities([newActivity, ...currentActivities]);
                        }}
                      >
                        Add Activity
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {currentActivities.map((activity) => (
                          <div key={activity.id} className="flex gap-4 group">
                            <div className={`mt-1 p-2 rounded-full bg-slate-50 ${activity.iconColor}`}>
                              <activity.icon size={18} />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm">
                                <span className="font-semibold text-slate-900">{activity.user}</span>
                                {" "}{activity.action}
                              </p>
                              <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                                View
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity text-slate-300 hover:text-rose-500"
                                onClick={() => setCurrentActivities(prev => prev.filter(a => a.id !== activity.id))}
                              >
                                <Plus size={14} className="rotate-45" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-sm bg-blue-600 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400/20 rounded-full -ml-12 -mb-12 blur-xl"></div>
                    <CardHeader>
                      <CardTitle className="text-white">Quick Actions</CardTitle>
                      <CardDescription className="text-blue-100">Common tasks and shortcuts</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 relative z-10">
                      <QuickActionButton
                        icon={UserPlus}
                        label="Hire New Employee"
                        onClick={() => {
                          setActiveView("dashboard");
                          setIsAddingEmployee(true);
                        }}
                      />
                      <QuickActionButton
                        icon={Calendar}
                        label="Approve Time Off"
                        onClick={() => setActiveView("attendance")}
                      />
                      <QuickActionButton
                        icon={CheckCircle2}
                        label="Review Performance"
                        onClick={() => setActiveView("performance")}
                      />
                      <QuickActionButton
                        icon={AlertCircle}
                        label="Create Announcement"
                        onClick={() => console.warn("Announcement feature coming soon!")}
                      />
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            )}

            {activeView === "employees" && (
              <motion.div
                key="employees"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-7xl mx-auto space-y-8"
              >
                <div className="flex items-end justify-between">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight">Employee Directory</h2>
                    <p className="text-slate-500 mt-1">Manage and view all members of your organization.</p>
                  </div>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
                    onClick={() => setIsAddingEmployee(true)}
                  >
                    <Plus size={18} />
                    Add New Employee
                  </Button>
                </div>

                {/* Employee Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: "Total Employees", value: employees.length, icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
                    { title: "Active", value: employees.filter(e => e.status === "Active").length, icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-50" },
                    { title: "On Leave", value: employees.filter(e => e.status === "On Leave").length, icon: Calendar, color: "text-amber-600", bg: "bg-amber-50" },
                    { title: "Terminated", value: employees.filter(e => e.status === "Terminated").length, icon: AlertCircle, color: "text-slate-600", bg: "bg-slate-50" },
                  ].map((stat) => (
                    <Card key={stat.title} className="border-none shadow-sm">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                            <stat.icon size={24} />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                            <h3 className="text-2xl font-bold">{stat.value}</h3>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Full Employee Table */}
                <Card className="border-none shadow-sm overflow-hidden">
                  <CardHeader className="border-b border-slate-50 bg-white/50">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>All Employees</CardTitle>
                        <CardDescription>A complete list of everyone in the company</CardDescription>
                      </div>
                      <div className="relative w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <Input
                          placeholder="Search directory..."
                          className="pl-10 bg-slate-50 border-none"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow className="hover:bg-transparent border-slate-100">
                          <TableHead className="w-[300px]">Employee</TableHead>
                          <TableHead>Department</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {employees.filter(e =>
                          e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          e.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          e.department.toLowerCase().includes(searchQuery.toLowerCase())
                        ).map((emp) => (
                          <TableRow key={emp.id} className="border-slate-50 hover:bg-slate-50/50 transition-colors">
                            <TableCell className="font-medium">
                              <div className="flex items-center gap-3">
                                <Avatar className="h-9 w-9">
                                  <AvatarImage src={emp.avatar} />
                                  <AvatarFallback>{emp.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                  <span className="text-sm font-semibold">{emp.name}</span>
                                  <span className="text-xs text-slate-500">{emp.email}</span>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline" className="font-normal border-slate-200">
                                {emp.department}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${emp.status === "Active" ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" : emp.status === "On Leave" ? "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]" : "bg-slate-400"}`}></div>
                                <span className="text-sm">{emp.status}</span>
                              </div>
                            </TableCell>
                            <TableCell className="text-slate-600 text-sm">{emp.role}</TableCell>
                            <TableCell className="text-right">
                              <DropdownMenu>
                                <DropdownMenuTrigger className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "h-8 w-8")}>
                                  <MoreVertical size={16} />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-40">
                                  <DropdownMenuGroup>
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuItem onClick={() => setEditingEmployee(emp)}>Edit Details</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => {
                                      setSelectedEmployeeProfile(emp);
                                      setActiveView("profile");
                                    }}>View Profile</DropdownMenuItem>
                                  </DropdownMenuGroup>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem
                                    className="text-rose-600"
                                    onClick={() => handleTerminateEmployee(emp.id)}
                                  >
                                    Terminate
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {activeView === "recruitment" && (
              <motion.div
                key="recruitment"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-7xl mx-auto space-y-8"
              >
                <div className="flex items-end justify-between">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight">Recruitment</h2>
                    <p className="text-slate-500 mt-1">Manage job postings and candidate pipelines.</p>
                  </div>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
                    onClick={() => setIsAddingJob(true)}
                  >
                    <Plus size={18} />
                    Create Job Posting
                  </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {currentRecruitmentStats.map((stat, idx) => (
                    <Card
                      key={stat.title}
                      className="border-none shadow-sm cursor-pointer group"
                      onClick={() => setEditingStat({ category: "recruitment", index: idx, data: stat })}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`p-2 rounded-lg ${stat.bg} ${stat.color}`}>
                            <stat.icon size={24} />
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="bg-slate-100 text-slate-600">
                              {stat.change}
                            </Badge>
                            <Settings size={14} className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                          <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="border-none shadow-sm">
                  <CardHeader>
                    <CardTitle>Active Job Postings</CardTitle>
                    <CardDescription>Current open positions and candidate counts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Job Title</TableHead>
                          <TableHead>Department</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Candidates</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {jobs.filter(j =>
                          j.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          j.department.toLowerCase().includes(searchQuery.toLowerCase())
                        ).map((job) => (
                          <TableRow key={job.id}>
                            <TableCell className="font-medium">{job.title}</TableCell>
                            <TableCell>{job.department}</TableCell>
                            <TableCell>{job.type}</TableCell>
                            <TableCell>{job.candidates}</TableCell>
                            <TableCell>
                              <Badge className={job.status === "Active" ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-700"}>
                                {job.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-blue-600"
                                onClick={() => setEditingJob(job)}
                              >
                                Edit
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {activeView === "attendance" && (
              <motion.div
                key="attendance"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-7xl mx-auto space-y-8"
              >
                <div className="flex items-end justify-between">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight">Attendance</h2>
                    <p className="text-slate-500 mt-1">Monitor daily attendance and leave requests.</p>
                  </div>
                  <Button
                    variant="outline"
                    className="gap-2"
                    onClick={handleExport}
                    disabled={isExporting}
                  >
                    {isExporting ? (
                      <Loader2 size={18} className="animate-spin" />
                    ) : (
                      <Download size={18} />
                    )}
                    {isExporting ? "Exporting..." : "Export Report"}
                  </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {currentAttendanceStats.map((stat, idx) => (
                    <Card
                      key={stat.title}
                      className="border-none shadow-sm cursor-pointer group"
                      onClick={() => setEditingStat({ category: "attendance", index: idx, data: stat })}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`p-2 rounded-lg ${stat.bg} ${stat.color}`}>
                            <stat.icon size={24} />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium text-slate-500">{stat.change}</span>
                            <Settings size={14} className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                          <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="border-none shadow-sm">
                  <CardHeader>
                    <CardTitle>Today's Attendance Log</CardTitle>
                    <CardDescription>Real-time check-in/out status</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12 text-slate-500">
                      <Clock size={48} className="mx-auto mb-4 opacity-20" />
                      <p>Attendance log is being updated in real-time.</p>
                      <p className="text-sm">Last sync: Just now</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {activeView === "performance" && (
              <motion.div
                key="performance"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-7xl mx-auto space-y-8"
              >
                <div className="flex items-end justify-between">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight">Performance</h2>
                    <p className="text-slate-500 mt-1">Track employee performance and review cycles.</p>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
                    <Plus size={18} />
                    Start Review Cycle
                  </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {currentPerformanceStats.map((stat, idx) => (
                    <Card
                      key={stat.title}
                      className="border-none shadow-sm cursor-pointer group"
                      onClick={() => setEditingStat({ category: "performance", index: idx, data: stat })}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`p-2 rounded-lg ${stat.bg} ${stat.color}`}>
                            <stat.icon size={24} />
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="bg-slate-100 text-slate-600">
                              {stat.change}
                            </Badge>
                            <Settings size={14} className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                          <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="border-none shadow-sm">
                  <CardHeader>
                    <CardTitle>Top Performers</CardTitle>
                    <CardDescription>Employees with the highest scores this quarter</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {employeeData.slice(0, 3).map((emp, idx) => (
                        <div key={emp.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={emp.avatar} />
                              <AvatarFallback>{emp.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-semibold">{emp.name}</p>
                              <p className="text-xs text-slate-500">{emp.role}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="text-right">
                              <p className="text-sm font-bold text-blue-600">4.9/5.0</p>
                              <p className="text-xs text-slate-400">Exceeds Expectations</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {activeView === "settings" && (
              <motion.div
                key="settings"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-7xl mx-auto space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
                  <p className="text-slate-500 mt-1">Manage your company and account preferences.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <Card className="lg:col-span-2 border-none shadow-sm">
                    <CardHeader>
                      <CardTitle>Company Profile</CardTitle>
                      <CardDescription>Update your company information and branding.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          const formData = new FormData(e.currentTarget);
                          const newName = formData.get("companyName") as string;
                          const newEmail = formData.get("hrEmail") as string;
                          const newAddress = formData.get("companyAddress") as string;
                          if (newName) setCompanyName(newName);
                          if (newEmail) setHrEmail(newEmail);
                          if (newAddress) setCompanyAddress(newAddress);
                        }}
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Company Name</label>
                            <Input 
                              name="companyName" 
                              value={companyName} 
                              onChange={(e) => setCompanyName(e.target.value)} 
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">HR Contact Email</label>
                            <Input 
                              name="hrEmail" 
                              value={hrEmail} 
                              onChange={(e) => setHrEmail(e.target.value)} 
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Company Address</label>
                          <Input 
                            name="companyAddress" 
                            value={companyAddress} 
                            onChange={(e) => setCompanyAddress(e.target.value)} 
                          />
                        </div>
                        <div className="flex justify-end">
                          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">Save Changes</Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-sm">
                    <CardHeader>
                      <CardTitle>Notifications</CardTitle>
                      <CardDescription>Configure your alert preferences.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {Object.entries(notifications).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between">
                          <span className="text-sm">{key}</span>
                          <Button
                            variant={value ? "default" : "outline"}
                            size="sm"
                            className={value ? "bg-blue-600 text-white" : ""}
                            onClick={() => setNotifications(prev => ({ ...prev, [key]: !value }))}
                          >
                            {value ? "Enabled" : "Disabled"}
                          </Button>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            )}

            {activeView === "profile" && selectedEmployeeProfile && (
              <motion.div
                key="profile"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-7xl mx-auto space-y-8 pb-12"
              >
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="icon" onClick={() => setActiveView("employees")}>
                    <ArrowLeft size={20} />
                  </Button>
                  <h2 className="text-3xl font-bold tracking-tight">Employee Profile</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column: Basic Info */}
                  <div className="space-y-8">
                    <Card className="border-none shadow-sm overflow-hidden">
                      <div className="h-32 bg-blue-600 relative">
                        <div className="absolute -bottom-12 left-6">
                          <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
                            <AvatarImage src={selectedEmployeeProfile.avatar} />
                            <AvatarFallback>{selectedEmployeeProfile.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                        </div>
                      </div>
                      <CardContent className="pt-16 pb-6 px-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-2xl font-bold">{selectedEmployeeProfile.name}</h3>
                            <p className="text-slate-500">{selectedEmployeeProfile.role}</p>
                          </div>
                          <Badge className={selectedEmployeeProfile.status === "Active" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}>
                            {selectedEmployeeProfile.status}
                          </Badge>
                        </div>
                        
                        <div className="mt-8 space-y-4">
                          <div className="flex items-center gap-3 text-slate-600">
                            <Mail size={18} className="text-slate-400" />
                            <span className="text-sm">{selectedEmployeeProfile.email}</span>
                          </div>
                          <div className="flex items-center gap-3 text-slate-600">
                            <Phone size={18} className="text-slate-400" />
                            <span className="text-sm">{selectedEmployeeProfile.phone || "+1 (555) 000-0000"}</span>
                          </div>
                          <div className="flex items-center gap-3 text-slate-600">
                            <MapPin size={18} className="text-slate-400" />
                            <span className="text-sm">{selectedEmployeeProfile.address || "N/A"}</span>
                          </div>
                          <div className="flex items-center gap-3 text-slate-600">
                            <Calendar size={18} className="text-slate-400" />
                            <span className="text-sm">Joined {selectedEmployeeProfile.joinedDate || "N/A"}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-sm">
                      <CardHeader>
                        <CardTitle className="text-lg">Department</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                            <Building2 size={20} />
                          </div>
                          <div>
                            <p className="font-semibold">{selectedEmployeeProfile.department}</p>
                            <p className="text-xs text-slate-500">Main Office</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Right Column: Detailed Info */}
                  <div className="lg:col-span-2 space-y-8">
                    <Tabs defaultValue="history" className="w-full">
                      <TabsList className="bg-white p-1 shadow-sm border-none h-12">
                        <TabsTrigger value="history" className="px-6">Job History</TabsTrigger>
                        <TabsTrigger value="performance" className="px-6">Performance</TabsTrigger>
                        <TabsTrigger value="documents" className="px-6">Documents</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="history" className="mt-6">
                        <Card className="border-none shadow-sm">
                          <CardHeader>
                            <CardTitle>Career Path</CardTitle>
                            <CardDescription>Historical roles and promotions within the company</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                              {(selectedEmployeeProfile.jobHistory || [
                                { role: selectedEmployeeProfile.role, period: "2023 - Present", company: "Jayshaw ventures" }
                              ]).map((job: any, idx: number) => (
                                <div key={idx} className="relative flex items-start gap-6 pl-2">
                                  <div className="absolute left-0 mt-1.5 w-10 h-10 flex items-center justify-center rounded-full bg-white border-2 border-blue-600 shadow-sm z-10">
                                    <Briefcase size={16} className="text-blue-600" />
                                  </div>
                                  <div className="pl-12">
                                    <h4 className="font-bold text-slate-900">{job.role}</h4>
                                    <p className="text-sm text-blue-600 font-medium">{job.company}</p>
                                    <p className="text-xs text-slate-500 mt-1">{job.period}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>

                      <TabsContent value="performance" className="mt-6">
                        <Card className="border-none shadow-sm">
                          <CardHeader>
                            <CardTitle>Performance Reviews</CardTitle>
                            <CardDescription>Recent feedback and ratings from management</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-6">
                              {(selectedEmployeeProfile.performanceReviews || [
                                { date: "Dec 2023", rating: "Meets Expectations", comment: "Consistent performance throughout the year." }
                              ]).map((review: any, idx: number) => (
                                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                                  <div className="flex justify-between items-start mb-2">
                                    <div>
                                      <p className="font-bold text-slate-900">{review.rating}</p>
                                      <p className="text-xs text-slate-500">{review.date}</p>
                                    </div>
                                    <div className="flex gap-1">
                                      {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} size={14} className={star <= 4 ? "fill-amber-400 text-amber-400" : "text-slate-300"} />
                                      ))}
                                    </div>
                                  </div>
                                  <p className="text-sm text-slate-600 italic">"{review.comment}"</p>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>

                      <TabsContent value="documents" className="mt-6">
                        <Card className="border-none shadow-sm">
                          <CardHeader>
                            <CardTitle>Employee Documents</CardTitle>
                            <CardDescription>Access contracts, tax forms, and certifications</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {["Employment_Contract.pdf", "Tax_Form_2023.pdf", "Health_Insurance.pdf", "NDA_Signed.pdf"].map((doc) => (
                                <div key={doc} className="flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer">
                                  <div className="flex items-center gap-3">
                                    <FileText size={20} className="text-blue-600" />
                                    <span className="text-sm font-medium">{doc}</span>
                                  </div>
                                  <Download size={16} className="text-slate-400" />
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              </motion.div>
            )}

            {activeView === "payroll" && (
              <motion.div
                key="payroll"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-7xl mx-auto space-y-8"
              >
                {/* Payroll Title */}
                <div className="flex items-end justify-between">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight">Payroll Management</h2>
                    <p className="text-slate-500 mt-1">Manage salaries, bonuses, and tax withholdings.</p>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      onClick={handleRunPayroll}
                      disabled={isProcessing}
                      className="bg-blue-600 hover:bg-blue-700 text-white gap-2 min-w-[140px]"
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Plus size={18} />
                          Run Payroll
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                {/* Payroll Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {currentPayrollStats.map((stat, idx) => (
                    <motion.div
                      key={stat.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      onClick={() => setEditingStat({ category: "payroll", index: idx, data: stat })}
                      className="cursor-pointer"
                    >
                      <Card className="border-none shadow-sm group">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className={`p-2 rounded-lg ${stat.bg} ${stat.color}`}>
                              <stat.icon size={24} />
                            </div>
                            <div className="flex items-center gap-2">
                              <div className={`flex items-center gap-1 text-xs font-medium ${stat.trend === "up" ? "text-emerald-600" : "text-rose-600"}`}>
                                {stat.trend === "up" ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                                {stat.change}
                              </div>
                              <Settings size={14} className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                            <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Payroll Trend Chart */}
                <Card className="border-none shadow-sm">
                  <CardHeader>
                    <CardTitle>Payroll Expenditure Trend</CardTitle>
                    <CardDescription>Monthly payroll costs over the last 6 months</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px] pt-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={currentPayrollTrendData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis
                          dataKey="month"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: "#94a3b8", fontSize: 12 }}
                          dy={10}
                        />
                        <YAxis
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: "#94a3b8", fontSize: 12 }}
                          tickFormatter={(value) => `$${value / 1000}k`}
                        />
                        <Tooltip
                          formatter={(value) => [`$${value.toLocaleString()}`, "Amount"]}
                          contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)" }}
                        />
                        <Bar dataKey="amount" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={40} />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Payroll History Table */}
                <Card className="border-none shadow-sm">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Payroll History</CardTitle>
                      <CardDescription>Previous payroll cycles and their status</CardDescription>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleExport}
                      disabled={isExporting}
                    >
                      {isExporting ? "Exporting..." : "Download All Reports"}
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow className="hover:bg-transparent border-slate-100">
                          <TableHead>Period</TableHead>
                          <TableHead>Total Amount</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Payment Date</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {currentPayrollHistory.map((pay) => (
                          <TableRow key={pay.id} className="border-slate-50 hover:bg-slate-50/50 transition-colors">
                            <TableCell className="font-medium">{pay.period}</TableCell>
                            <TableCell>{pay.amount}</TableCell>
                            <TableCell>
                              <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none">
                                {pay.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-slate-500 text-sm">{pay.date}</TableCell>
                            <TableCell className="text-right">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-blue-600"
                                onClick={() => setEditingPayroll(pay)}
                              >
                                Edit Details
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </ScrollArea>
      </main>
    </div>
  );
}

function NavItem({ icon: Icon, label, active = false, onClick }: { icon: any, label: string, active?: boolean, onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
        active
          ? "bg-blue-50 text-blue-600"
          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
      }`}
    >
      <Icon size={20} />
      {label}
    </button>
  );
}

function QuickActionButton({ icon: Icon, label, onClick }: { icon: any, label: string, onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-left"
    >
      <div className="p-1.5 bg-white/20 rounded-lg">
        <Icon size={16} />
      </div>
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}
