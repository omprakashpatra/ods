import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  Service, 
  PortfolioItem, 
  Review, 
  QuoteRequest, 
  SupportTicket, 
  ContactEnquiry, 
  User, 
  ActivePage,
  ServiceId 
} from '../types';
import { 
  SERVICES_DATA, 
  PORTFOLIO_DATA, 
  INITIAL_REVIEWS, 
  INITIAL_QUOTES, 
  INITIAL_TICKETS, 
  INITIAL_ENQUIRIES 
} from '../data/initialData';

export interface Toast {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  message: string;
}

interface AppContextType {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  services: Service[];
  portfolio: PortfolioItem[];
  reviews: Review[];
  quotes: QuoteRequest[];
  tickets: SupportTicket[];
  enquiries: ContactEnquiry[];
  newsletterEmails: string[];
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
  
  // Modals state
  selectedService: Service | null;
  setSelectedService: (service: Service | null) => void;
  selectedProject: PortfolioItem | null;
  setSelectedProject: (project: PortfolioItem | null) => void;
  isQuoteModalOpen: boolean;
  setIsQuoteModalOpen: (open: boolean) => void;
  preselectedServiceId: ServiceId | null;
  setPreselectedServiceId: (id: ServiceId | null) => void;
  isReviewModalOpen: boolean;
  setIsReviewModalOpen: (open: boolean) => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  isSupportDrawerOpen: boolean;
  setIsSupportDrawerOpen: (open: boolean) => void;

  // Actions
  submitQuoteRequest: (data: {
    customerName: string;
    customerEmail: string;
    customerPhone?: string;
    serviceId: ServiceId;
    serviceName: string;
    requirements: string;
    budget: string;
    deadline: string;
  }) => Promise<string>;

  updateQuoteStatus: (
    quoteId: string, 
    status: QuoteRequest['status'],
    adminData?: {
      quoteAmount?: number;
      discount?: number;
      tax?: number;
      finalAmount?: number;
      validUntil?: string;
      terms?: string;
      adminNotes?: string;
    }
  ) => void;

  submitContactEnquiry: (data: {
    fullName: string;
    email: string;
    phone?: string;
    service: string;
    budget?: string;
    details: string;
    hasAttachment?: boolean;
  }) => Promise<string>;

  submitSupportTicket: (data: {
    customerName: string;
    customerEmail: string;
    phone?: string;
    service: string;
    subject: string;
    message: string;
    urgency: 'normal' | 'high' | 'urgent';
    hasAttachment?: boolean;
  }) => Promise<string>;

  replySupportTicket: (ticketId: string, reply: string, resolve?: boolean) => void;

  submitReview: (data: {
    customerName: string;
    roleOrCompany: string;
    serviceId: ServiceId;
    serviceName: string;
    rating: number;
    reviewText: string;
  }) => Promise<string>;

  moderateReview: (reviewId: string, action: 'approved' | 'rejected') => void;

  subscribeNewsletter: (email: string) => Promise<boolean>;

