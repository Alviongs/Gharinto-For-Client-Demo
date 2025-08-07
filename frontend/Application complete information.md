---

# **Gharinto: Product Requirements Document (PRD) & System Specification**

**Version:** 1.0
**Date:** October 26, 2023
**Status:** Draft for Review
**Author:** AI Assistant (Refined from Prasad & Rohith's SRS)

## 1. Executive Summary

Gharinto is a technology-driven, three-sided marketplace designed to organize and streamline India's fragmented and often inefficient home interiors and renovation market. Positioned as a direct competitor to platforms like Livspace and HomeLane, Gharinto differentiates itself by focusing on the **value-conscious "essential" segment**—providing high-quality, transparent, and reliable interior solutions at an affordable price point.

Our platform will serve as a unified ecosystem connecting four key stakeholders: **Homeowners (Customers), Interior Designers (Partners), Material Suppliers/Manufacturers (Vendors), and Real Estate Developers (Builders).** By integrating a sophisticated project management suite, a curated e-commerce catalog, and transparent financial tools, Gharinto aims to solve the industry's core problems of cost overruns, project delays, lack of quality control, and poor communication.

This document outlines the vision, market positioning, functional requirements, technical architecture, and go-to-market strategy for the Gharinto platform. The initial development will focus on creating a Minimum Viable Platform (MVP) that validates the core user journey, followed by phased rollouts of advanced features to capture market share and scale operations.

---

## 2. The Market Opportunity & The Problem

The Indian home interiors market is a multi-billion dollar industry plagued by systemic inefficiencies. The experience for all stakeholders is broken, creating a significant opportunity for a technology-led solution.

### 2.1 The Problem: Stories from a Fragmented Ecosystem

Your original stories perfectly capture the pain points. Here they are, framed within the PRD:

*   **For the Homeowner (The Sharma Family):** The journey is a nightmare of opaque pricing, missed deadlines, inconsistent quality, and a complete lack of accountability. They feel powerless and frustrated, turning a dream project into a source of immense stress.
*   **For the Interior Designer (Priya):** Talent is wasted on administrative chaos. She struggles with unreliable cash flow, inefficient supply chains, and a constant search for dependable labor, limiting her creative output and business growth.
*   **For the Manufacturer ("Classic Furniture"):** Business is a "feast or famine" cycle. Inconsistent order flow from a small network of designers makes it impossible to manage inventory, staffing, and cash flow effectively, hindering scalability.
*   **For the Builder (Raj):** Unsold inventory is a major liability. Without the ability to offer attractive, move-in-ready solutions, properties are perceived as empty shells, leading to longer sales cycles and reduced property value.

### 2.2 The Solution: The Gharinto Unified Ecosystem

Gharinto is not just an app; it's a centralized platform that creates a symbiotic relationship between all stakeholders, turning their individual pain points into collective strengths.

| Stakeholder | How Gharinto Provides the Solution |
| :--- | :--- |
| **Homeowners** | A transparent, one-stop platform offering 3D visualization, real-time project tracking, vetted professionals, quality-assured materials, and secure, milestone-based payments. **Peace of mind is the core product.** |
| **Interior Designers** | A complete business-in-a-box: a steady stream of qualified leads, powerful design and quoting tools, a curated e-commerce catalog, and guaranteed, timely payments via a digital wallet. **We empower them to be creators, not managers.** |
| **Manufacturers/Vendors** | Access to a broad, aggregated market with consistent order flow, predictable demand forecasting, and streamlined, secure payment processing. **We offer stability and a clear path to growth.** |
| **Builders** | A powerful value-added service to offer buyers. By integrating Gharinto's pre-designed packages, they can market "fully-furnished" homes, accelerate sales, and increase property valuation. **We turn their properties into homes.** |

---

## 3. User Personas & System Portals

The Gharinto platform will be composed of distinct but interconnected portals, each tailored to the needs of its primary user.

| User Persona | Corresponding Portal | Primary Goal |
| :--- | :--- | :--- |
| **Admin/Operations Team** | Admin & Operations Portal | To manage, monitor, and control the entire ecosystem. |
| **Project Manager** | Project Manager Dashboard | To ensure seamless project execution, on-time and on-budget. |
| **Homeowner/Customer** | Customer Portal | To track progress, make payments, and communicate with the team. |
| **Interior Designer** | Interior Partner Portal | To manage leads, design projects, procure materials, and track earnings. |
| **Vendor/Supplier** | Vendor Portal | To manage product catalogs, inventory, and fulfill orders. |

---

## 4. Detailed Functional Requirements (by Portal)

This section details the specific features and workflows for each portal.

### 4.1 Admin & Operations Portal (The "Control Tower")

*   **Objective:** To provide the internal team with complete oversight and control over all platform activities.
*   **Core Features:**
    *   **Secure Authentication:** Role-based access control (RBAC) for different admin levels (e.g., Super Admin, Finance, Lead Manager).
    *   **Master Dashboard:** A high-level view of key platform metrics: active projects, total GMV (Gross Merchandise Value), new leads, partner onboarding pipeline, and revenue.
    *   **User Management:** Onboard, verify, and manage profiles for Interior Partners, Project Managers, and Vendors. Ability to suspend or deactivate accounts.
    *   **Lead Management Engine:**
        *   View all incoming leads from various channels (website, builder partners).
        *   Algorithm-assisted and manual assignment of leads to Interior Partners based on location, expertise, rating, and availability.
        *   Track lead conversion funnel (New > Assigned > Accepted > Converted > Dropped).
    *   **Project Oversight:** A master list of all projects. Ability to drill down into any project to view its status, financials, communication logs, and potential red flags.
    *   **Financial Management:** View and approve all major transactions, manage commission rates, oversee partner payouts, and generate financial reports.
    *   **Content Management System (CMS):** Manage content for the public website, design inspiration gallery, and help center articles.

### 4.2 Project Manager Dashboard (The "Execution Engine")

*   **Objective:** To empower PMs with the tools to manage multiple projects efficiently and act as the bridge between the customer, designer, and execution teams.
*   **Core Features:**
    *   **My Projects Dashboard:** A card-based or list view of all assigned projects, prioritized by urgency or status. Each card shows Project ID, Customer Name, Designer Name, and overall progress (%).
    *   **Gantt Chart & Timeline Management:** View and update a detailed project timeline. Updating a task's status automatically notifies relevant stakeholders.
    *   **Procurement & Logistics Coordination:**
        *   Review BOQs submitted by designers.
        *   Raise Purchase Orders (POs) to the procurement team or vendors.
        *   Track material delivery status from warehouse to site.
    *   **Budget & Expense Tracking:** Monitor project budget vs. actual spending in real-time. Flag potential overruns.
    *   **Task Management:** Create, assign, and track on-site tasks for various teams (civil, carpentry, electrical).
    *   **Internal Communication Hub:** A dedicated log for internal notes, issues, and discussions, invisible to the customer.

### 4.3 Customer Portal (The "Window of Transparency")

*   **Objective:** To provide customers with a single, trusted source of information and interaction, eliminating anxiety and building confidence.
*   **Core Features:**
    *   **Secure Login:** Simple login using a mobile number (OTP) linked to their unique Project ID.
    *   **Project Dashboard:** A clean, welcoming interface showing overall project progress, next key milestone, and any pending actions (e.g., payment due, design approval).
    *   **Digital Document Vault:** One-click access to all critical documents: signed agreement, final BOQ, 2D/3D designs, and scope of work.
    *   **Visual Progress Tracker:** A simplified version of the Gantt chart, showing completed, in-progress, and upcoming phases.
    *   **Payment Gateway:** View a clear breakdown of the payment schedule, see all past transactions, download invoices, and make secure online payments for milestones.
    *   **Communication & Feedback Log:** A single thread to communicate with the project team, ask questions, and upload reference images. All communication is logged and timestamped.
    *   **Digital Warranty & Handover:** Upon project completion, generate and download a digital warranty card for all applicable items.
    *   **Review & Rating System:** Provide feedback on the designer and the overall Gharinto experience.

### 4.4 Interior Partner Portal (The "Creative Business Suite")

*   **Objective:** To provide designers with a comprehensive toolkit that handles the business side of things, freeing them to focus on design.
*   **Core Features:**
    *   **Professional Onboarding:** Public signup form, followed by a verification and approval process by the admin team.
    *   **Lead Marketplace:** View available leads in their city, filtered by project scope and budget. Accept leads using wallet credits.
    *   **Partner Wallet:** A digital wallet for all financial transactions.
        *   **Credits:** Purchase credits to accept leads.
        *   **Earnings:** Receive milestone payments from projects automatically.
        *   **Withdrawals:** Request bank transfers of their earnings.
        *   **History:** A complete, transparent transaction history.
    *   **E-commerce & BOQ Generator:**
        *   Browse a curated, real-time catalog of materials and furniture from verified vendors.
        *   Add items to a project-specific cart.
        *   Automatically generate an accurate Bill of Quantities (BOQ) and client-facing quotation with Gharinto's commission and taxes pre-calculated.
    *   **Design & Collaboration Canvas:**
        *   Upload 2D/3D designs and other project files.
        *   Generate a secure, shareable link to a visual dashboard for the client to review the design and quote.
    *   **Project Management Lite:** Track the progress of their accepted projects and communicate with the PM and customer.

### 4.5 Vendor Portal (The "Supply Chain Hub")

*   **Objective:** To integrate suppliers directly into the ecosystem for efficient order management and inventory control.
*   **Core Features:**
    *   **Product Catalog Management:** Add, edit, and manage their product listings, including specifications, images, and pricing.
    *   **Inventory Control:** Update stock levels in real-time. Set low-stock alerts.
    *   **Order Management Dashboard:** Receive and view all Purchase Orders from Gharinto.
    *   **Order Fulfillment:** Update order status (Received > Processing > Shipped).
    *   **Financials:** Track payments received from Gharinto and view order history.

## 4. Unified Frontend Development Blueprint

This section provides a comprehensive, actionable guide for building the end-to-end frontend for the Gharinto platform, ensuring all requirements are addressed for each user portal. It is structured to serve as the definitive reference for frontend engineers, UI/UX designers, and QA teams.

### 4.1 General Frontend Principles

- **Framework:** Use React.js (with Next.js for SSR/SEO) and TypeScript for all web portals.
- **Component Library:** Adopt a robust UI library (e.g., Material-UI/Ant Design) for consistency, accessibility, and rapid development.
- **State Management:** Use Redux Toolkit or Zustand for global state, with React Query for server state/data fetching.
- **Design System:** Establish a shared design system (colors, typography, spacing, iconography) and reusable component library.
- **Responsiveness:** All portals must be fully responsive (mobile, tablet, desktop).
- **Accessibility:** Adhere to WCAG 2.1 AA standards.
- **Testing:** Implement unit (Jest), integration (React Testing Library), and E2E (Cypress/Playwright) tests.
- **Internationalization:** Architect for easy localization (i18n) from the outset.

---

### 4.2 Portal-Specific Frontend Requirements

#### 4.2.1 Admin & Operations Portal

- **Authentication:** Secure login with RBAC; session management with JWT.
- **Dashboard:** Modular widgets for KPIs (GMV, active projects, leads, revenue), filterable by date/city.
- **Lead Management:** Data grid with advanced filters, bulk actions, assignment modal with partner suggestions, status tracking.
- **User Management:** CRUD for all user types, verification workflows, status toggles (active/suspended).
- **Project Oversight:** Master project table, drill-down "God View" modal/page with tabs (timeline, financials, communication, documents).
- **Financials:** Transaction tables, withdrawal approval modals, downloadable reports.
- **Catalog & CMS:** Product/category CRUD, WYSIWYG editors for content, image/file uploads.
- **Notifications:** In-app toast and persistent notifications for key actions.

#### 4.2.2 Interior Partner Portal

- **Onboarding:** Multi-step signup with file uploads (portfolio), status banners ("Pending Approval").
- **Dashboard:** Dual-pane layout (Leads, My Projects), real-time updates.
- **Lead Marketplace:** Card/list view, accept/reject actions, wallet balance check, modal for insufficient credits.
- **Project Workspace:** BOQ builder (e-commerce style), catalog search/filter, dynamic pricing, file uploads for designs, submit for approval workflow.
- **Wallet:** Credit/earning balances, recharge flow (integrated payment modal), withdrawal request form, transaction history.
- **Communication:** Project-specific chat/log, file/image sharing, notification badges.

#### 4.2.3 Customer Portal

- **Onboarding:** OTP-based login, first-time setup wizard.
- **Dashboard:** Progress bar, next milestone, action-required cards (design approval, payment), project summary.
- **Design Review:** BOQ and 3D design viewer, approve/request changes with comment modal.
- **Payments:** Milestone-based payment flow, invoice viewer, secure payment gateway integration, receipt downloads.
- **Project Tracking:** Timeline (Gantt-lite), photo gallery (sortable by date), document vault (downloadable files).
- **Handover:** "Generate Warranty" button, PDF download, feedback/rating modal.

#### 4.2.4 Project Manager Dashboard

- **Dashboard:** Project list with urgency/status indicators, quick filters.
- **Timeline Management:** Editable Gantt chart, task completion toggles, auto-notifications.
- **Checklists:** Stage-wise QA checklists, completion status, issue logging modal.
- **Photo Uploads:** Drag-and-drop uploader, gallery preview.
- **Procurement:** BOQ review, order status tracking, vendor communication panel.

#### 4.2.5 Vendor Portal

- **Catalog Management:** Product CRUD forms, image uploads, stock quantity editor, low-stock alerts.
- **Order Dashboard:** Table of POs, status update actions, shipment tracking input.
- **Financials:** Order/payment history, settlement status, downloadable statements.

---

### 4.3 Cross-Cutting Frontend Features

- **Global Search:** Context-aware search bar for quick navigation (projects, users, materials).
- **Notifications:** Real-time (WebSocket/push) and persistent notification center.
- **Profile & Settings:** Editable profile, password reset, notification preferences.
- **Error Handling:** User-friendly error boundaries, retry logic for network failures.
- **Help & Support:** Integrated help center, contact support modal, feedback forms.

---

### 4.4 Frontend-Backend Integration

- **API Layer:** Typed API client (OpenAPI/Swagger-generated or Axios with TypeScript types).
- **Auth:** JWT token management, auto-refresh, secure storage.
- **Data Fetching:** React Query for caching, optimistic updates, and background sync.
- **File Handling:** Direct S3 uploads (pre-signed URLs), progress indicators.
- **Real-Time:** WebSocket integration for live updates (project status, chat, notifications).

---

### 4.5 Quality, CI/CD, and Deployment

- **Linting & Formatting:** ESLint, Prettier, Stylelint enforced via pre-commit hooks.
- **Testing:** 80%+ code coverage target; CI pipeline runs all tests on PR.
- **Preview Environments:** Automatic deploy previews for every PR (Vercel/Netlify).
- **Monitoring:** Frontend error tracking (Sentry), performance analytics (Lighthouse, Web Vitals).

---

This blueprint ensures the frontend is robust, maintainable, and delivers a seamless experience for every Gharinto stakeholder, supporting rapid iteration and future scalability.

## 5. Technology Stack & Architecture Recommendations

To compete with Livspace, the platform must be modern, scalable, and reliable.

| Component | Recommended Technology | Rationale |
| :--- | :--- | :--- |
| **Frontend** | React.js / Next.js, TypeScript | Industry standard for creating fast, interactive, and maintainable user interfaces. |
| **Mobile Apps** | React Native / Flutter | Allows for cross-platform development (iOS/Android) from a single codebase, accelerating time-to-market. |
| **Backend** | Node.js (Express/NestJS) or Python (Django/FastAPI) | Excellent for building scalable, real-time APIs. Microservices architecture is recommended for long-term scalability. |
| **Database** | PostgreSQL (for relational data), MongoDB (for flexible data like BOQs/designs) | A hybrid approach provides both data integrity (for users, payments) and flexibility (for project details). |
| **Cloud & DevOps** | AWS / Google Cloud / Azure | Provides scalable infrastructure (EC2/VMs, S3/Cloud Storage, RDS), serverless functions (Lambda), and robust DevOps tools. |
| **Key Integrations** | - **Payment:** Razorpay / Stripe <br> - **Communication:** Twilio / MSG91 (SMS/Email) <br> - **Analytics:** Google Analytics, Metabase | Use trusted third-party services to handle specialized functions. |

---

## 6. Phased Development & Rollout Plan

A phased approach will mitigate risk and allow for iterative development based on user feedback.

| Phase | Title | Key Deliverables & Goals | Timeline |
| :--- | :--- | :--- | :--- |
| **Phase 1 (Months 1-3)** | **Minimum Viable Platform (MVP)** | - User authentication for all core roles. <br> - Basic portals for Admin, Partner, and Customer. <br> - Manual lead assignment and project creation. <br> - **Goal:** Onboard the first 10 designers and complete the first 5 projects in a single city. |
| **Phase 2 (Months 4-7)** | **Transactional Enablement** | - Full e-commerce catalog and BOQ generator. <br> - Integrated Partner Wallet (credits & earnings). <br> - Secure customer payment gateway. <br> - Automated notification system (Email/SMS). <br> - **Goal:** Prove the core business model and achieve positive unit economics. |
| **Phase 3 (Months 8-12)** | **Scale & Intelligence** | - Launch PM and Vendor Portals. <br> - Develop algorithm-based lead assignment. <br> - Introduce visual Gantt charts and advanced reporting. <br> - Launch mobile apps for Partners and Customers. <br> - **Goal:** Prepare for geographic expansion and scale operations. |

---

## 7. Non-Functional Requirements (NFRs)

*   **Performance:** All pages must load within 3 seconds. Core API responses must be < 500ms.
*   **Scalability:** The architecture must horizontally scale to handle a 10x increase in users and projects year-over-year.
*   **Security:** Full OWASP Top 10 compliance. Data encrypted at rest and in transit. Strict RBAC enforcement across all portals. Regular security audits.
*   **Reliability:** Target 99.9% uptime. Automated daily backups with a clear disaster recovery plan.
*   **Usability:** Interfaces must be intuitive and require minimal training. The platform must be mobile-responsive and adhere to WCAG 2.1 AA accessibility standards.
