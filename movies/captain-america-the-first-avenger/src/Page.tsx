import {heroes} from './heroes'

export function Page() {
  return (
    <article>
      <header>
        <h1>Captain America: The First Avenger (2011)</h1>
      </header>
      <section>
        <a
          href="https://en.wikipedia.org/wiki/Captain_America:_The_First_Avenger"
          target="_blank"
          rel="noopeneer noreferrer"
        >
          <img src="https://upload.wikimedia.org/wikipedia/en/3/37/Captain_America_The_First_Avenger_poster.jpg" />
        </a>
      </section>
      <section>
        <p>
          Captain America: The First Avenger is a 2011 American superhero film based on the Marvel
          Comics character Captain America. Produced by Marvel Studios and distributed by Paramount
          Pictures, it is the fifth film in the Marvel Cinematic Universe (MCU). The film was
          directed by Joe Johnston, written by Christopher Markus and Stephen McFeely, and stars
          Chris Evans as Steve Rogers / Captain America alongside Tommy Lee Jones, Hugo Weaving,
          Hayley Atwell, Sebastian Stan, Dominic Cooper, Neal McDonough, Derek Luke, and Stanley
          Tucci. During World War II, Steve Rogers, a frail man, is transformed into the
          super-soldier Captain America and must stop the Red Skull (Weaving) from using the
          Tesseract as an energy source for world domination.
        </p>
        <p>
          The film began as a concept in 1997 and was scheduled for distribution by Artisan
          Entertainment. However, a lawsuit disrupted the project and was not settled until
          September 2003. In 2005, Marvel Studios received a loan from Merrill Lynch, and planned to
          finance and release the film through Paramount Pictures. Directors Jon Favreau and Louis
          Leterrier were interested in directing the project before Johnston was approached in 2008.
          The principal characters were cast between March and June 2010. Production began in June,
          and filming took place in London, Manchester, Caerwent, Liverpool, and Los Angeles.
          Several different techniques were used by the visual effects company Lola to create the
          physical appearance of the character before he becomes Captain America.
        </p>
        <p>
          Captain America: The First Avenger premiered at the El Capitan Theatre on July 19, 2011,
          and was released in the United States on July 22, as part of Phase One of the MCU. The
          film was commercially successful, grossing over $370 million worldwide. Critics
          particularly praised Evans&apos; performance, the film&apos;s depiction of its 1940s time
          period, and Johnston&apos;s direction. Two sequels have been released: Captain America:
          The Winter Soldier (2014) and Captain America: Civil War (2016).
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
