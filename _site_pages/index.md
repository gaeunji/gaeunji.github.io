---
layout: home
title: About
description: "About Gaeun Ji, M.S. student in Computer Science at Kyung Hee University."
permalink: /
---

<div class="container">
  <section>
    <div class="section-title">News</div>
    <ul class="news-list">
      <li class="news-item">
        <span class="news-date">2026</span>
        <span class="news-content">Started M.S. research focused on robustness and reliability in language models.</span>
        <span class="news-tag career">Research</span>
      </li>
      <li class="news-item">
        <span class="news-date">2025</span>
        <span class="news-content">Participated in team projects on practical machine learning and data-driven problem solving.</span>
        <span class="news-tag award">Project</span>
      </li>
    </ul>
    <div style="margin-top:12px;">
      <button class="more-news-btn" id="moreNewsBtn" onclick="toggleMoreNews()">
        <span class="more-news-arrow">▸</span> More News
      </button>
      <div class="more-news-body" id="moreNewsBody">
        <ul class="news-list" style="margin-top:4px;">
          <li class="news-item">
            <span class="news-date">2001</span>
            <span class="news-content">Birth</span>
            <span class="news-tag paper">Event</span>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section>
    <div style="display:flex; align-items:baseline; justify-content:space-between;">
      <div class="section-title" style="flex:1; margin-bottom:0; border-bottom:none; padding-bottom:0;">Selected Research</div>
      <a href="{{ '/research/' | relative_url }}" class="section-link">All Research →</a>
    </div>
    <div style="border-top:1px solid var(--border); margin:10px 0 2px;"></div>
    <div class="pub-list">
      <div class="pub-entry">
        <img class="pub-thumb" src="https://placehold.co/120x72" alt="LLM safety">
        <div class="pub-body">
          <div class="pub-title">Token Safety</div>
          <div class="pub-authors"><strong>Gaeun Ji</strong></div>
          <div class="pub-meta"><span class="venue-badge preprint">Ongoing</span></div>
        </div>
      </div>
      
    </div>
  </section>

  <section>
    <div class="section-title">Education</div>
    <div class="edu-list">
      <div class="edu-entry">
        <div class="edu-school">Kyung Hee University</div>
        <div class="edu-degree">M.S. in Computer Science</div>
        <div class="edu-meta"> 2026.03 – Present</div>
      </div>  
      <div class="edu-entry">
        <div class="edu-school">Kyung Hee University</div>
        <div class="edu-degree">B.S. in Economics and Computer Science </div>
        <div class="edu-meta"> 2020.03 – 2026.02 </div>
      </div>
    </div>
  </section>

  <section>
    <div class="section-title">Honors &amp; Awards</div>
    <div class="honor-list">
      <div class="honor-entry">
        <div>
          <div class="honor-title">Academic Excellence Award</div>
          <div class="honor-sub">Awarded by Kyung Hee University for top academic performance</div>
        </div>
        <div class="honor-date">Nov. 2022</div>
      </div>

    </div>

  </section>
</div>
