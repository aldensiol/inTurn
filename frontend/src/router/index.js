import { createRouter, createWebHistory } from "vue-router";
import Introduction from "../components/LandingPage/Introduction.vue";
import LandingTracker from "@/components/LandingPage/LandingTracker.vue";
import LandingJoinUs from "../components/LandingPage/LandingJoinUs.vue";
import LandingFooter from "../components/LandingPage/LandingFooter.vue";
import RegisterationPage from "../views/RegisterationPage.vue";
import LandingPage from "../views/LandingPage.vue";
import HomePage from "../views/HomePage.vue";
import PostingPage from "../views/PostingPage.vue";
// import TrackingPage from "../views/TrackingPage.vue";
import TestingPage from "@/TestingPage.vue";

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/",
    name: "Introduction",
    component: Introduction,
  },
  {
    path: "/",
    name: "Tracker",
    component: LandingTracker,
  },
  {
    path: "/",
    name: "LandingJoinUs",
    component: LandingJoinUs,
  },
  {
    path: "/",
    name: "LandingFooter",
    component: LandingFooter,
  },
  {
    path: "/register",
    name: "RegisterationPage",
    component: RegisterationPage,
  },
  {
    path: "/home",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/postings",
    name: "PostingPage",
    component: PostingPage,
  },
  // {
  //   path: "/trackings",
  //   name: "TrackingPage",
  //   component: TrackingPage,
  // },
  {
    path: "/test",
    name: "TestingPage",
    component: TestingPage,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: "smooth" };
    }
  },
});

// Add global navigation guard to handle redirection
router.beforeEach((to, from, next) => {
  // Check if the current URL contains a fragment identifier
  if (window.location.hash) {
    // Redirect to the base URL
    window.location.href = window.location.origin;
  } else {
    next();
  }
});

export default router;
