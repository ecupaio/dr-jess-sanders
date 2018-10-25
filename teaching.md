---
teaching:
- school: Rutgers
  role:
  - title: Course Supervisor
    courses:
      - title: Higher Education Leadership
        semester: Spring 2011, 2012
      - title: Leadership Issues in Higher Education
        semester: Fall 2011, 2010
  role:
    - title: Visiting Lecturer
      courses:
        - title: Trees and the Environment
        - title: Urban Forestry
        - title: Students
        - title: Expanding the Learning Environment
        - title: Group Work and Assessment
  role:
    title: Course Instructor
    courses:
      - title: College Teaching II
        semester: Fall 2008, 2009, 2011
      - title: Arboriculture
        semester: Fall 2009
      - title: Assistant Head Teaching Assistant
        semester: Fall 2005 – Summer 2009
---      
{% for school in page.teaching %}
  {% for role in school %}
  {{ role.title }}
  {% endfor %}
{% endfor %}
