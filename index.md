---
title: Home Page
layout: index
education:
- title: 
- title: 
experience:
- title: Director - Science and Policy
  company: Casey Trees
  date-start: July 2012
  date-end: 
  details: |-
    *Program Strategy and Management*
      * Manage finances and operations of the department.
      * Develop and execute departmental strategic plan, support and direction including an annual budget to guide overall programmatic direction to improve organizational efficiency and impact.
      * Management and evaluation of department staff and program-related activities.
      * Grant proposal, implementation, management, reporting and tracking.
      * Lead on developing annual program evaluations.
      * Initiated and conducted a departmental merger of the Design and Advocacy Department and the Technical Services and Research Department in order to create efficiencies and streamline organizational goals using research to inform policy.
  org: Casey Trees
  role:
  - title: " Director - Science and Policy"
    timeline: April 2018 – present
  - title: " Director \L- Technical Services and Research"
    timeline: 'July 2012 – March 2018 '
    description: "**Program Strategy and Management**\n\n* Manage finances and operations
      of the department.\t\n* Develop and execute departmental strategic plan, support
      and direction including an annual budget to guide overall programmatic direction
      to improve organizational efficiency and impact.\n* Management and evaluation
      of department staff and program-related activities.\n* Grant proposal, implementation,
      management, reporting and tracking. \n* Lead on developing annual program evaluations.\n*
      Initiated and conducted a departmental merger of the Design and Advocacy Department
      and the Technical Services and Research Department in order to create efficiencies
      and streamline organizational goals using research to inform policy.\n\n**Policy
      Strategy and Implementation**\n\n* Strategic policy city-wide initiatives that
      involve trees in development, regulation and legislative issues.\n* Communicate
      with developers, legislatures and other decision makers to keep the urban forest
      healthy\n* Manage and engage a volunteer group of tree advocates around development,
      tree preservation and expanding tree canopy throughout the District.\n\n\t**Technical
      Services**\n\n* Development and implementation of a mobile application and technological
      upgrades to address structural inadequacies including a new tree tracking application
      and GIS server to manage tree data in real time.   \n* Oversee, conduct and
      refine: data collection, analysis, mapping, data tracking and related services
      to assist other departments achieve goals and objectives, and; to assist partners
      in their efforts as needs dictate.\n* Unique scientific content creation for
      web pages and brochures.\n* Translation of scientific expertise for a non-technical
      audience.\n\n**Outreach**\n\n* Creation a citizen science program to engage
      volunteers and further research capacity.\n* Creation and implementation of
      a joint Partnership with Davey Trees to create iTreeLessons.com - a freely available
      middle school unit aligned with Next Generation Science Standards (NGSS) and
      Common Core.\n* Increases outreach, awareness, partnerships and participation
      through development, implementation, and promotion of online mapping, CT application
      and web-based tree interaction tools.\n* Oversee and implement a biennial research
      conference with 300 + attendees focused around Livable Communities.\n\n**Research**\n\n*
      Oversees existing research and builds organizational portfolio to increase research.
       Partners with academic institutions, non-profits, for-profits and others to
      further organizational mission and operational objectives.\n* Oversees annual
      fellowship competition for researchers in urban forestry.\n* Provides data compilation,
      analysis, report language and related support for all publications.\n* Monitors
      the conditions and extent of DC’s (and metro’s) urban forest through regular
      aerial and on-ground assessments and works with partners to build regional coordination/cooperation."
papers:
- title: 
  link: 
press:
- outlet: 
  logo: 
  link: 
teaching:
- 
about: lorem ipsum

---
<div id="home">
 <section id="about-me">
   <article>
    <h2>About me</h2>
    {{ page.about | markdownify }}
   </article>
 </section>
 <section id="experience">
   <article>
     <h2>Professional Experience</h2>
     {% for experience in page.experience %}
     <div class="experience">
       <h4></h4>{{ experience.title }}
     </div>
     {% endfor %}
   </article>
 </section>
</div>