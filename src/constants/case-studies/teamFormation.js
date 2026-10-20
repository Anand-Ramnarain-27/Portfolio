/**
 * Team Formation Platform: full-stack TypeScript web app. Facts come from the
 * public repository (README, Prisma schema, Azure Functions, OpenAPI spec and
 * commit history).
 */
import { team } from "../../assets";
import { still } from "./media";

const teamFormation = {
  slug: "team-formation-platform",
  title: "Team Formation Platform",
  tagline:
    "A full-stack web app for running student group projects: ideas are submitted and voted on, the winning ideas become teams, and everyone else is assigned to one. React and TypeScript in front of a serverless TypeScript API and PostgreSQL.",
  image: team,
  meta: {
    role: "Full-stack developer",
    team: "Public repository: 108 commits",
    timeline: "Dec 2024 – Mar 2025",
    stack: ["TypeScript", "React", "Azure Functions", "PostgreSQL", "Prisma", "Docker"],
  },
  stats: [
    { value: "2", label: "roles with their own views: admin and student" },
    { value: "17", label: "API paths described in an OpenAPI spec" },
    { value: "15", label: "HTTP functions on Azure" },
    { value: "1", label: "Nx monorepo for front end, back end and API design" },
  ],
  links: {
    source: "https://github.com/Anand-Ramnarain-27/team-formation-project",
  },

  overview: {
    summary:
      "Forming student project groups by hand is slow. This platform turns it into a process: an admin opens a topic, students submit ideas and vote, the most-voted ideas become teams led by the student who proposed them, and the remaining students can be assigned automatically. Afterwards, students review and rate their teammates.",
    sections: [
      {
        heading: "What it does",
        list: [
          "Admins create topics with a voting deadline and a number of groups, manage students and groups, and see analytics, reviews and ratings.",
          "Students submit ideas, vote on their peers' ideas, see which group they've been placed in, and review their teammates.",
          "Everyone signs in with their GitHub account.",
        ],
      },
      {
        heading: "Why it's here",
        body: "Most of my portfolio is C++ and real-time 3D. This project shows the other half of what I do: a typed, end-to-end web application with a relational data model, a documented API, migrations and containerised environments, the same stack I worked in at BBD Software.",
      },
      {
        heading: "What I'd do next",
        body: "The scheduled version of team assignment is written but switched off, and only a manually triggered version runs. I'd enable the timer trigger, replace the random shuffle with assignment that balances group sizes and skills, and add automated API tests.",
      },
    ],
    shows: [
      "End-to-end web development: React UI, API, database and auth",
      "Relational data modelling with migrations",
      "API design documented with OpenAPI",
      "Serverless back end on Azure Functions",
      "Docker and an Nx monorepo for a reproducible setup",
    ],
  },

  technical: {
    architecture: {
      body: "An Nx monorepo holds three apps: a React front end, an Azure Functions back end in TypeScript, and an OpenAPI design that documents the API. Prisma maps a PostgreSQL schema of users, topics, ideas, votes, groups, members, reviews and notifications; Docker provides the local database environment.",
      pipeline: [
        "React + TypeScript (admin & student views)",
        "Azure Functions HTTP API (TypeScript)",
        "Prisma ORM",
        "PostgreSQL",
      ],
    },
    systems: [
      {
        title: "Authentication & roles",
        body: "Sign-in uses GitHub OAuth: the function exchanges the code for an access token, reads the user's profile and primary email, and upserts the user with a role decided from that email. The role decides which views and actions the front end offers.",
      },
      {
        title: "Voting and team creation",
        body: "When a topic's voting closes, ideas are ranked by vote count, with ties broken by which was submitted first. The top N ideas, where N is the topic's group count, become groups, and each idea's author is the team lead.",
      },
      {
        title: "Assigning everyone else",
        body: "Students without a group are shuffled and dealt round-robin into the new groups in a single batch insert. A timer-triggered version is written but currently disabled; the working version runs on request through an HTTP function.",
      },
      {
        title: "Data model",
        body: "A Prisma schema on PostgreSQL with explicit relations for who created, submitted, voted, led, reviewed and was reviewed, plus notifications. Schema changes go through migrations, so every environment can be rebuilt from scratch.",
      },
      {
        title: "Front end",
        body: "React with React Router and CSS modules, split into admin pages (dashboard, analytics, student and group management, reviews) and student pages (dashboard, voting, profile, reviews), built from shared card, form, modal and navigation components.",
        media: [still(team, "Sign-in screen")],
      },
    ],
    challenges: [],
    next: [
      "Enable the scheduled assignment and make it balance group sizes and skills",
      "Automated tests for the API and the assignment logic",
      "A hosted demo with seeded data",
    ],
  },
  gallery: [],
};

export default teamFormation;
