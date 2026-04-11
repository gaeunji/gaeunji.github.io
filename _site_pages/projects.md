---
layout: page
title: Projects
permalink: /projects/
description: "Selected projects by [YOUR NAME]."
---

<section>
  <div class="section-title">Selected Projects</div>
  <div class="projects-grid">
    {% assign sorted_projects = site.projects | sort: "date" | reverse %}
    {% for project in sorted_projects %}
      <div class="project-card">
        <div class="project-header">
          <div class="project-title"><a href="{{ project.url | relative_url }}">{{ project.title }}</a></div>
          <span class="project-org">{{ project.status }}</span>
        </div>
        <div class="project-subtitle">{{ project.date | date: "%Y-%m" }}</div>
        <ul class="project-bullets">
          <li>{{ project.summary }}</li>
        </ul>
      </div>
    {% endfor %}
  </div>
</section>
