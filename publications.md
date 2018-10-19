---
title: Selcted Publications
layout: index
pubs:
  - title:
    authors:
    year:
    source:
    link:
---
<div id="pubs">
  {% for pub in page.pub %}
  <a class="pub" href="">
    <h3 class="pub-title"></h3>
    <div class="pub-authors">
      <span class="featured">Sanders JR</span>, {{ pub.authors }}
    </div>
    <div class="pub-year">{{ pub.year }}</div>
  </a>
  {% endfor %}
</div>
