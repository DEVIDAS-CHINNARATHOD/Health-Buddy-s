# 🏥 Madimate - Your Personal Health Companion

Madimate is a comprehensive, cross-platform health tracking and management application built with Expo and React Native. It empowers users to monitor their health metrics, manage medications, visualize analytics, and connect with healthcare professionals through an intuitive, modern interface.

## 📱 App Screenshots

Here are the actual screenshots from the Madimate app showing the user interface and key features:

### 🏠 Dashboard
![Dashboard](assets/images/WhatsApp%20Image%202025-08-13%20at%2018.52.25_c743d4d2.jpg)
*The main dashboard showing health metrics, daily activity, and quick access to key features*

### 💊 CURA - Medication Management
![CURA](assets/images/WhatsApp%20Image%202025-08-13%20at%2018.52.25_c7cdf846.jpg)
*Comprehensive medication tracking with dosage reminders and prescription history*

### 📈 Healthyics - Analytics
![Healthyics](assets/images/WhatsApp%20Image%202025-08-13%20at%2018.52.26_248cd509.jpg)
*Advanced health analytics with visual trends and predictive insights*

### 💬 MedTalk - Community
![MedTalk](assets/images/WhatsApp%20Image%202025-08-13%20at%2018.52.26_a980baad.jpg)
*Secure community platform for health discussions and expert consultations*

### 👤 User Profile
![Profile](assets/images/WhatsApp%20Image%202025-08-13%20at%2018.52.26_aeb942b4.jpg)
*Personal health profile with settings and preferences*

### 📊 Health Metrics
![Metrics](assets/images/WhatsApp%20Image%202025-08-13%20at%2018.52.27_053feffe.jpg)
*Detailed health metrics tracking with real-time updates*

### 🔔 Notifications
![Notifications](assets/images/WhatsApp%20Image%202025-08-13%20at%2018.52.27_61b9726f.jpg)
*Smart medication reminders and health alerts*

### ⚙️ Settings
![Settings](assets/images/WhatsApp%20Image%202025-08-13%20at%2018.52.28_71c16ce4.jpg)
*Comprehensive app settings and customization options*

### 📋 Appointment Booking
![Appointments](assets/images/WhatsApp%20Image%202025-08-13%20at%2018.52.28_79455cf7.jpg)
*Easy appointment scheduling with healthcare providers*

### 🏥 Treatment Plans
![Treatment Plans](assets/images/WhatsApp%20Image%202025-08-13%20at%2018.52.28_c239f9a7.jpg)
*Comprehensive treatment plan management and progress tracking*

## 🌟 Key Features

- **📊 Smart Dashboard**: Real-time health metrics, activity tracking, and personalized insights
- **💊 CURA**: Complete medication management with reminders, dosage tracking, and prescription history
- **📈 Healthyics**: Advanced health analytics with trend analysis and predictive insights
- **💬 MedTalk**: Secure community platform for health discussions and expert consultations
- **👤 Profile**: Comprehensive user management with health history and preferences
- **🎨 Adaptive Design**: Beautiful light/dark themes with customizable color schemes
- **📱 Cross-Platform**: Seamless experience across iOS, Android, and web

## 🛠️ Technology Stack

- **Frontend**: React Native with Expo
- **Language**: TypeScript
- **State Management**: Zustand
- **Data Fetching**: React Query (TanStack Query)
- **Navigation**: Expo Router v3
- **Styling**: NativeWind (Tailwind CSS)
- **Icons**: Lucide React Native
- **Storage**: AsyncStorage for offline support

