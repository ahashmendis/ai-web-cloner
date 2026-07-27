# Graph Report - .  (2026-07-26)

## Corpus Check
- Large corpus: 203 files · ~608,201 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 336 nodes · 393 edges · 25 communities (17 shown, 8 thin omitted)
- Extraction: 92% EXTRACTED · 8% INFERRED · 0% AMBIGUOUS · INFERRED: 30 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Project Package Metadata
- Research & Inspection
- UI Components (Left)
- Core Components (Right)
- Component Specs & Patterns
- Navigation & Media
- Clone Website Skill
- shadcn/ui Config
- Runtime Dependencies
- TypeScript Config
- Dev Dependencies
- Project Config & CI
- TypeScript Types
- TypeScript References
- Asset Download Script
- Skills Sync Script
- App Layout & Fonts
- Agent Rules Sync
- Docker Compose
- ESLint Config
- Project Documentation
- Next.js Config
- PostCSS Config
- GitHub Funding
- Issue Template Config

## God Nodes (most connected - your core abstractions)
1. `Clone Website Skill (Canonical)` - 22 edges
2. `compilerOptions` - 16 edges
3. `Section Label Pattern` - 12 edges
4. `Responsive Breakpoints` - 11 edges
5. `Website Inspection Guide` - 10 edges
6. `keywords` - 9 edges
7. `cn()` - 9 edges
8. `scripts` - 7 edges
9. `include` - 7 edges
10. `AGENTS.md — Master Project Instructions` - 7 edges

## Surprising Connections (you probably didn't know these)
- `Parallel Builder Pattern` --semantically_similar_to--> `Five-Phase Inspection Methodology`  [INFERRED] [semantically similar]
  README.md → docs/research/INSPECTION_GUIDE.md
- `Amazon Q Project Rules` --semantically_similar_to--> `AGENTS.md — Master Project Instructions`  [EXTRACTED] [semantically similar]
  .amazonq/rules/project.md → AGENTS.md
- `Continue Project Rules` --semantically_similar_to--> `AGENTS.md — Master Project Instructions`  [EXTRACTED] [semantically similar]
  .continue/rules/project.md → AGENTS.md
- `GitHub Copilot Instructions` --semantically_similar_to--> `AGENTS.md — Master Project Instructions`  [EXTRACTED] [semantically similar]
  .github/copilot-instructions.md → AGENTS.md
- `Augment Clone Website Command` --semantically_similar_to--> `Clone Website Skill (Canonical)`  [EXTRACTED] [semantically similar]
  .augment/commands/clone-website.md → .claude/skills/clone-website/SKILL.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Five-Phase Clone Pipeline Sequential Flow** — reconnaissance_phase, foundation_build_phase, component_spec_dispatch_phase, page_assembly_phase, visual_qa_diff_phase [EXTRACTED 1.00]
