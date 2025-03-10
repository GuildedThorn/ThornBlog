import path from 'path'
import { writeFileSync } from 'fs'
import { Feed } from 'feed'
import { createContentLoader, type SiteConfig } from 'vitepress'

const baseUrl = `https://blog.guildedthorn.com`

export async function genFeed(config: SiteConfig) {
    const feed = new Feed({
        title: 'Thorn Blog',
        description: 'The official blog for GuildedThorn',
        id: baseUrl,
        link: baseUrl,
        language: 'en',
        image: 'https://avatars.githubusercontent.com/u/34840091?v=4',
        copyright:
            'Copyright (c) GuildedThorn'
    })

    const posts = await createContentLoader('/posts/*.md', {
        excerpt: true,
        render: true
    }).load()

    posts.sort(
        (a, b) =>
            +new Date(b.frontmatter.date as string) -
            +new Date(a.frontmatter.date as string)
    )

    for (const { url, excerpt, frontmatter, html } of posts) {
        feed.addItem({
            title: frontmatter.title,
            id: `${baseUrl}${url}`,
            link: `${baseUrl}${url}`,
            description: excerpt,
            content: html,
            author: [
                {
                    name: "GuildedThorn",
                }
            ],
            date: frontmatter.date
        })
    }

    writeFileSync(path.join(config.outDir, 'feed.xml'), feed.rss2())
}