## 📁 Project Structure
Madimate/
├── app/                          # Main application code
│   ├── (tabs)/                   # Tab navigation screens
│   │   ├── _layout.tsx          # Tab layout configuration
│   │   ├── index.tsx            # Dashboard/home screen
│   │   ├── cura.tsx             # Medication management
│   │   ├── healthyics.tsx       # Health analytics
│   │   ├── medtalk.tsx          # Community platform
│   │   └── profile.tsx          # User profile
│   ├── _layout.tsx              # Root layout
│   ├── auth.tsx                 # Authentication screens
│   ├── onboarding.tsx           # User onboarding
│   ├── modal.tsx                # Modal components
│   └── +not-found.tsx           # 404 error screen
├── components/                   # Reusable UI components
│   ├── cura/                    # CURA-specific components
│   │   ├── AppointmentCard.tsx
│   │   ├── DoctorCard.tsx
│   │   ├── MedicationCard.tsx
│   │   ├── TestReportCard.tsx
│   │   └── TreatmentPlanCard.tsx
│   └── community/               # MedTalk components
│       ├── ChallengeCard.tsx
│       ├── ExpertAnswerCard.tsx
│       ├── GroupCard.tsx
│       └── PostCard.tsx
├── constants/                   # App constants
│   ├── colors.ts               # Color definitions
│   ├── cura.ts                 # CURA constants
│   └── community.ts            # Community constants
├── contexts/                    # React contexts
│   ├── AuthContext.tsx
│   └── ProfileContext.tsx
├── types/                       # TypeScript definitions
│   ├── cura.ts                 # CURA data types
│   ├── community.ts            # Community data types
│   └── profile.ts              # Profile data types
├── assets/                      # Static assets
│   └── images/
│       ├── icon.png
│       ├── adaptive-icon.png
│       ├── splash-icon.png
│       └── favicon.png
├── app.json                     # Expo configuration
├── package.json                 # Dependencies
├── tsconfig.json               # TypeScript configuration
└── bun.lock                    # Bun lock file


## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- Bun package manager
- Expo CLI

### Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd madimate
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Start the development server**
   ```bash
   bunx expo start
   ```

4. **Run on your device**
   - **iOS**: Press `i` to open in iOS Simulator
   - **Android**: Press `a` to open in Android Emulator
   - **Physical Device**: Scan the QR code with Expo Go app

### Environment Setup

Create a `.env` file in the root directory:
```env
EXPO_PUBLIC_API_URL=your-api-url
EXPO_PUBLIC_ENV=development
```

## 🎯 Core Features Deep Dive

### CURA - Medication Management
- **Smart Reminders**: AI-powered notification timing
- **Drug Interactions**: Real-time safety checks
- **Refill Tracking**: Automatic prescription monitoring
- **Family Management**: Manage medications for family members

### Healthyics - Analytics Engine
- **Trend Analysis**: 7-day, 30-day, and yearly health trends
- **Predictive Insights**: AI-powered health predictions
- **Goal Tracking**: Customizable health objectives
- **Export Reports**: PDF health summaries for doctors

### MedTalk - Community Platform
- **Expert Verified**: Healthcare professional consultations
- **Support Groups**: Condition-specific communities
- **Health Challenges**: Gamified wellness programs
- **Anonymous Mode**: Privacy-first discussions

## 🎨 Design System

Madimate follows a comprehensive design system:
- **Colors**: Primary health-focused palette with accessibility compliance
- **Typography**: Optimized for readability across devices
- **Components**: Consistent, reusable UI elements
- **Animations**: Smooth micro-interactions for better UX

## 🔐 Security & Privacy

- **End-to-End Encryption**: All health data is encrypted
- **HIPAA Compliance**: Medical-grade privacy standards
- **Biometric Authentication**: Face ID/Touch ID support
- **Data Anonymization**: Personal data never shared

## 🧪 Testing Strategy

- **Unit Tests**: Jest for component testing
- **Integration Tests**: React Native Testing Library
- **E2E Tests**: Detox for critical user flows
- **Performance Tests**: Lighthouse for web performance

## 📱 Platform Support

| Platform | Version | Status |
|----------|---------|--------|
| iOS      | 13.0+   | ✅ Full Support |
| Android  | 8.0+    | ✅ Full Support |
| Web      | Modern  | ✅ Beta Support |


### Quick Start for Contributors
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📊 Analytics & Monitoring

- **Performance Monitoring**: Firebase Performance
- **Crash Reporting**: Sentry integration
- **User Analytics**: Privacy-first analytics
- **Health Metrics**: Anonymous usage patterns

## 🗺️ Roadmap

### Q1 2024
- [ ] Wearable device integration
- [ ] AI health coach
- [ ] Medication barcode scanning

### Q2 2024
- [ ] Family health dashboard
- [ ] Emergency contact features
- [ ] Doctor appointment booking

### Q3 2024
- [ ] Telemedicine integration
- [ ] Health insurance connections
- [ ] Advanced analytics API

## 📞 Support

- **Documentation**: [docs.madimate.com](https://docs.madimate.com)
- **Community**: [community.madimate.com](https://community.madimate.com)
- **Email**: support@madimate.com
- **Twitter**: [@madimate_app](https://twitter.com/madimate_app)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Made with ❤️ by the Madimate Team**