  openQuoteModalWithService: (serviceId?: ServiceId) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  
  // Default demo user is logged in as a registered customer, or can switch to admin or guest
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    return {
      id: 'usr-demo-1',
      name: 'Kunal Verma',
      email: 'kunal.verma@example.com',
      role: 'customer',
      company: 'Verma Dental & Healthcare'
    };
  });

  const [services] = useState<Service[]>(SERVICES_DATA);
  const [portfolio] = useState<PortfolioItem[]>(PORTFOLIO_DATA);

  // Stored state with LocalStorage fallback
  const [reviews, setReviews] = useState<Review[]>(() => {
    const saved = localStorage.getItem('ods_reviews');
    return saved ? JSON.parse(saved) : INITIAL_REVIEWS;
  });

  const [quotes, setQuotes] = useState<QuoteRequest[]>(() => {
    const saved = localStorage.getItem('ods_quotes');
    return saved ? JSON.parse(saved) : INITIAL_QUOTES;
  });

  const [tickets, setTickets] = useState<SupportTicket[]>(() => {
    const saved = localStorage.getItem('ods_tickets');
    return saved ? JSON.parse(saved) : INITIAL_TICKETS;
  });

  const [enquiries, setEnquiries] = useState<ContactEnquiry[]>(() => {
    const saved = localStorage.getItem('ods_enquiries');
    return saved ? JSON.parse(saved) : INITIAL_ENQUIRIES;
  });

  const [newsletterEmails, setNewsletterEmails] = useState<string[]>(() => {
    const saved = localStorage.getItem('ods_newsletter');
    return saved ? JSON.parse(saved) : ['subscriber.demo@example.com'];
  });

  const [toasts, setToasts] = useState<Toast[]>([]);

  // Modals state
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<ServiceId | null>(null);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSupportDrawerOpen, setIsSupportDrawerOpen] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('ods_reviews', JSON.stringify(reviews));
  }, [reviews]);

  useEffect(() => {
    localStorage.setItem('ods_quotes', JSON.stringify(quotes));
  }, [quotes]);

  useEffect(() => {
    localStorage.setItem('ods_tickets', JSON.stringify(tickets));
  }, [tickets]);

  useEffect(() => {
    localStorage.setItem('ods_enquiries', JSON.stringify(enquiries));
  }, [enquiries]);

  useEffect(() => {
    localStorage.setItem('ods_newsletter', JSON.stringify(newsletterEmails));
  }, [newsletterEmails]);

  const addToast = (toast: Omit<Toast, 'id'>) => {
    const id = 'toast_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { ...toast, id }]);
    setTimeout(() => {
      removeToast(id);
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const openQuoteModalWithService = (serviceId?: ServiceId) => {
    if (serviceId) {
      setPreselectedServiceId(serviceId);
    }
    setIsQuoteModalOpen(true);
  };

  const submitQuoteRequest = async (data: {
    customerName: string;
    customerEmail: string;
    customerPhone?: string;
    serviceId: ServiceId;
    serviceName: string;
    requirements: string;
    budget: string;
    deadline: string;
  }): Promise<string> => {
    // Generate official Quotation Reference
    const quoteId = `QT-${new Date().getFullYear()}-${String(quotes.length + 1).padStart(3, '0')}`;
    const newQuote: QuoteRequest = {
      id: quoteId,
      createdAt: new Date().toISOString().split('T')[0],
      ...data,
      status: 'pending_review'
    };

    setQuotes((prev) => [newQuote, ...prev]);

    addToast({
      type: 'success',
      title: 'Quotation Request Received',
      message: `Quote ID #${quoteId} has been registered. Our specialists will review your requirements and respond within 24 hours.`
    });

    return quoteId;
  };

  const updateQuoteStatus = (
    quoteId: string, 
    status: QuoteRequest['status'],
    adminData?: {
      quoteAmount?: number;
      discount?: number;
      tax?: number;
      finalAmount?: number;
      validUntil?: string;
      terms?: string;
      adminNotes?: string;
    }
  ) => {
    setQuotes((prev) =>
      prev.map((q) => {
        if (q.id === quoteId) {
          return {
            ...q,
            status,
            ...(adminData || {})
          };
        }
        return q;
      })
    );

    let message = `Quotation ${quoteId} status updated to: ${status.replace('_', ' ')}`;
    if (status === 'accepted') {
      message = `Congratulations! You accepted Quotation ${quoteId}. ODS will initiate onboarding.`;
    } else if (status === 'rejected') {
      message = `Quotation ${quoteId} was declined.`;
    } else if (status === 'changes_requested') {
      message = `Changes requested for Quotation ${quoteId}. Our team will revise the scope.`;
    }

    addToast({
      type: 'info',
      title: 'Quotation Updated',
      message
    });
  };

  const submitContactEnquiry = async (data: {
    fullName: string;
    email: string;
    phone?: string;
    service: string;
    budget?: string;
    details: string;
    hasAttachment?: boolean;
  }): Promise<string> => {
    const enqId = `ENQ-${String(enquiries.length + 903).padStart(3, '0')}`;
    const newEnquiry: ContactEnquiry = {
      id: enqId,
      createdAt: new Date().toISOString().split('T')[0],
      ...data,
      status: 'new'
    };

    setEnquiries((prev) => [newEnquiry, ...prev]);

    addToast({
      type: 'success',
      title: 'Enquiry Received',
      message: 'Thank you! Your request has been received. ODS will contact you shortly.'
    });

    return enqId;
  };

  const submitSupportTicket = async (data: {
    customerName: string;
    customerEmail: string;
    phone?: string;
    service: string;
    subject: string;
    message: string;
    urgency: 'normal' | 'high' | 'urgent';
    hasAttachment?: boolean;
  }): Promise<string> => {
    const ticketId = `TKT-${String(tickets.length + 1083).padStart(4, '0')}`;
    const newTicket: SupportTicket = {
      id: ticketId,
      createdAt: new Date().toISOString().split('T')[0],
      ...data,
      status: 'open'
    };

    setTickets((prev) => [newTicket, ...prev]);

    addToast({
      type: 'success',
      title: 'Support Ticket Created',
      message: `Support ticket #${ticketId} created. Our technical support team has been notified.`
    });

    return ticketId;
  };

  const replySupportTicket = (ticketId: string, reply: string, resolve: boolean = false) => {
    setTickets((prev) =>
      prev.map((t) => {
        if (t.id === ticketId) {
          return {
            ...t,
            adminReply: reply,
            status: resolve ? 'resolved' : 'in_review'
          };
        }
        return t;
      })
    );

    addToast({
      type: 'success',
      title: 'Ticket Replied',
      message: `Response logged for ticket #${ticketId}.`
    });
  };

  const submitReview = async (data: {
    customerName: string;
    roleOrCompany: string;
    serviceId: ServiceId;
    serviceName: string;
    rating: number;
    reviewText: string;
  }): Promise<string> => {
    const reviewId = `rev-${Date.now()}`;
    const newReview: Review = {
      id: reviewId,
      ...data,
      date: new Date().toISOString().split('T')[0],
      status: 'pending', // Moderation required
      verifiedCustomer: true
    };

    setReviews((prev) => [newReview, ...prev]);

    addToast({
      type: 'success',
      title: 'Review Submitted',
      message: 'Thank you! Your review has been submitted and sent for moderation before public display.'
    });

    return reviewId;
  };

  const moderateReview = (reviewId: string, action: 'approved' | 'rejected') => {
    setReviews((prev) =>
      prev.map((r) => {
        if (r.id === reviewId) {
          return { ...r, status: action };
        }
        return r;
      })
    );

    addToast({
      type: 'info',
      title: 'Review Moderation',
      message: `Review #${reviewId.slice(-4)} marked as ${action}.`
    });
  };

  const subscribeNewsletter = async (email: string): Promise<boolean> => {
    if (!email || !email.includes('@')) {
      addToast({
        type: 'error',
        title: 'Invalid Email',
        message: 'Please provide a valid email address.'
      });
      return false;
    }

    if (newsletterEmails.includes(email.toLowerCase())) {
      addToast({
        type: 'info',
        title: 'Already Subscribed',
        message: 'This email is already receiving ODS digital insights.'
      });
      return true;
    }

    setNewsletterEmails((prev) => [...prev, email.toLowerCase()]);
    addToast({
      type: 'success',
      title: 'Subscribed Successfully',
      message: 'Thank you for subscribing to ODS updates. You can unsubscribe at any time.'
    });
    return true;
  };

  return (
    <AppContext.Provider
      value={{
        activePage,
        setActivePage,
        currentUser,
        setCurrentUser,
        services,
        portfolio,
        reviews,
        quotes,
        tickets,
        enquiries,
        newsletterEmails,
        toasts,
        addToast,
        removeToast,
        selectedService,
        setSelectedService,
        selectedProject,
        setSelectedProject,
        isQuoteModalOpen,
        setIsQuoteModalOpen,
        preselectedServiceId,
        setPreselectedServiceId,
        isReviewModalOpen,
        setIsReviewModalOpen,
        isAuthModalOpen,
        setIsAuthModalOpen,
        isSupportDrawerOpen,
        setIsSupportDrawerOpen,
        submitQuoteRequest,
        updateQuoteStatus,
        submitContactEnquiry,
        submitSupportTicket,
        replySupportTicket,
        submitReview,
        moderateReview,
        subscribeNewsletter,
        openQuoteModalWithService
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
