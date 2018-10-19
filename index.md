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