- **Multi-Platform Instruction Sync Fan-Out** — agents_md, claude_skills_clone_website_skill_md, multi_platform_sync, amazonq_rules_project_md, continue_rules_project_md, github_copilot_instructions_md, augment_commands_clone_website_md, codex_skills_clone_website_skill_md, continue_commands_clone_website_md, cursor_commands_clone_website_md, github_skills_clone_website_skill_md, opencode_commands_clone_website_md, windsurf_workflows_clone_website_md [EXTRACTED 1.00]
- **Core Extraction Pipeline: Foreman + Spec + Dispatch + Worktree** — foreman_pattern, component_spec_template, extract_spec_dispatch_merge, worktree_isolation, interaction_model_classification [EXTRACTED 1.00]
- **organicslk.com research output artifacts** — docs_research_organicslk_com_behaviors_md, docs_research_organicslk_com_page_topology_md, pw_2026_07_25t15_13_20_505z, pw_2026_07_25t17_46_09_655z, pw_2026_07_25t17_47_21_824z, pw_2026_07_25t17_51_38_414z, pw_2026_07_25t17_52_20_551z, pw_2026_07_25t17_53_36_907z, pw_2026_07_25t17_54_54_647z, pw_2026_07_25t17_55_53_340z, pw_2026_07_25t17_57_06_170z, pw_2026_07_25t17_57_22_416z, pw_2026_07_25t17_58_55_792z, pw_2026_07_25t18_08_09_953z [EXTRACTED 1.00]
- **Website inspection methodology phases** — docs_research_inspection_guide_md, docs_research_inspection_guide_md_visual_audit, docs_research_inspection_guide_md_component_inventory, docs_research_inspection_guide_md_layout_architecture, docs_research_inspection_guide_md_tech_stack_analysis, docs_research_inspection_guide_md_visual_audit_phases [EXTRACTED 1.00]
- **organicslk.com interactive behaviors** — docs_research_organicslk_com_behaviors_md, docs_research_organicslk_com_behaviors_md_navigation_float_transition, docs_research_organicslk_com_behaviors_md_scroll_driven_animations, docs_research_organicslk_com_behaviors_md_responsive_breakpoints [EXTRACTED 1.00]
- **Shared Glass-morphism Card Visual System** — docs_research_organicslk_com_components_case_studiestsspec_component_case_studies, docs_research_organicslk_com_components_testimonials_tsspec_component_testimonials, docs_research_organicslk_com_components_faq_tsspec_component_faq, docs_research_organicslk_com_components_who_we_are_tsspec_component_who_we_are, docs_research_organicslk_com_components_final_cta_tsspec_component_final_cta, docs_research_organicslk_com_components_packages_tsspec_component_packages, concept_glass_morphism_card_pattern [EXTRACTED 1.00]
- **Section Layout Consistency (120px padding, 1440px max-width)** — docs_research_organicslk_com_components_case_studiestsspec_component_case_studies, docs_research_organicslk_com_components_contact_section_tsspec_component_contact_section, docs_research_organicslk_com_components_faq_tsspec_component_faq, docs_research_organicslk_com_components_final_cta_tsspec_component_final_cta, docs_research_organicslk_com_components_gallery_tsspec_component_gallery, docs_research_organicslk_com_components_packages_tsspec_component_packages, docs_research_organicslk_com_components_process_steps_tsspec_component_process_steps, docs_research_organicslk_com_components_who_we_are_tsspec_component_who_we_are, concept_section_label_pattern, rationale_design_system_consistency [EXTRACTED 1.00]
- **btn-3d CTA Button Distribution Across Funnel** — docs_research_organicslk_com_components_navbar_tsspec_component_navbar, docs_research_organicslk_com_components_hero_section_tsspec_component_hero_section, docs_research_organicslk_com_components_packages_tsspec_component_packages, docs_research_organicslk_com_components_contact_section_tsspec_component_contact_section, docs_research_organicslk_com_components_final_cta_tsspec_component_final_cta, concept_btn_3d_button_pattern [EXTRACTED 1.00]

## Communities (25 total, 8 thin omitted)

### Community 0 - "Project Package Metadata"
Cohesion: 0.06
Nodes (30): author, bugs, url, description, engines, node, homepage, keywords (+22 more)

### Community 1 - "Research & Inspection"
Cohesion: 0.08
Nodes (27): Website Inspection Guide, Component Inventory, Layout Architecture, Tech Stack Analysis, Visual Audit, Five-Phase Inspection Methodology, BEHAVIORS.md - organicslk.com, Navigation Float Transition (+19 more)

### Community 2 - "UI Components (Left)"
Cohesion: 0.10
Nodes (16): caseStudies, CaseStudy, CaseStudyStat, faqData, companyLinks, resourceLinks, ArrowLeftIcon(), ArrowRightIcon() (+8 more)

### Community 3 - "Core Components (Right)"
Cohesion: 0.08
Nodes (11): pills, BrandLogo, brandLogos, PackageCardProps, PERSONAL_BRAND_FEATURES, STANDARD_FEATURES, ProcessStep, ProcessSteps() (+3 more)

