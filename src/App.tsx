import React, {Suspense} from "react";
import "./styles/styles.sass";
import "react-multi-carousel/lib/styles.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import routes from "./routes";
import PreloaderPage from "./pages/PreloaderPage";
import HomePage from "./pages/HomePage";
import PlatformPage from "./pages/PlatformPage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import SpecialistsPage from "./pages/SpecialistsPage";
import TestPage from "./pages/TestPage";
import PolicyPrivacyPage from "./pages/PolicyPrivacyPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import RestorePasswordPage from "./pages/RestorePasswordPage";
import ProfilePage from "./pages/ProfilePage";
import SpecialistPage from "./pages/SpecialistPage";
import ArticlePage from "./pages/ArticlePage";
import PaidArticlePage from "./pages/PaidArticlePage";

function App() {
    return (
        <Suspense fallback={<PreloaderPage />}>
            <Router>
                <Routes>
                    <Route path={routes.home} element={<HomePage />} />
                    <Route path={routes.platform} element={<PlatformPage />} />
                    <Route path={routes.about} element={<AboutPage />} />
                    <Route path={routes.contacts} element={<ContactsPage />} />
                    <Route path={routes.specialists} element={<SpecialistsPage />} />
                    <Route path={routes.singleSpecialist} element={<SpecialistPage />} />
                    <Route path={routes.article} element={<ArticlePage />} />
                    <Route path={routes.paidArticle} element={<PaidArticlePage />} />
                    <Route path={routes.test} element={<TestPage />} />
                    <Route path={routes.policyPrivacy} element={<PolicyPrivacyPage />} />
                    <Route path={routes.login} element={<LoginPage />} />
                    <Route path={routes.restorePassword} element={<RestorePasswordPage />} />
                    <Route path={routes.profile} element={<ProfilePage />} />
                    <Route path='*' element={<NotFoundPage />}/>
                </Routes>
            </Router>
        </Suspense>
    );
}

export default App;
