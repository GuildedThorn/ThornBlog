import { defineConfig } from 'vitepress'
import { genFeed } from "./feed";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ThornBlog",
  description: "My personal blog where I post all my updates, work and tips",
  head: [
    ["link", { rel: "icon", type: "image/ico", href: "/images/favicon.ico" }],
  ],

  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/GuildedThorn' },
      { icon: 'github', link: 'https://github.com/GuildedThorn' },
      { icon: 'discord', link: 'https://discord.com/users/654849939175768074' },
      { icon: "youtube", link: "https://www.youtube.com/@guildedthorn"}
    ],
    search: {
      provider: 'local'
    },
      footer: {
      message: 'Written with love',
      copyright: 'Copyright © 2024 - Present Jamie Duddleston'
    },
  },
  sitemap: {
    hostname: 'https://blog.guildedthorn.com'
  },
  buildEnd: genFeed

})