### Community 4 - "Component Specs & Patterns"
Cohesion: 0.17
Nodes (23): btn-3d Button Pattern, CSS Marquee Animation Pattern, Dark/Light Theme Design Token System, Glass-morphism Card Pattern, Scroll-driven Nav Floating Mode, Scroll Fade-in Animation Pattern, Section Label Pattern, Tag Pill Pattern (+15 more)

### Community 5 - "Navigation & Media"
Cohesion: 0.13
Nodes (15): GalleryRow(), GalleryTile, ROW_1_TILES, ROW_2_TILES, ROW_3_TILES, CloseIcon(), MenuIcon(), lerp() (+7 more)

### Community 6 - "Clone Website Skill"
Cohesion: 0.14
Nodes (22): Augment Clone Website Command, Clone Website Skill (Canonical), Codex Clone Website Skill, Complexity Budget Rule, Phase 3: Component Specification & Dispatch, Component Specification Template, Continue Clone Website Command, Cursor Clone Website Command (+14 more)

### Community 7 - "shadcn/ui Config"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 8 - "Runtime Dependencies"
Cohesion: 0.10
Nodes (21): @base-ui/react, class-variance-authority, clsx, lucide-react, next, dependencies, @base-ui/react, class-variance-authority (+13 more)

### Community 9 - "TypeScript Config"
Cohesion: 0.10
Nodes (21): dom, dom.iterable, esnext, ./src/*, compilerOptions, allowJs, esModuleInterop, incremental (+13 more)

### Community 10 - "Dev Dependencies"
Cohesion: 0.12
Nodes (17): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node (+9 more)

### Community 11 - "Project Config & CI"
Cohesion: 0.15
Nodes (13): AGENTS.md — Master Project Instructions, Aider Configuration, Amazon Q Project Rules, Continue Project Rules, Five-Phase Clone Pipeline, GitHub Copilot Instructions, Copilot Setup Steps, Feature Request Issue Template (+5 more)

### Community 12 - "TypeScript Types"
Cohesion: 0.15
Nodes (12): BrandLogo, CaseStudy, ContactInfo, FAQItem, FooterLink, GalleryTile, ImpactStat, NavLink (+4 more)

### Community 13 - "TypeScript References"
Cohesion: 0.20
Nodes (9): **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude (+1 more)

### Community 14 - "Asset Download Script"
Cohesion: 0.38
Nodes (6): ASSETS, batchDownload(), __dirname, downloadFile(), main(), PUBLIC

### Community 15 - "Skills Sync Script"
Cohesion: 0.29
Nodes (4): geminiBody, match, ROOT, SOURCE

### Community 16 - "App Layout & Fonts"
Cohesion: 0.40
Nodes (3): geistMono, geistSans, metadata

## Knowledge Gaps
- **172 isolated node(s):** `$schema`, `style`, `rsc`, `tsx`, `config` (+167 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Website Inspection Guide` connect `Research & Inspection` to `Project Config & CI`, `Clone Website Skill`?**
  _High betweenness centrality (0.023) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Runtime Dependencies` to `Project Package Metadata`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **Why does `Clone Website Skill (Canonical)` connect `Clone Website Skill` to `Project Config & CI`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **Are the 9 inferred relationships involving `Responsive Breakpoints` (e.g. with `Playwright snapshot - organicslk.com mobile (17:47)` and `Playwright snapshot - organicslk.com mobile (17:52)`) actually correct?**
  _`Responsive Breakpoints` has 9 INFERRED edges - model-reasoned connections that need verification._
- **What connects `$schema`, `style`, `rsc` to the rest of the system?**
  _172 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Project Package Metadata` be split into smaller, more focused modules?**
  _Cohesion score 0.06451612903225806 - nodes in this community are weakly interconnected._
- **Should `Research & Inspection` be split into smaller, more focused modules?**
  _Cohesion score 0.082010582010582 - nodes in this community are weakly interconnected._