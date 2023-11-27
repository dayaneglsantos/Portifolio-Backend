import type { Schema, Attribute } from '@strapi/strapi';

export interface MenuMenuLinks extends Schema.Component {
  collectionName: 'components_menu_menu_links';
  info: {
    displayName: 'menu_link';
    description: '';
  };
  attributes: {
    link_text: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface MenuMenu extends Schema.Component {
  collectionName: 'components_menu_menus';
  info: {
    displayName: 'Menu';
    icon: '';
    description: '';
  };
  attributes: {
    logo_link: Attribute.String & Attribute.Required;
    logo_img: Attribute.Media & Attribute.Required;
    menu_link: Attribute.Component<'menu.menu-links', true> &
      Attribute.Required;
  };
}

export interface SectionMediaLinks extends Schema.Component {
  collectionName: 'components_section_media_links';
  info: {
    displayName: 'media_links';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    media_logo: Attribute.Media & Attribute.Required;
    media_name: Attribute.String & Attribute.Required;
    url_color: Attribute.Media & Attribute.Required;
  };
}

export interface SectionPresentationSection extends Schema.Component {
  collectionName: 'components_section_presentation_sections';
  info: {
    displayName: 'presentation_section';
    description: '';
  };
  attributes: {
    section_title: Attribute.String & Attribute.Required;
    profile_img: Attribute.Media & Attribute.Required;
    presentation_text: Attribute.Text & Attribute.Required;
    location: Attribute.String & Attribute.Required;
  };
}

export interface SectionProject extends Schema.Component {
  collectionName: 'components_section_projects';
  info: {
    displayName: 'project';
    description: '';
  };
  attributes: {
    project_img: Attribute.Media & Attribute.Required;
    project_title: Attribute.String & Attribute.Required;
    project_description: Attribute.Text & Attribute.Required;
    repository_url: Attribute.String & Attribute.Required;
    site_url: Attribute.String & Attribute.Required;
  };
}

export interface SectionProjectsSection extends Schema.Component {
  collectionName: 'components_section_projects_sections';
  info: {
    displayName: 'Projects_section';
    description: '';
  };
  attributes: {
    project: Attribute.Component<'section.project', true> & Attribute.Required;
    section_title: Attribute.String & Attribute.Required;
  };
}

export interface SectionSection extends Schema.Component {
  collectionName: 'components_section_sections';
  info: {
    displayName: 'Initial_section';
    description: '';
  };
  attributes: {
    name_img: Attribute.Media & Attribute.Required;
    media_links: Attribute.Component<'section.media-links', true> &
      Attribute.Required;
    main_img: Attribute.Media & Attribute.Required;
    section_title: Attribute.String & Attribute.Required;
  };
}

export interface SectionSkillsSection extends Schema.Component {
  collectionName: 'components_section_skills_sections';
  info: {
    displayName: 'Skills_section';
  };
  attributes: {
    section_title: Attribute.String & Attribute.Required;
    logo: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'menu.menu-links': MenuMenuLinks;
      'menu.menu': MenuMenu;
      'section.media-links': SectionMediaLinks;
      'section.presentation-section': SectionPresentationSection;
      'section.project': SectionProject;
      'section.projects-section': SectionProjectsSection;
      'section.section': SectionSection;
      'section.skills-section': SectionSkillsSection;
    }
  }
}
