// User Stories Data
const userStories = [
    // Ambassador Stories - Onboarding & Authentication
    {
        id: "US-001",
        title: "Referral-Based Signup",
        userType: "ambassador",
        epic: "User Onboarding & Authentication",
        priority: "P0",
        points: 5,
        asA: "prospective ambassador",
        iWant: "to sign up using a referral code from an existing member",
        soThat: "I can join the exclusive network",
        acceptanceCriteria: [
            "Signup form requires a valid referral code",
            "System validates referral code against database",
            "Invalid codes display clear error message",
            "Successful referral credits the referrer with bonus points",
            "Referral chain is tracked for analytics"
        ]
    },
    {
        id: "US-002",
        title: "Identity Verification",
        userType: "ambassador",
        epic: "User Onboarding & Authentication",
        priority: "P0",
        points: 8,
        asA: "new user",
        iWant: "to verify my identity using NIN, BVN, and government ID",
        soThat: "the platform maintains trust and security",
        acceptanceCriteria: [
            "Form captures NIN, BVN, and ID photo upload",
            "Integration with NIMC API for NIN validation",
            "Integration with banking APIs for BVN verification",
            "ID photo undergoes OCR and face matching",
            "Verification status displayed in real-time",
            "Failed verification allows retry with support contact"
        ]
    },
    {
        id: "US-003",
        title: "Multi-Factor Authentication",
        userType: "ambassador",
        epic: "User Onboarding & Authentication",
        priority: "P0",
        points: 5,
        asA: "user",
        iWant: "multiple login options (email, phone, social media, biometrics)",
        soThat: "I can access my account conveniently and securely",
        acceptanceCriteria: [
            "Email/password login with OTP option",
            "Phone number login with SMS OTP",
            "Social OAuth (Google, X, Instagram, LinkedIn, Facebook)",
            "Biometric login (Face ID, fingerprint) on supported devices",
            "Session management with secure token storage",
            "'Remember me' option for trusted devices"
        ]
    },
    {
        id: "US-004",
        title: "Profile Setup",
        userType: "ambassador",
        epic: "User Onboarding & Authentication",
        priority: "P0",
        points: 3,
        asA: "new ambassador",
        iWant: "to complete my profile with personal details and preferences",
        soThat: "the platform can personalize my experience",
        acceptanceCriteria: [
            "Profile form includes: full name, age, gender, state, LGA, ward",
            "Optional fields: occupation, education, interests",
            "Profile photo upload with cropping tool",
            "Social media links (optional)",
            "Privacy settings for profile visibility",
            "Profile completion progress indicator"
        ]
    },
    {
        id: "US-005",
        title: "Bank Account Linking",
        userType: "ambassador",
        epic: "User Onboarding & Authentication",
        priority: "P0",
        points: 5,
        asA: "ambassador",
        iWant: "to link my bank account during onboarding",
        soThat: "I can receive reward payments directly",
        acceptanceCriteria: [
            "Form captures bank name, account number, account name",
            "Integration with Paystack/Flutterwave for account verification",
            "Account name must match verified identity",
            "Multiple accounts not allowed (one per user)",
            "Bank details encrypted at rest",
            "Test transaction (₦10) for verification"
        ]
    },
    
    // Ambassador Stories - Content Consumption
    {
        id: "US-009",
        title: "News Feed Access",
        userType: "ambassador",
        epic: "Content Distribution & Engagement",
        priority: "P0",
        points: 3,
        asA: "ambassador",
        iWant: "to see a personalized news feed with party updates",
        soThat: "I stay informed about APC activities and government achievements",
        acceptanceCriteria: [
            "Home screen displays scrollable news feed",
            "Articles show title, image, excerpt, and publish date",
            "Feed updates in real-time or on pull-to-refresh",
            "Articles tagged by category (policy, achievements, events, etc.)",
            "Read/unread status indicator",
            "Infinite scroll or pagination"
        ]
    },
    {
        id: "US-010",
        title: "Article Reading",
        userType: "ambassador",
        epic: "Content Distribution & Engagement",
        priority: "P0",
        points: 2,
        asA: "ambassador",
        iWant: "to read full articles with rich media",
        soThat: "I can understand the content before sharing",
        acceptanceCriteria: [
            "Article view displays full text, images, and videos",
            "Responsive layout for mobile and tablet",
            "Estimated read time displayed",
            "Related articles suggested at bottom",
            "Bookmark option for later reading",
            "Font size adjustment option"
        ]
    },
    {
        id: "US-011",
        title: "Social Media Sharing",
        userType: "ambassador",
        epic: "Content Distribution & Engagement",
        priority: "P0",
        points: 5,
        asA: "ambassador",
        iWant: "to share articles to my social media with one tap",
        soThat: "I can amplify the party's message effortlessly",
        acceptanceCriteria: [
            "Share button opens native OS share sheet",
            "Pre-populated message with article title, link, and hashtags",
            "Support for Facebook, X, Instagram, WhatsApp, LinkedIn, Telegram",
            "Share action tracked and awards points",
            "Custom share messages per platform",
            "Share preview shows correct metadata (Open Graph)"
        ]
    },
    {
        id: "US-012",
        title: "Push Notifications",
        userType: "ambassador",
        epic: "Content Distribution & Engagement",
        priority: "P1",
        points: 3,
        asA: "ambassador",
        iWant: "to receive push notifications for new content",
        soThat: "I don't miss important updates",
        acceptanceCriteria: [
            "Opt-in prompt on first app launch",
            "Notifications for: new articles, challenges, rewards, announcements",
            "Notification settings page with granular controls",
            "Notifications open relevant content in app",
            "Notification history accessible in app",
            "Quiet hours setting (no notifications during sleep)"
        ]
    },
    
    // Ambassador Stories - Challenges & Tasks
    {
        id: "US-021",
        title: "Challenge Discovery",
        userType: "ambassador",
        epic: "Gamification & Rewards",
        priority: "P0",
        points: 3,
        asA: "ambassador",
        iWant: "to browse available challenges",
        soThat: "I can choose tasks that interest me",
        acceptanceCriteria: [
            "Challenges page lists active, upcoming, and completed challenges",
            "Each challenge shows: title, description, reward, deadline, difficulty",
            "Filter by category, reward amount, location",
            "Sort by deadline, reward, popularity",
            "Challenge status badges (New, Trending, Ending Soon)",
            "Search functionality"
        ]
    },
    {
        id: "US-022",
        title: "Photo/Video Challenge Submission",
        userType: "ambassador",
        epic: "Gamification & Rewards",
        priority: "P0",
        points: 8,
        asA: "ambassador",
        iWant: "to complete photo/video challenges (e.g., polling unit capture)",
        soThat: "I can earn rewards and contribute to the campaign",
        acceptanceCriteria: [
            "In-app camera with photo and video modes",
            "Geolocation automatically tagged to submission",
            "Option to upload from gallery (with EXIF data validation)",
            "Preview before submission",
            "Add caption or description",
            "Submission confirmation with estimated review time",
            "Offline queue for submissions without internet"
        ]
    },
    {
        id: "US-023",
        title: "Social Media Task Completion",
        userType: "ambassador",
        epic: "Gamification & Rewards",
        priority: "P1",
        points: 5,
        asA: "ambassador",
        iWant: "to complete social media tasks (post, retweet, follow)",
        soThat: "I can earn points for online engagement",
        acceptanceCriteria: [
            "Task details specify required action (e.g., 'Retweet this post')",
            "Deep link to social media platform",
            "Screenshot upload for proof of completion",
            "Automated verification via social media APIs where possible",
            "Manual review fallback for complex tasks",
            "Task completion awards points immediately or after verification"
        ]
    },
    {
        id: "US-024",
        title: "Referral Challenge",
        userType: "ambassador",
        epic: "Gamification & Rewards",
        priority: "P1",
        points: 3,
        asA: "ambassador",
        iWant: "to invite new members and earn referral bonuses",
        soThat: "I can grow the network and increase my rewards",
        acceptanceCriteria: [
            "Unique referral code/link generated for each user",
            "Share referral via SMS, WhatsApp, social media, email",
            "Referral dashboard shows: invites sent, pending, accepted",
            "Bonus points awarded when referral completes verification",
            "Tiered bonuses for multiple successful referrals",
            "Leaderboard for top referrers"
        ]
    },
    {
        id: "US-025",
        title: "Challenge Progress Tracking",
        userType: "ambassador",
        epic: "Gamification & Rewards",
        priority: "P1",
        points: 3,
        asA: "ambassador",
        iWant: "to track my progress on ongoing challenges",
        soThat: "I know what I need to complete",
        acceptanceCriteria: [
            "Challenge detail page shows completion percentage",
            "Checklist for multi-step challenges",
            "Submission history with status (pending, approved, rejected)",
            "Notifications for status changes",
            "Deadline countdown timer",
            "Hints or tips for completing challenge"
        ]
    },
    
    // Ambassador Stories - Rewards & Payments
    {
        id: "US-026",
        title: "Points Wallet",
        userType: "ambassador",
        epic: "Gamification & Rewards",
        priority: "P0",
        points: 3,
        asA: "ambassador",
        iWant: "to view my accumulated points and transaction history",
        soThat: "I can track my earnings",
        acceptanceCriteria: [
            "Wallet page displays total points balance",
            "Transaction history with date, activity, points earned/spent",
            "Filter by date range, activity type",
            "Export transaction history as CSV",
            "Points expiry date (if applicable)",
            "Conversion rate to naira displayed"
        ]
    },
    {
        id: "US-027",
        title: "Cash Withdrawal",
        userType: "ambassador",
        epic: "Gamification & Rewards",
        priority: "P0",
        points: 8,
        asA: "ambassador",
        iWant: "to withdraw my earned rewards to my bank account",
        soThat: "I can benefit financially from my participation",
        acceptanceCriteria: [
            "Minimum withdrawal threshold (e.g., ₦1,000)",
            "Withdrawal request form with amount and bank details",
            "Confirmation screen with fees (if any) and net amount",
            "Processing time estimate (e.g., 1-3 business days)",
            "Email/SMS notification when payment is processed",
            "Withdrawal history with status tracking",
            "Failed withdrawal handling with error explanation"
        ]
    },
    {
        id: "US-028",
        title: "Reward Tiers & Badges",
        userType: "ambassador",
        epic: "Gamification & Rewards",
        priority: "P1",
        points: 5,
        asA: "ambassador",
        iWant: "to unlock achievement badges and tier levels",
        soThat: "I feel recognized and motivated to do more",
        acceptanceCriteria: [
            "Badge system for milestones (e.g., 'First Share,' '100 Referrals')",
            "Tier levels (Bronze, Silver, Gold, Platinum) based on total points",
            "Visual badge display on profile",
            "Tier benefits (e.g., higher rewards, exclusive challenges)",
            "Progress bar to next tier",
            "Notification when badge/tier is unlocked"
        ]
    },
    {
        id: "US-029",
        title: "Leaderboards",
        userType: "ambassador",
        epic: "Gamification & Rewards",
        priority: "P1",
        points: 3,
        asA: "ambassador",
        iWant: "to see my rank on leaderboards",
        soThat: "I can compete with others and feel motivated",
        acceptanceCriteria: [
            "Leaderboards for: National, State, LGA, Ward levels",
            "Sort by: total points, referrals, shares, challenge completions",
            "Time filters: all-time, monthly, weekly",
            "User's rank prominently displayed",
            "Top 10/50/100 visible",
            "Anonymous mode option for privacy"
        ]
    },
    
    // Ambassador Stories - Social & Networking
    {
        id: "US-043",
        title: "Ambassador Directory",
        userType: "ambassador",
        epic: "Social Networking & Community",
        priority: "P1",
        points: 3,
        asA: "ambassador",
        iWant: "to browse other ambassadors' profiles",
        soThat: "I can connect with like-minded supporters",
        acceptanceCriteria: [
            "Directory page with search and filters (location, tier, interests)",
            "Profile cards show: name, photo, location, tier, social links (if public)",
            "Privacy settings respected (hidden profiles not shown)",
            "'Connect' or 'Follow' button",
            "Sort by: proximity, tier, recent activity",
            "Pagination or infinite scroll"
        ]
    },
    {
        id: "US-044",
        title: "Connection Requests",
        userType: "ambassador",
        epic: "Social Networking & Community",
        priority: "P2",
        points: 3,
        asA: "ambassador",
        iWant: "to send and accept connection requests",
        soThat: "I can build my network within the platform",
        acceptanceCriteria: [
            "Send connection request with optional message",
            "Receive notification for incoming requests",
            "Accept or decline requests",
            "View list of connections",
            "Mutual connections displayed on profiles",
            "Connection request expiry after 30 days"
        ]
    },
    
    // Admin Stories - Content Management
    {
        id: "US-051",
        title: "Article Creation",
        userType: "admin",
        epic: "Admin - Content Management",
        priority: "P0",
        points: 5,
        asA: "campaign manager",
        iWant: "to create and publish articles to the news feed",
        soThat: "ambassadors receive curated party content",
        acceptanceCriteria: [
            "Rich text editor with formatting options (bold, italic, lists, links)",
            "Image and video upload with preview",
            "SEO fields (title, meta description, tags)",
            "Category selection (policy, achievements, events, etc.)",
            "Save as draft or publish immediately",
            "Schedule publication for future date/time",
            "Preview before publishing"
        ]
    },
    {
        id: "US-052",
        title: "Content Scheduling",
        userType: "admin",
        epic: "Admin - Content Management",
        priority: "P1",
        points: 3,
        asA: "campaign manager",
        iWant: "to schedule content for automatic publication",
        soThat: "I can plan campaigns in advance",
        acceptanceCriteria: [
            "Calendar view of scheduled content",
            "Set publication date and time",
            "Edit or delete scheduled posts",
            "Notification before publication",
            "Automatic publication at scheduled time",
            "Timezone handling for national campaigns"
        ]
    },
    {
        id: "US-053",
        title: "Push Notification Campaigns",
        userType: "admin",
        epic: "Admin - Content Management",
        priority: "P1",
        points: 5,
        asA: "campaign manager",
        iWant: "to send targeted push notifications",
        soThat: "I can alert ambassadors to urgent updates",
        acceptanceCriteria: [
            "Compose notification with title, body, and action link",
            "Target by: all users, location, tier, activity level",
            "Schedule immediate or future delivery",
            "Preview notification appearance",
            "Delivery report (sent, delivered, opened)",
            "A/B testing for notification copy"
        ]
    },
    {
        id: "US-054",
        title: "Challenge Creation",
        userType: "admin",
        epic: "Admin - Content Management",
        priority: "P0",
        points: 5,
        asA: "campaign manager",
        iWant: "to create challenges for ambassadors",
        soThat: "I can drive specific campaign activities",
        acceptanceCriteria: [
            "Challenge form: title, description, instructions, reward amount",
            "Challenge type: photo, video, social media, referral, custom",
            "Set start and end dates",
            "Geographic targeting (national, state, LGA, ward)",
            "Difficulty level and estimated time",
            "Approval workflow (auto-approve or manual review)",
            "Preview challenge as ambassador would see it"
        ]
    },
    {
        id: "US-055",
        title: "Submission Review",
        userType: "admin",
        epic: "Admin - Content Management",
        priority: "P0",
        points: 5,
        asA: "campaign manager",
        iWant: "to review and approve challenge submissions",
        soThat: "I can ensure quality and prevent fraud",
        acceptanceCriteria: [
            "Queue of pending submissions with filters",
            "View submission details (photo/video, location, timestamp)",
            "Approve, reject, or flag for further review",
            "Rejection reason required (with feedback to user)",
            "Bulk actions for multiple submissions",
            "Flagged submissions escalated to senior admin",
            "Review history and audit trail"
        ]
    },
    
    // Admin Stories - Analytics & Reporting
    {
        id: "US-059",
        title: "Dashboard Overview",
        userType: "admin",
        epic: "Analytics & Reporting",
        priority: "P0",
        points: 5,
        asA: "campaign manager",
        iWant: "a comprehensive dashboard with key metrics",
        soThat: "I can monitor platform health at a glance",
        acceptanceCriteria: [
            "KPIs: total ambassadors, active users (DAU/MAU), total shares, challenges completed",
            "Growth charts (daily, weekly, monthly)",
            "Geographic heat map of ambassador distribution",
            "Top performers (ambassadors, states, LGAs)",
            "Recent activity feed",
            "Customizable widgets"
        ]
    },
    {
        id: "US-060",
        title: "Engagement Reports",
        userType: "admin",
        epic: "Analytics & Reporting",
        priority: "P1",
        points: 5,
        asA: "campaign manager",
        iWant: "detailed engagement reports",
        soThat: "I can measure campaign effectiveness",
        acceptanceCriteria: [
            "Report builder with date range and metric selection",
            "Metrics: content shares, challenge participation, referrals, logins",
            "Segmentation by location, tier, demographics",
            "Visualizations (line charts, bar charts, pie charts)",
            "Export as PDF or Excel",
            "Schedule automated email reports"
        ]
    },
    
    // Stakeholder Stories
    {
        id: "US-064",
        title: "Executive Dashboard",
        userType: "stakeholder",
        epic: "Stakeholder Reporting",
        priority: "P1",
        points: 5,
        asA: "political stakeholder",
        iWant: "a high-level executive dashboard",
        soThat: "I can quickly assess campaign performance",
        acceptanceCriteria: [
            "Simple, visual dashboard with large KPIs",
            "Metrics: total ambassadors, reach (estimated voters influenced), engagement rate",
            "Geographic map with color-coded performance by state",
            "Trend indicators (up/down arrows, percentage change)",
            "Top 5 performing states and LGAs",
            "Export dashboard as PDF for presentations"
        ]
    },
    {
        id: "US-065",
        title: "Impact Reports",
        userType: "stakeholder",
        epic: "Stakeholder Reporting",
        priority: "P1",
        points: 5,
        asA: "political stakeholder",
        iWant: "reports showing electoral impact",
        soThat: "I can justify investment in the platform",
        acceptanceCriteria: [
            "Correlation analysis (ambassador density vs. voter turnout)",
            "Sentiment analysis from social media shares",
            "Estimated reach (ambassadors × average social media followers)",
            "Polling unit coverage (percentage of units with ambassadors)",
            "Comparison reports (before/after campaign launch)",
            "Executive summary in plain language"
        ]
    },
    
    // Technical Stories
    {
        id: "US-067",
        title: "API Rate Limiting",
        userType: "technical",
        epic: "Technical Infrastructure",
        priority: "P1",
        points: 3,
        asA: "platform engineer",
        iWant: "to implement API rate limiting",
        soThat: "the system remains stable under high load",
        acceptanceCriteria: [
            "Rate limits per endpoint (e.g., 100 requests/minute)",
            "Different limits for authenticated vs. anonymous users",
            "Graceful degradation with 429 status code",
            "Rate limit headers in API responses",
            "Admin dashboard to monitor rate limit hits",
            "Whitelist for trusted clients"
        ]
    },
    {
        id: "US-068",
        title: "Data Backup & Recovery",
        userType: "technical",
        epic: "Technical Infrastructure",
        priority: "P0",
        points: 5,
        asA: "platform engineer",
        iWant: "automated database backups",
        soThat: "we can recover from data loss",
        acceptanceCriteria: [
            "Daily automated backups to S3/Azure Blob",
            "Point-in-time recovery capability",
            "Backup retention policy (30 days)",
            "Encrypted backups at rest",
            "Backup integrity verification",
            "Documented recovery procedures",
            "Disaster recovery drills quarterly"
        ]
    },
    {
        id: "US-069",
        title: "Security Audit Logging",
        userType: "technical",
        epic: "Technical Infrastructure",
        priority: "P1",
        points: 5,
        asA: "security engineer",
        iWant: "comprehensive audit logs",
        soThat: "I can detect and investigate security incidents",
        acceptanceCriteria: [
            "Log all authentication attempts (success/failure)",
            "Log admin actions (user bans, content deletion, config changes)",
            "Log financial transactions (withdrawals, reward disbursements)",
            "Tamper-proof log storage",
            "Log retention for 1 year",
            "SIEM integration for real-time alerting",
            "Compliance with NDPR requirements"
        ]
    },
    {
        id: "US-070",
        title: "Performance Monitoring",
        userType: "technical",
        epic: "Technical Infrastructure",
        priority: "P1",
        points: 5,
        asA: "platform engineer",
        iWant: "real-time performance monitoring",
        soThat: "I can proactively address issues",
        acceptanceCriteria: [
            "APM tool integration (New Relic, Datadog, or similar)",
            "Monitor: API response times, database query performance, error rates",
            "Uptime monitoring with alerts",
            "Custom dashboards for key metrics",
            "Alerting via Slack/email for critical issues",
            "Weekly performance reports"
        ]
    }
];

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = userStories;
}
