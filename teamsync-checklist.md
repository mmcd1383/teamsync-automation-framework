
# TeamSync Automation Project — Progress Checklist

## 📌 Phase 1 — Framework Foundation
### 🎯 Goal: Get a strong, professional automation framework set up.

#### 1.1 Playwright + TypeScript Setup
- [x] Initialise Playwright project
- [x] Install browsers
- [x] Confirm basic test runs
- [x] Run tests in headed/debug mode

#### 1.2 Project Structure
- [x] Create `src/` folder structure
  - [x] pages
  - [x] api
  - [x] utils
  - [x] data
  - [x] fixtures
- [x] Clean default Playwright example tests (optional)

#### 1.3 Page Object Model (POM)
- [x] Create first page object (`HomePage`)
- [x] Create TeamSync page objects
- [x] Build reusable actions & locators

#### 1.4 Configuration Setup
- [x] Playwright config created
- [x] Headed mode option
- [x] slowMo (optional for learning)
- [ ] Multi-browser config
- [ ] Environment support (dev/test/prod)
- [ ] Base URL config

#### 1.5 Reporting
- [ ] Enable HTML reporter
- [ ] Set up Allure reporting
- [ ] Generate first HTML report

#### 1.6 Sample Tests
- [x] Run first example test
- [x] Create first TeamSync test
- [x] Fix navigation + caching issues
- [x] Add debug `page.pause()`

---

## 📌 Phase 2 — Build Core TeamSync Application (MVP UI)
### 🎯 Goal: Make a simple but realistic UI to automate.

#### 2.1 Homepage
- [x] Create `index.html`
- [x] Add header + create team button
- [x] Link button to next page

#### 2.2 Create Team Page
- [x] Create `create-team.html`
- [x] Add input box + button
- [x] Add “Save team successfully!” behaviour
- [x] Add validation ("Please enter a team name")

#### 2.3 Navigation
- [x] Homepage → Create Team
- [x] Browser navigates reliably

#### 2.4 Save Team Logic
- [x] Placeholder behaviour
- [x] Show success message
- [x] Add save status element
- [ ] Persist saved teams to a list (coming soon)

#### 2.5 Visual Clean-up (Optional)
- [ ] Basic styling
- [ ] Add TeamSync logo/title (optional)

---

## 📌 Phase 3 — Scheduling & Attendance (coming soon)
### 🎯 Goal: Build training/match scheduling features.
- [ ] Create Scheduling Page
- [ ] Add “Create Training Session”
- [ ] Add “Create Match Day”
- [ ] Store session data
- [ ] RSVP logic
- [ ] Attendance counter
- [ ] Reminder messages (UI simulation)

---

## 📌 Phase 4 — Group Chat Feature
### 🎯 Goal: Simple team chat with message storage.
- [ ] Build Chat Page
- [ ] Add message input box
- [ ] Display chat messages
- [ ] Simulate “real-time” refresh
- [ ] Persist messages in local JS array

---

## 📌 Phase 5 — End-to-End Automation Coverage
### 🎯 Goal: Automate everything built so far.

#### 5.1 Coach Workflows
- [ ] Create Team (E2E)
- [ ] Create Schedule (E2E)
- [ ] Invite Flow
- [ ] Dashboard Navigation
- [ ] Chat Interaction

#### 5.2 Player Workflows
- [ ] Join team via invite link
- [ ] RSVP to training sessions
- [ ] View schedule
- [ ] Send chat messages

#### 5.3 API Automation (when backend added)
- [ ] Test team creation API
- [ ] Test schedule create/retrieve
- [ ] Test invite generation
- [ ] Negative cases

#### 5.4 Edge Cases
- [ ] Empty team names
- [ ] Duplicate names
- [ ] Invalid invite link
- [ ] Missing schedule fields

---

## 📌 Phase 6 — Polish & CI/CD
### 🎯 Goal: Make the project production-grade.
- [ ] Create GitHub Actions CI pipeline
- [ ] Generate reports in CI
- [ ] Add README documentation
- [ ] Add test strategy document
- [ ] Refactor structure where needed
- [ ] Add screenshots & demos to repo

---

## ⭐ Bonus: Optional Enhancements
- [ ] Add a JSON backend with Node.js
- [ ] Replace raw HTML with a small frontend framework
- [ ] Add dark mode toggle
- [ ] Store chat messages across sessions
- [ ] Add animations, icons, UX polish
