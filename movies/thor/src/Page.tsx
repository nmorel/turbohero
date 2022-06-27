import {heroes} from './heroes'

export function Page() {
  return (
    <article>
      <header>
        <h1>Thor (2011)</h1>
      </header>
      <section>
        <a
          href="https://en.wikipedia.org/wiki/Thor_(film)"
          target="_blank"
          rel="noopeneer noreferrer"
        >
          <img src="https://upload.wikimedia.org/wikipedia/en/9/95/Thor_%28film%29_poster.jpg" />
        </a>
      </section>
      <section>
        <p>
          Thor is a 2011 American superhero film based on the Marvel Comics character of the same
          name. Produced by Marvel Studios and distributed by Paramount Pictures, it is the fourth
          film in the Marvel Cinematic Universe (MCU). It was directed by Kenneth Branagh, written
          by the writing team of Ashley Edward Miller and Zack Stentz along with Don Payne, and
          stars Chris Hemsworth as the title character alongside Natalie Portman, Tom Hiddleston,
          Stellan Skarsgård, Colm Feore, Ray Stevenson, Idris Elba, Kat Dennings, Rene Russo, and
          Anthony Hopkins. After reigniting a dormant war, Thor is banished from Asgard to Earth,
          stripped of his powers and his hammer Mjölnir. As his brother Loki (Hiddleston) plots to
          take the Asgardian throne, Thor must prove himself worthy.
        </p>
        <p>
          Sam Raimi first developed the concept of a film adaptation based on Thor in 1991, but soon
          abandoned the project, leaving it in &quot;development hell&quot; for several years.
          During this time, the rights were picked up by various film studios until Marvel signed
          Mark Protosevich to develop the project in 2006, and planned to finance and release it
          through Paramount. Matthew Vaughn was assigned to direct the film for a tentative 2010
          release. However, after Vaughn was released from his holding deal in 2008, Branagh was
          approached and the film&apos;s release was rescheduled to 2011. The main characters were
          cast in 2009, and principal photography took place in California and New Mexico from
          January to May 2010. The film was converted to 3D in post-production.
        </p>
        <p>
          Thor premiered in Sydney on April 17, 2011, and was released in the United States on May
          6, as part of Phase One of the MCU. The film was a financial success, earning $449.3
          million worldwide. Critics praised the performances, characters, themes and special
          effects but criticized the plot. Two sequels have been released: Thor: The Dark World
          (2013) and Thor: Ragnarok (2017). A fourth film, Thor: Love and Thunder, is scheduled to
          be released in July 2022.
        </p>
      </section>
      <section>
        <h2>Heroes</h2>
        <ul style={{listStyle: 'none'}}>
          {Object.entries(heroes).map(([key, Comp]) => (
            <li key={key}>
              <Comp />
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
